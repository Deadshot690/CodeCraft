
"use client";

import React, { useState, useMemo, use } from 'react';
import { notFound, useRouter } from 'next/navigation';
import { outputPredictionChallenges } from '@/lib/data';
import { CodeEditor } from '@/components/code-editor';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ChevronLeft, Lightbulb, CheckCircle, XCircle, SkipForward } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type GameState = 'playing' | 'answered';

export default function OutputPredictionArenaPage({ params }: { params: { id: string } }) {
  const resolvedParams = use(params);
  const router = useRouter();
  
  const [gameState, setGameState] = useState<GameState>('playing');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const challenge = useMemo(() => {
    return outputPredictionChallenges.find((c) => c.id === resolvedParams.id);
  }, [resolvedParams.id]);

  if (!challenge) {
    notFound();
  }

  const handleAnswerSubmit = () => {
    if (selectedAnswer === null) return;
    const correct = selectedAnswer === challenge.correctAnswer;
    setIsCorrect(correct);
    setGameState('answered');
  };

  const handleNextChallenge = () => {
    const currentIndex = outputPredictionChallenges.findIndex(c => c.id === challenge.id);
    const nextChallenge = outputPredictionChallenges[(currentIndex + 1) % outputPredictionChallenges.length];
    router.push(`/games/output-prediction/${nextChallenge.id}`);
    // Reset state for the next challenge
    setGameState('playing');
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const getOptionClass = (option: string) => {
    if (gameState !== 'answered') return '';
    if (option === challenge.correctAnswer) return 'bg-green-500/20 border-green-500';
    if (option === selectedAnswer && !isCorrect) return 'bg-red-500/20 border-red-500';
    return '';
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
        <Button variant="outline" size="icon" className="h-8 w-8" asChild>
          <a href="/games/output-prediction"><ChevronLeft className="h-4 w-4" /></a>
        </Button>
        <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl truncate">
          Output Prediction: {challenge.title}
        </h1>
        <div className="ml-auto">
          <Button onClick={handleNextChallenge}>
            <SkipForward className="mr-2 h-4 w-4" />
            Next Challenge
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="grid gap-6 max-w-4xl mx-auto">
          <Card className="flex-grow flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-lg">Code Snippet</CardTitle>
              <CardDescription>Analyze the code below and predict its output.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <CodeEditor
                key={challenge.id}
                initialCode={challenge.codeSnippet}
                language={challenge.language}
                onCodeChange={() => {}} // Read-only
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-lg">{challenge.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={selectedAnswer || undefined}
                onValueChange={setSelectedAnswer}
                disabled={gameState === 'answered'}
                className="space-y-3"
              >
                {challenge.options.map((option) => (
                  <Label
                    key={option}
                    className={cn(
                      "flex items-center gap-4 rounded-md border p-4 cursor-pointer transition-all hover:bg-accent",
                      getOptionClass(option)
                    )}
                  >
                    <RadioGroupItem value={option} id={option} />
                    <pre className="font-code text-sm">{option}</pre>
                  </Label>
                ))}
              </RadioGroup>
              <Button onClick={handleAnswerSubmit} disabled={gameState === 'answered' || selectedAnswer === null} className="mt-4 w-full">
                Submit Answer
              </Button>
            </CardContent>
          </Card>

          {gameState === 'answered' && (
            <Card>
              <CardContent className="p-6">
                {isCorrect ? (
                  <Alert className="bg-green-500/10 border-green-500/50">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <AlertTitle className="font-bold text-green-400">Correct!</AlertTitle>
                    <AlertDescription>
                      {challenge.explanation} You earned {challenge.xp} XP!
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Alert variant="destructive">
                    <XCircle className="h-4 w-4" />
                    <AlertTitle className="font-bold">Incorrect</AlertTitle>
                    <AlertDescription>
                      That's not quite right. Here's the explanation: {challenge.explanation}
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
