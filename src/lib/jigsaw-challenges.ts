
export interface JigsawChallenge {
  id: string;
  title: string;
  description: string;
  language: 'javascript' | 'python';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  correctOrder: string[];
}

export const jigsawChallenges: JigsawChallenge[] = [
  // JavaScript - Easy
  {
    id: 'jg-js-easy-01',
    title: 'Simple Greeting',
    description: 'Create a function that returns a greeting string.',
    language: 'javascript',
    difficulty: 'Easy',
    correctOrder: [
      'function greet() {',
      '  return "Hello, World!";',
      '}',
    ],
  },
  {
    id: 'jg-js-easy-02',
    title: 'Variable Declaration',
    description: 'Declare two variables and add them.',
    language: 'javascript',
    difficulty: 'Easy',
    correctOrder: [
      'let a = 5;',
      'let b = 10;',
      'let sum = a + b;',
    ],
  },

  // Python - Easy
  {
    id: 'jg-py-easy-01',
    title: 'Simple Function',
    description: 'Define a function that returns the sum of two numbers.',
    language: 'python',
    difficulty: 'Easy',
    correctOrder: [
      'def add(a, b):',
      '    return a + b',
    ],
  },
  {
    id: 'jg-py-easy-02',
    title: 'Basic For Loop',
    description: 'Print numbers from 0 to 4.',
    language: 'python',
    difficulty: 'Easy',
    correctOrder: [
      'for i in range(5):',
      '    print(i)',
    ],
  },
];

export function getJigsawChallengeById(id: string): JigsawChallenge | undefined {
    return jigsawChallenges.find(c => c.id === id);
}
