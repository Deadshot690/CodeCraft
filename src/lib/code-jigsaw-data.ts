
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
  },
  {
    id: 'js120',
    title: 'JavaScript: console.table',
    description: 'Display tabular data as a table in the console.',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `const data = [{ item: 'A' }, { item: 'B' }];
console.table(data);`
  },
  {
    id: 'java118',
    title: 'Java: Stream.reduce',
    description: 'Perform a reduction on the elements of a stream.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `import java.util.List;
List<Integer> numbers = List.of(1, 2, 3);
int sum = numbers.stream().reduce(0, (a, b) -> a + b);`
  },
  {
    id: 'cpp120',
    title: 'C++: std::function',
    description: 'Use a general-purpose polymorphic function wrapper.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 65,
    codeSnippet: `#include <functional>
#include <iostream>
void print_num(int i) {
    std::cout << i << '\\n';
}
int main() {
    std::function<void(int)> f = print_num;
    f(5);
    return 0;
}`
  },
  {
    id: 'php120',
    title: 'PHP: namespace',
    description: 'Declare a namespace to avoid naming collisions.',
    language: 'php',
    difficulty: 'Advanced',
    xp: 45,
    codeSnippet: `<?php
namespace Html;
class Table { /* ... */ }
$table = new Table();
?>`
  },
  {
    id: 'py200',
    title: 'Python: __slots__',
    description: 'Use __slots__ to save memory.',
    language: 'python',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `class MyClass:
    __slots__ = ['val1', 'val2']
    def __init__(self):
        self.val1 = 1`
  },
  {
    id: 'js200',
    title: 'JavaScript: Top-level await',
    description: 'Use await at the top level of a module.',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 50,
    codeSnippet: `// In an ES module
const data = await fetch(url).then(r => r.json());`
  },
  {
    id: 'java200',
    title: 'Java: enum with methods',
    description: 'Define an enum with methods and fields.',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `public enum Planet {
    EARTH(5.976e+24);
    private final double mass;
    Planet(double mass) { this.mass = mass; }
}`
  },
  {
    id: 'cpp200',
    title: 'C++: CRTP',
    description: 'Use the Curiously Recurring Template Pattern.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 90,
    codeSnippet: `template <class T> struct Base { void interface() { static_cast<T*>(this)->implementation(); } };
struct Derived : Base<Derived> { void implementation(); };`
  },
  {
    id: 'php200',
    title: 'PHP: Trait',
    description: 'Use a trait for code reuse.',
    language: 'php',
    difficulty: 'Advanced',
    xp: 50,
    codeSnippet: `<?php
trait message1 {
  public function msg1() {
    echo "OOP is fun! ";
  }
}
class Welcome {
  use message1;
}
?>`
  },
  {
    id: 'py201',
    title: 'Python: Metaclasses',
    description: 'Define a metaclass to customize class creation.',
    language: 'python',
    difficulty: 'Advanced',
    xp: 85,
    codeSnippet: `class MyMeta(type):
    def __new__(cls, name, bases, dct):
        return super().__new__(cls, name, bases, dct)

class MyClass(metaclass=MyMeta):
    pass`
  },
  {
    id: 'js201',
    title: 'JavaScript: Object.is()',
    description: 'Compare two values for equality.',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 30,
    codeSnippet: `Object.is(NaN, NaN); // true
Object.is(-0, +0);   // false`
  },
  {
    id: 'java201',
    title: 'Java: Exchanger',
    description: 'Exchange data between two threads.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 75,
    codeSnippet: `Exchanger<String> exchanger = new Exchanger<>();
// Thread 1
String msg1 = exchanger.exchange("from thread 1");`
  },
  {
    id: 'cpp201',
    title: 'C++: forward_list',
    description: 'Use a singly-linked list container.',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 50,
    codeSnippet: `#include <forward_list>
std::forward_list<int> flist = {1, 2, 3};
flist.push_front(0);`
  },
  {
    id: 'php201',
    title: 'PHP: Final Class',
    description: 'Create a class that cannot be inherited.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `<?php
final class MyClass {
   // ...
}
?>`
  },
  {
    id: 'py202',
    title: 'Python: Descriptor Protocol',
    description: 'Customize attribute access on an object.',
    language: 'python',
    difficulty: 'Advanced',
    xp: 80,
    codeSnippet: `class Ten:
    def __get__(self, obj, objtype=None):
        return 10`
  },
  {
    id: 'js202',
    title: 'JavaScript: Array.toReversed()',
    description: 'Create a new array with the elements in reverse order without modifying the original.',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `const original = [1, 2, 3];
const reversed = original.toReversed(); // Non-mutating`
  },
  {
    id: 'java202',
    title: 'Java: ServiceLoader',
    description: 'Discover and load service implementations.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 85,
    codeSnippet: `ServiceLoader<MyService> loader = ServiceLoader.load(MyService.class);
for (MyService service : loader) {
    service.doSomething();
}`
  },
  {
    id: 'cpp202',
    title: 'C++: std::source_location',
    description: 'Get source code location information at compile time.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 70,
    codeSnippet: `#include <source_location>
void log(const std::source_location& loc = std::source_location::current()) {
    std::cout << loc.file_name() << ':' << loc.line();
}`
  },
  {
    id: 'php202',
    title: 'PHP: Final Method',
    description: 'Prevent a method from being overridden by a child class.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `<?php
class BaseClass {
   public final function test() {
       echo "BaseClass test method";
   }
}
?>`
  },
  {
    id: 'py203',
    title: 'Python: shutil module',
    description: 'Use the `shutil` module for high-level file operations.',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `import shutil
shutil.copyfile('src.txt', 'dst.txt');
shutil.rmtree('my_dir');`
  },
  {
    id: 'js203',
    title: 'JavaScript: Object.groupBy',
    description: 'Group elements of an array based on a callback function.',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `const inventory = [ { name: 'asparagus', type: 'vegetables' } ];
const result = Object.groupBy(inventory, ({ type }) => type);`
  },
  {
    id: 'java203',
    title: 'Java: Fork/Join Framework',
    description: 'Use the framework for parallel processing.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 85,
    codeSnippet: `class MyRecursiveTask extends RecursiveTask<Long> {
    @Override
    protected Long compute() {
        // ...
    }
}`
  },
  {
    id: 'cpp203',
    title: 'C++: std::bitset',
    description: 'Use a fixed-size sequence of N bits.',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `#include <bitset>
std::bitset<8> b(42);
std::cout << b.to_string();`
  },
  {
    id: 'php203',
    title: 'PHP: `instanceof` Operator',
    description: 'Check if an object is an instance of a specific class.',
    language: 'php',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `<?php
class MyClass {}
$a = new MyClass();
var_dump($a instanceof MyClass);
?>`
  },
  {
    id: 'py204',
    title: 'Python: `argparse` module',
    description: 'Parse command-line arguments.',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 55,
    codeSnippet: `import argparse
parser = argparse.ArgumentParser()
parser.add_argument("echo")
args = parser.parse_args()`
  },
  {
    id: 'js204',
    title: 'JavaScript: with statement (discouraged)',
    description: 'Extend the scope chain for a statement (avoid in new code).',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 30,
    codeSnippet: `// Avoid using this in new code.
with (Math) {
  console.log(PI * pow(2, 3));
}`
  },
  {
    id: 'java204',
    title: 'Java: System.arraycopy',
    description: 'Efficiently copy data from one array to another.',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `int[] src = {1, 2, 3};
int[] dest = new int[3];
System.arraycopy(src, 0, dest, 0, 3);`
  },
  {
    id: 'cpp204',
    title: 'C++: reinterpret_cast',
    description: 'Reinterpret the bit pattern of an object.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 80,
    codeSnippet: `int i = 42;
void* v = &i;
int* p = reinterpret_cast<int*>(v);`
  },
  {
    id: 'php204',
    title: 'PHP: `$_SERVER` Superglobal',
    description: 'Access information about the server and execution environment.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `<?php
echo $_SERVER['PHP_SELF'];
echo $_SERVER['SERVER_NAME'];
?>`
  },
  {
    id: 'py205',
    title: 'Python: `logging` module',
    description: 'Configure and use standard logging.',
    language: 'python',
    difficulty: 'Beginner',
    xp: 35,
    codeSnippet: `import logging
logging.basicConfig(level=logging.INFO)
logging.info('This is an info message')`
  },
  {
    id: 'js205',
    title: 'JavaScript: CustomEvent',
    description: 'Create a custom event that can be dispatched.',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 50,
    codeSnippet: `const event = new CustomEvent('build', { detail: elem.dataset.time });
elem.dispatchEvent(event);`
  },
  {
    id: 'java205',
    title: 'Java: Annotation',
    description: 'Define a custom annotation.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface MyAnnotation {
}`
  },
  {
    id: 'cpp205',
    title: 'C++: `extern "C"`',
    description: 'Link C++ code with C code.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 65,
    codeSnippet: `extern "C" {
    int c_style_function(int);
}`
  },
  {
    id: 'php205',
    title: 'PHP: `$_REQUEST` Superglobal',
    description: 'Collect data after submitting an HTML form.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
</form>`
  },
  {
    id: 'py206',
    title: 'Python: `__dict__` attribute',
    description: 'Access the dictionary containing an object\'s writable attributes.',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `class MyClass:
    def __init__(self):
        self.a = 1
obj = MyClass()
print(obj.__dict__)`
  },
  {
    id: 'js206',
    title: 'JavaScript: requestAnimationFrame',
    description: 'Tell the browser you wish to perform an animation.',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 55,
    codeSnippet: `function animate() {
  // animation code
  requestAnimationFrame(animate);
}`
  },
  {
    id: 'java206',
    title: 'Java: `hashCode` and `equals` contract',
    description: 'Understand the contract between these two methods.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 70,
    codeSnippet: `class P { int x; @Override public boolean equals(Object o){...} }
// If you override equals, you MUST override hashCode.`
  },
  {
    id: 'cpp206',
    title: 'C++: ADL (Argument-Dependent Lookup)',
    description: 'Find a function in the namespace of its arguments.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 85,
    codeSnippet: `namespace N { struct S{}; void f(S); }
N::S s;
f(s); // Finds N::f`
  },
  {
    id: 'php206',
    title: 'PHP: `$_POST` Superglobal',
    description: 'Collect form data sent with the POST method.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['fname'];
}
?>`
  },
  {
    id: 'py207',
    title: 'Python: `operator` module',
    description: 'Use functional equivalents for intrinsic operators.',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 50,
    codeSnippet: `from operator import add
