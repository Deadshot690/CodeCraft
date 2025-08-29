
'use client';

import { useState, useEffect, useTransition } from 'react';
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Swords, Heart, Shield, Code, ArrowRight, MessageCircle, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { getMonsterTauntAction, evaluateAnswerAction } from '@/app/actions';

const battleChallenges = [
    {
      title: 'FizzBuzz Basics',
      description: 'Solve for the number 15 in a standard FizzBuzz. What is the output?',
      correctAnswer: 'FizzBuzz',
      monster: {
        name: 'Syntax Serpent',
        image: 'https://picsum.photos/seed/serpent/400/400',
        maxHealth: 100,
      },
    },
    {
      title: 'String Reversal',
      description: 'Reverse the string "coder" to defeat the monster.',
      correctAnswer: 'redoc',
       monster: {
        name: 'Goblin Coder',
        image: 'https://picsum.photos/seed/goblin/400/400',
        maxHealth: 120,
      },
    },
    {
      title: 'Simple Sum',
      description: 'What is the sum of 2, 7, and 11?',
      correctAnswer: '20',
      monster: {
        name: 'Logic Labyrinth',
        image: 'https://picsum.photos/seed/labyrinth/400/400',
        maxHealth: 150,
      },
    },
    {
      title: 'Modulo Master',
      description: 'What is the result of the expression `10 % 3`?',
      correctAnswer: '1',
      monster: {
        name: 'Remainder Golem',
        image: 'https://picsum.photos/seed/golem/400/400',
        maxHealth: 90,
      },
    },
    {
      title: 'Constant Question',
      description: 'Which keyword is used to declare a constant variable in JavaScript that cannot be reassigned?',
      correctAnswer: 'const',
      monster: {
        name: 'Immutable Hydra',
        image: 'https://picsum.photos/seed/hydra/400/400',
        maxHealth: 110,
      },
    },
    {
      title: 'Style Sorcery',
      description: 'What does CSS stand for?',
      correctAnswer: 'Cascading Style Sheets',
      monster: {
        name: 'Style Specter',
        image: 'https://picsum.photos/seed/specter/400/400',
        maxHealth: 130,
      },
    },
    {
      title: 'Python\'s Mark',
      description: 'What is the file extension for a standard Python script file?',
      correctAnswer: '.py',
      monster: {
        name: 'Python Imp',
        image: 'https://picsum.photos/seed/imp/400/400',
        maxHealth: 100,
      },
    },
    {
      title: 'Table Titan',
      description: 'What is the main container tag for `<tr>` (table row) elements in a semantic HTML table?',
      correctAnswer: '<tbody>',
      monster: {
        name: 'Table Troll',
        image: 'https://picsum.photos/seed/troll/400/400',
        maxHealth: 140,
      },
    },
    {
      title: 'Array Addition',
      description: 'Which method is used to add a new element to the end of a JavaScript array?',
      correctAnswer: 'push',
      monster: {
        name: 'Array Alchemist',
        image: 'https://picsum.photos/seed/alchemist/400/400',
        maxHealth: 120,
      },
    },
    {
      title: 'Exponent Challenge',
      description: 'What is the result of the expression `2 ** 4` in Python?',
      correctAnswer: '16',
      monster: {
        name: 'Exponent Elemental',
        image: 'https://picsum.photos/seed/elemental/400/400',
        maxHealth: 160,
      },
    },
];


const player = {
  name: 'Code Warrior',
  maxHealth: 100,
};

export default function MonsterBattlePage() {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [challenge, setChallenge] = useState(battleChallenges[0]);
  const [monster, setMonster] = useState(challenge.monster);
  const [isPending, startTransition] = useTransition();

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
    const currentChallenge = battleChallenges[currentChallengeIndex];
    setChallenge(currentChallenge);
    setMonster(currentChallenge.monster);
    resetBattle(false);
  }, [currentChallengeIndex]);

  useEffect(() => {
    if (monster?.name) {
      fetchTaunt('start');
    }
  }, [monster.name]);


  const handleAttack = () => {
    if (isBattleOver || isPending) return;

    startTransition(async () => {
        const isCorrect = await evaluateAnswerAction(
            challenge.title,
            playerAnswer,
            challenge.correctAnswer
        );
        
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
            setBattleMessage(`Victory! The ${monster.name} has been defeated!`);
            setMonsterTaunt('Ugh... defeated by... code? The indignity!');
            setMessageVariant('default');
          }
        } else {
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
        }
         setPlayerAnswer('');
    });
  };
  
  const resetBattle = (fullReset: boolean = true) => {
      if (fullReset) {
        setPlayerHealth(player.maxHealth);
      }
      setMonsterHealth(monster.maxHealth);
      setIsBattleOver(false);
      setBattleMessage('');
      fetchTaunt('start');
  }

  const goToNextBattle = () => {
      const nextIndex = (currentChallengeIndex + 1) % battleChallenges.length;
      setCurrentChallengeIndex(nextIndex);
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
                  disabled={isBattleOver || isPending}
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-4 items-stretch">
                 {isBattleOver && messageVariant === 'default' ? (
                     <Button onClick={goToNextBattle}>
                        Next Battle <ArrowRight className="ml-2"/>
                     </Button>
                 ) : (
                    <Button onClick={handleAttack} disabled={isBattleOver || isPending}>
                      {isPending ? <Loader2 className="mr-2 animate-spin" /> : <Swords className="mr-2"/>}
                      {isPending ? 'Evaluating...' : 'Attack!'}
                    </Button>
                 )}
                
                {isBattleOver && (
                    <>
                        <Alert variant={messageVariant}>
                            <Shield className="h-4 w-4" />
                            <AlertTitle className="font-bold">{messageVariant === 'default' ? 'Victory!' : 'Defeated!'}</AlertTitle>
                            <AlertDescription>
                                {battleMessage}
                            </AlertDescription>
                        </Alert>
                         {messageVariant === 'destructive' && (
                             <Button onClick={() => resetBattle(true)} variant="secondary">
                                Try Again <ArrowRight className="ml-2"/>
                             </Button>
                         )}
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
