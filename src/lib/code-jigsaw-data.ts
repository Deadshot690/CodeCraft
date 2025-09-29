
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
  {
    id: 'js7',
    title: 'JavaScript: Object Destructuring',
    description: 'Reassemble this code to use destructuring to extract values from an object.',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50
};

const { firstName, age } = person;

console.log(firstName);
console.log(age);`
  },
  {
    id: 'py7',
    title: 'Python: Working with JSON',
    description: 'Parse a JSON string into a Python dictionary.',
    language: 'python',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `import json

json_string = '{ "name":"John", "age":30, "city":"New York"}'

data = json.loads(json_string)

print(data['age'])`
  },
  {
    id: 'java5',
    title: 'Java: HashMap',
    description: 'Correctly create a HashMap, add a key-value pair, and retrieve it.',
    language: 'java',
    difficulty: 'Beginner',
    xp: 30,
    codeSnippet: `import java.util.HashMap;

public class MyClass {
    public static void main(String[] args) {
        HashMap<String, String> capitalCities = new HashMap<String, String>();
        capitalCities.put("England", "London");
        System.out.println(capitalCities.get("England"));
    }
}`
  },
  {
    id: 'cpp5',
    title: 'C++: Vector Iteration',
    description: 'Iterate through a vector of integers and print each element.',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    for (int num : numbers) {
        std::cout << num << " ";
    }
    return 0;
}`
  },
  {
    id: 'js8',
    title: 'JavaScript: Ternary Operator',
    description: 'Use the ternary operator to assign a value based on a condition.',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `let age = 19;
let voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable);`
  },
  {
    id: 'py8',
    title: 'Python: Class Inheritance',
    description: 'Assemble the code for a simple class inheritance structure.',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)`
  },
  {
    id: 'java6',
    title: 'Java: Interface',
    description: 'Implement an interface in a Java class.',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `interface Animal {
    public void animalSound();
}

class Pig implements Animal {
    public void animalSound() {
        System.out.println("The pig says: wee wee");
    }
}

class Main {
    public static void main(String[] args) {
        Pig myPig = new Pig();
        myPig.animalSound();
    }
}`
  },
  {
    id: 'cpp6',
    title: 'C++: Pointers',
    description: 'Correctly declare a pointer, assign it a memory address, and dereference it.',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `#include <iostream>
#include <string>

int main() {
    std::string food = "Pizza";
    std::string* ptr = &food;
    std::cout << *ptr;
    return 0;
}`
  },
  {
    id: 'js9',
    title: 'React: Component State',
    description: 'Assemble this simple React component that manages state with the useState hook.',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 50,
    codeSnippet: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`
  },
  {
    id: 'py9',
    title: 'Python: Generator Function',
    description: 'Create a generator function that yields a sequence of numbers.',
    language: 'python',
    difficulty: 'Advanced',
    xp: 55,
    codeSnippet: `def my_generator(n):
    for i in range(n):
        yield i

gen = my_generator(3)
print(next(gen))
print(next(gen))`
  },
  {
    id: 'php1',
    title: 'PHP: Simple Echo',
    description: 'Assemble this basic PHP script to print a string.',
    language: 'php',
    difficulty: 'Beginner',
    xp: 15,
    codeSnippet: `<?php
echo "Hello PHP!";
?>`
  },
  {
    id: 'java7',
    title: 'Java: Enhanced For Loop',
    description: 'Use the enhanced for loop to iterate over an array.',
    language: 'java',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `public class ArrayLoop {
    public static void main(String[] args) {
        String[] cars = {"Volvo", "BMW", "Ford"};
        for (String car : cars) {
            System.out.println(car);
        }
    }
}`
  },
  {
    id: 'cpp7',
    title: 'C++: Reference Variable',
    description: 'Understand how a reference variable acts as an alias for another variable.',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `#include <iostream>
#include <string>

int main() {
    std::string food = "Pizza";
    std::string &meal = food;
    std::cout << meal;
    return 0;
}`
  },
  {
    id: 'js10',
    title: 'JavaScript: Array Filter',
    description: 'Use the `.filter()` method to create a new array with elements that pass a test.',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);`
  },
  {
    id: 'py10',
    title: 'Python: Lambda Function',
    description: 'Create a simple anonymous function using lambda.',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `x = lambda a, b: a * b
