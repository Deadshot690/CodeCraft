
'use server';

import { aiCodeAssistant, type AICodeAssistantInput } from '@/ai/flows/ai-code-assistant';
import { runCode } from '@/ai/flows/run-code-flow';
import {z} from 'zod';
import { getChallengeReferenceSolution } from '@/lib/challenges';
import type { RunCodeInput, RunCodeOutput } from '@/lib/code-execution-types';
import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { revalidatePath } from 'next/cache';

// This is not ideal, but it's a quick fix to avoid the "use server" export error.
// A better long-term solution would be a separate, non-"use server" file for admin/server initializations.
const firebaseConfig = {
  projectId: 'codecraft-quest-2rdg9',
  appId: '1:335794390716:web:7dd32e52eebcd70ac9f2b9',
  storageBucket: 'codecraft-quest-2rdg9.firebasestorage.app',
  apiKey: 'AIzaSyBteDYnffWafda7KRL3MeS8cAIC8Zapkhk',
  authDomain: 'codecraft-quest-2rdg9.firebaseapp.com',
  messagingSenderId: '335794390716',
};

const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);


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

// Extend the schema for server-side validation to include challengeId for fetching the reference solution
const RunCodeActionSchema = z.object({
  code: z.string(),
  language: z.string(),
  challengeTitle: z.string(),
  challengeId: z.string(), // Added to fetch the challenge details
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
    // In a real app, you'd fetch this from a DB. For now, we filter the imported array.
    // This is not ideal for performance if the array is large.
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


const AuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

type AuthState = {
  message: string;
};

export async function signUpWithEmail(
  prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  const validatedFields = AuthSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.password?.[0] || 'Invalid fields.',
    };
  }
  const { email, password } = validatedFields.data;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    revalidatePath('/');
    return { message: 'Success' };
  } catch (e: any) {
    return { message: e.message };
  }
}

export async function signInWithEmail(
  prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  const validatedFields = AuthSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

   if (!validatedFields.success) {
    return {
      message: 'Invalid email or password.',
    };
  }

  const { email, password } = validatedFields.data;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    revalidatePath('/');
    return { message: 'Success' };
  } catch (e: any) {
    return { message: 'Invalid email or password.' };
  }
}

export async function signOut() {
  await auth.signOut();
  revalidatePath('/');
}
