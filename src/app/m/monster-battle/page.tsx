
'use client';

import { useState, useEffect } from 'react';
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Swords, Heart, Shield, Code, ArrowRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { getMonsterTauntAction } from '@/app/actions';

const challenge = {
  title: 'FizzBuzz Basics',
  description: 'Write a function that returns "Fizz" if the input number is divisible by 3, "Buzz" if divisible by 5, "FizzBuzz" if divisible by both, and the number itself otherwise. For this battle, solve for the number 15.',
  correctAnswer: 'FizzBuzz',
};

const monster = {
  name: 'Bugbear',
  image: 'https://picsum.photos/400/400',
  maxHealth: 100,
};

const player = {
  name: 'Code Warrior',
  maxHealth: 100,
};

export default function MonsterBattlePage() {
  const [playerHealth, setPlayerHealth] = useState(player.maxHealth);
  const [monsterHealth, setMonsterHealth] = useState(monster.maxHealth);
  const [playerAnswer, setPlayerAnswer] = useState('');
  const [isBattleOver, setIsBattleOver] = useState(false);
  const [battleMessage, setBattleMessage] = useState('');
  const [monsterTaunt, setMonsterTaunt] = useState('...');
  const [messageVariant, setMessageVariant] = useState<'default' | 'destructive'>('default');
  const { toast } = useToast();

  const fetchTaunt = async (playerAction: 'correct' | 'incorrect' | 'start') => {
    const newTaunt = await getMonsterTauntAction({ monsterName: monster.name, playerAction });
    setMonsterTaunt(newTaunt);
  };
  
  useEffect(() => {
    fetchTaunt('start');
  }, []);

  const handleAttack = () => {
    if (isBattleOver) return;

    const isCorrect = playerAnswer.trim().toLowerCase() === challenge.correctAnswer.toLowerCase();
    
    if (isCorrect) {
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
        setBattleMessage('Victory! The Bugbear has been defeated!');
        setMonsterTaunt('Ugh... defeated by... code? The indignity!');
        setMessageVariant('default');
      }
    } else {
      const damage = Math.floor(Math.random() * 10) + 10; // 10-19 damage
      const newPlayerHealth = Math.max(0, playerHealth - damage);
      setPlayerHealth(newPlayerHealth);
      fetchTaunt('incorrect');
      toast({
        title: 'Syntax Error! 😵',
        variant: 'destructive',
        description: `Your code missed the mark. The monster strikes back for ${damage} damage.`,
      });
      if (newPlayerHealth <= 0) {
        setIsBattleOver(true);
        setBattleMessage('Defeat! The Bugbear overwhelmed you. Time to debug and try again!');
        setMonsterTaunt('Ha! Your logic is as weak as your attacks!');
        setMessageVariant('destructive');
      }
    }
     setPlayerAnswer('');
  };
  
  const resetBattle = () => {
      setPlayerHealth(player.maxHealth);
      setMonsterHealth(monster.maxHealth);
      setIsBattleOver(false);
      setBattleMessage('');
      fetchTaunt('start');
  }

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight font-headline">Monster Battle</h1>
            <p className="text-muted-foreground">
              Defeat the monster by solving the code challenge!
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Monster Panel */}
          <Card className="flex flex-col items-center justify-center p-6 border-destructive/50 border-2">
             <h2 className="text-2xl font-bold font-headline mb-4">{monster.name}</h2>
             <Image
                src={monster.image}
                alt={monster.name}
                width={300}
                height={300}
                className="rounded-lg shadow-lg mb-4"
                data-ai-hint="scary monster"
              />
              <div className="w-full max-w-md space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>Health</span>
                  <span>{monsterHealth} / {monster.maxHealth}</span>
                </div>
                <Progress value={(monsterHealth / monster.maxHealth) * 100} className="h-4" />
                <div className="flex items-center justify-center gap-2 text-muted-foreground pt-2 italic">
                    <MessageCircle className="h-4 w-4" />
                    <p>"{monsterTaunt}"</p>
                </div>
              </div>
          </Card>

          {/* Player & Challenge Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <Card className="flex flex-col items-center justify-center p-6 h-full">
               <h2 className="text-2xl font-bold font-headline mb-4">{player.name}</h2>
               <div className="w-full max-w-md space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Health</span>
                    <span>{playerHealth} / {player.maxHealth}</span>
                  </div>
                  <Progress value={(playerHealth / player.maxHealth) * 100} className="h-4" />
                </div>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                    <Code />
                    Challenge: {challenge.title}
                </CardTitle>
                <CardDescription>{challenge.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={playerAnswer}
                  onChange={(e) => setPlayerAnswer(e.target.value)}
                  placeholder='// Your answer here'
                  className="font-code h-32"
                  disabled={isBattleOver}
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-4 items-stretch">
                <Button onClick={handleAttack} disabled={isBattleOver}>
                  <Swords className="mr-2"/>
                  Attack!
                </Button>
                
                {isBattleOver && (
                    <>
                        <Alert variant={messageVariant}>
                            <Shield className="h-4 w-4" />
                            <AlertTitle className="font-bold">{messageVariant === 'default' ? 'Victory!' : 'Defeated!'}</AlertTitle>
                            <AlertDescription>
                                {battleMessage}
                            </AlertDescription>
                        </Alert>
                        <Button onClick={resetBattle} variant="secondary">
                            Play Again <ArrowRight className="ml-2"/>
                        </Button>
                    </>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
