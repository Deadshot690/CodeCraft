
import type { OutputPredictionChallenge } from '@/lib/types';

export const outputPredictionChallenges: OutputPredictionChallenge[] = [
  {
    id: 'op1',
    title: 'JS Variable Scope',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `let x = 10;
function foo() {
  let x = 20;
  console.log(x);
}
foo();
console.log(x);`,
    question: 'What will be logged to the console?',
    options: ['10, 20', '20, 10', '20, 20', '10, 10'],
    correctAnswer: '20, 10',
    explanation: 'The `foo` function has its own scope where `x` is 20. Outside `foo`, `x` remains 10.',
  },
  {
    id: 'op2',
    title: 'Python List Mutability',
    language: 'python',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `def modify_list(my_list):
  my_list.append(4)
  my_list = [1, 2, 3]

data = [0]
modify_list(data)
print(data)`,
    question: 'What is the output of this Python code?',
    options: ['[0, 4]', '[1, 2, 3]', '[0]', '[4]'],
    correctAnswer: '[0, 4]',
    explanation: 'Lists are mutable. `my_list.append(4)` modifies the original list passed in. Reassigning `my_list = [1, 2, 3]` only changes the local variable within the function.',
  },
  {
    id: 'op3',
    title: 'Java String Immutability',
    language: 'java',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `public class Test {
    public static void main(String[] args) {
        String s1 = "Hello";
        s1.concat(" World");
        System.out.println(s1);
    }
}`,
    question: 'What is printed to the console?',
    options: ['Hello World', 'Hello', 'null', 'Compilation Error'],
    correctAnswer: 'Hello',
    explanation: 'Strings in Java are immutable. The `concat` method returns a new string but does not change the original string `s1`.',
  },
  {
    id: 'op4',
    title: 'C++ Pointer Arithmetic',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `#include <iostream>
int main() {
    int arr[] = {10, 20, 30, 40};
    int *p = arr;
    p++;
    std::cout << *p + 1;
    return 0;
}`,
    question: 'What is the output?',
    options: ['11', '20', '21', '30'],
    correctAnswer: '21',
    explanation: '`p` initially points to `arr[0]` (10). `p++` moves the pointer to `arr[1]` (20). Then `*p + 1` evaluates to `20 + 1`, which is 21.',
  },
  {
    id: 'op5',
    title: 'JavaScript `this` Keyword',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `const person = {
  name: 'Alex',
  greet: function() { console.log(this.name); }
};
const greetFunc = person.greet;
greetFunc();`,
    question: 'What is the output?',
    options: ['Alex', 'undefined', 'null', 'Error'],
    correctAnswer: 'undefined',
    explanation: 'When `greetFunc` is called, it\'s called from the global scope (or `undefined` in strict mode). The `this` context of `person` is lost.',
  },
  {
    id: 'op6',
    title: 'Python `for-else` Loop',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `for i in range(1, 4):
    if i == 5:
        break
else:
    print("Loop finished")`,
    question: 'What is the output?',
    options: ['Loop finished', 'No output', '1 2 3', 'Error'],
    correctAnswer: 'Loop finished',
    explanation: 'The `else` block of a `for` loop executes if the loop completes without being terminated by a `break` statement.',
  },
  {
    id: 'op7',
    title: 'Java Integer Caching',
    language: 'java',
    difficulty: 'Advanced',
    xp: 50,
    codeSnippet: `public class Main {
    public static void main(String[] args) {
        Integer a = 127;
        Integer b = 127;
        Integer c = 128;
        Integer d = 128;
        System.out.println(a == b);
        System.out.println(c == d);
    }
}`,
    question: 'What will be printed?',
    options: ['true, true', 'true, false', 'false, false', 'false, true'],
    correctAnswer: 'true, false',
    explanation: 'Java caches Integer objects in the range -128 to 127. So, `a` and `b` point to the same object, while `c` and `d` do not.',
  },
  {
    id: 'op8',
    title: 'C++ Virtual Functions',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `#include <iostream>
class Base {
public:
    virtual void show() { std::cout << "Base "; }
};
class Derived : public Base {
public:
    void show() { std::cout << "Derived "; }
};
int main() {
    Base* b = new Derived();
    b->show();
    return 0;
}`,
    question: 'What is the output?',
    options: ['Base', 'Derived', 'Base Derived', 'Compilation Error'],
    correctAnswer: 'Derived',
    explanation: 'Because `show()` is a virtual function, the call is resolved at runtime to the `show()` method of the `Derived` class.',
  },
  {
    id: 'op9',
    title: 'JavaScript Closure Loop',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 55,
    codeSnippet: `for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}`,
    question: 'What is the output?',
    options: ['0, 1, 2', '3, 3, 3', '0, 0, 0', '1, 2, 3'],
    correctAnswer: '3, 3, 3',
    explanation: 'Because `var` is function-scoped, by the time the `setTimeout` callbacks execute, the loop has finished and `i` has a final value of 3.',
  },
  {
    id: 'op10',
    title: 'Python Default Mutable Argument',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `def add_item(item, items=[]):
    items.append(item)
    return items

list1 = add_item("a")
list2 = add_item("b")
print(list1)`,
    question: 'What is printed?',
    options: ['["a"]', '["b"]', '["a", "b"]', '["b", "a"]'],
    correctAnswer: '["a", "b"]',
    explanation: 'The default list `items` is created only once. Both function calls modify the same list.',
  },
  {
    id: 'op11',
    title: 'JavaScript Coercion',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `console.log(1 + "2" + 3);`,
    question: 'What is the output?',
    options: ['6', '123', '15', 'Error'],
    correctAnswer: '123',
    explanation: '`1 + "2"` results in the string "12". Then, `"12" + 3` results in the string "123".',
  },
  {
    id: 'op12',
    title: 'C++ Reference Variable',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `#include <iostream>
int main() {
    int x = 10;
    int &ref = x;
    ref = 20;
    std::cout << x;
    return 0;
}`,
    question: 'What is the output?',
    options: ['10', '20', 'Garbage Value', 'Error'],
    correctAnswer: '20',
    explanation: '`ref` is a reference to `x`. Modifying `ref` also modifies `x`.',
  },
  {
    id: 'op13',
    title: 'Python List Slicing',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `a = [1, 2, 3, 4, 5]
b = a[1:3]
b[0] = 9
print(a)`,
    question: 'What is the output?',
    options: ['[1, 9, 3, 4, 5]', '[1, 2, 3, 4, 5]', '[9, 2, 3, 4, 5]', 'Error'],
    correctAnswer: '[1, 2, 3, 4, 5]',
    explanation: 'Slicing a list creates a shallow copy. Modifying the new list `b` does not affect the original list `a`.',
  },
  {
    id: 'op14',
    title: 'Java Exception Handling',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `public class Test {
    public static int test() {
        try {
            return 1;
        } finally {
            return 2;
        }
    }
    public static void main(String[] args) {
        System.out.println(test());
    }
}`,
    question: 'What is the output?',
    options: ['1', '2', 'No output', 'Compilation Error'],
    correctAnswer: '2',
    explanation: 'A `return` statement in a `finally` block will always override any `return` from the `try` or `catch` blocks.',
  },
  {
    id: 'op15',
    title: 'JavaScript `typeof null`',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `console.log(typeof null);`,
    question: 'What is logged to the console?',
    options: ['"null"', '"undefined"', '"object"', '"Error"'],
    correctAnswer: '"object"',
    explanation: 'This is a well-known quirk in JavaScript. The `typeof null` is historically, and incorrectly, "object".',
  },
  {
    id: 'op16',
    title: 'Python `is` vs `==`',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `a = [1, 2]
b = [1, 2]
print(a == b, a is b)`,
    question: 'What is the output?',
    options: ['True True', 'True False', 'False True', 'False False'],
    correctAnswer: 'True False',
    explanation: '`==` compares the values of the lists, which are the same. `is` compares the object identities, which are different because `a` and `b` are two separate list objects in memory.',
  },
  {
    id: 'op17',
    title: 'C++ Template Function',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `#include <iostream>
template <typename T>
T add(T a, T b) {
    return a + b;
}
int main() {
    std::cout << add(2, 3.5);
    return 0;
}`,
    question: 'What is the result of this code?',
    options: ['5', '5.5', 'Compilation Error', 'Runtime Error'],
    correctAnswer: 'Compilation Error',
    explanation: 'The template type `T` is deduced as `int` from the first argument `2`. The compiler then tries to call `add(int, double)`, but there is no matching function. `add<double>(2, 3.5)` would work.',
  },
  {
    id: 'op18',
    title: 'Java Method Overloading',
    language: 'java',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `public class Main {
    static void display(int a) {
        System.out.println("Got Integer");
    }
    static void display(String a) {
        System.out.println("Got String");
    }
    public static void main(String[] args) {
        display(null);
    }
}`,
    question: 'What is the result?',
    options: ['Got Integer', 'Got String', 'Compilation Error', 'Runtime Error'],
    correctAnswer: 'Compilation Error',
    explanation: 'The call `display(null)` is ambiguous. The compiler does not know whether to call the `int` version (by converting null) or the `String` version.',
  },
  {
    id: 'op19',
    title: 'JavaScript `Promise.then` chain',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw new Error('fail') })
  .catch(e => 1)
  .then(x => x + 1)
  .then(console.log)`,
    question: 'What is logged to the console?',
    options: ['1', '2', 'Error: fail', 'undefined'],
    correctAnswer: '2',
    explanation: 'The `catch` block handles the error and returns `1`. This value is passed to the next `.then`, which adds 1 to it, resulting in `2`.',
  },
  {
    id: 'op20',
    title: 'Python `__str__` vs `__repr__`',
    language: 'python',
    difficulty: 'Advanced',
    xp: 50,
    codeSnippet: `class A:
  def __str__(self):
    return "str"