result = add(1, 2)`
  },
  {
    id: 'js207',
    title: 'JavaScript: SharedArrayBuffer',
    description: 'Create a raw binary data buffer that can be shared between workers.',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 85,
    codeSnippet: `// Requires cross-origin isolation
const buffer = new SharedArrayBuffer(1024);`
  },
  {
    id: 'java207',
    title: 'Java: `ConcurrentHashMap`',
    description: 'Use a thread-safe hash map.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 65,
    codeSnippet: `Map<String, String> map = new ConcurrentHashMap<>();
map.put("key", "value");`
  },
  {
    id: 'cpp207',
    title: 'C++: `std::enable_shared_from_this`',
    description: 'Safely get a `shared_ptr` from `this`.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 90,
    codeSnippet: `struct Good : std::enable_shared_from_this<Good> {
    std::shared_ptr<Good> getptr() {
        return shared_from_this();
    }
};`
  },
  {
    id: 'php207',
    title: 'PHP: `$_GET` Superglobal',
    description: 'Collect form data sent with the GET method.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `<?php
echo "Hello " . $_GET['name'];
?>`
  },
  {
    id: 'py208',
    title: 'Python: `weakref` module',
    description: 'Create a weak reference to an object.',
    language: 'python',
    difficulty: 'Advanced',
    xp: 65,
    codeSnippet: `import weakref
