
'use client';

import {initializeApp, getApps, getApp, type FirebaseApp} from 'firebase/app';
import {getFirestore, type Firestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  projectId: 'codecraft-quest-2rdg9',
  appId: '1:335794390716:web:7dd32e52eebcd70ac9f2b9',
  storageBucket: 'codecraft-quest-2rdg9.firebasestorage.app',
  apiKey: 'AIzaSyBteDYnffWafda7KRL3MeS8cAIC8Zapkhk',
  authDomain: 'codecraft-quest-2rdg9.firebaseapp.com',
  messagingSenderId: '335794390716',
};


let app: FirebaseApp;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const db = getFirestore(app);
const auth = getAuth(app);

function getFirestoreDb(): Firestore {
    return db;
}


export { app, auth, getFirestoreDb };
