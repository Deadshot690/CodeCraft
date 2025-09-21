
'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import { loginAction, signupAction } from '@/app/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { LogIn, UserPlus, AlertCircle, Loader2 } from 'lucide-react';
import { Icons } from '@/components/icons';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  message: '',
  formErrors: {},
  success: false,
};

function AuthFormButtons() {
  const { pending } = useFormStatus();
  return (
    <div className="flex gap-4">
      <Button type="submit" name="action" value="login" disabled={pending} className="flex-1">
        {pending ? <><Loader2 className="mr-2 animate-spin" /> Signing In...</> : <><LogIn className="mr-2" /> Login</>}
      </Button>
      <Button type="submit" name="action" value="signup" disabled={pending} variant="secondary" className="flex-1">
        {pending ? <><Loader2 className="mr-2 animate-spin" /> Signing Up...</> : <><UserPlus className="mr-2" /> Sign Up</>}
      </Button>
    </div>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [loginState, loginFormAction] = useActionState(loginAction, initialState);
  const [signupState, signupFormAction] = useActionState(signupAction, initialState);
  
  const formRef = useRef<HTMLFormElement>(null);

  const state = formRef.current?.getAttribute('data-action') === 'login' ? loginState : signupState;

  useEffect(() => {
    if (state.success) {
      toast({ title: 'Success!', description: 'Redirecting you to the dashboard.' });
      router.push('/');
    }
    if (state.message && !state.formErrors) {
      toast({ variant: 'destructive', title: 'Authentication Error', description: state.message });
    }
  }, [state, router, toast]);

  const handleFormAction = (e: React.FormEvent<HTMLFormElement>) => {
      const formData = new FormData(e.currentTarget);
      const action = (e.nativeEvent as SubmitEvent).submitter?.getAttribute('value');

      if (action === 'login') {
          formRef.current?.setAttribute('data-action', 'login');
          loginFormAction(formData);
      } else if (action === 'signup') {
          formRef.current?.setAttribute('data-action', 'signup');
          signupFormAction(formData);
      }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <form ref={formRef} onSubmit={handleFormAction}>
          <CardHeader className="text-center">
            <div className="flex justify-center items-center mb-4">
               <Icons.logo className="w-12 h-12 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl">Welcome to CodeCraft Quest</CardTitle>
            <CardDescription>Login or create an account to start your adventure.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {state.message && !state.success && !state.formErrors && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="adventurer@email.com" required />
              {state.formErrors?.email && <p className="text-xs text-destructive">{state.formErrors.email.join(', ')}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
              {state.formErrors?.password && <p className="text-xs text-destructive">{state.formErrors.password.join(', ')}</p>}
            </div>
          </CardContent>
          <CardFooter>
            <AuthFormButtons />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
