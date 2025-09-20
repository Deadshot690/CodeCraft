'use client';

import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  setDoc,
} from 'firebase/firestore';
import { getFirestoreDb } from './client';

export interface UserProfile {
  uid: string;
  email?: string | null;
  username?: string | null;
  displayName?: string | null;
  photoURL?: string | null;
  createdAt: string;
  level: number;
  xp: number;
  gold: number;
  dailyStreak: number;
  lastLogin: string;
  solvedChallenges: string[];
}

export const createUserProfile = async (
  uid: string,
  data: Omit<UserProfile, 'uid'>
): Promise<void> => {
  const db = getFirestoreDb();
  await setDoc(doc(db, 'users', uid), { uid, ...data });
};

export const getUserProfile = async (
  uid: string
): Promise<UserProfile | null> => {
  const db = getFirestoreDb();
  const userDocRef = doc(db, 'users', uid);
  const userDoc = await getDoc(userDocRef);

  if (userDoc.exists()) {
    return userDoc.data() as UserProfile;
  } else {
    return null;
  }
};

export const updateUserProfile = async (
  uid: string,
  data: Partial<UserProfile>
): Promise<void> => {
  const db = getFirestoreDb();
  const userDocRef = doc(db, 'users', uid);
  await updateDoc(userDocRef, data);
};

export const addSolvedChallenge = async (
  uid: string,
  challengeId: string
): Promise<void> => {
  const db = getFirestoreDb();
  const userDocRef = doc(db, 'users', uid);
  await updateDoc(userDocRef, {
    solvedChallenges: arrayUnion(challengeId),
  });
};

export const removeSolvedChallenge = async (
  uid: string,
  challengeId: string
): Promise<void> => {
  const db = getFirestoreDb();
  const userDocRef = doc(db, 'users', uid);
  await updateDoc(userDocRef, {
    solvedChallenges: arrayRemove(challengeId),
  });
};
