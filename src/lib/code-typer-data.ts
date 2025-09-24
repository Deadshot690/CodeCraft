
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
  },
  {
    id: 'ct51',
    title: 'Java Abstract Class',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `abstract class Animal {
  public abstract void animalSound();
  public void sleep() {
    System.out.println("Zzz");
  }
}`
  },
  {
    id: 'ct52',
    title: 'C++ Virtual Function',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 55,
    snippet: `class Base {
public:
    virtual void print() { std::cout << "Base Function" << std::endl; }
};
class Derived : public Base {
public:
    void print() override { std::cout << "Derived Function" << std::endl; }
};`
  },
  {
    id: 'ct53',
    title: 'Python Generator',
    language: 'python',
    difficulty: 'Advanced',
    xp: 50,
    snippet: `def my_generator():
    for i in range(5):
        yield i

for value in my_generator():
    print(value)`
  },
  {
    id: 'ct54',
    title: 'JavaScript Callback',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}`
  },
  {
    id: 'ct55',
    title: 'Java Thread',
    language: 'java',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `public class MyThread extends Thread {
  public void run() {
    System.out.println("This code is running in a thread");
  }
}`
  },
  {
    id: 'ct56',
    title: 'C++ Dynamic Memory',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `int* ptr = new int;
*ptr = 20;
cout << "Value of ptr: " << *ptr;
delete ptr;`
  },
  {
    id: 'ct57',
    title: 'Python Dataclasses',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int`
  },
  {
    id: 'ct58',
    title: 'JavaScript Array Reduce',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 35,
    snippet: `const numbers = [175, 50, 25];
const result = numbers.reduce((total, num) => total - num);`
  },
  {
    id: 'ct59',
    title: 'Java Try-Catch',
    language: 'java',
    difficulty: 'Beginner',
    xp: 25,
    snippet: `try {
  int[] myNumbers = {1, 2, 3};
  System.out.println(myNumbers[10]);
} catch (Exception e) {
  System.out.println("Something went wrong.");
}`
  },
  {
    id: 'ct60',
    title: 'C++ Standard Template Library (STL)',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `#include <vector>
#include <algorithm>

std::vector<int> vec = {3, 1, 4, 1, 5, 9};
std::sort(vec.begin(), vec.end());`
  },
  {
    id: 'ct61',
    title: 'Python Set Operations',
    language: 'python',
    difficulty: 'Beginner',
    xp: 25,
    snippet: `set1 = {1, 2, 3}
set2 = {3, 4, 5}
union_set = set1.union(set2)
intersection_set = set1.intersection(set2)`
  },
  {
    id: 'ct62',
    title: 'JavaScript Nullish Coalescing Operator',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `const foo = null ?? 'default string';
const bar = 0 ?? 42;`
  },
  {
    id: 'ct63',
    title: 'Java Streams',
    language: 'java',
    difficulty: 'Advanced',
    xp: 55,
    snippet: `List<String> list = Arrays.asList("a", "b", "c");
List<String> upperList = list.stream()
                               .map(String::toUpperCase)
                               .collect(Collectors.toList());`
  },
  {
    id: 'ct64',
    title: 'C++ R-value References',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `void myFunction(int&& val) {
    // Function that takes an r-value reference
}`
  },
  {
    id: 'ct65',
    title: 'Python Context Manager',
    language: 'python',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `class MyContextManager:
    def __enter__(self):
        print("Entering context")
        return self
    def __exit__(self, exc_type, exc_value, traceback):
        print("Exiting context")`
  },
  {
    id: 'ct66',
    title: 'JavaScript Object Freeze',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `const obj = {
  prop: 42
};
Object.freeze(obj);
obj.prop = 33; // Throws an error in strict mode`
  },
  {
    id: 'ct67',
    title: 'Java Final Keyword',
    language: 'java',
    difficulty: 'Beginner',
    xp: 20,
    snippet: `final int MY_CONSTANT = 15;
// MY_CONSTANT = 20; // this will cause an error`
  },
  {
    id: 'ct68',
    title: 'C++ Const Correctness',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `class MyClass {
    int value;
public:
    int getValue() const { return value; } // const member function
};`
  },
  {
    id: 'ct69',
    title: 'Python `*args` and `**kwargs`',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `def my_func(*args, **kwargs):
    for arg in args:
        print(arg)
    for key, value in kwargs.items():
        print(f"{key}: {value}")`
  },
  {
    id: 'ct70',
    title: 'JavaScript Optional Chaining',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};
const dogName = adventurer.dog?.name;`
  },
  {
    id: 'ct71',
    title: 'Java `synchronized` Keyword',
    language: 'java',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `public class Counter {
    private int count = 0;
    public synchronized void increment() {
        count++;
    }
}`
  },
  {
    id: 'ct72',
    title: 'C++ `std::async`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 70,
    snippet: `#include <future>
int my_task() { return 42; }
auto future = std::async(my_task);
int result = future.get();`
  },
  {
    id: 'ct73',
    title: 'Python `__main__`',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    snippet: `def main():
    print("This is the main function.")

if __name__ == "__main__":
    main()`
  },
  {
    id: 'ct74',
    title: 'JavaScript `Array.includes`',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 15,
    snippet: `const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('at'));`
  },
  {
    id: 'ct75',
    title: 'Java `StringBuilder`',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 35,
    snippet: `StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
String result = sb.toString();`
  },
  {
    id: 'ct76',
    title: 'C++ RAII',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 75,
    snippet: `class FileHandle {
    FILE* p;
public:
    FileHandle(const char* name, const char* mode) : p(fopen(name, mode)) {}
    ~FileHandle() { if (p) fclose(p); }
};`
  },
  {
    id: 'ct77',
    title: 'Python f-strings',
    language: 'python',
    difficulty: 'Beginner',
    xp: 15,
    snippet: `name = "Eric"
age = 74
print(f"Hello, {name}. You are {age}.")`
  },
  {
    id: 'ct78',
    title: 'JavaScript `Set` Data Structure',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    snippet: `const mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add({a: 1, b: 2});`
  },
  {
    id: 'ct79',
    title: 'Java Varargs',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `public static void printNumbers(int... numbers) {
    for (int number : numbers) {
        System.out.println(number);
    }
}`
  },
  {
    id: 'ct80',
    title: 'C++ Lambda Function',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `auto greet = []() {
    std::cout << "Hello, World!" << std::endl;
};
greet();`
  },
  {
    id: 'ct81',
    title: 'Python `enumerate`',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    snippet: `seasons = ['Spring', 'Summer', 'Fall', 'Winter']
