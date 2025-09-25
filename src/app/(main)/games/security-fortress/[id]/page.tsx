
"use client";

import React, { useState, useMemo, use } from 'react';
import { notFound, useRouter } from 'next/navigation';
import { securityFortressChallenges } from '@/lib/data';
import { CodeEditor } from '@/components/code-editor';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ChevronLeft, ShieldCheck, ShieldAlert, SkipForward } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import Confetti from 'react-dom-confetti';

type GameState = 'playing' | 'answered';

export default function SecurityFortressArenaPage({ params }: { params: { id: string } }) {
  const resolvedParams = use(params);
  const router = useRouter();
  
  const [gameState, setGameState] = useState<GameState>('playing');
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const challenge = useMemo(() => {
    return securityFortressChallenges.find((c) => c.id === resolvedParams.id);
  }, [resolvedParams.id]);

  if (!challenge) {
    notFound();
  }

  const handleAnswerSubmit = () => {
    if (selectedOptionId === null) return;
    const correct = selectedOptionId === challenge.correctOptionId;
    setIsCorrect(correct);
    setGameState('answered');
    if (correct) {
      setShowConfetti(true);
    }
  };

  const handleNextChallenge = () => {
    const currentIndex = securityFortressChallenges.findIndex(c => c.id === challenge.id);
    const nextChallenge = securityFortressChallenges[(currentIndex + 1) % securityFortressChallenges.length];
    router.push(`/games/security-fortress/${nextChallenge.id}`);
    // Reset state for the next challenge
    setGameState('playing');
    setSelectedOptionId(null);
    setIsCorrect(null);
    setShowConfetti(false);
  };

  const resetGame = () => {
    setGameState('playing');
    setSelectedOptionId(null);
    setIsCorrect(null);
    setShowConfetti(false);
  }

  const getOptionClass = (optionId: string) => {
    if (gameState !== 'answered') return '';
    if (optionId === challenge.correctOptionId) return 'bg-green-500/20 border-green-500';
    if (optionId === selectedOptionId && !isCorrect) return 'bg-red-500/20 border-red-500';
    return '';
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
        <Button variant="outline" size="icon" className="h-8 w-8" asChild>
          <a href="/games/security-fortress"><ChevronLeft className="h-4 w-4" /></a>
        </Button>
        <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl truncate">
          Security Fortress: {challenge.title}
        </h1>
        <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" onClick={resetGame}>Reset</Button>
            <Button onClick={handleNextChallenge}>
                <SkipForward className="mr-2 h-4 w-4" />
                Next Challenge
            </Button>
        </div>
      </header>

      <main className="flex-1 grid gap-6 lg:grid-cols-2 overflow-auto p-4 md:p-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Confetti active={showConfetti} config={{ spread: 120, elementCount: 200, startVelocity: 30 }} />
        </div>
        <div className="flex flex-col gap-6">
          <Card className="flex-grow flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-lg">Vulnerable Code</CardTitle>
              <CardDescription>Analyze this snippet ({challenge.language}) for a security flaw.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <CodeEditor
                key={challenge.id}
                initialCode={challenge.vulnerableCode}
                language={challenge.language as any}
                onCodeChange={() => {}}
                readOnly
              />
            </CardContent>
          </Card>
          <Card>
             <CardHeader>
                <CardTitle>Description</CardTitle>
             </CardHeader>
             <CardContent>
                <p className="text-muted-foreground">{challenge.description}</p>
             </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader>
                <CardTitle className="font-headline text-lg">Select the Correct Patch</CardTitle>
                <CardDescription>Which of these options correctly fixes the vulnerability?</CardDescription>
                </CardHeader>
                <CardContent>
                <RadioGroup
                    value={selectedOptionId || undefined}
                    onValueChange={setSelectedOptionId}
                    disabled={gameState === 'answered'}
                    className="space-y-3"
                >
                    {challenge.options.map((option) => (
                    <Label
                        key={option.id}
                        className={cn(
                        "flex items-start gap-4 rounded-md border p-4 cursor-pointer transition-all hover:bg-accent has-[input:checked]:bg-accent",
                        getOptionClass(option.id)
                        )}
                    >
                        <RadioGroupItem value={option.id} id={option.id} className="mt-1 flex-shrink-0" />
                        <div className="flex-1 flex flex-col">
                          <CodeEditor
                              initialCode={option.code}
                              language={challenge.language as any}
                              readOnly
                          />
                        </div>
                    </Label>
                    ))}
                </RadioGroup>
                <Button onClick={handleAnswerSubmit} disabled={gameState === 'answered' || selectedOptionId === null} className="mt-4 w-full">
                    Fortify
                </Button>
                </CardContent>
            </Card>

            {gameState === 'answered' && (
            <Card>
              <CardContent className="p-6">
                {isCorrect ? (
                  <Alert className="bg-green-500/10 border-green-500/50">
                    <ShieldCheck className="h-4 w-4 text-green-500" />
                    <AlertTitle className="font-bold text-green-400">Fortress Secure!</AlertTitle>
                    <AlertDescription>
                      {challenge.explanation} You earned {challenge.xp} XP!
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Alert variant="destructive">
                    <ShieldAlert className="h-4 w-4" />
                    <AlertTitle className="font-bold">Vulnerability Exposed!</AlertTitle>
                    <AlertDescription>
                      That's not the right patch. Here's why: {challenge.explanation}
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
