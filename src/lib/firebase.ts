// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getApps as getAdminApps, initializeApp as initializeAdminApp, cert } from 'firebase-admin/app';
import { getFirestore as getAdminFirestore } from 'firebase-admin/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "codecraft-quest-2rdg9",
  "appId": "1:335794390716:web:7dd32e52eebcd70ac9f2b9",
  "apiKey": "AIzaSyBteDYnffWafda7KRL3MeS8cAIC8Zapkhk",
  "authDomain": "codecraft-quest-2rdg9.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "335794390716"
};

// Initialize Firebase for the client
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Firebase Admin SDK for server-side actions
// This block will only run in a server environment (e.g., Server Actions)
let adminDb: FirebaseFirestore.Firestore;
if (typeof window === 'undefined') {
  if (!getAdminApps().length) {
    // In a real app, you would use environment variables for service account credentials
    // For this prototype, we'll check for a placeholder variable
    if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
        const serviceAccount = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
        initializeAdminApp({
          credential: cert(serviceAccount),
        });
    } else {
        // Fallback for local development if the env var isn't set.
        // This will try to use Application Default Credentials.
        console.log("Firebase Admin credentials not found. Attempting to use Application Default Credentials.");
        initializeAdminApp();
    }
  }
  adminDb = getAdminFirestore();
}

// @ts-ignore - we ensure this is only used on the server
export { adminDb };
