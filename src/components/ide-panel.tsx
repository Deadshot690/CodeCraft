
'use client'

import { useState, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Challenge } from "@/lib/challenges";
import { runTestAction, submitAction } from '@/app/actions';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, Zap, Languages, Loader2, CheckCircle, XCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";


type Language = keyof Challenge['templates'];

const languageDisplayNames: Record<Language, string> = {
    javascript: 'JavaScript',
    python: 'Python',
    cpp: 'C++',
    java: 'Java',
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

function SubmissionResult({ results, challengeId }: { results: any[], challengeId: string }) {
    const totalCases = results.length;
    const passedCases = results.filter(r => r.passed).length;
    const allPassed = totalCases > 0 && passedCases === totalCases;

    const title = allPassed ? "Accepted!" : "Wrong Answer";
    const Icon = allPassed ? CheckCircle : XCircle;
    const color = allPassed ? "text-green-500" : "text-red-500";
    const variant = allPassed ? "default" : "destructive";

    if (allPassed) {
         // In a real app, this would be a server call.
         // For now, we use localStorage to track solved challenges.
         const solved = new Set(JSON.parse(localStorage.getItem('solvedChallenges') || '[]'));
         solved.add(challengeId);
         localStorage.setItem('solvedChallenges', JSON.stringify(Array.from(solved)));
    }


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
             <ScrollArea className="h-40 mt-4">
                 <div className="space-y-2 p-1">
                    {results?.map((result, index) => (
                       <TestCaseResult key={index} result={result} index={index} />
                    ))}
                 </div>
            </ScrollArea>
        </div>
    )
}

export default function IdePanel({ challenge }: { challenge: Challenge }) {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(challenge.languages[0]);
    const [code, setCode] = useState(challenge.templates[selectedLanguage]);
    const [runState, runAction] = useActionState(runTestAction, runInitialState);
    const [submitState, submitActionFn] = useActionState(submitAction, runInitialState);

    const handleLanguageChange = (lang: Language) => {
        setSelectedLanguage(lang);
        setCode(challenge.templates[lang]);
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
                                    {languageDisplayNames[lang]}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex gap-2">
                    <RunButton />
                    <SubmitButton />
                </div>
            </div>
            
            <form id="run-form" action={runAction}>
                 <input type="hidden" name="code" value={code} />
                 <input type="hidden" name="language" value={selectedLanguage} />
                 <input type="hidden" name="challengeTitle" value={challenge.title} />
                 <input type="hidden" name="testCases" value={JSON.stringify(challenge.testCases)} />
            </form>
             <form id="submit-form" action={submitActionFn}>
                 <input type="hidden" name="code" value={code} />
                 <input type="hidden" name="language" value={selectedLanguage} />
                 <input type="hidden" name="challengeTitle" value={challenge.title} />
                 <input type="hidden" name="testCases" value={JSON.stringify(challenge.testCases)} />
            </form>


            <div className="flex-grow flex flex-col min-h-0">
                <div className="flex-grow relative">
                    <Textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="h-full w-full bg-background rounded-none border-0 p-4 font-code text-base resize-none absolute inset-0"
                        name="code"
                        form="ai-assistant-form"
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
                    <TabsContent value="submit-output" className="h-[244px] p-0">
                        {!submitState.results && <p className="text-sm text-muted-foreground text-center py-20">Submission results will appear here.</p>}
                        {submitState.results && <SubmissionResult results={submitState.results} challengeId={challenge.id} />}
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
