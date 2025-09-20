
export interface DebugTowerChallenge {
  srNo: number;
  id: string;
  title: string;
  description: string;
  language: 'javascript' | 'python';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tower: {
    line: string; // The buggy line of code
    isBuggy: boolean;
    fix: string | null; // The correct code that replaces the buggy line
  }[];
}

export const debugTowerChallenges: DebugTowerChallenge[] = [
  {
    srNo: 1,
    id: 'dt-js-easy-01',
    title: 'Missing Semicolon',
    description: 'A classic syntax error. Find the missing semicolon to stabilize the tower.',
    language: 'javascript',
    difficulty: 'Easy',
    tower: [
      { line: 'function greet() {', isBuggy: false, fix: null },
      { line: '  const message = "Hello"', isBuggy: true, fix: 'const message = "Hello";' },
      { line: '  return message', isBuggy: true, fix: 'return message;' },
      { line: '}', isBuggy: false, fix: null },
    ],
  },
  {
    srNo: 2,
    id: 'dt-js-easy-02',
    title: 'Incorrect Variable Name',
    description: 'A variable was misspelled. Find the typo and correct it.',
    language: 'javascript',
    difficulty: 'Easy',
    tower: [
      { line: 'let count = 10;', isBuggy: false, fix: null },
      { line: 'cont = count + 5;', isBuggy: true, fix: 'count = count + 5;' },
      { line: 'console.log(count);', isBuggy: false, fix: null },
    ],
  },
];

export function getDebugTowerChallengeById(id: string): DebugTowerChallenge | undefined {
    return debugTowerChallenges.find(c => c.id === id);
}
