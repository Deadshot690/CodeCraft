
'use server';

import { aiCodeAssistant, type AICodeAssistantInput } from '@/ai/flows/ai-code-assistant';
import { runCode } from '@/ai/flows/run-code-flow';
import {z} from 'zod';
import { getChallenge, getChallengeReferenceSolution } from '@/lib/challenges';
import type { RunCodeInput, RunCodeOutput } from '@/lib/code-execution-types';
import { auth, db } from '@/lib/firebase';
import { adminDb } from '@/lib/firebase-admin';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, updateDoc, arrayUnion, getDoc, collection, getDocs, query, orderBy, runTransaction } from 'firebase/firestore';


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
  userId: z.string().optional().nullable(),
});

type RunCodeState = {
    formErrors?: z.ZodError<RunCodeInput>['formErrors']['fieldErrors'];
    message?: string;
    results?: RunCodeOutput['results'];
};

async function handleCodeExecution(formData: FormData, isSubmission: boolean): Promise<RunCodeState> {
    const validatedFields = RunCodeActionSchema.safeParse({
        code: formData.get('code'),
        language: formData.get('language'),
        challengeTitle: formData.get('challengeTitle'),
        challengeId: formData.get('challengeId'),
        userId: formData.get('userId'),
    });
    
    if (!validatedFields.success) {
        return {
            formErrors: validatedFields.error.flatten().fieldErrors,
            message: 'There was an error with your submission. Please check the fields.',
        };
    }
    
    const { challengeId, userId, ...runCodeInput } = validatedFields.data;

    const referenceSolution = getChallengeReferenceSolution(challengeId);
    if (!referenceSolution) {
        return { message: 'Challenge reference solution not found.' };
    }

    try {
        const result = await runCode({
            ...runCodeInput,
            referenceSolution,
        });

        const allPassed = result.results.length > 0 && result.results.every(r => r.passed);
        
        if (isSubmission && allPassed && userId) {
            const userRef = doc(db, 'users', userId);
            const challenge = getChallenge(challengeId);
            const xpGained = challenge?.difficulty === 'Easy' ? 100 : challenge?.difficulty === 'Medium' ? 200 : 300;

            await runTransaction(db, async (transaction) => {
                const userDoc = await transaction.get(userRef);
                if (!userDoc.exists()) {
                    throw "User document does not exist!";
                }

                const userData = userDoc.data();
                const solvedChallenges = userData?.solvedChallenges || [];
                const isAlreadySolved = solvedChallenges.some((c: { id: string }) => c.id === challengeId);

                if (!isAlreadySolved) {
                    const currentXp = userData?.xp || 0;
                    transaction.update(userRef, {
                        solvedChallenges: arrayUnion({
                            id: challengeId,
                            title: validatedFields.data.challengeTitle,
                            solvedAt: new Date().toISOString(),
                        }),
                        xp: currentXp + xpGained,
                    });
                }
            });
        }
        
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
    return handleCodeExecution(formData, false);
}

export async function submitAction(
    prevState: RunCodeState,
    formData: FormData
): Promise<RunCodeState> {
    return handleCodeExecution(formData, true);
}

// Monster Battle Action
const evaluateAnswerSchema = z.object({
  challengeId: z.string(),
  answer: z.string().min(1, { message: "Answer cannot be empty." }),
});

type EvaluateAnswerState = {
    formErrors?: { answer?: string[] };
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
            ...prevState,
            formErrors: validatedFields.error.flatten().fieldErrors,
            message: 'There was an error with your submission.',
            isCorrect: null,
        };
    }

    const { challenges } = await import('@/lib/battle-challenges');
    const challenge = challenges.find(c => c.id === validatedFields.data.challengeId);

    if (!challenge) {
        return { ...prevState, message: "Challenge not found.", isCorrect: null };
    }
    
    const isCorrect = validatedFields.data.answer.trim().toLowerCase() === challenge.answer.toLowerCase();

    return {
        ...prevState,
        isCorrect: isCorrect,
        correctAnswer: challenge.answer,
    };
}


