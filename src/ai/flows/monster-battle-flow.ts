'use server';
/**
 * @fileOverview A flow for generating trivia questions for the Monster Battle game.
 * 
 * - generateTrivia - A function that creates a coding trivia question.
 * - GenerateTriviaInput - The input type for the generateTrivia function.
 * - GenerateTriviaOutput - The return type for the generateTrivia function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateTriviaInputSchema = z.object({
  topic: z.string().describe("The programming topic for the question (e.g., 'JavaScript', 'Data Structures', 'Python')."),
  difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']).describe("The difficulty level of the question."),
});
export type GenerateTriviaInput = z.infer<typeof GenerateTriviaInputSchema>;

const GenerateTriviaOutputSchema = z.object({
    question: z.string().describe("The trivia question."),
    options: z.array(z.string()).describe("An array of 4 multiple-choice options."),
    correctAnswer: z.string().describe("The correct answer from the options."),
    explanation: z.string().describe("A brief explanation of why the answer is correct.")
});
export type GenerateTriviaOutput = z.infer<typeof GenerateTriviaOutputSchema>;

const prompt = ai.definePrompt({
  name: 'monsterBattleTriviaPrompt',
  input: { schema: GenerateTriviaInputSchema },
  output: { schema: GenerateTriviaOutputSchema },
  prompt: `You are a master programmer and a creative quiz designer for a game called "Monster Battle".
In this game, players fight monsters by answering coding trivia questions.

Your task is to generate one challenging but fair multiple-choice trivia question about the specified topic and difficulty.

**Topic:** {{{topic}}}
**Difficulty:** {{{difficulty}}}

**Requirements:**
1.  **Question:** The question must be clear, concise, and related to the topic.
2.  **Options:** Provide exactly 4 options. Three should be plausible but incorrect "distractors," and one must be the correct answer.
3.  **Correct Answer:** Clearly identify the correct option.
4.  **Explanation:** Provide a simple, clear explanation for why the correct answer is right.

Produce the output in the required JSON format.
`,
});

const generateTriviaFlow = ai.defineFlow(
  {
    name: 'generateTriviaFlow',
    inputSchema: GenerateTriviaInputSchema,
    outputSchema: GenerateTriviaOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function generateTrivia(input: GenerateTriviaInput): Promise<GenerateTriviaOutput> {
  return generateTriviaFlow(input);
}
