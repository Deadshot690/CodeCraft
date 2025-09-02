
export interface DebugChallenge {
  id: string;
  title: string;
  description: string;
  buggyCode: string;
  fixedCode: string;
  language: 'javascript';
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const debugChallenges: DebugChallenge[] = [
  {
    id: 'dc-001',
    title: 'Simple Addition',
    description: 'This function should add two numbers, but it\'s returning a string instead.',
    buggyCode: `function add(a, b) {
  return a + "b";
}`,
    fixedCode: `function add(a, b) {
  return a + b;
}`,
    language: 'javascript',
    difficulty: 'Easy',
  },
  {
    id: 'dc-002',
    title: 'Loop Condition',
    description: 'This loop should print numbers from 0 to 4, but it\'s an infinite loop!',
    buggyCode: `for (let i = 0; i < 5; i--) {
  console.log(i);
}`,
    fixedCode: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`,
    language: 'javascript',
    difficulty: 'Easy',
  },
  {
    id: 'dc-003',
    title: 'Object Property Access',
    description: 'The function should return the name of the user object.',
    buggyCode: `function getUserName(user) {
  return user.namee;
}`,
    fixedCode: `function getUserName(user) {
  return user.name;
}`,
    language: 'javascript',
    difficulty: 'Easy',
  },
  {
    id: 'dc-004',
    title: 'Array Indexing',
    description: 'This function should return the first element of the array.',
    buggyCode: `function getFirstElement(arr) {
  return arr[1];
}`,
    fixedCode: `function getFirstElement(arr) {
  return arr[0];
}`,
    language: 'javascript',
    difficulty: 'Medium',
  },
  {
    id: 'dc-005',
    title: 'Async Await',
    description: 'This async function is not correctly waiting for the promise to resolve.',
    buggyCode: `async function fetchData() {
  const data = fetch('https://api.example.com/data');
  return data.json();
}`,
    fixedCode: `async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  return response.json();
}`,
    language: 'javascript',
    difficulty: 'Medium',
  },
   {
    id: 'dc-006',
    title: 'Variable Scope',
    description: 'The variable `message` is not accessible where it is being returned.',
    buggyCode: `function getMessage() {
  if (true) {
    var message = "Hello, World!";
  }
  return message;
}`,
    fixedCode: `function getMessage() {
  let message;
  if (true) {
    message = "Hello, World!";
  }
  return message;
}`,
    language: 'javascript',
    difficulty: 'Medium',
  },
  {
    id: 'dc-007',
    title: 'Array `map` Usage',
    description: 'The goal is to return a new array with each number doubled, but it\'s returning `undefined`s.',
    buggyCode: `function doubleNumbers(numbers) {
  numbers.map(num => {
    return num * 2;
  });
}`,
    fixedCode: `function doubleNumbers(numbers) {
  return numbers.map(num => {
    return num * 2;
  });
}`,
    language: 'javascript',
    difficulty: 'Hard',
  },
  {
    id: 'dc-008',
    title: 'Deep Clone Object',
    description: 'This function is supposed to deep clone an object, but it\'s creating a shallow copy.',
    buggyCode: `function clone(obj) {
  return Object.assign({}, obj);
}`,
    fixedCode: `function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}`,
    language: 'javascript',
    difficulty: 'Hard',
  },
  {
    id: 'dc-009',
    title: 'Event Listener Removal',
    description: 'The event listener is not being removed because the function references are different.',
    buggyCode: `const button = document.getElementById('my-btn');
button.addEventListener('click', () => console.log('Clicked!'));

// Later...
button.removeEventListener('click', () => console.log('Clicked!'));
`,
    fixedCode: `const button = document.getElementById('my-btn');
const handleClick = () => console.log('Clicked!');
button.addEventListener('click', handleClick);

// Later...
button.removeEventListener('click', handleClick);
`,
    language: 'javascript',
    difficulty: 'Hard',
  },
];

export function getRandomDebugChallenge(difficulty: 'Easy' | 'Medium' | 'Hard'): DebugChallenge {
  const filtered = debugChallenges.filter(c => c.difficulty === difficulty);
  return filtered[Math.floor(Math.random() * filtered.length)];
}
