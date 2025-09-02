
import { Challenge, TestCase } from './challenges';

type BattleChallenge = {
    title: string;
    description: string;
    testCases: TestCase[];
}

type BattleChallengeWrapper = {
    challenge: BattleChallenge;
    monster: {
        name: string;
        image: string;
        maxHealth: number;
    }
}

const battleChallenges: BattleChallenge[] = [
    {
      title: 'FizzBuzz Basics',
      description: 'If a number is divisible by both 3 and 5, what is the FizzBuzz output?',
      testCases: [ { input: {}, expectedOutput: "FizzBuzz" } ],
    },
    {
      title: 'String Reversal',
      description: 'What is the reverse of the string "coder"?',
      testCases: [ { input: {}, expectedOutput: "redoc" } ],
    },
    {
      title: 'Simple Sum',
      description: 'What is the sum of 2, 7, and 11?',
      testCases: [ { input: {}, expectedOutput: 20 } ],
    },
    {
      title: 'Modulo Master',
      description: 'What is the result of the expression `10 % 3`?',
      testCases: [ { input: {}, expectedOutput: 1 } ],
    },
    {
      title: 'Constant Question',
      description: 'What keyword is used to declare a constant variable in JavaScript that cannot be reassigned?',
      testCases: [ { input: {}, expectedOutput: 'const' } ],
    },
    {
      title: 'Exponent Challenge',
      description: 'What is the result of the expression `2 ** 4` in Python (2 to the power of 4)?',
      testCases: [ { input: {}, expectedOutput: 16 } ],
    },
    {
      title: 'Boolean Logic',
      description: 'What does the expression `true && false` evaluate to?',
      testCases: [ { input: {}, expectedOutput: false } ],
    },
    {
      title: 'Array Length',
      description: 'What is the length of the array `[10, 20, 30]`?',
      testCases: [ { input: {}, expectedOutput: 3 } ],
    },
    {
      title: 'Data Type',
      description: 'What is the data type of the value `"Hello"` in most programming languages?',
      testCases: [ { input: {}, expectedOutput: "string" } ],
    },
    {
      title: 'Null vs Undefined',
      description: 'In JavaScript, what is the result of `null == undefined`?',
      testCases: [ { input: {}, expectedOutput: true } ],
    },
    {
      title: 'JSON Key',
      description: 'In a JSON object `{"name": "Alpha"}`, what is the key for the value "Alpha"?',
      testCases: [ { input: {}, expectedOutput: "name" } ],
    },
    {
      title: 'Git Commit',
      description: 'What is the git command to save your staged changes to the local repository?',
      testCases: [ { input: {}, expectedOutput: "git commit" } ],
    },
    {
      title: 'HTML Tag',
      description: 'What HTML tag is used to create a hyperlink?',
      testCases: [ { input: {}, expectedOutput: "a" } ],
    }
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
      {
        name: 'Boolean Beast',
        image: 'https://picsum.photos/seed/boolean/400/400',
        maxHealth: 80,
      },
      {
        name: 'Array Ogre',
        image: 'https://picsum.photos/seed/array/400/400',
        maxHealth: 130,
      },
      {
        name: 'Type Terror',
        image: 'https://picsum.photos/seed/type/400/400',
        maxHealth: 100,
      },
      {
        name: 'Null-ogre',
        image: 'https://picsum.photos/seed/null/400/400',
        maxHealth: 95,
      },
      {
        name: 'JSON Juggernaut',
        image: 'https://picsum.photos/seed/json/400/400',
        maxHealth: 140,
      },
      {
        name: 'Git Gremlin',
        image: 'https://picsum.photos/seed/git/400/400',
        maxHealth: 115,
      },
      {
        name: 'HTML Horror',
        image: 'https://picsum.photos/seed/html/400/400',
        maxHealth: 105,
      }
];

export function getBattleChallenge(index: number): BattleChallengeWrapper {
    const challengeIndex = index % battleChallenges.length;
    const monsterIndex = index % monsters.length;

    return {
        challenge: battleChallenges[challengeIndex],
        monster: monsters[monsterIndex]
    }
}