print(x(5, 6))`
  },
  {
    id: 'php2',
    title: 'PHP: Variables',
    description: 'Declare variables and perform a simple calculation.',
    language: 'php',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `<?php
$x = 5;
$y = 10;
$z = $x + $y;
echo $z;
?>`
  },
  {
    id: 'java8',
    title: 'Java: Switch Statement',
    description: 'Use a switch statement to select one of many code blocks to be executed.',
    language: 'java',
    difficulty: 'Beginner',
    xp: 30,
    codeSnippet: `public class DayOfWeek {
    public static void main(String[] args) {
        int day = 4;
        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            default:
                System.out.println("Some other day");
        }
    }
}`
  },
  {
    id: 'cpp8',
    title: 'C++: Function Overloading',
    description: 'Create multiple functions with the same name but different parameters.',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `#include <iostream>

int plusFunc(int x, int y) {
  return x + y;
}

double plusFunc(double x, double y) {
  return x + y;
}

int main() {
  int num1 = plusFunc(8, 5);
  double num2 = plusFunc(4.3, 6.26);
  std::cout << num1 << " " << num2;
  return 0;
}`
  },
  {
    id: 'js11',
    title: 'JavaScript: Set Timeout',
    description: 'Execute a function after waiting a specified number of milliseconds.',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `function greet() {
  console.log("Hello after 2 seconds");
}

setTimeout(greet, 2000);`
  },
  {
    id: 'py11',
    title: 'Python: F-Strings',
    description: 'Use an f-string for easy string formatting.',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `name = "Alice"
age = 30
txt = f"Her name is {name} and she is {age}."
print(txt)`
  },
  {
    id: 'php3',
    title: 'PHP: If...Else Statement',
    description: 'Create a conditional block to execute code based on a condition.',
    language: 'php',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `<?php
$t = date("H");

if ($t < "20") {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}
?>`
  },
  {
    id: 'java9',
    title: 'Java: Method Overriding',
    description: 'Create a subclass that provides a specific implementation of a method from its parent class.',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `class Vehicle {
  public void honk() {
    System.out.println("Tuut, tuut!");
  }
}

class Car extends Vehicle {
  @Override
  public void honk() {
    System.out.println("Beep, beep!");
  }
}

Car myCar = new Car();
myCar.honk();`
  },
  {
    id: 'cpp9',
    title: 'C++: Default Constructor',
    description: 'Define a constructor that is automatically called when an object is created.',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 30,
    codeSnippet: `#include <iostream>

class MyClass {
public:
  MyClass() {
    std::cout << "Object created!";
  }
};

int main() {
  MyClass myObj;
  return 0;
}`
  },
  {
    id: 'js12',
    title: 'JavaScript: Promises',
    description: 'Create a simple promise that resolves successfully.',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;
  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) { console.log(value); }
);`
  },
  {
    id: 'py12',
    title: 'Python: Try...Except Block',
    description: 'Handle a potential ZeroDivisionError.',
    language: 'python',
    difficulty: 'Beginner',
    xp: 30,
    codeSnippet: `try:
  result = 10 / 0
except ZeroDivisionError:
  print("You cannot divide by zero!")`
  },
  {
    id: 'php4',
    title: 'PHP: Indexed Array',
    description: 'Create and access an indexed array in PHP.',
    language: 'php',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `<?php
$cars = array("Volvo", "BMW", "Toyota");
echo "I like " . $cars[0] . " and " . $cars[1] . ".";
?>`
  },
  {
    id: 'java10',
    title: 'Java: Create an Object',
    description: 'Create an object of a class and access its attributes.',
    language: 'java',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `public class MyClass {
  int x = 5;

  public static void main(String[] args) {
    MyClass myObj = new MyClass();
    System.out.println(myObj.x);
  }
}`
  },
  {
    id: 'cpp10',
    title: 'C++: Pass by Reference',
    description: 'Create a function that takes arguments by reference to modify them.',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `#include <iostream>

void swapNums(int &x, int &y) {
  int z = x;
  x = y;
  y = z;
}

int main() {
  int firstNum = 10;
  int secondNum = 20;
  swapNums(firstNum, secondNum);
  std::cout << firstNum << " " << secondNum;
  return 0;
}`
  },
  {
    id: 'js13',
    title: 'JavaScript: Add an Event Listener',
    description: 'Add a click event listener to a button.',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 30,
    codeSnippet: `<button id="myBtn">Click Me</button>
<script>
document.getElementById("myBtn").addEventListener("click", function() {
  alert("Hello World!");
});
</script>`
  },
  {
    id: 'py13',
    title: 'Python: Set Operations',
    description: 'Find the union of two sets.',
    language: 'python',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}