for index, season in enumerate(seasons):
    print(index, season)`
  },
  {
    id: 'ct82',
    title: 'JavaScript `Map` Data Structure',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
console.log(myMap.get('a'));`
  },
  {
    id: 'ct83',
    title: 'Java `Optional`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 50,
    snippet: `Optional<String> optional = Optional.of("bam");
optional.isPresent();        // true
optional.get();              // "bam"`
  },
  {
    id: 'ct84',
    title: 'C++ `std::move`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `std::string str = "Hello";
std::vector<std::string> v;
v.push_back(std::move(str)); // efficiently move string`
  },
  {
    id: 'ct85',
    title: 'Python `zip` function',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `questions = ['name', 'quest', 'favorite color']
answers = ['lancelot', 'the holy grail', 'blue']
for q, a in zip(questions, answers):
    print(f'What is your {q}? It is {a}.')`
  },
  {
    id: 'ct86',
    title: 'JavaScript Rest Parameters',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 35,
    snippet: `function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}`
  },
  {
    id: 'ct87',
    title: 'Java Static Block',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 35,
    snippet: `public class Test {
    static {
        System.out.println("Static block initialized.");
    }
}`
  },
  {
    id: 'ct88',
    title: 'C++ `static_cast`',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `float f = 3.14f;
int i = static_cast<int>(f);`
  },
  {
    id: 'ct89',
    title: 'Python `collections.defaultdict`',
    language: 'python',
    difficulty: 'Advanced',
    xp: 50,
    snippet: `from collections import defaultdict
s = [('yellow', 1), ('blue', 2), ('yellow', 3)]
d = defaultdict(list)
for k, v in s:
    d[k].append(v)`
  },
  {
    id: 'ct90',
    title: 'JavaScript `Array.flat()`',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `const arr1 = [1, 2, [3, 4]];
arr1.flat(); // [1, 2, 3, 4]`
  },
  {
    id: 'ct91',
    title: 'Java `record`',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `public record Point(int x, int y) { }`
  },
  {
    id: 'ct92',
    title: 'C++ `std::variant`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `std::variant<int, float> v;
v = 12;
int i = std::get<int>(v);`
  },
  {
    id: 'ct93',
    title: 'Python Type Hinting',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 35,
    snippet: `def greeting(name: str) -> str:
    return 'Hello ' + name`
  },
  {
    id: 'ct94',
    title: 'JavaScript `Proxy` object',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `const target = { message1: "hello" };
const handler = {};
const proxy = new Proxy(target, handler);`
  },
  {
    id: 'ct95',
    title: 'Java `try-with-resources`',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `try (BufferedReader br = new BufferedReader(new FileReader(path))) {
    return br.readLine();
}`
  },
  {
    id: 'ct96',
    title: 'C++ Structured Bindings',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 55,
    snippet: `std::map<int, std::string> myMap;
auto [iter, success] = myMap.insert({1, "one"});`
  },
  {
    id: 'ct97',
    title: 'Python `asyncio`',
    language: 'python',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `import asyncio

async def main():
    print('hello')
    await asyncio.sleep(1)
    print('world')`
  },
  {
    id: 'ct98',
    title: 'JavaScript `BigInt`',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `const theBiggestInt = 9007199254740991n;
const alsoHuge = BigInt(9007199254740991);`
  },
  {
    id: 'ct99',
    title: 'Java `Pattern` and `Matcher`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 50,
    snippet: `import java.util.regex.Pattern;
import java.util.regex.Matcher;

Pattern pattern = Pattern.compile("e.+d");
Matcher matcher = pattern.matcher("extend");`
  },
  {
    id: 'ct100',
    title: 'C++ `std::thread`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `#include <thread>
void thread_function() {
    // Do something
}
std::thread t(thread_function);
t.join();`
  },
  {
    id: 'ct101',
    title: 'Python `pathlib`',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `from pathlib import Path
p = Path('/etc')
q = p / 'init.d' / 'reboot'`
  },
  {
    id: 'ct102',
    title: 'JavaScript `WeakSet` and `WeakMap`',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `const ws = new WeakSet();
const obj1 = {};
ws.add(obj1); // Weakly held`
  },
  {
    id: 'ct103',
    title: 'Java `CompletableFuture`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 70,
    snippet: `CompletableFuture<String> future
  = CompletableFuture.supplyAsync(() -> "Hello");`
  },
  {
    id: 'ct104',
    title: 'C++ `std::filesystem`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `#include <filesystem>
namespace fs = std::filesystem;
fs::path p = "/path/to/file";
if (fs::exists(p)) {}`
  },
  {
    id: 'ct105',
    title: 'Python `itertools`',
    language: 'python',
    difficulty: 'Advanced',
    xp: 55,
    snippet: `import itertools
for i in itertools.count(10, 2):
    if i > 20: break
    print(i)`
  },
  {
    id: 'ct106',
    title: 'JavaScript `Object.entries`',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    snippet: `const object1 = { a: 'somestring', b: 42 };
for (const [key, value] of Object.entries(object1)) {
  console.log(key, value);
}`
  },
  {
    id: 'ct107',
    title: 'Java `AtomicInteger`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `import java.util.concurrent.atomic.AtomicInteger;
AtomicInteger atomicInt = new AtomicInteger(0);
atomicInt.incrementAndGet();`
  },
  {
    id: 'ct108',
    title: 'C++ `constexpr` function',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `constexpr int factorial(int n) {
    return n <= 1 ? 1 : (n * factorial(n - 1));
}`
  },
  {
    id: 'ct109',
    title: 'Python `namedtuple`',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(11, y=22)`
  },
  {
    id: 'ct110',
    title: 'JavaScript `Promise.allSettled`',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 55,
    snippet: `const promise1 = Promise.resolve(3);
const promise2 = new Promise((res, rej) => rej('foo'));
const promises = [promise1, promise2];
Promise.allSettled(promises).then(...)`
  },
  {
    id: 'ct111',
    title: 'Java `Predicate` Functional Interface',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `Predicate<String> hasLengthOf10 = s -> s.length() == 10;
boolean result = hasLengthOf10.test("Apple");`
  },
  {
    id: 'ct112',
    title: 'C++ `[[nodiscard]]` Attribute',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `[[nodiscard]] bool is_ok() {
    return true;
}`
  },
  {
    id: 'ct113',
    title: 'Python `functools.lru_cache`',
    language: 'python',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)`
  },
  {
    id: 'ct114',
    title: 'JavaScript `Generator` function',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}`
  },
  {
    id: 'ct115',
    title: 'Java `ExecutorService`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 70,
    snippet: `ExecutorService executor = Executors.newFixedThreadPool(10);
executor.submit(() -> {
    System.out.println("Task in thread");
});`
  },
  {
    id: 'ct116',
    title: 'C++ `std::optional`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 55,
    snippet: `std::optional<std::string> create_string(bool b) {
    if (b) return "Godzilla";
    return std::nullopt;
}`
  },
  {
    id: 'ct117',
    title: 'Python `any` and `all`',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `numbers = [1, 2, 3, -5]
print(any(n < 0 for n in numbers))
print(all(n > 0 for n in numbers))`
  },
  {
    id: 'ct118',
    title: 'JavaScript `Symbol` type',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 50,
    snippet: `const sym1 = Symbol();
const sym2 = Symbol('foo');
const sym3 = Symbol('foo');`
  },
  {
    id: 'ct119',
    title: 'Java `Default Methods` in Interfaces',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `interface MyInterface {
    void existingMethod();
    default void newDefaultMethod() {
        System.out.println("New default method");
    }
}`
  },
  {
    id: 'ct120',
    title: 'C++ `std::scoped_lock`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 75,
    snippet: `std::mutex m1, m2;
std::scoped_lock lock(m1, m2);
// m1 and m2 are locked`
  },
  {
    id: 'ct121',
    title: 'Python `collections.deque`',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `from collections import deque
d = deque('ghi')
d.append('j')
d.appendleft('f')`
  },
  {
    id: 'ct122',
    title: 'JavaScript `Intl.DateTimeFormat`',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `const date = new Date(Date.UTC(2020, 11, 20, 3, 0, 0));
const formatter = new Intl.DateTimeFormat('en-US');
console.log(formatter.format(date));`
  },
  {
    id: 'ct123',
    title: 'Java `sealed` classes',
    language: 'java',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `public abstract sealed class Shape 
    permits Circle, Rectangle { ... }`
  },
  {
    id: 'ct124',
    title: 'C++ `if constexpr`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 70,
    snippet: `template<typename T>
auto get_value(T t) {
    if constexpr (std::is_pointer_v<T>)
        return *t;
    else
        return t;
}`
  },
  {
    id: 'ct125',
    title: 'Python Walrus Operator `:=`',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `if (n := len(a)) > 10:
    print(f"List is too long ({n} elements, expected <= 10)")`
  },
  {
    id: 'ct126',
    title: 'JavaScript `Tagged templates`',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 55,
    snippet: `function tag(strings, ...values) {
  console.log(strings[0]); // "Hello "
  console.log(values[0]);  // 15
}`
  },
  {
    id: 'ct127',
    title: 'Java `switch` Expressions',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `int numLetters = switch (day) {
    case MONDAY, FRIDAY, SUNDAY -> 6;
    case TUESDAY -> 7;
    default -> 0;
};`
  },
  {
    id: 'ct128',
    title: 'C++ `std::any`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `auto a = std::any(12);
a = std::string("hello");
std::string s = std::any_cast<std::string>(a);`
  },
  {
    id: 'ct129',
    title: 'Python `property` decorator',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 50,
    snippet: `class C:
    def __init__(self):
        self._x = None
    @property
    def x(self):
        return self._x`
  },
  {
    id: 'ct130',
    title: 'JavaScript Dynamic `import()`',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 55,
    snippet: `const button = document.getElementById('btn');
button.addEventListener('click', () => {
  import('./utils.js').then(module => {
    module.doSomething();
  });
});`
  },
  {
    id: 'ct131',
    title: 'Java Text Blocks',
    language: 'java',
    difficulty: 'Beginner',
    xp: 30,
    snippet: `String html = """
              <html>
                  <body>
                      <p>Hello, world</p>
                  </body>
              </html>
              """;`
  },
  {
    id: 'ct132',
    title: 'C++ Coroutines',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 85,
    snippet: `generator<int> iota(int n = 0) {
  while(true)
    co_yield n++;
}`
  },
  {
    id: 'ct133',
    title: 'Python `__slots__`',
    language: 'python',
    difficulty: 'Advanced',
    xp: 55,
    snippet: `class MyClass:
    __slots__ = ['val1', 'val2']
    def __init__(self):
        self.val1 = 1
        self.val2 = 2`
  },
  {
    id: 'ct134',
    title: 'JavaScript Private Class Fields',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `class ClassWithPrivate {
  #privateField;
  constructor() {
    this.#privateField = 42;
  }
}`
  },
  {
    id: 'ct135',
    title: 'Java `instanceof` Pattern Matching',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `if (obj instanceof String s) {
    // s is a String and in scope
    System.out.println(s.toUpperCase());
}`
  },
  {
    id: 'ct136',
    title: 'C++ `std::string_view`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `void print_sv(std::string_view sv) {
    std::cout << sv << std::endl;
}
print_sv("Hello");`
  },
  {
    id: 'ct137',
    title: 'Python `async with`',
    language: 'python',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `async with lock:
    # critical section`
  },
  {
    id: 'ct138',
    title: 'JavaScript `Array.at()`',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 20,
    snippet: `const array1 = [5, 12, 8, 130, 44];
let index = 2;
let index_neg = -2;
console.log(array1.at(index));`
  },
  {
    id: 'ct139',
    title: 'Java `ReentrantLock`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `ReentrantLock lock = new ReentrantLock();
lock.lock();
try {
    // critical section
} finally {
    lock.unlock();
}`
  },
  {
    id: 'ct140',
    title: 'C++ Fold Expressions',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 70,
    snippet: `template<typename... Args>
bool all(Args... args) { return (... && args); }`
  },
  {
    id: 'ct141',
    title: 'Python `match` statement',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `match status:
    case 400:
        return "Bad request"
    case 404:
        return "Not found"
    case _:
        return "Something's wrong"`
  },
  {
    id: 'ct142',
    title: 'JavaScript Static Class Fields',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 35,
    snippet: `class ClassWithStaticField {
  static staticField = 'some value';
}`
  },
  {
    id: 'ct143',
    title: 'Java `Semaphore`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `Semaphore semaphore = new Semaphore(1);
semaphore.acquire();
// ...
semaphore.release();`
  },
  {
    id: 'ct144',
    title: 'C++ Concepts',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 80,
    snippet: `template<typename T>
concept Integral = std::is_integral_v<T>;
void my_func(Integral auto i) {}`
  },
  {
    id: 'ct145',
    title: 'Python `typing.Final`',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 35,
    snippet: `from typing import Final
RATE: Final[int] = 42`
  },
  {
    id: 'ct146',
    title: 'JavaScript `Object.hasOwn`',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `const object1 = { prop: 'exists' };
console.log(Object.hasOwn(object1, 'prop'));`
  },
  {
    id: 'ct147',
    title: 'Java `ReadWriteLock`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 70,
    snippet: `ReadWriteLock rwLock = new ReentrantReadWriteLock();
rwLock.readLock().lock();
// ...
rwLock.readLock().unlock();`
  },
  {
    id: 'ct148',
    title: 'C++ `std::jthread`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 70,
    snippet: `void foo() {}
std::jthread t(foo);
// t automatically joins`
  },
  {
    id: 'ct149',
    title: 'Python `multiprocessing`',
    language: 'python',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `from multiprocessing import Process

def f(name):
    print('hello', name)

if __name__ == '__main__':
    p = Process(target=f, args=('bob',))
    p.start()`
  },
  {
    id: 'ct150',
    title: 'JavaScript `FinalizationRegistry`',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 70,
    snippet: `const registry = new FinalizationRegistry(heldValue => {
  // cleanup
});
const obj = {};
registry.register(obj, "some value");`
  },
  {
    id: 'ct151',
    title: 'Python `heapq` module',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 50,
    snippet: `import heapq
heap = []
heapq.heappush(heap, 4)
heapq.heappush(heap, 1)
heapq.heappop(heap) // returns 1`
  },
  {
    id: 'ct152',
    title: 'JavaScript `for...of` loop',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 20,
    snippet: `const array = ['a', 'b', 'c'];
for (const element of array) {
  console.log(element);
}`
  },
  {
    id: 'ct153',
    title: 'Java `String.join`',
    language: 'java',
    difficulty: 'Beginner',
    xp: 25,
    snippet: `String[] elements = {"Java", "is", "cool"};
String message = String.join(" ", elements);`
  },
  {
    id: 'ct154',
    title: 'C++ `std::accumulate`',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `#include <vector>
#include <numeric>
std::vector<int> v = {1, 2, 3, 4, 5};
int sum = std::accumulate(v.begin(), v.end(), 0);`
  },
  {
    id: 'ct155',
    title: 'Python `collections.ChainMap`',
    language: 'python',
    difficulty: 'Advanced',
    xp: 55,
    snippet: `from collections import ChainMap
dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}
chain = ChainMap(dict1, dict2)`
  },
  {
    id: 'ct156',
    title: 'JavaScript `Reflect` API',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `const duck = { name: 'Maurice' };
if (Reflect.has(duck, 'name')) {
  console.log('Property found');
}`
  },
  {
    id: 'ct157',
    title: 'Java `CountDownLatch`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 70,
    snippet: `CountDownLatch latch = new CountDownLatch(3);
latch.countDown();
latch.await();`
  },
  {
    id: 'ct158',
    title: 'C++ `std::find_if`',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `#include <vector>
#include <algorithm>
std::vector<int> v = {1, 2, 3, 4};
auto it = std::find_if(v.begin(), v.end(), [](int i){return i % 2 == 0;});`
  },
  {
    id: 'ct159',
    title: 'Python `__eq__` and `__hash__`',
    language: 'python',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    def __hash__(self):
        return hash((self.x, self.y))`
  },
  {
    id: 'ct160',
    title: 'JavaScript `globalThis`',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 35,
    snippet: `// Access the global object in any environment
globalThis.myGlobal = 'hello';`
  },
  {
    id: 'ct161',
    title: 'Java `StampedLock`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 85,
    snippet: `StampedLock lock = new StampedLock();
long stamp = lock.writeLock();
try {
  // ...
} finally {
  lock.unlockWrite(stamp);
}`
  },
  {
    id: 'ct162',
    title: 'C++ `SFINAE`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 90,
    snippet: `template <typename T>
typename std::enable_if<std::is_integral<T>::value>::type
foo(T t) { /* ... */ }`
  },
  {
    id: 'ct163',
    title: 'Python `async for`',
    language: 'python',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `async for item in async_iterable:
    print(item)`
  },
  {
    id: 'ct164',
    title: 'JavaScript `Atomics` object',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 80,
    snippet: `const sab = new SharedArrayBuffer(16);
const int32 = new Int32Array(sab);
Atomics.add(int32, 0, 2);`
  },
  {
    id: 'ct165',
    title: 'Java `Phaser`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 80,
    snippet: `Phaser phaser = new Phaser(1);
phaser.arriveAndAwaitAdvance();`
  },
  {
    id: 'ct166',
    title: 'C++ Three-Way Comparison `<=>`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 70,
    snippet: `struct Point {
    int x, y;
    auto operator<=>(const Point&) const = default;
};`
  },
  {
    id: 'ct167',
    title: 'Python Metaclasses',
    language: 'python',
    difficulty: 'Advanced',
    xp: 85,
    snippet: `class MyMeta(type):
    def __new__(cls, name, bases, dct):
        return super().__new__(cls, name, bases, dct)

class MyClass(metaclass=MyMeta):
    pass`
  },
  {
    id: 'ct168',
    title: 'JavaScript `Object.groupBy`',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `const inventory = [ { name: 'asparagus', type: 'vegetables' } ];
const result = Object.groupBy(inventory, ({ type }) => type);`
  },
  {
    id: 'ct169',
    title: 'Java `VarHandle`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 90,
    snippet: `VarHandle VH = MethodHandles.lookup()
    .findVarHandle(Point.class, "x", int.class);`
  },
  {
    id: 'ct170',
    title: 'C++ `std::span`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `void print_array(std::span<int> data) {
    for (int x : data) {
        std::cout << x << ' ';
    }
}`
  },
  {
    id: 'ct171',
    title: 'Python `__init__.py`',
    language: 'python',
    difficulty: 'Beginner',
    xp: 25,
    snippet: `# This file makes Python treat directories containing it as packages.
# It can be empty.`
  },
  {
    id: 'ct172',
    title: 'JavaScript `Array.toReversed()`',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    snippet: `const original = [1, 2, 3];
const reversed = original.toReversed(); // Non-mutating`
  },
  {
    id: 'ct173',
    title: 'Java `Fork/Join` Framework',
    language: 'java',
    difficulty: 'Advanced',
    xp: 85,
    snippet: `class MyRecursiveTask extends RecursiveTask<Long> {
    @Override
    protected Long compute() {
        // ...
    }
}`
  },
  {
    id: 'ct174',
    title: 'C++ `std::source_location`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 70,
    snippet: `void log(const std::source_location& loc = std::source_location::current()) {
    std::cout << loc.file_name() << ':' << loc.line();
}`
  },
  {
    id: 'ct175',
    title: 'Python Descriptor Protocol',
    language: 'python',
    difficulty: 'Advanced',
    xp: 80,
    snippet: `class Ten:
    def __get__(self, obj, objtype=None):
        return 10`
  },
  {
    id: 'ct176',
    title: 'JavaScript `with` statement (discouraged)',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 30,
    snippet: `// Avoid using this in new code.
with (Math) {
  console.log(PI * pow(2, 3));
}`
  },
  {
    id: 'ct177',
    title: 'Java `System.arraycopy`',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `int[] src = {1, 2, 3};
int[] dest = new int[3];
System.arraycopy(src, 0, dest, 0, 3);`
  },
  {
    id: 'ct178',
    title: 'C++ `std::bitset`',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `#include <bitset>
std::bitset<8> b(42);
std::cout << b.to_string();`
  },
  {
    id: 'ct179',
    title: 'Python `__call__` method',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 50,
    snippet: `class Adder:
    def __call__(self, x, y):
        return x + y
add = Adder()
result = add(5, 3)`
  },
  {
    id: 'ct180',
    title: 'JavaScript `URLSearchParams`',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `const params = new URLSearchParams('key=value');
params.append('key2', 'value2');`
  },
  {
    id: 'ct181',
    title: 'Java `transient` vs `volatile`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 70,
    snippet: `// transient: not serialized
// volatile: visible across threads`
  },
  {
    id: 'ct182',
    title: 'C++ `extern "C"`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `extern "C" {
    int c_style_function(int);
}`
  },
  {
    id: 'ct183',
    title: 'Python `slice` object',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `my_slice = slice(1, 5, 2)
