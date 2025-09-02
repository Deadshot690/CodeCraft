
'use client';

import { useState, useEffect, useCallback, useActionState, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from '@/components/ui/progress';
import { Swords, Shield, ArrowRight, MessageCircle, Loader2, BrainCircuit } from 'lucide-react';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { getMonsterTauntAction, evaluateAnswerAction } from '@/app/actions';
import { getBattleChallenge } from '@/lib/battle-challenges';
import { Input } from '@/components/ui/input';

const player = {
  name: 'Code Warrior',
  maxHealth: 100,
};

const initialState = {
  isCorrect: undefined,
  message: '',
  formErrors: {},
};

function SubmitButton({ isBattleOver }: { isBattleOver: boolean }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending || isBattleOver} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Attacking...
        </>
      ) : (
        <>
          <Swords className="mr-2 h-4 w-4" />
          Attack!
        </>
      )}
    </Button>
  );
}

export default function MonsterBattlePage() {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const { challenge, monster } = getBattleChallenge(currentChallengeIndex);
  
  const [playerHealth, setPlayerHealth] = useState(player.maxHealth);
  const [monsterHealth, setMonsterHealth] = useState(monster.maxHealth);
  const [isBattleOver, setIsBattleOver] = useState(false);
  const [battleMessage, setBattleMessage] = useState('');
  const [monsterTaunt, setMonsterTaunt] = useState('...');
  const [messageVariant, setMessageVariant] = useState<'default' | 'destructive'>('default');
  const { toast } = useToast();
  
  const [state, formAction, isPending] = useActionState(evaluateAnswerAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);


  const fetchTaunt = useCallback(async (playerAction: 'correct' | 'incorrect' | 'start') => {
    const newTaunt = await getMonsterTauntAction({ monsterName: monster.name, playerAction });
    setMonsterTaunt(newTaunt);
  }, [monster.name]);
  
  useEffect(() => {
    fetchTaunt('start');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentChallengeIndex]);

  useEffect(() => {
    if (isPending) return;

    if (state.isCorrect === true) {
        const damage = Math.floor(Math.random() * 15) + 25; // 25-39 damage
        const newMonsterHealth = Math.max(0, monsterHealth - damage);
        setMonsterHealth(newMonsterHealth);
        fetchTaunt('correct');
        toast({
          title: 'Direct Hit! 💥',
          description: `Your logic was flawless! You dealt ${damage} damage.`,
        });
        if (newMonsterHealth <= 0) {
          setIsBattleOver(true);
          setBattleMessage(`Victory! The ${monster.name} has been defeated!`);
          setMonsterTaunt('Ugh... defeated by... code? The indignity!');
          setMessageVariant('default');
        }
    } else if (state.isCorrect === false) {
        const damage = Math.floor(Math.random() * 10) + 10; // 10-19 damage
        const newPlayerHealth = Math.max(0, playerHealth - damage);
        setPlayerHealth(newPlayerHealth);
        fetchTaunt('incorrect');
        toast({
          title: 'Incorrect Answer! 😵',
          variant: 'destructive',
          description: `Your code missed the mark. The monster strikes back for ${damage} damage.`,
        });
        if (newPlayerHealth <= 0) {
          setIsBattleOver(true);
          setBattleMessage(`Defeat! The ${monster.name} overwhelmed you. Time to debug and try again!`);
          setMonsterTaunt('Ha! Your logic is as weak as your attacks!');
          setMessageVariant('destructive');
        }
    } else if (state.message) {
         toast({
          title: 'Evaluation Error',
          variant: 'destructive',
          description: state.message,
        });
    }

    if (state.isCorrect !== undefined) {
       formRef.current?.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, isPending]);


  const resetBattle = () => {
      const { monster: currentMonster } = getBattleChallenge(currentChallengeIndex);
      setPlayerHealth(player.maxHealth);
      setMonsterHealth(currentMonster.maxHealth);
      setIsBattleOver(false);
      setBattleMessage('');
      fetchTaunt('start');
      formRef.current?.reset();
  }

  const goToNextBattle = () => {
      const nextIndex = currentChallengeIndex + 1;
      const { monster: nextMonster, challenge: nextChallenge } = getBattleChallenge(nextIndex);
      setCurrentChallengeIndex(nextIndex);
      setPlayerHealth(player.maxHealth);
      setMonsterHealth(nextMonster.maxHealth);
      setIsBattleOver(false);
      setBattleMessage('');
      fetchTaunt('start');
      formRef.current?.reset();
  }

  return (
    <DashboardLayout>
      <div className="grid md:grid-cols-2 gap-8 p-4 md:p-8 h-[calc(100vh-60px)]">
        {/* Left Side: Battle View */}
        <div className="flex flex-col gap-8">
            <Card className="text-center">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl">{monster.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Image
                        src={monster.image}
                        alt={monster.name}
                        width={400}
                        height={400}
                        className="rounded-lg shadow-lg mb-4 inline-block"
                        data-ai-hint="scary monster"
                    />
                    <div className="w-full max-w-md space-y-2 mx-auto">
                        <div className="flex justify-between text-sm font-medium">
                        <span>Health</span>
                        <span>{monsterHealth} / {monster.maxHealth}</span>
                        </div>
                        <Progress value={(monsterHealth / monster.maxHealth) * 100} className="h-4" />
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground pt-4 italic text-center">
                        <MessageCircle className="h-4 w-4 shrink-0" />
                        <p>"{monsterTaunt}"</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-2xl">{player.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="w-full max-w-md space-y-2 mx-auto">
                        <div className="flex justify-between text-sm font-medium">
                        <span>Health</span>
                        <span>{playerHealth} / {player.maxHealth}</span>
                        </div>
                        <Progress value={(playerHealth / player.maxHealth) * 100} className="h-4" />
                    </div>
                </CardContent>
            </Card>
        </div>

        {/* Right Side: Challenge and Input */}
        <div className="flex flex-col gap-8">
            <Card className="flex-grow flex flex-col">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-2"><BrainCircuit/> Challenge</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-center">
                    <h2 className="text-xl font-semibold">{challenge.title}</h2>
                    <p className="text-muted-foreground mt-2 text-lg">{challenge.description}</p>
                </CardContent>
            </Card>

            <Card>
                 <CardHeader>
                    <CardTitle className="font-headline">Your Answer</CardTitle>
                </CardHeader>
                <CardContent>
                     <form action={formAction} ref={formRef}>
                        <input type="hidden" name="challengeTitle" value={challenge.title} />
                        <input type="hidden" name="testCases" value={JSON.stringify(challenge.testCases)} />
                        <div className="flex flex-col gap-4">
                           <Input 
                                name="answer" 
                                placeholder="Type your answer here..." 
                                disabled={isBattleOver || isPending}
                                required
                            />
                           <SubmitButton isBattleOver={isBattleOver} />
                        </div>
                    </form>
                </CardContent>
            </Card>

             {isBattleOver && (
                <Card>
                    <CardContent className="p-6">
                        <Alert variant={messageVariant}>
                            <Shield className="h-4 w-4" />
                            <AlertTitle className="font-bold">{messageVariant === 'default' ? 'Victory!' : 'Defeated!'}</AlertTitle>
                            <AlertDescription>
                                {battleMessage}
                            </AlertDescription>
                        </Alert>
                        {messageVariant === 'default' && getBattleChallenge(currentChallengeIndex + 1) ? (
                            <Button onClick={goToNextBattle} className="w-full mt-4">
                                Next Battle <ArrowRight className="ml-2"/>
                            </Button>
                        ) : messageVariant === 'destructive' ? (
                            <Button onClick={resetBattle} variant="secondary" className="w-full mt-4">
                                Try Again
                            </Button>
                        ) : null}
                    </CardContent>
                </Card>
             )}
        </div>
      </div>
    </DashboardLayout>
  );
}
