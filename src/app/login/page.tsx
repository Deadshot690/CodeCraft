
'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, LogIn, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { signInWithEmail, type AuthState } from '@/app/actions';
import { useAuth } from '@/hooks/use-auth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { clientApp } from '@/lib/firebase/client';


const initialState: AuthState = {
  message: '',
  formErrors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 animate-spin" /> : <LogIn className="mr-2" />}
      Sign In
    </Button>
  );
}

export default function LoginPage() {
  const [state, formAction] = useActionState(signInWithEmail, initialState);
  const router = useRouter();
  const { toast } = useToast();
  const { user } = useAuth();
  
  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);


  useEffect(() => {
    if (state?.message && state.message !== 'Success') {
      toast({
        variant: 'destructive',
        title: 'Sign In Error',
        description: state.message,
      });
    }
  }, [state, toast]);
  
  const handleClientSignIn = async (formData: FormData) => {
    // This is now simplified. The server action validates.
    // If validation is successful, we attempt client-side sign-in.
    formAction(formData);

    // We can't await the result of formAction directly.
    // Instead, we let the form action update the `state`.
    // A separate useEffect will watch for the state change
    // and attempt the client-side sign in if server validation was successful.
    
    // The main issue is that we need the form data to do the client-side sign-in.
    // The server action can't return it easily. A better pattern is to let the
    // server action ONLY do validation.
    
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password || password.length < 6) {
        // Basic client-side validation to avoid unnecessary server round-trip
        toast({
            variant: 'destructive',
            title: 'Invalid Input',
            description: 'Please provide a valid email and password.',
        });
        return;
    }

    try {
        await signInWithEmailAndPassword(getAuth(clientApp), email, password);
        // The onAuthStateChanged listener in useAuth will handle the redirect.
        toast({
            title: 'Signed In',
            description: 'Welcome back!',
        });
    } catch (error: any) {
        toast({
            variant: 'destructive',
            title: 'Sign In Failed',
            description: 'Invalid email or password. Please try again.',
        });
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-sm">
        <form action={handleClientSignIn}>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold font-headline">Welcome Back!</CardTitle>
            <CardDescription>Sign in to your CodeCraft Quest account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="m@example.com" required />
              {state?.formErrors?.email && <p className="text-xs text-destructive mt-1">{state.formErrors.email.join(', ')}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
              {state?.formErrors?.password && <p className="text-xs text-destructive mt-1">{state.formErrors.password.join(', ')}</p>}
            </div>
            {state.message && state.message !== 'Success' && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <SubmitButton />
            <p className="text-xs text-muted-foreground">
              Don't have an account?{' '}
              <Link href="/signup" className="font-semibold text-primary hover:underline">
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

