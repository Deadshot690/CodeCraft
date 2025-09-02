
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
  // Easy
  {
    id: 'dc-easy-001',
    title: 'Simple Addition',
    description: 'This function should add two numbers, but it\'s returning a string instead.',
    buggyCode: `function add(a, b) {\n  return a + "b";\n}`,
    fixedCode: `function add(a, b) {\n  return a + b;\n}`,
    language: 'javascript',
    difficulty: 'Easy',
  },
  {
    id: 'dc-easy-002',
    title: 'Loop Condition',
    description: 'This loop should print numbers from 0 to 4, but it\'s an infinite loop!',
    buggyCode: `for (let i = 0; i < 5; i--) {\n  console.log(i);\n}`,
    fixedCode: `for (let i = 0; i < 5; i++) {\n  console.log(i);\n}`,
    language: 'javascript',
    difficulty: 'Easy',
  },
  {
    id: 'dc-easy-003',
    title: 'Object Property Access',
    description: 'The function should return the name of the user object.',
    buggyCode: `function getUserName(user) {\n  return user.namee;\n}`,
    fixedCode: `function getUserName(user) {\n  return user.name;\n}`,
    language: 'javascript',
    difficulty: 'Easy',
  },
  {
    id: 'dc-easy-004',
    title: 'Equality Check',
    description: 'This should check for value equality, but it\'s using the assignment operator.',
    buggyCode: `function isEqual(a, b) {\n  return a = b;\n}`,
    fixedCode: `function isEqual(a, b) {\n  return a == b;\n}`,
    language: 'javascript',
    difficulty: 'Easy',
  },
  {
    id: 'dc-easy-005',
    title: 'Function Call',
    description: 'This function is defined but never called.',
    buggyCode: `function showMessage() {\n  console.log("Hello!");\n}\n\n// The message should be logged.`,
    fixedCode: `function showMessage() {\n  console.log("Hello!");\n}\n\nshowMessage();`,
    language: 'javascript',
    difficulty: 'Easy',
  },

  // Medium
  {
    id: 'dc-medium-001',
    title: 'Array Indexing',
    description: 'This function should return the first element of the array.',
    buggyCode: `function getFirstElement(arr) {\n  return arr[1];\n}`,
    fixedCode: `function getFirstElement(arr) {\n  return arr[0];\n}`,
    language: 'javascript',
    difficulty: 'Medium',
  },
  {
    id: 'dc-medium-002',
    title: 'Async Await',
    description: 'This async function is not correctly waiting for the promise to resolve.',
    buggyCode: `async function fetchData() {\n  const data = fetch('https://api.example.com/data');\n  return data.json();\n}`,
    fixedCode: `async function fetchData() {\n  const response = await fetch('https://api.example.com/data');\n  return response.json();\n}`,
    language: 'javascript',
    difficulty: 'Medium',
  },
   {
    id: 'dc-medium-003',
    title: 'Variable Scope (let vs var)',
    description: 'The variable `message` is not accessible where it is being returned due to block scoping.',
    buggyCode: `function getMessage() {\n  if (true) {\n    let message = "Hello, World!";\n  }\n  return message;\n}`,
    fixedCode: `function getMessage() {\n  let message;\n  if (true) {\n    message = "Hello, World!";\n  }\n  return message;\n}`,
    language: 'javascript',
    difficulty: 'Medium',
  },
  {
    id: 'dc-medium-004',
    title: 'Missing return in filter',
    description: 'This code should filter out all numbers less than 10.',
    buggyCode: `const numbers = [5, 12, 8, 130, 44];\nconst filtered = numbers.filter(number => {\n  number > 10;\n});`,
    fixedCode: `const numbers = [5, 12, 8, 130, 44];\nconst filtered = numbers.filter(number => {\n  return number > 10;\n});`,
    language: 'javascript',
    difficulty: 'Medium',
  },
  {
    id: 'dc-medium-005',
    title: 'Incorrect String Concatenation',
    description: 'The function should return a greeting like "Hello, Alice".',
    buggyCode: `function greet(name) {\n  return "Hello, " + name;\n}`,
    fixedCode: `function greet(name) {\n  return \`Hello, \${name}\`;\n}`,
    language: 'javascript',
    difficulty: 'Medium',
  },
  {
    id: 'dc-medium-006',
    title: 'Modifying Array During Loop',
    description: 'Removing items from an array while looping over it can cause items to be skipped.',
    buggyCode: `let numbers = [1, 2, 3, 4, 5, 6];\nfor (let i = 0; i < numbers.length; i++) {\n  if (numbers[i] % 2 === 0) {\n    numbers.splice(i, 1);\n  }\n}`,
    fixedCode: `let numbers = [1, 2, 3, 4, 5, 6];\nlet i = numbers.length;\nwhile (i--) {\n  if (numbers[i] % 2 === 0) {\n    numbers.splice(i, 1);\n  }\n}`,
    language: 'javascript',
    difficulty: 'Medium',
  },

  // Hard
  {
    id: 'dc-hard-001',
    title: 'Array `map` Usage',
    description: 'The goal is to return a new array with each number doubled, but it\'s not returning anything.',
    buggyCode: `function doubleNumbers(numbers) {\n  numbers.map(num => {\n    return num * 2;\n  });\n}`,
    fixedCode: `function doubleNumbers(numbers) {\n  return numbers.map(num => {\n    return num * 2;\n  });\n}`,
    language: 'javascript',
    difficulty: 'Hard',
  },
  {
    id: 'dc-hard-002',
    title: 'Shallow Copy Object',
    description: 'This function is supposed to deep clone an object, but modifying the nested object in the clone also modifies the original.',
    buggyCode: `function clone(obj) {\n  return Object.assign({}, obj);\n}`,
    fixedCode: `function clone(obj) {\n  return JSON.parse(JSON.stringify(obj));\n}`,
    language: 'javascript',
    difficulty: 'Hard',
  },
  {
    id: 'dc-hard-003',
    title: 'Event Listener Removal',
    description: 'The event listener is not being removed because the function references are different anonymous functions.',
    buggyCode: `const button = document.getElementById('my-btn');\nbutton.addEventListener('click', () => console.log('Clicked!'));\n\n// Later...\nbutton.removeEventListener('click', () => console.log('Clicked!'));`,
    fixedCode: `const button = document.getElementById('my-btn');\nconst handleClick = () => console.log('Clicked!');\nbutton.addEventListener('click', handleClick);\n\n// Later...\nbutton.removeEventListener('click', handleClick);`,
    language: 'javascript',
    difficulty: 'Hard',
  },
  {
    id: 'dc-hard-004',
    title: 'Promise Hell',
    description: 'This is a classic "callback hell" that should be rewritten with async/await for better readability.',
    buggyCode: `function getData() {\n  fetch('/api/a').then(resA => {\n    fetch('/api/b').then(resB => {\n      console.log(resA, resB);\n    });\n  });\n}`,
    fixedCode: `async function getData() {\n  const resA = await fetch('/api/a');\n  const resB = await fetch('/api/b');\n  console.log(resA, resB);\n}`,
    language: 'javascript',
    difficulty: 'Hard',
  },
  {
    id: 'dc-hard-005',
    title: 'The `this` keyword context',
    description: 'The `this` inside the `setTimeout` refers to the global object (window), not the `user` object.',
    buggyCode: `const user = {\n  name: 'Alice',\n  greet: function() {\n    setTimeout(function() {\n      console.log('Hello, ' + this.name);\n    }, 1000);\n  }\n};`,
    fixedCode: `const user = {\n  name: 'Alice',\n  greet: function() {\n    setTimeout(() => {\n      console.log('Hello, ' + this.name);\n    }, 1000);\n  }\n};`,
    language: 'javascript',
    difficulty: 'Hard',
  },
   {
    id: 'dc-hard-006',
    title: 'Floating Point Precision',
    description: 'This calculation results in a floating point precision error. The result should be exactly 0.3.',
    buggyCode: `function calculate() {\n  return 0.1 + 0.2;\n}`,
    fixedCode: `function calculate() {\n  return parseFloat((0.1 + 0.2).toPrecision(12));\n}`,
    language: 'javascript',
    difficulty: 'Hard',
  },
];

export function getRandomDebugChallenge(difficulty: 'Easy' | 'Medium' | 'Hard'): DebugChallenge {
  const filtered = debugChallenges.filter(c => c.difficulty === difficulty);
  return filtered[Math.floor(Math.random() * filtered.length)];
}
