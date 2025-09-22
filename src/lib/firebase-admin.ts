
// src/lib/firebase-admin.ts
import { getApps as getAdminApps, initializeApp as initializeAdminApp, cert } from 'firebase-admin/app';
import { getFirestore as getAdminFirestore } from 'firebase-admin/firestore';

function getServiceAccount() {
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKey) {
    return undefined;
  }
  try {
    // Check if it's already a valid JSON object string
    if (serviceAccountKey.startsWith('{') && serviceAccountKey.endsWith('}')) {
      return JSON.parse(serviceAccountKey);
    }
    // If not, it might be a base64 encoded string or another format
    // For this project, we assume it's a JSON object that might be missing quotes in .env
    // This is a common issue when pasting JSON into .env files.
    // A more robust solution would be to base64 encode it, but this handles the common case.
    return JSON.parse(`"${serviceAccountKey}"`);
  } catch (error) {
     console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY. Make sure it's a valid JSON object in your .env file.", error);
    return undefined;
  }
}

const serviceAccount = getServiceAccount();

if (!getAdminApps().length) {
  if (serviceAccount) {
    initializeAdminApp({
      credential: cert(serviceAccount),
    });
  } else if (process.env.NODE_ENV !== 'production') {
    // This will attempt to use Application Default Credentials for local development
    // Make sure you've run `gcloud auth application-default login`
    console.log("Firebase Admin service account not found. Attempting to use Application Default Credentials.");
    try {
        initializeAdminApp();
    } catch (e) {
        console.error("Application Default Credentials failed to initialize. Please log in with `gcloud auth application-default login` or set FIREBASE_SERVICE_ACCOUNT_KEY.", e)
    }
  } else {
    // In production, we expect the service account to be available
    console.error("Firebase Admin service account key is not set in production environment.");
  }
}

export const adminDb = getAdminFirestore();
