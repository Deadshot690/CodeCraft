
'use server';
/**
 * @fileOverview A flow for evaluating a user's bug fix for a code snippet.
 * 
 * - debugCode - A function that takes user's code and the original challenge, then returns whether the fix is correct.
 * - DebugCodeInput - The input type for the debugCode function.
 * - DebugCodeOutput - The return type for the debugCode function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import type { DebugChallenge } from '@/lib/types';


// Zod schema for the DebugChallenge object to be used in the flow.
const DebugChallengeSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  language: z.union([z.literal('python'), z.literal('javascript'), z.literal('java'), z.literal('cpp')]),
  difficulty: z.union([z.literal('Beginner'), z.literal('Intermediate'), z.literal('Advanced')]),
  xp: z.number(),
  buggyCode: z.string(),
  fixedCode: z.string(),
});


const DebugCodeInputSchema = z.object({
  userCode: z.string().describe("The user's attempted fix for the buggy code."),
  challenge: DebugChallengeSchema.describe("The original debug challenge, including the correct solution for comparison."),
});
export type DebugCodeInput = z.infer<typeof DebugCodeInputSchema>;

const DebugCodeOutputSchema = z.object({
    isCorrect: z.boolean().describe("Whether the user's code correctly fixes the bug."),
    explanation: z.string().describe("A brief explanation of why the user's code is correct or incorrect. If incorrect, provide a hint.")
});
export type DebugCodeOutput = z.infer<typeof DebugCodeOutputSchema>;


const prompt = ai.definePrompt({
  name: 'debugCodePrompt',
  input: { schema: DebugCodeInputSchema },
  output: { schema: DebugCodeOutputSchema },
  prompt: `You are an expert code reviewer and debugger. Your task is to evaluate a user's attempt to fix a piece of buggy code.

**Challenge Description:**
{{{challenge.description}}}

**Original Buggy Code ({{{challenge.language}}}):**
'''
{{{challenge.buggyCode}}}
'''

**Correctly Fixed Code (for your reference):**
'''
{{{challenge.fixedCode}}}
'''

**User's Submitted Code:**
'''
{{{userCode}}}
'''

**Instructions:**
1.  **Analyze the User's Code:** Compare the user's submitted code to the correctly fixed code.
2.  **Determine Correctness:** The user's code does not need to be an exact match to the reference solution. It is correct if it solves the underlying bug described in the challenge. For example, \`total = total + num\` is the same as \`total += num\`. Minor stylistic differences are acceptable.
3.  **Set \`isCorrect\`:** Set to \`true\` if the user's code fixes the bug, otherwise set to \`false\`.
4.  **Provide Explanation:** 
    *   If correct, provide a short, encouraging explanation of what they did right (e.g., "Great job! You correctly used the 'return' statement to output the value.").
    *   If incorrect, explain why it's still wrong and provide a small hint to guide them toward the solution without giving away the answer (e.g., "Your code is close, but you're not updating the 'total' variable inside the loop. Make sure the value is being assigned correctly.").

Produce the output in the required JSON format.`,
});

const debugCodeFlow = ai.defineFlow(
  {
    name: 'debugCodeFlow',
    inputSchema: DebugCodeInputSchema,
    outputSchema: DebugCodeOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function debugCode(input: DebugCodeInput): Promise<DebugCodeOutput> {
  return debugCodeFlow(input);
}
