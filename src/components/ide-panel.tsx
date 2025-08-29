'use client'

import { useState } from "react";
import { Challenge } from "@/lib/challenges";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, Zap } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Languages } from "lucide-react";

export default function IdePanel({ challenge }: { challenge: Challenge }) {
    const [selectedLanguage, setSelectedLanguage] = useState<keyof Challenge['templates']>(challenge.languages[0]);
    const [code, setCode] = useState(challenge.templates[selectedLanguage]);

    const handleLanguageChange = (lang: keyof Challenge['templates']) => {
        setSelectedLanguage(lang);
        setCode(challenge.templates[lang]);
    }

    const languageDisplayNames: Record<keyof Challenge['templates'], string> = {
        javascript: 'JavaScript',
        python: 'Python',
        cpp: 'C++',
        java: 'Java',
    }

    return (
        <Card className="lg:col-span-4 flex flex-col">
            <CardHeader className="flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                    <CardTitle className="font-headline text-2xl">Solution</CardTitle>
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
                    <Button variant="outline" size="sm"><Zap className="mr-2"/> Test</Button>
                    <Button size="sm"><PlayCircle className="mr-2"/> Submit</Button>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <Textarea 
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="h-full bg-background rounded-md border p-4 font-code text-base resize-none"
                    name="code"
                    form="ai-assistant-form"
                />
            </CardContent>
        </Card>
    )
}
