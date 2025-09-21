
'use client';

import { useState, useEffect } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { DashboardLayout } from "@/components/dashboard-layout";
import { getOutputPredictionChallengeById, OutputPredictionChallenge, outputPredictionChallenges } from "@/lib/output-prediction-challenges";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, BrainCircuit, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/use-auth';
import { markMiniGameAsSolved } from '@/app/actions';

export default function OutputPredictionGamePage() {
    const router = useRouter();
    const params = useParams<{ id: string }>();
    const { user } = useAuth();
    const [challenge, setChallenge] = useState<OutputPredictionChallenge | null>(null);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        const foundChallenge = getOutputPredictionChallengeById(params.id);
        if (foundChallenge) {
            setChallenge(foundChallenge);
            resetGame();
        } else {
            notFound();
        }
    }, [params.id]);

    const resetGame = () => {
        setSelectedOption(null);
        setIsAnswered(false);
    };

    const markAsSolved = () => {
        if (!challenge) return;
        if (user) {
            markMiniGameAsSolved(user.uid, challenge.id);
        } else {
            try {
                const solvedGames: string[] = JSON.parse(localStorage.getItem('solvedMiniGames') || '[]');
                if (!solvedGames.includes(challenge.id)) {
                    solvedGames.push(challenge.id);
                    localStorage.setItem('solvedMiniGames', JSON.stringify(solvedGames));
                }
            } catch (e) {
                console.error("Failed to update solved mini-games in localStorage", e);
            }
        }
    };
    
    const handleOptionSelect = (option: string) => {
        if (isAnswered) return;
        setSelectedOption(option);
        setIsAnswered(true);

        const isCorrect = option === challenge?.correctAnswer;
        if (isCorrect) {
            toast({
                title: "Correct!",
                description: "You predicted the output perfectly.",
            });
            markAsSolved();
        } else {
            toast({
                variant: "destructive",
                title: "Not Quite",
                description: "That was not the correct output.",
            });
        }
    };
    
    const getNextChallengeId = () => {
        if (!challenge) return null;
        const currentIndex = outputPredictionChallenges.findIndex(c => c.id === challenge.id);
        if (currentIndex < outputPredictionChallenges.length - 1) {
            return outputPredictionChallenges[currentIndex + 1].id;
        }
        return null;
    }

    if (!challenge) {
        return <DashboardLayout><div>Loading...</div></DashboardLayout>;
    }
    
    const isCorrect = selectedOption === challenge.correctAnswer;
    const nextChallengeId = getNextChallengeId();

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                 <div className="flex-shrink-0 p-4 border-b flex justify-between items-center">
                    <Button variant="outline" asChild>
                        <Link href="/m/output-prediction">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Back to Challenges
                        </Link>
                    </Button>
                    <div className="text-center">
                         <h1 className="text-xl font-bold tracking-tight font-headline">{challenge.title}</h1>
                         <p className="text-sm text-muted-foreground">{challenge.description}</p>
                    </div>
                    <Button variant="ghost" onClick={() => router.push(`/m/output-prediction/${challenge.id}`)}>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Restart
                    </Button>
                </div>
                <div className="flex-grow p-4 md:p-6 flex justify-center items-start">
                     <Card className="w-full max-w-3xl">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><BrainCircuit /> What is the Output?</CardTitle>
                             <CardDescription>Review the code snippet below and select the correct output from the options.</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <pre className="bg-muted p-4 rounded-md font-code text-sm overflow-x-auto">
                                <code>{challenge.codeSnippet}</code>
                             </pre>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                {challenge.options.map((option, index) => {
                                    const isSelected = selectedOption === option;
                                    const isTheCorrectAnswer = option === challenge.correctAnswer;
                                    
                                    return (
                                        <Button
                                            key={index}
                                            variant={isAnswered && isTheCorrectAnswer ? 'default' : (isSelected ? 'destructive' : 'outline')}
                                            onClick={() => handleOptionSelect(option)}
                                            disabled={isAnswered}
                                            className={cn("justify-start h-auto p-4 text-left whitespace-normal",
                                                isAnswered && isTheCorrectAnswer && "bg-green-600 hover:bg-green-700",
                                                isSelected && !isTheCorrectAnswer && "bg-destructive hover:bg-destructive/90"
                                            )}
                                        >
                                            <div className="flex items-center w-full">
                                                <div className="flex-grow font-code">{option}</div>
                                                {isAnswered && isTheCorrectAnswer && isSelected && <CheckCircle className="ml-2 text-white" />}
                                                {isAnswered && isTheCorrectAnswer && !isSelected && <CheckCircle className="ml-2 text-white" />}
                                                {isAnswered && !isTheCorrectAnswer && isSelected && <XCircle className="ml-2 text-white" />}
                                            </div>
                                        </Button>
                                    )
                                })}
                            </div>
                        </CardContent>
                         {isAnswered && (
                            <CardFooter className="flex-col gap-4 items-start">
                                 <Alert variant={isCorrect ? "default" : "destructive"} className={isCorrect ? "bg-green-500/10 border-green-500 text-green-700" : ""}>
                                    {isCorrect ? <CheckCircle className="h-4 w-4 text-green-500" /> : <XCircle className="h-4 w-4" />}
                                    <AlertTitle>{isCorrect ? 'Correct!' : 'Incorrect!'}</AlertTitle>
                                    <AlertDescription>
                                        {challenge.explanation}
                                    </AlertDescription>
                                </Alert>
                                {nextChallengeId ? (
                                     <Button asChild className="w-full">
                                        <Link href={`/m/output-prediction/${nextChallengeId}`}>Next Challenge</Link>
                                    </Button>
                                ) : (
                                    <p className="text-center text-muted-foreground w-full">You've completed all the challenges!</p>
                                )}
                            </CardFooter>
                         )}
                     </Card>
                </div>
            </div>
        </DashboardLayout>
    );
}