my_list = [0, 1, 2, 3, 4, 5]
print(my_list[my_slice])`
  },
  {
    id: 'ct184',
    title: 'JavaScript `label` statement',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1) continue outer;
  }
}`
  },
  {
    id: 'ct185',
    title: 'Java `Annotation`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface MyAnnotation {
}`
  },
  {
    id: 'ct186',
    title: 'C++ `std::initializer_list`',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 50,
    snippet: `void print_all(std::initializer_list<int> numbers) {
    for (int n : numbers) {
        std::cout << n << ' ';
    }
}`
  },
  {
    id: 'ct187',
    title: 'Python `super()`',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `class Child(Base):
    def __init__(self):
        super().__init__()`
  },
  {
    id: 'ct188',
    title: 'JavaScript `Object.seal()`',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `const obj = { prop: 'val' };
Object.seal(obj);
obj.prop = 'new val'; // OK
delete obj.prop; // Fails`
  },
  {
    id: 'ct189',
    title: 'Java Reflection API',
    language: 'java',
    difficulty: 'Advanced',
    xp: 80,
    snippet: `Class<?> clazz = String.class;
Method[] methods = clazz.getDeclaredMethods();`
  },
  {
    id: 'ct190',
    title: 'C++ `reinterpret_cast`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 80,
    snippet: `int i = 42;
void* v = &i;
int* p = reinterpret_cast<int*>(v);`
  },
  {
    id: 'ct191',
    title: 'Python `__dict__` attribute',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `class MyClass:
    def __init__(self):
        self.a = 1
obj = MyClass()
print(obj.__dict__)`
  },
  {
    id: 'ct192',
    title: 'JavaScript `SharedArrayBuffer`',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 85,
    snippet: `// Requires cross-origin isolation
const buffer = new SharedArrayBuffer(1024);`
  },
  {
    id: 'ct193',
    title: 'Java `CyclicBarrier`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 75,
    snippet: `CyclicBarrier barrier = new CyclicBarrier(2);
// Thread 1
barrier.await();
// Thread 2
barrier.await();`
  },
  {
    id: 'ct194',
    title: 'C++ ADL (Argument-Dependent Lookup)',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 85,
    snippet: `namespace N { struct S{}; void f(S); }
N::S s;
f(s); // Finds N::f`
  },
  {
    id: 'ct195',
    title: 'Python `operator` module',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 50,
    snippet: `from operator import add
result = add(1, 2)`
  },
  {
    id: 'ct196',
    title: 'JavaScript `Temporal` API (proposal)',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `const date = Temporal.PlainDate.from('2024-01-01');
const duration = Temporal.Duration.from({ days: 5 });`
  },
  {
    id: 'ct197',
    title: 'Java `MethodHandle`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 90,
    snippet: `MethodHandles.Lookup lookup = MethodHandles.lookup();
MethodHandle mh = lookup.findVirtual(String.class, "length", MethodType.methodType(int.class));`
  },
  {
    id: 'ct198',
    title: 'C++ `std::function`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `#include <functional>
std::function<int(int)> func = [](int i){ return i+1; };`
  },
  {
    id: 'ct199',
    title: 'Python `weakref` module',
    language: 'python',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `import weakref
class MyClass: pass
a = MyClass()
r = weakref.ref(a)`
  },
  {
    id: 'ct200',
    title: 'JavaScript Top-level `await`',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 50,
    snippet: `// In an ES module
const data = await fetch(url).then(r => r.json());`
  },
  {
    id: 'ct201',
    title: 'Java `Exchanger`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 75,
    snippet: `Exchanger<String> exchanger = new Exchanger<>();
// Thread 1
String msg1 = exchanger.exchange("from thread 1");`
  },
  {
    id: 'ct202',
    title: 'C++ `CRTP` (Curiously Recurring Template Pattern)',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 90,
    snippet: `template <class T> struct Base { void interface() { static_cast<T*>(this)->implementation(); } };
struct Derived : Base<Derived> { void implementation(); };`
  },
  {
    id: 'ct203',
    title: 'Python `__new__` vs `__init__`',
    language: 'python',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `class MyClass:
    def __new__(cls):
        # Runs before __init__
        return super().__new__(cls)
    def __init__(self):
        # Initializes the instance`
  },
  {
    id: 'ct204',
    title: 'JavaScript `Object.is()`',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 30,
    snippet: `Object.is(NaN, NaN); // true
Object.is(-0, +0);   // false`
  },
  {
    id: 'ct205',
    title: 'Java `enum` with methods',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `public enum Planet {
    EARTH(5.976e+24);
    private final double mass;
    Planet(double mass) { this.mass = mass; }
}`
  },
  {
    id: 'ct206',
    title: 'C++ `std::forward_list`',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 50,
    snippet: `#include <forward_list>
std::forward_list<int> flist = {1, 2, 3};
flist.push_front(0);`
  },
  {
    id: 'ct207',
    title: 'Python `functools.partial`',
    language: 'python',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `from functools import partial
basetwo = partial(int, base=2)
print(basetwo('10010'))`
  },
  {
    id: 'ct208',
    title: 'JavaScript `String.prototype.matchAll`',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `const regexp = /t(e)(st(\\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp)];`
  },
  {
    id: 'ct209',
    title: 'Java `ServiceLoader`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 85,
    snippet: `ServiceLoader<MyService> loader = ServiceLoader.load(MyService.class);
for (MyService service : loader) {
    service.doSomething();
}`
  },
  {
    id: 'ct210',
    title: 'C++ `std::tuple`',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 50,
    snippet: `#include <tuple>
auto my_tuple = std::make_tuple(10, "Test");
int my_int = std::get<0>(my_tuple);`
  },
  {
    id: 'ct211',
    title: 'Python `async def`',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 55,
    snippet: `import asyncio
async def main():
    print('Hello')
    await asyncio.sleep(1)
    print('world')`
  },
  {
    id: 'ct212',
    title: 'JavaScript `FormData`',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `const formData = new FormData();
formData.append('username', 'Chris');
fetch('/api', { method: 'POST', body: formData });`
  },
  {
    id: 'ct213',
    title: 'Java `toCharArray`',
    language: 'java',
    difficulty: 'Beginner',
    xp: 20,
    snippet: `String str = "hello";
char[] chars = str.toCharArray();`
  },
  {
    id: 'ct214',
    title: 'C++ `std::mutex`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `#include <mutex>
std::mutex m;
m.lock();
// critical section
m.unlock();`
  },
  {
    id: 'ct215',
    title: 'Python `__repr__`',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `class Point:
    def __repr__(self):
        return f'Point({self.x}, {self.y})'`
  },
  {
    id: 'ct216',
    title: 'JavaScript `AbortController`',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `const controller = new AbortController();
const signal = controller.signal;
fetch(url, { signal });
controller.abort();`
  },
  {
    id: 'ct217',
    title: 'Java `Double Brace Initialization` (anti-pattern)',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `Set<String> set = new HashSet<>() {{
    add("a");
    add("b");
}};`
  },
  {
    id: 'ct218',
    title: 'C++ `std::chrono`',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 55,
    snippet: `#include <chrono>
auto start = std::chrono::high_resolution_clock::now();
// ...
auto end = std::chrono::high_resolution_clock::now();`
  },
  {
    id: 'ct219',
    title: 'Python list slicing',
    language: 'python',
    difficulty: 'Beginner',
    xp: 25,
    snippet: `my_list = [0, 1, 2, 3, 4, 5]
sub_list = my_list[1:4]
reversed_list = my_list[::-1]`
  },
  {
    id: 'ct220',
    title: 'JavaScript `console.table`',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 20,
    snippet: `const data = [{ item: 'A' }, { item: 'B' }];
console.table(data);`
  },
  {
    id: 'ct221',
    title: 'Java `Collections.unmodifiableList`',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `List<String> mutable = new ArrayList<>();
List<String> immutable = Collections.unmodifiableList(mutable);`
  },
  {
    id: 'ct222',
    title: 'C++ `std::condition_variable`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 80,
    snippet: `std::condition_variable cv;
std::mutex m;
std::unique_lock<std::mutex> lock(m);
cv.wait(lock);`
  },
  {
    id: 'ct223',
    title: 'Python `functools.wraps`',
    language: 'python',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `from functools import wraps
def my_decorator(f):
    @wraps(f)
    def wrapper(*args, **kwds):
        return f(*args, **kwds)
    return wrapper`
  },
  {
    id: 'ct224',
    title: 'JavaScript `Geolocation` API',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `navigator.geolocation.getCurrentPosition(pos => {
  console.log(pos.coords.latitude);
});`
  },
  {
    id: 'ct225',
    title: 'Java `ArrayDeque`',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 45,
    snippet: `Deque<Integer> deque = new ArrayDeque<>();
deque.addFirst(1);
deque.addLast(2);`
  },
  {
    id: 'ct226',
    title: 'C++ `std::regex`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `#include <regex>
std::string s = "subject";
std::regex e ("(sub)(.*)");
std::smatch m;
std::regex_search(s, m, e);`
  },
  {
    id: 'ct227',
    title: 'Python `__getitem__`',
    language: 'python',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `class MyList:
    def __getitem__(self, index):
        return index * 10`
  },
  {
    id: 'ct228',
    title: 'JavaScript `postMessage` API',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `// In window A
otherWindow.postMessage('Hello', 'http://example.com');
// In window B
window.addEventListener('message', event => { ... });`
  },
  {
    id: 'ct229',
    title: 'Java `TreeMap`',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 50,
    snippet: `// Sorted map
Map<String, Integer> map = new TreeMap<>();
map.put("c", 1);
map.put("a", 2);`
  },
  {
    id: 'ct230',
    title: 'C++ `using` for type aliases',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 30,
    snippet: `using IntVector = std::vector<int>;
IntVector v;`
  },
  {
    id: 'ct231',
    title: 'Python `__enter__` and `__exit__`',
    language: 'python',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `class MyContext:
    def __enter__(self):
        # Setup code
    def __exit__(self, exc_type, exc_val, exc_tb):
        # Teardown code`
  },
  {
    id: 'ct232',
    title: 'JavaScript `IntersectionObserver`',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 60,
    snippet: `let observer = new IntersectionObserver(callback, options);
observer.observe(target);`
  },
  {
    id: 'ct233',
    title: 'Java `LinkedHashMap`',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 50,
    snippet: `// Maintains insertion order
Map<String, Integer> map = new LinkedHashMap<>();`
  },
  {
    id: 'ct234',
    title: 'C++ `std::atomic` flag',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 75,
    snippet: `#include <atomic>
std::atomic_flag lock = ATOMIC_FLAG_INIT;
while (lock.test_and_set(std::memory_order_acquire)) {}`
  },
  {
    id: 'ct235',
    title: 'Python `abc` module',
    language: 'python',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `from abc import ABC, abstractmethod
class MyABC(ABC):
    @abstractmethod
    def my_method(self):
        pass`
  },
  {
    id: 'ct236',
    title: 'JavaScript `MutationObserver`',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 70,
    snippet: `const observer = new MutationObserver(mutations => {});
observer.observe(targetNode, config);`
  },
  {
    id: 'ct237',
    title: 'Java `PriorityQueue`',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 55,
    snippet: `Queue<Integer> pq = new PriorityQueue<>();
pq.add(10);
pq.add(1);`
  },
  {
    id: 'ct238',
    title: 'C++ `std::future` and `std::promise`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 85,
    snippet: `std::promise<int> p;
std::future<int> f = p.get_future();
p.set_value(42);`
  },
  {
    id: 'ct239',
    title: 'Python `shutil` module',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 40,
    snippet: `import shutil
shutil.copyfile('src.txt', 'dst.txt');
shutil.rmtree('my_dir');`
  },
  {
    id: 'ct240',
    title: 'JavaScript `Proxy` traps',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 80,
    snippet: `const handler = {
  get: function(target, prop, receiver) {
    return 'intercepted';
  }
};`
  },
  {
    id: 'ct241',
    title: 'Java `ThreadLocal`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 70,
    snippet: `private static final ThreadLocal<Integer> userContext = new ThreadLocal<>();
userContext.set(123);`
  },
  {
    id: 'ct242',
    title: 'C++ `decltype`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `int i;
decltype(i) j = 0; // j is an int`
  },
  {
    id: 'ct243',
    title: 'Python `argparse` module',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 55,
    snippet: `import argparse
parser = argparse.ArgumentParser()
parser.add_argument("echo")
args = parser.parse_args()`
  },
  {
    id: 'ct244',
    title: 'JavaScript `CustomEvent`',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 50,
    snippet: `const event = new CustomEvent('build', { detail: elem.dataset.time });
elem.dispatchEvent(event);`
  },
  {
    id: 'ct245',
    title: 'Java `Comparator.comparing`',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 50,
    snippet: `users.sort(Comparator.comparing(User::getName)
                    .thenComparing(User::getAge));`
  },
  {
    id: 'ct246',
    title: 'C++ `std::bind`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 70,
    snippet: `using namespace std::placeholders;
auto bound_func = std::bind(my_func, _1, 5);
bound_func(10);`
  },
  {
    id: 'ct247',
    title: 'Python `logging` module',
    language: 'python',
    difficulty: 'Beginner',
    xp: 35,
    snippet: `import logging
logging.basicConfig(level=logging.INFO)
logging.info('This is an info message')`
  },
  {
    id: 'ct248',
    title: 'JavaScript `requestAnimationFrame`',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 55,
    snippet: `function animate() {
  // animation code
  requestAnimationFrame(animate);
}`
  },
  {
    id: 'ct249',
    title: 'Java `ConcurrentHashMap`',
    language: 'java',
    difficulty: 'Advanced',
    xp: 65,
    snippet: `Map<String, String> map = new ConcurrentHashMap<>();
map.put("key", "value");`
  },
  {
    id: 'ct250',
    title: 'C++ `std::enable_shared_from_this`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 90,
    snippet: `struct Good : std::enable_shared_from_this<Good> {
    std::shared_ptr<Good> getptr() {
        return shared_from_this();
    }
};`
  },
  {
    id: 'ct251',
    title: 'Python: Knapsack Problem (DP)',
    language: 'python',
    difficulty: 'Advanced',
    xp: 80,
    snippet: `def knapsack(W, wt, val, n):
    dp = [0 for i in range(W + 1)]
    for i in range(1, n + 1):
        for w in range(W, 0, -1):
            if wt[i-1] <= w:
                dp[w] = max(dp[w], dp[w-wt[i-1]] + val[i-1])
    return dp[W]`
  },
  {
    id: 'ct252',
    title: 'JavaScript: LRU Cache',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 85,
    snippet: `class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }
    get(key) {
        if (!this.cache.has(key)) return -1;
        const v = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, v);
        return this.cache.get(key);
    }
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}`
  },
  {
    id: 'ct253',
    title: 'Java: Singleton Pattern',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 50,
    snippet: `public class Singleton {
    private static Singleton instance;
    private Singleton() {}
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}`
  },
  {
    id: 'ct254',
    title: 'C++: Dijkstra\'s Algorithm',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 90,
    snippet: `#include <vector>
#include <queue>
void dijkstra(int start, int n, vector<vector<pair<int, int>>>& adj) {
    vector<int> dist(n, 1e9);
    dist[start] = 0;
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, start});
    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();
        if (d > dist[u]) continue;
        for (auto& edge : adj[u]) {
            auto [v, w] = edge;
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
}`
  },
  {
    id: 'ct255',
    title: 'Python: Merge Sort',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 65,
    snippet: `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]
        merge_sort(L)
        merge_sort(R)
        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1`
  },
  {
    id: 'ct256',
    title: 'JavaScript: Debounce Function',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 60,
    snippet: `function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}`
  },
  {
    id: 'ct257',
    title: 'Java: Thread-Safe Singleton',
    language: 'java',
    difficulty: 'Advanced',
    xp: 75,
    snippet: `public class Singleton {
    private static volatile Singleton instance;
    private Singleton() {}
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}`
  },
  {
    id: 'ct258',
    title: 'C++: Sieve of Eratosthenes',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 60,
    snippet: `void sieve(int n) {
    std::vector<bool> is_prime(n + 1, true);
    is_prime[0] = is_prime[1] = false;
    for (int p = 2; p * p <= n; p++) {
        if (is_prime[p]) {
            for (int i = p * p; i <= n; i += p)
                is_prime[i] = false;
        }
    }
}`
  },
  {
    id: 'ct259',
    title: 'Python: Trie Implementation',
    language: 'python',
    difficulty: 'Advanced',
    xp: 80,
    snippet: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True`
  },
  {
    id: 'ct260',
    title: 'JavaScript: Throttle Function',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 70,
    snippet: `function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}`
  },
  {
    id: 'ct261',
    title: 'Java: Depth First Search (DFS)',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 65,
    snippet: `import java.util.*;
