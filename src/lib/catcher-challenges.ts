
export interface CatcherChallenge {
  srNo: number;
  id: string;
  title: string;
  description: string;
  language: 'javascript' | 'python';
  goodSnippets: string[];
  badSnippets: string[];
}

export const catcherChallenges: CatcherChallenge[] = [
  {
    srNo: 1,
    id: 'cc-js-01',
    title: 'JavaScript Basics',
    description: 'Catch the valid JavaScript syntax and dodge the bugs!',
    language: 'javascript',
    goodSnippets: [
      'const x = 5;',
      'let name = "Alice";',
      'function greet() {}',
      'if (x > 0) {}',
      'for (let i=0; i<5; i++)',
      '[1, 2, 3].map(n => n*2)',
    ],
    badSnippets: [
      'const x == 5;',
      'let name = Alice;',
      'func greet() {}',
      'if (x > 0) then {}',
      'for (let i=0, i<5, i++)',
      '1, 2, 3.map(n => n*2)',
    ],
  },
    {
    srNo: 2,
    id: 'cc-py-01',
    title: 'Python Basics',
    description: 'Catch the valid Python syntax and dodge the bugs!',
    language: 'python',
    goodSnippets: [
      'name = "Bob"',
      'def my_func():',
      'if x > 10:',
      'for i in range(5):',
      'my_list = [1, 2, 3]',
      'print(f"Hello, {name}")',
    ],
    badSnippets: [
      'name = Bob',
      'def my_func()',
      'if x > 10',
      'for i in range 5',
      'my_list = (1, 2, 3)',
      'print("Hello, {name}")',
    ],
  },
];

export function getCatcherChallengeById(id: string): CatcherChallenge | undefined {
    return catcherChallenges.find(c => c.id === id);
}
