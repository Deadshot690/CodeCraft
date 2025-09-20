
'use client';

import { useState, useEffect, useRef } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { DashboardLayout } from "@/components/dashboard-layout";
import { getCodeRushChallengeById, getNextCodeRushChallengeId, CodeRushChallenge } from "@/lib/code-rush-challenges";
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, RefreshCw, BarChart, Timer, CheckCircle, XCircle, ArrowRight, Loader2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const TIME_LIMIT_SECONDS = 15;

const languageDisplayMap: { [key: string]: string } = {
    'javascript': 'JavaScript',
    'python': 'Python',
    'html': 'HTML',
    'css': 'CSS',
    'java': 'Java',
    'cpp': 'C++',
};

export default function CodeRushGamePage() {
    const router = useRouter();
    const params = useParams<{ id: string }>();
    const { toast } = useToast();

    const [challenge, setChallenge] = useState<CodeRushChallenge | null>(null);
    const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_SECONDS);
    const [score, setScore] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [gameState, setGameState] = useState<'idle' | 'playing' | 'correct' | 'incorrect' | 'timesup'>('idle');
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    
    const nextChallengeId = challenge ? getNextCodeRushChallengeId(challenge.id) : null;

    useEffect(() => {
        const foundChallenge = getCodeRushChallengeById(params.id);
        if (foundChallenge) {
            setChallenge(foundChallenge);
            resetGame(foundChallenge);
        } else {
            notFound();
        }
    }, [params.id]);

    useEffect(() => {
        if (gameState === 'playing' && timeLeft > 0) {
            timerRef.current = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        } else if (gameState === 'playing' && timeLeft === 0) {
            setGameState('timesup');
            toast({ variant: 'destructive', title: "Time's Up!" });
        }
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [gameState, timeLeft, toast]);

    const resetGame = (currentChallenge: CodeRushChallenge | null = challenge) => {
        if (!currentChallenge) return;
        setChallenge(currentChallenge);
        setTimeLeft(TIME_LIMIT_SECONDS);
        setScore(0);
        setUserInput('');
        setGameState('idle');
        inputRef.current?.focus();
    };

    const startGame = () => {
        setGameState('playing');
        inputRef.current?.focus();
    }
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (gameState !== 'playing' || !challenge) return;

        if (userInput.trim() === challenge.answer) {
            setGameState('correct');
            const points = 50 + timeLeft * 5; // Simple scoring logic
            setScore(score + points);
            toast({ title: "Correct!", description: `+${points} points` });
            if (timerRef.current) clearTimeout(timerRef.current);
        } else {
            setGameState('incorrect');
            setTimeLeft(prev => Math.max(0, prev - 5)); // Penalty
            toast({ variant: 'destructive', title: "Wrong!", description: "-5 seconds" });
        }
    };
    
    if (!challenge) {
        return <DashboardLayout><div className="flex items-center justify-center h-full"><Loader2 className="h-16 w-16 animate-spin" /></div></DashboardLayout>;
    }

    const [before, after] = challenge.snippet.split('___');

    const renderEndScreen = () => (
        <Card className="w-full max-w-2xl text-center animate-fade-in">
            <CardHeader>
                <CardTitle className="text-3xl font-headline">
                    {gameState === 'timesup' ? "Time's Up!" : "Round Over"}
                </CardTitle>
                <CardDescription>Your final score is:</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-6xl font-bold">{score}</div>
                <p className="text-muted-foreground mt-2">The correct answer was: <code className="font-bold bg-muted p-1 rounded-sm">{challenge.answer}</code></p>
            </CardContent>
            <CardFooter className="flex-col gap-4 pt-6">
                {nextChallengeId ? (
                    <Button asChild className="w-full" onClick={() => router.push(`/m/code-rush/${nextChallengeId}`)}>
                        <Link href={`/m/code-rush/${nextChallengeId}`}>Next Challenge <ArrowRight className="ml-2"/></Link>
                    </Button>
                ) : (
                    <Button className="w-full" onClick={() => resetGame()}>
                        <RefreshCw className="mr-2" />
                        Try Again
                    </Button>
                )}
                <Button variant="outline" className="w-full" asChild>
                   <Link href="/m/code-rush"><BarChart className="mr-2" />Choose Another Challenge</Link>
                </Button>
            </CardFooter>
        </Card>
    );

    const renderGameScreen = () => (
        <div className="w-full max-w-4xl space-y-8">
            <Card>
                <CardHeader className='text-center'>
                    <CardTitle className="font-headline text-2xl">{challenge.title}</CardTitle>
                    <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className={cn("font-code text-xl bg-muted p-8 rounded-md text-center border-2", 
                        gameState === 'correct' && 'border-green-500',
                        gameState === 'incorrect' && 'border-destructive'
                    )}>
                        <span className="text-muted-foreground/80">{before}</span>
                        <span className={cn("bg-background border-b-2 border-primary inline-block min-w-24 text-center text-primary font-bold",
                             gameState === 'correct' && 'border-green-500 text-green-500',
                             gameState === 'incorrect' && 'border-destructive text-destructive'
                        )}>
                            {gameState === 'correct' ? challenge.answer : (gameState === 'incorrect' ? userInput || '???' : '___')}
                        </span>
                        <span className="text-muted-foreground/80">{after}</span>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-6">
                        <Input 
                            ref={inputRef}
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            className="w-full text-center text-lg font-code h-12"
                            placeholder="Type the missing code here"
                            disabled={gameState !== 'playing'}
                            autoFocus
                            autoComplete="off"
                            spellCheck="false"
                        />
                         <Button type="submit" className="w-full mt-4" disabled={gameState !== 'playing'}>Submit</Button>
                    </form>
                </CardContent>
            </Card>

            <Card className="p-4 flex items-center justify-center gap-4">
                <Timer className="w-8 h-8 text-primary" />
                <div>
                    <p className="text-sm text-muted-foreground">Time Remaining</p>
                    <p className="text-2xl font-bold">{timeLeft}s</p>
                </div>
            </Card>
        </div>
    );
    
    const renderStartScreen = () => (
        <Card className="w-full max-w-2xl text-center">
            <CardHeader>
                <CardTitle className="text-3xl font-headline">{challenge.title}</CardTitle>
                <CardDescription>{languageDisplayMap[challenge.language]} - {challenge.difficulty}</CardDescription>
            </CardHeader>
            <CardContent>
                 <p className="text-lg">Fill in the blank before the timer runs out!</p>
                  <pre className="bg-muted p-4 rounded-md font-code text-lg overflow-x-auto my-4 text-left whitespace-pre-wrap">
                    <code>{challenge.snippet.replace('___', '<span class="font-bold text-primary">___</span>')}</code>
                 </pre>
            </CardContent>
            <CardFooter>
                 <Button onClick={startGame} className="w-full" size="lg">Start Rush</Button>
            </CardFooter>
        </Card>
    );

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <div className="flex-shrink-0 p-4 border-b flex justify-between items-center">
                    <Button variant="outline" asChild><Link href="/m/code-rush"><ChevronLeft className="mr-2 h-4 w-4" />Back to Challenges</Link></Button>
                    <div className="text-center">
                         <div className="flex items-center gap-4">
                            <Timer className="h-5 w-5" />
                            <Progress value={(timeLeft / TIME_LIMIT_SECONDS) * 100} className="w-64 h-4" />
                        </div>
                    </div>
                     <div>
                        <span className="font-bold text-lg">Score: {score}</span>
                    </div>
                </div>
                <div className="flex-grow p-4 md:p-6 flex flex-col items-center justify-center">
                   {gameState === 'idle' && renderStartScreen()}
                   {gameState === 'playing' && renderGameScreen()}
                   {(gameState === 'correct' || gameState === 'incorrect' || gameState === 'timesup') && renderEndScreen()}
                </div>
            </div>
        </DashboardLayout>
    );
}
