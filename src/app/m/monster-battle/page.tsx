'use client';

import { useState, useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Swords, Heart, Shield, HelpCircle, Bot, Loader2, CheckCircle, XCircle, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { getRandomMonster, BattleMonster, BattleChallenge, challenges } from '@/lib/battle-challenges';
import { evaluateAnswerAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

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

function getNewChallenge(currentChallengeId: string): BattleChallenge {
    let newChallenge;
    do {
        newChallenge = challenges[Math.floor(Math.random() * challenges.length)];
    } while (newChallenge.id === currentChallengeId);
    return newChallenge;
}


export default function MonsterBattlePage() {
    const [monster, setMonster] = useState<BattleMonster | null>(null);
    const [challenge, setChallenge] = useState<BattleChallenge | null>(null);
    const [monsterHP, setMonsterHP] = useState(100);
    const [playerHP, setPlayerHP] = useState(100);
    const [state, formAction] = useActionState(evaluateAnswerAction, initialState);
    const [lastAnswerWasCorrect, setLastAnswerWasCorrect] = useState<boolean | null>(null);
    const { toast } = useToast();
    const [dialogue, setDialogue] = useState<string>("A wild monster appears!");

    // Refs for animations
    const playerCardRef = useRef<HTMLDivElement>(null);
    const monsterImageRef = useRef<HTMLImageElement>(null);
    const answerInputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const newMonster = getRandomMonster();
        setMonster(newMonster);
        setChallenge(newMonster.challenge);
        setMonsterHP(newMonster.hp);
        setPlayerHP(100);
        setDialogue(`A wild ${newMonster.name} appeared!`);
    }, []);

     useEffect(() => {
        if (state.isCorrect === null) return;

        let newPlayerHP = playerHP;
        let newMonsterHP = monsterHP;

        if (state.isCorrect) {
            setLastAnswerWasCorrect(true);
            const damage = monsterHP; // One-hit KO
            newMonsterHP = 0;
            setMonsterHP(newMonsterHP);
            toast({ title: "Direct Hit!", description: `You dealt ${damage} damage and defeated the monster!` });
            setDialogue(`A critical blow! You defeated the ${monster?.name}!`);
            monsterImageRef.current?.classList.add('animate-fade-out');

            if (challenge) {
                setChallenge(getNewChallenge(challenge.id));
            }
        } else {
            setLastAnswerWasCorrect(false);
            const damage = Math.floor(Math.random() * 2) + 25; // 25-26 damage
            newPlayerHP = Math.max(0, playerHP - damage);
            setPlayerHP(newPlayerHP);
            toast({ variant: "destructive", title: "You Missed!", description: `The monster hit you for ${damage} damage!` });
            
            if (newPlayerHP <= 0) {
                setDialogue("You have been defeated... Better luck next time.");
            } else {
                setDialogue(monster?.taunts[Math.floor(Math.random() * monster.taunts.length)] || "The monster strikes back!");
                playerCardRef.current?.classList.add('animate-wobble');
            }
        }
        
        // Reset animation classes
        setTimeout(() => {
             monsterImageRef.current?.classList.remove('animate-shake');
             playerCardRef.current?.classList.remove('animate-wobble');
        }, 500);

        // Reset the form after submission
        formRef.current?.reset();
        if (answerInputRef.current) {
            answerInputRef.current.value = "";
        }

    }, [state]);

    const handleNextBattle = () => {
        const newMonster = getRandomMonster();
        setMonster(newMonster);
        setChallenge(newMonster.challenge);
        setMonsterHP(newMonster.hp);
        setPlayerHP(100);
        setLastAnswerWasCorrect(null);
        // @ts-ignore
        state.isCorrect = null;
        setDialogue(`A new challenger appears: ${newMonster.name}!`);
        monsterImageRef.current?.classList.remove('animate-fade-out');
    }

    if (!monster || !challenge) {
        return (
            <DashboardLayout>
                <div className="flex items-center justify-center h-full">
                    <Loader2 className="h-16 w-16 animate-spin" />
                </div>
            </DashboardLayout>
        );
    }
    
    const isBattleOver = playerHP <= 0 || monsterHP <= 0;


  return (
    <DashboardLayout>
        <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
             <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight font-headline flex items-center gap-2"><Bot /> Monster Battle</h1>
                  <p className="text-muted-foreground">
                    Answer coding questions to defeat monsters!
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Player and Monster Stats */}
                <div className="lg:col-span-1 space-y-6">
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
                     <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Bot /> {monster.name}</CardTitle>
                             <CardDescription>{monster.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 flex-grow">
                             <div className="bg-muted rounded-lg aspect-square flex items-center justify-center p-4">
                                <Image ref={monsterImageRef} src={monster.imageUrl} alt={monster.name} width={250} height={250} className={cn("transition-transform duration-500", monsterHP <= 0 && "opacity-0 scale-75")}/>
                            </div>
                            <Label>Health</Label>
                            <Progress value={(monsterHP / monster.hp) * 100} variant={monsterHP < monster.hp / 4 ? "destructive" : "default"} className="h-4" />
                            <p className="text-right font-bold">{monsterHP} / {monster.hp}</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Battle Arena */}
                 <div className="lg:col-span-2 space-y-4">
                     <Alert className="border-primary">
                        <MessageCircle className="h-4 w-4 text-primary" />
                        <AlertTitle className="font-headline">Battle Log</AlertTitle>
                        <AlertDescription className="font-code">
                            {dialogue}
                        </AlertDescription>
                    </Alert>
                    
                    {isBattleOver ? (
                        <Card>
                            <CardContent className="p-6 text-center">
                                <h2 className="text-3xl font-bold font-headline mb-4">
                                    {monsterHP <= 0 ? "You are Victorious!" : "You have been Defeated!"}
                                </h2>
                                <p className="text-muted-foreground mb-6">
                                     {monsterHP <= 0 ? `You defeated the ${monster.name}!` : `The ${monster.name} was too strong.`}
                                </p>
                                <Button onClick={handleNextBattle} size="lg">
                                    {monsterHP <= 0 ? "Fight Another Monster" : "Try Again"}
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
                         {lastAnswerWasCorrect !== null && (
                            <div className="p-6 pt-0">
                                {lastAnswerWasCorrect === false ? (
                                    <Alert variant="destructive">
                                        <XCircle className="h-4 w-4" />
                                        <AlertTitle>Incorrect!</AlertTitle>
                                        <AlertDescription>
                                            Your answer was incorrect. Try again!
                                        </AlertDescription>
                                    </Alert>
                                ) : (
                                    <Alert className="border-green-500 text-green-700">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <AlertTitle>Correct!</AlertTitle>
                                        <AlertDescription>
                                            Your attack landed successfully!
                                        </AlertDescription>
                                    </Alert>
                                )}
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