set3 = set1.union(set2)
print(set3)`
  },
  {
    id: 'php5',
    title: 'PHP: Associative Array',
    description: 'Create and use an associative array.',
    language: 'php',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `<?php
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
echo "Peter is " . $age['Peter'] . " years old.";
?>`
  },
  {
    id: 'java11',
    title: 'Java: Inheritance',
    description: 'Create a subclass that inherits from a superclass.',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `class Vehicle {
  protected String brand = "Ford";
}

class Car extends Vehicle {
  private String modelName = "Mustang";
  public static void main(String[] args) {
    Car myCar = new Car();
    System.out.println(myCar.brand);
  }
}`
  },
  {
    id: 'cpp11',
    title: 'C++: Class Method',
    description: 'Define a method inside a class and call it on an object.',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 35,
    codeSnippet: `#include <iostream>

class MyClass {
public:
  void myMethod() {
    std::cout << "Hello World!";
  }
};

int main() {
  MyClass myObj;
  myObj.myMethod();
  return 0;
}`
  },
  {
    id: 'js14',
    title: 'JavaScript: Find an object in an array',
    description: 'Use the `find` method to get an object from an array based on a property.',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
];

function findApples(item) {
  return item.name === "apples";
}

console.log(inventory.find(findApples));`
  },
  {
    id: 'py14',
    title: 'Python: Unpacking a Tuple',
    description: 'Assign the elements of a tuple to variables.',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `fruits = ("apple", "banana", "cherry")
(green, yellow, red) = fruits
print(green)
print(red)`
  },
  {
    id: 'php6',
    title: 'PHP: Simple Function',
    description: 'Define and call a simple function in PHP.',
    language: 'php',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `<?php
function writeMsg() {
  echo "Hello world!";
}

writeMsg();
?>`
  },
  {
    id: 'java12',
    title: 'Java: Reading a File',
    description: 'Read the contents of a text file using `Scanner`.',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 50,
    codeSnippet: `import java.io.File;
import java.util.Scanner;
import java.io.FileNotFoundException;

public class ReadFile {
  public static void main(String[] args) {
    try {
      File myObj = new File("filename.txt");
      Scanner myReader = new Scanner(myObj);
      while (myReader.hasNextLine()) {
        String data = myReader.nextLine();
        System.out.println(data);
      }
      myReader.close();
    } catch (FileNotFoundException e) {
      System.out.println("An error occurred.");
    }
  }
}`
  },
  {
    id: 'cpp12',
    title: 'C++: Inheritance',
    description: 'Create a simple inheritance structure with a base and derived class.',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `#include <iostream>
#include <string>

class Vehicle {
public:
  std::string brand = "Ford";
};

class Car : public Vehicle {
public:
  std::string model = "Mustang";
};

int main() {
  Car myCar;
  std::cout << myCar.brand;
  return 0;
}`
  },
  {
    id: 'js15',
    title: 'React: useEffect Hook',
    description: 'Use the useEffect hook to run code after the component renders.',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 50,
    codeSnippet: `import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}`
  },
  {
    id: 'py15',
    title: 'Python: Sorting a Dictionary',
    description: 'Sort a dictionary by its values.',
    language: 'python',
    difficulty: 'Advanced',
    xp: 55,
    codeSnippet: `d = {'a': 2, 'c': 1, 'b': 3}
sorted_d = sorted(d.items(), key=lambda item: item[1])
print(sorted_d)`
  },
  {
    id: 'php7',
    title: 'PHP: Loop Through an Array',
    description: 'Use a `foreach` loop to iterate over an array.',
    language: 'php',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `<?php
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $value) {
  echo "$value <br>";
}
?>`
  },
  {
    id: 'java13',
    title: 'Java: Polymorphism',
    description: 'Demonstrate polymorphism with a base class and two subclasses.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `class Animal {
  public void animalSound() {
    System.out.println("The animal makes a sound");
  }
}

