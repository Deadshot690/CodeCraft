import type { Game } from '@/lib/types';
import { Swords, Bug, Keyboard, Eye, BrainCircuit, Puzzle, Castle, Shield } from 'lucide-react';

export const games: Game[] = [
    { id: '1', title: 'Monster Battle', description: 'Answer coding trivia to defeat monsters in a turn-based RPG.', icon: Swords, href: '/games/monster-battle' },
    { id: '2', title: 'Debug Hunt', description: 'Find and fix bugs in code snippets against the clock.', icon: Bug, href: '/games/debug-hunt' },
    { id: '4', title: 'Code Typer', description: 'Improve your typing speed and accuracy by typing out code snippets.', icon: Keyboard, href: '/games/code-typer' },
    { id: '5', title: 'Output Prediction', description: 'Analyze a code snippet and predict what it will output.', icon: Eye, href: '/games/output-prediction' },
    { id: '6', 'title': 'Concept Match', 'description': 'Test your knowledge by matching code snippets to their corresponding concepts.', 'icon': BrainCircuit, 'href': '/games/concept-match' },
    { id: '7', title: 'Code Jigsaw', description: 'Piece together scrambled lines of code to form a working snippet.', icon: Puzzle, href: '/games/code-jigsaw' },
    { id: '8', title: 'Security Fortress', description: 'Identify and patch security vulnerabilities in a codebase.', icon: Shield, href: '/games/security-fortress' },
];
