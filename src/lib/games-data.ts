import type { Game } from '@/lib/types';
import { Swords, Bug, Keyboard, Eye, BrainCircuit, Gamepad2, Castle } from 'lucide-react';

export const games: Game[] = [
    { id: '1', title: 'Monster Battle', description: 'Answer coding trivia to defeat monsters in a turn-based RPG.', icon: Swords, href: '/games/monster-battle' },
    { id: '2', title: 'Debug Hunt', description: 'Find and fix bugs in code snippets against the clock.', icon: Bug, href: '/games/debug-hunt' },
    { id: '4', title: 'Code Typer', description: 'Improve your typing speed and accuracy.', icon: Keyboard, href: '/games/code-typer' },
    { id: '5', title: 'Output Prediction', description: 'Test your code comprehension.', icon: Eye, href: '/games/output-prediction' },
    { id: '6', 'title': 'Concept Match', 'description': 'Match code to programming concepts.', 'icon': BrainCircuit, 'href': '/games/concept-match' },
    { id: '7', title: 'Algo Arena', description: 'Competitive programming challenges against other users.', icon: Gamepad2, href: '#' },
    { id: '8', title: 'Security Fortress', description: 'Identify and patch security vulnerabilities in a codebase.', icon: Castle, href: '#' },
];