class MyClass: pass
a = MyClass()
r = weakref.ref(a)`
  },
  {
    id: 'js208',
    title: 'JavaScript: Atomics object',
    description: 'Perform atomic operations on SharedArrayBuffer objects.',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 80,
    codeSnippet: `const sab = new SharedArrayBuffer(16);
const int32 = new Int32Array(sab);
Atomics.add(int32, 0, 2);`
  },
  {
    id: 'java208',
    title: 'Java: MethodHandle',
    description: 'Use a typed, directly executable reference to a method.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 90,
    codeSnippet: `MethodHandles.Lookup lookup = MethodHandles.lookup();
MethodHandle mh = lookup.findVirtual(String.class, "length", MethodType.methodType(int.class));`
  },
  {
    id: 'cpp208',
    title: 'C++: Rule of Zero',
    description: 'If a class manages no resources, it likely needs no custom destructor or copy/move operations.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 75,
    codeSnippet: `class C { /* complex logic but no raw pointers */ C(const C&); };
// This class should probably follow the Rule of Zero.`
  },
  {
    id: 'php208',
    title: 'PHP: Form Validation',
    description: 'Sanitize and validate user input from a form.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `<?php
$name = $_POST['name'];
if (empty($name)) {
  echo "Name is empty";
} else {
  echo $name;
}
?>`
  },
  {
    id: 'py209',
    title: 'Python: Context Managers',
    description: 'Create a class-based context manager.',
    language: 'python',
    difficulty: 'Advanced',
    xp: 65,
    codeSnippet: `class MyContext:
    def __enter__(self):
        # Setup code
    def __exit__(self, exc_type, exc_val, exc_tb):
        # Teardown code`
  },
  {
    id: 'js209',
    title: 'JavaScript: FinalizationRegistry',
    description: 'Register callbacks to be invoked when an object is garbage-collected.',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 70,
    codeSnippet: `const registry = new FinalizationRegistry(heldValue => {
  // cleanup
});
const obj = {};
registry.register(obj, "some value");`
  },
  {
    id: 'java209',
    title: 'Java: `CyclicBarrier`',
    description: 'Enable a set of threads to all wait for each other to reach a common barrier point.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 75,
    codeSnippet: `CyclicBarrier barrier = new CyclicBarrier(2);
// Thread 1
barrier.await();
// Thread 2
barrier.await();`
  },
  {
    id: 'cpp209',
    title: 'C++: `std::scoped_lock`',
    description: 'Acquire multiple mutexes in a deadlock-safe way.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 85,
    codeSnippet: `std::mutex m1, m2;
std::scoped_lock lock(m1, m2);
// m1 and m2 are locked`
  },
  {
    id: 'php209',
    title: 'PHP: Form Required Fields',
    description: 'Check for empty required fields in a form submission.',
    language: 'php',
    difficulty: 'Beginner',
    xp: 30,
    codeSnippet: `<?php
$nameErr = "";
if (empty($_POST["name"])) {
  $nameErr = "Name is required";
}
?>`
  },
  {
    id: 'py210',
    title: 'Python: `itertools.groupby`',
    description: 'Group consecutive elements of an iterable.',
    language: 'python',
    difficulty: 'Advanced',
    xp: 65,
    codeSnippet: `# Group [1, 1, 2, 2, 1]
// Groups into (1, [1,1]), (2, [2,2]), (1, [1])`
  },
  {
    id: 'js210',
    title: 'JavaScript: `Temporal` API (proposal)',
    description: 'Use the modern API for dates and times.',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `const date = Temporal.PlainDate.from('2024-01-01');
const duration = Temporal.Duration.from({ days: 5 });`
  },
  {
    id: 'java210',
    title: 'Java: `Phaser`',
    description: 'Use a more flexible reusable barrier.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 80,
    codeSnippet: `Phaser phaser = new Phaser(1);
phaser.arriveAndAwaitAdvance();`
  },
  {
    id: 'cpp210',
    title: 'C++: `std::atomic_flag`',
    description: 'Use a simple atomic boolean type.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 75,
    codeSnippet: `#include <atomic>
std::atomic_flag lock = ATOMIC_FLAG_INIT;
while (lock.test_and_set(std::memory_order_acquire)) {}`
  },
  {
    id: 'php210',
    title: 'PHP: Form URL/E-mail Validation',
    description: 'Validate e-mail and URL formats.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `<?php
$email = $_POST["email"];
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $emailErr = "Invalid email format";
}
?>`
  },
  {
    id: 'py211',
    title: 'Python: `any` and `all`',
    description: 'Check if any or all elements of an iterable are true.',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `numbers = [1, 2, 3, -5]
