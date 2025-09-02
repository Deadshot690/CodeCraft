
export interface JigsawChallenge {
  id: string;
  title: string;
  description: string;
  language: 'javascript' | 'python' | 'java' | 'cpp';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  correctOrder: string[];
}

export const jigsawChallenges: JigsawChallenge[] = [
  // JavaScript - Easy
  {
    id: 'jg-js-easy-01',
    title: 'Simple Greeting',
    description: 'Create a function that returns a greeting string.',
    language: 'javascript',
    difficulty: 'Easy',
    correctOrder: [
      'function greet() {',
      '  return "Hello, World!";',
      '}',
    ],
  },
  {
    id: 'jg-js-easy-02',
    title: 'Variable Declaration',
    description: 'Declare two variables and add them.',
    language: 'javascript',
    difficulty: 'Easy',
    correctOrder: [
      'let a = 5;',
      'let b = 10;',
      'let sum = a + b;',
    ],
  },
  {
    id: 'jg-js-easy-03',
    title: 'Simple For Loop',
    description: 'Loop from 0 to 4 and print each number.',
    language: 'javascript',
    difficulty: 'Easy',
    correctOrder: [
      'for (let i = 0; i < 5; i++) {',
      '  console.log(i);',
      '}',
    ],
  },
  {
    id: 'jg-js-easy-04',
    title: 'Simple If Statement',
    description: 'Check if a number is greater than 10.',
    language: 'javascript',
    difficulty: 'Easy',
    correctOrder: [
      'let num = 15;',
      'if (num > 10) {',
      '  console.log("Number is greater than 10");',
      '}',
    ],
  },

  // JavaScript - Medium
  {
    id: 'jg-js-medium-01',
    title: 'Arrow Function',
    description: 'Define a simple arrow function to double a number.',
    language: 'javascript',
    difficulty: 'Medium',
    correctOrder: [
      'const double = (n) => {',
      '  return n * 2;',
      '};',
    ],
  },
  {
    id: 'jg-js-medium-02',
    title: 'Array Map',
    description: 'Use the map function to create a new array with doubled values.',
    language: 'javascript',
    difficulty: 'Medium',
    correctOrder: [
      'const numbers = [1, 2, 3];',
      'const doubled = numbers.map(num => {',
      '  return num * 2;',
      '});',
    ],
  },
  {
    id: 'jg-js-medium-03',
    title: 'Object Literal',
    description: 'Create a simple object representing a person.',
    language: 'javascript',
    difficulty: 'Medium',
    correctOrder: [
      'const person = {',
      '  name: "Alice",',
      '  age: 30',
      '};',
    ],
  },
    {
    id: 'jg-js-medium-04',
    title: 'Async/Await Fetch',
    description: 'Fetch data from an API using async/await.',
    language: 'javascript',
    difficulty: 'Medium',
    correctOrder: [
      'async function fetchData() {',
      '  const response = await fetch("https://api.example.com/data");',
      '  const data = await response.json();',
      '  console.log(data);',
      '}',
    ],
  },

  // JavaScript - Hard
  {
    id: 'jg-js-hard-01',
    title: 'Simple Class',
    description: 'Define a simple class for a Rectangle.',
    language: 'javascript',
    difficulty: 'Hard',
    correctOrder: [
      'class Rectangle {',
      '  constructor(height, width) {',
      '    this.height = height;',
      '    this.width = width;',
      '  }',
      '  getArea() {',
      '    return this.height * this.width;',
      '  }',
      '}',
    ],
  },
  {
    id: 'jg-js-hard-02',
    title: 'Array Reduce',
    description: 'Use reduce to sum up all numbers in an array.',
    language: 'javascript',
    difficulty: 'Hard',
    correctOrder: [
      'const numbers = [1, 2, 3, 4];',
      'const sum = numbers.reduce((accumulator, currentValue) => {',
      '  return accumulator + currentValue;',
      '}, 0);',
    ],
  },

  // Python - Easy
  {
    id: 'jg-py-easy-01',
    title: 'Simple Function',
    description: 'Define a function that returns the sum of two numbers.',
    language: 'python',
    difficulty: 'Easy',
    correctOrder: [
      'def add(a, b):',
      '    return a + b',
    ],
  },
  {
    id: 'jg-py-easy-02',
    title: 'Basic For Loop',
    description: 'Print numbers from 0 to 4.',
    language: 'python',
    difficulty: 'Easy',
    correctOrder: [
      'for i in range(5):',
      '    print(i)',
    ],
  },
  {
    id: 'jg-py-easy-03',
    title: 'List Creation',
    description: 'Create a list of fruits.',
    language: 'python',
    difficulty: 'Easy',
    correctOrder: [
      'fruits = ["apple", "banana", "cherry"]',
      'print(fruits[0])',
    ],
  },
    {
    id: 'jg-py-easy-04',
    title: 'If/Else statement',
    description: 'Check if a number is positive or not.',
    language: 'python',
    difficulty: 'Easy',
    correctOrder: [
      'x = 10',
      'if x > 0:',
      '    print("Positive")',
      'else:',
      '    print("Not positive")',
    ],
  },

  // Python - Medium
  {
    id: 'jg-py-medium-01',
    title: 'List Comprehension',
    description: 'Create a list of squares for numbers 0 through 9.',
    language: 'python',
    difficulty: 'Medium',
    correctOrder: [
      'squares = [x**2 for x in range(10)]',
      'print(squares)',
    ],
  },
  {
    id: 'jg-py-medium-02',
    title: 'Dictionary',
    description: 'Create and access a simple dictionary.',
    language: 'python',
    difficulty: 'Medium',
    correctOrder: [
      'person = {',
      '    "name": "Bob",',
      '    "age": 25',
      '}',
      'print(person["name"])',
    ],
  },
    {
    id: 'jg-py-medium-03',
    title: 'File Reading',
    description: 'Open and read a file line by line.',
    language: 'python',
    difficulty: 'Medium',
    correctOrder: [
      'with open("myfile.txt", "r") as f:',
      '    for line in f:',
      '        print(line.strip())',
    ],
  },

  // Python - Hard
  {
    id: 'jg-py-hard-01',
    title: 'Simple Class',
    description: 'Define a simple class for a Dog.',
    language: 'python',
    difficulty: 'Hard',
    correctOrder: [
      'class Dog:',
      '    def __init__(self, name):',
      '        self.name = name',
      '    def bark(self):',
      '        return "Woof!"',
      'my_dog = Dog("Fido")',
      'print(my_dog.bark())',
    ],
  },
    {
    id: 'jg-py-hard-02',
    title: 'Simple Decorator',
    description: 'Create a simple decorator to wrap a function.',
    language: 'python',
    difficulty: 'Hard',
    correctOrder: [
      'def my_decorator(func):',
      '    def wrapper():',
      '        print("Before function.")',
      '        func()',
      '        print("After function.")',
      '    return wrapper',
      '@my_decorator',
      'def say_hello():',
      '    print("Hello!")',
      'say_hello()',
    ],
  },

  // Java - Easy
  {
    id: 'jg-java-easy-01',
    title: 'Hello World',
    description: 'A standard "Hello, World!" program in Java.',
    language: 'java',
    difficulty: 'Easy',
    correctOrder: [
      'public class Main {',
      '  public static void main(String[] args) {',
      '    System.out.println("Hello, World!");',
      '  }',
      '}',
    ],
  },
  {
    id: 'jg-java-easy-02',
    title: 'Variable Declaration',
    description: 'Declare and print an integer variable.',
    language: 'java',
    difficulty: 'Easy',
    correctOrder: [
      'public class Main {',
      '  public static void main(String[] args) {',
      '    int myNum = 5;',
      '    System.out.println(myNum);',
      '  }',
      '}',
    ],
  },

  // Java - Medium
  {
    id: 'jg-java-medium-01',
    title: 'Simple Method',
    description: 'Create and call a simple method within a class.',
    language: 'java',
    difficulty: 'Medium',
    correctOrder: [
      'public class Main {',
      '  static void myMethod() {',
      '    System.out.println("I just got executed!");',
      '  }',
      '  public static void main(String[] args) {',
      '    myMethod();',
      '  }',
      '}',
    ],
  },
  {
    id: 'jg-java-medium-02',
    title: 'For Loop',
    description: 'Use a for loop to print numbers 0 to 4.',
    language: 'java',
    difficulty: 'Medium',
    correctOrder: [
      'public class Main {',
      '  public static void main(String[] args) {',
      '    for (int i = 0; i < 5; i++) {',
      '      System.out.println(i);',
      '    }',
      '  }',
      '}',
    ],
  },

  // Java - Hard
  {
    id: 'jg-java-hard-01',
    title: 'Simple Class and Object',
    description: 'Create a simple Car class and an object from it.',
    language: 'java',
    difficulty: 'Hard',
    correctOrder: [
      'public class Car {',
      '  int modelYear;',
      '  String modelName;',
      '  public Car(int year, String name) {',
      '    modelYear = year;',
      '    modelName = name;',
      '  }',
      '  public static void main(String[] args) {',
      '    Car myCar = new Car(1969, "Mustang");',
      '    System.out.println(myCar.modelName);',
      '  }',
      '}',
    ],
  },

  // C++ - Easy
  {
    id: 'jg-cpp-easy-01',
    title: 'Hello World',
    description: 'A standard "Hello, World!" program in C++.',
    language: 'cpp',
    difficulty: 'Easy',
    correctOrder: [
      '#include <iostream>',
      'int main() {',
      '  std::cout << "Hello, World!";',
      '  return 0;',
      '}',
    ],
  },
  {
    id: 'jg-cpp-easy-02',
    title: 'Variable Declaration',
    description: 'Declare and print an integer variable.',
    language: 'cpp',
    difficulty: 'Easy',
    correctOrder: [
      '#include <iostream>',
      'int main() {',
      '  int myNum = 15;',
      '  std::cout << myNum;',
      '  return 0;',
      '}',
    ],
  },

  // C++ - Medium
  {
    id: 'jg-cpp-medium-01',
    title: 'Simple Function',
    description: 'Create and call a simple function.',
    language: 'cpp',
    difficulty: 'Medium',
    correctOrder: [
      '#include <iostream>',
      'void myFunction() {',
      '  std::cout << "I just got executed!";',
      '}',
      'int main() {',
      '  myFunction();',
      '  return 0;',
      '}',
    ],
  },
  {
    id: 'jg-cpp-medium-02',
    title: 'For Loop',
    description: 'Use a for loop to print numbers 0 to 4.',
    language: 'cpp',
    difficulty: 'Medium',
    correctOrder: [
      '#include <iostream>',
      'int main() {',
      '  for (int i = 0; i < 5; i++) {',
      '    std::cout << i << "\\n";',
      '  }',
      '  return 0;',
      '}',
    ],
  },

  // C++ - Hard
  {
    id: 'jg-cpp-hard-01',
    title: 'Simple Class and Object',
    description: 'Define a simple class and create an object.',
    language: 'cpp',
    difficulty: 'Hard',
    correctOrder: [
      '#include <iostream>',
      'class MyClass {',
      '  public:',
      '    void myMethod() {',
      '      std::cout << "Hello World!";',
      '    }',
      '};',
      'int main() {',
      '  MyClass myObj;',
      '  myObj.myMethod();',
      '  return 0;',
      '}',
    ],
  },
];

export function getJigsawChallengeById(id: string): JigsawChallenge | undefined {
    return jigsawChallenges.find(c => c.id === id);
}
