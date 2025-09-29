'use server';

import 'server-only';
import { cookies } from 'next/headers';
import type { User } from 'firebase/auth';

const SESSION_COOKIE_NAME = 'firebase-session';

export async function setSession(user: User) {
  const uid = user.uid;
  cookies().set(SESSION_COOKIE_NAME, uid, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    // Add other cookie options like maxAge or expires if needed
  });
}

export async function getSession(): Promise<string | null> {
  const cookieStore = cookies();
  return cookieStore.get(SESSION_COOKIE_NAME)?.value || null;
}

export async function clearSession() {
    cookies().delete(SESSION_COOKIE_NAME);
}
