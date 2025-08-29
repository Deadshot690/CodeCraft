'use server';

/**
 * @fileOverview AI Code Assistant flow that provides hints and explanations for coding problems.
 *
 * - aiCodeAssistant - A function that provides AI assistance for coding problems.
 * - AICodeAssistantInput - The input type for the aiCodeAssistant function.
 * - AICodeAssistantOutput - The return type for the aiCodeAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AICodeAssistantInputSchema = z.object({
  code: z.string().describe('The code snippet the student is working on.'),
  problemDescription: z.string().describe('The description of the coding problem.'),
  studentLevel: z
    .enum(['Beginner', 'Intermediate', 'Advanced'])
    .describe('The student\u2019s coding proficiency level.'),
});
export type AICodeAssistantInput = z.infer<typeof AICodeAssistantInputSchema>;

const AICodeAssistantOutputSchema = z.object({
  hint: z.string().describe('A helpful hint to guide the student towards the solution.'),
  explanation:
    z.string().describe('A detailed explanation of the concepts involved in the problem.'),
});
export type AICodeAssistantOutput = z.infer<typeof AICodeAssistantOutputSchema>;

export async function aiCodeAssistant(input: AICodeAssistantInput): Promise<AICodeAssistantOutput> {
  return aiCodeAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiCodeAssistantPrompt',
  input: {schema: AICodeAssistantInputSchema},
  output: {schema: AICodeAssistantOutputSchema},
  prompt: 'You are an AI coding tutor helping a student learn to code.\n\nThe student is working on the following problem:\n\nProblem Description: {{{problemDescription}}}\n\nThe student\'s code so far:\n\n```\n{{{code}}}\n```\n\nThe student is at a {{{studentLevel}}} level.\n\nProvide a hint to guide the student without giving away the answer, and explain the relevant concepts to help the student understand the problem better. Focus on one aspect of the problem at a time.\n',
});

const aiCodeAssistantFlow = ai.defineFlow(
  {
    name: 'aiCodeAssistantFlow',
    inputSchema: AICodeAssistantInputSchema,
    outputSchema: AICodeAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