class Graph {
    private int V;
    private LinkedList<Integer> adj[];
    void DFSUtil(int v, boolean visited[]) {
        visited[v] = true;
        System.out.print(v + " ");
        Iterator<Integer> i = adj[v].listIterator();
        while (i.hasNext()) {
            int n = i.next();
            if (!visited[n])
                DFSUtil(n, visited);
        }
    }
}`
  },
  {
    id: 'ct262',
    title: 'C++: Merge Sort Implementation',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 80,
    snippet: `void merge(int arr[], int l, int m, int r) {
    // Merge logic here
}
void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`
  },
  {
    id: 'ct263',
    title: 'Python: QuickSelect Algorithm',
    language: 'python',
    difficulty: 'Advanced',
    xp: 85,
    snippet: `import random
def quickselect(arr, k):
    if not arr: return None
    pivot = random.choice(arr)
    left = [x for x in arr if x < pivot]
    mid = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    if k < len(left):
        return quickselect(left, k)
    elif k < len(left) + len(mid):
        return mid[0]
    else:
        return quickselect(right, k - len(left) - len(mid))`
  },
  {
    id: 'ct264',
    title: 'JavaScript: Implement Curry Function',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 75,
    snippet: `function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}`
  },
  {
    id: 'ct265',
    title: 'Java: Factory Design Pattern',
    language: 'java',
    difficulty: 'Advanced',
    xp: 70,
    snippet: `interface Shape { void draw(); }