print(any(n < 0 for n in numbers))
print(all(n > 0 for n in numbers))`
  },
  {
    id: 'js211',
    title: 'JavaScript: `with` statement (discouraged)',
    description: 'Extend the scope chain for a statement.',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 30,
    codeSnippet: `with (Math) {
  console.log(PI * pow(2, 3));
}`
  },
  {
    id: 'java211',
    title: 'Java: `ReadWriteLock`',
    description: 'Allow multiple readers or one writer.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 70,
    codeSnippet: `ReadWriteLock rwLock = new ReentrantReadWriteLock();
rwLock.readLock().lock();
// ...
rwLock.readLock().unlock();`
  },
  {
    id: 'cpp211',
    title: 'C++: `std::bind`',
    description: 'Generate a forwardign call wrapper for a function.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 70,
    codeSnippet: `using namespace std::placeholders;
auto bound_func = std::bind(my_func, _1, 5);
bound_func(10);`
  },
  {
    id: 'php211',
    title: 'PHP: Form Keep Values',
    description: 'Keep the values in the form fields after submission.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `<input type="text" name="name" value="<?php echo $name;?>">`
  },
  {
    id: 'py212',
    title: 'Python: `__eq__` and `__hash__`',
    description: 'Implement equality and hashing for a custom class.',
    language: 'python',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    def __hash__(self):
        return hash((self.x, self.y))`
  },
  {
    id: 'js212',
    title: 'JavaScript: `label` statement',
    description: 'Provide an identifier for a loop or block statement.',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1) continue outer;
  }
}`
  },
  {
    id: 'java212',
    title: 'Java: `CountDownLatch`',
    description: 'Allow one or more threads to wait until a set of operations completes.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 70,
    codeSnippet: `CountDownLatch latch = new CountDownLatch(3);
