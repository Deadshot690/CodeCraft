// @ts-nocheck
'use server';

import { aiCodeAssistant, type AICodeAssistantInput } from '@/ai/flows/ai-code-assistant';
import { runCode, type RunCodeInput, type RunCodeOutput } from '@/ai/flows/run-code-flow';
import { monsterTaunt } from '@/ai/flows/monster-taunt-flow';
import type { MonsterTauntInput } from '@/ai/schemas/monster-taunt-schema';
import { z } from 'zod';

const assistantSchema = z.object({
  code: z.string().min(10, { message: "Please provide a code snippet of at least 10 characters." }),
  problemDescription: z.string().min(20, { message: "Problem description should be at least 20 characters long." }),
  studentLevel: z.enum(['Beginner', 'Intermediate', 'Advanced']),
});

type AssistantState = {
  formErrors?: {
    code?: string[];
    problemDescription?: string[];
    studentLevel?: string[];
  };
  message?: string;
  hint?: string;
  explanation?: string;
};

export async function getAIAssistance(
  prevState: AssistantState,
  formData: FormData
): Promise<AssistantState> {
  const validatedFields = assistantSchema.safeParse({
    code: formData.get('code'),
    problemDescription: formData.get('problemDescription'),
    studentLevel: formData.get('studentLevel'),
  });

  if (!validatedFields.success) {
    return {
      formErrors: validatedFields.error.flatten().fieldErrors,
      message: 'There was an error with your submission. Please check the fields.',
    };
  }

  try {
    const result = await aiCodeAssistant(validatedFields.data as AICodeAssistantInput);
    if (!result.hint || !result.explanation) {
       return { message: 'The AI assistant could not provide a hint or explanation for this problem. Please try rephrasing.' };
    }
    return { hint: result.hint, explanation: result.explanation };
  } catch (error) {
    console.error('AI Code Assistant Error:', error);
    return { message: 'An unexpected error occurred while contacting the AI assistant. Please try again later.' };
  }
}


const runCodeSchema = z.object({
  code: z.string(),
  language: z.string(),
  challengeTitle: z.string(),
  testCases: z.string(),
});

type RunCodeState = {
    formErrors?: {
        code?: string[];
        language?: string[];
        challengeTitle?: string[];
        testCases?: string[];
    };
    message?: string;
    results?: RunCodeOutput['results'];
};


export async function runTestAction(
    prevState: RunCodeState,
    formData: FormData
): Promise<RunCodeState> {
    const validatedFields = runCodeSchema.safeParse({
        code: formData.get('code'),
        language: formData.get('language'),
        challengeTitle: formData.get('challengeTitle'),
        testCases: formData.get('testCases'),
    });

    if (!validatedFields.success) {
        return {
            formErrors: validatedFields.error.flatten().fieldErrors,
            message: 'There was an error with your submission. Please check the fields.',
        };
    }

    try {
        const result = await runCode(validatedFields.data as RunCodeInput);
        return { results: result.results };
    } catch (error) {
        console.error('Run Code Error:', error);
        return { message: 'An unexpected error occurred while running the code. Please try again later.' };
    }
}


export async function submitAction(
    prevState: RunCodeState,
    formData: FormData
): Promise<RunCodeState> {
    const validatedFields = runCodeSchema.safeParse({
        code: formData.get('code'),
        language: formData.get('language'),
        challengeTitle: formData.get('challengeTitle'),
        testCases: formData.get('testCases'),
    });

    if (!validatedFields.success) {
        return {
            formErrors: validatedFields.error.flatten().fieldErrors,
            message: 'There was an error with your submission. Please check the fields.',
        };
    }

    try {
        const result = await runCode(validatedFields.data as RunCodeInput);
        return { results: result.results };
    } catch (error) {
        console.error('Run Code Error:', error);
        return { message: 'An unexpected error occurred while running the code. Please try again later.' };
    }
}

export async function getMonsterTauntAction(input: MonsterTauntInput): Promise<string> {
    try {
        const result = await monsterTaunt(input);
        return result.taunt;
    } catch (error) {
        console.error('Monster Taunt Error:', error);
        return "Grr... my brain isn't working. Lucky you.";
    }
}


export async function evaluateAnswerAction(
    challengeTitle: string,
    playerAnswer: string,
    correctAnswer: string
): Promise<boolean> {
    try {
        const testCase = {
            input: 'evaluate',
            expectedOutput: correctAnswer,
        };

        const result = await runCode({
            code: `// The user's answer is: ${playerAnswer}\n// You should treat this as a direct answer to the question.\n// Does this answer mean the same thing as "${correctAnswer}"?\n// If it is correct, output "${correctAnswer}". Otherwise, output something incorrect.\n\nfunction solve() { return "${playerAnswer}"; }\nconsole.log(solve());`,
            language: 'javascript',
            challengeTitle,
            testCases: JSON.stringify([testCase])
        });

        if (result.results && result.results.length > 0) {
            return result.results[0].passed;
        }
        return false;
    } catch (error) {
        console.error('Evaluate Answer Error:', error);
        // Fallback to simple check on error
        return playerAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();
    }
}
