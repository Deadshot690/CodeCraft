
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
  {
    id: 'java2',
    title: 'Java: ArrayList Loop',
    description: 'Correctly loop over an ArrayList of strings and print each one.',
    language: 'java',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `import java.util.ArrayList;

public class Looper {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        for (String name : names) {
            System.out.println(name);
        }
    }
}`
  },
  {
    id: 'cpp2',
    title: 'C++: Simple Struct',
    description: 'Define a simple struct to hold user data.',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `#include <string>

struct User {
    std::string name;
    int age;
};

int main() {
    User u;
    u.name = "Alex";
    u.age = 30;
    return 0;
}`
  },
  {
    id: 'js3',
    title: 'JavaScript: Array Map',
    description: 'Use the .map() method to create a new array of doubled values.',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `const numbers = [1, 2, 3];
const doubled = numbers.map(num => {
  return num * 2;
});
console.log(doubled);`
  },
  {
    id: 'py3',
    title: 'Python: Dictionary Iteration',
    description: 'Iterate over the key-value pairs of a dictionary.',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `scores = {'math': 90, 'science': 85}
for subject, score in scores.items():
    print(f"{subject}: {score}")`
  },
  {
    id: 'js4',
    title: 'JavaScript: Async/Await',
    description: 'Reconstruct this async function that fetches data from an API.',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `async function getUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    const data = await response.json();
    console.log(data.name);
  } catch (error) {
    console.error("Failed to fetch user");
  }
}`
  },
  {
    id: 'py4',
    title: 'Python: Reading a File',
    description: 'Properly open, read, and print the contents of a text file.',
    language: 'python',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `try:
    with open("notes.txt", "r") as f:
        content = f.read()
        print(content)
except FileNotFoundError:
    print("File not found.")`
  },
  {
    id: 'java3',
    title: 'Java: Try-Catch Block',
    description: 'Handle a potential ArithmeticException using a try-catch block.',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `public class ExceptionTest {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero!");
        }
    }
}`
  },
  {
    id: 'cpp3',
    title: 'C++: File Input',
    description: 'Read data from a text file using ifstream.',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `#include <iostream>
#include <fstream>
#include <string>

int main() {
    std::string line;
    std::ifstream myfile("data.txt");
    if (myfile.is_open()) {
        while (getline(myfile, line)) {
            std::cout << line << '\\n';
        }
        myfile.close();
    }
    return 0;
}`
  },
  {
    id: 'py5',
    title: 'Python: Simple Decorator',
    description: 'Assemble this simple decorator that prints a message before and after a function call.',
    language: 'python',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()`
  },
  {
    id: 'js5',
    title: 'JavaScript: Array Reduce',
    description: 'Use the .reduce() method to calculate the sum of an array.',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 50,
    codeSnippet: `const numbers = [10, 20, 30];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);`
  },
  {
    id: 'java4',
    title: 'Java: Simple Thread',
    description: 'Create and start a new thread by implementing the Runnable interface.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 55,
    codeSnippet: `public class MyThread implements Runnable {
    public void run() {
        System.out.println("Thread is running.");
    }

    public static void main(String args[]) {
        MyThread myThread = new MyThread();
        Thread thread = new Thread(myThread);
        thread.start();
    }
}`
  },
  {
    id: 'cpp4',
    title: 'C++: Template Function',
    description: 'Create a template function that can find the maximum of two values of any type.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 55,
    codeSnippet: `#include <iostream>

template <typename T>
T const& max(T const& a, T const& b) {
    return a < b ? b : a;
}

int main() {
    std::cout << max(5, 10) << std::endl;
    std::cout << max(5.5, 2.5) << std::endl;
    return 0;
}`
  },
  {
    id: 'js6',
    title: 'React: Simple Component',
    description: 'Piece together this simple functional React component.',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;`
  },
  {
    id: 'py6',
    title: 'Python: Flask Route',
    description: 'Assemble this basic route for a Flask web application.',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run()`
  },
];
