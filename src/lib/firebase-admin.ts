
// src/lib/firebase-admin.ts
import admin from 'firebase-admin';

function getServiceAccount() {
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKey) {
    console.warn("FIREBASE_SERVICE_ACCOUNT_KEY environment variable not set. Admin SDK will not be initialized.");
    return undefined;
  }
  
  try {
    const decodedKey = Buffer.from(serviceAccountKey, 'base64').toString('utf-8');
    return JSON.parse(decodedKey);
  } catch (error) {
    console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY. Make sure it is a valid base64 encoded JSON object.", error);
    return undefined;
  }
}

if (!admin.apps.length) {
    const serviceAccount = getServiceAccount();
    if (serviceAccount) {
        try {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });
            console.log("Firebase Admin SDK initialized successfully.");
        } catch (e) {
            console.error("Firebase Admin SDK initialization failed.", e);
        }
    } else if (process.env.NODE_ENV !== 'production') {
        // Fallback for local dev without a service account key, using Application Default Credentials
        console.log("Attempting to initialize Firebase Admin with Application Default Credentials.");
        try {
            admin.initializeApp();
            console.log("Firebase Admin SDK initialized with Application Default Credentials.");
        } catch (e) {
            console.error("Application Default Credentials failed. Run `gcloud auth application-default login` or set FIREBASE_SERVICE_ACCOUNT_KEY.", e);
        }
    }
}

export const adminDb = admin.apps.length > 0 ? admin.firestore() : null;
