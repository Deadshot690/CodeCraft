'use client';

import {initializeApp, getApps, getApp, type FirebaseApp} from 'firebase/app';
import {getAuth, type Auth} from 'firebase/auth';
import {getFirestore, type Firestore} from 'firebase/firestore';

const firebaseConfig = {
  projectId: 'codecraft-quest-2rdg9',
  appId: '1:335794390716:web:7dd32e52eebcd70ac9f2b9',
  storageBucket: 'codecraft-quest-2rdg9.firebasestorage.app',
  apiKey: 'AIzaSyBteDYnffWafda7KRL3MeS8cAIC8Zapkhk',
  authDomain: 'codecraft-quest-2rdg9.firebaseapp.com',
  measurementId: '',
  messagingSenderId: '335794390716',
};

// Initialize Firebase
const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

const getFirebaseAuth = (): Auth => auth;
const getFirestoreDb = (): Firestore => db;

export { app, getFirebaseAuth, getFirestoreDb };