latch.countDown();
latch.await();`
  },
  {
    id: 'cpp212',
    title: 'C++: SFINAE',
    description: 'Substitution Failure Is Not An Error.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 90,
    codeSnippet: `template <typename T>
typename std::enable_if<std::is_integral<T>::value>::type
foo(T t) { /* ... */ }`
  },
  {
    id: 'php212',
    title: 'PHP: Complete Form Example',
    description: 'Assemble a complete and secure PHP form.',
    language: 'php',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `<?php
$name = "";
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
}
?>`
  },
  {
    id: 'py213',
    title: 'Python: `asyncio`',
    description: 'Write asynchronous code using async/await syntax.',
    language: 'python',
    difficulty: 'Advanced',
    xp: 65,
    codeSnippet: `import asyncio

async def main():
    print('hello')
    await asyncio.sleep(1)
    print('world')`
  },
  {
    id: 'js213',
    title: 'JavaScript: `Object.seal()`',
    description: 'Seal an object, preventing new properties from being added.',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `const obj = { prop: 'val' };
Object.seal(obj);
obj.prop = 'new val'; // OK
delete obj.prop; // Fails`
  },
  {
    id: 'java213',
    title: 'Java: `Semaphore`',
    description: 'Use a counting semaphore to control access to a resource.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 65,
    codeSnippet: `Semaphore semaphore = new Semaphore(1);
semaphore.acquire();
// ...
semaphore.release();`
  },
  {
    id: 'cpp213',
    title: 'C++: Variadic Templates',
    description: 'Create a template that takes a variable number of arguments.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 70,
    codeSnippet: `template<typename... Args>
void my_printf(const std::string& format, Args... args);`
  },
  {
    id: 'php213',
    title: 'PHP: `date()` Function',
    description: 'Format a local date and time.',
    language: 'php',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `<?php
echo "Today is " . date("Y-m-d");
?>`
  },
  {
    id: 'py214',
    title: 'Python: `typing.Final`',
    description: 'Indicate that a name cannot be reassigned.',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `from typing import Final
RATE: Final[int] = 42`
  },
  {
    id: 'js214',
    title: 'JavaScript: `Reflect` API',
    description: 'Use the `Reflect` object to perform fundamental operations.',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 65,
    codeSnippet: `const duck = { name: 'Maurice' };
if (Reflect.has(duck, 'name')) {
  console.log('Property found');
}`
  },
  {
    id: 'java214',
    title: 'Java: `AtomicInteger`',
    description: 'Perform atomic operations on an integer value.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 65,
    codeSnippet: `import java.util.concurrent.atomic.AtomicInteger;
AtomicInteger atomicInt = new AtomicInteger(0);
atomicInt.incrementAndGet();`
  },
  {
    id: 'cpp214',
    title: 'C++: SFINAE with `enable_if`',
    description: 'Conditionally remove a function from overload resolution.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 90,
    codeSnippet: `template <typename T>
typename std::enable_if<std::is_integral<T>::value, bool>::type
is_even(T i) { return i % 2 == 0; }`
  },
  {
    id: 'php214',
    title: 'PHP: File Handling `fopen`',
    description: 'Open a file for reading.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("webdictionary.txt"));
fclose($myfile);
?>`
  },
  {
    id: 'py215',
    title: 'Python: `multiprocessing`',
    description: 'Create and run a new process.',
    language: 'python',
    difficulty: 'Advanced',
    xp: 65,
    codeSnippet: `from multiprocessing import Process

def f(name):
    print('hello', name)

if __name__ == '__main__':
    p = Process(target=f, args=('bob',))
    p.start()`
  },
  {
    id: 'js215',
    id: 'js215',
    title: 'JavaScript: `Geolocation` API',
    description: 'Get the geographical position of a user.',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `navigator.geolocation.getCurrentPosition(pos => {
  console.log(pos.coords.latitude);
});`
  },
  {
    id: 'java215',
    title: 'Java: `CompletableFuture`',
    description: 'Create an asynchronous computation.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 70,
    codeSnippet: `CompletableFuture<String> future
  = CompletableFuture.supplyAsync(() -> "Hello");`
  },
  {
    id: 'cpp215',
    title: 'C++: Fold Expressions (C++17)',
    description: 'Reduce a parameter pack over an operator.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 70,
    codeSnippet: `template<typename... Args>
bool all(Args... args) { return (... && args); }`
  },
  {
    id: 'php215',
    title: 'PHP: File Create/Write',
    description: 'Create and write to a new file.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `<?php
$myfile = fopen("newfile.txt", "w");
$txt = "John Doe\\n";
fwrite($myfile, $txt);
fclose($myfile);
?>`
  },
  {
    id: 'py216',
    title: 'Python: `heapq` module',
    description: 'Use a min-heap implementation.',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 50,
    codeSnippet: `import heapq
heap = []
heapq.heappush(heap, 4)
heapq.heappush(heap, 1)
heapq.heappop(heap) // returns 1`
  },
  {
    id: 'js216',
    title: 'JavaScript: `IntersectionObserver`',
    description: 'Asynchronously observe changes in the intersection of a target element with an ancestor element.',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `let observer = new IntersectionObserver(callback, options);
observer.observe(target);`
  },
  {
    id: 'java216',
    title: 'Java: `Thread.sleep`',
    description: 'Pause the current thread for a specified amount of time.',
    language: 'java',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `try {
  Thread.sleep(1000);
} catch (InterruptedException e) {
  // handle
}`
  },
  {
    id: 'cpp216',
    title: 'C++: `std::thread`',
    description: 'Create and run a new thread.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `#include <thread>
void thread_function() {
    // Do something
}
std::thread t(thread_function);
t.join();`
  },
  {
    id: 'php216',
    title: 'PHP: Uploading Files',
    description: 'Create a form to allow users to upload files.',
    language: 'php',
    difficulty: 'Advanced',
    xp: 55,
    codeSnippet: `<form action="upload.php" method="post" enctype="multipart/form-data">
  Select image to upload:
  <input type="file" name="fileToUpload">
</form>`
  },
  {
    id: 'py217',
    title: 'Python: `collections.ChainMap`',
    description: 'Group multiple dicts or other mappings together to create a single, updateable view.',
    language: 'python',
    difficulty: 'Advanced',
    xp: 55,
    codeSnippet: `from collections import ChainMap
dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}
chain = ChainMap(dict1, dict2)`
  },
  {
    id: 'js217',
    title: 'JavaScript: `MutationObserver`',
    description: 'Watch for changes being made to the DOM tree.',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 70,
    codeSnippet: `const observer = new MutationObserver(mutations => {});
