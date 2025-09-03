
export interface ConceptMatchChallenge {
  id: string;
  concept: string;
  description: string;
  language: 'javascript' | 'python' | 'java' | 'cpp';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  options: string[]; // Array of code snippets
  correctAnswer: string; // The correct code snippet
  explanation: string;
}

export const conceptMatchChallenges: ConceptMatchChallenge[] = [
  // JavaScript - Easy
  {
    id: 'cm-js-easy-01',
    concept: 'Variable Declaration',
    description: 'Which snippet correctly declares a variable that can be reassigned?',
    language: 'javascript',
    difficulty: 'Easy',
    options: [
      'const name = "Alice";',
      'let score = 100;',
      'variable user = "Bob";',
      'static String title = "Page";',
    ],
    correctAnswer: 'let score = 100;',
    explanation: 'In modern JavaScript, `let` is used to declare variables that can be reassigned. `const` is for variables that cannot be reassigned.',
  },
  {
    id: 'cm-js-easy-02',
    concept: 'Arrow Function',
    description: 'Which snippet shows the correct syntax for a simple arrow function?',
    language: 'javascript',
    difficulty: 'Easy',
    options: [
      'function add(a, b) => a + b;',
      'const add = (a, b) => a + b;',
      'const add = function(a, b) => a + b;',
      'def add = (a, b) => a + b;',
    ],
    correctAnswer: 'const add = (a, b) => a + b;',
    explanation: 'Arrow function syntax uses `=>` to separate the parameters from the function body. For a single return expression, curly braces are not needed.',
  },
  {
    id: 'cm-js-easy-03',
    concept: 'Strict Equality',
    description: 'Which snippet correctly checks if two values are equal in both value and type?',
    language: 'javascript',
    difficulty: 'Easy',
    options: [
      'if (a == b)',
      'if (a === b)',
      'if (a = b)',
      'if (a equals b)',
    ],
    correctAnswer: 'if (a === b)',
    explanation: 'The strict equality operator `===` checks for equality without performing type coercion, meaning both the value and the type must be the same.',
  },
  {
    id: 'cm-js-easy-04',
    concept: 'Array `push` Method',
    description: 'Which snippet correctly adds an element to the end of an array?',
    language: 'javascript',
    difficulty: 'Easy',
    options: [
      'myArray.add("new_item");',
      'myArray.append("new_item");',
      'myArray.push("new_item");',
      'myArray[myArray.length] = "new_item";',
    ],
    correctAnswer: 'myArray.push("new_item");',
    explanation: 'The `push()` method is the standard way to add one or more elements to the end of an array in JavaScript.',
  },

  // Python - Easy
  {
    id: 'cm-py-easy-01',
    concept: 'F-String Formatting',
    description: 'Which snippet correctly formats a string using an f-string?',
    language: 'python',
    difficulty: 'Easy',
    options: [
      'print("Name: {name}")',
      'print(f"Name: {name}")',
      'print("Name: %s" % name)',
      'print("Name: " + name)',
    ],
    correctAnswer: 'print(f"Name: {name}")',
    explanation: 'F-strings (formatted string literals) provide a concise and convenient way to embed Python expressions inside string literals for formatting.',
  },
  {
    id: 'cm-py-easy-02',
    concept: 'List Append',
    description: 'Which snippet correctly adds an element to a list?',
    language: 'python',
    difficulty: 'Easy',
    options: [
      'my_list.add(4)',
      'my_list.push(4)',
      'my_list.insert(4)',
      'my_list.append(4)',
    ],
    correctAnswer: 'my_list.append(4)',
    explanation: 'The `append()` method is used to add a single item to the end of a list in Python.',
  },
  {
    id: 'cm-py-easy-03',
    concept: 'Dictionary Access',
    description: 'Which snippet correctly accesses the value associated with the key "city"?',
    language: 'python',
    difficulty: 'Easy',
    options: [
      'person.get("city")',
      'person["city"]',
      'person.city',
      'person("city")',
    ],
    correctAnswer: 'person["city"]',
    explanation: 'In Python, dictionary values are accessed using square bracket notation with the key inside.',
  },

  // Java - Easy
  {
    id: 'cm-java-easy-01',
    concept: 'String Comparison',
    description: 'Which snippet is the correct way to compare the content of two strings?',
    language: 'java',
    difficulty: 'Easy',
    options: [
      'if (s1 == s2)',
      'if (s1.equals(s2))',
      'if (s1 === s2)',
      'if (compare(s1, s2))',
    ],
    correctAnswer: 'if (s1.equals(s2))',
    explanation: 'In Java, `==` compares object references. The `.equals()` method must be used to compare the actual character content of strings.',
  },
  {
    id: 'cm-java-easy-02',
    concept: 'Array Declaration',
    description: 'Which snippet correctly declares and initializes an array of integers?',
    language: 'java',
    difficulty: 'Easy',
    options: [
      'int numbers = {1, 2, 3};',
      'int[] numbers = [1, 2, 3];',
      'int[] numbers = {1, 2, 3};',
      'Array<int> numbers = {1, 2, 3};',
    ],
    correctAnswer: 'int[] numbers = {1, 2, 3};',
    explanation: 'The correct syntax for declaring and initializing an array in Java uses `type[] name = {values};`.',
  },

  // C++ - Easy
  {
    id: 'cm-cpp-easy-01',
    concept: 'Include Directive',
    description: 'Which snippet correctly includes the library for input and output streams?',
    language: 'cpp',
    difficulty: 'Easy',
    options: [
      'import <iostream>;',
      '#include <iostream>',
      '#import <iostream>',
      'include <iostream>;',
    ],
    correctAnswer: '#include <iostream>',
    explanation: 'In C++, the `#include` preprocessor directive is used to include the contents of a header file in the current source file.',
  },
  {
    id: 'cm-cpp-easy-02',
    concept: 'Pointer Dereference',
    description: 'Which snippet correctly gets the value stored at the memory address held by a pointer?',
    language: 'cpp',
    difficulty: 'Easy',
    options: [
      'value = &ptr;',
      'value = *ptr;',
      'value = ptr.value;',
      'value = ptr->value;',
    ],
    correctAnswer: 'value = *ptr;',
    explanation: 'The dereference operator `*` is used to access the value that a pointer points to.',
  },
];

export function getConceptMatchChallengeById(id: string): ConceptMatchChallenge | undefined {
    return conceptMatchChallenges.find(c => c.id === id);
}
