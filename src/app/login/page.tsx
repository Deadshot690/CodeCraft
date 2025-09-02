
'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { signInWithGithub, signInWithGoogle } from '@/lib/firebase/auth';
import { Github, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function LoginPage() {
  const router = useRouter();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);


  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      await signInWithGoogle();
      router.push('/');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      setIsGoogleLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setIsGithubLoading(true);
    try {
      await signInWithGithub();
       router.push('/');
    } catch (error) {
      console.error('GitHub Sign-In Error:', error);
       setIsGithubLoading(false);
    }
  };

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
            onClick={handleGoogleSignIn}
            disabled={isGoogleLoading || isGithubLoading}
          >
            {isGoogleLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
             <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 23.4 172.9 62.9l-67.7 67.7C313.6 114.5 283.5 104 248 104c-73.8 0-134.3 60.3-134.3 135s60.5 135 134.3 135c84.3 0 115.7-60.2 120.7-91.8H248v-85.3h236.1c2.3 12.7 3.9 26.9 3.9 41.4z"></path></svg>
            )}
            Sign in with Google
          </Button>
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={handleGithubSignIn}
            disabled={isGoogleLoading || isGithubLoading}
          >
             {isGithubLoading ? (
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

