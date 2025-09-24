import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function normalizeCode(code: string): string {
    // Remove single-line comments (// and #)
    let cleanedCode = code.replace(/\/\/.*/g, '').replace(/#.*/g, '');

    // Normalize whitespace: replace multiple spaces/tabs/newlines with a single space
    cleanedCode = cleanedCode.replace(/\s+/g, ' ').trim();

    // Optional: make simple operator replacements for equivalence
    // Example: `x = x + y` becomes `x += y`
    // This is a simplified example and can be expanded
    cleanedCode = cleanedCode.replace(/(\w+)\s*=\s*\1\s*\+/g, '$1 +=');

    return cleanedCode;
}


export function normalizeAnswer(answer: string, isCode: boolean = false): string {
  if (!answer) return "";

  if (isCode) {
    return normalizeCode(answer);
  }

  // Original logic for simple text answers
  return answer
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' '); 
}
