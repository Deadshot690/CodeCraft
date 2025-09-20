
'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, UserPlus, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { signUpWithEmail, type AuthState } from '@/app/actions';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { clientApp } from '@/lib/firebase/client';

const initialState: AuthState = {
  message: '',
  formErrors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 animate-spin" /> : <UserPlus className="mr-2" />}
      Create Account
    </Button>
  );
}

export default function SignupPage() {
  const [state, formAction] = useActionState(signUpWithEmail, initialState);
  const router = useRouter();
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleClientSignUp = async (formData: FormData) => {
      // First, run the server-side validation
      formAction(formData); 
  };
  
  useEffect(() => {
    // This effect runs after the server action has completed
    if (state.message === 'Success') {
      const formData = new FormData(formRef.current!);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;
      const username = formData.get('username') as string | null;

      const auth = getAuth(clientApp);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Account created. Now update profile.
          return updateProfile(userCredential.user, {
            displayName: username || '',
          });
        })
        .then(() => {
          // Profile updated.
          toast({
            title: 'Account Created!',
            description: 'You have been successfully signed up. Please sign in.',
          });
          router.push('/login');
        })
        .catch((error) => {
          // Handle client-side errors (e.g., weak password, etc.)
          const errorCode = error.code;
          const errorMessage =
            errorCode === 'auth/email-already-in-use'
              ? 'This email address is already in use.'
              : errorCode === 'auth/weak-password'
              ? 'The password is too weak. Please use at least 6 characters.'
              : 'An unexpected error occurred. Please try again.';
          
          toast({
            variant: 'destructive',
            title: 'Sign Up Error',
            description: errorMessage,
          });
        });

    } else if (state.message) {
        // Handle validation errors from the server action
        toast({
            variant: 'destructive',
            title: 'Sign Up Error',
            description: state.message,
        });
    }
  }, [state, router, toast]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-sm">
        <form action={handleClientSignUp} ref={formRef}>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold font-headline">Create an Account</CardTitle>
            <CardDescription>Begin your coding adventure with CodeCraft Quest.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username (Optional)</Label>
              <Input id="username" name="username" type="text" placeholder="Your heroic name" />
              {state?.formErrors?.username && <p className="text-xs text-destructive mt-1">{state.formErrors.username.join(', ')}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="m@example.com" required />
              {state?.formErrors?.email && <p className="text-xs text-destructive mt-1">{state.formErrors.email.join(', ')}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required minLength={6} />
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
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-primary hover:underline">
                Sign In
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
