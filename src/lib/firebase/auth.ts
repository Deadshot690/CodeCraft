
'use client';

import {
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
  signOut as firebaseSignOut,
  getRedirectResult,
  type User,
} from 'firebase/auth';
import { getFirebaseAuth, getFirestoreDb } from './client';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export function onAuthUserChanged(
  callback: (user: User | null) => void,
  router: AppRouterInstance
) {
  const auth = getFirebaseAuth();

  // Handle the redirect result
  getRedirectResult(auth)
    .then(async (result) => {
      if (result && result.user) {
        await createUserDocument(result.user);
        callback(result.user);
        router.push('/'); // Redirect to home after successful login
      }
    }).catch((error) => {
        console.error("Redirect Result Error:", error);
    });

  // Listen for auth state changes
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in.
      await createUserDocument(user);
    } else {
      // User is signed out.
      // Do not redirect here immediately, to allow login page to render.
    }
    callback(user);
  });
}

export const signInWithGoogle = async () => {
  const auth = getFirebaseAuth();
  const provider = new GoogleAuthProvider();
  await signInWithRedirect(auth, provider);
};

export const signInWithGithub = async () => {
  const auth = getFirebaseAuth();
  const provider = new GithubAuthProvider();
  await signInWithRedirect(auth, provider);
};


export const signOut = async () => {
  const auth = getFirebaseAuth();
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error('Error signing out', error);
  }
};

const createUserDocument = async (user: User) => {
  if (!user) return;
  const db = getFirestoreDb();
  const userDocRef = doc(db, 'users', user.uid);
  const userDoc = await getDoc(userDocRef);

  if (!userDoc.exists()) {
    const newUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      createdAt: new Date().toISOString(),
      level: 1,
      xp: 0,
      gold: 0,
      dailyStreak: 0,
      lastLogin: new Date().toISOString(),
      solvedChallenges: [],
    };
    await setDoc(userDocRef, newUser);
  }
};