a = A()
print(a)
print([a])`,
    question: 'What is the output?',
    options: ['str, [str]', 'str, [<...A object...>]', 'repr, [repr]', 'Error'],
    correctAnswer: 'str, [<...A object...>]',
    explanation: '`print(a)` calls `__str__`. When an object is inside a container like a list, its `__repr__` is called. Since `__repr__` is not defined, the default representation is used.',
  },
  {
    id: 'op21',
    title: 'C++ `const` correctness',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `#include <iostream>
class MyClass {
public:
    void foo() const {
        val = 10; 
    }
private:
    int val;
};`,
    question: 'What is the result of this code?',
    options: ['val becomes 10', 'No effect', 'Compilation Error', 'Runtime Error'],
    correctAnswer: 'Compilation Error',
    explanation: 'A `const` member function is not allowed to modify member variables of the class. `val = 10;` is an attempt to modify `val`.',
  },
  {
    id: 'op22',
    title: 'JavaScript Hoisting',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `console.log(a);
var a = 5;`,
    question: 'What is the output?',
    options: ['5', 'null', 'ReferenceError', 'undefined'],
    correctAnswer: 'undefined',
    explanation: '`var` declarations are hoisted to the top of their scope, but their assignments are not. The code is interpreted as `var a; console.log(a); a = 5;`.',
  },
  {
    id: 'op23',
    title: 'Python Dictionary Update',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `d1 = {'a': 1}
