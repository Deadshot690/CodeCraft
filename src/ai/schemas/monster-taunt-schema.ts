/**
 * @fileOverview Zod schemas for the monster taunt AI flow.
 *
 * This file defines the data structures for the inputs and outputs
 * of the monster taunt generation flow. Separating schemas ensures
 * that they can be imported into both client and server components
 * without violating the "use server" directive.
 */

import {z} from 'genkit';

export const MonsterTauntInputSchema = z.object({
  monsterName: z.string().describe('The name of the monster.'),
  playerAction: z
    .enum(['correct', 'incorrect', 'start'])
    .describe('The last action the player took.'),
});
export type MonsterTauntInput = z.infer<typeof MonsterTauntInputSchema>;

export const MonsterTauntOutputSchema = z.object({
  taunt: z.string().describe('The generated taunt from the monster.'),
});
export type MonsterTauntOutput = z.infer<typeof MonsterTauntOutputSchema>;
