"use client";

import { useState, useTransition } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { generateTrivia, GenerateTriviaOutput } from '@/ai/flows/monster-battle-flow';
import { Heart, Loader2, Shield, Sparkles, Swords, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

type GameState = 'idle' | 'fetching' | 'playing' | 'answered' | 'player-win' | 'monster-win';

export default function MonsterBattlePage() {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [trivia, setTrivia] = useState<GenerateTriviaOutput | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameState, setGameState] = useState<GameState>('idle');
  const [isPending, startTransition] = useTransition();

  const handleStartGame = () => {
    setPlayerHealth(100);
    setMonsterHealth(100);
    setTrivia(null);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setGameState('fetching');
    startTransition(async () => {
      const newTrivia = await generateTrivia({ topic: 'JavaScript', difficulty: 'Intermediate' });
      setTrivia(newTrivia);
      setGameState('playing');
    });
  };

  const handleAnswer = (answer: string) => {
    if (gameState !== 'playing') return;

    setSelectedAnswer(answer);
    const correct = answer === trivia?.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      const damage = Math.floor(Math.random() * 10) + 20; // 20-29 damage
      setMonsterHealth(prev => Math.max(0, prev - damage));
    } else {
      const damage = Math.floor(Math.random() * 10) + 10; // 10-19 damage
      setPlayerHealth(prev => Math.max(0, prev - damage));
    }
    setGameState('answered');
  };

  const handleNextTurn = () => {
    if (monsterHealth <= 0) {
      setGameState('player-win');
      return;
    }
    if (playerHealth <= 0) {
      setGameState('monster-win');
      return;
    }

    setTrivia(null);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setGameState('fetching');
    startTransition(async () => {
      const newTrivia = await generateTrivia({ topic: 'Data Structures', difficulty: 'Intermediate' });
      setTrivia(newTrivia);
      setGameState('playing');
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white p-4 md:p-6">
      <header className="flex items-center justify-between mb-4">
        <h1 className="font-headline text-2xl font-bold tracking-tight flex items-center gap-2">
          <Swords className="text-primary" />
          Monster Battle
        </h1>
        {gameState !== 'idle' && (
            <Button variant="outline" onClick={handleStartGame}>New Game</Button>
        )}
      </header>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
        {/* Player Section */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <Image
              src="https://picsum.photos/seed/player/200/200"
              alt="Player"
              width={200}
              height={200}
              data-ai-hint="warrior character"
              className="rounded-full border-4 border-blue-500 shadow-lg"
            />
            <h2 className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 px-4 py-1 rounded-md text-lg font-bold">You</h2>
          </div>
          <div className="w-full max-w-sm bg-gray-800 rounded-lg p-2">
             <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                <Progress value={playerHealth} className="h-4 bg-red-900" />
                <span className="text-sm font-bold">{playerHealth}%</span>
            </div>
          </div>
        </div>

        {/* Monster Section */}
        <div className="flex flex-col items-center gap-4">
           <div className="relative">
             <Image
              src="https://picsum.photos/seed/monster1/200/200"
              alt="Monster"
              width={200}
              height={200}
              data-ai-hint="fantasy monster"
              className="rounded-full border-4 border-red-500 shadow-lg"
            />
            <h2 className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 px-4 py-1 rounded-md text-lg font-bold">Code-Beast</h2>
          </div>
          <div className="w-full max-w-sm bg-gray-800 rounded-lg p-2">
             <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                <Progress value={monsterHealth} className="h-4 bg-red-900" />
                <span className="text-sm font-bold">{monsterHealth}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Game Content Area */}
      <div className="mt-6 flex-grow flex items-center justify-center">
        <Card className="w-full max-w-4xl bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-headline text-center text-xl">
                {gameState === 'idle' && "Defeat the monster by answering correctly!"}
                {gameState === 'fetching' && "A new challenger appears..."}
                {gameState === 'playing' && "Your turn!"}
                {gameState === 'answered' && (isCorrect ? "Direct Hit!" : "Ouch!")}
                {gameState === 'player-win' && "Victory!"}
                {gameState === 'monster-win' && "Game Over"}
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[250px] flex flex-col items-center justify-center text-center">
            {gameState === 'idle' && (
              <Button size="lg" onClick={handleStartGame} className="animate-pulse">
                <Zap className="mr-2"/>
                Start Battle
              </Button>
            )}
             {(gameState === 'fetching' || isPending) && <Loader2 className="h-12 w-12 animate-spin text-primary" />}
            
            {gameState === 'playing' && trivia && (
              <div className="w-full space-y-4">
                <p className="text-lg font-semibold">{trivia.question}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {trivia.options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="text-base justify-start"
                      onClick={() => handleAnswer(option)}
                    >
                      <span className="mr-4 font-bold">{String.fromCharCode(65 + index)}:</span>
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {gameState === 'answered' && trivia && (
              <div className='w-full space-y-4'>
                 <Alert variant={isCorrect ? 'default' : 'destructive'} className={isCorrect ? 'bg-green-500/10 border-green-500/50' : ''}>
                    <AlertTitle className="flex items-center gap-2">
                        {isCorrect ? <Shield className="h-5 w-5 text-green-500"/> : <Shield className="h-5 w-5 text-red-500"/>}
                        {selectedAnswer}
                    </AlertTitle>
                    <AlertDescription className="pl-8">
                       <p className='font-bold mb-2'>{isCorrect ? "Correct!" : "Incorrect!"}</p>
                       {!isCorrect && <p className='mb-2'>The correct answer was: <span className='font-bold'>{trivia.correctAnswer}</span></p>}
                       <p>{trivia.explanation}</p>
                    </AlertDescription>
                </Alert>
                <Button onClick={handleNextTurn}>
                    {monsterHealth <= 0 || playerHealth <= 0 ? "See Results" : "Next Question"}
                </Button>
              </div>
            )}

            {(gameState === 'player-win' || gameState === 'monster-win') && (
                <div className='flex flex-col items-center gap-4'>
                    <p className='text-2xl font-bold'>
                        {gameState === 'player-win' ? 'You have vanquished the Code-Beast!' : 'The Code-Beast has defeated you!'}
                    </p>
                    <Sparkles className={cn('h-16 w-16', gameState === 'player-win' ? 'text-yellow-400' : 'text-muted-foreground')}/>
                     <Button size="lg" onClick={handleStartGame}>
                        Play Again
                    </Button>
                </div>
            )}

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