d2 = {'a': 2, 'b': 3}
d1.update(d2)
print(d1)`,
    question: 'What is the output?',
    options: ["{'a': 1, 'b': 3}", "{'a': 2, 'b': 3}", "{'a': 1}", "{'a': 2}"],
    correctAnswer: "{'a': 2, 'b': 3}",
    explanation: 'The `update` method merges the second dictionary into the first. If keys overlap, the value from the second dictionary is used.',
  },
  {
    id: 'op24',
    title: 'Java Static Block',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `public class Test {
    static {
        System.out.print("A");
    }
    public static void main(String[] args) {
        System.out.print("B");
    }
    static {
        System.out.print("C");
    }
}`,
    question: 'What is the output?',
    options: ['ABC', 'ACB', 'BAC', 'BCA'],
    correctAnswer: 'ACB',
    explanation: 'Static blocks are executed in the order they appear in the code when the class is first loaded, before the `main` method is called.',
  },
  {
    id: 'op25',
    title: 'JavaScript Array `sort`',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `const numbers = [10, 5, 100, 1];
numbers.sort();
console.log(numbers);`,
    question: 'What is the output?',
    options: ['[1, 5, 10, 100]', '[1, 10, 100, 5]', '[100, 10, 5, 1]', '[1, 100, 5, 10]'],
    correctAnswer: '[1, 10, 100, 5]',
    explanation: 'By default, the `sort` method sorts elements as strings. "100" comes before "5" in lexicographical order.',
  },
  {
    id: 'op26',
    title: 'Python `finally` clause',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `def test():
    try:
        return 1
    finally:
        return 2
