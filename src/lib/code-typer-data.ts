
import type { CodeTyperChallenge } from '@/lib/types';

export const codeTyperChallenges: CodeTyperChallenge[] = [
  {
    id: 'ct1',
    title: 'JavaScript FizzBuzz',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 15,
    snippet: `for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}`
  },
  {
    id: 'ct2',
    title: 'Python Quick Sort',
    language: 'python',
    difficulty: 'Advanced',
    xp: 50,
    snippet: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)`
  },
  {
    id: 'ct3',
    title: 'Java Hello World',
    language: 'java',
    difficulty: 'Beginner',
    xp: 10,
    snippet: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
  },
  {
    id: 'ct4',
    title: 'C++ Factorial',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `#include <iostream>

unsigned long long factorial(int n) {
    if (n < 0)
        return 0; // Or throw an exception
    if (n == 0)
        return 1;
    else
        return n * factorial(n - 1);
}`
  },
  {
    id: 'ct5',
    title: 'JavaScript Fetch API',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 35,
    snippet: `async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}`
  },
  {
    id: 'ct6',
    title: 'Python List Comprehension',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    snippet: `squares = [x**2 for x in range(10)]
even_numbers = [x for x in range(20) if x % 2 == 0]`
  },
  {
    id: 'ct7',
    title: 'Java Simple Loop',
    language: 'java',
    difficulty: 'Beginner',
    xp: 15,
    snippet: `for (int i = 0; i < 5; i++) {
    System.out.println("Iteration: " + i);
}`
  },
  {
    id: 'ct8',
    title: 'C++ Hello World',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 10,
    snippet: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`
  },
  {
    id: 'ct9',
    title: 'JavaScript Array Map',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 20,
    snippet: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);`
  },
  {
    id: 'ct10',
    title: 'Python Dictionary',
    language: 'python',
    difficulty: 'Beginner',
    xp: 15,
    snippet: `person = {
    "name": "Alex",
    "age": 30,
    "city": "New York"
}
print(person["name"])`
  },
  {
    id: 'ct11',
    title: 'Java Class',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `class Dog {
    String breed;
    int age;

    public Dog(String breed) {
        this.breed = breed;
        this.age = 0;
    }

    void bark() {
        System.out.println("Woof!");
    }
}`
  },
  {
    id: 'ct12',
    title: 'C++ Vector',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 25,
    snippet: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    for(int num : numbers) {
        std::cout << num << " ";
    }
    return 0;
}`
  },
  {
    id: 'ct13',
    title: 'JavaScript Promises',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `const myPromise = new Promise((resolve, reject) => {
    let condition = true;
    if(condition) {
        resolve("Promise is resolved!");
    } else {
        reject("Promise is rejected!");
    }
});`
  },
  {
    id: 'ct14',
    title: 'Python File Handling',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 35,
    snippet: `try:
    with open('myfile.txt', 'w') as f:
        f.write('Hello, file world!')
except IOError:
    print('Error: could not write to file')`
  },
  {
    id: 'ct15',
    title: 'Java ArrayList',
    language: 'java',
    difficulty: 'Beginner',
    xp: 20,
    snippet: `import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        ArrayList<String> cars = new ArrayList<String>();
        cars.add("Volvo");
        cars.add("BMW");
        System.out.println(cars);
    }
}`
  },
  {
    id: 'ct16',
    title: 'C++ Struct',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 20,
    snippet: `struct Person {
    std::string name;
    int age;
};`
  },
  {
    id: 'ct17',
    title: 'JavaScript Arrow Function',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 15,
    snippet: `const greet = (name) => {
    return "Hello, " + name + "!";
};`
  },
  {
    id: 'ct18',
    title: 'Python Lambda Function',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 25,
    snippet: `x = lambda a, b : a * b
print(x(5, 6))`
  },
  {
    id: 'ct19',
    title: 'Java Method Overloading',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 35,
    snippet: `static int plusMethod(int x, int y) {
  return x + y;
}

static double plusMethod(double x, double y) {
  return x + y;
}`
  },
  {
    id: 'ct20',
    title: 'C++ Function Overloading',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}`
  },
  {
    id: 'ct21',
    title: 'JavaScript Higher-Order Function',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 50,
    snippet: `function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = multiplyBy(2);
