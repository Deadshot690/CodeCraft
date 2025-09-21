
'use client';

import { useState, useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { notFound, useRouter, useParams } from 'next/navigation';
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Swords, Heart, Shield, HelpCircle, Bot, Loader2, XCircle, MessageCircle, List, ChevronLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { getRandomMonster, BattleMonster, BattleChallenge, challenges } from '@/lib/battle-challenges';
import { evaluateAnswerAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const initialState = {
  isCorrect: null,
  message: '',
  correctAnswer: '',
  formErrors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Attacking...
        </>
      ) : (
        <>
          <Swords className="mr-2 h-4 w-4" />
          Attack
        </>
      )}
    </Button>
  );
}

export default function MonsterBattlePage() {
    const router = useRouter();
    const params = useParams<{ id: string }>();
    const [monster, setMonster] = useState<BattleMonster | null>(null);
    const [challenge, setChallenge] = useState<BattleChallenge | null>(null);
    const [monsterHP, setMonsterHP] = useState(100);
    const [playerHP, setPlayerHP] = useState(100);
    const [state, formAction] = useActionState(evaluateAnswerAction, initialState);
    const [lastAnswerWasCorrect, setLastAnswerWasCorrect] = useState<boolean | null>(null);
    const { toast } = useToast();
    const [dialogue, setDialogue] = useState<string>("A wild monster appears!");
    const [isBattleOver, setIsBattleOver] = useState(false);

    const playerCardRef = useRef<HTMLDivElement>(null);
    const monsterImageRef = useRef<HTMLImageElement>(null);
    const answerInputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const currentChallenge = challenges.find(c => c.id === params.id);
        if (currentChallenge) {
            const newMonster = getRandomMonster(currentChallenge.difficulty);
            setChallenge(currentChallenge);
            setMonster(newMonster);
            setMonsterHP(newMonster.hp);
            setPlayerHP(100);
            setDialogue(`A wild ${newMonster.name} challenges you!`);
            setIsBattleOver(false);
            setLastAnswerWasCorrect(null);
            if(formRef.current) formRef.current.reset();
        } else {
            notFound();
        }
    }, [params.id]);

    const markAsSolved = () => {
        if (!challenge) return;
        try {
            const solvedGames: string[] = JSON.parse(localStorage.getItem('solvedMiniGames') || '[]');
            if (!solvedGames.includes(challenge.id)) {
                solvedGames.push(challenge.id);
                localStorage.setItem('solvedMiniGames', JSON.stringify(solvedGames));
            }
        } catch (e) {
            console.error("Failed to update solved mini-games in localStorage", e);
        }
    };
    
    // Effect to handle game logic from form action
    useEffect(() => {
        if (state.isCorrect === null || isBattleOver) {
            return;
        }

        if (state.isCorrect === true) {
            setLastAnswerWasCorrect(true);
            setDialogue(`A critical blow! You defeated the ${monster?.name}!`);
            monsterImageRef.current?.classList.add('animate-fade-out');
            setIsBattleOver(true);
            markAsSolved();
            
            formRef.current?.reset();
             if (answerInputRef.current) {
                answerInputRef.current.value = "";
            }
        } else if (state.isCorrect === false) {
            setLastAnswerWasCorrect(false);
            const damage = Math.floor(Math.random() * 2) + 25;

            setPlayerHP(prevHp => {
                const newPlayerHP = Math.max(0, prevHp - damage);

                playerCardRef.current?.classList.add('animate-wobble');
                setTimeout(() => playerCardRef.current?.classList.remove('animate-wobble'), 500);

                if (newPlayerHP <= 0) {
                    setDialogue("You have been defeated... Better luck next time.");
                    setIsBattleOver(true);
                } else {
                    setDialogue(monster?.taunts[Math.floor(Math.random() * monster.taunts.length)] || "The monster strikes back!");
                }
                return newPlayerHP;
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    // Effect to show toasts based on dialogue changes
    useEffect(() => {
        if(isBattleOver) {
            if(playerHP > 0) {
                 toast({ title: "Direct Hit!", description: `You defeated the ${monster?.name}!` });
            } else {
                 toast({ variant: "destructive", title: "Defeated!", description: "You have been defeated." });
            }
        } else if (lastAnswerWasCorrect === false) {
             const damage = Math.floor(Math.random() * 2) + 25; // This is illustrative, might not match the exact damage
             toast({ variant: "destructive", title: "You Missed!", description: `The monster hit you for ~25 damage!` });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isBattleOver, lastAnswerWasCorrect]);

    const getNextChallengeId = () => {
        if (!challenge) return null;
        const currentIndex = challenges.findIndex(c => c.id === challenge.id);
        if (currentIndex < challenges.length - 1) {
            return challenges[currentIndex + 1].id;
        }
        return null;
    }
    
    const nextChallengeId = getNextChallengeId();

    if (!monster || !challenge) {
        return (
            <DashboardLayout>
                <div className="flex items-center justify-center h-full">
                    <Loader2 className="h-16 w-16 animate-spin" />
                    <p className="ml-4 text-muted-foreground">Summoning Monster...</p>
                </div>
            </DashboardLayout>
        );
    }

  return (
    <DashboardLayout>
        <div className="flex flex-col h-full">
            <div className="flex-shrink-0 p-4 border-b">
                 <Button variant="outline" asChild>
                    <Link href="/m/monster-battle">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Back to Challenges
                    </Link>
                </Button>
            </div>

            <div className="flex-grow flex h-[calc(100%-65px)]">
                 {/* Left Panel: Stats and Monster */}
                <div className="w-1/2 p-4 lg:p-6 border-r space-y-6 overflow-y-auto">
                    <Card ref={playerCardRef}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Shield /> Your Stats</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Label>Health</Label>
                            <Progress value={playerHP} className="h-4" />
                            <p className="text-right font-bold">{playerHP} / 100</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Bot /> {monster.name}</CardTitle>
                             <CardDescription>{monster.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div className="flex items-center gap-4">
                                <div className="bg-muted rounded-lg w-24 h-24 flex items-center justify-center p-2 flex-shrink-0">
                                    <Image ref={monsterImageRef} src={monster.imageUrl} alt={monster.name} width={80} height={80} className={cn("transition-transform duration-500", monsterHP <= 0 && "opacity-0 scale-75")}/>
                                </div>
                                <div className="w-full space-y-2">
                                    <Label>Health</Label>
                                    <Progress value={(monsterHP / monster.hp) * 100} variant={monsterHP < monster.hp / 4 ? "destructive" : "default"} className="h-4" />
                                    <p className="text-right font-bold">{monsterHP > 0 ? monsterHP : 0} / {monster.hp}</p>
                                </div>
                             </div>
                        </CardContent>
                    </Card>
                     <Alert className="border-primary">
                        <MessageCircle className="h-4 w-4 text-primary" />
                        <AlertTitle className="font-headline">Battle Log</AlertTitle>
                        <AlertDescription className="font-code">
                            {dialogue}
                        </AlertDescription>
                    </Alert>
                </div>

                {/* Right Panel: Question and Answer */}
                <div className="w-1/2 p-4 lg:p-6 overflow-y-auto">
                    {isBattleOver ? (
                        <Card className="flex flex-col items-center justify-center h-full">
                            <CardContent className="p-6 text-center space-y-4">
                                <h2 className="text-3xl font-bold font-headline mb-4">
                                    {playerHP > 0 ? "You are Victorious!" : "You have been Defeated!"}
                                </h2>
                                <p className="text-muted-foreground mb-6">
                                     {playerHP > 0 ? `You defeated the ${monster.name}!` : `The ${monster.name} was too strong.`}
                                </p>
                                {playerHP > 0 && nextChallengeId ? (
                                     <Button onClick={() => router.push(`/m/battle/${nextChallengeId}`)} size="lg" className="w-full">
                                        Next Challenge <ArrowRight className="ml-2" />
                                    </Button>
                                ) : (
                                     <Button onClick={() => router.push('/m/monster-battle')} size="lg" className="w-full">
                                        Back to Challenges
                                    </Button>
                                )}
                                <Button onClick={() => router.push('/m/monster-battle')} size="lg" variant="outline" className="w-full">
                                    {playerHP > 0 ? "View All Challenges" : "Try Another Challenge"}
                                </Button>
                            </CardContent>
                        </Card>
                    ) : (
                         <Card>
                        <form action={formAction} ref={formRef}>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><HelpCircle /> The Question</CardTitle>
                                <CardDescription className="text-base pt-2">{challenge.question}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {challenge.code && (
                                    <pre className="bg-muted p-4 rounded-md font-code text-sm overflow-x-auto">
                                        <code>{challenge.code}</code>
                                    </pre>
                                )}
                                <input type="hidden" name="challengeId" value={challenge.id} />
                                <div className="mt-4">
                                    <Label htmlFor="answer">Your Answer</Label>
                                    <Input ref={answerInputRef} id="answer" name="answer" placeholder="Type your answer here..." autoComplete="off" />
                                     {state?.formErrors?.answer && <p className="text-xs text-destructive mt-1">{state.formErrors.answer.join(', ')}</p>}
                                </div>
                            </CardContent>
                            <CardFooter>
                               <SubmitButton />
                            </CardFooter>
                        </form>
                         {lastAnswerWasCorrect === false && (
                            <div className="p-6 pt-0">
                                <Alert variant="destructive">
                                    <XCircle className="h-4 w-4" />
                                    <AlertTitle>Incorrect!</AlertTitle>
                                    <AlertDescription>
                                        Your answer was incorrect. Try again!
                                    </AlertDescription>
                                </Alert>
                            </div>
                        )}
                    </Card>
                    )}
                 </div>
            </div>
        </div>
    </DashboardLayout>
  );
}

    