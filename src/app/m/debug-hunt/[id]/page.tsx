
'use client';

import { useState, useEffect, useRef } from 'react';
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Timer, CheckCircle, XCircle, Bug, Sparkles, ChevronLeft, Loader2, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getChallengeById, DebugChallenge, debugChallenges } from '@/lib/debug-challenges';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { notFound, useParams, useRouter } from 'next/navigation';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';


const TIME_LIMIT = 60; // 60 seconds

export default function DebugHuntGamePage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const [challenge, setChallenge] = useState<DebugChallenge | null>(null);
  const [userCode, setUserCode] = useState('');
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [isGameActive, setIsGameActive] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [result, setResult] = useState<'correct' | 'incorrect' | 'timeup' | null>(null);
  const [isClient, setIsClient] = useState(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { toast } = useToast();

    useEffect(() => {
        setIsClient(true);
        async function loadPrism() {
          await import('prismjs/components/prism-clike');
          await import('prismjs/components/prism-javascript');
          await import('prismjs/components/prism-python');
          await import('prismjs/components/prism-java');
          await import('prismjs/components/prism-cpp');
        }
        loadPrism();
    }, []);

  useEffect(() => {
    if (params.id) {
        const foundChallenge = getChallengeById(params.id);
        if (foundChallenge) {
            setChallenge(foundChallenge);
            setUserCode(foundChallenge.buggyCode);
            setTimeLeft(TIME_LIMIT);
            setIsGameActive(true);
            setIsGameOver(false);
            setResult(null);
        } else {
            notFound();
        }
    }
  }, [params.id]);
  

  useEffect(() => {
    if (isGameActive && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && isGameActive) {
      endGame('timeup');
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGameActive, timeLeft]);
  
  const endGame = (outcome: 'correct' | 'incorrect' | 'timeup') => {
    setIsGameActive(false);
    setIsGameOver(true);
    setResult(outcome);
     if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

    if (outcome === 'correct') {
      toast({ title: "Bug Squashed!", description: "Great job! You fixed the code." });
    } else if (outcome === 'incorrect') {
      toast({ variant: "destructive", title: "Not Quite!", description: "That's not the right fix. Try again!" });
    } else if (outcome === 'timeup') {
      toast({ variant: "destructive", title: "Time's Up!", description: "The clock ran out!" });
    }
  };

  const handleSubmit = () => {
    if (!challenge) return;

    // Normalize code for comparison
    const normalize = (code: string) => code.replace(/\s/g, '');
    const userSolution = normalize(userCode);
    const correctSolution = normalize(challenge.fixedCode);

    if (userSolution === correctSolution) {
      endGame('correct');
    } else {
      endGame('incorrect');
    }
  };

  const getNextChallengeId = () => {
        if (!challenge) return null;
        const currentIndex = debugChallenges.findIndex(c => c.id === challenge.id);
        if (currentIndex < debugChallenges.length - 1) {
            return debugChallenges[currentIndex + 1].id;
        }
        return null;
    }

  const nextChallengeId = getNextChallengeId();
  
    if (!challenge) {
        return (
             <DashboardLayout>
                <div className="flex items-center justify-center h-full">
                    <Loader2 className="h-16 w-16 animate-spin" />
                    <p className="ml-4 text-muted-foreground">Loading Challenge...</p>
                </div>
            </DashboardLayout>
        )
    }

  const highlight = (code: string) => {
    if (!isClient || !challenge || !Prism.languages[challenge.language]) {
        return code;
    }
    const lang = challenge.language;
    if (Prism.languages[lang]) {
        return Prism.highlight(code, Prism.languages[lang], lang);
    }
    return code;
  }

  return (
    <DashboardLayout>
        <div className="flex flex-col h-full">
             <div className="flex-shrink-0 p-4 border-b flex justify-between items-center">
                 <Button variant="outline" asChild>
                    <Link href="/m/debug-hunt">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Back to Challenge List
                    </Link>
                </Button>
                <h1 className="text-2xl font-bold tracking-tight font-headline flex items-center gap-2"><Bug /> Debug Hunt</h1>
            </div>

            <div className="flex-grow p-4 md:p-6">
                {(isGameActive || isGameOver) && challenge && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                        {/* Left Panel: Problem and Editor */}
                         <Card className="flex flex-col">
                             <CardHeader>
                                 <CardTitle>{challenge.title}</CardTitle>
                                 <CardDescription>{challenge.description}</CardDescription>
                             </CardHeader>
                             <CardContent className="flex-grow flex flex-col">
                                <Label htmlFor="code-editor" className="mb-2">Your Code (find and fix the bug):</Label>
                                 <div className="flex-grow relative h-full w-full bg-background font-code text-base border rounded-md">
                                     {isClient && (
                                       <Editor
                                          value={userCode}
                                          onValueChange={setUserCode}
                                          highlight={highlight}
                                          padding={10}
                                          className="h-full w-full absolute inset-0"
                                          textareaId="code-editor"
                                          disabled={!isGameActive}
                                      />
                                     )}
                                 </div>
                             </CardContent>
                        </Card>
                        {/* Right Panel: Game state and actions */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2"><Timer /> Game Status</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                     <div>
                                        <p className="text-sm font-medium text-muted-foreground">Time Remaining</p>
                                        <p className={`text-4xl font-bold ${timeLeft < 10 ? 'text-destructive' : ''}`}>{timeLeft}s</p>
                                    </div>
                                    <Button onClick={handleSubmit} disabled={!isGameActive} className="w-full">
                                        <Sparkles className="mr-2" />
                                        Submit Fix
                                    </Button>
                                </CardContent>
                            </Card>

                            {isGameOver && (
                                <Card>
                                     <CardHeader>
                                        <CardTitle>Result</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {result === 'correct' && (
                                            <Alert variant="default" className="bg-green-500/10 border-green-500 text-green-700">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <AlertTitle>Correct!</AlertTitle>
                                                <AlertDescription>You squashed the bug! Well done.</AlertDescription>
                                            </Alert>
                                        )}
                                         {(result === 'incorrect' || result === 'timeup') && (
                                            <Alert variant="destructive">
                                                <XCircle className="h-4 w-4" />
                                                <AlertTitle>{result === 'incorrect' ? 'Incorrect Fix' : "Time's Up!"}</AlertTitle>
                                                <AlertDescription>The correct code was:</AlertDescription>
                                                 <pre className="mt-2 bg-background p-2 rounded-md font-code text-xs overflow-x-auto">
                                                    <code>{challenge.fixedCode}</code>
                                                 </pre>
                                            </Alert>
                                        )}
                                        {nextChallengeId ? (
                                            <Button asChild className="w-full">
                                                <Link href={`/m/debug-hunt/${nextChallengeId}`}>
                                                    Next Challenge <ArrowRight className="ml-2"/>
                                                </Link>
                                            </Button>
                                        ) : (
                                            <Button asChild className="w-full">
                                                <Link href="/m/debug-hunt">Back to Challenges</Link>
                                            </Button>
                                        )}
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    </DashboardLayout>
  );
}

    