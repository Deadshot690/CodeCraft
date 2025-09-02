
export interface BattleChallenge {
  id: string;
  question: string;
  code?: string;
  answer: string;
  domain: 'DSA' | 'Web' | 'AI' | 'General' | 'Security';
}

export interface BattleMonster {
  name: string;
  hp: number;
  attack: number;
  description: string;
  imageUrl: string;
  challenge: BattleChallenge;
  taunts: string[];
}

export const challenges: BattleChallenge[] = [
  {
    id: 'js-const',
    question: 'In JavaScript, which keyword is used to declare a variable that cannot be reassigned?',
    answer: 'const',
    domain: 'Web',
  },
  {
    id: 'py-print',
    question: 'In Python, what function is used to display output to the console?',
    answer: 'print()',
    domain: 'General',
  },
  {
    id: 'html-link',
    question: 'In HTML, which tag is used to create a hyperlink?',
    code: `<a>`,
    answer: 'a',
    domain: 'Web',
  },
  {
    id: 'css-color',
    question: 'In CSS, which property is used to change the text color of an element?',
    answer: 'color',
    domain: 'Web',
  },
  {
    id: 'git-commit',
    question: 'What is the git command to save your changes to the local repository?',
    answer: 'git commit',
    domain: 'General',
  },
  {
    id: 'json-key',
    question: 'In the JSON object `{"name": "Alpha"}`, what is the key for the value "Alpha"?',
    answer: 'name',
    domain: 'General',
  },
  {
    id: 'js-array-length',
    question: 'What is the output of the following JavaScript code?',
    code: 'console.log([10, 20, 30].length)',
    answer: '3',
    domain: 'Web',
  },
  {
    id: 'py-modulo',
    question: 'What is the result of the expression `10 % 3` in Python?',
    answer: '1',
    domain: 'General',
  },
  {
    id: 'js-strict-equality',
    question: 'Which operator checks for both value and type equality in JavaScript?',
    answer: '===',
    domain: 'Web',
  },
   {
    id: 'sql-select',
    question: 'In SQL, what is the keyword to query data from a database?',
    answer: 'SELECT',
    domain: 'General',
  },
  {
    id: 'js-null-undefined',
    question: 'In JavaScript, what is the result of `null == undefined`?',
    answer: 'true',
    domain: 'Web',
  },
  {
    id: 'py-list-append',
    question: 'In Python, which method adds an element to the end of a list?',
    answer: 'append()',
    domain: 'General'
  },
  {
    id: 'http-get',
    question: 'Which HTTP method is typically used for retrieving data from a server?',
    answer: 'GET',
    domain: 'Web'
  },
  {
    id: 'bitwise-and',
    question: 'What is the result of the bitwise operation `5 & 1`?',
    code: '// 5 is 101 in binary, 1 is 001',
    answer: '1',
    domain: 'General',
  },
  {
    id: 'css-flexbox',
    question: 'In CSS Flexbox, which property is used to align items along the main axis?',
    answer: 'justify-content',
    domain: 'Web'
  },
  {
    id: 'sql-injection',
    question: 'What type of security vulnerability involves inserting malicious SQL code into a query?',
    answer: 'SQL Injection',
    domain: 'Security'
  }
];

export const monsters: Omit<BattleMonster, 'challenge'>[] = [
    {
        name: 'Syntax Slime',
        hp: 50,
        attack: 10,
        description: 'A gooey creature made of misplaced semicolons and brackets.',
        imageUrl: 'https://picsum.photos/seed/slime/400/400',
        taunts: ["Gloop... bloop... Your syntax is goop!", "Missing a semicolon? Hehe..."]
    },
    {
        name: 'Compiler Golem',
        hp: 80,
        attack: 15,
        description: 'A formidable beast of stone and stubbornness. It refuses to run until everything is perfect.',
        imageUrl: 'https://picsum.photos/seed/golem/400/400',
        taunts: ["TYPE ERROR.", "Unresolved symbol. You are the unresolved symbol.", "CRUNCH. Build failed."]
    },
    {
        name: 'Runtime Raptor',
        hp: 60,
        attack: 20,
        description: 'A swift and vicious creature that appears out of nowhere to crash your program.',
        imageUrl: 'https://picsum.photos/seed/raptor/400/400',
        taunts: ["SCREEEE! Null Pointer Exception!", "Segmentation Fault! *chomps*"]
    },
    {
        name: 'Logic Hydra',
        hp: 120,
        attack: 12,
        description: 'A multi-headed serpent of flawed logic. Solve one head, and two more appear.',
        imageUrl: 'https://picsum.photos/seed/hydra/400/400',
        taunts: ["Hisss... your logic is flawed...", "An infinite loop... how delicious."]
    }
];

export function getRandomMonster(): BattleMonster {
  const monsterTemplate = monsters[Math.floor(Math.random() * monsters.length)];
  const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];

  return {
    ...monsterTemplate,
    challenge: randomChallenge,
  };
}
