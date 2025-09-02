
'use client';

import { useState, useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Swords, Heart, Shield, HelpCircle, Bot, Loader2, CheckCircle, XCircle } from 'lucide-react';
import Image from 'next/image';
import { getRandomMonster, BattleMonster, BattleChallenge } from '@/lib/battle-challenges';
import { evaluateAnswerAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

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
    const [monster, setMonster] = useState<BattleMonster | null>(null);
    const [challenge, setChallenge] = useState<BattleChallenge | null>(null);
    const [monsterHP, setMonsterHP] = useState(100);
    const [playerHP, setPlayerHP] = useState(100);
    const [state, formAction] = useActionState(evaluateAnswerAction, initialState);
    const [lastAnswerWasCorrect, setLastAnswerWasCorrect] = useState<boolean | null>(null);
    const { toast } = useToast();

    useEffect(() => {
        const newMonster = getRandomMonster();
        setMonster(newMonster);
        setChallenge(newMonster.challenge);
        setMonsterHP(newMonster.hp);
        setPlayerHP(100);
    }, []);

     useEffect(() => {
        if (state.isCorrect === null) return;

        if (state.isCorrect) {
            setLastAnswerWasCorrect(true);
            const damage = Math.floor(Math.random() * 10) + 20; // 20-29 damage
            setMonsterHP(hp => Math.max(0, hp - damage));
            toast({ title: "Direct Hit!", description: `You dealt ${damage} damage to the monster!` });
        } else {
            setLastAnswerWasCorrect(false);
            const damage = Math.floor(Math.random() * 5) + 10; // 10-14 damage
            setPlayerHP(hp => Math.max(0, hp - damage));
            toast({ variant: "destructive", title: "You Missed!", description: `The monster hit you for ${damage} damage!` });
        }
    }, [state, toast]);

    const handleNextBattle = () => {
        const newMonster = getRandomMonster();
        setMonster(newMonster);
        setChallenge(newMonster.challenge);
        setMonsterHP(newMonster.hp);
        // Reset player HP or keep it? Let's reset for now for simpler gameplay
        setPlayerHP(100);
        setLastAnswerWasCorrect(null);
        // @ts-ignore
        state.isCorrect = null;
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
                    <Card>
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
                        <CardContent className="space-y-2">
                            <Label>Health</Label>
                            <Progress value={(monsterHP / monster.hp) * 100} variant={monsterHP < monster.hp / 4 ? "destructive" : "default"} className="h-4" />
                            <p className="text-right font-bold">{monsterHP} / {monster.hp}</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Battle Arena */}
                 <div className="lg:col-span-2 space-y-4">
                    <Card className="relative aspect-video overflow-hidden flex items-center justify-center bg-muted/30">
                         <Image src={monster.imageUrl} alt={monster.name} width={250} height={250} className={`transition-transform duration-500 ${lastAnswerWasCorrect === false ? 'animate-shake' : ''} ${monsterHP <= 0 ? 'animate-ping' : ''}`}/>
                    </Card>
                    
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
                        <form action={formAction}>
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
                                    <Input id="answer" name="answer" placeholder="Type your answer here..." autoComplete="off" />
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
                                            The correct answer was: <strong>{state.correctAnswer}</strong>
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