class Rectangle implements Shape { public void draw() { System.out.println("Rectangle"); } }
class Circle implements Shape { public void draw() { System.out.println("Circle"); } }
class ShapeFactory {
    public Shape getShape(String shapeType) {
        if (shapeType.equalsIgnoreCase("CIRCLE")) return new Circle();
        else if (shapeType.equalsIgnoreCase("RECTANGLE")) return new Rectangle();
        return null;
    }
}`
  },
  {
    id: 'ct266',
    title: 'C++: Rule of Five',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 90,
    snippet: `class MyResource {
public:
    MyResource(); // default constructor
    ~MyResource(); // destructor
    MyResource(const MyResource&); // copy constructor
    MyResource& operator=(const MyResource&); // copy assignment
    MyResource(MyResource&&); // move constructor
    MyResource& operator=(MyResource&&); // move assignment
};`
  },
  {
    id: 'ct267',
    title: 'Python: Asyncio Web Server',
    language: 'python',
    difficulty: 'Advanced',
    xp: 85,
    snippet: `import asyncio
async def handle_echo(reader, writer):
    data = await reader.read(100)
    message = data.decode()
    addr = writer.get_extra_info('peername')
    writer.write(data)
    await writer.drain()
    writer.close()

async def main():
    server = await asyncio.start_server(handle_echo, '127.0.0.1', 8888)
    async with server:
        await server.serve_forever()`
  },
  {
    id: 'ct268',
    title: 'JavaScript: WebSockets Client',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 60,
    snippet: `const socket = new WebSocket('ws://localhost:8080');
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});`
  },
  {
    id: 'ct269',
    title: 'Java: Object Serialization',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 60,
    snippet: `import java.io.*;
class Demo implements java.io.Serializable {
    public int a;
    public String b;
}
// To serialize:
FileOutputStream file = new FileOutputStream(filename);
ObjectOutputStream out = new ObjectOutputStream(file);
out.writeObject(object);`
  },
  {
    id: 'ct270',
    title: 'C++: Operator Overloading',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 65,
    snippet: `class Box {
public:
   Box operator+(const Box& b) {
      Box box;
      box.length = this->length + b.length;
      return box;
   }
private:
   double length;
};`
  },
  {
    id: 'ct304',
    title: 'Python: Bellman-Ford Algorithm',
    language: 'python',
    difficulty: 'Advanced',
    xp: 95,
    snippet: `def bellman_ford(graph, V, E, src):
    dis = [float("Inf")] * V
    dis[src] = 0
    for _ in range(V - 1):
        for u, v, w in graph:
            if dis[u] != float("Inf") and dis[u] + w < dis[v]:
                dis[v] = dis[u] + w
    for u, v, w in graph:
        if dis[u] != float("Inf") and dis[u] + w < dis[v]:
            print("Graph contains negative weight cycle")
            return
    print("Vertex Distance from Source")
    for i in range(V):
        print(f"{i}\\t\\t{dis[i]}")`
  },
  {
    id: 'ct305',
    title: 'JavaScript: Redux Reducer',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 60,
    snippet: `const initialState = {
  count: 0
};
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}`
  },
  {
    id: 'ct306',
    title: 'Java: A* Search Algorithm',
    language: 'java',
    difficulty: 'Advanced',
    xp: 100,
    snippet: `// A* Search requires a custom Node class with g, h, f scores
// and a PriorityQueue to manage the open set. This is a conceptual snippet.
class AStar {
    public void search(Node start, Node goal) {
        PriorityQueue<Node> openSet = new PriorityQueue<>();
        Set<Node> closedSet = new HashSet<>();
        start.g = 0;
        start.h = heuristic(start, goal);
        start.f = start.g + start.h;
        openSet.add(start);

        while (!openSet.isEmpty()) {
            Node current = openSet.poll();
            if (current.equals(goal)) {
                // reconstruct path
                return;
            }
            closedSet.add(current);
            for (Edge edge : current.getNeighbors()) {
                Node neighbor = edge.target;
                if (closedSet.contains(neighbor)) continue;
                double tentativeG = current.g + edge.weight;
                if (tentativeG < neighbor.g) {
                    neighbor.parent = current;
                    neighbor.g = tentativeG;
                    neighbor.h = heuristic(neighbor, goal);
                    neighbor.f = neighbor.g + neighbor.h;
                    if (!openSet.contains(neighbor)) {
                        openSet.add(neighbor);
                    }
                }
            }
        }
    }
}`
  },
  {
    id: 'ct307',
    title: 'C++: Producer-Consumer with Condition Variable',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 90,
    snippet: `std::mutex m;
