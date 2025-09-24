"use client";

import * as React from 'react';
import { useState, useTransition, useEffect, useMemo } from 'react';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Heart, Loader2, Shield, Swords, Zap, XCircle, CheckCircle } from 'lucide-react';
import { cn, normalizeAnswer } from '@/lib/utils';
import { monsters, battleQuestions, playerDialogues } from '@/lib/data';
import type { Monster, BattleQuestion } from '@/lib/types';

type GameState = 'playing' | 'answered' | 'player-win' | 'monster-win';

const getRandomItem = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export default function MonsterBattleArenaPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [playerHealth, setPlayerHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(100);

  const [playerDialogue, setPlayerDialogue] = useState("Let's do this!");
  const [monsterDialogue, setMonsterDialogue] = useState("You dare challenge me?");
  
  const [playerAnswer, setPlayerAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameState, setGameState] = useState<GameState>('playing');
  
  const question = useMemo(() => battleQuestions.find(q => q.id === params.id), [params.id]);
  
  const [monster, setMonster] = useState<Monster | null>(() => {
    if (!question) return null;
    const possibleMonsters = monsters.filter(m => m.difficulty === question.difficulty);
    return getRandomItem(possibleMonsters.length > 0 ? possibleMonsters : monsters);
  });

  useEffect(() => {
    if (monster) {
      setMonsterHealth(monster.maxHealth);
      setMonsterDialogue(getRandomItem(monster.dialogues.intro));
    }
  }, [monster]);

  if (!question || !monster) {
    notFound();
  }

  const handleAnswerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (gameState !== 'playing' || !playerAnswer) return;

    const correct = normalizeAnswer(playerAnswer) === normalizeAnswer(question.answer);
    setIsCorrect(correct);
    setGameState('answered');

    if (correct) {
      const damage = monster.maxHealth; // One-shot defeat
      setMonsterHealth(0);
      setPlayerDialogue(getRandomItem(playerDialogues.hit));
      setMonsterDialogue(getRandomItem(monster.dialogues.defeat));
      setGameState('player-win');
    } else {
      const damage = Math.floor(Math.random() * 10) + 15; // Player takes 15-24 damage
      const newPlayerHealth = Math.max(0, playerHealth - damage);
      setPlayerHealth(newPlayerHealth);
      setPlayerDialogue(getRandomItem(playerDialogues.miss));
      setMonsterDialogue(getRandomItem(monster.dialogues.attack));
      if (newPlayerHealth <= 0) {
        setGameState('monster-win');
        setPlayerDialogue(getRandomItem(playerDialogues.defeat));
      }
    }
  };

  const handleTryAgain = () => {
    startTransition(() => {
        setIsCorrect(null);
        setPlayerAnswer('');
        setPlayerDialogue(getRandomItem(playerDialogues.attack));
        setGameState('playing');
    });
  };

  const handleNextBattle = () => {
    router.push('/games/monster-battle');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900/90 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] text-white p-4 md:p-6 overflow-hidden">
      <header className="flex items-center justify-between mb-4">
        <h1 className="font-headline text-2xl font-bold tracking-tight flex items-center gap-2 text-yellow-300">
          <Swords className="text-primary" />
          Monster Battle Arena
        </h1>
        <Button variant="outline" onClick={handleNextBattle} className='bg-background/80'>
            Back to Challenges
        </Button>
      </header>
      
      <div className="flex-1 grid md:grid-cols-2 gap-6 items-center justify-items-center relative">
        {/* Player */}
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <div className="relative">
            <Image
              src="https://picsum.photos/seed/knight/200/200"
              alt="Player"
              width={200}
              height={200}
              data-ai-hint="knight character"
              className="rounded-lg border-4 border-blue-500 shadow-lg shadow-blue-500/30"
            />
            <h2 className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 px-4 py-1 rounded-md text-lg font-bold">You</h2>
          </div>
          <div className="w-full bg-gray-800/80 rounded-lg p-3 border border-gray-700">
            <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-red-500" />
                <Progress value={playerHealth} className="h-5 bg-red-900/50 border border-red-700" indicatorClassName="bg-red-500" />
                <span className="text-md font-bold">{playerHealth}%</span>
            </div>
          </div>
           <Card className="bg-background/70 w-full">
            <CardContent className="p-3 text-center italic text-blue-200">
              "{playerDialogue}"
            </CardContent>
          </Card>
        </div>

        {/* Monster */}
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <div className="relative">
              <Image
              src={monster.imageUrl}
              alt={monster.name}
              width={200}
              height={200}
              data-ai-hint={monster.imageHint}
              className="rounded-lg border-4 border-red-500 shadow-lg shadow-red-500/30"
              />
              <h2 className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 px-4 py-1 rounded-md text-lg font-bold">{monster.name}</h2>
          </div>
          <div className="w-full bg-gray-800/80 rounded-lg p-3 border border-gray-700">
              <div className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-red-400" />
                  <Progress value={(monsterHealth / monster.maxHealth) * 100} className="h-5 bg-red-900/50 border border-red-700" indicatorClassName="bg-red-500" />
                  <span className="text-md font-bold">{monsterHealth} HP</span>
              </div>
          </div>
           <Card className="bg-background/70 w-full">
              <CardContent className="p-3 text-center italic text-red-200">
              "{monsterDialogue}"
              </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-6 flex-grow flex items-center justify-center">
        <Card className="w-full max-w-4xl bg-background/80 backdrop-blur-sm border-2 border-primary/30">
          <CardHeader>
            <CardTitle className="font-headline text-center text-xl text-yellow-200">
                {gameState === 'playing' && question.question}
                {gameState === 'player-win' && `VICTORY! You earned ${question.xp} XP!`}
                {gameState === 'monster-win' && "DEFEAT! You were vanquished..."}
                {gameState === 'answered' && !isCorrect && "Incorrect Answer!"}
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[150px] flex flex-col items-center justify-center text-center">
            {isPending && <Loader2 className="h-12 w-12 animate-spin text-primary" />}

            {gameState === 'playing' && !isPending && (
              <form onSubmit={handleAnswerSubmit} className="w-full max-w-md space-y-4">
                <Input 
                    type="text" 
                    value={playerAnswer}
                    onChange={(e) => setPlayerAnswer(e.target.value)}
                    placeholder="Type your answer..."
                    className="text-center text-lg h-12 bg-gray-800"
                    autoFocus
                />
                <Button type="submit" size="lg" disabled={!playerAnswer}>
                    <Swords className="mr-2"/> Attack!
                </Button>
              </form>
            )}

            {gameState === 'answered' && !isCorrect && !isPending && (
              <div className='w-full space-y-4 flex flex-col items-center'>
                 <Alert variant='destructive'>
                    <XCircle className="h-4 w-4" />
                    <AlertTitle>Wrong Answer</AlertTitle>
                    <AlertDescription>
                       The correct answer was: <span className='font-bold'>{question.answer}</span>
                    </AlertDescription>
                </Alert>
                <Button onClick={handleTryAgain}>
                    Try Again
                </Button>
              </div>
            )}
            
            {(gameState === 'player-win' || gameState === 'monster-win') && !isPending && (
                 <Button size="lg" onClick={handleNextBattle}>
                    {gameState === 'player-win' ? "Find Next Opponent" : "Return to Lobby"}
                </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
