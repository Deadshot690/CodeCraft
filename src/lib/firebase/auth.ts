
'use client';

import {
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
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
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in.
      await createUserDocument(user);
    } else {
      // User is signed out.
      router.push('/login');
    }
    callback(user);
  });
}

export const signInWithGoogle = async () => {
  const auth = getFirebaseAuth();
  auth.tenantId = null; // Explicitly set tenantId to null
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error('Error signing in with Google', error);
  }
};

export const signInWithGithub = async () => {
  const auth = getFirebaseAuth();
  auth.tenantId = null; // Explicitly set tenantId to null
  const provider = new GithubAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error('Error signing in with GitHub', error);
  }
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