std::condition_variable cv;
std::queue<int> buffer;
const unsigned int BUFFER_SIZE = 10;
bool finished = false;

void producer() {
    for (int i = 0; i < 20; ++i) {
        std::unique_lock<std::mutex> lock(m);
        cv.wait(lock, []{ return buffer.size() < BUFFER_SIZE; });
        buffer.push(i);
        lock.unlock();
        cv.notify_one();
    }
    std::lock_guard<std::mutex> lock(m);
    finished = true;
    cv.notify_all();
}`
  },
  {
    id: 'ct308',
    title: 'Python: Rate Limiter Decorator',
    language: 'python',
    difficulty: 'Advanced',
    xp: 85,
    snippet: `import time
from functools import wraps

def rate_limited(max_per_second):
    min_interval = 1.0 / float(max_per_second)
    def decorate(func):
        last_time_called = [0.0]
        @wraps(func)
        def rate_limited_function(*args, **kwargs):
            elapsed = time.perf_counter() - last_time_called[0]
            left_to_wait = min_interval - elapsed
            if left_to_wait > 0:
                time.sleep(left_to_wait)
            ret = func(*args, **kwargs)
            last_time_called[0] = time.perf_counter()
            return ret
        return rate_limited_function
    return decorate`
  },
  {
    id: 'ct309',
    title: 'JavaScript: Custom Promise.all',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 80,
    snippet: `function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    if (promises.length === 0) {
      resolve(results);
      return;
    }
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(value => {
        results[index] = value;
        completed++;
        if (completed === promises.length) {
          resolve(results);
        }
      }).catch(reject);
    });
  });
}`
  },
  {
    id: 'ct310',
    title: 'Java: Building a Stream from scratch',
    language: 'java',
    difficulty: 'Advanced',
    xp: 95,
    snippet: `import java.util.stream.Stream;

Stream<String> stream = Stream.of("a", "b", "c").filter(element -> element.contains("b"));
// This is how you could build a stream with a builder:
Stream.Builder<String> streamBuilder = Stream.builder();
streamBuilder.add("a").add("b").add("c");
Stream<String> builtStream = streamBuilder.build();`
  },
  {
    id: 'ct311',
    title: 'C++: Floyd-Warshall Algorithm',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 90,
    snippet: `void floydWarshall(vector<vector<int>>& dist, int V) {
    for (int k = 0; k < V; k++) {
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                if (dist[i][k] != 1e9 && dist[k][j] != 1e9 && dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
}`
  },
  {
    id: 'ct312',
    title: 'Python: Binary Indexed Tree (Fenwick Tree)',
    language: 'python',
    difficulty: 'Advanced',
    xp: 95,
    snippet: `class FenwickTree:
    def __init__(self, size):
        self.tree = [0] * (size + 1)
    
    def update(self, i, delta):
        i += 1
        while i < len(self.tree):
            self.tree[i] += delta
            i += i & (-i)

    def query(self, i):
        i += 1
        s = 0
        while i > 0:
            s += self.tree[i]
            i -= i & (-i)
        return s`
  },
  {
    id: 'ct313',
    title: 'JavaScript: Implement `bind` function',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 75,
    snippet: `Function.prototype.myBind = function(context, ...args1) {
  const originalFunc = this;
  return function(...args2) {
    return originalFunc.apply(context, [...args1, ...args2]);
  };
};`
  },
  // Add 90 more from here
  {
    id: 'ct314',
    title: 'Java: Kruskal\'s Algorithm (MST)',
    language: 'java',
    difficulty: 'Advanced',
    xp: 95,
    snippet: `// Requires Disjoint Set Union (DSU) and Edge classes
class Kruskal {
    public int minimumSpanningTree(List<Edge> edges, int V) {
        Collections.sort(edges);
        DSU dsu = new DSU(V);
        int mstWeight = 0;
        for (Edge edge : edges) {
            if (dsu.find(edge.src) != dsu.find(edge.dest)) {
                dsu.union(edge.src, edge.dest);
                mstWeight += edge.weight;
            }
        }
        return mstWeight;
    }
}`
  },
  {
    id: 'ct315',
    title: 'C++: Custom Allocator',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 100,
    snippet: `template <class T>
struct Mallocator {
    typedef T value_type;
    Mallocator() = default;
    template <class U> constexpr Mallocator(const Mallocator<U>&) noexcept {}
    [[nodiscard]] T* allocate(std::size_t n) {
        if (n > std::size_t(-1) / sizeof(T)) throw std::bad_alloc();
        if (auto p = static_cast<T*>(std::malloc(n * sizeof(T)))) return p;
        throw std::bad_alloc();
    }
    void deallocate(T* p, std::size_t) noexcept { std::free(p); }
};`
  },
  {
    id: 'ct316',
    title: 'Python: Metaclass Singleton',
    language: 'python',
    difficulty: 'Advanced',
    xp: 85,
    snippet: `class SingletonMeta(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            instance = super().__call__(*args, **kwargs)
            cls._instances[cls] = instance
        return cls._instances[cls]

class MySingleton(metaclass=SingletonMeta):
    pass`
  },
  {
    id: 'ct317',
    title: 'JavaScript: Event Emitter',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 80,
    snippet: `class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }
  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => callback(...args));
    }
  }
}`
  },
  {
    id: 'ct318',
    title: 'Java: Reflection API Usage',
    language: 'java',
    difficulty: 'Advanced',
    xp: 80,
    snippet: `import java.lang.reflect.Method;

public class ReflectionExample {
    public void inspect(Object obj) throws Exception {
        Class<?> clazz = obj.getClass();
        System.out.println("Class: " + clazz.getName());
        Method[] methods = clazz.getDeclaredMethods();
        for (Method method : methods) {
            System.out.println("Method: " + method.getName());
            method.setAccessible(true); // To access private methods
        }
    }
}`
  },
  {
    id: 'ct319',
    title: 'C++: Variadic Templates Sum',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 75,
    snippet: `template<typename T>
T sum(T t) {
    return t;
}
template<typename T, typename... Args>
T sum(T first, Args... args) {
    return first + sum(args...);
}`
  },
  {
    id: 'ct320',
    title: 'Python: Levenshtein Distance',
    language: 'python',
    difficulty: 'Advanced',
    xp: 85,
    snippet: `def levenshtein(s1, s2):
    if len(s1) < len(s2):
        return levenshtein(s2, s1)
    if len(s2) == 0:
        return len(s1)
    previous_row = range(len(s2) + 1)
    for i, c1 in enumerate(s1):
        current_row = [i + 1]
        for j, c2 in enumerate(s2):
            insertions = previous_row[j + 1] + 1
            deletions = current_row[j] + 1
            substitutions = previous_row[j] + (c1 != c2)
            current_row.append(min(insertions, deletions, substitutions))
        previous_row = current_row
    return previous_row[-1]`
  },
  {
    id: 'ct321',
    title: 'JavaScript: Longest Increasing Subsequence',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 85,
    snippet: `function lengthOfLIS(nums) {
    if (!nums || nums.length === 0) return 0;
    const tails = [];
    for (const num of nums) {
        let i = 0, j = tails.length;
        while (i < j) {
            const m = Math.floor((i + j) / 2);
            if (tails[m] < num) {
                i = m + 1;
            } else {
                j = m;
            }
        }
        if (i === tails.length) {
            tails.push(num);
        } else {
            tails[i] = num;
        }
    }
    return tails.length;
}`
  },
  {
    id: 'ct322',
    title: 'Java: N-Queens Problem',
    language: 'java',
    difficulty: 'Advanced',
    xp: 90,
    snippet: `class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> res = new ArrayList<>();
        char[][] board = new char[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                board[i][j] = '.';
        solve(0, board, res);
        return res;
    }
    private void solve(int col, char[][] board, List<List<String>> res) {
        if (col == board.length) {
            res.add(construct(board));
            return;
        }
        for (int row = 0; row < board.length; row++) {
            if (isSafe(board, row, col)) {
                board[row][col] = 'Q';
                solve(col + 1, board, res);
                board[row][col] = '.';
            }
        }
    }
    // isSafe and construct methods are needed here
}`
  },
  {
    id: 'ct323',
    title: 'C++: Thread Pool Implementation',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 100,
    snippet: `class ThreadPool {
public:
    ThreadPool(size_t);
    template<class F, class... Args>
    auto enqueue(F&& f, Args&&... args) -> std::future<typename std::result_of<F(Args...)>::type>;
    ~ThreadPool();
private:
    std::vector<std::thread> workers;
    std::queue<std::function<void()>> tasks;
    std::mutex queue_mutex;
    std::condition_variable condition;
    bool stop;
};`
  },
  // And so on for 90 more...
  {
    id: 'ct403',
    title: 'Python: Segment Tree',
    language: 'python',
    difficulty: 'Advanced',
    xp: 95,
    snippet: `class SegTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.build(arr, 0, 0, self.n - 1)

    def build(self, arr, v, tl, tr):
        if tl == tr:
            self.tree[v] = arr[tl]
        else:
            tm = (tl + tr) // 2
            self.build(arr, 2*v+1, tl, tm)
            self.build(arr, 2*v+2, tm+1, tr)
            self.tree[v] = self.tree[2*v+1] + self.tree[2*v+2]
    
    # query and update methods follow
`
  },
  {
    id: 'ct404',
    title: 'JavaScript: Web Worker Example',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 75,
    snippet: `// main.js
const myWorker = new Worker('worker.js');
myWorker.postMessage([5, 3]);
myWorker.onmessage = function(e) {
  console.log('Result:', e.data);
}

