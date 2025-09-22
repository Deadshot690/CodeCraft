// src/lib/firebase-admin.ts
import { getApps as getAdminApps, initializeApp as initializeAdminApp, cert } from 'firebase-admin/app';
import { getFirestore as getAdminFirestore } from 'firebase-admin/firestore';

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
  : undefined;

if (!getAdminApps().length) {
  if (serviceAccount) {
    initializeAdminApp({
      credential: cert(serviceAccount),
    });
  } else if (process.env.NODE_ENV !== 'production') {
    // This will attempt to use Application Default Credentials for local development
    // Make sure you've run `gcloud auth application-default login`
    console.log("Firebase Admin service account not found. Attempting to use Application Default Credentials.");
    initializeAdminApp();
  } else {
    // In production, we expect the service account to be available
    console.error("Firebase Admin service account key is not set in production environment.");
  }
}

export const adminDb = getAdminFirestore();
