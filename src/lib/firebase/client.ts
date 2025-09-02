'use client';

import {initializeApp, getApps, getApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  projectId: 'codecraft-quest-2rdg9',
  appId: '1:335794390716:web:7dd32e52eebcd70ac9f2b9',
  storageBucket: 'codecraft-quest-2rdg9.firebasestorage.app',
  apiKey: 'AIzaSyBteDYnffWafda7KRL3MeS8cAIC8Zapkhk',
  authDomain: 'codecraft-quest-2rdg9.firebaseapp.com',
  measurementId: '',
  messagingSenderId: '335794390716',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db};
