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

{{#if (eq challengeTitle "Two Sum")}}
Here is a reference solution for the "Two Sum" problem in JavaScript for your guidance:
\`\`\`javascript
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
\`\`\`
Use this example to correctly interpret and evaluate the user's submission for this specific problem.
{{/if}}
{{#if (eq challengeTitle "FizzBuzz Basics")}}
Here is a reference solution for "FizzBuzz Basics":
\`\`\`javascript
function solve(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n;
}
// For input n=15, the output is "FizzBuzz". The user's code should return this string.
\`\`\`
{{/if}}
{{#if (eq challengeTitle "String Reversal")}}
Here is a reference solution for "String Reversal":
\`\`\`javascript
function solve(s) {
  return s.split('').reverse().join('');
}
// For input "coder", the output is "redoc". The user's code should return this string.
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Simple Sum")}}
Here is a reference solution for "Simple Sum":
\`\`\`javascript
function solve() {
  return 2 + 7 + 11;
}
// The function should return 20.
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Modulo Master")}}
Here is a reference solution for "Modulo Master":
\`\`\`javascript
function solve() {
  return 10 % 3;
}
// The function should return 1.
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Constant Question")}}
Here is a reference solution for "Constant Question":
\`\`\`javascript
function solve() {
  return "const";
}
// The function should return the string "const".
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Exponent Challenge")}}
Here is a reference solution for "Exponent Challenge":
\`\`\`javascript
function solve() {
  return 2 ** 4;
}
// The function should return 16.
\`\`\`
{{/if}}
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
