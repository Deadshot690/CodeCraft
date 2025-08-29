
import { Challenge } from './challenges';

type BattleChallengeWrapper = {
    challenge: Challenge;
    monster: {
        name: string;
        image: string;
        maxHealth: number;
    }
}

const battleChallenges: Omit<Challenge, 'domain' | 'tags'>[] = [
    {
      id: 'battle-fizzbuzz',
      title: 'FizzBuzz Basics',
      description: 'Return "FizzBuzz" if a number is divisible by both 3 and 5, "Fizz" if by 3, "Buzz" if by 5, or the number otherwise. Solve for 15.',
      difficulty: 'Easy',
      languages: ['javascript', 'python'],
      templates: {
        javascript: `function solve(n) {\n  // if n is 15, what is the fizzbuzz output?\n  return "";\n};`,
        python: `def solve(n):\n  # if n is 15, what is the fizzbuzz output?\n  return ""`,
        cpp: ``,
        java: ``
      },
      testCases: [ { input: {n: 15}, expectedOutput: "FizzBuzz" } ],
    },
    {
      id: 'battle-reverse-string',
      title: 'String Reversal',
      description: 'Reverse the input string "coder".',
      difficulty: 'Easy',
      languages: ['javascript', 'python'],
      templates: {
        javascript: `function solve(s) {\n  // reverse the string s\n  return s.split('').reverse().join('');\n};`,
        python: `def solve(s):\n  # reverse the string s\n  return s[::-1]`,
        cpp: ``,
        java: ``
      },
      testCases: [ { input: { s: 'coder' }, expectedOutput: "redoc" } ],
    },
    {
      id: 'battle-simple-sum',
      title: 'Simple Sum',
      description: 'Return the sum of 2, 7, and 11.',
      difficulty: 'Easy',
      languages: ['javascript', 'python'],
      templates: {
        javascript: `function solve() {\n  // return sum of 2, 7, 11\n  return 0;\n};`,
        python: `def solve():\n  # return sum of 2, 7, 11\n  return 0`,
        cpp: ``,
        java: ``
      },
      testCases: [ { input: {}, expectedOutput: 20 } ],
    },
    {
      id: 'battle-modulo-master',
      title: 'Modulo Master',
      description: 'Return the result of the expression `10 % 3`.',
      difficulty: 'Easy',
      languages: ['javascript', 'python'],
      templates: {
        javascript: `function solve() {\n  // return 10 % 3\n  return 0;\n};`,
        python: `def solve():\n  # return 10 % 3\n  return 0`,
        cpp: ``,
        java: ``
      },
      testCases: [ { input: {}, expectedOutput: 1 } ],
    },
    {
      id: 'battle-constant-question',
      title: 'Constant Question',
      description: 'Return the keyword used to declare a constant variable in JavaScript that cannot be reassigned.',
      difficulty: 'Easy',
      languages: ['javascript', 'python'],
      templates: {
        javascript: `function solve() {\n  // return the keyword as a string\n  return "";\n};`,
        python: `def solve():\n  # return the keyword as a string\n  return ""`,
        cpp: ``,
        java: ``
      },
      testCases: [ { input: {}, expectedOutput: 'const' } ],
    },
    {
      id: 'battle-exponent-challenge',
      title: 'Exponent Challenge',
      description: 'Return the result of the expression `2 ** 4` in Python (2 to the power of 4).',
      difficulty: 'Easy',
      languages: ['javascript', 'python'],
      templates: {
        javascript: `function solve() {\n  // return 2 to the power of 4\n  return 0;\n};`,
        python: `def solve():\n  # return 2 to the power of 4\n  return 0`,
        cpp: ``,
        java: ``
      },
      testCases: [ { input: {}, expectedOutput: 16 } ],
    },
];

const monsters = [
     {
        name: 'Syntax Serpent',
        image: 'https://picsum.photos/seed/serpent/400/400',
        maxHealth: 100,
      },
      {
        name: 'Goblin Coder',
        image: 'https://picsum.photos/seed/goblin/400/400',
        maxHealth: 120,
      },
      {
        name: 'Logic Labyrinth',
        image: 'https://picsum.photos/seed/labyrinth/400/400',
        maxHealth: 150,
      },
      {
        name: 'Remainder Golem',
        image: 'https://picsum.photos/seed/golem/400/400',
        maxHealth: 90,
      },
      {
        name: 'Immutable Hydra',
        image: 'https://picsum.photos/seed/hydra/400/400',
        maxHealth: 110,
      },
       {
        name: 'Exponent Elemental',
        image: 'https://picsum.photos/seed/elemental/400/400',
        maxHealth: 160,
      },
];

export function getBattleChallenge(index: number): BattleChallengeWrapper {
    const challengeIndex = index % battleChallenges.length;
    const monsterIndex = index % monsters.length;

    const challenge = {
        ...battleChallenges[challengeIndex],
        domain: 'AI' as const, //dummy value
        tags: []
    }

    return {
        challenge,
        monster: monsters[monsterIndex]
    }
}
