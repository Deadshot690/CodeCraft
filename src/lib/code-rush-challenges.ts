
export interface CodeRushChallenge {
  srNo: number;
  id: string;
  title: string;
  description: string;
  language: 'javascript' | 'python' | 'java' | 'cpp';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  snippet: string; // e.g., "for (let i = 0; i < ___; i++)"
  answer: string; // e.g., "5"
}

export const codeRushChallenges: CodeRushChallenge[] = [
  // JavaScript Easy
  {
    srNo: 1,
    id: 'cr-js-easy-01',
    title: 'Variable Declaration',
    description: 'Declare a variable named "count".',
    language: 'javascript',
    difficulty: 'Easy',
    snippet: '___ count = 10;',
    answer: 'let',
  },
  {
    srNo: 2,
    id: 'cr-js-easy-02',
    title: 'If Statement',
    description: 'Complete the if statement condition.',
    language: 'javascript',
    difficulty: 'Easy',
    snippet: 'if (x ___ 5)',
    answer: '>',
  },
  {
    srNo: 3,
    id: 'cr-js-easy-03',
    title: 'Function Keyword',
    description: 'Define a function named "myFunction".',
    language: 'javascript',
    difficulty: 'Easy',
    snippet: '___ myFunction() { }',
    answer: 'function',
  },

  // JavaScript Medium
  {
    srNo: 4,
    id: 'cr-js-medium-01',
    title: 'For...of Loop',
    description: 'Iterate over an array.',
    language: 'javascript',
    difficulty: 'Medium',
    snippet: 'for (const item ___ myArray) { }',
    answer: 'of',
  },
  {
    srNo: 5,
    id: 'cr-js-medium-02',
    title: 'Arrow Function',
    description: 'Define a simple arrow function.',
    language: 'javascript',
    difficulty: 'Medium',
    snippet: 'const add = (a, b) ___ a + b;',
    answer: '=>',
  },

  // JavaScript Hard
  {
    srNo: 6,
    id: 'cr-js-hard-01',
    title: 'Async/Await',
    description: 'Wait for a promise to resolve.',
    language: 'javascript',
    difficulty: 'Hard',
    snippet: 'const data = ___ response.json();',
    answer: 'await',
  },

  // Python Easy
  {
    srNo: 7,
    id: 'cr-py-easy-01',
    title: 'Function Definition',
    description: 'Define a function in Python.',
    language: 'python',
    difficulty: 'Easy',
    snippet: '___ my_func():',
    answer: 'def',
  },
  {
    srNo: 8,
    id: 'cr-py-easy-02',
    title: 'For Loop Range',
    description: 'Loop from 0 to 9.',
    language: 'python',
    difficulty: 'Easy',
    snippet: 'for i in ___(10):',
    answer: 'range',
  },

  // Python Medium
  {
    srNo: 9,
    id: 'cr-py-medium-01',
    title: 'Import Module',
    description: 'Import the math module.',
    language: 'python',
    difficulty: 'Medium',
    snippet: '___ math',
    answer: 'import',
  },
  {
    srNo: 10,
    id: 'cr-py-medium-02',
    title: 'List Append',
    description: 'Add an item to a list.',
    language: 'python',
    difficulty: 'Medium',
    snippet: 'my_list.___(4)',
    answer: 'append',
  },

  // Python Hard
  {
    srNo: 11,
    id: 'cr-py-hard-01',
    title: 'List Comprehension',
    description: 'Complete the list comprehension.',
    language: 'python',
    difficulty: 'Hard',
    snippet: '[x*x ___ x in range(5)]',
    answer: 'for',
  },
    
  // Java Easy
  {
    srNo: 12,
    id: 'cr-java-easy-01',
    title: 'Main Method',
    description: 'Define the main method entry point.',
    language: 'java',
    difficulty: 'Easy',
    snippet: 'public ___ void main(String[] args)',
    answer: 'static',
  },
  {
    srNo: 13,
    id: 'cr-java-easy-02',
    title: 'New Instance',
    description: 'Create a new object instance.',
    language: 'java',
    difficulty: 'Easy',
    snippet: 'String myString = ___ String();',
    answer: 'new',
  },

  // C++ Easy
  {
    srNo: 14,
    id: 'cr-cpp-easy-01',
    title: 'Include Directive',
    description: 'Include the iostream library.',
    language: 'cpp',
    difficulty: 'Easy',
    snippet: '___ <iostream>',
    answer: '#include',
  },
  {
    srNo: 15,
    id: 'cr-cpp-easy-02',
    title: 'Standard Output',
    description: 'Print to the console.',
    language: 'cpp',
    difficulty: 'Easy',
    snippet: 'std::___ << "Hello";',
    answer: 'cout',
  },
];

export function getCodeRushChallengeById(id: string): CodeRushChallenge | undefined {
  return codeRushChallenges.find((c) => c.id === id);
}

export function getNextCodeRushChallengeId(currentId: string): string | null {
    const currentIndex = codeRushChallenges.findIndex(c => c.id === currentId);
    if (currentIndex === -1 || currentIndex >= codeRushChallenges.length - 1) {
        return null;
    }
    return codeRushChallenges[currentIndex + 1].id;
}
