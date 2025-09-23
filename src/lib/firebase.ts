// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: 'studio-2966886969-113dc',
  appId: '1:227757932645:web:fe3138d25ef775db92068c',
  apiKey: 'AIzaSyBEDtKWSHo7lmraBTFvr325gz6qsdRbZVg',
  authDomain: 'studio-2966886969-113dc.firebaseapp.com',
  measurementId: '',
  messagingSenderId: '227757932645',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