observer.observe(targetNode, { attributes: true, childList: true });`
  },
  {
    id: 'java217',
    title: 'Java: `volatile` keyword',
    description: 'Ensure that changes to a variable are always visible to other threads.',
    language: 'java',
    difficulty: 'Advanced',
    xp: 70,
    codeSnippet: `private volatile boolean stop = false;
// Thread 1: while(!stop){}
// Thread 2: stop = true;`
  },
  {
    id: 'cpp217',
    title: 'C++: `std::mutex`',
    description: 'Use a mutex to protect shared data.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 65,
    codeSnippet: `#include <mutex>
std::mutex m;
m.lock();
// critical section
m.unlock();`
  },
  {
    id: 'php217',
    title: 'PHP: Session Variables',
    description: 'Start a session and store some values.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `<?php
session_start();
$_SESSION["favcolor"] = "green";
?>`
  },
  {
    id: 'py218',
    title: 'Python: `__getitem__`',
    description: 'Implement evaluation of `self[key]`.',
    language: 'python',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `class MyList:
    def __getitem__(self, index):
        return index * 10`
  },
  {
    id: 'js218',
    title: 'JavaScript: postMessage API',
    description: 'Enable cross-origin communication between Window objects.',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 65,
    codeSnippet: `// In window A
otherWindow.postMessage('Hello', 'http://example.com');
// In window B
window.addEventListener('message', event => { /*...*/ });`
  },
  {
    id: 'java218',
    title: 'Java: `synchronized` block',
    description: 'Synchronize access to a block of code.',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `public void myMethod() {
    synchronized(this) {
        // critical section
    }
}`
  },
  {
    id: 'cpp218',
    title: 'C++: `std::condition_variable`',
    description: 'Use a condition variable to block a thread until notified.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 80,
    codeSnippet: `std::condition_variable cv;
std::mutex m;
std::unique_lock<std::mutex> lock(m);
cv.wait(lock);`
  },
  {
    id: 'php218',
    title: 'PHP: `filter_var`',
    description: 'Filter a variable with a specified filter.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `<?php
$email = "john.doe@example.com";
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo("$email is a valid email address");
}
?>`
  },
  {
    id: 'py219',
    title: 'Python: `functools.wraps`',
    description: 'Update a wrapper function to look like the wrapped function.',
    language: 'python',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `from functools import wraps
