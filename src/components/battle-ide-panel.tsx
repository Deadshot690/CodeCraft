
'use client'

import { useState, useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { Challenge } from "@/lib/challenges";
import { runTestAction } from '@/app/actions';
import { Button } from "@/components/ui/button";
import { PlayCircle, Zap, Languages, Loader2, CheckCircle, XCircle, Swords } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

type Language = keyof Challenge['templates'];

const languageDisplayNames: Record<Language, string> = {
    javascript: 'JavaScript',
    python: 'Python',
    cpp: 'C++',
    java: 'Java',
    c: 'C',
    typescript: 'TypeScript',
    go: 'Go',
    csharp: 'C#',
}

const runInitialState = {
  message: '',
  results: undefined,
  formErrors: {},
};

function AttackButton({ isBattleOver }: { isBattleOver: boolean }) {
    const { pending } = useFormStatus();
    return (
        <Button size="sm" type="submit" disabled={pending || isBattleOver}>
           {pending ? <><Loader2 className="mr-2 animate-spin" /> Evaluating...</> : <><Swords className="mr-2"/> Attack!</>}
        </Button>
    )
}

function TestCaseResult({ result, index }: { result: any, index: number}) {
    const isPassed = result.passed;
    return (
        <div className="p-4 rounded-md bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
                {isPassed ? <CheckCircle className="text-green-500" /> : <XCircle className="text-red-500" />}
                <p className="font-semibold">Case {index + 1}: {isPassed ? 'Passed' : 'Failed'}</p>
            </div>
            <div className="space-y-1 text-xs font-mono bg-background p-2 rounded-md">
                <p><span className="font-semibold">Input:</span> {JSON.stringify(result.input)}</p>
                <p><span className="font-semibold">Expected:</span> {JSON.stringify(result.expectedOutput)}</p>
                <p><span className="font-semibold">Your Output:</span> {JSON.stringify(result.actualOutput)}</p>
                 {result.logs && <p><span className="font-semibold">Logs:</span> {result.logs}</p>}
                 {result.error && <p><span className="font-semibold text-destructive">Error:</span> {result.error}</p>}
            </div>
        </div>
    )
}

interface BattleIdePanelProps {
    challenge: Challenge;
    onCorrect: () => void;
    onIncorrect: () => void;
    isBattleOver: boolean;
}

export default function BattleIdePanel({ challenge, onCorrect, onIncorrect, isBattleOver }: BattleIdePanelProps) {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(challenge.languages[0]);
    const [code, setCode] = useState(challenge.templates[selectedLanguage]);
    const [attackState, attackAction, isAttackPending] = useActionState(runTestAction, runInitialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
      if (attackState?.results && !isAttackPending) {
          const allPassed = attackState.results.every(r => r.passed);
          if(allPassed) {
              onCorrect();
          } else {
              onIncorrect();
          }
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [attackState, isAttackPending]);
    
    useEffect(() => {
        const lang = challenge.languages[0];
        setSelectedLanguage(lang);
        setCode(challenge.templates[lang] || '');
    }, [challenge]);

    const handleLanguageChange = (lang: Language) => {
        setSelectedLanguage(lang);
        setCode(challenge.templates[lang] || '');
    }

    return (
        <div className="h-full flex flex-col">
          <form action={attackAction} ref={formRef} className="h-full flex flex-col min-h-0">
            <div className="flex-shrink-0 flex-row items-center justify-between p-4 flex border-b bg-card rounded-t-lg">
                <div className="flex items-center gap-4">
                     <Select onValueChange={handleLanguageChange as any} value={selectedLanguage}>
                        <SelectTrigger className="w-[180px]">
                            <Languages className="mr-2" />
                            <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                            {challenge.languages.map(lang => (
                                <SelectItem key={lang} value={lang}>
                                    {languageDisplayNames[lang as Language]}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex gap-2">
                    <AttackButton isBattleOver={isBattleOver} />
                </div>
            </div>
            
                 <input type="hidden" name="language" value={selectedLanguage} />
                 <input type="hidden" name="challengeTitle" value={challenge.title} />
                 <input type="hidden" name="testCases" value={JSON.stringify(challenge.testCases)} />

            <div className="flex-grow flex flex-col min-h-0 bg-card rounded-b-lg">
                <div className="flex-grow relative">
                    <Textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="h-full w-full bg-background rounded-none border-0 p-4 font-code text-base resize-none absolute inset-0"
                        name="code"
                        disabled={isBattleOver}
                    />
                </div>
                 <Tabs defaultValue="challenge-info" className="flex-shrink-0 border-t">
                    <div className="p-2">
                        <TabsList>
                            <TabsTrigger value="challenge-info">Challenge</TabsTrigger>
                            <TabsTrigger value="test-results">Attack Results</TabsTrigger>
                        </TabsList>
                    </div>
                     <TabsContent value="challenge-info" className="mt-0 p-4 h-[200px]">
                        <ScrollArea className="h-full">
                            <CardTitle className="text-lg font-headline mb-2">{challenge.title}</CardTitle>
                            <div className="prose prose-sm dark:prose-invert max-w-none">
                                <p>{challenge.description}</p>
                            </div>
                        </ScrollArea>
                    </TabsContent>
                    <TabsContent value="test-results" className="mt-0 p-2 h-[200px]">
                       <ScrollArea className="h-full">
                         <div className="space-y-2 p-1">
                            {!attackState.results && !attackState.message && <p className="text-sm text-muted-foreground text-center py-8">Attack results will appear here.</p>}
                            {attackState.results?.map((result, index) => (
                               <TestCaseResult key={index} result={result} index={index} />
                            ))}
                            {attackState.message && <p className="text-sm text-destructive text-center py-8">{attackState.message}</p>}
                         </div>
                       </ScrollArea>
                    </TabsContent>
                </Tabs>
            </div>
          </form>
        </div>
    )
}
