
"use server";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { z } from 'zod';
import { auth } from '@/lib/firebase';
import { redirect } from 'next/navigation';
import { setSession, clearSession } from "@/auth/session";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

const SignupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function login(data: z.infer<typeof LoginSchema>) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    await setSession(userCredential.user);
  } catch (error: any) {
    if (error.code) {
      return { error: mapFirebaseError(error.code) };
    }
    return { error: 'An unknown error occurred.' };
  }
  redirect('/dashboard');
}

export async function signup(data: z.infer<typeof SignupSchema>) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    await setSession(userCredential.user);
  } catch (error: any) {
    if (error.code) {
      return { error: mapFirebaseError(error.code) };
    }
    return { error: 'An unknown error occurred.' };
  }
  redirect('/dashboard');
}

export async function logout() {
    await clearSession();
    // Adding a short delay and redirect to ensure session is cleared
    await new Promise(resolve => setTimeout(resolve, 500));
    redirect('/auth/login');
}


function mapFirebaseError(errorCode: string): string {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Invalid email address.';
    case 'auth/user-disabled':
      return 'This account has been disabled.';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'Invalid email or password.';
    case 'auth/email-already-in-use':
      return 'An account with this email already exists.';
    case 'auth/weak-password':
      return 'The password is too weak.';
    default:
      return 'An unexpected error occurred. Please try again.';
  }
}

    