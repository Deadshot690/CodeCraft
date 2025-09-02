
export interface TyperChallenge {
  id: string;
  title: string;
  snippet: string;
  language: 'javascript' | 'python' | 'html' | 'css';
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const typerChallenges: TyperChallenge[] = [
  // JavaScript - Easy
  {
    id: 'tc-js-easy-01',
    title: 'Function Declaration',
    snippet: `function greet(name) {\n  return "Hello, " + name + "!";\n}`,
    language: 'javascript',
    difficulty: 'Easy',
  },
  {
    id: 'tc-js-easy-02',
    title: 'Simple For Loop',
    snippet: `for (let i = 0; i < 5; i++) {\n  console.log(i);\n}`,
    language: 'javascript',
    difficulty: 'Easy',
  },
  {
    id: 'tc-js-easy-03',
    title: 'Arrow Function',
    snippet: `const add = (a, b) => a + b;`,
    language: 'javascript',
    difficulty: 'Easy',
  },
  
  // Python - Easy
  {
    id: 'tc-py-easy-01',
    title: 'Function Definition',
    snippet: `def greet(name):\n    return f"Hello, {name}!"`,
    language: 'python',
    difficulty: 'Easy',
  },
  {
    id: 'tc-py-easy-02',
    title: 'Simple For Loop',
    snippet: `for i in range(5):\n    print(i)`,
    language: 'python',
    difficulty: 'Easy',
  },

  // HTML - Easy
  {
    id: 'tc-html-easy-01',
    title: 'Basic HTML Structure',
    snippet: `<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Welcome</h1>\n</body>\n</html>`,
    language: 'html',
    difficulty: 'Easy',
  },

  // CSS - Easy
  {
    id: 'tc-css-easy-01',
    title: 'Simple Body Style',
    snippet: `body {\n  font-family: sans-serif;\n  line-height: 1.5;\n  background-color: #f0f0f0;\n}`,
    language: 'css',
    difficulty: 'Easy',
  },

  // JavaScript - Medium
  {
    id: 'tc-js-medium-01',
    title: 'Array Map and Filter',
    snippet: `const numbers = [1, 2, 3, 4, 5, 6];\nconst evensSquared = numbers\n  .filter(n => n % 2 === 0)\n  .map(n => n * n);`,
    language: 'javascript',
    difficulty: 'Medium',
  },
  {
    id: 'tc-js-medium-02',
    title: 'Async/Await Fetch',
    snippet: `async function fetchData(url) {\n  const response = await fetch(url);\n  if (!response.ok) {\n    throw new Error('Network response was not ok');\n  }\n  return await response.json();\n}`,
    language: 'javascript',
    difficulty: 'Medium',
  },

  // Python - Medium
  {
    id: 'tc-py-medium-01',
    title: 'List Comprehension',
    snippet: `numbers = [1, 2, 3, 4, 5, 6]\nevens_squared = [n * n for n in numbers if n % 2 == 0]`,
    language: 'python',
    difficulty: 'Medium',
  },
  {
    id: 'tc-py-medium-02',
    title: 'Dictionary Manipulation',
    snippet: `user = {"name": "Alice", "age": 25}\nuser["age"] = 26\nuser["city"] = "New York"\ndel user["name"]`,
    language: 'python',
    difficulty: 'Medium',
  },

  // JavaScript - Hard
  {
    id: 'tc-js-hard-01',
    title: 'Reducer Function',
    snippet: `const data = [{v: 5}, {v: 10}, {v: 15}];\nconst total = data.reduce((acc, current) => acc + current.v, 0);`,
    language: 'javascript',
    difficulty: 'Hard',
  },

  // Python - Hard
  {
    id: 'tc-py-hard-01',
    title: 'Class Definition',
    snippet: `class Dog:\n    def __init__(self, name, breed):\n        self.name = name\n        self.breed = breed\n\n    def bark(self):\n        return "Woof!"`,
    language: 'python',
    difficulty: 'Hard',
  },

  // CSS - Hard
  {
    id: 'tc-css-hard-01',
    title: 'Keyframe Animation',
    snippet: `@keyframes slidein {\n  from {\n    transform: translateX(-100%);\n  }\n\n  to {\n    transform: translateX(0);\n  }\n}`,
    language: 'css',
    difficulty: 'Hard',
  }
];

export function getTyperChallengeById(id: string): TyperChallenge | undefined {
    return typerChallenges.find(c => c.id === id);
}
