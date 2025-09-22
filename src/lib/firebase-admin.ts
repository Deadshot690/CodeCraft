
// src/lib/firebase-admin.ts
import { getApps as getAdminApps, initializeApp as initializeAdminApp, cert, App } from 'firebase-admin/app';
import { getFirestore as getAdminFirestore } from 'firebase-admin/firestore';

function getServiceAccount() {
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKey) {
    console.log("FIREBASE_SERVICE_ACCOUNT_KEY not found.");
    return undefined;
  }
  
  try {
    // The service account key is expected to be a base64 encoded JSON string.
    const decodedKey = Buffer.from(serviceAccountKey, 'base64').toString('utf-8');
    return JSON.parse(decodedKey);
  } catch (error) {
    console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY. Make sure it is a valid base64 encoded JSON object.", error);
    return undefined;
  }
}

let adminApp: App | undefined;

if (!getAdminApps().length) {
  const serviceAccount = getServiceAccount();
  if (serviceAccount) {
    try {
      adminApp = initializeAdminApp({
        credential: cert(serviceAccount),
      });
    } catch (e) {
      console.error("Firebase Admin SDK initialization failed with service account.", e);
    }
  } else if (process.env.NODE_ENV !== 'production') {
    // Fallback for local development without a service account key
    // This attempts to use Application Default Credentials.
    console.log("Attempting to initialize Firebase Admin with Application Default Credentials.");
    try {
        adminApp = initializeAdminApp();
    } catch (e) {
        console.error("Application Default Credentials failed to initialize. Please run `gcloud auth application-default login` or set FIREBASE_SERVICE_ACCOUNT_KEY.", e);
    }
  } else {
    console.error("Firebase Admin service account key is not set in production environment.");
  }
} else {
  adminApp = getAdminApps()[0];
}

// Only export adminDb if the app was successfully initialized.
export const adminDb = adminApp ? getAdminFirestore(adminApp) : null;
