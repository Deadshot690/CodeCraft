
'use server';

import { aiCodeAssistant, type AICodeAssistantInput } from '@/ai/flows/ai-code-assistant';
import { runCode } from '@/ai/flows/run-code-flow';
import {z} from 'zod';
import { getChallengeReferenceSolution } from '@/lib/challenges';
import type { RunCodeInput, RunCodeOutput } from '@/lib/code-execution-types';
import { getAuth } from 'firebase-admin/auth';
import { serverApp } from '@/lib/firebase/server';


// Auth Actions
const authSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long." }),
    username: z.string().optional(),
});

export type AuthState = {
  formErrors?: {
    email?: string[];
    password?: string[];
    username?: string[];
  };
  message?: string;
};

export async function signUpWithEmail(
  prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  // This server action is now ONLY for validation.
  // The client will handle the actual account creation.
  const validatedFields = authSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      formErrors: validatedFields.error.flatten().fieldErrors,
      message: 'There was an error with your submission.',
    };
  }

  // We can add a server-side check here to see if the email already exists
  // This is a good practice to give instant feedback without a client-side Firebase call.
  try {
      await getAuth(serverApp).getUserByEmail(validatedFields.data.email);
      // If the above line doesn't throw, the user exists.
      return { message: 'An account with this email already exists.' };
  } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
          // This is the expected case for a new user. We can proceed.
          return { message: 'Success' };
      }
      // Handle other potential Firebase admin errors if necessary
      console.error('Admin SDK Error:', error);
      return { message: 'An unexpected server error occurred.' };
  }
}

export async function signInWithEmail(
  prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
    // Note: This action doesn't actually sign the user in on the server.
    // The client-side Firebase SDK handles the session.
    // This action's primary purpose is to validate the form data via server-side logic
    // before the client attempts the sign-in.
    const validatedFields = authSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return {
            formErrors: validatedFields.error.flatten().fieldErrors,
            message: 'Invalid credentials.',
        };
    }

    return { message: 'Success' };
}


// AI Assistant Action
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

// Code Execution Actions
const RunCodeActionSchema = z.object({
  code: z.string(),
  language: z.string(),
  challengeTitle: z.string(),
  challengeId: z.string(),
  testCases: z.string(),
});

type RunCodeState = {
    formErrors?: z.ZodError<RunCodeInput>['formErrors']['fieldErrors'];
    message?: string;
    results?: RunCodeOutput['results'];
};

async function handleCodeExecution(formData: FormData): Promise<RunCodeState> {
    const validatedFields = RunCodeActionSchema.safeParse({
        code: formData.get('code'),
        language: formData.get('language'),
        challengeTitle: formData.get('challengeTitle'),
        challengeId: formData.get('challengeId'),
        testCases: formData.get('testCases'),
    });
    
    if (!validatedFields.success) {
        return {
            formErrors: validatedFields.error.flatten().fieldErrors,
            message: 'There was an error with your submission. Please check the fields.',
        };
    }
    
    const { challengeId, ...runCodeInput } = validatedFields.data;

    const referenceSolution = getChallengeReferenceSolution(challengeId);
    if (!referenceSolution) {
        return { message: 'Challenge reference solution not found.' };
    }

    try {
        const result = await runCode({
            ...runCodeInput,
            referenceSolution,
        });
        return { results: result.results };
    } catch (error) {
        console.error('Run Code Error:', error);
        return { message: 'An unexpected error occurred while running the code. Please try again later.' };
    }
}

export async function runTestAction(
    prevState: RunCodeState,
    formData: FormData
): Promise<RunCodeState> {
    return handleCodeExecution(formData);
}

export async function submitAction(
    prevState: RunCodeState,
    formData: FormData
): Promise<RunCodeState> {
    return handleCodeExecution(formData);
}

// Monster Battle Action
const evaluateAnswerSchema = z.object({
  challengeId: z.string(),
  answer: z.string().min(1, { message: "Answer cannot be empty." }),
});

type EvaluateAnswerState = {
    formErrors?: {
        answer?: string[];
    };
    message?: string;
    isCorrect?: boolean | null;
    correctAnswer?: string;
};

export async function evaluateAnswerAction(
    prevState: EvaluateAnswerState,
    formData: FormData
): Promise<EvaluateAnswerState> {
    const validatedFields = evaluateAnswerSchema.safeParse({
        challengeId: formData.get('challengeId'),
        answer: formData.get('answer'),
    });

    if (!validatedFields.success) {
        return {
            formErrors: validatedFields.error.flatten().fieldErrors,
            message: 'There was an error with your submission.',
            isCorrect: null,
        };
    }

    const { challengeId, answer } = validatedFields.data;
    const { challenges } = await import('@/lib/battle-challenges');
    const challenge = challenges.find(c => c.id === challengeId);

    if (!challenge) {
        return { message: "Challenge not found.", isCorrect: null };
    }
    
    const isCorrect = answer.trim().toLowerCase() === challenge.answer.toLowerCase();

    return {
        isCorrect: isCorrect,
        correctAnswer: challenge.answer,
    };
}
