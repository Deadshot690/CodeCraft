"use client";

import * as React from 'react';
import { useState, useTransition, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Heart, Loader2, MessageSquare, Shield, Swords, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { monsters, battleTrivia, playerDialogues } from '@/lib/data';
import type { Monster, BattleTrivia } from '@/lib/types';

type GameState = 'idle' | 'playing' | 'answered' | 'player-win' | 'monster-win';

const getRandomItem = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export default function MonsterBattlePage() {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [currentMonster, setCurrentMonster] = useState<Monster | null>(null);
  const [currentTrivia, setCurrentTrivia] = useState<BattleTrivia | null>(null);
  const [playerAnswer, setPlayerAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameState, setGameState] = useState<GameState>('idle');
  const [isPending, startTransition] = useTransition();
  const [playerDialogue, setPlayerDialogue] = useState("Let's do this!");
  const [monsterDialogue, setMonsterDialogue] = useState("You dare challenge me?");
  const [totalXP, setTotalXP] = useState(0);

  const startNewTurn = () => {
    const newTrivia = getRandomItem(battleTrivia.filter(t => t.id !== currentTrivia?.id));
    setCurrentTrivia(newTrivia);
    setPlayerDialogue(getRandomItem(playerDialogues.attack));
    setMonsterDialogue(getRandomItem(currentMonster?.dialogues.taunt || ["..."]));
    setPlayerAnswer('');
    setIsCorrect(null);
    setGameState('playing');
  };

  const handleStartGame = () => {
    startTransition(() => {
      const newMonster = getRandomItem(monsters);
      setCurrentMonster(newMonster);
      setMonsterHealth(newMonster.maxHealth);
      setPlayerHealth(100);
      setTotalXP(0);
      setMonsterDialogue(getRandomItem(newMonster.dialogues.intro));
      startNewTurn();
    });
  };

  const handleAnswerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (gameState !== 'playing' || !playerAnswer) return;

    const correct = playerAnswer.trim().toLowerCase() === currentTrivia?.answer.toLowerCase();
    setIsCorrect(correct);
    setGameState('answered');

    if (correct) {
      const damage = currentTrivia?.xp || 20; // Damage based on question XP
      const newMonsterHealth = Math.max(0, monsterHealth - damage);
      setMonsterHealth(newMonsterHealth);
      setTotalXP(prev => prev + (currentTrivia?.xp || 0));
      setPlayerDialogue(getRandomItem(playerDialogues.hit));
      setMonsterDialogue(getRandomItem(currentMonster?.dialogues.hit || ["Argh!"]));
       if (newMonsterHealth <= 0) {
        setGameState('player-win');
        setMonsterDialogue(getRandomItem(currentMonster?.dialogues.defeat || ["I am... defeated..."]));
      }
    } else {
      const damage = Math.floor(Math.random() * 10) + 15; // 15-24 damage
      const newPlayerHealth = Math.max(0, playerHealth - damage);
      setPlayerHealth(newPlayerHealth);
      setPlayerDialogue(getRandomItem(playerDialogues.miss));
      setMonsterDialogue(getRandomItem(currentMonster?.dialogues.attack || ["My turn!"]));
      if (newPlayerHealth <= 0) {
        setGameState('monster-win');
        setPlayerDialogue(getRandomItem(playerDialogues.defeat));
      }
    }
  };

  const handleNextTurn = () => {
     if (monsterHealth <= 0 || playerHealth <= 0) return;
    startTransition(() => {
        startNewTurn();
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900/90 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] text-white p-4 md:p-6 overflow-hidden">
      <header className="flex items-center justify-between mb-4">
        <h1 className="font-headline text-2xl font-bold tracking-tight flex items-center gap-2 text-yellow-300">
          <Swords className="text-primary" />
          Monster Battle Arena
        </h1>
        {gameState !== 'idle' && (
            <Button variant="outline" onClick={handleStartGame} className='bg-background/80'>New Game</Button>
        )}
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
        {currentMonster && (
          <div className="flex flex-col items-center gap-4 w-full max-w-md">
            <div className="relative">
                <Image
                src={currentMonster.imageUrl}
                alt={currentMonster.name}
                width={200}
                height={200}
                data-ai-hint={currentMonster.imageHint}
                className="rounded-lg border-4 border-red-500 shadow-lg shadow-red-500/30"
                />
                <h2 className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 px-4 py-1 rounded-md text-lg font-bold">{currentMonster.name}</h2>
            </div>
            <div className="w-full bg-gray-800/80 rounded-lg p-3 border border-gray-700">
                <div className="flex items-center gap-2">
                    <Heart className="h-6 w-6 text-red-400" />
                    <Progress value={(monsterHealth / currentMonster.maxHealth) * 100} className="h-5 bg-red-900/50 border border-red-700" indicatorClassName="bg-red-500" />
                    <span className="text-md font-bold">{monsterHealth} HP</span>
                </div>
            </div>
             <Card className="bg-background/70 w-full">
                <CardContent className="p-3 text-center italic text-red-200">
                "{monsterDialogue}"
                </CardContent>
            </Card>
          </div>
        )}
      </div>

      <div className="mt-6 flex-grow flex items-center justify-center">
        <Card className="w-full max-w-4xl bg-background/80 backdrop-blur-sm border-2 border-primary/30">
          <CardHeader>
            <CardTitle className="font-headline text-center text-xl text-yellow-200">
                {gameState === 'idle' && "Defeat the monster by answering correctly!"}
                {gameState === 'playing' && currentTrivia?.question}
                {gameState === 'answered' && (isCorrect ? `Correct! +${currentTrivia?.xp} XP` : "Incorrect!")}
                {gameState === 'player-win' && `Victory! You earned ${totalXP} XP!`}
                {gameState === 'monster-win' && "Game Over"}
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[150px] flex flex-col items-center justify-center text-center">
            {isPending && <Loader2 className="h-12 w-12 animate-spin text-primary" />}

            {gameState === 'idle' && !isPending && (
              <Button size="lg" onClick={handleStartGame} className="animate-pulse">
                <Zap className="mr-2"/> Find a Monster
              </Button>
            )}
            
            {gameState === 'playing' && currentTrivia && !isPending && (
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

            {gameState === 'answered' && currentTrivia && !isPending && (
              <div className='w-full space-y-4 flex flex-col items-center'>
                 <Alert variant={isCorrect ? 'default' : 'destructive'} className={cn('max-w-md', isCorrect ? 'bg-green-500/10 border-green-500/50' : '')}>
                    <AlertTitle className="flex items-center gap-2">
                        {isCorrect ? <Shield className="h-5 w-5 text-green-500"/> : <Shield className="h-5 w-5 text-red-500"/>}
                        {isCorrect ? "Direct Hit!" : "You missed!"}
                    </AlertTitle>
                    <AlertDescription className="pl-8">
                       {!isCorrect && <p className='mb-2'>The correct answer was: <span className='font-bold'>{currentTrivia.answer}</span></p>}
                    </AlertDescription>
                </Alert>
                <Button onClick={handleNextTurn}>
                    {monsterHealth <= 0 || playerHealth <= 0 ? "See Results" : "Next Round"}
                </Button>
              </div>
            )}
            
            {(gameState === 'player-win' || gameState === 'monster-win') && !isPending && (
                 <Button size="lg" onClick={handleStartGame}>
                    Play Again
                </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Custom progress bar indicator class
declare module 'react' {
  interface ComponentProps<T> {
    indicatorClassName?: string;
  }
}
Progress.defaultProps = {
  indicatorClassName: 'bg-primary'
};

const OriginalProgress = Progress;
const ProgressWithIndicator = React.forwardRef<
  React.ElementRef<typeof Progress>,
  React.ComponentProps<typeof Progress>
>(({ className, value, indicatorClassName, ...props }, ref) => (
  <OriginalProgress
    ref={ref}
    className={className}
    value={value}
    {...props}
    // @ts-expect-error
    style={{'--indicator-color': 'hsl(var(--primary))'}}
  >
    {/* @ts-expect-error */}
    <Progress.Indicator
      className={cn("h-full w-full flex-1 transition-all", indicatorClassName)}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </OriginalProgress>
));
ProgressWithIndicator.displayName = 'Progress';
Object.assign(Progress, { Root: OriginalProgress.Root, Indicator: ProgressWithIndicator });