class Pig extends Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
}

class Dog extends Animal {
  public void animalSound() {
    System.out.println("The dog says: bow wow");
  }
}`
  },
  {
    id: 'cpp13',
    title: 'C++: Reading User Input',
    description: 'Read multiple inputs from the console.',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `#include <iostream>

int main() {
  int x, y;
  std::cout << "Type two numbers: ";
  std::cin >> x >> y;
  std::cout << "Sum is: " << x + y;
  return 0;
}`
  },
  {
    id: 'js16',
    title: 'JavaScript: Get Date Methods',
    description: 'Get the current day of the week.',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `const d = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[d.getDay()];
console.log(day);`
  },
  {
    id: 'py16',
    title: 'Python: Create a Module',
    description: 'Create a simple module with a function and use it in another script.',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `# mymodule.py
def greeting(name):
  print("Hello, " + name)

# main.py
import mymodule
mymodule.greeting("Jonathan")`
  },
  {
    id: 'php8',
    title: 'PHP: Superglobals',
    description: 'Use the `$GLOBALS` superglobal to access a global variable.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `<?php
$x = 75;
 
function myfunction() {
  echo $GLOBALS['x'];
}

myfunction();
?>`
  },
  {
    id: 'java14',
    title: 'Java: Enums',
    description: 'Define and use an enum for a set of constants.',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `enum Level {
  LOW,
  MEDIUM,
  HIGH
}

public class Main {
  public static void main(String[] args) {
    Level myVar = Level.MEDIUM;
    System.out.println(myVar);
  }
}`
  },
  {
    id: 'cpp14',
    title: 'C++: Polymorphism',
    description: 'Demonstrate polymorphism using virtual functions.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 65,
    codeSnippet: `#include <iostream>

class Animal {
public:
  virtual void animalSound() {
    std::cout << "An animal makes a sound" << std::endl;
  }
};

class Pig : public Animal {
public:
  void animalSound() override {
    std::cout << "A pig says: wee wee" << std::endl;
  }
};

int main() {
  Animal* myAnimal = new Pig();
  myAnimal->animalSound();
  delete myAnimal;
  return 0;
}`
  },
  {
    id: 'js17',
    title: 'JavaScript: JSON Parse',
    description: 'Parse a JSON string into a JavaScript object.',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `let text = '{ "name":"John", "age":30, "city":"New York"}';
const obj = JSON.parse(text);
console.log(obj.name);`
  },
  {
    id: 'py17',
    title: 'Python: Pip Install',
    description: 'Show the command to install a package using pip.',
    language: 'python',
    difficulty: 'Beginner',
    xp: 15,
    codeSnippet: `# This is a shell command, not Python code
pip install camelcase`
  },
  {
    id: 'php9',
    title: 'PHP: Simple Form Handling',
    description: 'Create a simple HTML form that submits data to a PHP script.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `<!-- index.html -->
<form action="welcome.php" method="post">
Name: <input type="text" name="name"><br>
<input type="submit">
</form>

<!-- welcome.php -->
Welcome <?php echo $_POST["name"]; ?>`
  },
  {
    id: 'java15',
    title: 'Java: Writing to a File',
    description: 'Use `FileWriter` to write content to a file.',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 50,
    codeSnippet: `import java.io.FileWriter;
import java.io.IOException;

public class WriteToFile {
  public static void main(String[] args) {
    try {
      FileWriter myWriter = new FileWriter("filename.txt");
      myWriter.write("Files in Java might be tricky, but it is fun enough!");
      myWriter.close();
    } catch (IOException e) {
      System.out.println("An error occurred.");
    }
  }
}`
  },
  {
    id: 'cpp15',
    title: 'C++: File Handling',
    description: 'Write to and read from a file using `fstream`.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 55,
    codeSnippet: `#include <iostream>
