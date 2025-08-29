'use server';

/**
 * @fileOverview A flow for simulating code execution and testing against test cases.
 *
 * - runCode - Simulates running user-provided code against a set of test cases.
 * - RunCodeInput - The input type for the runCode function.
 * - RunCodeOutput - The return type for the runCode function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const RunCodeInputSchema = z.object({
  code: z.string().describe('The user\'s code solution.'),
  language: z.string().describe('The programming language of the code (e.g., javascript, python).'),
  challengeTitle: z.string().describe('The title of the coding challenge.'),
  testCases: z.string().describe('A JSON string of an array of test cases, where each case has `input` and `expectedOutput`.'),
});
export type RunCodeInput = z.infer<typeof RunCodeInputSchema>;

const TestCaseResultSchema = z.object({
  input: z.any().describe('The input for the test case.'),
  expectedOutput: z.any().describe('The expected output for the test case.'),
  actualOutput: z.any().describe('The actual output from the user\'s code.'),
  passed: z.boolean().describe('Whether the code passed the test case.'),
  logs: z.string().optional().describe('Any console logs or standard output generated.'),
  error: z.string().optional().describe('Any error messages generated.'),
});

const RunCodeOutputSchema = z.object({
  results: z.array(TestCaseResultSchema).describe('An array of results for each test case.'),
});
export type RunCodeOutput = z.infer<typeof RunCodeOutputSchema>;


export async function runCode(input: RunCodeInput): Promise<RunCodeOutput> {
  return runCodeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'runCodePrompt',
  input: { schema: RunCodeInputSchema },
  output: { schema: RunCodeOutputSchema },
  prompt: `You are an expert code execution engine and programming contest judge.
Your task is to simulate the execution of a user's code for a given programming challenge and evaluate it against a series of test cases.

Challenge: {{{challengeTitle}}}
Language: {{{language}}}

User's Code:
\`\`\`{{{language}}}
{{{code}}}
\`\`\`

Test Cases (JSON):
{{{testCases}}}

Please execute the code against each test case provided.
For each test case, determine the following:
1.  **Actual Output**: What the user's code returns or produces for the given input.
2.  **Passed**: A boolean indicating if the 'Actual Output' strictly matches the 'Expected Output'.
3.  **Logs**: Any output printed to the console or standard output during execution.
4.  **Error**: Any runtime or compilation errors that occur. If the code runs without error, this should be null.

Return the results as a JSON object that adheres to the output schema. Ensure that the 'actualOutput' is in the same data type as the 'expectedOutput' for accurate comparison.
`,
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
