"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter, notFound, useParams } from 'next/navigation';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { codeJigsawChallenges } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, RefreshCw, Check, Puzzle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CodeEditor } from '@/components/code-editor';
import { cn } from '@/lib/utils';
import Confetti from 'react-dom-confetti';

interface Line {
  id: string;
  content: string;
}

interface Column {
  title: string;
  lines: Line[];
}

interface Columns {
  [key: string]: Column;
}

// Helper to shuffle an array
const shuffle = (array: any[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function CodeJigsawArenaPage() {
  const params = useParams();
  const router = useRouter();

  const challenge = useMemo(() => {
    return codeJigsawChallenges.find((c) => c.id === params.id);
  }, [params.id]);

  const [columns, setColumns] = useState<Columns>({});
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const initializeGame = useCallback(() => {
    if (!challenge) return;

    const lines: Line[] = challenge.codeSnippet
      .split('\n')
      .map((line, index) => ({ id: `line-${index}`, content: line }));
    
    setColumns({
      'source': {
        title: 'Scrambled Lines',
        lines: shuffle(lines),
      },
      'solution': {
        title: 'Your Solution',
        lines: [],
      },
    });
    setIsCorrect(null);
    setShowConfetti(false);
  }, [challenge]);

  useEffect(() => {
    setIsClient(true);
    initializeGame();
  }, [challenge, initializeGame]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];
    const sourceItems = [...sourceCol.lines];
    const [removed] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceCol,
          lines: sourceItems,
        },
      });
    } else {
      const destItems = [...destCol.lines];
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceCol,
          lines: sourceItems,
        },
        [destination.droppableId]: {
          ...destCol,
          lines: destItems,
        },
      });
    }
  };
  
  const checkSolution = () => {
    if (!challenge) return;
    const correctOrder = challenge.codeSnippet.split('\n');
    const userOrder = columns.solution.lines.map(line => line.content);

    if (JSON.stringify(correctOrder) === JSON.stringify(userOrder)) {
      setIsCorrect(true);
      setShowConfetti(true);
    } else {
      setIsCorrect(false);
    }
  };

  if (!isClient) return null;
  if (!challenge) return notFound();

  return (
    <div className="flex flex-col h-screen p-4 md:p-6">
      <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => router.push('/games/code-jigsaw')}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl truncate flex items-center gap-2">
            <Puzzle /> Code Jigsaw: {challenge.title}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={initializeGame}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Reset
          </Button>
           <Button size="sm" onClick={checkSolution} disabled={columns.source?.lines.length > 0}>
            <Check className="mr-2 h-4 w-4" />
            Check Solution
          </Button>
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-4 pt-4 overflow-hidden relative">
        <p className="text-muted-foreground text-center">{challenge.description}</p>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Confetti active={showConfetti} config={{ spread: 90, elementCount: 200 }} />
        </div>
        
        {isCorrect !== null && (
          <Alert variant={isCorrect ? "default" : "destructive"} className={isCorrect ? "bg-green-500/10 border-green-500/50" : ""}>
            <AlertTitle>{isCorrect ? "Correct!" : "Not Quite!"}</AlertTitle>
            <AlertDescription>
              {isCorrect ? "Great job! You assembled the code correctly." : "The order isn't right. Try moving the lines around."}
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 overflow-y-auto p-2">
          <DragDropContext onDragEnd={onDragEnd}>
            {Object.entries(columns).map(([colId, column]) => (
              <Card key={colId} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-lg text-center">{column.title}</CardTitle>
                </CardHeader>
                <Droppable droppableId={colId}>
                  {(provided, snapshot) => (
                    <CardContent
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={cn(
                        "flex-1 p-2 space-y-2 rounded-md transition-colors",
                        snapshot.isDraggingOver ? "bg-accent" : "bg-muted/50"
                      )}
                    >
                      {column.lines.map((line, index) => (
                        <Draggable key={line.id} draggableId={line.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={cn(
                                "p-2 rounded-md bg-card shadow-sm border",
                                snapshot.isDragging ? "shadow-lg scale-105" : ""
                              )}
                            >
                              <pre className="font-code text-sm whitespace-pre-wrap"><code>{line.content || ' '}</code></pre>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </CardContent>
                  )}
                </Droppable>
              </Card>
            ))}
          </DragDropContext>
        </div>
      </main>
    </div>
  );
}