#include <fstream>
#include <string>

int main() {
  std::ofstream MyWriteFile("filename.txt");
  MyWriteFile << "Files can be tricky, but it is fun enough!";
  MyWriteFile.close();

  std::string myText;
  std::ifstream MyReadFile("filename.txt");
  while (getline(MyReadFile, myText)) {
    std::cout << myText;
  }
  MyReadFile.close();
  return 0;
}`
  },
  {
    id: 'js18',
    title: 'JavaScript: Error Handling',
    description: 'Use a `try...catch` block to handle potential errors.',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 30,
    codeSnippet: `try {
  adddlert("Welcome guest!");
}
catch(err) {
  console.log(err.message);
}`
  },
  {
    id: 'py18',
    title: 'Python: Datetime Module',
    description: 'Get and format the current date.',
    language: 'python',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `import datetime

x = datetime.datetime.now()
print(x.strftime("%A"))`
  },
  {
    id: 'php10',
    title: 'PHP: Include File',
    description: 'Include the contents of one PHP file into another.',
    language: 'php',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `<!-- vars.php -->
<?php
$color='red';
?>

<!-- main.php -->
<h1>Welcome</h1>
<?php include 'vars.php';
echo "I have a " . $color . " car.";
?>`
  },
  {
    id: 'java16',
    title: 'Java: Abstraction',
    description: 'Use an abstract class and method to achieve abstraction.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `abstract class Animal {
  public abstract void animalSound();
  public void sleep() {
    System.out.println("Zzz");
  }
}

class Pig extends Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
}`
  },
  {
    id: 'cpp16',
    title: 'C++: Structures',
    description: 'Use a structure to group related variables.',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `#include <iostream>
#include <string>

struct car {
  std::string brand;
  std::string model;
  int year;
};

int main() {
  car myCar1;
  myCar1.brand = "BMW";
  myCar1.model = "X5";
  myCar1.year = 1999;
  std::cout << myCar1.brand;
  return 0;
}`
  },
  {
    id: 'js19',
    title: 'JavaScript: Regular Expressions',
    description: 'Use a regular expression to search for a pattern in a string.',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `let text = "Visit W3Schools!";
let n = text.search(/w3schools/i);
console.log(n);`
  },
  {
    id: 'py19',
    title: 'Python: Math Module',
    description: 'Use the `math` module to find the square root of a number.',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `import math

x = math.sqrt(64)
print(x)`
  },
  {
    id: 'php11',
    title: 'PHP: File Open/Read',
    description: 'Open and read a file line by line.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
while(!feof($myfile)) {
  echo fgets($myfile) . "<br>";
}
fclose($myfile);
?>`
  },
  {
    id: 'java17',
    title: 'Java: Threads',
    description: 'Create a simple thread by extending the `Thread` class.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 55,
    codeSnippet: `public class MyThread extends Thread {
  public void run() {
    System.out.println("This code is running in a thread");
  }
  public static void main(String[] args) {
    MyThread thread = new MyThread();
    thread.start();
  }
}`
  },
  {
    id: 'cpp17',
    title: 'C++: Math Functions',
    description: 'Use the `cmath` library to perform mathematical operations.',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `#include <iostream>
#include <cmath>

int main() {
  std::cout << sqrt(64) << std::endl;
  std::cout << round(2.6) << std::endl;
  return 0;
}`
  },
  {
    id: 'js20',
    title: 'React: Conditional Rendering',
    description: 'Render a component based on a condition.',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <p>Goal!</p>;
  }
  return <p>Miss!</p>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);`
  },
  {
    id: 'py20',
    title: 'Python: `__init__` method',
    description: 'Use the `__init__` method to initialize object properties.',
    language: 'python',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 36)
print(p1.name)`
  },
  {
    id: 'php12',
    title: 'PHP: Cookies',
    description: 'Create and retrieve a simple cookie.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `<?php
$cookie_name = "user";
$cookie_value = "John Doe";
setcookie($cookie_name, $cookie_value, time() + 3600, "/");

if(isset($_COOKIE[$cookie_name])) {
  echo "Cookie '" . $cookie_name . "' is set!";
}
?>`
  },
  {
    id: 'java18',
    title: 'Java: User Input',
    description: 'Read user input from the console using the `Scanner` class.',
    language: 'java',
    difficulty: 'Beginner',
    xp: 30,
    codeSnippet: `import java.util.Scanner;

class MyClass {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);
    System.out.println("Enter username");

    String userName = myObj.nextLine();
    System.out.println("Username is: " + userName);
  }
}`
  },
  {
    id: 'cpp18',
    title: 'C++: Multiple Inheritance',
    description: 'Create a class that inherits from multiple base classes.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `#include <iostream>

