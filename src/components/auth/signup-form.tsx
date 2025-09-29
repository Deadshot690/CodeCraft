"use client";

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signup } from '@/auth/actions';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AuthCard } from './auth-card';
import { toast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const SignupSchema = z.object({
  email: z.string().email({ message: 'A valid email is required' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});

type SignupData = z.infer<typeof SignupSchema>;

export const SignupForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<SignupData>({
    resolver: zodResolver(SignupSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = (data: SignupData) => {
    startTransition(async () => {
      const result = await signup(data);
      if (result?.error) {
        toast({
          title: 'Signup Failed',
          description: result.error,
          variant: 'destructive',
        });
      }
    });
  };

  return (
    <AuthCard
      title="Create an Account"
      description="Start your coding adventure today."
      footerText="Already have an account?"
      footerLinkText="Log in"
      footerHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="alex@example.com"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="••••••••" disabled={isPending}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 animate-spin" />}
            Create Account
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
};
