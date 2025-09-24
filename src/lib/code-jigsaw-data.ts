import type { CodeJigsawChallenge } from '@/lib/types';

export const codeJigsawChallenges: CodeJigsawChallenge[] = [
    {
        id: 'cj1',
        title: 'Python: Hello World',
        description: 'A simple "Hello, World!" program in Python.',
        language: 'python',
        difficulty: 'Beginner',
        xp: 10,
        lines: [
            'def hello():',
            '    print("Hello, World!")',
            'hello()'
        ]
    },
    {
        id: 'cj2',
        title: 'JavaScript: Simple Counter',
        description: 'Create a simple counter function.',
        language: 'javascript',
        difficulty: 'Beginner',
        xp: 15,
        lines: [
            'function createCounter() {',
            '  let count = 0;',
            '  return function() {',
            '    count++;',
            '    return count;',
            '  };',
            '}',
            'const counter = createCounter();'
        ]
    },
    {
        id: 'cj3',
        title: 'Java: Factorial Function',
        description: 'Implement a recursive factorial function in Java.',
        language: 'java',
        difficulty: 'Intermediate',
        xp: 30,
        lines: [
            'class Solution {',
            '    public int factorial(int n) {',
            '        if (n <= 1) {',
            '            return 1;',
            '        } else {',
            '            return n * factorial(n - 1);',
            '        }',
            '    }',
            '}'
        ]
    }
];
