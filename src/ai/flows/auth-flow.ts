
'use server';

/**
 * @fileOverview A server-side flow for handling user authentication and creation using the Firebase Admin SDK.
 * - signUpUser - Creates a new user in Firebase Auth and a corresponding document in Firestore.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK if not already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    // You might need to configure credentials here if not using Application Default Credentials
    // For example, using environment variables:
    // credential: admin.credential.cert({
    //   projectId: process.env.FIREBASE_PROJECT_ID,
    //   clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    //   privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    // }),
  });
}

const db = admin.firestore();
const auth = admin.auth();

const SignUpUserInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  username: z.string().min(3),
});
export type SignUpUserInput = z.infer<typeof SignUpUserInputSchema>;

const SignUpUserOutputSchema = z.object({
  uid: z.string().optional(),
  error: z.string().optional(),
});
export type SignUpUserOutput = z.infer<typeof SignUpUserOutputSchema>;


export const signUpUser = ai.defineFlow(
  {
    name: 'signUpUser',
    inputSchema: SignUpUserInputSchema,
    outputSchema: SignUpUserOutputSchema,
  },
  async (input) => {
    try {
      const { email, password, username } = input;

      // 1. Create user in Firebase Authentication
      const userRecord = await auth.createUser({
        email,
        password,
        displayName: username,
      });

      // 2. Create corresponding user document in Firestore
      await db.collection('users').doc(userRecord.uid).set({
        uid: userRecord.uid,
        username: username,
        email: email,
        xp: 0,
        level: 1,
        solvedChallenges: [],
        createdAt: new Date().toISOString(),
      });
      
      return { uid: userRecord.uid };

    } catch (error: any) {
        let message = 'An unexpected error occurred during signup.';
         if (error.code) {
            switch (error.code) {
                case 'auth/email-already-exists':
                    message = 'This email is already in use.';
                    break;
                case 'auth/weak-password':
                    message = 'The password is too weak.';
                    break;
                default:
                    message = 'An error occurred during sign up. Please try again.';
            }
        }
      return { error: message };
    }
  }
);
