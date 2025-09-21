
'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
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
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';


const initialState = {
  message: '',
  formErrors: {},
  success: false,
};

function AuthForm({ formAction, actionValue, children, ...props }: { formAction: (payload: FormData) => void, actionValue: "login" | "signup", children: React.ReactNode }) {
  const [state, dispatch] = useActionState(formAction, initialState);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({ title: 'Success!', description: 'Redirecting you to the dashboard.' });
      router.push('/');
    }
    if (state.message && !state.formErrors) {
      toast({ variant: 'destructive', title: 'Authentication Error', description: state.message });
    }
  }, [state, router, toast]);

  return (
    <form action={dispatch} {...props}>
      <CardContent className="space-y-4">
        {state.message && !state.success && !state.formErrors && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}
        {actionValue === 'signup' && (
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" placeholder="adventurer" required minLength={3} maxLength={20} />
            {state.formErrors?.username && <p className="text-xs text-destructive">{state.formErrors.username.join(', ')}</p>}
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="adventurer@email.com" required />
          {state.formErrors?.email && <p className="text-xs text-destructive">{state.formErrors.email.join(', ')}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required minLength={6} />
          {state.formErrors?.password && <p className="text-xs text-destructive">{state.formErrors.password.join(', ')}</p>}
        </div>
      </CardContent>
      <CardFooter>
        {children}
      </CardFooter>
    </form>
  );
}


function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" name="action" value="login" disabled={pending} className="w-full">
      {pending ? <><Loader2 className="mr-2 animate-spin" /> Signing In...</> : <><LogIn className="mr-2" /> Login</>}
    </Button>
  );
}

function SignupButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" name="action" value="signup" disabled={pending} className="w-full">
            {pending ? <><Loader2 className="mr-2 animate-spin" /> Signing Up...</> : <><UserPlus className="mr-2" /> Sign Up</>}
        </Button>
    )
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
            <div className="flex justify-center items-center mb-4">
               <Icons.logo className="w-12 h-12 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl">Welcome to CodeCraft Quest</CardTitle>
            <CardDescription>Login or create an account to start your adventure.</CardDescription>
        </CardHeader>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
             <AuthForm formAction={loginAction} actionValue="login">
                <LoginButton />
            </AuthForm>
          </TabsContent>
          <TabsContent value="signup">
             <AuthForm formAction={signupAction} actionValue="signup">
                <SignupButton />
            </AuthForm>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
