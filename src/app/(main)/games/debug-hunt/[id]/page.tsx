"use client";

import { useState, useMemo, use, useTransition } from "react";
import { notFound, useRouter } from "next/navigation";
import { debugChallenges } from "@/lib/data";
import { CodeEditor } from "@/components/code-editor";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Bug, Lightbulb, PartyPopper, ChevronLeft, Terminal, CheckCircle, AlertCircle } from "lucide-react";
import type { DebugChallenge } from "@/lib/types";
import { normalizeAnswer } from "@/lib/utils";
import { runCode, RunCodeOutput } from "@/ai/flows/run-code-flow";
import { Task } from "@/lib/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


interface SubmissionResult {
  isCorrect: boolean;
  explanation: string;
  runResult?: RunCodeOutput;
}

// A helper function to create a simplified Task object for runCode flow
const createMockTask = (challenge: DebugChallenge, userCode: string): Task => {
    return {
        id: challenge.id,
        title: challenge.title,
        description: challenge.description,
        category: 'Web Development', // Category and difficulty are not strictly needed but part of the type
        difficulty: 'Beginner',
        xp: challenge.xp,
        starterCode: {
            python: challenge.language === 'python' ? userCode : '',
            javascript: challenge.language === 'javascript' ? userCode : '',
            java: challenge.language === 'java' ? userCode : '',
            cpp: challenge.language === 'cpp' ? userCode : '',
        },
        examples: challenge.testCases.map(tc => ({
            input: tc.input,
            output: tc.expectedOutput,
            explanation: tc.explanation,
        })),
        constraints: [],
    };
};

