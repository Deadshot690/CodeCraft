
export interface OutputPredictionChallenge {
  id: string;
  title: string;
  description: string;
  codeSnippet: string;
  language: 'javascript' | 'python';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const outputPredictionChallenges: OutputPredictionChallenge[] = [
  // JavaScript - Easy
  {
    id: 'op-js-easy-01',
    title: 'Variable Scope (var)',
    description: 'What will be logged to the console?',
    codeSnippet: `var x = 10;\nfunction test() {\n  var x = 20;\n}\ntest();\nconsole.log(x);`,
    language: 'javascript',
    difficulty: 'Easy',
    options: ['10', '20', 'undefined', 'ReferenceError'],
    correctAnswer: '10',
    explanation: 'The `var x = 20` inside the function creates a new variable scoped only to that function. It does not affect the global variable `x` which remains 10.',
  },
  {
    id: 'op-js-easy-02',
    title: 'Type Coercion',
    description: 'What is the result of this expression?',
    codeSnippet: `console.log(5 + "5");`,
    language: 'javascript',
    difficulty: 'Easy',
    options: ['10', '"55"', '55', 'TypeError'],
    correctAnswer: '"55"',
    explanation: 'The `+` operator performs string concatenation when one of the operands is a string. The number 5 is coerced into a string "5" and then concatenated.',
  },
  {
    id: 'op-js-easy-03',
    title: 'Hoisting with var',
    description: 'What will be logged to the console?',
    codeSnippet: `console.log(a);\nvar a = 5;`,
    language: 'javascript',
    difficulty: 'Easy',
    options: ['5', '0', 'undefined', 'ReferenceError'],
    correctAnswer: 'undefined',
    explanation: 'Variable declarations using `var` are "hoisted" to the top of their scope, but their assignments are not. The code is interpreted as `var a; console.log(a); a = 5;`, so `a` is `undefined` when logged.',
  },

  // JavaScript - Medium
  {
    id: 'op-js-medium-01',
    title: 'Closure and Loops',
    description: 'What will be logged to the console?',
    codeSnippet: `for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 10);\n}`,
    language: 'javascript',
    difficulty: 'Medium',
    options: ['0, 1, 2', '3, 3, 3', '2, 2, 2', 'undefined, undefined, undefined'],
    correctAnswer: '3, 3, 3',
    explanation: 'Because `var` is function-scoped, by the time the `setTimeout` callbacks execute, the loop has already completed and the value of `i` is 3. All three callbacks reference the same `i`.',
  },
  {
    id: 'op-js-medium-02',
    title: '`this` Keyword',
    description: 'What will the `sayName` method log?',
    codeSnippet: `const person = {\n  name: 'Alice',\n  sayName: function() {\n    const getName = () => console.log(this.name);\n    getName();\n  }\n};\nperson.sayName();`,
    language: 'javascript',
    difficulty: 'Medium',
    options: ['Alice', 'undefined', 'Window', 'Error'],
    correctAnswer: 'Alice',
    explanation: 'Arrow functions do not have their own `this` context; they inherit it from the surrounding lexical scope. In this case, `this` correctly refers to the `person` object.',
  },
  {
    id: 'op-js-medium-03',
    title: 'Promise Microtask Queue',
    description: 'In what order will the values be logged?',
    codeSnippet: `console.log('A');\nsetTimeout(() => console.log('B'), 0);\nPromise.resolve().then(() => console.log('C'));\nconsole.log('D');`,
    language: 'javascript',
    difficulty: 'Medium',
    options: ['A, B, C, D', 'A, D, B, C', 'A, D, C, B', 'A, C, D, B'],
    correctAnswer: 'A, D, C, B',
    explanation: 'Promises are handled as microtasks which have priority over macrotasks like `setTimeout`. So, synchronous code (A, D) runs first, then microtasks (C), then macrotasks (B).',
  },

  // JavaScript - Hard
  {
    id: 'op-js-hard-01',
    title: 'Array Reduce with Initial Value',
    description: 'What will this reduce function return?',
    codeSnippet: `const arr = [{x: 1}, {x: 2}, {x: 3}];\nconst sum = arr.reduce((acc, curr) => acc + curr.x, 0);\nconsole.log(sum);`,
    language: 'javascript',
    difficulty: 'Hard',
    options: ['6', 'Error', '[object Object]23', 'NaN'],
    correctAnswer: '6',
    explanation: 'The `reduce` method iterates through the array. `acc` (the accumulator) starts at the initial value `0`. In each step, `curr.x` is added to `acc`. The final result is 0 + 1 + 2 + 3 = 6.',
  },
  {
    id: 'op-js-hard-02',
    title: 'Prototypal Inheritance',
    description: 'What will be logged to the console?',
    codeSnippet: `function Dog(name) {\n  this.name = name;\n}\nDog.prototype.bark = function() {\n  console.log('Woof!');\n}\nconst myDog = new Dog('Fido');\nconsole.log(myDog.hasOwnProperty('bark'));`,
    language: 'javascript',
    difficulty: 'Hard',
    options: ['true', 'false', 'undefined', 'Error'],
    correctAnswer: 'false',
    explanation: '`hasOwnProperty` checks if a property exists directly on the object itself. The `bark` method exists on the `Dog.prototype`, not directly on the `myDog` instance.',
  },

  // Python - Easy
  {
    id: 'op-py-easy-01',
    title: 'List Mutability',
    description: 'What will be printed?',
    codeSnippet: `a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)`,
    language: 'python',
    difficulty: 'Easy',
    options: ['[1, 2, 3]', '[1, 2, 3, 4]', '[4]', 'None'],
    correctAnswer: '[1, 2, 3, 4]',
    explanation: 'In Python, lists are mutable. When you assign `b = a`, both variables point to the same list in memory. Modifying `b` also modifies `a`.',
  },
  {
    id: 'op-py-easy-02',
    title: 'Integer Division',
    description: 'What is the output of this expression?',
    codeSnippet: `print(10 // 3)`,
    language: 'python',
    difficulty: 'Easy',
    options: ['3.333', '3.0', '3', '4'],
    correctAnswer: '3',
    explanation: 'The `//` operator in Python performs integer (floor) division, which discards the fractional part of the result.',
  },

  // Python - Medium
  {
    id: 'op-py-medium-01',
    title: 'Default Mutable Arguments',
    description: 'What will be the output of the second function call?',
    codeSnippet: `def add_item(item, my_list=[]):\n    my_list.append(item)\n    return my_list\n\nadd_item(1)\nprint(add_item(2))`,
    language: 'python',
    difficulty: 'Medium',
    options: ['[2]', '[1, 2]', '[1]', 'Error'],
    correctAnswer: '[1, 2]',
    explanation: 'Default arguments are evaluated only once when the function is defined. Because a list is mutable, the same list is reused across calls. The first call adds 1, and the second call adds 2 to that same list.',
  },
  {
    id: 'op-py-medium-02',
    title: 'List Slicing',
    description: 'What will be printed?',
    codeSnippet: `my_list = [0, 1, 2, 3, 4, 5]\nprint(my_list[1:4:2])`,
    language: 'python',
    difficulty: 'Medium',
    options: ['[1, 2, 3]', '[1, 3]', '[1, 4]', '[0, 2, 4]'],
    correctAnswer: '[1, 3]',
    explanation: 'The slice `[start:stop:step]` extracts elements starting at index 1, up to (but not including) index 4, with a step of 2. This results in elements at index 1 and 3.',
  },

  // Python - Hard
  {
    id: 'op-py-hard-01',
    title: 'Late Binding Closures',
    description: 'What will be printed when the functions are called?',
    codeSnippet: `funcs = [lambda: print(i) for i in range(3)]\nfor f in funcs:\n    f()`,
    language: 'python',
    difficulty: 'Hard',
    options: ['0, 1, 2', '2, 2, 2', '0, 0, 0', 'Error'],
    correctAnswer: '2, 2, 2',
    explanation: 'In Python closures, variables are bound by name. The value of `i` is looked up when the lambda functions are actually called. By that time, the loop has completed and `i` has a final value of 2.',
  },
];

export function getOutputPredictionChallengeById(id: string): OutputPredictionChallenge | undefined {
    return outputPredictionChallenges.find(c => c.id === id);
}
