import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function normalizeAnswer(answer: string): string {
  if (!answer) return "";
  // For code, just trim whitespace. For trivia, more normalization is needed.
  // This simple version will work for both now.
  return answer
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' '); 
}