export default function DebugHuntArenaPage({ params }: { params: { id: string } }) {
  const resolvedParams = use(params);
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [userCode, setUserCode] = useState("");
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);

  const challenge = useMemo(() => {
    return debugChallenges.find((c) => c.id === resolvedParams.id);
  }, [resolvedParams.id]);

  // Set initial code when challenge loads
  useMemo(() => {
    if (challenge) {
      setUserCode(challenge.buggyCode);
      setSubmissionResult(null);
    }
  }, [challenge]);

  if (!challenge) {
    notFound();
  }

  const handleSubmitFix = () => {
    startTransition(async () => {
        if (!challenge) return;

        // 1. Create a mock Task object for the runCode flow
        const mockTask = createMockTask(challenge, userCode);

        // 2. Call the runCode flow to "execute" the code
        const runResult = await runCode({
            code: userCode,
            language: challenge.language,
            task: mockTask,
        });

        // 3. Check if all test cases passed
        const allPassed = runResult.testResults.length > 0 && runResult.testResults.every(r => r.success);
        
        let explanation = "";
        if (allPassed) {
            explanation = "Great job! All test cases passed. You've squashed the bug!";
        } else if (runResult.testResults.length > 0) {
            const firstFailed = runResult.testResults.find(r => !r.success);
            explanation = `Not quite. Keep trying! Hint: For input \`${firstFailed?.testCase}\`, the code produced \`${firstFailed?.actual}\` instead of \`${firstFailed?.expected}\`.`;
        } else {
            explanation = `The code couldn't be run. Check for syntax errors. Output: ${runResult.output}`;
        }
        
        setSubmissionResult({
            isCorrect: allPassed,
            explanation: explanation,
            runResult: runResult,
        });
    });
  };
  
  const handleNextChallenge = () => {
    const currentIndex = debugChallenges.findIndex(c => c.id === challenge.id);
    const nextChallenge = debugChallenges[(currentIndex + 1) % debugChallenges.length];
    router.push(`/games/debug-hunt/${nextChallenge.id}`);
  };


  return (
    <div className="flex flex-col h-screen">
      <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
        <Button variant="outline" size="icon" className="h-8 w-8" asChild>
          <a href="/games/debug-hunt"><ChevronLeft className="h-4 w-4" /></a>
        </Button>
        <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl truncate">
          Debug Hunt: {challenge.title}
        </h1>
        <div className="ml-auto">
            <Button onClick={handleNextChallenge}>Next Challenge</Button>
        </div>
      </header>

      <div className="flex-1 grid gap-6 lg:grid-cols-2 overflow-auto p-4 md:p-6">
        {/* Left Column: Challenge Info */}
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">{challenge.title}</CardTitle>
              <CardDescription className="flex items-center gap-4 pt-2">
                <span>Language: {challenge.language}</span>
                <span className="text-primary font-medium">XP: {challenge.xp}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{challenge.description}</p>
            </CardContent>
          </Card>

          <Card className="flex-grow flex flex-col">
            <CardHeader>
                <CardTitle className="font-headline text-lg flex items-center gap-2">
                    <Bug className="text-destructive"/> Original Buggy Code
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                 <CodeEditor
                    initialCode={challenge.buggyCode}
                    language={challenge.language}
                    onCodeChange={() => {}} // Read-only
                />
            </CardContent>
          </Card>
        </div>

        {/* Right Column: User's Solution & Output */}
        <div className="flex flex-col gap-6">
          <Card className="flex-grow flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-lg">Your Fix</CardTitle>
              <CardDescription>Edit the code below to fix the bug.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <CodeEditor
                key={challenge.id} // Re-mounts editor on challenge change
                initialCode={challenge.buggyCode}
                language={challenge.language}
                onCodeChange={setUserCode}
              />
              <div className="mt-4 flex justify-end gap-2">
                 <Button onClick={handleSubmitFix} disabled={isPending}>
                  {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Bug className="mr-2 h-4 w-4"/>}
                  Submit Fix
                </Button>
              </div>
            </CardContent>
          </Card>

           <Tabs defaultValue="result" className="w-full">
            <TabsList>
              <TabsTrigger value="result">Result</TabsTrigger>
              <TabsTrigger value="console">Console</TabsTrigger>
            </TabsList>
            <TabsContent value="result">
                {(isPending || submissionResult) && (
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">Evaluation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isPending ? (
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Loader2 className="h-5 w-5 animate-spin"/>
                                <p>Evaluating your code...</p>
                            </div>
                        ) : submissionResult?.isCorrect ? (
                             <Alert className="bg-green-500/10 border-green-500/50">
                                <PartyPopper className="h-4 w-4 text-green-500" />
                                <AlertTitle className="font-bold text-green-400">Correct!</AlertTitle>
                                <AlertDescription>
                                    {submissionResult.explanation} You've earned {challenge.xp} XP!
                                </AlertDescription>
                            </Alert>
                        ) : (
                            <Alert variant="destructive">
                                 <Lightbulb className="h-4 w-4" />
                                <AlertTitle className="font-bold">Still Buggy</AlertTitle>
                                <AlertDescription>
                                    {submissionResult?.explanation}
                                </AlertDescription>
                            </Alert>
                        )}
                        {submissionResult && submissionResult.runResult && (
                           <div className="space-y-4 mt-4">
                              {submissionResult.runResult.testResults.map((result, index) => (
                                 <Alert key={index} variant={result.success ? "default" : "destructive"} className={result.success ? "bg-green-500/10 border-green-500/50" : ""}>
                                  <AlertTitle className="flex items-center gap-2">
                                    {result.success ? <CheckCircle className="h-4 w-4 text-green-500"/> : <AlertCircle className="h-4 w-4"/>}
                                    Test Case #{index + 1}: {result.success ? 'Passed' : 'Failed'}
                                  </AlertTitle>
                                  <AlertDescription className="font-code text-xs pl-6">
                                    Input: {result.testCase} <br/>
                                    Expected: {result.expected} <br/>
                                    Got: {result.actual}
                                  </AlertDescription>
                                </Alert>
                              ))}
                            </div>
                        )}
                    </CardContent>
                 </Card>
               )}
            </TabsContent>
             <TabsContent value="console">
              <Card>
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2"><Terminal /> Console Output</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="p-4 bg-muted rounded-md min-h-[100px] text-sm text-foreground overflow-auto font-code">
                      {isPending ? "Running code..." : submissionResult?.runResult?.output || 'Click "Submit Fix" to see the console output.'}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
           </Tabs>
        </div>
      </div>
    </div>
  );
}
