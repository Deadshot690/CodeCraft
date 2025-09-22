// src/lib/firebase-admin.ts
import { getApps as getAdminApps, initializeApp as initializeAdminApp, cert } from 'firebase-admin/app';
import { getFirestore as getAdminFirestore } from 'firebase-admin/firestore';

if (!getAdminApps().length) {
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
    const serviceAccount = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
    initializeAdminApp({
      credential: cert(serviceAccount),
    });
  } else {
    // Fallback for local dev if the env var isn't set.
    // This will try to use Application Default Credentials.
    console.log("Firebase Admin credentials not found. Attempting to use Application Default Credentials.");
    initializeAdminApp();
  }
}

export const adminDb = getAdminFirestore();
