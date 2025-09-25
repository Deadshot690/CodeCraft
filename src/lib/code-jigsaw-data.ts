import type { CodeJigsawChallenge } from '@/lib/types';

export const codeJigsawChallenges: CodeJigsawChallenge[] = [
  {
    id: 'js1',
    title: 'JavaScript: Simple Fetch',
    description: 'Reassemble this basic fetch call to get data from an API.',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });`,
  },
  {
    id: 'py1',
    title: 'Python: Class Definition',
    description: 'Put the lines in order to create a simple Python class.',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        return "Woof!"

my_dog = Dog("Fido")
print(my_dog.bark())`,
  },
  {
    id: 'java1',
    title: 'Java: Main Method',
    description: 'Assemble a classic "Hello, World!" program in Java.',
    language: 'java',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
  },
  {
    id: 'cpp1',
    title: 'C++: For Loop',
    description: 'Construct a C++ for loop that prints numbers from 0 to 4.',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `#include <iostream>

int main() {
    for (int i = 0; i < 5; i++) {
        std::cout << i << std::endl;
    }
    return 0;
}`,
  },
  {
    id: 'js2',
    title: 'JavaScript: FizzBuzz',
    description: 'The classic FizzBuzz problem. Can you piece it together?',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}`,
  },
  {
    id: 'py2',
    title: 'Python: List Comprehension',
    description: 'Assemble this list comprehension to create a list of squares.',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `numbers = [1, 2, 3, 4, 5]
squares = [n*n for n in numbers]
print(squares)`,
  },
];
