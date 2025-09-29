
"use client";

import React, { useState } from "react";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java, javaLanguage } from "@codemirror/lang-java";
import { cpp, cppLanguage } from "@codemirror/lang-cpp";
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { cn } from "@/lib/utils";
import { php } from "@codemirror/lang-php";


type Language = 'javascript' | 'python' | 'java' | 'cpp' | 'php';

interface CodeEditorProps {
  initialCode: string;
  language: Language;
  onCodeChange?: (code: string) => void;
  readOnly?: boolean;
}

const languageExtensions = {
  javascript: [javascript({ jsx: true })],
  python: [python()],
  java: [java()],
  cpp: [cpp()],
  php: [php()], 
};

export const CodeEditor: React.FC<CodeEditorProps> = ({ initialCode, language, onCodeChange, readOnly = false }) => {
  const [code, setCode] = useState(initialCode);

  const handleOnChange = (value: string) => {
    setCode(value);
    if (onCodeChange) {
      onCodeChange(value);
    }
  };
  
  const extensions = languageExtensions[language] || [javascript()];

  return (
    <CodeMirror
      value={code}
      height="auto"
      readOnly={readOnly}
      extensions={extensions}
      theme={okaidia}
      onChange={handleOnChange}
      className={cn("rounded-md overflow-hidden text-base border bg-muted")}
    />
  );
};
