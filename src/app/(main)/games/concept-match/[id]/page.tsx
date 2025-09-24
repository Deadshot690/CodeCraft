
"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter, notFound, useParams } from 'next/navigation';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { conceptMatchChallenges } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, RefreshCw } from 'lucide-react';
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

interface ColumnsState {
  [key: string]: Column;
}

export default function ConceptMatchArenaPage() {
  const params = useParams();
  const router = useRouter();

  const challenge = useMemo(() => {
    return conceptMatchChallenges.find((c) => c.id === params.id);
  }, [params.id]);

  const [columns, setColumns] = useState<ColumnsState>({});
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

    const shuffledCodeItems = [...codeItems].sort(() => Math.random() - 0.5);
    const shuffledConceptItems = [...conceptItems].sort(() => Math.random() - 0.5);

    setColumns({
      'col-code': { id: 'col-code', title: 'Code Snippets', items: shuffledCodeItems },
      'col-concept': { id: 'col-concept', title: 'Concepts', items: shuffledConceptItems },
      'col-matched': { id: 'col-matched', title: 'Matched Pairs', items: [] }
    });
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

    if (!sourceCol || !destCol) return;
    
    // Moving within the same column - reorder
    if (source.droppableId === destination.droppableId) {
        if (source.droppableId === 'col-matched') return; // Don't reorder in matched column
        const newItems = Array.from(sourceCol.items);
        const [removed] = newItems.splice(source.index, 1);
        newItems.splice(destination.index, 0, removed);

        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceCol,
                items: newItems
            }
        });
    } else { // Moving to a different column
        const sourceItems = Array.from(sourceCol.items);
        const destItems = Array.from(destCol.items);
        const [draggedItem] = sourceItems.splice(source.index, 1);

        // Check for a match
        const isMatch = draggedItem.matchId === destination.droppableId;

        if (isMatch && destCol.id === 'col-concept') { // Dragged code to concept
            const targetItemIndex = destItems.findIndex(item => item.id === destination.droppableId);
            const [targetItem] = destItems.splice(targetItemIndex, 1);
            
            const matchedItems = columns['col-matched'].items;
            
            setColumns({
                ...columns,
                [source.droppableId]: { ...sourceCol, items: sourceItems },
                [destination.droppableId]: { ...destCol, items: destItems },
                'col-matched': { ...columns['col-matched'], items: [...matchedItems, draggedItem, targetItem] }
            });
        } else if (isMatch && destCol.id === 'col-code') { // Dragged concept to code
            const targetItemIndex = destItems.findIndex(item => item.id === destination.droppableId);
            const [targetItem] = destItems.splice(targetItemIndex, 1);
            
            const matchedItems = columns['col-matched'].items;

            setColumns({
                ...columns,
                [source.droppableId]: { ...sourceCol, items: sourceItems },
                [destination.droppableId]: { ...destCol, items: destItems },
                'col-matched': { ...columns['col-matched'], items: [...matchedItems, draggedItem, targetItem] }
            });
        } else {
             // Not a match or invalid drop, do nothing (item snaps back)
        }
    }
  };

  useEffect(() => {
    if (columns['col-matched']?.items.length === (challenge?.codeSnippets.length ?? 0) * 2) {
      setShowConfetti(true);
    }
  }, [columns, challenge]);

  if (!isClient || !challenge) return null;

  const allMatched = columns['col-matched']?.items.length === challenge.codeSnippets.length * 2;
  
  const renderItem = (item: Item, isDraggable: boolean, isDragging: boolean) => {
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

    const droppableId = isCode ? `code-${item.id.split('-')[1]}` : `concept-${item.id.split('-')[1]}`;

    const itemContainer = (
        <div className={cn("h-32 p-1 border rounded-lg flex items-center bg-card", isDragging && "shadow-lg ring-2 ring-primary")}>
            {content}
        </div>
    );
    
    if (isDraggable) {
        return (
            <Draggable draggableId={item.id} index={item.id.includes('code-') ? columns['col-code'].items.findIndex(i => i.id === item.id) : columns['col-concept'].items.findIndex(i => i.id === item.id)}>
                {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                         {renderItem(item, false, snapshot.isDragging)}
                    </div>
                )}
            </Draggable>
        );
    }

    // It's a drop target
    return (
      <Droppable droppableId={item.id}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className={cn("h-full w-full rounded-lg transition-colors", snapshot.isDraggingOver && "bg-green-500/20")}>
            {itemContainer}
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
                  <CardTitle className="font-headline text-lg text-center">{columns[colId]?.title}</CardTitle>
                </CardHeader>
                <Droppable droppableId={colId}>
                  {(provided) => (
                    <CardContent
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="flex-1 p-2 space-y-2 overflow-y-auto rounded-lg bg-muted/50"
                    >
                      {columns[colId]?.items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              {renderItem(item, false, snapshot.isDragging)}
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
                  {columns['col-matched']?.items.length > 0 ? (
                     <div className="grid grid-cols-2 gap-2">
                      {columns['col-matched'].items.map((item) => (
                         <div key={item.id} className="h-32 p-1 border rounded-lg flex items-center bg-card/80 border-green-500/50">
                            <div className="h-full w-full">
                                {item.type === 'code' ? (
                                    <CodeEditor initialCode={item.content} language={item.language || 'javascript'} onCodeChange={() => {}} />
                                ) : (
                                    <Card className="h-full w-full flex items-center justify-center p-4 bg-secondary">
                                        <p className="text-center font-semibold">{item.content}</p>
                                    </Card>
                                )}
                            </div>
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
