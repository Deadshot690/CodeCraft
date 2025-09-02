
'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { signInWithGithub, signInWithGoogle } from '@/lib/firebase/auth';
import { Github, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { onAuthUserChanged } from '@/lib/firebase/auth';
import type { User } from 'firebase/auth';


export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSigningIn, setIsSigningIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthUserChanged((user) => {
      if (user) {
        router.push('/');
      } else {
        setIsLoading(false);
      }
    }, router);
    
    return () => unsubscribe();
  }, [router]);


  const handleSignIn = async (provider: 'google' | 'github') => {
    setIsSigningIn(true);
    try {
      if (provider === 'google') {
        await signInWithGoogle();
      } else {
        await signInWithGithub();
      }
      // signInWithRedirect will navigate away, so we don't need to push to router here.
      // The loading state will persist until navigation.
    } catch (error) {
      console.error('Sign-In Error:', error);
      setIsSigningIn(false); // Only reset loading state on error
    }
  };

  if (isLoading) {
     return (
      <div className="min-h-screen flex items-center justify-center bg-background">
         <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Icons.logo className="w-12 h-12 text-primary" />
            </div>
          <CardTitle className="text-2xl font-headline">Welcome to CodeCraft Quest</CardTitle>
          <CardDescription>Sign in to begin your adventure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={() => handleSignIn('google')}
            disabled={isSigningIn}
          >
            {isSigningIn ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
             <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 23.4 172.9 62.9l-67.7 67.7C313.6 114.5 283.5 104 248 104c-73.8 0-134.3 60.3-134.3 135s60.5 135 134.3 135c84.3 0 115.7-60.2 120.7-91.8H248v-85.3h236.1c2.3 12.7 3.9 26.9 3.9 41.4z"></path></svg>
            )}
            Sign in with Google
          </Button>
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={() => handleSignIn('github')}
            disabled={isSigningIn}
          >
             {isSigningIn ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Github className="mr-2 h-4 w-4" />
            )}
            Sign in with GitHub
          </Button>
        </CardContent>
        <CardFooter>
            <p className="text-xs text-muted-foreground text-center w-full">
                By signing in, you agree to our Terms of Service.
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}

