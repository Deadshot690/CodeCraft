
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
    concept: 'Variable Declaration (let)',
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
  {
    id: 'cm-js-easy-05',
    concept: 'Object Property Access',
    description: 'Which snippet correctly accesses the `model` property of the `car` object?',
    language: 'javascript',
    difficulty: 'Easy',
    options: [
      'car.model',
      'car["model"]',
      'car(model)',
      'get(car, "model")',
    ],
    correctAnswer: 'car.model',
    explanation: 'Dot notation (`object.property`) is a common and direct way to access the properties of an object.',
  },

  // JavaScript - Medium
  {
    id: 'cm-js-medium-01',
    concept: 'Array `map` method',
    description: 'Which snippet correctly creates a new array with the doubled values of the original?',
    language: 'javascript',
    difficulty: 'Medium',
    options: [
      'numbers.forEach(num => num * 2);',
      'const doubled = numbers.map(num => num * 2);',
      'for (let num of numbers) { num * 2; }',
      'const doubled = numbers.reduce(num => num * 2);',
    ],
    correctAnswer: 'const doubled = numbers.map(num => num * 2);',
    explanation: 'The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.',
  },
  {
    id: 'cm-js-medium-02',
    concept: 'Destructuring Assignment',
    description: 'Which snippet correctly extracts the `name` and `age` from the person object?',
    language: 'javascript',
    difficulty: 'Medium',
    options: [
      'let { name, age } = person;',
      'let [name, age] = person;',
      'let name = person.name, age = person.age;',
      'let person = {name, age};',
    ],
    correctAnswer: 'let { name, age } = person;',
    explanation: 'Object destructuring provides a concise way to extract properties from objects and bind them to variables.',
  },
  {
    id: 'cm-js-medium-03',
    concept: 'Ternary Operator',
    description: 'Which snippet correctly assigns a value based on a condition?',
    language: 'javascript',
    difficulty: 'Medium',
    options: [
      'let type = if (age >= 18) "adult" else "minor";',
      'let type = age >= 18 ? "adult" : "minor";',
      'let type = age >= 18 ("adult") || ("minor");',
      'let type = age.isAdult() ? "adult" : "minor";',
    ],
    correctAnswer: 'let type = age >= 18 ? "adult" : "minor";',
    explanation: 'The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.',
  },

  // JavaScript - Hard
  {
    id: 'cm-js-hard-01',
    concept: 'Promise',
    description: 'Which snippet correctly creates a promise that resolves after a short delay?',
    language: 'javascript',
    difficulty: 'Hard',
    options: [
      'const promise = new Promise((resolve) => setTimeout(resolve, 100));',
      'const promise = setTimeout(() => Promise.resolve(), 100);',
      'const promise = await setTimeout(100);',
      'const promise = async () => { await 100; };',
    ],
    correctAnswer: 'const promise = new Promise((resolve) => setTimeout(resolve, 100));',
    explanation: 'The `Promise` constructor takes a function (an executor) that is passed `resolve` and `reject` functions. Asynchronous operations like `setTimeout` are placed inside the executor.',
  },
  {
    id: 'cm-js-hard-02',
    concept: 'Closure',
    description: 'Which snippet demonstrates a closure where an inner function has access to the outer function\'s variables?',
    language: 'javascript',
    difficulty: 'Hard',
    options: [
      'function outer() { let a = 1; function inner() { return a; } }',
      'function outer() { let a = 1; } function inner() { return a; }',
      'function outer() { let a = 1; return function inner() { return a; } }',
      'function outer(a) { function inner() { return a; } }',
    ],
    correctAnswer: 'function outer() { let a = 1; return function inner() { return a; } }',
    explanation: 'A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). The inner function "closes over" the variable `a` from the outer function\'s scope.',
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
  {
    id: 'cm-py-easy-04',
    concept: 'Function Definition',
    description: 'Which snippet correctly defines a function named `calculate_sum`?',
    language: 'python',
    difficulty: 'Easy',
    options: [
      'function calculate_sum(a, b):',
      'def calculate_sum(a, b):',
      'method calculate_sum(a, b):',
      'define calculate_sum(a, b):',
    ],
    correctAnswer: 'def calculate_sum(a, b):',
    explanation: 'The `def` keyword is used to define a function in Python, followed by the function name and parentheses for parameters.',
  },

  // Python - Medium
  {
    id: 'cm-py-medium-01',
    concept: 'List Comprehension',
    description: 'Which snippet correctly creates a list of squares for even numbers from 0 to 9?',
    language: 'python',
    difficulty: 'Medium',
    options: [
      '[x**2 for x in range(10) if x % 2 == 0]',
      '{x**2 for x in range(10) if x % 2 == 0}',
      'map(lambda x: x**2, filter(lambda x: x % 2 == 0, range(10)))',
      '[for x in range(10): if x % 2 == 0: x**2]',
    ],
    correctAnswer: '[x**2 for x in range(10) if x % 2 == 0]',
    explanation: 'List comprehensions offer a shorter syntax when you want to create a new list based on the values of an existing list, including conditional logic.',
  },
  {
    id: 'cm-py-medium-02',
    concept: '`with` statement',
    description: 'Which snippet shows the correct and safest way to open and read a file?',
    language: 'python',
    difficulty: 'Medium',
    options: [
      'file = open("a.txt"); file.read(); file.close()',
      'try: file=open("a.txt"); file.read() finally: file.close()',
      'with open("a.txt") as file: file.read()',
      'read(open("a.txt"))',
    ],
    correctAnswer: 'with open("a.txt") as file: file.read()',
    explanation: 'The `with` statement ensures that the file is automatically closed even if errors occur, making it the preferred way to handle file I/O.',
  },

  // Python - Hard
  {
    id: 'cm-py-hard-01',
    concept: 'Decorator',
    description: 'Which snippet correctly defines a simple decorator that wraps another function?',
    language: 'python',
    difficulty: 'Hard',
    options: [
      'def decorator(func): return func()',
      'def decorator(func): def wrapper(): print("Wrapped"); func(); return wrapper',
      '@decorator def my_func(): ...',
      'class Decorator: def __call__(self, func): ...',
    ],
    correctAnswer: 'def decorator(func): def wrapper(): print("Wrapped"); func(); return wrapper',
    explanation: 'A decorator is a function that takes another function as an argument, adds some functionality, and returns another function, all without altering the source code of the original function.',
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
  {
    id: 'cm-java-easy-03',
    concept: 'Main Method Signature',
    description: 'Which is the correct signature for the main method, the entry point of a Java application?',
    language: 'java',
    difficulty: 'Easy',
    options: [
      'public static void main(String[] args)',
      'public void main(String[] args)',
      'static public main(String[] args)',
      'public static main(string[] args)',
    ],
    correctAnswer: 'public static void main(String[] args)',
    explanation: 'The main method must be `public` (accessible everywhere), `static` (callable without an object), `void` (returns nothing), and take an array of strings as an argument.',
  },

  // Java - Medium
  {
    id: 'cm-java-medium-01',
    concept: 'Enhanced For-Loop',
    description: 'Which snippet correctly iterates over an ArrayList of Strings?',
    language: 'java',
    difficulty: 'Medium',
    options: [
      'for (String s : myList)',
      'for (s in myList)',
      'for (s of myList)',
      'foreach (String s in myList)',
    ],
    correctAnswer: 'for (String s : myList)',
    explanation: 'The enhanced for-loop provides a simpler, more readable way to iterate over elements of a collection or array without needing an index counter.',
  },
  {
    id: 'cm-java-medium-02',
    concept: 'Method Overloading',
    description: 'Which snippet correctly demonstrates method overloading?',
    language: 'java',
    difficulty: 'Medium',
    options: [
      'int sum(int a, int b) {}\ndouble sum(int a, int b) {}',
      'int sum(int x, int y) {}\nint sum(int a, int b) {}',
      'int sum(int a, int b) {}\nint sum(int a, int b, int c) {}',
      'int sum(int a, int b) {}\nint calculate(int a, int b) {}',
    ],
    correctAnswer: 'int sum(int a, int b) {}\nint sum(int a, int b, int c) {}',
    explanation: 'Method overloading allows multiple methods with the same name but different parameters (either number of parameters or their types) in the same class.',
  },

  // Java - Hard
  {
    id: 'cm-java-hard-01',
    concept: 'Interface Implementation',
    description: 'Which snippet shows a class correctly implementing an interface?',
    language: 'java',
    difficulty: 'Hard',
    options: [
      'class Car extends Drivable {}',
      'class Car inherits Drivable {}',
      'class Car uses Drivable {}',
      'class Car implements Drivable {}',
    ],
    correctAnswer: 'class Car implements Drivable {}',
    explanation: 'A class uses the `implements` keyword to use an interface. It must then provide an implementation for all the methods defined in that interface.',
  },
  {
    id: 'cm-java-hard-02',
    concept: 'Exception Handling',
    description: 'Which snippet correctly handles a potential file reading error?',
    language: 'java',
    difficulty: 'Hard',
    options: [
      'try { readFile(); } catch (IOException e) { ... }',
      'if (readFile()) { ... } else { ... }',
      'on (error) { ... }',
      'throws IOException { readFile(); }',
    ],
    correctAnswer: 'try { readFile(); } catch (IOException e) { ... }',
    explanation: 'The `try...catch` block is the standard way to handle exceptions in Java. Code that might throw an exception is placed in the `try` block, and the code to handle it is in the `catch` block.',
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
  {
    id: 'cm-cpp-easy-03',
    concept: 'Reference Variable',
    description: 'Which snippet correctly declares a reference to another variable?',
    language: 'cpp',
    difficulty: 'Easy',
    options: [
      'int &ref = original;',
      'int *ref = original;',
      'ref<int> = original;',
      'reference int ref = original;',
    ],
    correctAnswer: 'int &ref = original;',
    explanation: 'In C++, a reference is an alias for an already existing variable. It is declared using the ampersand `&` symbol.',
  },

  // C++ - Medium
  {
    id: 'cm-cpp-medium-01',
    concept: 'Range-based For Loop',
    description: 'Which snippet correctly iterates over the elements of a vector?',
    language: 'cpp',
    difficulty: 'Medium',
    options: [
      'for (int i : my_vector)',
      'for (int i = 0; i < my_vector.size(); i++)',
      'my_vector.forEach(i => ...)',
      'for (i in my_vector)',
    ],
    correctAnswer: 'for (int i : my_vector)',
    explanation: 'The range-based for loop (since C++11) provides a more concise and less error-prone way to iterate over the elements of a container.',
  },
  {
    id: 'cm-cpp-medium-02',
    concept: 'Class Constructor',
    description: 'Which snippet correctly defines a constructor for the `Car` class?',
    language: 'cpp',
    difficulty: 'Medium',
    options: [
      'void Car() { ... }',
      'Car() { ... }',
      'construct Car() { ... }',
      'def Car() { ... }',
    ],
    correctAnswer: 'Car() { ... }',
    explanation: 'A constructor in C++ is a special member function that has the same name as the class and is called when an object of the class is created. It has no return type.',
  },
    
  // C++ - Hard
  {
    id: 'cm-cpp-hard-01',
    concept: 'Virtual Function (Polymorphism)',
    description: 'Which snippet correctly declares a function that can be overridden by a derived class to enable polymorphism?',
    language: 'cpp',
    difficulty: 'Hard',
    options: [
      'override void makeSound() {}',
      'dynamic void makeSound() {}',
      'virtual void makeSound() {}',
      'poly void makeSound() {}',
    ],
    correctAnswer: 'virtual void makeSound() {}',
    explanation: 'The `virtual` keyword is used to declare a member function in a base class that you expect to be redefined in derived classes. This is fundamental to achieving runtime polymorphism in C++.',
  },
  {
    id: 'cm-cpp-hard-02',
    concept: 'Template Function',
    description: 'Which snippet defines a generic function that can operate on different data types?',
    language: 'cpp',
    difficulty: 'Hard',
    options: [
      'generic<T> T add(T a, T b) {}',
      'template<typename T> T add(T a, T b) {}',
      'function<T> add(T a, T b) {}',
      'auto add(auto a, auto b) {}',
    ],
    correctAnswer: 'template<typename T> T add(T a, T b) {}',
    explanation: 'Templates allow you to write generic programs. The `template<typename T>` syntax declares a template where `T` is a placeholder for a data type that will be specified when the function is called.',
  },
];

export function getConceptMatchChallengeById(id: string): ConceptMatchChallenge | undefined {
    return conceptMatchChallenges.find(c => c.id === id);
}
