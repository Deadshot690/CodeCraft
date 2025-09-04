
'use server';

/**
 * @fileOverview A flow for simulating code execution and testing against test cases.
 *
 * - runCode - Simulates running user-provided code against a set of test cases.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import type { RunCodeInput, RunCodeOutput } from '@/lib/code-execution-types';
import { RunCodeInputSchema, RunCodeOutputSchema } from '@/lib/code-execution-types';


const runCodePrompt = ai.definePrompt({
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

For your reference, here is a correct solution for this problem in JavaScript. Use this to guide your evaluation.
Reference Solution:
\`\`\`javascript
{{{referenceSolution}}}
\`\`\`

Please execute the user's code against each test case provided.
For each test case, determine the following:
1.  **Actual Output**: What the user's code returns or produces for the given input.
2.  **Passed**: A boolean indicating if the 'Actual Output' strictly matches the 'Expected Output'.
3.  **Logs**: Any output printed to the console or standard output during execution.
4.  **Error**: Any runtime or compilation errors that occur. If the code runs without error, this should be null.

Return the results as a JSON object that adheres to the output schema. Ensure that the 'actualOutput' is in the same data type as the 'expectedOutput' for accurate comparison.
If the user's code is incomplete or contains syntax errors that prevent execution, set the 'error' field for each test case to a descriptive message (e.g., "Syntax Error: Incomplete function"). Do not try to complete the code.
`,
});

export async function runCode(input: RunCodeInput): Promise<RunCodeOutput> {
    const { output } = await runCodePrompt(input);
    if (!output) {
      // This case should ideally not be reached if the prompt is well-defined
      // and the model behaves as expected.
      return {
        results: [],
      };
    }
    return output;
  }
