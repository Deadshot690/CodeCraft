"use client";

import { tasks } from "@/lib/data";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { useState, use, useTransition } from "react";
import {
  Card,
  CardContent,
  CardDescription,
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
import { AlertCircle, CheckCircle, ChevronLeft, ChevronRight, Loader2, Terminal } from "lucide-react";
import { CodeEditor } from "@/components/code-editor";
import { runCode, RunCodeOutput } from "@/ai/flows/run-code-flow";
import type { Task } from "@/lib/types";

type Language = 'javascript' | 'python' | 'java' | 'cpp';

export default function TaskPage({ params }: { params: { id: string } }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const task = tasks.find((t) => t.id === resolvedParams.id);
  
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('javascript');
  const [code, setCode] = useState(task?.starterCode.javascript || "");
  const [isPending, startTransition] = useTransition();
  const [runResult, setRunResult] = useState<RunCodeOutput | null>(null);

  if (!task) {
    notFound();
  }

  const handleLanguageChange = (lang: Language) => {
    setSelectedLanguage(lang);
    setCode(task.starterCode[lang]);
    setRunResult(null);
  }
  
  const handleRunCode = () => {
    startTransition(async () => {
      const result = await runCode({ code, language: selectedLanguage, task: task as Task });
      setRunResult(result);
    });
  }

  const currentTaskIndex = tasks.findIndex(t => t.id === task.id);
  const nextTask = tasks[currentTaskIndex + 1];
  
  const allTestsPassed = runResult?.testResults.every(r => r.success);

  return (
    <div className="flex flex-col h-screen">
       <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6 shrink-0">
          <Button variant="outline" size="icon" className="h-8 w-8" asChild>
            <Link href="/tasks"><ChevronLeft className="h-4 w-4" /></Link>
          </Button>
          <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl truncate">
            {task.title}
          </h1>
          <div className="ml-auto">
            {nextTask && allTestsPassed && (
               <Button onClick={() => router.push(`/tasks/${nextTask.id}`)}>
                Next Task <ChevronRight className="ml-2 h-4 w-4" />
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
                  <pre className="mt-2 rounded-md bg-muted p-4 font-code text-sm">
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
            <CardTitle className="font-headline text-lg">Solution</CardTitle>
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
                initialCode={task.starterCode[selectedLanguage]}
                language={selectedLanguage} 
                onCodeChange={setCode}
            />
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" onClick={() => handleLanguageChange(selectedLanguage)}>Reset</Button>
              <Button onClick={handleRunCode} disabled={isPending}>
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Run Code
              </Button>
               <Button 
                onClick={handleRunCode} 
                disabled={isPending}
                className={allTestsPassed ? "bg-green-600 hover:bg-green-700" : ""}
               >
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {allTestsPassed ? "Passed" : "Submit"}
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="output" className="w-full">
          <TabsList>
            <TabsTrigger value="output">Output</TabsTrigger>
            <TabsTrigger value="test-cases">Test Cases</TabsTrigger>
          </TabsList>
          <TabsContent value="output">
            <Card>
              <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2"><Terminal /> Console</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="p-4 bg-muted rounded-md h-32 text-sm text-foreground overflow-auto font-code">
                    {isPending ? "Running code..." : runResult?.output || 'Click "Run Code" to see the output.'}
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="test-cases">
             <Card>
                 <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2"><AlertCircle/> Test Results</CardTitle>
              </Header>
              <CardContent>
                <div className="p-4 bg-muted rounded-md h-32 text-sm text-muted-foreground overflow-auto">
                    {isPending ? "Running tests..." : !runResult ? "Run your code to see test results." : (
                      <div className="space-y-4">
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
        </Tabs>
      </div>
    </div>
    </div>
  );
}
