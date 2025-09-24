import type { DebugChallenge } from '@/lib/types';

export const debugChallenges: DebugChallenge[] = [
    {
      id: 'db1',
      title: 'Python: Sum of List',
      description: 'This Python function is supposed to calculate the sum of a list of numbers, but it keeps returning 0.',
      language: 'python',
      difficulty: 'Beginner',
      xp: 20,
      buggyCode: `def calculate_sum(numbers):
  total = 0
  for number in numbers:
    number + total
  return total
`,
      testCases: [
          { input: '[1, 2, 3]', expectedOutput: '6' },
          { input: '[-1, 1, 10]', expectedOutput: '10' },
          { input: '[]', expectedOutput: '0' },
      ]
    },
    {
      id: 'db2',
      title: 'JavaScript: Greet User',
      description: 'This JavaScript function should return a greeting string "Hello, [name]!", but it\'s not returning anything.',
      language: 'javascript',
      difficulty: 'Beginner',
      xp: 20,
      buggyCode: `function greet(name) {
  "Hello, " + name + "!"
}`,
      testCases: [
          { input: '"World"', expectedOutput: 'Hello, World!' },
          { input: '"Alice"', expectedOutput: 'Hello, Alice!' },
      ]
    },
    {
      id: 'db3',
      title: 'JavaScript: Counter Bug',
      description: 'This React component has a button that should increment a counter, but the counter value never changes in the UI.',
      language: 'javascript',
      difficulty: 'Intermediate',
      xp: 40,
      buggyCode: `import { useState } from 'react';

function Counter() {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
`,
       testCases: [
          { input: 'User clicks button once', expectedOutput: 'Count: 1' },
          { input: 'User clicks button three times', expectedOutput: 'Count: 3' },
      ]
    },
    {
      id: 'db4',
      title: 'Java: Find Maximum',
      description: 'This Java method should find the maximum number in an array, but it fails with negative numbers.',
      language: 'java',
      difficulty: 'Beginner',
      xp: 25,
      buggyCode: `class Solution {
    public int findMax(int[] nums) {
        int max = 0;
        for (int num : nums) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }
}`,
      testCases: [
        { input: 'new int[]{-5, -2, -10}', expectedOutput: '-2' },
        { input: 'new int[]{1, 5, 2, 9}', expectedOutput: '9' },
      ]
    },
    {
      id: 'db5',
      title: 'C++: String Concatenation',
      description: 'This C++ function should concatenate two strings, but it returns a corrupted string.',
      language: 'cpp',
      difficulty: 'Beginner',
      xp: 25,
      buggyCode: `#include <iostream>
#include <string>

std::string concat(const char* s1, const char* s2) {
    char result[50];
    strcpy(result, s1);
    strcat(result, s2);
    return std::string(result);
}`,
      testCases: [
        { input: '"Hello, ", "World!"', expectedOutput: 'Hello, World!' },
      ]
    },
    {
      id: 'db6',
      title: 'Python: Check for Even Number',
      description: 'The function `is_even` should return True if a number is even, but it is using assignment instead of comparison.',
      language: 'python',
      difficulty: 'Beginner',
      xp: 20,
      buggyCode: `def is_even(n):
    if (n % 2 = 0):
        return True
    else:
        return False`,
      testCases: [
        { input: '4', expectedOutput: 'True' },
        { input: '5', expectedOutput: 'False' },
      ]
    },
    {
      id: 'db7',
      title: 'JavaScript: Array Pop',
      description: 'This function should remove and return the last element of an array, but it returns the whole array.',
      language: 'javascript',
      difficulty: 'Beginner',
      xp: 20,
      buggyCode: `function removeLast(arr) {
    arr.pop;
    return arr;
}`,
      testCases: [
        { input: '[1, 2, 3]', expectedOutput: '3' },
      ]
    },
    {
      id: 'db8',
      title: 'Java: Incorrect Loop Condition',
      description: 'This loop is intended to print numbers from 1 to 5, but it doesn\'t print anything.',
      language: 'java',
      difficulty: 'Beginner',
      xp: 25,
      buggyCode: `class Printer {
    public void printNumbers() {
        for (int i = 1; i > 5; i++) {
            System.out.println(i);
        }
    }
}`,
      testCases: [
        { input: '', expectedOutput: '1\n2\n3\n4\n5\n' },
      ]
    },
    {
      id: 'db9',
      title: 'C++: Off-by-One Error',
      description: 'This function should sum the elements of an array, but it accesses one element out of bounds.',
      language: 'cpp',
      difficulty: 'Intermediate',
      xp: 45,
      buggyCode: `#include <vector>
int sum_array(std::vector<int>& v) {
    int sum = 0;
    for (int i = 0; i <= v.size(); i++) {
        sum += v[i];
    }
    return sum;
}`,
      testCases: [
        { input: 'std::vector<int>{1, 2, 3}', expectedOutput: '6' },
      ]
    },
    {
      id: 'db10',
      title: 'Python: Dictionary Key Error',
      description: 'The code tries to access a dictionary key that might not exist, causing a `KeyError`.',
      language: 'python',
      difficulty: 'Beginner',
      xp: 30,
      buggyCode: `def get_city(user):
    return user["address"]["city"]`,
      testCases: [
        { input: '{"name": "John", "address": {"city": "New York"}}', expectedOutput: 'New York' },
        { input: '{"name": "Jane"}', expectedOutput: 'None' },
      ]
    },
    {
      id: 'db11',
      title: 'JavaScript: Asynchronous Bug',
      description: 'The user data is not loaded because the async function call is not being awaited.',
      language: 'javascript',
      difficulty: 'Intermediate',
      xp: 50,
      buggyCode: `function getUser() {
  const data = fetch('/api/user');
  return data.json();
}`,
      testCases: [
        { input: '', expectedOutput: '{"id": 1, "name": "Test User"}' },
      ]
    },
    {
      id: 'db12',
      title: 'Java: String Comparison',
      description: 'The code compares two strings using `==` instead of `.equals()`, which checks for object reference, not content.',
      language: 'java',
      difficulty: 'Beginner',
      xp: 30,
      buggyCode: `class Checker {
    public boolean areNamesEqual(String name1, String name2) {
        return name1 == name2;
    }
}`,
      testCases: [
        { input: 'new String("test"), new String("test")', expectedOutput: 'true' },
        { input: '"hello", "world"', expectedOutput: 'false' },
      ]
    },
    {
      id: 'db13',
      title: 'C++: Memory Leak',
      description: 'Memory allocated with `new` is never deallocated with `delete`, leading to a memory leak.',
      language: 'cpp',
      difficulty: 'Advanced',
      xp: 70,
      buggyCode: `void create_monster() {
    int* monster_power = new int(100);
    // ... game logic ...
}`,
      testCases: [
        { input: '', expectedOutput: '' },
      ]
    },
    {
      id: 'db14',
      title: 'Python: List Modification While Iterating',
      description: 'Removing items from a list while iterating over it can lead to skipping elements.',
      language: 'python',
      difficulty: 'Intermediate',
      xp: 50,
      buggyCode: `def remove_odds(numbers):
    for number in numbers:
        if number % 2 != 0:
            numbers.remove(number)
    return numbers`,
      testCases: [
        { input: '[1, 2, 3, 4, 5, 6]', expectedOutput: '[2, 4, 6]' },
      ]
    },
    {
      id: 'db15',
      title: 'JavaScript: `this` Context Lost',
      description: 'In the event handler, the `this` keyword does not refer to the component instance.',
      language: 'javascript',
      difficulty: 'Intermediate',
      xp: 55,
      buggyCode: `class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: "Hello" };
    }
    handleClick() {
        alert(this.state.message);
    }
    render() {
        return <button onClick={this.handleClick}>Say Hello</button>;
    }
}`,
      testCases: [
        { input: 'User clicks button', expectedOutput: 'Alert with "Hello"' },
      ]
    },
    // ... 88 more challenges
    { id: 'db16', title: 'Java: Null Pointer Exception', description: 'Accessing a method on a null object throws a NullPointerException.', language: 'java', difficulty: 'Beginner', xp: 30, buggyCode: 'String name = null;\nint length = name.length();', testCases: [{ input: '', expectedOutput: 'Handled gracefully' }] },
    { id: 'db17', title: 'C++: Uninitialized Variable', description: 'The function uses a variable that has not been initialized, leading to undefined behavior.', language: 'cpp', difficulty: 'Beginner', xp: 30, buggyCode: 'int count;\ncount++;', testCases: [{ input: '', expectedOutput: 'Correctly initialized' }] },
    { id: 'db18', title: 'Python: Infinite Recursion', description: 'The recursive function lacks a proper base case, causing a stack overflow.', language: 'python', difficulty: 'Intermediate', xp: 50, buggyCode: 'def countdown(n):\n  print(n)\n  countdown(n - 1)', testCases: [{ input: '5', expectedOutput: '5\n4\n3\n2\n1\n0' }] },
    { id: 'db19', title: 'JavaScript: Incorrect Boolean Check', description: 'Checking for array length with `if (array)` is not the same as `if (array.length > 0)`.', language: 'javascript', difficulty: 'Beginner', xp: 25, buggyCode: 'function process(items) { if (items) { items.forEach(i => console.log(i)) } }', testCases: [{ input: '[]', expectedOutput: '' }] },
    { id: 'db20', title: 'Java: Floating Point Inaccuracy', description: 'Using floats for financial calculations leads to precision errors.', language: 'java', difficulty: 'Intermediate', xp: 45, buggyCode: 'float total = 0.1f + 0.2f; // total is not 0.3', testCases: [{ input: '', expectedOutput: 'Uses BigDecimal' }] },
    { id: 'db21', title: 'C++: Slicing Polymorphic Objects', description: 'Assigning a derived class object to a base class object by value causes slicing.', language: 'cpp', difficulty: 'Advanced', xp: 75, buggyCode: 'class Base { int b; }; class Derived : public Base { int d; }; Derived d; Base b = d;', testCases: [{ input: '', expectedOutput: 'Uses pointers or references' }] },
    { id: 'db22', title: 'Python: Default Mutable Argument', description: 'Using a mutable type like a list as a default argument leads to unexpected behavior.', language: 'python', difficulty: 'Intermediate', xp: 50, buggyCode: 'def add_item(item, my_list=[]):\n  my_list.append(item)\n  return my_list', testCases: [{ input: 'add_item(1) then add_item(2)', expectedOutput: '[2]' }] },
    { id: 'db23', title: 'JavaScript: Hoisting Issue', description: 'A variable is used before it is declared within its scope.', language: 'javascript', difficulty: 'Beginner', xp: 35, buggyCode: 'console.log(myVar); var myVar = 5;', testCases: [{ input: '', expectedOutput: '5' }] },
    { id: 'db24', title: 'Java: Unclosed Resource', description: 'A file stream is opened but never closed, leading to a resource leak.', language: 'java', difficulty: 'Intermediate', xp: 45, buggyCode: 'FileInputStream input = new FileInputStream("file.txt");', testCases: [{ input: '', expectedOutput: 'Uses try-with-resources' }] },
    { id: 'db25', title: 'C++: Dangling Pointer', description: 'A pointer is used after the memory it points to has been freed.', language: 'cpp', difficulty: 'Advanced', xp: 70, buggyCode: 'int* p = new int(5); delete p; *p = 10;', testCases: [{ input: '', expectedOutput: 'Pointer is set to nullptr' }] },
    { id: 'db26', title: 'Python: Incorrect Indentation', description: 'A simple but common bug where incorrect indentation changes the program logic.', language: 'python', difficulty: 'Beginner', xp: 20, buggyCode: 'for i in range(5):\nprint(i)\nprint("Done")', testCases: [{ input: '', expectedOutput: '0\n1\n2\n3\n4\nDone' }] },
    { id: 'db27', title: 'JavaScript: setTimeout Scope', description: 'A loop variable is captured incorrectly in a `setTimeout` callback.', language: 'javascript', difficulty: 'Intermediate', xp: 50, buggyCode: 'for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 100); }', testCases: [{ input: '', expectedOutput: '0\n1\n2' }] },
    { id: 'db28', title: 'Java: Integer Overflow', description: 'Adding two large integers results in an overflow, producing an incorrect value.', language: 'java', difficulty: 'Intermediate', xp: 40, buggyCode: 'int big = Integer.MAX_VALUE;\nint result = big + 1;', testCases: [{ input: '', expectedOutput: 'Uses long or BigInteger' }] },
    { id: 'db29', title: 'C++: Missing Virtual Destructor', description: 'Deleting a derived class object through a base class pointer without a virtual destructor causes undefined behavior.', language: 'cpp', difficulty: 'Advanced', xp: 80, buggyCode: 'class Base {}; class Derived : public Base {}; Base* b = new Derived(); delete b;', testCases: [{ input: '', expectedOutput: 'Base has a virtual destructor' }] },
    { id: 'db30', title: 'Python: Incorrect API Usage', description: 'Using a library function with the wrong arguments.', language: 'python', difficulty: 'Beginner', xp: 30, buggyCode: 'import requests\nresponse = requests.get("https://api.example.com", data={"id": 1})', testCases: [{ input: '', expectedOutput: 'Uses params for GET request' }] },
    { id: 'db31', title: 'JavaScript: Modifying Prototype', description: 'Adding a method to `Object.prototype` can break `for...in` loops.', language: 'javascript', difficulty: 'Advanced', xp: 65, buggyCode: 'Object.prototype.foo = () => {}; const obj = {a:1}; for(let k in obj) console.log(k);', testCases: [{ input: '', expectedOutput: 'a' }] },
    { id: 'db32', title: 'Java: Race Condition', description: 'Two threads modify a shared variable without synchronization, leading to inconsistent results.', language: 'java', difficulty: 'Advanced', xp: 85, buggyCode: 'private int count = 0; public void increment() { count++; }', testCases: [{ input: 'Called by multiple threads', expectedOutput: 'Uses synchronized or AtomicInteger' }] },
    { id: 'db33', title: 'C++: Using `std::endl` Excessively', description: 'Using `std::endl` flushes the stream every time, which can be a performance issue compared to `\'\\n\'`.', language: 'cpp', difficulty: 'Beginner', xp: 25, buggyCode: 'for(int i=0; i<1000; ++i) { std::cout << i << std::endl; }', testCases: [{ input: '', expectedOutput: 'Uses \'\\n\'' }] },
    { id: 'db34', title: 'Python: Shadowing Built-in', description: 'A variable is named `list` or `str`, shadowing the built-in type.', language: 'python', difficulty: 'Beginner', xp: 25, buggyCode: 'list = [1,2,3]\ntype(list)', testCases: [{ input: '', expectedOutput: 'Avoids shadowing built-ins' }] },
    { id: 'db35', title: 'JavaScript: Floating Point Math', description: '0.1 + 0.2 does not equal 0.3 due to floating point representation.', language: 'javascript', difficulty: 'Intermediate', xp: 40, buggyCode: 'console.log(0.1 + 0.2 === 0.3);', testCases: [{ input: '', expectedOutput: 'true' }] },
    { id: 'db36', title: 'Java: Comparing Floats', description: 'Using == to compare floating-point numbers is unreliable due to precision issues.', language: 'java', difficulty: 'Beginner', xp: 30, buggyCode: 'float a = 1.0f / 3.0f; float b = 0.3333333f; boolean eq = a == b;', testCases: [{ input: '', expectedOutput: 'Compares with a tolerance (epsilon)' }] },
    { id: 'db37', title: 'C++: Vector of Booleans `vector<bool>`', description: '`std::vector<bool>` is a space-optimized specialization that does not store elements contiguously, which can lead to surprising behavior.', language: 'cpp', difficulty: 'Advanced', xp: 60, buggyCode: 'std::vector<bool> v = {true}; bool* p = &v[0];', testCases: [{ input: '', expectedOutput: 'Uses `std::vector<char>` or `std::deque<bool>` instead' }] },
    { id: 'db38', title: 'Python: Division Error', description: 'In Python 2, `5 / 2` performs integer division and results in 2, not 2.5.', language: 'python', difficulty: 'Beginner', xp: 25, buggyCode: '# Assumes Python 2 environment\nresult = 5 / 2', testCases: [{ input: '', expectedOutput: '2.5' }] },
    { id: 'db39', title: 'JavaScript: Implicit Coercion', description: 'The `==` operator performs type coercion, which can lead to unexpected results like `\'\' == false` being true.', language: 'javascript', difficulty: 'Beginner', xp: 30, buggyCode: 'if ("" == false) { /* true */ }', testCases: [{ input: '', expectedOutput: 'Uses `===` for strict comparison' }] },
    { id: 'db40', title: 'Java: Autoboxing Null', description: 'Attempting to unbox a `null` Integer to a primitive `int` causes a `NullPointerException`.', language: 'java', difficulty: 'Intermediate', xp: 45, buggyCode: 'Integer num = null; int n = num;', testCases: [{ input: '', expectedOutput: 'Checks for null before unboxing' }] },
    { id: 'db41', title: 'C++: Object slicing', description: 'When a derived class object is assigned to a base class object, the derived part of the object is "sliced off".', language: 'cpp', difficulty: 'Advanced', xp: 75, buggyCode: 'class B{}; class D:public B{}; D d; B b = d;', testCases: [{ input: '', expectedOutput: 'Uses pointers or references to achieve polymorphism' }] },
    { id: 'db42', title: 'Python: Re-raising exception incorrectly', description: 'Using `raise e` instead of `raise` in an except block can obscure the original stack trace.', language: 'python', difficulty: 'Intermediate', xp: 40, buggyCode: 'try:\n    1/0\nexcept Exception as e:\n    raise e', testCases: [{ input: '', expectedOutput: 'Uses `raise`' }] },
    { id: 'db43', title: 'JavaScript: Array `sort` method', description: 'The default `sort` method sorts elements as strings, leading to incorrect numerical sorting.', language: 'javascript', difficulty: 'Beginner', xp: 35, buggyCode: 'const numbers = [10, 5, 20, 2];\nnumbers.sort();', testCases: [{ input: '', expectedOutput: '[2, 5, 10, 20]' }] },
    { id: 'db44', title: 'Java: Modifying Collection while Iterating', description: 'Removing an element from a list using the list\'s `remove` method while in a for-each loop throws `ConcurrentModificationException`.', language: 'java', difficulty: 'Intermediate', xp: 55, buggyCode: 'List<String> list = new ArrayList<>(); list.add("a");\nfor (String s : list) { list.remove(s); }', testCases: [{ input: '', expectedOutput: 'Uses an Iterator to remove elements' }] },
    { id: 'db45', title: 'C++: Forgetting to join threads', description: 'A `std::thread` that is not joined or detached will cause `std::terminate` to be called when it goes out of scope.', language: 'cpp', difficulty: 'Advanced', xp: 70, buggyCode: 'void foo() { std::thread t([]{}); }', testCases: [{ input: '', expectedOutput: 'Calls `t.join()` or `t.detach()`' }] },
    { id: 'db46', title: 'Python: Misunderstanding `and` and `or`', description: 'The `or` operator returns the first truthy value, not necessarily `True`.', language: 'python', difficulty: 'Beginner', xp: 25, buggyCode: 'result = "hello" or "world"\n# expecting True', testCases: [{ input: '', expectedOutput: '"hello"' }] },
    { id: 'db47', title: 'JavaScript: `parseInt` without radix', description: '`parseInt("08")` can be interpreted as octal in older JS engines if the radix is not specified.', language: 'javascript', difficulty: 'Beginner', xp: 30, buggyCode: 'parseInt("08");', testCases: [{ input: '', expectedOutput: '8' }] },
    { id: 'db48', title: 'Java: Using `Date` constructor', description: 'The `new Date(year, month, day)` constructor is deprecated and has unexpected behavior.', language: 'java', difficulty: 'Beginner', xp: 30, buggyCode: 'Date d = new Date(2023, 11, 25);', testCases: [{ input: '', expectedOutput: 'Uses `LocalDate` or `Calendar`' }] },
    { id: 'db49', title: 'C++: `cin` leaves newline', description: 'Using `cin >> val;` followed by `getline` can cause `getline` to read an empty string because `cin` leaves the newline character in the buffer.', language: 'cpp', difficulty: 'Intermediate', xp: 45, buggyCode: 'int i; std::string s; std::cin >> i; std::getline(std::cin, s);', testCases: [{ input: '42\nhello', expectedOutput: 's == "hello"' }] },
    { id: 'db50', title: 'Python: Class variable vs instance variable', description: 'Modifying a class variable via an instance can have unintended side effects on other instances.', language: 'python', difficulty: 'Intermediate', xp: 50, buggyCode: 'class A: x = []\na1 = A()\na1.x.append(1)', testCases: [{ input: 'a2 = A(); print(a2.x)', expectedOutput: '[]' }] },
    { id: 'db51', title: 'JavaScript: Missing `break` in `switch`', description: 'Forgetting a `break` statement in a `switch` case causes fall-through.', language: 'javascript', difficulty: 'Beginner', xp: 25, buggyCode: 'switch(val){ case 1: console.log(1); case 2: console.log(2); }', testCases: [{ input: 'val = 1', expectedOutput: '1' }] },
    { id: 'db52', title: 'Java: Overloading vs Overriding', description: 'A method in a subclass has the same name but different parameters, thus overloading the method instead of overriding it.', language: 'java', difficulty: 'Intermediate', xp: 45, buggyCode: 'class A{ void m(Object o){} } class B extends A{ void m(String s){} }', testCases: [{ input: '', expectedOutput: 'Method in B uses `@Override` annotation and same signature.' }] },
    { id: 'db53', title: 'C++: Deleting an array with `delete`', description: 'Deleting an array allocated with `new[]` using `delete` instead of `delete[]` is undefined behavior.', language: 'cpp', difficulty: 'Intermediate', xp: 50, buggyCode: 'int* arr = new int[10]; delete arr;', testCases: [{ input: '', expectedOutput: 'Uses `delete[] arr`' }] },
    { id: 'db54', title: 'Python: `is` vs `==`', description: 'Using `is` to compare values like small integers might work sometimes but fails for larger integers or strings. `==` should be used for value equality.', language: 'python', difficulty: 'Beginner', xp: 35, buggyCode: 'a = 257\nb = 257\nprint(a is b)', testCases: [{ input: '', expectedOutput: 'True' }] },
    { id: 'db55', title: 'JavaScript: Using `for...in` for arrays', description: 'Using `for...in` to iterate over an array can include properties from the prototype chain and does not guarantee order.', language: 'javascript', difficulty: 'Intermediate', xp: 40, buggyCode: 'let arr = [1,2]; for(let i in arr) console.log(i);', testCases: [{ input: '', expectedOutput: 'Uses `for...of` or `forEach`' }] },
    { id: 'db56', title: 'Java: `public` class in wrong file', description: 'A file named `MyClass.java` contains a `public class OtherClass {}`, which is not allowed. A java file can only have one public class with the same name as the file.', language: 'java', difficulty: 'Beginner', xp: 25, buggyCode: '// In MyClass.java\npublic class OtherClass {}', testCases: [{ input: '', expectedOutput: 'File is named OtherClass.java' }] },
    { id: 'db57', title: 'C++: Order of evaluation', description: 'Relying on the order of evaluation of function arguments is undefined behavior.', language: 'cpp', difficulty: 'Advanced', xp: 60, buggyCode: 'int i = 0; foo(i++, i++);', testCases: [{ input: '', expectedOutput: 'Evaluates expressions into separate variables before function call.' }] },
    { id: 'db58', title: 'Python: `try...except` too broad', description: 'Using a bare `except:` clause catches all exceptions, including `SystemExit` and `KeyboardInterrupt`, making the program hard to terminate.', language: 'python', difficulty: 'Intermediate', xp: 40, buggyCode: 'try: 1/0 except: pass', testCases: [{ input: '', expectedOutput: '`except ZeroDivisionError:`' }] },
    { id: 'db59', title: 'JavaScript: `Array.map` with `parseInt`', description: 'Passing `parseInt` directly to `map` is problematic because `map` provides three arguments (value, index, array) and `parseInt` can take two (string, radix).', language: 'javascript', difficulty: 'Intermediate', xp: 50, buggyCode: '[\'10\', \'10\', \'10\'].map(parseInt)', testCases: [{ input: '', expectedOutput: '[10, 10, 10]' }] },
    { id: 'db60', title: 'Java: `char` arithmetic', description: 'Adding to a `char` performs integer arithmetic based on its ASCII/Unicode value.', language: 'java', difficulty: 'Beginner', xp: 30, buggyCode: 'char c = \'A\' + 1;', testCases: [{ input: '', expectedOutput: '\'B\'' }] },
    { id: 'db61', title: 'C++: Returning reference to local variable', description: 'Returning a reference or pointer to a local variable leads to a dangling reference/pointer.', language: 'cpp', difficulty: 'Intermediate', xp: 55, buggyCode: 'int& get_local() { int x=5; return x; }', testCases: [{ input: '', expectedOutput: 'Returns by value' }] },
    { id: 'db62', title: 'Python: Reading file without closing', description: 'Opening a file but not ensuring it gets closed can lead to resource leaks.', language: 'python', difficulty: 'Beginner', xp: 30, buggyCode: 'f = open("file.txt")\ncontent = f.read()', testCases: [{ input: '', expectedOutput: 'Uses `with open(...) as f:`' }] },
    { id: 'db63', title: 'JavaScript: Accidental global variable', description: 'Assigning a value to an undeclared variable inside a function creates a global variable.', language: 'javascript', difficulty: 'Beginner', xp: 30, buggyCode: 'function foo() { myVar = 5; }', testCases: [{ input: '', expectedOutput: 'Uses `let`, `const`, or `var`' }] },
    { id: 'db64', title: 'Java: `switch` fallthrough', description: 'Missing `break` statements in a `switch` block cause unintentional fall-through.', language: 'java', difficulty: 'Beginner', xp: 25, buggyCode: 'int x = 1; switch(x){ case 1: System.out.print("1"); case 2: System.out.print("2"); }', testCases: [{ input: '', expectedOutput: '"1"' }] },
    { id: 'db65', title: 'C++: Incorrect template specialization', description: 'Syntax for template specialization is incorrect.', language: 'cpp', difficulty: 'Advanced', xp: 70, buggyCode: 'template<T> class C{}; template<int> class C {};', testCases: [{ input: '', expectedOutput: '`template<> class C<int> {};`' }] },
    { id: 'db66', title: 'Python: String formatting error', description: 'Using old `%` formatting with a tuple that has the wrong number of items.', language: 'python', difficulty: 'Beginner', xp: 20, buggyCode: '"%s %s" % "hello"', testCases: [{ input: '', expectedOutput: '`"hello world"`' }] },
    { id: 'db67', title: 'JavaScript: Callback Hell', description: 'Deeply nested callbacks make code hard to read and maintain.', language: 'javascript', difficulty: 'Intermediate', xp: 45, buggyCode: 'step1(() => { step2(() => { step3(); }); });', testCases: [{ input: '', expectedOutput: 'Uses Promises or async/await' }] },
    { id: 'db68', title: 'Java: Checking for `NaN`', description: '`NaN` is not equal to anything, including itself. So `x == Double.NaN` is always false.', language: 'java', difficulty: 'Intermediate', xp: 40, buggyCode: 'double x = Double.NaN; if (x == Double.NaN) {}', testCases: [{ input: '', expectedOutput: 'Uses `Double.isNaN(x)`' }] },
    { id: 'db69', title: 'C++: Integer division', description: 'Dividing two integers results in an integer, truncating the decimal part.', language: 'cpp', difficulty: 'Beginner', xp: 25, buggyCode: 'float f = 5 / 2;', testCases: [{ input: '', expectedOutput: '2.5' }] },
    { id: 'db70', title: 'Python: `zip` with different lengths', description: '`zip` stops as soon as one of the iterables is exhausted.', language: 'python', difficulty: 'Intermediate', xp: 40, buggyCode: 'list(zip([1,2], [3,4,5]))', testCases: [{ input: '', expectedOutput: 'Uses `itertools.zip_longest`' }] },
    { id: 'db71', title: 'JavaScript: Creating a `Date` from a string', description: '`new Date(string)` can have inconsistent parsing behavior across browsers.', language: 'javascript', difficulty: 'Intermediate', xp: 45, buggyCode: 'new Date("2023-01-25")', testCases: [{ input: '', expectedOutput: 'Specifies format or uses year, month, day arguments' }] },
    { id: 'db72', title: 'Java: `substring` off-by-one', description: '`substring`\'s end index is exclusive, a common source of off-by-one errors.', language: 'java', difficulty: 'Beginner', xp: 30, buggyCode: '"hello".substring(0, 5)', testCases: [{ input: '', expectedOutput: '"hell"' }] },
    { id: 'db73', title: 'C++: Signed/unsigned comparison', description: 'Comparing signed and unsigned integers can lead to unexpected results due to integer promotion rules.', language: 'cpp', difficulty: 'Intermediate', xp: 50, buggyCode: 'unsigned int u = 0; int i = -1; if (i < u) { /* does not execute */ }', testCases: [{ input: '', expectedOutput: 'Casts variables to same type' }] },
    { id: 'db74', title: 'Python: `copy` vs `deepcopy`', description: 'A shallow copy (`copy`) of a list of lists will still have the inner lists shared.', language: 'python', difficulty: 'Intermediate', xp: 55, buggyCode: 'import copy; l1 = [[1]]; l2 = copy.copy(l1); l2[0][0] = 2', testCases: [{ input: 'print(l1)', expectedOutput: '[[1]]' }] },
    { id: 'db75', title: 'JavaScript: `typeof null`', description: 'The `typeof null` is historically and confusingly `"object"`.', language: 'javascript', difficulty: 'Beginner', xp: 30, buggyCode: 'if (typeof myVar === "object") { /* could be null */ }', testCases: [{ input: 'myVar = null', expectedOutput: 'Handles null explicitly' }] },
    { id: 'db76', title: 'Java: `finally` block behavior', description: 'A `return` statement in a `finally` block will override any exception thrown or value returned from the `try` or `catch` block.', language: 'java', difficulty: 'Advanced', xp: 60, buggyCode: 'try { return 1; } finally { return 2; }', testCases: [{ input: '', expectedOutput: 'Avoids `return` in `finally`' }] },
    { id: 'db77', title: 'C++: Variable shadowing', description: 'A variable in an inner scope has the same name as a variable in an outer scope, hiding it.', language: 'cpp', difficulty: 'Beginner', xp: 30, buggyCode: 'int x = 5; for(int x=0; x<3; ++x){}', testCases: [{ input: '', expectedOutput: 'Uses different variable names' }] },
    { id: 'db78', title: 'Python: Accessing dict keys', description: 'Accessing a key with `d[key]` will raise a `KeyError` if it doesn\'t exist.', language: 'python', difficulty: 'Beginner', xp: 25, buggyCode: 'd = {}; print(d["missing"])', testCases: [{ input: '', expectedOutput: 'Uses `d.get("missing")`' }] },
    { id: 'db79', title: 'JavaScript: Block-scoped functions', description: 'In strict mode, functions declared inside blocks are block-scoped and not accessible outside.', language: 'javascript', difficulty: 'Intermediate', xp: 40, buggyCode: '"use strict"; if (true) { function foo() {} } foo();', testCases: [{ input: '', expectedOutput: 'Declares function outside the block' }] },
    { id: 'db80', title: 'Java: Default constructor', description: 'If you define any constructor in a class, the compiler will not generate the default no-argument constructor.', language: 'java', difficulty: 'Beginner', xp: 30, buggyCode: 'class A{ A(int x){} }; A a = new A();', testCases: [{ input: '', expectedOutput: 'Provides a no-argument constructor explicitly' }] },
    { id: 'db81', title: 'C++: Static initialization order fiasco', description: 'The initialization order of static variables across different translation units is not defined, which can cause issues if one depends on another.', language: 'cpp', difficulty: 'Advanced', xp: 85, buggyCode: '// a.cpp\nint x = 5;\n// b.cpp\nextern int x;\nint y = x + 1;', testCases: [{ input: '', expectedOutput: 'Uses a function to return a local static instance' }] },
    { id: 'db82', title: 'Python: Floating point precision', description: '0.1 + 0.1 + 0.1 != 0.3', language: 'python', difficulty: 'Beginner', xp: 35, buggyCode: 'print(0.1 + 0.1 + 0.1 == 0.3)', testCases: [{ input: '', expectedOutput: 'Uses `math.isclose` or `decimal` module' }] },
    { id: 'db83', title: 'JavaScript: Automatic semicolon insertion (ASI)', description: 'ASI can cause unexpected behavior, for example by inserting a semicolon after `return`.', language: 'javascript', difficulty: 'Intermediate', xp: 50, buggyCode: 'function foo() { return\n { a: 1 }; }', testCases: [{ input: 'foo()', expectedOutput: '{ a: 1 }' }] },
    { id: 'db84', title: 'Java: `Arrays.asList` fixed size', description: 'The list returned by `Arrays.asList` is fixed-size; methods like `add` or `remove` will throw `UnsupportedOperationException`.', language: 'java', difficulty: 'Intermediate', xp: 45, buggyCode: 'List<String> list = Arrays.asList("a"); list.add("b");', testCases: [{ input: '', expectedOutput: '`new ArrayList<>(Arrays.asList("a"))`' }] },
    { id: 'db85', title: 'C++: Most Vexing Parse', description: 'The compiler interprets what was intended as a variable definition as a function declaration.', language: 'cpp', difficulty: 'Advanced', xp: 65, buggyCode: 'MyClass c();', testCases: [{ input: '', expectedOutput: '`MyClass c;` or `MyClass c{};`' }] },
    { id: 'db86', title: 'Python: `split` without arguments', description: '`"a  b".split(" ")` results in `[\'a\', \'\', \'b\']`, while `.split()` handles multiple spaces correctly.', language: 'python', difficulty: 'Beginner', xp: 30, buggyCode: '"a  b".split(" ")', testCases: [{ input: '', expectedOutput: '[\'a\', \'b\']' }] },
    { id: 'db87', title: 'JavaScript: `NaN` is not equal to itself', description: '`NaN === NaN` is false.', language: 'javascript', difficulty: 'Beginner', xp: 30, buggyCode: 'let x = NaN; if(x === NaN){}', testCases: [{ input: '', expectedOutput: 'Uses `Number.isNaN(x)`' }] },
    { id: 'db88', title: 'Java: `final` keyword misunderstanding', description: '`final` on a reference variable means the reference cannot be changed, but the object it points to can be modified.', language: 'java', difficulty: 'Intermediate', xp: 40, buggyCode: 'final List<String> list = new ArrayList<>(); list = new ArrayList<>();', testCases: [{ input: '', expectedOutput: 'Modifies the list content instead of reassigning' }] },
    { id: 'db89', title: 'C++: String literal type', description: 'The type of a string literal like `"hello"` is `const char[6]`, not `std::string`.', language: 'cpp', difficulty: 'Beginner', xp: 30, buggyCode: 'void foo(std::string s) {}\nfoo("hello");', testCases: [{ input: '', expectedOutput: 'Passes a `std::string` object' }] },
    { id: 'db90', title: 'Python: `datetime` timezone unaware', description: 'Creating a `datetime` object without timezone information can lead to bugs when dealing with different timezones.', language: 'python', difficulty: 'Intermediate', xp: 50, buggyCode: 'from datetime import datetime\nnow = datetime.now()', testCases: [{ input: '', expectedOutput: 'Uses a timezone-aware object' }] },
    { id: 'db91', title: 'JavaScript: `sort()` mutates array', description: 'The `sort()` method sorts the array in place and returns the same array reference.', language: 'javascript', difficulty: 'Beginner', xp: 35, buggyCode: 'const arr = [3,1,2]; const sorted = arr.sort();', testCases: [{ input: 'console.log(arr)', expectedOutput: '[1,2,3]' }] },
    { id: 'db92', title: 'Java: Hashing issue with mutable keys', description: 'If a mutable object is used as a key in a `HashMap` and its state changes, it can become "lost" in the map.', language: 'java', difficulty: 'Advanced', xp: 70, buggyCode: 'class Point {int x,y;...} Map<Point,String> map = new HashMap<>(); Point p = new Point(1,1); map.put(p, "a"); p.x = 2;', testCases: [{ input: 'map.get(p)', expectedOutput: 'Uses an immutable key' }] },
    { id: 'db93', title: 'C++: Implicit conversion', description: 'A constructor that can be called with a single argument may be used for implicit conversions, which can be undesirable.', language: 'cpp', difficulty: 'Intermediate', xp: 50, buggyCode: 'class MyString { MyString(int size); }; MyString s = 10;', testCases: [{ input: '', expectedOutput: 'Constructor is marked `explicit`' }] },
    { id: 'db94', title: 'Python: Chaining comparisons', description: '`a > b > c` is valid and works as expected, but developers from other languages might get confused.', language: 'python', difficulty: 'Beginner', xp: 20, buggyCode: 'print(5 > 3 > 1)', testCases: [{ input: '', expectedOutput: 'True' }] },
    { id: 'db95', title: 'JavaScript: `this` in arrow functions', description: 'Arrow functions do not have their own `this` context; they inherit it from the enclosing scope.', language: 'javascript', difficulty: 'Intermediate', xp: 45, buggyCode: 'function Dog(){ this.age=0; setInterval(() => { this.age++; }, 1000); }', testCases: [{ input: 'new Dog()', expectedOutput: 'age increments correctly' }] },
    { id: 'db96', title: 'Java: Exception swallowing', description: 'Catching an exception and doing nothing with it (or just printing the stack trace) hides problems.', language: 'java', difficulty: 'Beginner', xp: 35, buggyCode: 'try { something(); } catch (Exception e) {}', testCases: [{ input: '', expectedOutput: 'Logs the exception or re-throws it' }] },
    { id: 'db97', title: 'C++: Using `auto` for proxies', description: 'Using `auto` with proxy objects (like `vector<bool>::reference`) can lead to dangling references.', language: 'cpp', difficulty: 'Advanced', xp: 75, buggyCode: 'std::vector<bool> v(1); auto b = v[0];', testCases: [{ input: '', expectedOutput: '`auto b = static_cast<bool>(v[0]);`' }] },
    { id: 'db98', title: 'Python: Integer caching', description: 'Python caches small integers (-5 to 256), so `is` works for them but not for larger numbers.', language: 'python', difficulty: 'Intermediate', xp: 40, buggyCode: 'a=257; b=257; a is b', testCases: [{ input: '', expectedOutput: 'False' }] },
    { id: 'db99', title: 'JavaScript: `let` in loops', description: 'Using `let` in a for loop creates a new binding for each iteration, which is different from `var`.', language: 'javascript', difficulty: 'Intermediate', xp: 40, buggyCode: 'for(let i=0; i<3; i++){ setTimeout(()=>console.log(i), 0) }', testCases: [{ input: '', expectedOutput: '0\n1\n2' }] },
    { id: 'db100', title: 'Java: `static` confusion', description: 'A non-static method cannot be called from a static context without an object instance.', language: 'java', difficulty: 'Beginner', xp: 30, buggyCode: 'class A{ void m(){} public static void main(String[] args){ m(); }}', testCases: [{ input: '', expectedOutput: '`new A().m();`' }] },
    { id: 'db101', title: 'C++: Template `typename` keyword', description: 'When referring to a nested type that depends on a template parameter, you must use the `typename` keyword.', language: 'cpp', difficulty: 'Advanced', xp: 65, buggyCode: 'template<class T> void foo() { T::iterator * it; }', testCases: [{ input: '', expectedOutput: '`typename T::iterator * it;`' }] },
    { id: 'db102', title: 'Python: GIL (Global Interpreter Lock)', description: 'The GIL prevents multiple native threads from executing Python bytecodes at the same time in CPython, limiting CPU-bound parallelism.', language: 'python', difficulty: 'Advanced', xp: 70, buggyCode: '# Threading for CPU-bound task', testCases: [{ input: '', expectedOutput: 'Uses `multiprocessing` instead' }] },
    { id: 'db103', title: 'JavaScript: `Promise` constructor anti-pattern', description: 'Wrapping an already-existing promise in a `new Promise` constructor is unnecessary.', language: 'javascript', difficulty: 'Intermediate', xp: 45, buggyCode: 'const p = Promise.resolve(1); return new Promise(resolve => resolve(p));', testCases: [{ input: '', expectedOutput: '`return Promise.resolve(1);`' }] }
  ];
  

    