print(test())`,
    question: 'What is the output?',
    options: ['1', '2', '1 followed by 2', 'Error'],
    correctAnswer: '2',
    explanation: 'A `return` statement in the `finally` block will always execute, overriding any `return` in the `try` block.',
  },
  {
    id: 'op27',
    title: 'C++ Operator Precedence',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `#include <iostream>
int main() {
    int x = 5;
    std::cout << x++ << " " << x;
    return 0;
}`,
    question: 'What is the output?',
    options: ['5 6', '6 6', '5 5', 'Undefined Behavior'],
    correctAnswer: 'Undefined Behavior',
    explanation: 'Modifying a variable and reading it again in the same expression without a sequence point between them is undefined behavior. The compiler can evaluate the arguments in any order.',
  },
  {
    id: 'op28',
    title: 'Java Autoboxing',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `public class Main {
    public static void main(String[] args) {
        Long val = null;
        if (val > 0) {
            System.out.println("Positive");
        }
    }
}`,
    question: 'What is the result?',
    options: ['Positive', 'No output', 'Compilation Error', 'NullPointerException'],
    correctAnswer: 'NullPointerException',
    explanation: 'The `if` statement tries to unbox the `Long` `val` to a primitive `long` to perform the comparison. Since `val` is null, this throws a `NullPointerException`.',
  },
  {
    id: 'op29',
    title: 'JavaScript `let` vs `var` in loops',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 50,
    codeSnippet: `for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 10);
}`,
    question: 'What is the output?',
    options: ['0, 1, 2', '3, 3, 3', '0, 0, 0', '1, 2, 3'],
    correctAnswer: '0, 1, 2',
    explanation: 'Because `let` is block-scoped, a new binding for `i` is created for each iteration of the loop. Each `setTimeout` callback captures a different `i` value.',
  },
  {
    id: 'op30',
    title: 'Python string interning',
    language: 'python',
    difficulty: 'Advanced',
    xp: 55,
    codeSnippet: `a = "hello-world"
b = "hello-world"
print(a is b)`,
    question: 'What is the most likely output in CPython?',
    options: ['True', 'False', 'Sometimes True, Sometimes False', 'Error'],
    correctAnswer: 'True',
    explanation: 'CPython often interns string literals that look like identifiers. `hello-world` contains a `-`, so it might not be interned, making `a is b` False. However, due to constant folding by the compiler, `a` and `b` will point to the same object, making it True.',
  },
  {
    id: 'op31',
    title: 'Python List Comprehension Scope',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `x = 'outer'
my_list = [x for x in 'inner']
print(x)`,
    question: 'What is the output?',
    options: ["'outer'", "'inner'", "'r'", "Error"],
    correctAnswer: "'outer'",
    explanation: 'List comprehensions in Python 3 have their own scope, so the `x` inside the comprehension does not overwrite the `x` in the outer scope.',
  },
  {
    id: 'op32',
    title: 'JS `NaN` Equality',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `console.log(NaN === NaN);`,
    question: 'What is logged to the console?',
    options: ['true', 'false', 'undefined', 'Error'],
    correctAnswer: 'false',
    explanation: 'A unique property of `NaN` (Not a Number) is that it does not equal anything, including itself. To check for `NaN`, you should use `Number.isNaN()`.',
  },
  {
    id: 'op33',
    title: 'Java Short-Circuit Operators',
    language: 'java',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `public class Test {
    public static boolean t() {
        System.out.print("T");
        return true;
    }
    public static boolean f() {
        System.out.print("F");
        return false;
    }
    public static void main(String[] args) {
        if (f() && t()) {
            // do nothing
        }
    }
}`,
    question: 'What is the output?',
    options: ['F', 'T', 'FT', 'TF'],
    correctAnswer: 'F',
    explanation: 'The logical AND operator `&&` is a short-circuit operator. If the first operand (`f()`) is false, the second operand (`t()`) is not evaluated.',
  },
  {
    id: 'op34',
    title: 'C++ Static Member Variable',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `#include <iostream>