// Auth Actions
const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

const signupSchema = loginSchema.extend({
  username: z.string().min(3, { message: 'Username must be at least 3 characters.' }).max(20, { message: 'Username must be 20 characters or less.' }),
});


type AuthState = {
  formErrors?: {
    email?: string[];
    password?: string[];
    username?: string[];
  };
  message?: string;
  success?: boolean;
};

export async function loginAction(
  prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  const validatedFields = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      formErrors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid email or password.',
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Check if user document exists, if not, create it
    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);
    if (!userDoc.exists()) {
        await setDoc(userDocRef, {
            uid: user.uid,
            username: user.email?.split('@')[0] || 'adventurer', // Fallback username
            email: user.email,
            xp: 0,
            level: 1,
            solvedChallenges: [],
            solvedMiniGames: [],
            createdAt: new Date().toISOString(),
        });
    }
    return { success: true };
  } catch (error: any) {
    let message = 'An unexpected error occurred.';
    if (error.code) {
        switch (error.code) {
            case 'auth/user-not-found':
            case 'auth/wrong-password':
            case 'auth/invalid-credential':
                message = 'Invalid email or password.';
                break;
            default:
                message = "An error occurred during login. Please try again.";
        }
    }
    return { message };
  }
}

export async function signupAction(
  prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
    const validatedFields = signupSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
      username: formData.get('username'),
    });

    if (!validatedFields.success) {
      return {
        formErrors: validatedFields.error.flatten().fieldErrors,
        message: 'There was an error with your submission.',
      };
    }
    
    const { email, password, username } = validatedFields.data;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Create user document in Firestore
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            username: username,
            email: email,
            xp: 0,
            level: 1,
            solvedChallenges: [],
            solvedMiniGames: [],
            createdAt: new Date().toISOString(),
        });

        return { success: true };
    } catch (error: any) {
        let message = 'An unexpected error occurred during sign up.';
         if (error.code) {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    message = 'This email is already in use.';
                    break;
                case 'auth/weak-password':
                    message = 'The password is too weak.';
                    break;
                default:
                    message = 'An error occurred during sign up. Please try again.';
            }
        }
        return { message };
    }
}

// Mini-game progress action
export async function markMiniGameAsSolved(userId: string, gameId: string) {
    if (!userId || !gameId) {
        return { success: false, message: 'User ID and Game ID are required.' };
    }

    const userRef = doc(db, 'users', userId);
    const xpGained = 50; // Standard XP for any mini-game

    try {
        await runTransaction(db, async (transaction) => {
            const userDoc = await transaction.get(userRef);
            if (!userDoc.exists()) {
                throw "User document does not exist!";
            }

            const userData = userDoc.data();
            const solvedMiniGames = userData?.solvedMiniGames || [];

            if (!solvedMiniGames.includes(gameId)) {
                const currentXp = userData?.xp || 0;
                transaction.update(userRef, {
                    solvedMiniGames: arrayUnion(gameId),
                    xp: currentXp + xpGained,
                });
            }
        });
        return { success: true, message: `Gained ${xpGained} XP!` };
    } catch (error) {
        console.error("Error updating mini-game progress:", error);
        return { success: false, message: 'Failed to save progress.' };
    }
}

export async function getLeaderboardRank(userId: string): Promise<number> {
  if (!userId) return -1;
  
  // This function relies on the Admin SDK, which might not be initialized.
  // It's better to perform this logic in a dedicated backend environment.
  // For now, we will use a workaround.
  if (!adminDb) {
      console.warn("Admin DB not initialized. Cannot get leaderboard rank from server action.");
      return -1;
  }

  try {
      const usersSnapshot = await adminDb.collection('users').orderBy('xp', 'desc').get();
      
      if (usersSnapshot.empty) {
          return -1;
      }

      const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const rank = users.findIndex(user => user.id === userId);
      
      return rank !== -1 ? rank + 1 : -1;
  } catch (error) {
      console.error("Error getting leaderboard rank:", error);
      return -1;
  }
}
