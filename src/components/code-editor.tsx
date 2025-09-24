
"use client";

import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java, javaLanguage } from "@codemirror/lang-java";
import { cpp, cppLanguage } from "@codemirror/lang-cpp";
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { cn } from "@/lib/utils";


type Language = 'javascript' | 'python' | 'java' | 'cpp';

interface CodeEditorProps {
  initialCode: string;
  language: Language;
  onCodeChange?: (code: string) => void;
  transparentBg?: boolean;
}

const languageExtensions = {
  javascript: [javascript({ jsx: true })],
  python: [python()],
  java: [java()],
  cpp: [cpp()],
};


export const CodeEditor: React.FC<CodeEditorProps> = ({ initialCode, language, onCodeChange, transparentBg = false }) => {
  const [code, setCode] = useState(initialCode);

  const handleOnChange = (value: string) => {
    setCode(value);
    if (onCodeChange) {
      onCodeChange(value);
    }
  };

  return (
    <CodeMirror
      value={code}
      height="100%"
      extensions={languageExtensions[language]}
      theme={transparentBg ? 'none' : okaidia}
      onChange={handleOnChange}
      className={cn(
        "flex-grow rounded-md overflow-hidden text-base border",
        transparentBg && "bg-transparent"
        )}
    />
  );
};

    