class Counter {
public:
    static int count;
    Counter() { count++; }
};
int Counter::count = 0;
int main() {
    Counter c1;
    Counter c2;
    std::cout << Counter::count;
    return 0;
}`,
    question: 'What is the output?',
    options: ['0', '1', '2', 'Compilation Error'],
    correctAnswer: '2',
    explanation: 'A static member variable is shared by all instances of the class. The constructor is called twice, incrementing the shared `count` variable to 2.',
  },
  {
    id: 'op35',
    title: 'JS `this` in Arrow Functions',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `const obj = {
  name: 'A',
  delayedLog: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 10);
  }
};
obj.delayedLog();`,
    question: 'What is the output?',
    options: ['A', 'undefined', 'Window Object', 'Error'],
    correctAnswer: 'A',
    explanation: 'Arrow functions do not have their own `this` binding. They lexically capture the `this` value of the enclosing context, which in this case is the `delayedLog` function where `this` refers to `obj`.',
  },
  {
    id: 'op36',
    title: 'Python `try-except-else`',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `def divide(x, y):
    try:
        result = x / y
    except ZeroDivisionError:
        print("division by zero!")
    else:
        print("result is", result)
    finally:
        print("executing finally clause")

divide(2, 0)`,
    question: 'What is the output?',
    options: ['division by zero!, executing finally clause', 'result is ..., executing finally clause', 'division by zero!', 'Error'],
    correctAnswer: 'division by zero!, executing finally clause',
    explanation: 'The exception is caught, so the `except` block runs. The `else` block does not run because an exception occurred. The `finally` block runs regardless.',
  },
  {
    id: 'op37',
    title: 'Java `String` Pool',
    language: 'java',
    difficulty: 'Advanced',
    xp: 55,
    codeSnippet: `public class Main {
    public static void main(String[] args) {
        String s1 = "Java";
        String s2 = "Java";
        String s3 = new String("Java");
        System.out.println(s1 == s2);
        System.out.println(s1 == s3);
    }
}`,
    question: 'What is the output?',
    options: ['true, true', 'true, false', 'false, false', 'false, true'],
    correctAnswer: 'true, false',
    explanation: 'String literals are stored in the string pool, so `s1` and `s2` refer to the same object. `new String("Java")` creates a new object on the heap, so `s3` has a different reference.',
  },
  {
    id: 'op38',
    title: 'C++ Inheritance and Pointers',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `#include <iostream>
class Base { public: void show() { std::cout << "Base"; } };
class Derived : public Base { public: void show() { std::cout << "Derived"; } };
int main() {
    Base* b = new Derived();
    b->show();
    return 0;
}`,
    question: 'What is the output?',
    options: ['Base', 'Derived', 'BaseDerived', 'Compilation Error'],
    correctAnswer: 'Base',
    explanation: 'Without the `virtual` keyword on the base class method, the call is resolved statically based on the pointer type (`Base*`), not the object type (`Derived`). This is static binding.',
  },
  {
    id: 'op39',
    title: 'JS `map` vs `forEach`',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 30,
    codeSnippet: `const arr = [1, 2, 3];
const result = arr.forEach(x => x * 2);
console.log(result);`,
    question: 'What is the output?',
    options: ['[2, 4, 6]', '[1, 2, 3]', 'undefined', 'Error'],
    correctAnswer: 'undefined',
    explanation: '`forEach` executes a function for each element but always returns `undefined`. `map` should be used if you want to create a new array based on the return values.',
  },
  {
    id: 'op40',
    title: 'Python `global` Keyword',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `x = 10
def func():
    x = x + 1
    print(x)
func()`,
    question: 'What is the output?',
    options: ['11', '10', 'UnboundLocalError', 'None'],
    correctAnswer: 'UnboundLocalError',
    explanation: 'When you assign to a variable in a scope (`x = ...`), it becomes a local variable for that scope. The code tries to read the local `x` before it has been assigned, causing an error. You need `global x` to modify the global variable.',
  }
];
