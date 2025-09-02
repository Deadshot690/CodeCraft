
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

  // Listen for auth state changes
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in.
      await createUserDocument(user);
       // On successful sign-in, onAuthStateChanged fires, and we can redirect.
      const currentPath = window.location.pathname;
      if (currentPath === '/login') {
        router.push('/');
      }
    }
    callback(user);
  });

   // Also handle the redirect result separately on initial load
   getRedirectResult(auth)
    .then(async (result) => {
      if (result && result.user) {
        // This will trigger the onAuthStateChanged listener above
        // so no need to duplicate logic here.
      }
    }).catch((error) => {
        // This can happen if there is no redirect result to process.
        if (error.code !== 'auth/no-redirect-result') {
          console.error("Redirect Result Error:", error);
        }
    });

  return unsubscribe;
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
