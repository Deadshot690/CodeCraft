
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
heapq.heappop(heap) # returns 1`
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
    difficulty: 'Expert',
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
    difficulty: 'Expert',
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
    difficulty: 'Expert',
    xp: 80,
    snippet: `const sab = new SharedArrayBuffer(16);
const int32 = new Int32Array(sab);
Atomics.add(int32, 0, 2);`
  },
  {
    id: 'ct165',
    title: 'Java `Phaser`',
    language: 'java',
    difficulty: 'Expert',
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
    difficulty: 'Expert',
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
    difficulty: 'Expert',
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
    difficulty: 'Expert',
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
    difficulty: 'Expert',
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
    difficulty: 'Expert',
    xp: 80,
    snippet: `Class<?> clazz = String.class;
Method[] methods = clazz.getDeclaredMethods();`
  },
  {
    id: 'ct190',
    title: 'C++ `reinterpret_cast`',
    language: 'cpp',
    difficulty: 'Expert',
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
    difficulty: 'Expert',
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
    difficulty: 'Expert',
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
    difficulty: 'Expert',
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
    difficulty: 'Expert',
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
    difficulty: 'Expert',
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
    difficulty: 'Expert',
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
    difficulty: 'Expert',
    xp: 90,
    snippet: `struct Good : std::enable_shared_from_this<Good> {
    std::shared_ptr<Good> getptr() {
        return shared_from_this();
    }
};`
  }
];
