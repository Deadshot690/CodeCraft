import { type NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/auth/session';

const PROTECTED_ROUTES = ['/dashboard', '/tasks', '/games', '/profile', '/settings'];
const AUTH_ROUTES = ['/auth/login', '/auth/signup'];

export async function middleware(request: NextRequest) {
  const sessionToken = await getSession();
  const { pathname } = request.nextUrl;

  const isAuthRoute = AUTH_ROUTES.includes(pathname);
  const isProtectedRoute = PROTECTED_ROUTES.some(route => pathname.startsWith(route));

  if (isAuthRoute) {
    if (sessionToken) {
      // Redirect authenticated users from auth pages to the dashboard
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    return NextResponse.next();
  }

  if (isProtectedRoute) {
    if (!sessionToken) {
      // Redirect unauthenticated users from protected pages to the login page
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    // In a real app, you would validate the sessionToken with Firebase Admin SDK here.
    // For this prototype, we'll assume a non-empty token is valid.
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
