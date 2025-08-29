
'use client';

import { useState, useEffect, useCallback } from 'react';
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from '@/components/ui/progress';
import { Swords, Heart, Shield, ArrowRight, MessageCircle, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { getMonsterTauntAction } from '@/app/actions';
import { Challenge } from '@/lib/challenges';
import BattleIdePanel from '@/components/battle-ide-panel';
import { getBattleChallenge } from '@/lib/battle-challenges';


const player = {
  name: 'Code Warrior',
  maxHealth: 100,
};

export default function MonsterBattlePage() {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [monster, setMonster] = useState<{name: string, image: string, maxHealth: number} | null>(null);

  const [playerHealth, setPlayerHealth] = useState(player.maxHealth);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [isBattleOver, setIsBattleOver] = useState(false);
  const [battleMessage, setBattleMessage] = useState('');
  const [monsterTaunt, setMonsterTaunt] = useState('...');
  const [messageVariant, setMessageVariant] = useState<'default' | 'destructive'>('default');
  const { toast } = useToast();

  const fetchTaunt = useCallback(async (playerAction: 'correct' | 'incorrect' | 'start') => {
    if (!monster) return;
    const newTaunt = await getMonsterTauntAction({ monsterName: monster.name, playerAction });
    setMonsterTaunt(newTaunt);
  }, [monster]);
  
  useEffect(() => {
    const { challenge: currentChallenge, monster: currentMonster } = getBattleChallenge(currentChallengeIndex);
    setChallenge(currentChallenge);
    setMonster(currentMonster);
    setMonsterHealth(currentMonster.maxHealth);
    setIsBattleOver(false);
    setBattleMessage('');
    setPlayerHealth(player.maxHealth);
  }, [currentChallengeIndex]);

  useEffect(() => {
    if (monster?.name) {
      fetchTaunt('start');
    }
  }, [monster, fetchTaunt]);

  const handleCorrectAnswer = () => {
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
      setBattleMessage(`Victory! The ${monster!.name} has been defeated!`);
      setMonsterTaunt('Ugh... defeated by... code? The indignity!');
      setMessageVariant('default');
    }
  }

  const handleIncorrectAnswer = () => {
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
        setBattleMessage(`Defeat! The ${monster!.name} overwhelmed you. Time to debug and try again!`);
        setMonsterTaunt('Ha! Your logic is as weak as your attacks!');
        setMessageVariant('destructive');
      }
  }

  const resetBattle = () => {
      const { monster: currentMonster } = getBattleChallenge(currentChallengeIndex);
      setPlayerHealth(player.maxHealth);
      setMonsterHealth(currentMonster.maxHealth);
      setIsBattleOver(false);
      setBattleMessage('');
      fetchTaunt('start');
  }

  const goToNextBattle = () => {
      setCurrentChallengeIndex(prev => prev + 1);
  }

  if (!challenge || !monster) {
    return <DashboardLayout><div className="flex justify-center items-center h-full"><Loader2 className="animate-spin h-8 w-8" /></div></DashboardLayout>
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col h-full p-4 gap-4">
        {/* Top Section: Monster & Player Info */}
        <div className="flex-shrink-0 grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          <Card className="flex flex-col items-center justify-center p-4">
             <h2 className="text-xl font-bold font-headline mb-2">{player.name}</h2>
             <div className="w-full max-w-md space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>Health</span>
                  <span>{playerHealth} / {player.maxHealth}</span>
                </div>
                <Progress value={(playerHealth / player.maxHealth) * 100} className="h-4" />
              </div>
          </Card>

           <Card className="flex flex-col items-center justify-center p-4 border-destructive/50 border-2 order-first lg:order-none">
             <h2 className="text-2xl font-bold font-headline mb-2">{monster.name}</h2>
             <Image
                src={monster.image}
                alt={monster.name}
                width={200}
                height={200}
                className="rounded-lg shadow-lg mb-2"
                data-ai-hint="scary monster"
              />
              <div className="w-full max-w-md space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>Health</span>
                  <span>{monsterHealth} / {monster.maxHealth}</span>
                </div>
                <Progress value={(monsterHealth / monster.maxHealth) * 100} className="h-4" />
                <div className="flex items-center justify-center gap-2 text-muted-foreground pt-2 italic text-center">
                    <MessageCircle className="h-4 w-4 shrink-0" />
                    <p>"{monsterTaunt}"</p>
                </div>
              </div>
          </Card>

          <Card className="p-4 flex flex-col justify-center">
            {isBattleOver ? (
              <div className="space-y-4">
                <Alert variant={messageVariant}>
                    <Shield className="h-4 w-4" />
                    <AlertTitle className="font-bold">{messageVariant === 'default' ? 'Victory!' : 'Defeated!'}</AlertTitle>
                    <AlertDescription>
                        {battleMessage}
                    </AlertDescription>
                </Alert>
                 {messageVariant === 'default' ? (
                     <Button onClick={goToNextBattle} className="w-full">
                        Next Battle <ArrowRight className="ml-2"/>
                     </Button>
                 ) : (
                     <Button onClick={resetBattle} variant="secondary" className="w-full">
                        Try Again <ArrowRight className="ml-2"/>
                     </Button>
                 )}
              </div>
            ) : (
                <div className="text-center">
                    <CardTitle className="font-headline">Your Move</CardTitle>
                    <p className="text-muted-foreground">Solve the challenge below. Submit your code to attack the monster!</p>
                </div>
            )}
          </Card>
        </div>
        
        {/* Bottom Section: IDE */}
        <div className="flex-grow min-h-0">
          <BattleIdePanel 
            challenge={challenge} 
            onCorrect={handleCorrectAnswer}
            onIncorrect={handleIncorrectAnswer}
            isBattleOver={isBattleOver}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
