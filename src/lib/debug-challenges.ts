
export interface DebugChallenge {
  id: string;
  title: string;
  description: string;
  buggyCode: string;
  fixedCode: string;
  language: 'javascript' | 'python' | 'java' | 'cpp';
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const debugChallenges: DebugChallenge[] = [
  // JavaScript - Easy
  {
    id: 'dc-js-easy-001',
    title: 'Simple Addition (JS)',
    description: 'This function should add two numbers, but it\'s returning a string instead.',
    buggyCode: `function add(a, b) {\n  return a + "b";\n}`,
    fixedCode: `function add(a, b) {\n  return a + b;\n}`,
    language: 'javascript',
    difficulty: 'Easy',
  },
  {
    id: 'dc-js-easy-002',
    title: 'Loop Condition (JS)',
    description: 'This loop should print numbers from 0 to 4, but it\'s an infinite loop!',
    buggyCode: `for (let i = 0; i < 5; i--) {\n  console.log(i);\n}`,
    fixedCode: `for (let i = 0; i < 5; i++) {\n  console.log(i);\n}`,
    language: 'javascript',
    difficulty: 'Easy',
  },
  {
    id: 'dc-js-easy-003',
    title: 'Object Property Access (JS)',
    description: 'The function should return the name of the user object.',
    buggyCode: `function getUserName(user) {\n  return user.namee;\n}`,
    fixedCode: `function getUserName(user) {\n  return user.name;\n}`,
    language: 'javascript',
    difficulty: 'Easy',
  },

  // JavaScript - Medium
  {
    id: 'dc-js-medium-001',
    title: 'Array Indexing (JS)',
    description: 'This function should return the first element of the array.',
    buggyCode: `function getFirstElement(arr) {\n  return arr[1];\n}`,
    fixedCode: `function getFirstElement(arr) {\n  return arr[0];\n}`,
    language: 'javascript',
    difficulty: 'Medium',
  },
  {
    id: 'dc-js-medium-002',
    title: 'Async Await (JS)',
    description: 'This async function is not correctly waiting for the promise to resolve.',
    buggyCode: `async function fetchData() {\n  const data = fetch('https://api.example.com/data');\n  return data.json();\n}`,
    fixedCode: `async function fetchData() {\n  const response = await fetch('https://api.example.com/data');\n  return response.json();\n}`,
    language: 'javascript',
    difficulty: 'Medium',
  },
  
  // JavaScript - Hard
  {
    id: 'dc-js-hard-001',
    title: 'Shallow Copy Object (JS)',
    description: 'This function is supposed to deep clone an object, but modifying the nested object in the clone also modifies the original.',
    buggyCode: `function clone(obj) {\n  return Object.assign({}, obj);\n}`,
    fixedCode: `function clone(obj) {\n  return JSON.parse(JSON.stringify(obj));\n}`,
    language: 'javascript',
    difficulty: 'Hard',
  },
  {
    id: 'dc-js-hard-002',
    title: 'The `this` keyword context (JS)',
    description: 'The `this` inside the `setTimeout` refers to the global object (window), not the `user` object.',
    buggyCode: `const user = {\n  name: 'Alice',\n  greet: function() {\n    setTimeout(function() {\n      console.log('Hello, ' + this.name);\n    }, 1000);\n  }\n};`,
    fixedCode: `const user = {\n  name: 'Alice',\n  greet: function() {\n    setTimeout(() => {\n      console.log('Hello, ' + this.name);\n    }, 1000);\n  }\n};`,
    language: 'javascript',
    difficulty: 'Hard',
  },

  // Python - Easy
  {
    id: 'dc-py-easy-001',
    title: 'Indentation Error (Python)',
    description: 'This function has an indentation error.',
    buggyCode: `def my_function():\n  print("Hello, World!")`,
    fixedCode: `def my_function():\n    print("Hello, World!")`,
    language: 'python',
    difficulty: 'Easy',
  },
  {
    id: 'dc-py-easy-002',
    title: 'String to Int Conversion (Python)',
    description: 'This should add two numbers, but it\'s concatenating strings.',
    buggyCode: `def add_numbers(a, b):\n    return str(a) + str(b)`,
    fixedCode: `def add_numbers(a, b):\n    return a + b`,
    language: 'python',
    difficulty: 'Easy',
  },

  // Python - Medium
  {
    id: 'dc-py-medium-001',
    title: 'List Default Argument (Python)',
    description: 'Using a mutable default argument can lead to unexpected behavior.',
    buggyCode: `def append_to_list(element, to_list=[]):\n    to_list.append(element)\n    return to_list`,
    fixedCode: `def append_to_list(element, to_list=None):\n    if to_list is None:\n        to_list = []\n    to_list.append(element)\n    return to_list`,
    language: 'python',
    difficulty: 'Medium',
  },

  // Python - Hard
  {
    id: 'dc-py-hard-001',
    title: 'Looping over list copy (Python)',
    description: 'Modifying a list while iterating over it can lead to skipping items.',
    buggyCode: `numbers = [1, 2, 3, 4]\nfor number in numbers:\n    if number % 2 == 0:\n        numbers.remove(number)`,
    fixedCode: `numbers = [1, 2, 3, 4]\nfor number in numbers[:]:\n    if number % 2 == 0:\n        numbers.remove(number)`,
    language: 'python',
    difficulty: 'Hard',
  },

  // Java - Easy
  {
    id: 'dc-java-easy-001',
    title: 'Missing Semicolon (Java)',
    description: 'A semicolon is missing at the end of a statement.',
    buggyCode: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello World")\n  }\n}`,
    fixedCode: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello World");\n  }\n}`,
    language: 'java',
    difficulty: 'Easy',
  },
  {
    id: 'dc-java-easy-002',
    title: 'String Comparison (Java)',
    description: 'Strings should be compared using .equals(), not ==.',
    buggyCode: `public boolean checkString(String s1, String s2) {\n    return s1 == s2;\n}`,
    fixedCode: `public boolean checkString(String s1, String s2) {\n    return s1.equals(s2);\n}`,
    language: 'java',
    difficulty: 'Easy',
  },
  
  // Java - Medium
  {
    id: 'dc-java-medium-001',
    title: 'Array Index Out of Bounds (Java)',
    description: 'The loop condition should be `<` instead of `<=`.',
    buggyCode: `public void printArray(int[] arr) {\n    for (int i = 0; i <= arr.length; i++) {\n        System.out.println(arr[i]);\n    }\n}`,
    fixedCode: `public void printArray(int[] arr) {\n    for (int i = 0; i < arr.length; i++) {\n        System.out.println(arr[i]);\n    }\n}`,
    language: 'java',
    difficulty: 'Medium',
  },
  
  // Java - Hard
  {
    id: 'dc-java-hard-001',
    title: 'Concurrent Modification (Java)',
    description: 'You cannot remove items from a list while iterating with an enhanced for-loop.',
    buggyCode: `ArrayList<String> list = new ArrayList<>();\nlist.add("a");\nlist.add("b");\nfor (String s : list) {\n    list.remove(s);\n}`,
    fixedCode: `ArrayList<String> list = new ArrayList<>();\nlist.add("a");\nlist.add("b");\nIterator<String> i = list.iterator();\nwhile (i.hasNext()) {\n   String s = i.next();\n   i.remove();\n}`,
    language: 'java',
    difficulty: 'Hard',
  },
  
  // C++ - Easy
  {
    id: 'dc-cpp-easy-001',
    title: 'Missing Header (C++)',
    description: 'The `iostream` header is required for `std::cout`.',
    buggyCode: `int main() {\n    std::cout << "Hello, World!";\n    return 0;\n}`,
    fixedCode: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!";\n    return 0;\n}`,
    language: 'cpp',
    difficulty: 'Easy',
  },
  {
    id: 'dc-cpp-easy-002',
    title: 'Pointer Null Check (C++)',
    description: 'The pointer should be checked for null before dereferencing.',
    buggyCode: `void printValue(int* p) {\n    std::cout << *p;\n}`,
    fixedCode: `void printValue(int* p) {\n    if (p) {\n        std::cout << *p;\n    }\n}`,
    language: 'cpp',
    difficulty: 'Easy',
  },
  
  // C++ - Medium
  {
    id: 'dc-cpp-medium-001',
    title: 'Buffer Overflow (C++)',
    description: '`strcpy` does not check buffer bounds, leading to a potential overflow.',
    buggyCode: `void copyString(char* str) {\n    char buffer[10];\n    strcpy(buffer, str);\n}`,
    fixedCode: `void copyString(char* str) {\n    char buffer[10];\n    strncpy(buffer, str, sizeof(buffer) - 1);\n    buffer[sizeof(buffer) - 1] = '\\0';\n}`,
    language: 'cpp',
    difficulty: 'Medium',
  },

  // C++ - Hard
  {
    id: 'dc-cpp-hard-001',
    title: 'Memory Leak (C++)',
    description: 'Memory allocated with `new` must be deallocated with `delete`.',
    buggyCode: `void createLeak() {\n    int* p = new int(5);\n    // Missing delete p;\n}`,
    fixedCode: `void createLeak() {\n    int* p = new int(5);\n    delete p;\n}`,
    language: 'cpp',
    difficulty: 'Hard',
  },
];

export function getRandomDebugChallenge(difficulty: 'Easy' | 'Medium' | 'Hard', language: 'javascript' | 'python' | 'java' | 'cpp'): DebugChallenge {
  const filtered = debugChallenges.filter(c => c.difficulty === difficulty && c.language === language);
  if (filtered.length === 0) {
    // Fallback if no challenges match filters
    return debugChallenges[Math.floor(Math.random() * debugChallenges.length)];
  }
  return filtered[Math.floor(Math.random() * filtered.length)];
}