class MyClass {
public:
  void myFunction() { std::cout << "Some content in parent class."; }
};

class MyOtherClass {
public:
  void myOtherFunction() { std::cout << "Some content in another class."; }
};

class MyChildClass : public MyClass, public MyOtherClass {};

int main() {
  MyChildClass myObj;
  myObj.myFunction();
  return 0;
}`
  },
  {
    id: 'js21',
    title: 'JavaScript: Arrow Functions',
    description: 'Rewrite a standard function as an arrow function.',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `// Standard function
function hello() {
  return "Hello World!";
}

// Arrow function
const helloArrow = () => "Hello World!";
console.log(helloArrow());`
  },
  {
    id: 'py21',
    title: 'Python: Class methods',
    description: 'Create a method within a class.',
    language: 'python',
    difficulty: 'Beginner',
    xp: 30,
    codeSnippet: `class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = Person("John", 36)
p1.myfunc()`
  },
  {
    id: 'php13',
    title: 'PHP: Sessions',
    description: 'Start a session and set session variables.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `<?php
session_start();

$_SESSION["favcolor"] = "green";
$_SESSION["favanimal"] = "cat";
echo "Session variables are set.";
?>`
  },
  {
    id: 'java19',
    title: 'Java: Encapsulation',
    description: 'Implement encapsulation by making fields private and providing public getters and setters.',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `public class Person {
  private String name;

  public String getName() {
    return name;
  }

  public void setName(String newName) {
    this.name = newName;
  }
}`
  },
  {
    id: 'cpp19',
    title: 'C++: Encapsulation',
    description: 'Use access specifiers to control access to class members.',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `#include <iostream>

class Employee {
private:
  int salary;

public:
  void setSalary(int s) {
    salary = s;
  }
  int getSalary() {
    return salary;
  }
};`
  },
  {
    id: 'js22',
    title: 'JavaScript: Array includes()',
    description: 'Check if an array contains a specific element.',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `const fruits = ["Banana", "Orange", "Apple"];
console.log(fruits.includes("Mango"));`
  },
  {
    id: 'py22',
    title: 'Python: String Formatting',
    description: 'Use the `format()` method to combine strings and numbers.',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `age = 36
txt = "My name is John, and I am {}"
print(txt.format(age))`
  },
  {
    id: 'php14',
    title: 'PHP: Callback Function',
    description: 'Use a callback function with the `array_map` function.',
    language: 'php',
    difficulty: 'Advanced',
    xp: 50,
    codeSnippet: `<?php
function my_callback($item) {
  return strlen($item);
}

$strings = ["apple", "orange", "banana"];
$lengths = array_map("my_callback", $strings);
print_r($lengths);
?>`
  },
  {
    id: 'java20',
    title: 'Java: ArrayList',
    description: 'Create and add items to an ArrayList.',
    language: 'java',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `import java.util.ArrayList;

public class MyClass {
  public static void main(String[] args) {
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    System.out.println(cars);
  }
}`
  },
  {
    id: 'cpp20',
    title: 'C++: Array & Loop',
    description: 'Iterate over an array using a for loop.',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `#include <iostream>

int main() {
  int myNumbers[5] = {10, 20, 30, 40, 50};
  for (int i = 0; i < 5; i++) {
    std::cout << myNumbers[i] << std::endl;
  }
  return 0;
}`
  }
];
