
"use client";

import { algoArenaTasks } from "@/lib/data";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { useState, use, useTransition, useMemo, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle, ChevronLeft, ChevronRight, Loader2, Terminal, Gamepad2, TimerIcon } from "lucide-react";
import { CodeEditor } from "@/components/code-editor";
import { runCode, RunCodeOutput } from "@/ai/flows/run-code-flow";
import type { Task } from "@/lib/types";
import { CompletionModal } from "@/components/games/completion-modal";

type Language = 'javascript' | 'python' | 'java' | 'cpp';
type GameStatus = 'waiting' | 'playing' | 'finished';

const getChallengeDuration = (difficulty: Task['difficulty']): number => {
  switch (difficulty) {
    case 'Beginner': return 300; // 5 minutes
    case 'Intermediate': return 600; // 10 minutes
    case 'Advanced': return 900; // 15 minutes
    case 'Expert': return 1200; // 20 minutes
    default: return 600;
  }
};

export default function AlgoArenaPage({ params }: { params: { id: string } }) {
  const resolvedParams = use(params);
  const router = useRouter();

  const [selectedLanguage, setSelectedLanguage] = useState<Language>('javascript');
  const [isPending, startTransition] = useTransition();
  const [runResult, setRunResult] = useState<RunCodeOutput | null>(null);
  
  const { task, currentTaskIndex } = useMemo(() => {
    const foundTask = algoArenaTasks.find((t) => t.id === resolvedParams.id);
    if (!foundTask) {
      return { task: null, currentTaskIndex: -1 };
    }
    const index = algoArenaTasks.findIndex(t => t.id === foundTask.id);
    return { task: foundTask, currentTaskIndex: index };
  }, [resolvedParams.id]);
  
  const challengeDuration = useMemo(() => task ? getChallengeDuration(task.difficulty) : 300, [task]);

  const [code, setCode] = useState(task?.starterCode[selectedLanguage] || "");
  const [status, setStatus] = useState<GameStatus>('waiting');
  const [timer, setTimer] = useState(challengeDuration);

  // Reset game state when challenge or language changes
  useEffect(() => {
    if (task) {
      setCode(task.starterCode[selectedLanguage]);
      setRunResult(null);
      setStatus('waiting');
      setTimer(challengeDuration);
    }
  }, [task, selectedLanguage, challengeDuration]);

  // Timer countdown effect
  useEffect(() => {
    if (status !== 'playing' || timer <= 0) {
      if (timer <= 0) setStatus('finished');
      return;
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [status, timer]);
  
  if (!task) {
    notFound();
  }
  
  const handleLanguageChange = (lang: Language) => {
    setSelectedLanguage(lang);
  }

  const handleCodeChange = (newCode: string) => {
    if (status === 'waiting' && newCode.length > 0) {
      setStatus('playing');
    }
    setCode(newCode);
  };
  
  const handleSubmitCode = () => {
    startTransition(async () => {
      const result = await runCode({ code, language: selectedLanguage, task: task as Task });
      setRunResult(result);
      setStatus('finished');
    });
  }

  const handleNextChallenge = () => {
    if (nextTask) {
      router.push(`/games/algo-arena/${nextTask.id}`);
    } else {
      router.push('/games/algo-arena');
    }
  };

  const resetGame = () => {
    setStatus('waiting');
    setTimer(challengeDuration);
    setRunResult(null);
    setCode(task.starterCode[selectedLanguage]);
  };

  const prevTask = algoArenaTasks[currentTaskIndex - 1];
  const nextTask = algoArenaTasks[currentTaskIndex + 1];
  
  const allTestsPassed = runResult?.testResults.every(r => r.success);
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div className="flex flex-col h-screen">
       <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6 shrink-0">
          <Button variant="outline" size="icon" className="h-8 w-8" asChild>
            <Link href="/games/algo-arena"><ChevronLeft className="h-4 w-4" /></Link>
          </Button>
          <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl truncate flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-primary"/> Algo Arena: {task.title}
          </h1>
          <div className="ml-auto flex items-center gap-2">
            {prevTask && (
              <Button variant="outline" onClick={() => router.push(`/games/algo-arena/${prevTask.id}`)}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
            )}
            {nextTask && (
              <Button onClick={() => router.push(`/games/algo-arena/${nextTask.id}`)}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </header>
      <div className="flex-1 p-4 md:p-6 grid gap-6 lg:grid-cols-2 overflow-auto">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">{task.title}</CardTitle>
              <div className="flex items-center gap-2 pt-2">
                <Badge variant="outline">{task.difficulty}</Badge>
                <Badge variant="secondary">{task.category}</Badge>
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                  {task.xp} XP
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{task.description}</p>
            </CardContent>
          </Card>
          
          {task.examples.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-lg">Examples</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {task.examples.map((example, index) => (
                  <div key={index}>
                    <p className="font-semibold">Example {index + 1}:</p>
                    <pre className="mt-2 rounded-md bg-muted p-4 font-code text-sm whitespace-pre-wrap">
                      <code>
                        <strong>Input:</strong> {example.input}
                        <br />
                        <strong>Output:</strong> {example.output}
                        {example.explanation && (
                          <>
                            <br />
                            <strong>Explanation:</strong> {example.explanation}
                          </>
                        )}
                      </code>
                    </pre>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {task.constraints.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-lg">Constraints</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {task.constraints.map((constraint, index) => (
                    <li key={index}>{constraint}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <Card className="flex-grow flex flex-col">
            <CardHeader className="flex-row items-center justify-between">
              <div className="flex flex-col gap-1">
                 <CardTitle className="font-headline text-lg">Solution</CardTitle>
                 <div className="flex items-center gap-2 text-muted-foreground">
                    <TimerIcon className="h-5 w-5 text-primary" />
                    <span className="text-lg font-mono font-semibold tabular-nums">{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</span>
                 </div>
              </div>
              <Select 
                defaultValue={selectedLanguage}
                onValueChange={(value) => handleLanguageChange(value as Language)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="cpp">C++</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <CodeEditor 
                  key={selectedLanguage}
                  initialCode={code}
                  language={selectedLanguage} 
                  onCodeChange={handleCodeChange}
              />
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline" onClick={resetGame}>Reset</Button>
                <Button onClick={handleSubmitCode} disabled={isPending || status === 'finished'}>
                  {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="test-cases" className="w-full">
            <TabsList>
              <TabsTrigger value="test-cases">Test Cases</TabsTrigger>
              <TabsTrigger value="output">Console</TabsTrigger>
            </TabsList>
            <TabsContent value="test-cases">
               <Card>
                   <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2"><AlertCircle/> Test Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-muted rounded-md min-h-[128px] text-sm text-muted-foreground overflow-auto">
                      {isPending ? "Running tests..." : !runResult ? "Submit your code to see test results." : (
                        <div className="space-y-4">
                          {runResult.testResults.length === 0 && <p>No test cases ran. Check your code for errors.</p>}
                          {runResult.testResults.map((result, index) => (
                             <Alert key={index} variant={result.success ? "default" : "destructive"} className={result.success ? "bg-green-500/10 border-green-500/50" : ""}>
                              <AlertTitle className="flex items-center gap-2">
                                {result.success ? <CheckCircle className="h-4 w-4 text-green-500"/> : <AlertCircle className="h-4 w-4"/>}
                                Test Case #{index + 1}: {result.success ? 'Passed' : 'Failed'}
                              </AlertTitle>
                              <AlertDescription className="font-code text-xs pl-6">
                                Input: {result.testCase} <br/>
                                Expected: {result.expected} <br/>
                                Got: {result.actual}
                              </AlertDescription>
                            </Alert>
                          ))}
                        </div>
                      )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="output">
              <Card>
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2"><Terminal /> Console</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="p-4 bg-muted rounded-md min-h-[128px] text-sm text-foreground overflow-auto font-code">
                      {isPending ? "Running code..." : runResult?.output || 'Submit your code to see the console output.'}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      {status === 'finished' && (
        <CompletionModal 
          xpGained={allTestsPassed ? task.xp : 0}
          wpm={0} // WPM not applicable here
          accuracy={runResult?.testResults.length ? (runResult.testResults.filter(r => r.success).length / runResult.testResults.length) * 100 : 0}
          onRetry={resetGame}
          onNext={handleNextChallenge}
        />
      )}
    </div>
  );
}
