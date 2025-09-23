import type { LucideIcon } from "lucide-react";

export type User = {
  name: string;
  avatarUrl: string;
  xp: number;
  level: number;
  xpToNextLevel: number;
  streak: number;
  badges: Badge[];
};

export type Badge = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export type Task = {
  id: string;
  title: string;
  category: 'Data Structures & Algorithms' | 'Web Development' | 'AI/ML' | 'Cybersecurity';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  xp: number;
  description: string;
  starterCode: {
    python: string;
    javascript: string;
    java: string;
    cpp: string;
  };
  examples: { input: string; output: string; explanation?: string }[];
  constraints: string[];
};

export type Game = {
  id: string;
  title: string;
  description:string;
  icon: LucideIcon;
  href: string;
};
