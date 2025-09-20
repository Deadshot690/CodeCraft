
'use client'

import { useState, useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { Challenge } from "@/lib/challenges";
import { runTestAction, submitAction } from '@/app/actions';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, Zap, Languages, Loader2, CheckCircle, XCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';

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

function RunButton() {
  const { pending } = useFormStatus();
  return (
    <Button size="sm" type="submit" disabled={pending} variant="outline" form="run-form">
      {pending ? <><Loader2 className="mr-2 animate-spin" /> Testing...</> : <><Zap className="mr-2"/> Test</>}
    </Button>
  );
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button size="sm" type="submit" disabled={pending} form="submit-form">
           {pending ? <><Loader2 className="mr-2 animate-spin" /> Submitting...</> : <><PlayCircle className="mr-2"/> Submit</>}
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

function SubmissionResult({ results, challenge, onCompletion }: { results: any[], challenge: Challenge, onCompletion?: (results: any[]) => void }) {
    const totalCases = results.length;
    const passedCases = results.filter(r => r.passed).length;
    const allPassed = totalCases > 0 && passedCases === totalCases;

    const title = allPassed ? "Accepted!" : "Wrong Answer";
    const Icon = allPassed ? CheckCircle : XCircle;
    const color = allPassed ? "text-green-500" : "text-red-500";
    const variant = allPassed ? "default" : "destructive";

    useEffect(() => {
        if (onCompletion) {
            onCompletion(results);
        }

        if (allPassed) {
             // This is a simplified way to track progress. In a real app, this would be a server call.
             const solvedInfo = JSON.parse(localStorage.getItem('solvedChallengesInfo') || '[]');
             const existing = solvedInfo.find((s: any) => s.id === challenge.id);
             if (!existing) {
                 solvedInfo.push({ id: challenge.id, title: challenge.title, solvedAt: new Date().toISOString() });
                 localStorage.setItem('solvedChallengesInfo', JSON.stringify(solvedInfo));
             }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [results, challenge, onCompletion]);

    return (
        <div className="p-4">
            <Alert variant={variant}>
                <Icon className={`h-5 w-5 ${color}`} />
                <AlertTitle className={`text-xl ${color} font-bold`}>{title}</AlertTitle>
                <AlertDescription>
                    You passed {passedCases} out of {totalCases} test cases.
                    {allPassed && " Great job! This problem has been marked as solved."}
                </AlertDescription>
            </Alert>
             <ScrollArea className="h-64 mt-4">
                 <div className="space-y-2 p-1">
                    {results?.map((result, index) => (
                       <TestCaseResult key={index} result={result} index={index} />
                    ))}
                 </div>
            </ScrollArea>
        </div>
    )
}

interface IdePanelProps {
    challenge: Challenge;
    onRunCompletion?: (results: any[]) => void;
    onSubmitCompletion?: (results: any[]) => void;
}


export default function IdePanel({ challenge, onRunCompletion, onSubmitCompletion }: IdePanelProps) {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(challenge.languages[0]);
    const [code, setCode] = useState(challenge.templates[selectedLanguage]);
    const [runState, runAction] = useActionState(runTestAction, runInitialState);
    const [submitState, submitActionFn] = useActionState(submitAction, runInitialState);
    const [activeTestCases, setActiveTestCases] = useState(challenge.testCases);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        import('prismjs/components/prism-clike');
        import('prismjs/components/prism-javascript');
        import('prismjs/components/prism-python');
        import('prismjs/components/prism-java');
        import('prismjs/components/prism-cpp');
        import('prismjs/themes/prism.css');
    }, []);

    useEffect(() => {
        // Ensure there's always at least one test case to prevent AI flow errors
        const cases = challenge.testCases && challenge.testCases.length > 0
            ? challenge.testCases
            : [{ input: {}, expectedOutput: {} }];
        setActiveTestCases(cases);
    }, [challenge.testCases]);

    const handleLanguageChange = (lang: Language) => {
        setSelectedLanguage(lang);
        setCode(challenge.templates[lang] || '');
    }

    useEffect(() => {
        if (runState.results && onRunCompletion) {
            onRunCompletion(runState.results);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [runState.results]);

     useEffect(() => {
        if (submitState.results && onSubmitCompletion) {
            onSubmitCompletion(submitState.results);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [submitState.results]);

    const highlight = (code: string) => {
        if (!isClient || !Prism.languages[selectedLanguage]) {
            return code; // No highlighting on server or if language not loaded
        }
        return Prism.highlight(code, Prism.languages[selectedLanguage], selectedLanguage);
    }

    return (
        <div className="h-full flex flex-col">
            
             <div className="flex-shrink-0 flex-row items-center justify-between p-4 flex border-b">
                <div className="flex items-center gap-4">
                    <Select onValueChange={handleLanguageChange as any} defaultValue={selectedLanguage}>
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
                    <form action={runAction} id="run-form">
                         <input type="hidden" name="code" value={code} />
                         <input type="hidden" name="language" value={selectedLanguage} />
                         <input type="hidden" name="challengeTitle" value={challenge.title} />
                         <input type="hidden" name="challengeId" value={challenge.id} />
                         <input type="hidden" name="testCases" value={JSON.stringify(activeTestCases)} />
                        <RunButton />
                    </form>
                    <form action={submitActionFn} id="submit-form">
                         <input type="hidden" name="code" value={code} />
                         <input type="hidden" name="language" value={selectedLanguage} />
                         <input type="hidden" name="challengeTitle" value={challenge.title} />
                         <input type="hidden" name="challengeId" value={challenge.id} />
                         <input type="hidden" name="testCases" value={JSON.stringify(activeTestCases)} />
                        <SubmitButton />
                    </form>
                </div>
            </div>


            <div className="flex-grow flex flex-col min-h-0">
                <div className="flex-grow relative h-full w-full bg-background font-code text-base">
                    <Editor
                        value={code}
                        onValueChange={setCode}
                        highlight={highlight}
                        padding={16}
                        className="h-full w-full rounded-none border-0 resize-none absolute inset-0"
                        textareaId="code-editor"
                        onKeyDown={e => {
                             if (e.key === "Tab") {
                                e.preventDefault();
                                document.execCommand('insertText', false, '  ');
                            }
                        }}
                    />
                </div>
                 <Tabs defaultValue="test-results" className="flex-shrink-0 border-t">
                    <div className="p-2">
                        <TabsList>
                            <TabsTrigger value="test-results">Test Results</TabsTrigger>
                            <TabsTrigger value="submit-output">Submit Output</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="test-results" className="mt-0 p-2">
                       <ScrollArea className="h-48">
                         <div className="space-y-2 p-1">
                            {!runState.results && <p className="text-sm text-muted-foreground text-center py-8">Click "Test" to run your code against test cases.</p>}
                            {runState.results?.map((result, index) => (
                               <TestCaseResult key={index} result={result} index={index} />
                            ))}
                         </div>
                       </ScrollArea>
                    </TabsContent>
                    <TabsContent value="submit-output" className="h-80 p-0">
                        {!submitState.results && <p className="text-sm text-muted-foreground text-center py-20">Submission results will appear here.</p>}
                        {submitState.results && <SubmissionResult results={submitState.results} challenge={challenge} onCompletion={onSubmitCompletion} />}
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
