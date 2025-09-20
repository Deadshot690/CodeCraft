
'use server';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { app } from './client';

export const auth = getAuth(app);

export { createUserWithEmailAndPassword, signInWithEmailAndPassword };
