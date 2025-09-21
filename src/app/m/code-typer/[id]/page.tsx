
'use client';

import { useState, useEffect, useRef } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { DashboardLayout } from "@/components/dashboard-layout";
import { getTyperChallengeById, TyperChallenge, typerChallenges } from "@/lib/typer-challenges";
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, RefreshCw, BarChart, Timer, Target, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';


const languageDisplayMap: { [key: string]: string } = {
    'javascript': 'JavaScript',
    'python': 'Python',
    'html': 'HTML',
    'css': 'CSS',
    'java': 'Java',
    'cpp': 'C++',
};

export default function CodeTyperGamePage() {
    const router = useRouter();
    const params = useParams<{ id: string }>();
    const [challenge, setChallenge] = useState<TyperChallenge | null>(null);
    const [typedCode, setTypedCode] = useState('');
    const [startTime, setStartTime] = useState<number | null>(null);
    const [errors, setErrors] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [isClient, setIsClient] = useState(false);
    
    const editorRef = useRef<any>(null);
    const isIncorrect = useRef(false);

    useEffect(() => {
        setIsClient(true);
        const loadPrism = async () => {
          await import('prismjs/themes/prism.css');
          // Load base grammar first
          await import('prismjs/components/prism-clike');
          // Then load other languages
          await import('prismjs/components/prism-javascript');
          await import('prismjs/components/prism-python');
          await import('prismjs/components/prism-java');
          await import('prismjs/components/prism-cpp');
          await import('prismjs/components/prism-css');
          await import('prismjs/components/prism-markup'); // For HTML
        }
        loadPrism();
    }, []);

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
        editorRef.current?.focus();
    };

    const handleInputChange = (currentTyped: string) => {
        if (isFinished || !challenge) return;
        
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

     const getNextChallengeId = () => {
        if (!challenge) return null;
        const currentIndex = typerChallenges.findIndex(c => c.id === challenge.id);
        if (currentIndex < typerChallenges.length - 1) {
            return typerChallenges[currentIndex + 1].id;
        }
        return null;
    }
    
    const nextChallengeId = getNextChallengeId();

    if (!challenge) {
        return <DashboardLayout><div>Loading...</div></DashboardLayout>;
    }
    
    const timeTaken = startTime && isFinished ? (Date.now() - startTime) / 1000 : null;
    const words = challenge.snippet.split(/\s+/).length;
    const wpm = timeTaken ? Math.round((words / timeTaken) * 60) : 0;
    const accuracy = Math.max(0, Math.round(((challenge.snippet.length - errors) / challenge.snippet.length) * 100));
    
    const highlight = (code: string) => {
        const lang = challenge.language === 'html' ? 'markup' : challenge.language;
        if (!isClient || !challenge || !Prism.languages[lang]) {
            return code;
        }
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
                                {nextChallengeId ? (
                                     <Button asChild className="w-full">
                                        <Link href={`/m/code-typer/${nextChallengeId}`}>
                                            Next Challenge <ArrowRight className="ml-2"/>
                                        </Link>
                                    </Button>
                                ) : (
                                     <Button className="w-full" onClick={() => resetGame(challenge)}>
                                        <RefreshCw className="mr-2" />
                                        Try Again
                                    </Button>
                                )}
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
                        <Card>
                            <CardContent className="p-4">
                                <div className="font-code text-lg bg-muted p-4 rounded-md whitespace-pre-wrap text-muted-foreground/60 select-none">
                                    {challenge.snippet}
                                </div>
                            </CardContent>
                        </Card>
                         <div className="relative font-code text-lg">
                            {isClient && (
                              <Editor
                                  ref={editorRef}
                                  value={typedCode}
                                  onValueChange={handleInputChange}
                                  highlight={highlight}
                                  padding={16}
                                  className="bg-background border rounded-md min-h-[200px]"
                                  autoFocus
                              />
                            )}
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
