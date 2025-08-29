'use server';
/**
 * @fileOverview An AI flow to generate monster taunts for the mini-game.
 *
 * - monsterTaunt - Generates a taunt for a monster based on the game situation.
 * - MonsterTauntInput - The input type for the monsterTaunt function.
 * - MonsterTauntOutput - The return type for the monsterTaunt function.
 */

import {ai} from '@/ai/genkit';
import {
  MonsterTauntInput,
  MonsterTauntInputSchema,
  MonsterTauntOutput,
  MonsterTauntOutputSchema,
} from '@/ai/schemas/monster-taunt-schema';

export type {MonsterTauntInput, MonsterTauntOutput};

export async function monsterTaunt(input: MonsterTauntInput): Promise<MonsterTauntOutput> {
  return monsterTauntFlow(input);
}

const prompt = ai.definePrompt({
  name: 'monsterTauntPrompt',
  input: {schema: MonsterTauntInputSchema},
  output: {schema: MonsterTauntOutputSchema},
  prompt: `You are a menacing but slightly witty monster in a coding game. Your name is {{{monsterName}}}.
A player is trying to defeat you by solving a coding problem.
Generate a short, flavorful taunt based on the player's last action.

Player's action: {{{playerAction}}}

If the action is 'start', generate a confident opening taunt.
If the action is 'correct', generate a taunt that sounds like you are hurt but still defiant.
If the action is 'incorrect', generate a taunt that mocks the player's failure.

Keep the taunt to one sentence.`,
});

const monsterTauntFlow = ai.defineFlow(
  {
    name: 'monsterTauntFlow',
    inputSchema: MonsterTauntInputSchema,
    outputSchema: MonsterTauntOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
