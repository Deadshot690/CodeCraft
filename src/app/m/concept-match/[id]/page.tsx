
'use client';

import { useState, useEffect } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { DashboardLayout } from "@/components/dashboard-layout";
import { getConceptMatchChallengeById, ConceptMatchChallenge, conceptMatchChallenges } from "@/lib/concept-match-challenges";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, CheckCircle, XCircle, RefreshCw, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/use-auth';
import { markMiniGameAsSolved } from '@/app/actions';
import { useProgress } from '@/hooks/use-progress';


// Function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}


export default function ConceptMatchGamePage() {
    const router = useRouter();
    const params = useParams<{ id: string }>();
    const { user } = useAuth();
    const { refreshProgress } = useProgress();
    const [challenge, setChallenge] = useState<ConceptMatchChallenge | null>(null);
    const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        const foundChallenge = getConceptMatchChallengeById(params.id);
        if (foundChallenge) {
            setChallenge(foundChallenge);
            resetGame(foundChallenge);
        } else {
            notFound();
        }
    }, [params.id]);

    const resetGame = (currentChallenge: ConceptMatchChallenge) => {
        setShuffledOptions(shuffleArray(currentChallenge.options));
        setSelectedOption(null);
        setIsAnswered(false);
    };

    const markAsSolved = async () => {
        if (!challenge) return;
        if (user) {
            await markMiniGameAsSolved(user.uid, challenge.id);
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
        refreshProgress();
    };
    
    const handleOptionSelect = (option: string) => {
        if (isAnswered) return;
        setSelectedOption(option);
        setIsAnswered(true);

        const isCorrect = option === challenge?.correctAnswer;
        if (isCorrect) {
            toast({
                title: "Correct!",
                description: "You've correctly matched the concept. +50XP",
            });
            markAsSolved();
        } else {
            toast({
                variant: "destructive",
                title: "Incorrect",
                description: "That's not the right match. Check the explanation.",
            });
        }
    };
    
    const getNextChallengeId = () => {
        if (!challenge) return null;
        const currentIndex = conceptMatchChallenges.findIndex(c => c.id === challenge.id);
        if (currentIndex < conceptMatchChallenges.length - 1) {
            return conceptMatchChallenges[currentIndex + 1].id;
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
                        <Link href="/m/concept-match">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Back to Challenges
                        </Link>
                    </Button>
                    <Button variant="ghost" onClick={() => resetGame(challenge)}>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Restart
                    </Button>
                </div>
                <div className="flex-grow p-4 md:p-6 flex justify-center items-start">
                     <Card className="w-full max-w-4xl">
                        <CardHeader className="text-center">
                            <CardDescription>Match the code snippet to the concept:</CardDescription>
                            <CardTitle className="font-headline text-3xl">{challenge.concept}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                {shuffledOptions.map((option, index) => {
                                    const isSelected = selectedOption === option;
                                    const isTheCorrectAnswer = option === challenge.correctAnswer;
                                    
                                    return (
                                        <Card 
                                            key={index}
                                            onClick={() => handleOptionSelect(option)}
                                            className={cn(
                                                "cursor-pointer transition-all hover:border-primary",
                                                isAnswered && isTheCorrectAnswer && "border-2 border-green-500 bg-green-500/10",
                                                isAnswered && isSelected && !isTheCorrectAnswer && "border-2 border-destructive bg-destructive/10",
                                                isAnswered && !isSelected && "opacity-60"
                                            )}
                                        >
                                            <CardContent className="p-4">
                                                 <pre className="bg-muted p-3 rounded-md font-code text-sm overflow-x-auto">
                                                    <code>{option}</code>
                                                 </pre>
                                            </CardContent>
                                        </Card>
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
                                        <Link href={`/m/concept-match/${nextChallengeId}`}>
                                            Next Challenge <ArrowRight className="ml-2"/>
                                        </Link>
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