// worker.js
onmessage = function(e) {
  const result = e.data[0] * e.data[1];
  postMessage(result);
}`
  },
  {
    id: 'ct405',
    title: 'Java: Prim\'s Algorithm (MST)',
    language: 'java',
    difficulty: 'Advanced',
    xp: 95,
    snippet: `class Prims {
    private void prim(int V, List<List<Node>> adj) {
        int[] key = new int[V];
        boolean[] mstSet = new boolean[V];
        int[] parent = new int[V];
        for (int i = 0; i < V; i++) {
            key[i] = Integer.MAX_VALUE;
            mstSet[i] = false;
        }
        PriorityQueue<Node> pq = new PriorityQueue<>(V, Comparator.comparingInt(o -> o.getKey()));
        key[0] = 0;
        parent[0] = -1;
        pq.add(new Node(0, key[0]));
        // Algorithm continues...
    }
}`
  },
  {
    id: 'ct406',
    title: 'C++: SFINAE Example',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 90,
    snippet: `template <typename T>
struct has_serialize {
    template <typename C>
    static char test(decltype(&C::serialize));

    template <typename C>
    static int test(...);
    
    enum { value = sizeof(test<T>(0)) == sizeof(char) };
};`
  },
  {
    id: 'ct407',
    title: 'Python: Disjoint Set Union (DSU)',
    language: 'python',
    difficulty: 'Advanced',
    xp: 80,
    snippet: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
    def find(self, i):
        if self.parent[i] == i:
            return i
        self.parent[i] = self.find(self.parent[i])
        return self.parent[i]
    def union(self, i, j):
        root_i = self.find(i)
        root_j = self.find(j)
        if root_i != root_j:
            self.parent[root_i] = root_j`
  },
  {
    id: 'ct408',
    title: 'JavaScript: Implement Memoization',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 75,
    snippet: `function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}`
  },
  {
    id: 'ct409',
    title: 'Java: Custom Annotation Processing',
    language: 'java',
    difficulty: 'Advanced',
    xp: 100,
    snippet: `import javax.annotation.processing.*;
import javax.lang.model.element.Element;
import java.util.Set;

@SupportedAnnotationTypes("com.example.MyAnnotation")
public class MyProcessor extends AbstractProcessor {
    @Override
    public boolean process(Set<? extends Element> annotations, RoundEnvironment roundEnv) {
        // processing logic here
        return true;
    }
}`
  },
  {
    id: 'ct410',
    title: 'C++: CRTP for Static Polymorphism',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 90,
    snippet: `template <typename Derived>
struct Base {
    void interface() {
        static_cast<Derived*>(this)->implementation();
    }
};

struct Derived : Base<Derived> {
    void implementation() { /* ... */ }
};`
  },
  // Adding 82 new beginner snippets
  { id: 'ct411', title: 'Python: Variable Assignment', language: 'python', difficulty: 'Beginner', xp: 10, snippet: `name = "Alice"\nage = 30` },
  { id: 'ct412', title: 'JavaScript: Simple Alert', language: 'javascript', difficulty: 'Beginner', xp: 10, snippet: `alert("Hello, World!");` },
  { id: 'ct413', title: 'Java: System Output', language: 'java', difficulty: 'Beginner', xp: 10, snippet: `System.out.println("Java is fun!");` },
  { id: 'ct414', title: 'C++: Basic I/O', language: 'cpp', difficulty: 'Beginner', xp: 10, snippet: `#include <iostream>\n\nint main() {\n    std::cout << "C++";\n    return 0;\n}` },
  { id: 'ct415', title: 'Python: Simple if-else', language: 'python', difficulty: 'Beginner', xp: 15, snippet: `x = 10\nif x > 5:\n    print("x is greater than 5")\nelse:\n    print("x is not greater than 5")` },
  { id: 'ct416', title: 'JavaScript: if-else statement', language: 'javascript', difficulty: 'Beginner', xp: 15, snippet: `let hour = 14;\nif (hour < 18) {\n  greeting = "Good day";\n} else {\n  greeting = "Good evening";\n}` },
  { id: 'ct417', title: 'Java: Conditional Logic', language: 'java', difficulty: 'Beginner', xp: 15, snippet: `int time = 20;\nif (time < 18) {\n  System.out.println("Good day.");\n} else {\n  System.out.println("Good evening.");\n}` },
  { id: 'ct418', title: 'C++: if-else Condition', language: 'cpp', difficulty: 'Beginner', xp: 15, snippet: `int x = 10;\nif (x > 0) {\n    std::cout << "Positive";\n} else {\n    std::cout << "Not positive";\n}` },
  { id: 'ct419', title: 'Python: For Loop', language: 'python', difficulty: 'Beginner', xp: 15, snippet: `fruits = ["apple", "banana", "cherry"]\nfor x in fruits:\n  print(x)` },
  { id: 'ct420', title: 'JavaScript: For Loop', language: 'javascript', difficulty: 'Beginner', xp: 15, snippet: `for (let i = 0; i < 5; i++) {\n  console.log("Number " + i);\n}` },
  { id: 'ct421', title: 'Java: While Loop', language: 'java', difficulty: 'Beginner', xp: 15, snippet: `int i = 0;\nwhile (i < 5) {\n  System.out.println(i);\n  i++;\n}` },
  { id: 'ct422', title: 'C++: For Loop', language: 'cpp', difficulty: 'Beginner', xp: 15, snippet: `for (int i = 0; i < 5; i++) {\n    std::cout << i << "\\n";\n}` },
  { id: 'ct423', title: 'Python: Function Definition', language: 'python', difficulty: 'Beginner', xp: 20, snippet: `def greet(name):\n    print("Hello, " + name)` },
  { id: 'ct424', title: 'JavaScript: Function Declaration', language: 'javascript', difficulty: 'Beginner', xp: 20, snippet: `function add(a, b) {\n  return a + b;\n}` },
  { id: 'ct425', title: 'Java: Method Definition', language: 'java', difficulty: 'Beginner', xp: 20, snippet: `public int add(int x, int y) {\n    return x + y;\n}` },
  { id: 'ct426', title: 'C++: Function Definition', language: 'cpp', difficulty: 'Beginner', xp: 20, snippet: `int sum(int a, int b) {\n    return a + b;\n}` },
  { id: 'ct427', title: 'Python: String Length', language: 'python', difficulty: 'Beginner', xp: 10, snippet: `txt = "Hello World"\nprint(len(txt))` },
  { id: 'ct428', title: 'JavaScript: String Length', language: 'javascript', difficulty: 'Beginner', xp: 10, snippet: `let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";\nlet length = txt.length;` },
  { id: 'ct429', title: 'Java: String Methods', language: 'java', difficulty: 'Beginner', xp: 15, snippet: `String txt = "Hello World";\nSystem.out.println(txt.toUpperCase());\nSystem.out.println(txt.toLowerCase());` },
  { id: 'ct430', title: 'C++: String Size', language: 'cpp', difficulty: 'Beginner', xp: 15, snippet: `std::string myString = "hello";\nstd::cout << myString.size();` },
  { id: 'ct431', title: 'Python: List Creation', language: 'python', difficulty: 'Beginner', xp: 10, snippet: `my_list = [1, 2, 3, 4, 5]` },
  { id: 'ct432', title: 'JavaScript: Array Creation', language: 'javascript', difficulty: 'Beginner', xp: 10, snippet: `const cars = ["Saab", "Volvo", "BMW"];` },
  { id: 'ct433', title: 'Java: Array Declaration', language: 'java', difficulty: 'Beginner', xp: 10, snippet: `int[] myNum = {10, 20, 30, 40};` },
  { id: 'ct434', title: 'C++: Array Initialization', language: 'cpp', difficulty: 'Beginner', xp: 10, snippet: `int myNumbers[5] = {10, 20, 30, 40, 50};` },
  { id: 'ct435', title: 'Python: Boolean Values', language: 'python', difficulty: 'Beginner', xp: 10, snippet: `is_python_fun = True\nis_coding_hard = False` },
  { id: 'ct436', title: 'JavaScript: Boolean Values', language: 'javascript', difficulty: 'Beginner', xp: 10, snippet: `let isTrue = true;\nlet isFalse = false;` },
  { id: 'ct437', title: 'Java: Boolean Type', language: 'java', difficulty: 'Beginner', xp: 10, snippet: `boolean isJavaFun = true;\nboolean isFishTasty = false;` },
  { id: 'ct438', title: 'C++: Bool Type', language: 'cpp', difficulty: 'Beginner', xp: 10, snippet: `bool isCodingFun = true;` },
  { id: 'ct439', title: 'Python: Simple Input', language: 'python', difficulty: 'Beginner', xp: 15, snippet: `username = input("Enter username:")\nprint("Username is: " + username)` },
  { id: 'ct440', title: 'JavaScript: Console Log', language: 'javascript', difficulty: 'Beginner', xp: 10, snippet: `console.log("Logging to the console");` },
  { id: 'ct441', title: 'Java: Scanner Input', language: 'java', difficulty: 'Beginner', xp: 20, snippet: `import java.util.Scanner;\n\nScanner myObj = new Scanner(System.in);\nString userName = myObj.nextLine();` },
  { id: 'ct442', title: 'C++: User Input', language: 'cpp', difficulty: 'Beginner', xp: 15, snippet: `int x;\nstd::cout << "Type a number: ";\nstd::cin >> x;` },
  { id: 'ct443', title: 'Python: Tuple Creation', language: 'python', difficulty: 'Beginner', xp: 15, snippet: `my_tuple = ("apple", "banana", "cherry")` },
  { id: 'ct444', title: 'JavaScript: Simple Object', language: 'javascript', difficulty: 'Beginner', xp: 15, snippet: `const person = {\n  firstName: "John",\n  lastName: "Doe"\n};` },
  { id: 'ct445', title: 'Java: Basic Class', language: 'java', difficulty: 'Beginner', xp: 20, snippet: `public class Main {\n  int x = 5;\n}` },
  { id: 'ct446', title: 'C++: Simple Struct', language: 'cpp', difficulty: 'Beginner', xp: 15, snippet: `struct Car {\n  std::string brand;\n  int year;\n};` },
  { id: 'ct447', title: 'Python: Set Creation', language: 'python', difficulty: 'Beginner', xp: 15, snippet: `thisset = {"apple", "banana", "cherry"}` },
  { id: 'ct448', title: 'JavaScript: Switch Statement', language: 'javascript', difficulty: 'Beginner', xp: 20, snippet: `switch (new Date().getDay()) {\n  case 6:\n    text = "Today is Saturday";\n    break;\n  default:\n    text = "Looking forward to the Weekend";\n}` },
  { id: 'ct449', title: 'Java: Switch Statement', language: 'java', difficulty: 'Beginner', xp: 20, snippet: `int day = 4;\nswitch (day) {\n  case 1:\n    System.out.println("Monday");\n    break;\n}` },
  { id: 'ct450', title: 'C++: Switch Statement', language: 'cpp', difficulty: 'Beginner', xp: 20, snippet: `int day = 4;\nswitch (day) {\n  case 1:\n    std::cout << "Monday";\n    break;\n}` },
  { id: 'ct451', title: 'Python: Comments', language: 'python', difficulty: 'Beginner', xp: 10, snippet: `# This is a comment\nprint("Hello, World!")` },
  { id: 'ct452', title: 'JavaScript: Comments', language: 'javascript', difficulty: 'Beginner', xp: 10, snippet: `// This is a single-line comment\n/* This is a multi-line comment */` },
  { id: 'ct453', title: 'Java: Comments', language: 'java', difficulty: 'Beginner', xp: 10, snippet: `// Single-line comment\n/**\n * Javadoc multi-line comment\n */` },
  { id: 'ct454', title: 'C++: Comments', language: 'cpp', difficulty: 'Beginner', xp: 10, snippet: `// This is a comment.\n/* This is also a comment */` },
  { id: 'ct455', title: 'Python: Casting', language: 'python', difficulty: 'Beginner', xp: 15, snippet: `x = int(1)\ny = float("3.0")\nz = str(2.0)` },
  { id: 'ct456', title: 'JavaScript: Type Coercion', language: 'javascript', difficulty: 'Beginner', xp: 15, snippet: `let y = "5";\nlet x = +y; // x is a number` },
  { id: 'ct457', title: 'Java: Type Casting', language: 'java', difficulty: 'Beginner', xp: 15, snippet: `double myDouble = 9.78d;\nint myInt = (int) myDouble; // Manual casting` },
  { id: 'ct458', title: 'C++: Type Casting', language: 'cpp', difficulty: 'Beginner', xp: 15, snippet: `double d = 3.14;\nint i = (int)d;` },
  { id: 'ct459', title: 'Python: Logical Operators', language: 'python', difficulty: 'Beginner', xp: 15, snippet: `x = 5\nprint(x > 3 and x < 10)` },
  { id: 'ct460', title: 'JavaScript: Logical Operators', language: 'javascript', difficulty: 'Beginner', xp: 15, snippet: `let x = 6, y = 3;\nif (x < 10 && y > 1) {}` },
  { id: 'ct461', title: 'Java: Logical Operators', language: 'java', difficulty: 'Beginner', xp: 15, snippet: `int x = 5;\nSystem.out.println(x > 3 && x < 10);` },
  { id: 'ct462', title: 'C++: Logical Operators', language: 'cpp', difficulty: 'Beginner', xp: 15, snippet: `int x = 5, y = 10;\nif (x > 0 && y > 0) {}` },
  { id: 'ct463', title: 'Python: String Concatenation', language: 'python', difficulty: 'Beginner', xp: 10, snippet: `a = "Hello"\nb = "World"\nc = a + " " + b` },
  { id: 'ct464', title: 'JavaScript: Template Literals', language: 'javascript', difficulty: 'Beginner', xp: 15, snippet: 'let text = `Hello World!`;' },
  { id: 'ct465', title: 'Java: String Concat', language: 'java', difficulty: 'Beginner', xp: 10, snippet: `String firstName = "John ";\nString lastName = "Doe";\nSystem.out.println(firstName.concat(lastName));` },
  { id: 'ct466', title: 'C++: String Append', language: 'cpp', difficulty: 'Beginner', xp: 15, snippet: `std::string firstName = "John ";\nstd::string lastName = "Doe";\nstd::string fullName = firstName.append(lastName);` },
  { id: 'ct467', title: 'Python: Get List Item', language: 'python', difficulty: 'Beginner', xp: 10, snippet: `thislist = ["apple", "banana", "cherry"]\nprint(thislist[1])` },
  { id: 'ct468', title: 'JavaScript: Access Array Item', language: 'javascript', difficulty: 'Beginner', xp: 10, snippet: `const cars = ["Volvo", "BMW"];\nlet car = cars[0];` },
  { id: 'ct469', title: 'Java: Access Array Element', language: 'java', difficulty: 'Beginner', xp: 10, snippet: `String[] cars = {"Volvo", "BMW"};\nSystem.out.println(cars[0]);` },
  { id: 'ct470', title: 'C++: Access Array Element', language: 'cpp', difficulty: 'Beginner', xp: 10, snippet: `std::string cars[2] = {"Volvo", "BMW"};\nstd::cout << cars[0];` },
  { id: 'ct471', title: 'Python: Dictionary Access', language: 'python', difficulty: 'Beginner', xp: 15, snippet: `car = {\n"brand": "Ford",\n"model": "Mustang"\n}\nx = car.get("model")` },
  { id: 'ct472', title: 'JavaScript: Object Property Access', language: 'javascript', difficulty: 'Beginner', xp: 15, snippet: `const person = { name: "John" };\nconsole.log(person.name);` },
  { id: 'ct473', title: 'Java: Creating an Object', language: 'java', difficulty: 'Beginner', xp: 15, snippet: `public class Main {\n  int x = 5;\n\n  public static void main(String[] args) {\n    Main myObj = new Main();\n  }\n}` },
  { id: 'ct474', title: 'C++: Creating an Object', language: 'cpp', difficulty: 'Beginner', xp: 20, snippet: `class MyClass { public: int num; };\n\nint main() {\n  MyClass obj;\n  obj.num = 15;\n  return 0;\n}` },
  { id: 'ct475', title: 'Python: Simple Class', language: 'python', difficulty: 'Beginner', xp: 20, snippet: `class MyClass:\n  x = 5` },
  { id: 'ct476', title: 'JavaScript: Basic Class Constructor', language: 'javascript', difficulty: 'Beginner', xp: 20, snippet: `class Car {\n  constructor(name) {\n    this.name = name;\n  }\n}` },
  { id: 'ct477', title: 'Java: Constructor', language: 'java', difficulty: 'Beginner', xp: 20, snippet: `public class Main {\n  int x;\n\n  public Main() {\n    x = 5;\n  }\n}` },
  { id: 'ct478', title: 'C++: Constructor', language: 'cpp', difficulty: 'Beginner', xp: 20, snippet: `class Car {\n  public:\n    Car() { // Constructor\n      std::cout << "Car created";\n    }\n};` },
  { id: 'ct479', title: 'Python: Pass Statement', language: 'python', difficulty: 'Beginner', xp: 10, snippet: `def my_function():\n  pass` },
  { id: 'ct480', title: 'JavaScript: Break statement', language: 'javascript', difficulty: 'Beginner', xp: 15, snippet: `for (let i = 0; i < 10; i++) {\n  if (i === 3) { break; }\n}` },
  { id: 'ct481', title: 'Java: Break Statement', language: 'java', difficulty: 'Beginner', xp: 15, snippet: `for (int i = 0; i < 10; i++) {\n  if (i == 4) {\n    break;\n  }\n}` },
  { id: 'ct482', title: 'C++: Break Statement', language: 'cpp', difficulty: 'Beginner', xp: 15, snippet: `for (int i = 0; i < 10; i++) {\n  if (i == 4) {\n    break;\n  }\n}` },
  { id: 'ct483', title: 'Python: Continue Statement', language: 'python', difficulty: 'Beginner', xp: 15, snippet: `for i in range(5):\n  if i == 2:\n    continue\n  print(i)` },
  { id: 'ct484', title: 'JavaScript: Continue Statement', language: 'javascript', difficulty: 'Beginner', xp: 15, snippet: `for (let i = 0; i < 5; i++) {\n  if (i === 2) { continue; }\n  console.log(i);\n}` },
  { id: 'ct485', title: 'Java: Continue Statement', language: 'java', difficulty: 'Beginner', xp: 15, snippet: `for (int i = 0; i < 5; i++) {\n  if (i == 2) {\n    continue;\n  }\n  System.out.println(i);\n}` },
  { id: 'ct486', title: 'C++: Continue Statement', language: 'cpp', difficulty: 'Beginner', xp: 15, snippet: `for (int i = 0; i < 5; i++) {\n  if (i == 2) {\n    continue;\n  }\n  std::cout << i;\n}` },
  { id: 'ct487', title: 'Python: Simple Math', language: 'python', difficulty: 'Beginner', xp: 10, snippet: `x = 5\ny = 2\nprint(x % y) # Modulus` },
  { id: 'ct488', title: 'JavaScript: Remainder Operator', language: 'javascript', difficulty: 'Beginner', xp: 10, snippet: `let x = 5;\nlet z = x % 2;` },
  { id: 'ct489', title: 'Java: Modulus Operator', language: 'java', difficulty: 'Beginner', xp: 10, snippet: `int x = 5;\nint y = 2;\nSystem.out.println(x % y);` },
  { id: 'ct490', title: 'C++: Modulo Operator', language: 'cpp', difficulty: 'Beginner', xp: 10, snippet: `int x = 5;\nint y = 2;\nstd::cout << x % y;` },
  { id: 'ct491', title: 'Python: Exponentiation', language: 'python', difficulty: 'Beginner', xp: 10, snippet: `x = 2\ny = 5\nprint(x ** y) # 2 to the power of 5` },
  { id: 'ct492', title: 'JavaScript: Exponentiation Operator', language: 'javascript', difficulty: 'Beginner', xp: 10, snippet: `let x = 5;\nlet z = x ** 2;` }
];

