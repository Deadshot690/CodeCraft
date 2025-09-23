'use server';
/**
 * @fileOverview A flow for running and evaluating user-submitted code for coding challenges.
 * 
 * - runCode - A function that takes user code, language, and the task, then returns execution results.
 * - RunCodeInput - The input type for the runCode function.
 * - RunCodeOutput - The return type for the runCode function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import type { Task } from '@/lib/types';


// Zod schema for the Task object to be used in the flow.
const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.union([z.literal('Data Structures & Algorithms'), z.literal('Web Development'), z.literal('AI/ML'), z.literal('Cybersecurity')]),
  difficulty: z.union([z.literal('Beginner'), z.literal('Intermediate'), z.literal('Advanced'), z.literal('Expert')]),
  xp: z.number(),
  description: z.string(),
  starterCode: z.object({
    python: z.string(),
    javascript: z.string(),
    java: z.string(),
    cpp: z.string(),
  }),
  examples: z.array(z.object({
    input: z.string(),
    output: z.string(),
    explanation: z.string().optional(),
  })),
  constraints: z.array(z.string()),
});

const RunCodeInputSchema = z.object({
  code: z.string().describe("The user's code solution."),
  language: z.string().describe("The programming language of the code."),
  task: TaskSchema.describe("The task details, including examples for testing."),
});
export type RunCodeInput = z.infer<typeof RunCodeInputSchema>;

const RunCodeOutputSchema = z.object({
    output: z.string().describe("Simulated console output or runtime errors from the code execution."),
    testResults: z.array(z.object({
        testCase: z.string().describe("The input for the test case."),
        expected: z.string().describe("The expected output."),
        actual: z.string().describe("The actual output from the user's code."),
        success: z.boolean().describe("Whether the actual output matches the expected output."),
    })).describe("An array of results from running the code against the task's examples.")
});
export type RunCodeOutput = z.infer<typeof RunCodeOutputSchema>;


const prompt = ai.definePrompt({
  name: 'runCodePrompt',
  input: { schema: RunCodeInputSchema },
  output: { schema: RunCodeOutputSchema },
  prompt: `You are an expert code execution engine and programming challenge evaluator.
Your task is to simulate the execution of the user's code for a given programming challenge and evaluate it against the provided test cases.

**Challenge Details:**
- **Title:** {{{task.title}}}
- **Description:** {{{task.description}}}
- **Language:** {{{language}}}

**User's Code:**
'''{{{language}}}
{{{code}}}
'''

**Instructions:**
1.  **Simulate Execution:** "Run" the user's code mentally or using your internal tools.
2.  **Generate Console Output:** Produce a plausible console output. If the code has syntax errors, runtime errors, or is an infinite loop, the output should reflect that. For example: "SyntaxError: invalid syntax on line 5" or "TimeoutError: Code execution timed out.". If the code runs successfully and has print/log statements, show them.
3.  **Evaluate Test Cases:** For each example in the task, run the user's code with the provided input.
    - Compare the actual output from the user's code with the expected output.
    - Set the \`success\` flag to \`true\` if they match, and \`false\` otherwise. Be strict with the comparison.
    - Populate the \`testResults\` array with the input, expected output, actual output, and success status for each test case.

**Task Examples for Testing:**
{{#each task.examples}}
- **Input:** {{{this.input}}}
- **Expected Output:** {{{this.output}}}
{{/each}}

Produce the output in the required JSON format. Do not add any commentary outside of the JSON structure.`,
});

const runCodeFlow = ai.defineFlow(
  {
    name: 'runCodeFlow',
    inputSchema: RunCodeInputSchema,
    outputSchema: RunCodeOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function runCode(input: RunCodeInput): Promise<RunCodeOutput> {
  return runCodeFlow(input);
}