def my_decorator(f):
    @wraps(f)
    def wrapper(*args, **kwds):
        return f(*args, **kwds)
    return wrapper`
  },
  {
    id: 'js219',
    title: 'JavaScript: `Proxy` traps',
    description: 'Define custom behavior for fundamental operations.',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 80,
    codeSnippet: `const handler = {
  get: function(target, prop, receiver) {
    return 'intercepted';
  }
};`
  },
  {
    id: 'java219',
    title: 'Java: `TreeMap`',
    description: 'Use a Red-Black tree-based NavigableMap implementation.',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 50,
    codeSnippet: `// Sorted map
Map<String, Integer> map = new TreeMap<>();
map.put("c", 1);
map.put("a", 2);`
  },
  {
    id: 'cpp219',
    title: 'C++: `std::future` and `std::promise`',
    description: 'Communicate a result between two threads.',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 85,
    codeSnippet: `std::promise<int> p;
std::future<int> f = p.get_future();
p.set_value(42);`
  },
  {
    id: 'php219',
    title: 'PHP: `json_encode`',
    description: 'Encode a PHP value into a JSON string.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `<?php
$arr = array('a' => 1, 'b' => 2);
echo json_encode($arr);
?>`
  },
  {
    id: 'py220',
    title: 'Python: `abc` module',
    description: 'Define an Abstract Base Class.',
    language: 'python',
    difficulty: 'Advanced',
    xp: 65,
    codeSnippet: `from abc import ABC, abstractmethod
