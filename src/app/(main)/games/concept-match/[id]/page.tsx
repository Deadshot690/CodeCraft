
"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter, notFound, useParams } from 'next/navigation';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { conceptMatchChallenges } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ChevronLeft, RefreshCw, XCircle, GripVertical } from 'lucide-react';
import { CodeEditor } from '@/components/code-editor';
import { cn } from '@/lib/utils';
import Confetti from 'react-dom-confetti';

interface Item {
  id: string;
  content: string;
  type: 'code' | 'concept';
  language?: 'python' | 'javascript' | 'java' | 'cpp';
  matchId: string;
}

interface Column {
  id: string;
  title: string;
  items: Item[];
}

export default function ConceptMatchArenaPage() {
  const params = useParams();
  const router = useRouter();

  const challenge = useMemo(() => {
    return conceptMatchChallenges.find((c) => c.id === params.id);
  }, [params.id]);

  const [columns, setColumns] = useState<Record<string, Column>>({});
  const [matches, setMatches] = useState<Record<string, string | null>>({});
  const [isClient, setIsClient] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const initializeGame = useCallback(() => {
    if (!challenge) return;

    const codeItems = challenge.codeSnippets.map(snippet => ({
      id: `code-${snippet.id}`,
      content: snippet.code,
      type: 'code' as const,
      language: snippet.language,
      matchId: `concept-${challenge.pairs.find(p => p.codeId === snippet.id)!.conceptId}`
    }));

    const conceptItems = challenge.concepts.map(concept => ({
      id: `concept-${concept.id}`,
      content: concept.name,
      type: 'concept' as const,
      matchId: `code-${challenge.pairs.find(p => p.conceptId === concept.id)!.codeId}`
    }));
    
    // Shuffle both lists independently
    const shuffledCodeItems = [...codeItems].sort(() => Math.random() - 0.5);
    const shuffledConceptItems = [...conceptItems].sort(() => Math.random() - 0.5);

    setColumns({
      'col-code': { id: 'col-code', title: 'Code Snippets', items: shuffledCodeItems },
      'col-concept': { id: 'col-concept', title: 'Concepts', items: shuffledConceptItems },
      'col-matched': { id: 'col-matched', title: 'Matched Pairs', items: [] }
    });
    setMatches({});
    setShowConfetti(false);
  }, [challenge]);

  useEffect(() => {
    setIsClient(true);
    initializeGame();
  }, [challenge, initializeGame]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    // Ignore drops outside of a droppable area
    if (!destination) return;

    // Find the source and destination columns
    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];
    if (!sourceCol || !destCol) return;

    // Find the item being dragged
    const draggedItem = sourceCol.items.find(item => item.id === draggableId);
    if (!draggedItem) return;

    // Handle dropping onto an item in another column (the match logic)
    if (source.droppableId !== destination.droppableId && destination.droppableId !== 'col-matched') {
      const targetItem = destCol.items.find(item => item.id === destination.droppableId);
      
      // Check for a correct match
      if (draggedItem.matchId === destination.droppableId) {
        const targetItem = destCol.items.find(i => i.id === destination.droppableId);
        if (!targetItem) return;

        // Correct match found, move both items to the 'matched' column
        const newColumns = { ...columns };
        
        // Remove dragged item from source
        newColumns[source.droppableId].items = newColumns[source.droppableId].items.filter(i => i.id !== draggableId);

        // Remove target item from destination
        newColumns[destination.droppableId].items = newColumns[destination.droppableId].items.filter(i => i.id !== destination.droppableId);

        // Add both to the matched column
        newColumns['col-matched'].items.push(draggedItem, targetItem);
        
        setColumns(newColumns);
      } else {
        // Incorrect match, do nothing (item snaps back)
        return;
      }
    }
    // If dropping elsewhere (e.g., reordering within a column, which we don't support), do nothing.
  };
  
  useEffect(() => {
    if (columns['col-matched']?.items.length === (challenge?.codeSnippets.length ?? 0) * 2) {
      setShowConfetti(true);
    }
  }, [columns, challenge]);


  if (!isClient || !challenge) return null; // Or a loading spinner

  const allMatched = columns['col-matched']?.items.length === challenge.codeSnippets.length * 2;

  const renderItem = (item: Item, isMatchedCol: boolean, isDraggable: boolean, isOver: boolean) => {
    const content = item.type === 'code' ? (
        <div className="h-full w-full">
            <CodeEditor
                initialCode={item.content}
                language={item.language || 'javascript'}
                onCodeChange={() => {}} // read-only
            />
        </div>
    ) : (
        <Card className={cn("h-full w-full flex items-center justify-center p-4", isOver ? "bg-green-500/20" : "bg-secondary")}>
            <p className="text-center font-semibold">{item.content}</p>
        </Card>
    );

    if (isDraggable) {
        return content;
    }

    // If it's a drop target, wrap it to be a droppable area
    return (
        <Droppable droppableId={item.id} isDropDisabled={false} isCombineEnabled={false}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="h-full w-full">
                    {content}
                    <div style={{display: 'none'}}>{provided.placeholder}</div>
                </div>
            )}
        </Droppable>
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
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-4 pt-4 overflow-hidden">
        <p className="text-muted-foreground text-center">{challenge.description}</p>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 overflow-hidden">
            
            {['col-code', 'col-concept'].map(colId => (
              <Card key={colId} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-lg text-center">{columns[colId].title}</CardTitle>
                </CardHeader>
                <Droppable droppableId={colId} isDropDisabled={true} isCombineEnabled={false}>
                  {(provided) => (
                    <CardContent
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="flex-1 p-2 space-y-2 overflow-y-auto rounded-lg bg-muted/50"
                    >
                      {columns[colId].items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                             <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={cn("h-32 p-1 border rounded-lg flex items-center bg-card", snapshot.isDragging && "shadow-lg ring-2 ring-primary")}
                              >
                                {renderItem(item, false, true, false)}
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

            <Card className="flex flex-col relative md:col-span-1">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Confetti active={showConfetti} config={{ spread: 90, elementCount: 200 }} />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-lg text-center">{allMatched ? "Complete!" : "Matched Pairs"}</CardTitle>
              </CardHeader>
                <CardContent
                  className="flex-1 p-2 space-y-2 overflow-y-auto rounded-lg bg-muted/50"
                >
                  {columns['col-matched'].items.length > 0 ? (
                     <div className="grid grid-cols-2 gap-2">
                      {columns['col-matched'].items.map((item, index) => (
                         <div key={item.id} className="h-32 p-1 border rounded-lg flex items-center bg-card/80 border-green-500/50">
                            {renderItem(item, true, true, false)}
                         </div>
                      ))}
                     </div>
                  ): (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      <p>Drag a code snippet onto its matching concept.</p>
                    </div>
                  )}
                </CardContent>
            </Card>
          </div>
        </DragDropContext>
      </main>
    </div>
  );
}
