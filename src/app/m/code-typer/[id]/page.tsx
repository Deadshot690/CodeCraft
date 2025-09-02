
'use client';

import { useState, useEffect, useRef } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { DashboardLayout } from "@/components/dashboard-layout";
import { getTyperChallengeById, TyperChallenge } from "@/lib/typer-challenges";
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, RefreshCw, BarChart, Timer, Target, CheckCircle, XCircle } from 'lucide-react';

const languageDisplayMap: { [key: string]: string } = {
    'javascript': 'JavaScript',
    'python': 'Python',
    'html': 'HTML',
    'css': 'CSS',
    'java': 'Java',
    'cpp': 'C++',
};

export default function CodeTyperGamePage() {
    const params = useParams<{ id: string }>();
    const [challenge, setChallenge] = useState<TyperChallenge | null>(null);
    const [typedCode, setTypedCode] = useState('');
    const [startTime, setStartTime] = useState<number | null>(null);
    const [errors, setErrors] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const isIncorrect = useRef(false);

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
            if (typedCode.length === 1 && !startTime) {
                setStartTime(Date.now());
            }
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
        isIncorrect.current = false;
        inputRef.current?.focus();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (isFinished || !challenge) return;
        
        const currentTyped = e.target.value;
        const sourceSnippet = challenge.snippet;

        // Check for new errors only on character addition
        if (currentTyped.length > typedCode.length) {
            if (sourceSnippet.startsWith(currentTyped)) {
                 isIncorrect.current = false;
            } else {
                if(!isIncorrect.current) {
                    setErrors(errors + 1);
                    isIncorrect.current = true;
                }
            }
        } else {
            // This handles backspace. If the now shorter typed string is a correct prefix, the error state is cleared.
            if (sourceSnippet.startsWith(currentTyped)) {
                isIncorrect.current = false;
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
                    <h1 className="text-xl font-bold tracking-tight font-headline text-center">{challenge.title}<br/><span className="text-sm text-muted-foreground font-normal">{languageDisplayMap[challenge.language]} - {challenge.difficulty}</span></h1>
                    <Button variant="ghost" onClick={() => resetGame(challenge)}>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Restart
                    </Button>
                </div>
                <div className="flex-grow p-4 md:p-6 flex flex-col items-center justify-center">
                   {isFinished ? (
                       <Card className="w-full max-w-2xl text-center animate-fade-in">
                           <CardHeader>
                               <CardTitle className="text-3xl font-headline">Challenge Complete!</CardTitle>
                               <CardDescription>Here are your results.</CardDescription>
                           </CardHeader>
                           <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                               <Card className="p-4 bg-muted/50">
                                   <div className="text-4xl font-bold">{wpm}</div>
                                   <div className="text-muted-foreground">WPM</div>
                               </Card>
                               <Card className="p-4 bg-muted/50">
                                   <div className="text-4xl font-bold">{accuracy}%</div>
                                   <div className="text-muted-foreground">Accuracy</div>
                               </Card>
                               <Card className="p-4 bg-muted/50">
                                   <div className="text-4xl font-bold">{timeTaken?.toFixed(1)}s</div>
                                   <div className="text-muted-foreground">Time</div>
                               </Card>
                           </CardContent>
                           <CardFooter className="flex-col gap-4 pt-6">
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
                    <div className="w-full max-w-4xl space-y-6">
                        <div className="font-code text-xl bg-muted p-6 rounded-md relative select-none" onClick={() => inputRef.current?.focus()}>
                            <div className="whitespace-pre-wrap">
                                <span className="text-primary">{typedCode}</span>
                                <span className={cn("relative", isIncorrect.current ? "bg-destructive/20" : "bg-primary/20", "animate-caret-blink")}>
                                    {challenge.snippet[typedCode.length] === '\n' ? '↵' : challenge.snippet[typedCode.length]}
                                </span>
                                <span className="text-muted-foreground/60">{challenge.snippet.substring(typedCode.length + 1)}</span>
                            </div>
                            <textarea
                                ref={inputRef}
                                value={typedCode}
                                onChange={handleInputChange}
                                className="absolute inset-0 w-full h-full p-6 bg-transparent border-none outline-none resize-none font-code text-lg text-transparent caret-transparent"
                                autoFocus
                                spellCheck="false"
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <Card className="p-4 flex items-center justify-center gap-4">
                                <Timer className="w-8 h-8 text-primary" />
                                <div>
                                    <p className="text-2xl font-bold">{startTime ? ((Date.now() - startTime) / 1000).toFixed(1) : '0.0'}s</p>
                                    <p className="text-sm text-muted-foreground">Time Elapsed</p>
                                </div>
                            </Card>
                            <Card className="p-4 flex items-center justify-center gap-4">
                               <XCircle className="w-8 h-8 text-destructive" />
                                <div>
                                    <p className="text-2xl font-bold text-destructive">{errors}</p>
                                    <p className="text-sm text-muted-foreground">Errors</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                   )}
                </div>
            </div>
        </DashboardLayout>
    );
}