class MyABC(ABC):
    @abstractmethod
    def my_method(self):
        pass`
  },
  {
    id: 'js220',
    title: 'JavaScript: `eval()` (discouraged)',
    description: 'Evaluate a string as JavaScript code.',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 70,
    codeSnippet: `eval("alert('hi')");`
  },
  {
    id: 'java220',
    title: 'Java: `LinkedHashMap`',
    description: 'Use a map that maintains insertion order.',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 50,
    codeSnippet: `// Maintains insertion order
Map<String, Integer> map = new LinkedHashMap<>();`
  },
  {
    id: 'cpp220',
    title: 'C++: `using` for type aliases (C++11)',
    description: 'Create a type alias.',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 30,
    codeSnippet: `using IntVector = std::vector<int>;
IntVector v;`
  },
  {
    id: 'php220',
    title: 'PHP: `json_decode`',
    description: 'Decode a JSON string into a PHP variable.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `<?php
$json = '{"a":1,"b":2}';
var_dump(json_decode($json));
?>`
  },
  {
    id: 'py221',
    title: 'Python: slice assignment',
    description: 'Replace a slice of a list with another list.',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `l = [1, 2, 3, 4]
l[1:3] = [8, 9, 10]
print(l)`
  },
  {
    id: 'js221',
    title: 'JavaScript: `Function.prototype.bind`',
    description: 'Create a new function with a bound `this` context.',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 50,
    codeSnippet: `function log() { console.log(this.id); }
const obj1 = { id: 1 };
const boundLog = log.bind(obj1);
boundLog();`
  },
  {
    id: 'java221',
    title: 'Java: `PriorityQueue`',
    description: 'Use an unbounded priority queue based on a priority heap.',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 55,
    codeSnippet: `Queue<Integer> pq = new PriorityQueue<>();
pq.add(10);
pq.add(1);`
  },
  {
    id: 'cpp221',
    title: 'C++: `static` members',
    description: 'Define a member that is shared by all instances of a class.',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `class MyClass {
public:
    static int myStatic;
};
int MyClass::myStatic = 0;`
  },
  {
    id: 'php221',
    title: 'PHP: Heredoc Syntax',
    description: 'Create a multi-line string.',
    language: 'php',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `<?php
$str = <<<EOD
Example of string
spanning multiple lines.
EOD;
echo $str;
?>`
  }
];

    