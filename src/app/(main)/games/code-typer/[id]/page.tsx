
"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter, notFound, useParams } from 'next/navigation';
import { codeTyperChallenges } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, RefreshCw, TimerIcon, Crosshair, Target, SkipForward, AlertCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { CompletionModal } from '@/components/games/completion-modal';
import { cn } from '@/lib/utils';

type GameStatus = 'waiting' | 'playing' | 'finished';

const getWPM = (charCount: number, seconds: number) => {
    if (seconds === 0) return 0;
    const words = charCount / 5;
    const minutes = seconds / 60;
    return Math.round(words / minutes);
};

const calculateDuration = (snippet: string, wpm: number = 25): number => {
    const charCount = snippet.length;
    const wordCount = charCount / 5; // Standard WPM calculation
    const minutes = wordCount / wpm;
    const seconds = Math.ceil(minutes * 60);
    return Math.max(seconds + 5, 30); // Add a 5-second buffer, with a minimum of 30 seconds
};

export default function CodeTyperArenaPage() {
    const params = useParams();
    const router = useRouter();

    const challenge = useMemo(() => {
        return codeTyperChallenges.find((c) => c.id === params.id);
    }, [params.id]);

    const challengeDuration = useMemo(() => {
        return challenge ? calculateDuration(challenge.snippet) : 60;
    }, [challenge]);

    const [userInput, setUserInput] = useState('');
    const [status, setStatus] = useState<GameStatus>('waiting');
    const [timer, setTimer] = useState(challengeDuration);
    const [totalErrors, setTotalErrors] = useState(0);
    const [isClient, setIsClient] = useState(false);
    const [startTime, setStartTime] = useState<Date | null>(null);

    const handleNextChallenge = useCallback(() => {
        if (!challenge) return;
        const currentIndex = codeTyperChallenges.findIndex(c => c.id === challenge.id);
        const nextChallenge = codeTyperChallenges[(currentIndex + 1) % codeTyperChallenges.length];
        router.push(`/games/code-typer/${nextChallenge.id}`);
    }, [challenge, router]);

    const resetGame = useCallback(() => {
        setStatus('waiting');
        setUserInput('');
        setTotalErrors(0);
        setTimer(challengeDuration);
        setStartTime(null);
    }, [challengeDuration]);

    useEffect(() => {
        setIsClient(true);
        resetGame();
    }, [challenge, resetGame]);

    useEffect(() => {
        if (status !== 'playing' || timer <= 0) {
            if (timer <= 0) setStatus('finished');
            return;
        };
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [status, timer]);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        if (status === 'finished') return;

        if (status === 'waiting' && value.length > 0) {
            setStatus('playing');
            setStartTime(new Date());
        }
        
        const isMistake = value.length > userInput.length && value[value.length-1] !== challenge?.snippet[value.length-1];
        if (isMistake) {
            setTotalErrors((prev) => prev + 1);
        }

        setUserInput(value);

        if (challenge && value === challenge.snippet) {
            setStatus('finished');
        }
    };

    if (!isClient) return null;

    if (!challenge) {
        notFound();
    }

    const { snippet } = challenge;
    const typedChars = userInput.length;
    const totalChars = snippet.length;
    const accuracy = totalChars > 0 ? Math.max(0, ((totalChars - totalErrors) / totalChars) * 100) : 100;
    
    const elapsedSeconds = startTime ? (new Date().getTime() - startTime.getTime()) / 1000 : 0;
    const wpm = getWPM(typedChars, elapsedSeconds);
    const progress = (typedChars / totalChars) * 100;

    const renderSnippet = () => {
        return snippet.split('').map((char, index) => {
            let className = 'text-muted-foreground/50';
            if (index < typedChars) {
                className = userInput[index] === char ? 'text-green-400' : 'text-red-500 underline';
            }
            if (index === typedChars) {
                className = 'animate-pulse bg-primary/50 rounded-sm'
            }
            // Handle newlines correctly for display
            if (char === '\n') {
                return <span key={index} className={cn('transition-colors duration-150', className)}>↵<br/></span>;
            }
            return <span key={index} className={cn('transition-colors duration-150', className)}>{char}</span>;
        })
    };

    return (
        <div className="flex flex-col h-screen p-4 md:p-6">
            <header className="flex h-16 shrink-0 items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => router.push('/games/code-typer')}>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl truncate">
                        Code Typer: {challenge.title}
                    </h1>
                </div>
                 <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={resetGame}>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Reset
                    </Button>
                     <Button size="sm" onClick={handleNextChallenge}>
                        Next Challenge
                        <SkipForward className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </header>

            <main className="flex-1 flex flex-col gap-6 pt-4">
                <Card>
                    <CardContent className="p-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div className="flex flex-col items-center gap-1">
                                <TimerIcon className="h-6 w-6 text-primary" />
                                <span className="text-2xl font-bold">{timer}s</span>
                                <span className="text-xs text-muted-foreground">Time Left</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <Crosshair className="h-6 w-6 text-primary" />
                                <span className="text-2xl font-bold">{accuracy.toFixed(1)}%</span>
                                <span className="text-xs text-muted-foreground">Accuracy</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <Target className="h-6 w-6 text-primary" />
                                <span className="text-2xl font-bold">{wpm}</span>
                                <span className="text-xs text-muted-foreground">WPM</span>
                            </div>
                             <div className="flex flex-col items-center gap-1">
                                 <AlertCircle className="h-6 w-6 text-destructive" />
                                <span className="text-2xl font-bold text-destructive">{totalErrors}</span>
                                <span className="text-xs text-muted-foreground">Errors</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="flex-1 flex flex-col relative">
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">Type the code</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                        <div className="relative h-full font-code text-base">
                            <div className="absolute inset-0 p-4 bg-muted rounded-md overflow-auto pointer-events-none">
                                <pre className="whitespace-pre-wrap select-none">
                                    <code>
                                        {renderSnippet()}
                                    </code>
                                </pre>
                            </div>
                           <textarea
                                value={userInput}
                                onChange={handleInputChange}
                                className="absolute inset-0 p-4 w-full h-full bg-transparent text-transparent caret-primary resize-none border-none outline-none overflow-auto whitespace-pre-wrap font-code text-base"
                                spellCheck="false"
                                autoCorrect="off"
                                autoComplete="off"
                                autoCapitalize="off"
                                autoFocus
                            />
                        </div>
                        <Progress value={progress} className="mt-4 h-2" />
                    </CardContent>
                </Card>
            </main>
            {status === 'finished' && (
                <CompletionModal 
                    xpGained={Math.round((challenge.xp * accuracy) / 100)}
                    wpm={wpm}
                    accuracy={accuracy}
                    onRetry={resetGame}
                    onNext={handleNextChallenge}
                />
            )}
        </div>
    );
}
