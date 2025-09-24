import type { LucideIcon } from "lucide-react";

export type User = {
  uid: string;
  name: string;
  email: string | null;
  avatarUrl: string;
  xp: number;
  level: number;
  xpToNextLevel: number;
  streak: number;
  badges: Badge[];
  completedTasks: string[];
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

export type Monster = {
  id: string;
  name: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  imageUrl: string;
  imageHint: string;
  maxHealth: number;
  dialogues: {
    intro: string[];
    taunt: string[];
    attack: string[];
    hit: string[];
    defeat: string[];
  };
};

export type BattleQuestion = {
  id: string;
  question: string;
  answer: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  xp: number;
  category: string;
};

export type DebugChallenge = {
  id: string;
  title: string;
  description: string;
  language: 'python' | 'javascript' | 'java' | 'cpp';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  xp: number;
  buggyCode: string;
  testCases: {
    input: string;
    expectedOutput: string;
    explanation?: string;
  }[];
};

export type CodeJigsawChallenge = {
  id: string;
  title: string;
  description: string;
  language: 'python' | 'javascript' | 'java' | 'cpp';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  xp: number;
  lines: string[];
};