console.log(double(5));`
  },
  {
    id: 'ct22',
    title: 'Python Decorator',
    language: 'python',
    difficulty: 'Advanced',
    xp: 55,
    snippet: `def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")`
  },
  {
    id: 'ct23',
    title: 'Java Interface',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `interface Animal {
    public void animalSound();
    public void sleep();
}

class Pig implements Animal {
    public void animalSound() {
        System.out.println("The pig says: wee wee");
    }
    public void sleep() {
        System.out.println("Zzz");
    }
}`
  },
  {
    id: 'ct24',
    title: 'C++ Pointers',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 35,
    snippet: `std::string food = "Pizza";
std::string* ptr = &food;
std::cout << *ptr;`
  },
  {
    id: 'ct25',
    title: 'JavaScript Destructuring',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 25,
    snippet: `const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50
};
let { firstName, age } = person;`
  },
  {
    id: 'ct26',
    title: 'Python Try Except',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    snippet: `try:
  print(x)
except NameError:
  print("Variable x is not defined")
except:
  print("Something else went wrong")`
  },
  {
    id: 'ct27',
    title: 'Java HashMap',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `import java.util.HashMap;

HashMap<String, String> capitalCities = new HashMap<String, String>();
capitalCities.put("England", "London");
capitalCities.put("Germany", "Berlin");`
  },
  {
    id: 'ct28',
    title: 'C++ Class',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `class MyClass {
  public:
    int myNum;
    std::string myString;
};

int main() {
  MyClass myObj;
  myObj.myNum = 15;
  myObj.myString = "Some text";
  return 0;
}`
  },
  {
    id: 'ct29',
    title: 'JavaScript Spread Operator',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `const arr1 = ['a', 'b'];
const arr2 = [...arr1, 'c', 'd'];
console.log(arr2);`
  },
  {
    id: 'ct30',
    title: 'Python Set',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    snippet: `my_set = {"apple", "banana", "cherry"}
my_set.add("orange")
my_set.remove("banana")`
  },
  {
    id: 'ct31',
    title: 'Java Generics',
    language: 'java',
    difficulty: 'Advanced',
    xp: 45,
    snippet: `class Box<T> {
   private T t;

   public void add(T t) {
      this.t = t;
   }

   public T get() {
      return t;
   }
}`
  },
  {
    id: 'ct32',
    title: 'C++ Templates',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 50,
    snippet: `template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    std::cout << max<int>(3, 7);
    return 0;
}`
  },
  {
    id: 'ct33',
    title: 'JavaScript Async/Await',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 45,
    snippet: `async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
        setTimeout(function() {resolve("I love You !!");}, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
}`
  },
  {
    id: 'ct34',
    title: 'Python Pip Install',
    language: 'python',
    difficulty: 'Beginner',
    xp: 10,
    snippet: `# This is a command line snippet
pip install requests`
  },
  {
    id: 'ct35',
    title: 'Java Enums',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 25,
    snippet: `enum Level {
  LOW,
  MEDIUM,
  HIGH
}

Level myVar = Level.MEDIUM;`
  },
  {
    id: 'ct36',
    title: 'C++ Namespace',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 25,
    snippet: `namespace my_namespace {
    int value = 5;
}

int main() {
    std::cout << my_namespace::value;
    return 0;
}`
  },
  {
    id: 'ct37',
    title: 'JavaScript Local Storage',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    snippet: `// Store
localStorage.setItem("lastname", "Smith");

// Retrieve
let name = localStorage.getItem("lastname");`
  },
  {
    id: 'ct38',
    title: 'Python Binary Search',
    language: 'python',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `def binary_search(arr, low, high, x):
    if high >= low:
        mid = (high + low) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] > x:
            return binary_search(arr, low, mid - 1, x)
        else:
            return binary_search(arr, mid + 1, high, x)
    else:
        return -1`
  },
  {
    id: 'ct39',
    title: 'Java Recursion',
    language: 'java',
    difficulty: 'Advanced',
    xp: 50,
    snippet: `public static int sum(int k) {
  if (k > 0) {
    return k + sum(k - 1);
  } else {
    return 0;
  }
}`
  },
  {
    id: 'ct40',
    title: 'C++ File I/O',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 55,
    snippet: `#include <iostream>
#include <fstream>

int main () {
  std::ofstream myfile;
  myfile.open ("example.txt");
  myfile << "Writing this to a file.\\n";
  myfile.close();
  return 0;
}`
  },
  {
    id: 'ct41',
    title: 'JavaScript Filter',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 20,
    snippet: `const ages = [32, 33, 16, 40];
const result = ages.filter(age => age >= 18);`
  },
  {
    id: 'ct42',
    title: 'Python Class Inheritance',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 35,
    snippet: `class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)`
  },
  {
    id: 'ct43',
    title: 'Java Inheritance',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `class Vehicle {
  protected String brand = "Ford";
}

class Car extends Vehicle {
  private String modelName = "Mustang";
}`
  },
  {
    id: 'ct44',
    title: 'C++ Inheritance',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `class Vehicle {
  public:
    std::string brand = "Ford";
};

class Car: public Vehicle {
  public:
    std::string model = "Mustang";
};`
  },
  {
    id: 'ct45',
    title: 'JavaScript Ternary Operator',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 15,
    snippet: `let age = 19;
let voteable = (age < 18) ? "Too young":"Old enough";`
  },
  {
    id: 'ct46',
    title: 'Python JSON',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `import json

x = '{ "name":"John", "age":30, "city":"New York"}'
y = json.loads(x)`
  },
  {
    id: 'ct47',
    title: 'Java Lambda Expressions',
    language: 'java',
    difficulty: 'Advanced',
    xp: 50,
    snippet: `ArrayList<Integer> numbers = new ArrayList<Integer>();
numbers.add(5);
numbers.add(9);
numbers.forEach( (n) -> { System.out.println(n); } );`
  },
  {
    id: 'ct48',
    title: 'C++ Smart Pointers',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `#include <memory>

std::unique_ptr<int> p1(new int(5));
std::shared_ptr<int> p2 = std::make_shared<int>(10);`
  },
  {
    id: 'ct49',
    title: 'JavaScript Classes',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}`
  },
  {
    id: 'ct50',
    title: 'Python Regular Expressions',
    language: 'python',
    difficulty: 'Advanced',
    xp: 45,
    snippet: `import re

txt = "The rain in Spain"
x = re.search("^The.*Spain$", txt)`
  }
];
