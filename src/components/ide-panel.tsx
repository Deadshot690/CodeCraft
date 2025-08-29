'use client'

import { useState } from "react";
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Challenge } from "@/lib/challenges";
import { runTestAction } from '@/app/actions';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, Zap, Languages, Loader2, CheckCircle, XCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "./ui/scroll-area";


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
    <Button size="sm" type="submit" disabled={pending} variant="outline">
      {pending ? <><Loader2 className="mr-2 animate-spin" /> Testing...</> : <><Zap className="mr-2"/> Test</>}
    </Button>
  );
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button size="sm" type="submit" disabled={pending}>
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

export default function IdePanel({ challenge }: { challenge: Challenge }) {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(challenge.languages[0]);
    const [code, setCode] = useState(challenge.templates[selectedLanguage]);
    const [runState, runAction] = useActionState(runTestAction, runInitialState);

    const handleLanguageChange = (lang: Language) => {
        setSelectedLanguage(lang);
        setCode(challenge.templates[lang]);
    }


    return (
        <div className="h-full flex flex-col">
            <form action={runAction} className="flex-shrink-0">
                 <input type="hidden" name="code" value={code} />
                 <input type="hidden" name="language" value={selectedLanguage} />
                 <input type="hidden" name="challengeTitle" value={challenge.title} />
                 <input type="hidden" name="testCases" value={JSON.stringify(challenge.testCases)} />
                <div className="flex-row items-center justify-between p-4 flex border-b">
                    <div className="flex items-center gap-4">
                        <Select onValueChange={handleLanguageChange} defaultValue={selectedLanguage}>
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
                    <TabsContent value="submit-output" className="h-48 p-2">
                         <p className="text-sm text-muted-foreground text-center py-8">Submission results will appear here.</p>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
