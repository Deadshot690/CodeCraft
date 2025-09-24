
"use client";

import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter
} from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';
import { Award, Repeat, SkipForward } from 'lucide-react';

interface CompletionModalProps {
  xpGained: number;
  wpm: number;
  accuracy: number;
  onRetry: () => void;
  onNext: () => void;
}

export const CompletionModal: React.FC<CompletionModalProps> = ({
  xpGained,
  wpm,
  accuracy,
  onRetry,
  onNext,
}) => {
  const isSuccess = accuracy >= 80; // Example success condition

  return (
    <AlertDialog open={true}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 font-headline text-2xl">
            <Award className={isSuccess ? "text-yellow-400" : "text-destructive"} />
            {isSuccess ? "Challenge Complete!" : "Time's Up!"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isSuccess 
              ? `Great job! You completed the challenge and earned ${xpGained} XP.` 
              : "Good effort! You'll get it next time. Practice makes perfect."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid grid-cols-2 gap-4 text-center border rounded-lg p-4">
            <div>
                <p className="text-2xl font-bold">{wpm}</p>
                <p className="text-sm text-muted-foreground">WPM</p>
            </div>
            <div>
                <p className="text-2xl font-bold">{accuracy.toFixed(1)}%</p>
                <p className="text-sm text-muted-foreground">Accuracy</p>
            </div>
        </div>
        <AlertDialogFooter>
          <Button variant="outline" onClick={onRetry}>
            <Repeat className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button onClick={onNext}>
            Next Challenge
            <SkipForward className="ml-2 h-4 w-4" />
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
