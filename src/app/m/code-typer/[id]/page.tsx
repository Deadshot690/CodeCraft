
'use client';

import { useState, useEffect, useRef } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { DashboardLayout } from "@/components/dashboard-layout";
import { getTyperChallengeById, TyperChallenge } from "@/lib/typer-challenges";
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, RefreshCw, BarChart, Timer, Target } from 'lucide-react';

export default function CodeTyperGamePage() {
    const params = useParams<{ id: string }>();
    const [challenge, setChallenge] = useState<TyperChallenge | null>(null);
    const [typedCode, setTypedCode] = useState('');
    const [startTime, setStartTime] = useState<number | null>(null);
    const [errors, setErrors] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    
    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const foundChallenge = getTyperChallengeById(params.id);
        if (foundChallenge) {
            setChallenge(foundChallenge);
            resetGame(foundChallenge);
        } else {
            notFound();
        }
    }, [params.id]);

    useEffect(() => {
        if (challenge && !isFinished) {
            // Start timer on first keypress
            if (typedCode.length === 1 && !startTime) {
                setStartTime(Date.now());
            }

            // Check for completion
            if (typedCode === challenge.snippet) {
                setIsFinished(true);
            }
        }
    }, [typedCode, challenge, startTime, isFinished]);
    
    const resetGame = (currentChallenge: TyperChallenge) => {
        setChallenge(currentChallenge);
        setTypedCode('');
        setStartTime(null);
        setErrors(0);
        setIsFinished(false);
        inputRef.current?.focus();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (isFinished) return;
        const currentTyped = e.target.value;
        const sourceSnippet = challenge!.snippet;

        // Check for new errors
        if (currentTyped.length > typedCode.length) { // Only check on new characters
            const lastCharTyped = currentTyped[currentTyped.length - 1];
            const lastCharExpected = sourceSnippet[currentTyped.length - 1];
            if(lastCharTyped !== lastCharExpected) {
                setErrors(errors + 1);
            }
        }

        setTypedCode(currentTyped);
    };

    if (!challenge) {
        return <DashboardLayout><div>Loading...</div></DashboardLayout>;
    }
    
    const timeTaken = startTime && isFinished ? (Date.now() - startTime) / 1000 : null;
    const words = challenge.snippet.split(/\s+/).length;
    const wpm = timeTaken ? Math.round((words / timeTaken) * 60) : 0;
    const accuracy = Math.max(0, Math.round(((challenge.snippet.length - errors) / challenge.snippet.length) * 100));

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <div className="flex-shrink-0 p-4 border-b flex justify-between items-center">
                    <Button variant="outline" asChild>
                        <Link href="/m/code-typer">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Back to Challenges
                        </Link>
                    </Button>
                    <h1 className="text-xl font-bold tracking-tight font-headline">{challenge.title}</h1>
                    <Button variant="ghost" onClick={() => resetGame(challenge)}>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Restart
                    </Button>
                </div>
                <div className="flex-grow p-4 md:p-6 flex items-center justify-center">
                   {isFinished ? (
                       <Card className="w-full max-w-lg text-center">
                           <CardHeader>
                               <CardTitle className="text-3xl font-headline">Challenge Complete!</CardTitle>
                           </CardHeader>
                           <CardContent className="grid grid-cols-3 gap-4 text-center">
                               <div>
                                   <div className="text-4xl font-bold">{wpm}</div>
                                   <div className="text-muted-foreground">WPM</div>
                               </div>
                               <div>
                                   <div className="text-4xl font-bold">{accuracy}%</div>
                                   <div className="text-muted-foreground">Accuracy</div>
                               </div>
                               <div>
                                   <div className="text-4xl font-bold">{timeTaken?.toFixed(1)}s</div>
                                   <div className="text-muted-foreground">Time</div>
                               </div>
                           </CardContent>
                           <CardFooter className="flex-col gap-4">
                                <Button className="w-full" onClick={() => resetGame(challenge)}>
                                    <RefreshCw className="mr-2" />
                                    Try Again
                                </Button>
                               <Button variant="outline" className="w-full" asChild>
                                   <Link href="/m/code-typer">
                                        <BarChart className="mr-2" />
                                        Choose Another Challenge
                                   </Link>
                               </Button>
                           </CardFooter>
                       </Card>
                   ) : (
                    <Card className="w-full max-w-4xl relative">
                        <CardContent className="p-6">
                            <div className="font-code text-lg bg-muted p-6 rounded-md relative select-none">
                                {challenge.snippet.split('').map((char, index) => {
                                    let charState = 'text-muted-foreground/50';
                                    if(index < typedCode.length) {
                                        charState = char === typedCode[index] ? 'text-primary' : 'text-destructive bg-destructive/20';
                                    }
                                    if(index === typedCode.length) {
                                        charState = 'animate-pulse bg-primary/20 rounded';
                                    }
                                    return <span key={index} className={cn(charState)}>{char === '\n' ? '↵\n' : char}</span>
                                })}
                                <div className={cn("absolute inset-0 w-full h-full bg-transparent", isFinished && "hidden")}>
                                     <textarea
                                        ref={inputRef}
                                        value={typedCode}
                                        onChange={handleInputChange}
                                        className="absolute inset-0 w-full h-full p-6 bg-transparent border-none outline-none resize-none font-code text-lg text-transparent caret-primary"
                                        autoFocus
                                        spellCheck="false"
                                        autoComplete="off"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-center mt-4">
                                <div className="p-2 rounded-lg bg-muted">
                                    <p className="text-sm font-medium text-muted-foreground">Language</p>
                                    <p className="font-bold">{challenge.language}</p>
                                </div>
                                <div className="p-2 rounded-lg bg-muted">
                                    <p className="text-sm font-medium text-muted-foreground">Difficulty</p>
                                    <p className="font-bold">{challenge.difficulty}</p>
                                </div>
                                <div className="p-2 rounded-lg bg-muted">
                                    <p className="text-sm font-medium text-muted-foreground">Errors</p>
                                    <p className="font-bold text-destructive">{errors}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                   )}
                </div>
            </div>
        </DashboardLayout>
    );
}
