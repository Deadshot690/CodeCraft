import {z} from 'zod';

export const RunCodeInputSchema = z.object({
  code: z.string().describe("The user's code solution."),
  language: z
    .string()
    .describe(
      'The programming language of the code (e.g., javascript, python).'
    ),
  challengeTitle: z.string().describe('The title of the coding challenge.'),
  testCases: z
    .string()
    .describe(
      'A JSON string of an array of test cases, where each case has `input` and `expectedOutput`.'
    ),
});
export type RunCodeInput = z.infer<typeof RunCodeInputSchema>;

const TestCaseResultSchema = z.object({
  input: z.any().describe('The input for the test case.'),
  expectedOutput: z.any().describe('The expected output for the test case.'),
  actualOutput: z.any().describe("The actual output from the user's code."),
  passed: z.boolean().describe('Whether the code passed the test case.'),
  logs: z
    .string()
    .optional()
    .describe('Any console logs or standard output generated.'),
  error: z.string().optional().describe('Any error messages generated.'),
});

export const RunCodeOutputSchema = z.object({
  results: z
    .array(TestCaseResultSchema)
    .describe('An array of results for each test case.'),
});
export type RunCodeOutput = z.infer<typeof RunCodeOutputSchema>;
