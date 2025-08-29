'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { getAIAssistance } from '@/app/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Loader2, FileCode2, BookText, GraduationCap, AlertCircle, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from './ui/scroll-area';

const initialState = {
  hint: '',
  explanation: '',
  message: '',
  formErrors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Crafting Hint...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Get AI Hint
        </>
      )}
    </Button>
  );
}

export default function AiAssistant() {
  const [state, formAction] = useActionState(getAIAssistance, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.message && state.formErrors) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: state.message,
      });
    } else if (state?.message) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }

    if (state?.hint && state?.explanation) {
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <Card>
      <form action={formAction} ref={formRef}>
        <CardHeader>
          <CardTitle className="font-headline text-xl flex items-center gap-2">
            <Sparkles className="text-primary" />
            AI Code Assistant
          </CardTitle>
          <CardDescription>Stuck on a problem? Get a hint and explanation from our AI tutor.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="problemDescription" className="flex items-center gap-2">
              <BookText className="h-4 w-4" />
              Problem Description
            </Label>
            <Textarea
              id="problemDescription"
              name="problemDescription"
              placeholder="e.g., 'Given an array of integers, return indices of the two numbers that add up to a specific target...'"
              required
              className="min-h-[100px]"
            />
            {state?.formErrors?.problemDescription && <p className="text-xs text-destructive">{state.formErrors.problemDescription.join(', ')}</p>}
          </div>
          <div className="space-y-2 font-code">
            <Label htmlFor="code" className="flex items-center gap-2">
              <FileCode2 className="h-4 w-4" />
              Your Code
            </Label>
            <Textarea
              id="code"
              name="code"
              placeholder="Paste your code snippet here..."
              required
              className="min-h-[150px] font-code"
            />
            {state?.formErrors?.code && <p className="text-xs text-destructive">{state.formErrors.code.join(', ')}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="studentLevel" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Your Skill Level
            </Label>
            <Select name="studentLevel" defaultValue="Beginner">
              <SelectTrigger id="studentLevel" className="w-full">
                <SelectValue placeholder="Select your level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            {state?.formErrors?.studentLevel && <p className="text-xs text-destructive">{state.formErrors.studentLevel.join(', ')}</p>}
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>

      {state?.hint && state?.explanation && (
        <div className="p-6 pt-0 space-y-4">
          <Alert className="border-primary">
            <Lightbulb className="h-4 w-4 text-primary" />
            <AlertTitle className="font-headline">AI-Generated Hint</AlertTitle>
            <AlertDescription>
                {state.hint}
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
                <CardTitle className="font-headline text-lg">Concept Explanation</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-48">
                    <p className="text-sm text-muted-foreground">{state.explanation}</p>
                </ScrollArea>
            </CardContent>
          </Card>
        </div>
      )}
    </Card>
  );
}
