
"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter, notFound, useParams } from 'next/navigation';
import { conceptMatchChallenges } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, RefreshCw, SkipForward } from 'lucide-react';
import { CodeEditor } from '@/components/code-editor';
import { cn } from '@/lib/utils';
import Confetti from 'react-dom-confetti';

interface Item {
  id: string;
  content: string;
  type: 'code' | 'concept';
  language?: 'python' | 'javascript' | 'java' | 'cpp' | 'generic';
  matchId: string;
}

type GameItem = Item & {
  status: 'default' | 'selected' | 'matched' | 'incorrect';
};

export default function ConceptMatchArenaPage() {
  const params = useParams();
  const router = useRouter();

  const challenge = useMemo(() => {
    return conceptMatchChallenges.find((c) => c.id === params.id);
  }, [params.id]);

  const [gameItems, setGameItems] = useState<GameItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<GameItem | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const initializeGame = useCallback(() => {
    if (!challenge) return;

    const codeItems = challenge.codeSnippets.map(snippet => ({
      id: `code-${snippet.id}`,
      content: snippet.code,
      type: 'code' as const,
      language: snippet.language,
      matchId: `concept-${challenge.pairs.find(p => p.codeId === snippet.id)!.conceptId}`,
      status: 'default' as const
    }));

    const conceptItems = challenge.concepts.map(concept => ({
      id: `concept-${concept.id}`,
      content: concept.name,
      type: 'concept' as const,
      matchId: `code-${challenge.pairs.find(p => p.conceptId === concept.id)!.codeId}`,
      status: 'default' as const
    }));

    const allItems = [...codeItems, ...conceptItems].sort(() => Math.random() - 0.5);
    setGameItems(allItems);
    setSelectedItem(null);
    setShowConfetti(false);
    setIsComplete(false);
  }, [challenge]);

  useEffect(() => {
    setIsClient(true);
    initializeGame();
  }, [challenge, initializeGame]);


  const handleItemClick = (clickedItem: GameItem) => {
    if (clickedItem.status === 'matched' || isComplete) return;

    // If nothing is selected, select the clicked item
    if (!selectedItem) {
      setSelectedItem(clickedItem);
      setGameItems(items => items.map(item => item.id === clickedItem.id ? { ...item, status: 'selected' } : item));
      return;
    }

    // If clicking the same item, deselect it
    if (selectedItem.id === clickedItem.id) {
      setSelectedItem(null);
      setGameItems(items => items.map(item => item.id === clickedItem.id ? { ...item, status: 'default' } : item));
      return;
    }

    // If clicking a different item, check for a match
    if (selectedItem.matchId === clickedItem.id) {
      // Correct match
      setGameItems(items => items.map(item =>
        (item.id === selectedItem.id || item.id === clickedItem.id)
        ? { ...item, status: 'matched' }
        : item
      ));
      setSelectedItem(null);
    } else {
      // Incorrect match
      setGameItems(items => items.map(item =>
        (item.id === selectedItem.id || item.id === clickedItem.id)
        ? { ...item, status: 'incorrect' }
        : item
      ));

      setTimeout(() => {
        setGameItems(items => items.map(item =>
          item.status === 'incorrect' ? { ...item, status: 'default' } : item
        ));
      }, 500);
      setSelectedItem(null);
    }
  };

  useEffect(() => {
    if (gameItems.length > 0 && gameItems.every(item => item.status === 'matched')) {
      setShowConfetti(true);
      setIsComplete(true);
    }
  }, [gameItems]);

  const handleNextChallenge = () => {
    if (!challenge) return;
    const currentIndex = conceptMatchChallenges.findIndex(c => c.id === challenge.id);
    const nextChallenge = conceptMatchChallenges[(currentIndex + 1) % conceptMatchChallenges.length];
    router.push(`/games/concept-match/${nextChallenge.id}`);
  };

  if (!isClient || !challenge) return null;

  const codeItems = gameItems.filter(item => item.type === 'code');
  const conceptItems = gameItems.filter(item => item.type === 'concept');

  const renderItem = (item: GameItem) => {
    const isCode = item.type === 'code';
    const content = isCode ? (
      <CodeEditor
        initialCode={item.content}
        language={item.language || 'javascript'}
        onCodeChange={() => {}}
      />
    ) : (
      <Card className="h-full w-full flex items-center justify-center p-4 bg-secondary">
        <p className="text-center font-semibold">{item.content}</p>
      </Card>
    );

    const itemClass = cn(
      "h-32 p-1 border-2 rounded-lg flex items-center bg-card cursor-pointer transition-all duration-200",
      item.status === 'selected' && "ring-4 ring-primary border-primary shadow-lg",
      item.status === 'matched' && "border-green-500 bg-green-500/10 opacity-50 cursor-not-allowed",
      item.status === 'incorrect' && "border-destructive bg-destructive/20 animate-shake"
    );

    return (
        <div className={itemClass} onClick={() => handleItemClick(item)}>
            {content}
        </div>
    );
  };

  return (
    <div className="flex flex-col h-screen p-4 md:p-6">
       <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => router.push('/games/concept-match')}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl truncate">
            Concept Match: {challenge.title}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={initializeGame}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Reset
          </Button>
          <Button size="sm" onClick={handleNextChallenge}>
            Next Challenge <SkipForward className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-4 pt-4 overflow-hidden relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Confetti active={showConfetti} config={{ spread: 90, elementCount: 200 }} />
        </div>
        <p className="text-muted-foreground text-center">{challenge.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 overflow-y-auto p-2">

          <Card className="flex flex-col">
            <CardHeader><CardTitle className="font-headline text-lg text-center">Code Snippets</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {codeItems.map(item => <div key={item.id}>{renderItem(item)}</div>)}
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader><CardTitle className="font-headline text-lg text-center">Concepts</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {conceptItems.map(item => <div key={item.id}>{renderItem(item)}</div>)}
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
}
