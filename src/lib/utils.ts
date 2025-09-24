import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function normalizeAnswer(answer: string): string {
  if (!answer) return "";
  return answer
    .toLowerCase()
    .trim()
    .replace(/[().\s]/g, ''); // Removes parentheses, dots, and whitespace
}
