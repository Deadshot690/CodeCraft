
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { DashboardLayout } from "@/components/dashboard-layout";
import { getCatcherChallengeById, CatcherChallenge } from '@/lib/catcher-challenges';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Heart, Star, Play, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const BASKET_WIDTH = 100;
const ITEM_WIDTH = 150;
const ITEM_HEIGHT = 40;

interface FallingItem {
    id: number;
    text: string;
    isGood: boolean;
    x: number;
    y: number;
}

export default function CodeCatcherGamePage() {
    const params = useParams<{ id: string }>();
    const [challenge, setChallenge] = useState<CatcherChallenge | null>(null);
    const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameOver'>('idle');
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [basketX, setBasketX] = useState(GAME_WIDTH / 2 - BASKET_WIDTH / 2);
    const [fallingItems, setFallingItems] = useState<FallingItem[]>([]);
    
    const gameLoopRef = useRef<number>();
    const itemIntervalRef = useRef<NodeJS.Timeout>();
    const { toast } = useToast();

    useEffect(() => {
        const foundChallenge = getCatcherChallengeById(params.id);
        if (foundChallenge) {
            setChallenge(foundChallenge);
        } else {
            notFound();
        }
    }, [params.id]);

    const resetGame = () => {
        setScore(0);
        setLives(3);
        setFallingItems([]);
        setGameState('idle');
        cancelAnimationFrame(gameLoopRef.current!);
        clearInterval(itemIntervalRef.current!);
    }

    const startGame = () => {
        if (!challenge) return;
        setScore(0);
        setLives(3);
        setFallingItems([]);
        setGameState('playing');

        gameLoopRef.current = requestAnimationFrame(gameTick);

        itemIntervalRef.current = setInterval(() => {
            const isGood = Math.random() > 0.4; // 60% chance of good snippet
            const snippets = isGood ? challenge.goodSnippets : challenge.badSnippets;
            const text = snippets[Math.floor(Math.random() * snippets.length)];
            
            setFallingItems(prev => [
                ...prev,
                {
                    id: Date.now() + Math.random(),
                    text,
                    isGood,
                    x: Math.random() * (GAME_WIDTH - ITEM_WIDTH),
                    y: -ITEM_HEIGHT,
                }
            ]);
        }, 1200);
    };

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (gameState !== 'playing') return;
        setBasketX(prevX => {
            if (e.key === 'ArrowLeft') {
                return Math.max(0, prevX - 25);
            }
            if (e.key === 'ArrowRight') {
                return Math.min(GAME_WIDTH - BASKET_WIDTH, prevX + 25);
            }
            return prevX;
        });
    }, [gameState]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            // Cleanup game loop and interval on component unmount
            if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
            if (itemIntervalRef.current) clearInterval(itemIntervalRef.current);
        };
    }, [handleKeyDown]);
    
    const gameTick = useCallback(() => {
        if (gameState !== 'playing' || !challenge) return;

        setFallingItems(prevItems => {
            const newItems: FallingItem[] = [];
            let newLives = lives;
            let newScore = score;

            for (const item of prevItems) {
                const newItem = { ...item, y: item.y + 2 }; // Speed of falling

                // Collision detection
                const basketLeft = basketX;
                const basketRight = basketX + BASKET_WIDTH;
                const itemLeft = newItem.x;
                const itemRight = newItem.x + ITEM_WIDTH;

                if (newItem.y + ITEM_HEIGHT >= GAME_HEIGHT - 30 && newItem.y < GAME_HEIGHT - 20) {
                     if (itemLeft < basketRight && itemRight > basketLeft) {
                        // Caught!
                        if (item.isGood) {
                           newScore += 10;
                           toast({ title: 'Good Catch!', description: '+10 points' });
                        } else {
                           newLives -= 1;
                           toast({ variant: 'destructive', title: 'Bad Code!', description: '-1 life' });
                        }
                        continue; // Remove item
                    }
                }

                if (newItem.y > GAME_HEIGHT) {
                    if(item.isGood) {
                        newLives -=1; // Lose a life if you miss a good one
                        toast({ variant: 'destructive', title: 'Missed!', description: 'A good snippet got away. -1 life' });
                    }
                    continue; // Remove item
                }
                newItems.push(newItem);
            }
            
            if (newLives !== lives) setLives(newLives);
            if (newScore !== score) setScore(newScore);
            
            if (newLives <= 0) {
                setGameState('gameOver');
                toast({ variant: 'destructive', title: 'Game Over!', description: `Final Score: ${newScore}` });
                cancelAnimationFrame(gameLoopRef.current!);
                clearInterval(itemIntervalRef.current!);
                return [];
            }
            
            return newItems;
        });

        gameLoopRef.current = requestAnimationFrame(gameTick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameState, basketX, lives, score, toast, challenge]);


    if (!challenge) {
        return <DashboardLayout><div>Loading...</div></DashboardLayout>;
    }

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full bg-gray-900 text-white">
                <div className="flex-shrink-0 p-4 border-b border-gray-700 flex justify-between items-center bg-gray-800">
                    <Button variant="outline" asChild>
                        <Link href="/m/code-catcher">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Back to Levels
                        </Link>
                    </Button>
                     <h1 className="text-xl font-bold tracking-tight font-headline">{challenge.title}</h1>
                    <div className="flex items-center gap-6 text-lg">
                        <div className="flex items-center gap-2">
                            <Star className="text-yellow-400" />
                            <span className="font-bold">Score: {score}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Heart className="text-red-500" />
                            <span className="font-bold">Lives: {lives}</span>
                        </div>
                    </div>
                </div>

                <div className="flex-grow flex items-center justify-center p-4">
                    <div 
                        className="w-full max-w-4xl bg-black border-4 border-primary rounded-lg flex flex-col items-center justify-center relative overflow-hidden"
                        style={{ height: `${GAME_HEIGHT}px`, width: `${GAME_WIDTH}px` }}
                    >
                         {gameState === 'idle' && (
                            <Card className="bg-gray-800 border-primary text-center z-10">
                                <CardHeader>
                                    <CardTitle className="font-headline text-3xl">{challenge.title}</CardTitle>
                                    <CardDescription>{challenge.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button size="lg" onClick={startGame}>
                                        <Play className="mr-2" />
                                        Start Game
                                    </Button>
                                </CardContent>
                            </Card>
                        )}
                        {gameState === 'gameOver' && (
                             <Card className="bg-gray-800 border-primary text-center z-10">
                                <CardHeader>
                                    <CardTitle className="font-headline text-3xl">Game Over</CardTitle>
                                    <CardDescription>Your final score is</CardDescription>
                                    <p className="text-4xl font-bold pt-2">{score}</p>
                                </CardHeader>
                                <CardContent>
                                    <Button size="lg" onClick={startGame}>
                                        <RefreshCw className="mr-2" />
                                        Play Again
                                    </Button>
                                </CardContent>
                            </Card>
                        )}
                         {gameState === 'playing' && (
                            <>
                                {/* Falling Items */}
                                {fallingItems.map(item => (
                                    <div
                                        key={item.id}
                                        className={cn("absolute rounded-md p-2 text-center font-code text-sm border-2",
                                         item.isGood ? 'bg-blue-600 border-blue-400' : 'bg-red-800 border-red-600'
                                        )}
                                        style={{ 
                                            left: item.x, 
                                            top: item.y,
                                            width: `${ITEM_WIDTH}px`,
                                            height: `${ITEM_HEIGHT}px`
                                        }}
                                    >
                                        <code>{item.text}</code>
                                    </div>
                                ))}

                                {/* Basket */}
                                <div 
                                    className="absolute bottom-0 bg-green-500 rounded-t-lg"
                                    style={{
                                        left: basketX,
                                        width: `${BASKET_WIDTH}px`,
                                        height: '20px'
                                    }}
                                />
                            </>
                         )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
