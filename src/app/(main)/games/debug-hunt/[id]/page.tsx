"use client";

import { useState, useMemo, use, useTransition } from "react";
import { notFound, useRouter } from "next/navigation";
import { debugChallenges } from "@/lib/data";
import { CodeEditor } from "@/components/code-editor";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Bug, Lightbulb, PartyPopper, ChevronLeft } from "lucide-react";
import { debugCode, DebugCodeOutput } from "@/ai/flows/debug-code-flow";
import type { DebugChallenge } from "@/lib/types";

export default function DebugHuntArenaPage({ params }: { params: { id: string } }) {
  const resolvedParams = use(params);
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [userCode, setUserCode] = useState("");
  const [submissionResult, setSubmissionResult] = useState<DebugCodeOutput | null>(null);

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
      const result = await debugCode({ userCode, challenge: challenge as DebugChallenge });
      setSubmissionResult(result);
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

           {(isPending || submissionResult) && (
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg">Result</CardTitle>
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
                </CardContent>
             </Card>
           )}
        </div>
      </div>
    </div>
  );
}
