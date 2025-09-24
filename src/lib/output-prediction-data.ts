
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
  },
  {
    id: 'op41',
    title: 'JavaScript `reduce`',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `const arr = [1, 2, 3];
const sum = arr.reduce((acc, current) => acc + current, 5);
console.log(sum);`,
    question: 'What is the output?',
    options: ['6', '11', '15', 'Error'],
    correctAnswer: '11',
    explanation: 'The `reduce` method is called with an initial value of 5. So, the accumulator `acc` starts at 5. The sum is 5 + 1 + 2 + 3 = 11.',
  },
  {
    id: 'op42',
    title: 'Python `*` operator',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `print([1, 2] * 3)`,
    question: 'What is the output?',
    options: ['[3, 6]', '[1, 2, 1, 2, 1, 2]', '[1, 2, 3]', 'Error'],
    correctAnswer: '[1, 2, 1, 2, 1, 2]',
    explanation: 'The `*` operator on a list creates a new list by concatenating the original list to itself the specified number of times.',
  },
  {
    id: 'op43',
    title: 'Java `equals` vs `==`',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `public class Main {
    public static void main(String[] args) {
        String s1 = new String("test");
        String s2 = new String("test");
        System.out.println(s1 == s2);
        System.out.println(s1.equals(s2));
    }
}`,
    question: 'What is the output?',
    options: ['true, true', 'false, true', 'true, false', 'false, false'],
    correctAnswer: 'false, true',
    explanation: '`==` compares object references. Since `s1` and `s2` are created with `new`, they are distinct objects. `.equals()` compares the string contents, which are the same.',
  },
  {
    id: 'op44',
    title: 'C++ `sizeof` operator',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `#include <iostream>
int main() {
    char arr[] = "hello";
    std::cout << sizeof(arr);
    return 0;
}`,
    question: 'What is the output?',
    options: ['5', '6', '4', '8'],
    correctAnswer: '6',
    explanation: 'The char array includes the null terminator `\\0` at the end of the string literal, so its size is 6 bytes (h, e, l, l, o, \\0).',
  },
  {
    id: 'op45',
    title: 'JavaScript `...` Spread Operator',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [0, ...arr1, ...arr2, 5];
console.log(combined);`,
    question: 'What is the output?',
    options: ['[0, [1, 2], [3, 4], 5]', '[0, 1, 2, 3, 4, 5]', '[1, 2, 3, 4, 0, 5]', 'Error'],
    correctAnswer: '[0, 1, 2, 3, 4, 5]',
    explanation: 'The spread operator `...` expands the elements of an array into the new array.',
  },
  {
    id: 'op46',
    title: 'Python Tuple Unpacking',
    language: 'python',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `a, b, *c = (1, 2, 3, 4)
print(c)`,
    question: 'What is the output?',
    options: ['3', '[3, 4]', '4', 'Error'],
    correctAnswer: '[3, 4]',
    explanation: 'The `*` operator in tuple unpacking collects all "leftover" items into a list.',
  },
  {
    id: 'op47',
    title: 'Java `instanceof`',
    language: 'java',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `public class Main {
    public static void main(String[] args) {
        String s = null;
        System.out.println(s instanceof String);
    }
}`,
    question: 'What is the output?',
    options: ['true', 'false', 'Compilation Error', 'NullPointerException'],
    correctAnswer: 'false',
    explanation: 'The `instanceof` operator returns `false` if the object reference is `null`.',
  },
  {
    id: 'op48',
    title: 'C++ Reference to Pointer',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 55,
    codeSnippet: `#include <iostream>
void func(int *&p) {
    p = new int(10);
}
int main() {
    int *ptr = nullptr;
    func(ptr);
    std::cout << *ptr;
    delete ptr;
    return 0;
}`,
    question: 'What is the output?',
    options: ['0', '10', 'Garbage Value', 'Segfault'],
    correctAnswer: '10',
    explanation: 'The function takes a reference to a pointer (`*&`). This allows the function to modify the original pointer `ptr` itself, making it point to the newly allocated memory.',
  },
  {
    id: 'op49',
    title: 'JavaScript `Array.from`',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `const set = new Set(['a', 'b', 'c']);
const arr = Array.from(set);
console.log(arr[1]);`,
    question: 'What is the output?',
    options: ['a', 'b', 'c', 'undefined'],
    correctAnswer: 'b',
    explanation: '`Array.from` creates a new array instance from an iterable object like a Set.',
  },
  {
    id: 'op50',
    title: 'Python `__slots__`',
    language: 'python',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `class MyClass:
    __slots__ = ['val']
    def __init__(self):
        self.val = 10

obj = MyClass()
obj.new_attr = 20`,
    question: 'What is the result?',
    options: ['No error', 'AttributeError', 'TypeError', 'ValueError'],
    correctAnswer: 'AttributeError',
    explanation: 'Using `__slots__` prevents the creation of `__dict__` for instances, meaning you cannot add new attributes to the instance that are not defined in `__slots__`.',
  },
  {
    id: 'op51',
    title: 'JavaScript `||` operator',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `console.log(0 || "" || "hello" || 5);`,
    question: 'What is the output?',
    options: ['0', '""', 'hello', '5'],
    correctAnswer: 'hello',
    explanation: 'The logical OR `||` operator returns the first truthy value it encounters. `0` and `""` are falsy, so `"hello"` is returned.',
  },
  {
    id: 'op52',
    title: 'Python `any` function',
    language: 'python',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `my_list = [False, 0, '']
print(any(my_list))`,
    question: 'What is the output?',
    options: ['True', 'False', 'Error', 'None'],
    correctAnswer: 'False',
    explanation: '`any()` returns `True` if at least one element in the iterable is truthy. In this case, `False`, `0`, and `""` are all falsy.',
  },
  {
    id: 'op53',
    title: 'Java `final` method',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `class Base {
    public final void show() {}
}
class Derived extends Base {
    public void show() {} // trying to override
}`,
    question: 'What is the result?',
    options: ['No error', 'Runtime Error', 'Compilation Error', 'Prints nothing'],
    correctAnswer: 'Compilation Error',
    explanation: 'A `final` method cannot be overridden by a subclass.',
  },
  {
    id: 'op54',
    title: 'C++ `auto` keyword',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `#include <vector>
int main() {
    const std::vector<int> v = {1, 2};
    auto x = v[0]; // What is the type of x?
}`,
    question: 'What is the type of `x`?',
    options: ['int', 'const int', 'const int&', 'int&'],
    correctAnswer: 'int',
    explanation: 'The `auto` keyword deduces the type without `const` or reference qualifiers. `x` is a copy, so its type is `int`.',
  },
  {
    id: 'op55',
    title: 'JavaScript `Set` object',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("a");
console.log(letters.size);`,
    question: 'What is the output?',
    options: ['1', '2', '3', 'undefined'],
    correctAnswer: '2',
    explanation: 'A `Set` only stores unique values. Adding "a" a second time has no effect.',
  },
  {
    id: 'op56',
    title: 'Python Negative Indexing',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `my_list = [10, 20, 30]
print(my_list[-1])`,
    question: 'What is the output?',
    options: ['10', '20', '30', 'IndexError'],
    correctAnswer: '30',
    explanation: 'Negative indexing in Python starts from the end of the list. `-1` refers to the last item.',
  },
  {
    id: 'op57',
    title: 'Java Array vs ArrayList',
    language: 'java',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `int[] arr = new int[2];
System.out.println(arr.length);
// ArrayList<Integer> list = new ArrayList<>();
// System.out.println(list.size());`,
    question: 'How do you get the size of an array?',
    options: ['.size()', '.length()', '.length', '.size'],
    correctAnswer: '.length',
    explanation: 'Arrays have a `length` property, while collections like `ArrayList` use the `size()` method.',
  },
  {
    id: 'op58',
    title: 'C++ `const` pointer',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 50,
    codeSnippet: `int x = 5;
const int* p = &x;
// Which line will cause a compilation error?`,
    question: 'Which line will fail to compile?',
    options: ['int y = 10; p = &y;', '*p = 10;', 'std::cout << *p;', 'All are valid'],
    correctAnswer: '*p = 10;',
    explanation: '`const int*` declares a pointer to a `const int`. This means you cannot change the value that `p` points to through the pointer `p`.',
  },
  {
    id: 'op59',
    title: 'JavaScript `Object.keys`',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `const obj = { a: 1, b: 2 };
console.log(Object.keys(obj).length);`,
    question: 'What is the output?',
    options: ['0', '1', '2', 'undefined'],
    correctAnswer: '2',
    explanation: '`Object.keys(obj)` returns an array of the object\'s own enumerable property names, which in this case is `["a", "b"]`.',
  },
  {
    id: 'op60',
    title: 'Python `zip` function',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `keys = ['a', 'b']
values = [1, 2, 3]
my_dict = dict(zip(keys, values))
print(my_dict)`,
    question: 'What is the output?',
    options: ["{'a': 1, 'b': 2}", "{'a': 1, 'b': 2, '': 3}", "{'a': 1, 'b': 3}", 'Error'],
    correctAnswer: "{'a': 1, 'b': 2}",
    explanation: 'The `zip` function stops as soon as one of the iterables is exhausted. It pairs `a` with `1` and `b` with `2`.',
  },
  {
    id: 'op61',
    title: 'JavaScript Arrow Function `this`',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 50,
    codeSnippet: `function Dog() {
  this.age = 0;
  setInterval(() => {
    this.age++; // what is 'this' here?
  }, 1000);
}
const fido = new Dog();`,
    question: 'Inside the arrow function, what does `this` refer to?',
    options: ['The global window object', 'The setInterval function', 'The Dog instance (fido)', 'undefined'],
    correctAnswer: 'The Dog instance (fido)',
    explanation: 'Arrow functions do not have their own `this` context. They inherit `this` from the enclosing lexical scope, which is the `Dog` function\'s scope.',
  },
  {
    id: 'op62',
    title: 'Python Ternary Operator',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `x = 5
result = "Even" if x % 2 == 0 else "Odd"
print(result)`,
    question: 'What is the output?',
    options: ['Even', 'Odd', '5', 'Error'],
    correctAnswer: 'Odd',
    explanation: 'This is the syntax for a ternary conditional operator in Python. Since `5 % 2` is not 0, the `else` part is executed.',
  },
  {
    id: 'op63',
    title: 'Java `charAt()`',
    language: 'java',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `String str = "Hello";
System.out.println(str.charAt(1));`,
    question: 'What is the output?',
    options: ['H', 'e', 'l', 'Error'],
    correctAnswer: 'e',
    explanation: 'String indexing is 0-based in Java. `charAt(1)` returns the character at index 1, which is "e".',
  },
  {
    id: 'op64',
    title: 'C++ `auto` with Pointers',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `#include <iostream>
int main() {
    int x = 10;
    int* p = &x;
    auto p2 = p;
    *p2 = 20;
    std::cout << x;
    return 0;
}`,
    question: 'What is the output?',
    options: ['10', '20', 'Garbage Value', 'Error'],
    correctAnswer: '20',
    explanation: '`auto` deduces the type of `p2` as `int*`. Both `p` and `p2` point to the same memory location (`x`), so modifying the value through `p2` changes `x`.',
  },
  {
    id: 'op65',
    title: 'JavaScript `const` and Objects',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `const person = { name: "Alice" };
person.name = "Bob";
console.log(person.name);`,
    question: 'What is the output?',
    options: ['Alice', 'Bob', 'TypeError', 'undefined'],
    correctAnswer: 'Bob',
    explanation: '`const` prevents the variable `person` from being reassigned to a new object. It does not make the object itself immutable, so its properties can be changed.',
  },
  {
    id: 'op66',
    title: 'Python `del` statement',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `my_list = [1, 2, 3, 4]
del my_list[1]
print(my_list)`,
    question: 'What is the output?',
    options: ['[1, 3, 4]', '[2, 3, 4]', '[1, 2, 4]', 'Error'],
    correctAnswer: '[1, 3, 4]',
    explanation: '`del my_list[1]` removes the element at index 1 from the list.',
  },
  {
    id: 'op67',
    title: 'Java `final` variable',
    language: 'java',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `public class Main {
    public static void main(String[] args) {
        final int x = 10;
        x = 20;
        System.out.println(x);
    }
}`,
    question: 'What is the result?',
    options: ['10', '20', 'Compilation Error', 'Runtime Error'],
    correctAnswer: 'Compilation Error',
    explanation: 'A `final` variable can only be assigned once. Attempting to reassign it causes a compilation error.',
  },
  {
    id: 'op68',
    title: 'C++ Pass by Value',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `#include <iostream>
void modify(int val) {
    val = 100;
}
int main() {
    int x = 10;
    modify(x);
    std::cout << x;
    return 0;
}`,
    question: 'What is the output?',
    options: ['10', '100', 'Garbage Value', 'Error'],
    correctAnswer: '10',
    explanation: 'The function `modify` receives a copy of `x`. Changes made to `val` inside the function do not affect the original variable `x` in `main`.',
  },
  {
    id: 'op69',
    title: 'JavaScript `...` Rest Parameters',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `function myFunc(first, ...rest) {
  console.log(rest.length);
}
myFunc(1, 2, 3, 4);`,
    question: 'What is the output?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '3',
    explanation: 'The rest parameter syntax `...rest` collects all remaining arguments passed to the function (after the named ones) into an array. Here, `rest` becomes `[2, 3, 4]`.',
  },
  {
    id: 'op70',
    title: 'Python `format()` method',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `age = 30
txt = "I am {} years old."
print(txt.format(age))`,
    question: 'What is the output?',
    options: ['I am 30 years old.', 'I am {} years old. 30', 'I am {age} years old.', 'Error'],
    correctAnswer: 'I am 30 years old.',
    explanation: 'The `format()` method replaces the placeholder `{}` with the provided argument.',
  },
  {
    id: 'op71',
    title: 'JS `Array.splice`',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `let arr = ["a", "b", "c", "d"];
arr.splice(1, 2, "x", "y");
console.log(arr);`,
    question: 'What is the output?',
    options: ['["a", "x", "y", "d"]', '["a", "b", "x", "y"]', '["x", "y"]', '["a", "d"]'],
    correctAnswer: '["a", "x", "y", "d"]',
    explanation: '`splice(1, 2, ...)` starts at index 1, removes 2 elements ("b", "c"), and then inserts "x" and "y" at that position.',
  },
  {
    id: 'op72',
    title: 'Python `set` from list',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `my_list = [1, 2, 2, 3, 1]
my_set = set(my_list)
print(len(my_set))`,
    question: 'What is the output?',
    options: ['1', '2', '3', '5'],
    correctAnswer: '3',
    explanation: 'A set only contains unique elements. The duplicates `2` and `1` are removed, leaving a set of size 3.',
  },
  {
    id: 'op73',
    title: 'Java Exception Hierarchy',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `public class Main {
    public static void main(String[] args) {
        try {
            throw new java.io.IOException();
        } catch (Exception e) {
            System.out.print("Exception ");
        }
    }
}`,
    question: 'What is the output?',
    options: ['Exception', 'IOException', 'Compilation Error', 'No output'],
    correctAnswer: 'Exception',
    explanation: '`IOException` is a subclass of `Exception`. The `catch` block for the superclass `Exception` will catch instances of its subclasses.',
  },
  {
    id: 'op74',
    title: 'C++ `std::vector` capacity',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `#include <iostream>
#include <vector>
int main() {
    std::vector<int> v;
    v.reserve(10);
    v.push_back(1);
    std::cout << v.size() << " " << v.capacity();
    return 0;
}`,
    question: 'What is a possible output?',
    options: ['1 1', '1 10', '10 10', '10 1'],
    correctAnswer: '1 10',
    explanation: '`.size()` is the number of elements in the vector. `reserve()` allocates memory but does not add elements. `.capacity()` is the number of elements the vector can hold before needing to reallocate. It will be at least 10.',
  },
  {
    id: 'op75',
    title: 'JavaScript Object Destructuring',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `const { a, b = 10 } = { a: 5 };
console.log(b);`,
    question: 'What is the output?',
    options: ['5', '10', 'undefined', 'Error'],
    correctAnswer: '10',
    explanation: 'Destructuring assignment allows you to provide default values. Since `b` is not present in the object, its default value of 10 is used.',
  },
  {
    id: 'op76',
    title: 'Python `__main__` check',
    language: 'python',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `print(__name__)`,
    question: 'If this file is run directly as a script, what is the output?',
    options: ['"__main__"', '"__name__"', 'The filename', 'Error'],
    correctAnswer: '"__main__"',
    explanation: 'When a Python file is executed directly, its `__name__` special variable is set to `"__main__"`.',
  },
  {
    id: 'op77',
    title: 'Java `switch` fallthrough',
    language: 'java',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `public class Main {
    public static void main(String[] args) {
        int day = 1;
        switch (day) {
            case 1: System.out.print("A");
            case 2: System.out.print("B"); break;
            case 3: System.out.print("C");
        }
    }
}`,
    question: 'What is the output?',
    options: ['A', 'B', 'AB', 'AC'],
    correctAnswer: 'AB',
    explanation: 'Since there is no `break` statement in `case 1`, execution "falls through" to `case 2`, printing both "A" and "B".',
  },
  {
    id: 'op78',
    title: 'C++ `nullptr`',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 30,
    codeSnippet: `#include <iostream>
int main() {
    int* p = nullptr;
    if (!p) {
        std::cout << "null";
    }
    return 0;
}`,
    question: 'What is the output?',
    options: ['null', '0', 'No output', 'Error'],
    correctAnswer: 'null',
    explanation: '`nullptr` evaluates to false in a boolean context, so the condition `!p` is true.',
  },
  {
    id: 'op79',
    title: 'JavaScript `map` return value',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `const arr = [1, 2];
const result = arr.map(n => {
  n * 2;
});
console.log(result);`,
    question: 'What is the output?',
    options: ['[2, 4]', '[undefined, undefined]', '[]', 'Error'],
    correctAnswer: '[undefined, undefined]',
    explanation: 'The arrow function uses a block body `{...}` but lacks an explicit `return` statement. Therefore, it implicitly returns `undefined` for each element.',
  },
  {
    id: 'op80',
    title: 'Python `issubclass`',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `class A: pass
class B(A): pass
class C: pass
print(issubclass(B, A), issubclass(C, A))`,
    question: 'What is the output?',
    options: ['True True', 'True False', 'False True', 'False False'],
    correctAnswer: 'True False',
    explanation: '`B` is a subclass of `A`. `C` is not a subclass of `A`.',
  },
  {
    id: 'op81',
    title: 'JS `console.log` Return Value',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `console.log(console.log("Hello"));`,
    question: 'What is the output?',
    options: ['Hello, Hello', 'Hello, undefined', 'undefined, Hello', 'Error'],
    correctAnswer: 'Hello, undefined',
    explanation: 'The inner `console.log("Hello")` prints "Hello" and returns `undefined`. The outer `console.log` then prints that `undefined` value.',
  },
  {
    id: 'op82',
    title: 'Python Function Arguments',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `def my_func(a, b=2, c=3):
    print(a, b, c)

my_func(1, c=5)`,
    question: 'What is the output?',
    options: ['1 2 5', '1 2 3', 'Error', '1 5 3'],
    correctAnswer: '1 2 5',
    explanation: 'You can mix positional and keyword arguments. `a` is set to 1, `b` uses its default value of 2, and `c` is explicitly set to 5.',
  },
  {
    id: 'op83',
    title: 'Java `++` Operator',
    language: 'java',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `public class Main {
    public static void main(String[] args) {
        int i = 5;
        System.out.println(i++);
        System.out.println(i);
    }
}`,
    question: 'What is the output?',
    options: ['5, 6', '6, 6', '5, 5', '6, 5'],
    correctAnswer: '5, 6',
    explanation: 'The postfix `++` operator increments the value but evaluates to the value *before* the increment. The first `println` gets 5, then `i` becomes 6.',
  },
  {
    id: 'op84',
    title: 'C++ `std::string` find',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `#include <iostream>
#include <string>
int main() {
    std::string s = "hello";
    if (s.find("x") == std::string::npos) {
        std::cout << "not found";
    }
    return 0;
}`,
    question: 'What is the output?',
    options: ['not found', 'No output', 'Compilation Error', 'Runtime Error'],
    correctAnswer: 'not found',
    explanation: 'The `find` method returns `std::string::npos` (a special constant) when the substring is not found.',
  },
  {
    id: 'op85',
    title: 'JS `Array.find`',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `const arr = [1, 10, 20];
const result = arr.find(n => n > 5);
console.log(result);`,
    question: 'What is the output?',
    options: ['10', '[10, 20]', 'true', 'undefined'],
    correctAnswer: '10',
    explanation: 'The `find` method returns the first element in the array that satisfies the provided testing function. `10` is the first number greater than 5.',
  },
  {
    id: 'op86',
    title: 'Python `and` Operator',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `result = 0 and "hello"
print(result)`,
    question: 'What is the output?',
    options: ['0', '"hello"', 'True', 'False'],
    correctAnswer: '0',
    explanation: 'The `and` operator returns the first falsy value if one is found, otherwise it returns the last value. Since `0` is falsy, it is returned.',
  },
  {
    id: 'op87',
    title: 'Java `private` access',
    language: 'java',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `class MyClass {
    private int x = 10;
}
public class Main {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        System.out.println(obj.x);
    }
}`,
    question: 'What is the result?',
    options: ['10', 'No output', 'Compilation Error', 'Runtime Error'],
    correctAnswer: 'Compilation Error',
    explanation: 'The field `x` is `private` in `MyClass`, so it cannot be accessed from outside the class, including from the `Main` class.',
  },
  {
    id: 'op88',
    title: 'C++ Ternary Operator',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `#include <iostream>
int main() {
    int x = 10;
    int y = (x > 5) ? 1 : 0;
    std::cout << y;
    return 0;
}`,
    question: 'What is the output?',
    options: ['0', '1', '10', 'Error'],
    correctAnswer: '1',
    explanation: 'The condition `x > 5` is true, so the ternary operator evaluates to the first value, which is `1`.',
  },
  {
    id: 'op89',
    title: 'JS `JSON.stringify`',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `console.log(JSON.stringify({ a: 1, b: undefined }));`,
    question: 'What is the output?',
    options: ['{"a":1,"b":"undefined"}', '{"a":1,"b":null}', '{"a":1}', 'Error'],
    correctAnswer: '{"a":1}',
    explanation: 'When `JSON.stringify` encounters a property with the value `undefined`, the property is omitted from the resulting JSON string.',
  },
  {
    id: 'op90',
    title: 'Python `not` operator',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `x = []
if not x:
    print("empty")`,
    question: 'What is the output?',
    options: ['empty', 'No output', 'Error', 'False'],
    correctAnswer: 'empty',
    explanation: 'An empty list `[]` is considered falsy in a boolean context. `not []` evaluates to `True`.',
  },
  {
    id: 'op91',
    title: 'JS Short Circuiting',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `let x = 0;
true || (x = 1);
console.log(x);`,
    question: 'What is the output?',
    options: ['0', '1', 'true', 'Error'],
    correctAnswer: '0',
    explanation: 'The logical OR `||` operator short-circuits. Since the first operand is `true`, the second operand `(x = 1)` is never evaluated.',
  },
  {
    id: 'op92',
    title: 'Python `isinstance`',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `print(isinstance(5, int))`,
    question: 'What is the output?',
    options: ['True', 'False', 'int', 'Error'],
    correctAnswer: 'True',
    explanation: 'The `isinstance()` function checks if an object is an instance of a specified class. `5` is an instance of `int`.',
  },
  {
    id: 'op93',
    title: 'Java `substring`',
    language: 'java',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `String s = "Hello";
System.out.println(s.substring(1, 3));`,
    question: 'What is the output?',
    options: ['"el"', '"ell"', '"e"', '"l"'],
    correctAnswer: '"el"',
    explanation: '`substring(beginIndex, endIndex)` extracts from `beginIndex` up to (but not including) `endIndex`. So it extracts characters at index 1 and 2.',
  },
  {
    id: 'op94',
    title: 'C++ `new` and `delete`',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `#include <iostream>
int main() {
    int* p = new int(5);
    delete p;
    // std::cout << *p; // What if this line were executed?
    return 0;
}`,
    question: 'What happens if the commented line is executed?',
    options: ['Prints 5', 'Prints 0', 'Undefined Behavior', 'Compilation Error'],
    correctAnswer: 'Undefined Behavior',
    explanation: 'Accessing memory after it has been `delete`d is undefined behavior. The program might crash, print a garbage value, or seem to work by chance.',
  },
  {
    id: 'op95',
    title: 'JS `Array.push` return value',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `const arr = ['a'];
const len = arr.push('b');
console.log(len);`,
    question: 'What is the output?',
    options: ['1', '2', '["a", "b"]', 'undefined'],
    correctAnswer: '2',
    explanation: 'The `push` method adds elements to the end of an array and returns the new length of the array.',
  },
  {
    id: 'op96',
    title: 'Python `in` operator',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `print('a' in 'banana')`,
    question: 'What is the output?',
    options: ['True', 'False', '1', 'Error'],
    correctAnswer: 'True',
    explanation: 'The `in` operator checks for membership. The substring `"a"` is present in the string `"banana"`.',
  },
  {
    id: 'op97',
    title: 'Java `char` arithmetic',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `public class Main {
    public static void main(String[] args) {
        char c = 'A';
        c++;
        System.out.println(c);
    }
}`,
    question: 'What is the output?',
    options: ['A', 'B', '66', 'Error'],
    correctAnswer: 'B',
    explanation: 'Incrementing a `char` variable moves it to the next character in the Unicode table. The character after `A` is `B`.',
  },
  {
    id: 'op98',
    title: 'C++ `std::vector::push_back`',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `#include <iostream>
#include <vector>
int main() {
    std::vector<int> v;
    v.push_back(10);
    v.push_back(20);
    std::cout << v[0];
    return 0;
}`,
    question: 'What is the output?',
    options: ['10', '20', '0', 'Error'],
    correctAnswer: '10',
    explanation: '`push_back` adds elements to the end of the vector. The element at index 0 remains `10`.',
  },
  {
    id: 'op99',
    title: 'JS `typeof` operator',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `console.log(typeof [1, 2, 3]);`,
    question: 'What is the output?',
    options: ['"array"', '"object"', '"list"', '"Array"'],
    correctAnswer: '"object"',
    explanation: 'In JavaScript, arrays are a special type of object, so `typeof` returns `"object"` for them.',
  },
  {
    id: 'op100',
    title: 'Python `**` operator',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `print(2 ** 3 ** 2)`,
    question: 'What is the output?',
    options: ['64', '512', '12', 'Error'],
    correctAnswer: '512',
    explanation: 'The exponentiation operator `**` is right-associative. So, this is evaluated as `2 ** (3 ** 2)`, which is `2 ** 9`, resulting in 512.',
  },
  {
    id: 'op101',
    title: 'JavaScript `finally` with Promise',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 50,
    codeSnippet: `Promise.resolve(1)
  .finally(() => { return 10; })
  .then(val => console.log(val));`,
    question: 'What is the output?',
    options: ['1', '10', 'undefined', 'Error'],
    correctAnswer: '1',
    explanation: 'The `.finally()` callback does not change the resolved value of the promise unless it returns a new promise or throws an error. The original resolved value `1` is passed through.',
  },
  {
    id: 'op102',
    title: 'Python mutable default argument',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `def append_to(element, to=[]):
    to.append(element)
    return to

my_list = append_to(1)
print(my_list)

my_other_list = append_to(2)
print(my_other_list)`,
    question: 'What is the output?',
    options: ['[1], [2]', '[1, 2], [1, 2]', '[1], [1, 2]', 'Error'],
    correctAnswer: '[1, 2], [1, 2]',
    explanation: 'The default list is created once when the function is defined, not each time it is called. Both calls modify the same list. This is a common Python pitfall.',
  },
  {
    id: 'op103',
    title: 'Java `switch` with no `break`',
    language: 'java',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `int code = 2;
switch(code) {
    case 1: System.out.print("A");
    case 2: System.out.print("B");
    case 3: System.out.print("C");
}`,
    question: 'What is the output?',
    options: ['B', 'BC', 'ABC', 'C'],
    correctAnswer: 'BC',
    explanation: 'Execution starts at `case 2`. Because there are no `break` statements, it "falls through" and also executes the code for `case 3`.',
  },
  {
    id: 'op104',
    title: 'C++ `char` vs `int`',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `#include <iostream>
int main() {
    char c = '1';
    int i = 1;
    if (c == i) {
        std::cout << "Equal";
    } else {
        std::cout << "Not Equal";
    }
    return 0;
}`,
    question: 'What is the output?',
    options: ['Equal', 'Not Equal', 'Compilation Error', 'Undefined Behavior'],
    correctAnswer: 'Not Equal',
    explanation: 'The character `\'1\'` has an ASCII value of 49. The comparison `c == i` is comparing `49 == 1`, which is false.',
  },
  {
    id: 'op105',
    title: 'JavaScript `+` operator coercion',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `console.log([] + []);`,
    question: 'What is the output?',
    options: ['[]', '""', '0', 'NaN'],
    correctAnswer: '""',
    explanation: 'The `+` operator converts the arrays to strings. `[].toString()` results in an empty string `""`. Concatenating two empty strings results in an empty string.',
  },
  {
    id: 'op106',
    title: 'Python `or` operator',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `result = "hello" or 0
print(result)`,
    question: 'What is the output?',
    options: ['"hello"', '0', 'True', 'False'],
    correctAnswer: '"hello"',
    explanation: 'The `or` operator returns the first truthy value it finds. Since `"hello"` is truthy, it is returned and the rest of the expression is not evaluated.',
  },
  {
    id: 'op107',
    title: 'Java `private` keyword',
    language: 'java',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `public class MyClass {
    private String secret = "abc";
}
// in another file:
MyClass obj = new MyClass();
// What is the result of trying to access obj.secret?`,
    question: 'What is the result of accessing `obj.secret`?',
    options: ['"abc"', 'null', 'Compilation Error', 'Runtime Error'],
    correctAnswer: 'Compilation Error',
    explanation: 'A `private` field can only be accessed from within its own class.',
  },
  {
    id: 'op108',
    title: 'C++ `const` reference',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `#include <iostream>
void print(const int& val) {
    // val = 10; // Is this line valid?
}
int main() {
    int x = 5;
    print(x);
    return 0;
}`,
    question: 'Is the line `val = 10;` valid inside the function?',
    options: ['Yes', 'No', 'Only if x is not const', 'Depends on compiler'],
    correctAnswer: 'No',
    explanation: 'The parameter `val` is a reference to a `const int`. This means the function promises not to modify the value it refers to.',
  },
  {
    id: 'op109',
    title: 'JS `[] == ![]`',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `console.log([] == ![]);`,
    question: 'What is the output?',
    options: ['true', 'false', 'Error', 'undefined'],
    correctAnswer: 'true',
    explanation: '`![]` evaluates to `false`. The expression becomes `[] == false`. When comparing an object to a boolean, both are converted to numbers. `Number([])` is `0`, and `Number(false)` is `0`. Since `0 == 0` is true, the result is `true`.',
  },
  {
    id: 'op110',
    title: 'Python class vs instance variable',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 45,
    codeSnippet: `class Dog:
    kind = 'canine'
    def __init__(self, name):
        self.name = name

d = Dog('Fido')
print(d.kind)`,
    question: 'What is the output?',
    options: ['canine', 'None', 'AttributeError', 'Error'],
    correctAnswer: 'canine',
    explanation: 'Instances of a class can access class variables. `kind` is a class variable shared by all `Dog` instances.',
  },
  {
    id: 'op111',
    title: 'JS `this` with bind',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 50,
    codeSnippet: `const module = {
  x: 42,
  getX: function() { return this.x; }
};
const unboundGetX = module.getX;
const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());`,
    question: 'What is the output?',
    options: ['42', 'undefined', 'null', 'Error'],
    correctAnswer: '42',
    explanation: 'The `.bind()` method creates a new function that, when called, has its `this` keyword set to the provided value. Here, `this` is permanently bound to `module`.',
  },
  {
    id: 'op112',
    title: 'Python `super()`',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `class Parent:
    def __init__(self):
        self.val = 5
class Child(Parent):
    def __init__(self):
        super().__init__()
c = Child()
print(c.val)`,
    question: 'What is the output?',
    options: ['5', '0', 'AttributeError', 'Error'],
    correctAnswer: '5',
    explanation: '`super().__init__()` calls the constructor of the parent class (`Parent`), which initializes `self.val` to 5.',
  },
  {
    id: 'op113',
    title: 'Java Constructor Chaining',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `public class MyClass {
    MyClass() {
        this(5);
        System.out.print("A");
    }
    MyClass(int x) {
        System.out.print("B");
    }
    public static void main(String[] args) {
        new MyClass();
    }
}`,
    question: 'What is the output?',
    options: ['AB', 'BA', 'A', 'B'],
    correctAnswer: 'BA',
    explanation: 'The default constructor calls `this(5)`, which invokes the parameterized constructor first, printing "B". Then, control returns to the default constructor which prints "A".',
  },
  {
    id: 'op114',
    title: 'C++ `delete this`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 70,
    codeSnippet: `#include <iostream>
class MyClass {
public:
    void destroy() { delete this; }
    ~MyClass() { std::cout << "Destroyed"; }
};
int main() {
    MyClass* obj = new MyClass();
    obj->destroy();
    return 0;
}`,
    question: 'What is the output?',
    options: ['Destroyed', 'No output', 'Undefined Behavior', 'Compilation Error'],
    correctAnswer: 'Destroyed',
    explanation: 'It is valid (though often dangerous) to `delete this`. It calls the destructor and deallocates the memory for the object. You must not access any member of the object after this call.',
  },
  {
    id: 'op115',
    title: 'JS `...` Spread in objects',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged.b);`,
    question: 'What is the output?',
    options: ['2', '3', 'undefined', 'Error'],
    correctAnswer: '3',
    explanation: 'When spreading objects, properties from later objects in the sequence overwrite properties from earlier ones. `obj2.b` overwrites `obj1.b`.',
  },
  {
    id: 'op116',
    title: 'Python `enumerate` start value',
    language: 'python',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `letters = ['a', 'b']
for index, letter in enumerate(letters, 1):
    print(index, letter)`,
    question: 'What is the output?',
    options: ['0 a, 1 b', '1 a, 2 b', 'a 1, b 2', 'Error'],
    correctAnswer: '1 a, 2 b',
    explanation: 'The `enumerate` function takes an optional second argument to specify the starting value for the index.',
  },
  {
    id: 'op117',
    title: 'Java `printf`',
    language: 'java',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `double pi = 3.14159;
System.out.printf("%.2f", pi);`,
    question: 'What is the output?',
    options: ['3.14159', '3.14', '3.1', '3.00'],
    correctAnswer: '3.14',
    explanation: 'The format specifier `%.2f` formats the floating-point number to have exactly two digits after the decimal point.',
  },
  {
    id: 'op118',
    title: 'C++ `std::map` insertion',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `#include <iostream>
#include <map>
int main() {
    std::map<int, char> m;
    m.insert({1, 'a'});
    m.insert({1, 'b'});
    std::cout << m[1];
    return 0;
}`,
    question: 'What is the output?',
    options: ['a', 'b', 'ab', 'Error'],
    correctAnswer: 'a',
    explanation: 'The `insert` method of `std::map` does not overwrite an element if the key already exists. The first insertion succeeds, the second one fails.',
  },
  {
    id: 'op119',
    title: 'JS `String.slice`',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `const s = "hello";
console.log(s.slice(1, 3));`,
    question: 'What is the output?',
    options: ['"ell"', '"el"', '"he"', '"hel"'],
    correctAnswer: '"el"',
    explanation: '`slice(start, end)` extracts from the `start` index up to (but not including) the `end` index.',
  },
  {
    id: 'op120',
    title: 'Python `dict.get` default',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `my_dict = {'a': 1}
print(my_dict.get('b', 'not found'))`,
    question: 'What is the output?',
    options: ['1', 'None', 'not found', 'KeyError'],
    correctAnswer: 'not found',
    explanation: 'The `get` method returns the default value (the second argument) if the key is not found in the dictionary.',
  },
  {
    id: 'op121',
    title: 'JS `Array.includes`',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `console.log([1, 2, 3].includes(2));`,
    question: 'What is the output?',
    options: ['true', 'false', '1', 'undefined'],
    correctAnswer: 'true',
    explanation: 'The `includes()` method determines whether an array includes a certain value among its entries, returning true or false.',
  },
  {
    id: 'op122',
    title: 'Python `+=` on tuples',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `t = (1, 2)
t += (3, 4)
print(t)`,
    question: 'What is the output?',
    options: ['(1, 2, 3, 4)', '(1, 2, (3, 4))', 'Error', '(4, 6)'],
    correctAnswer: '(1, 2, 3, 4)',
    explanation: 'Although tuples are immutable, the `+=` operator on a tuple creates a new tuple by concatenating the two tuples.',
  },
  {
    id: 'op123',
    title: 'Java `Integer.parseInt`',
    language: 'java',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `int num = Integer.parseInt("123");
System.out.println(num + 1);`,
    question: 'What is the output?',
    options: ['1231', '124', '"124"', 'NumberFormatException'],
    correctAnswer: '124',
    explanation: '`Integer.parseInt` converts the string to a primitive `int`, allowing arithmetic operations.',
  },
  {
    id: 'op124',
    title: 'C++ `dynamic_cast`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 65,
    codeSnippet: `#include <iostream>
class Base { public: virtual ~Base() {} };
class Derived : public Base {};
class Another {};
int main() {
    Base* b = new Derived();
    Derived* d = dynamic_cast<Derived*>(b);
    if (d) { std::cout << "Success"; }
    return 0;
}`,
    question: 'What is the output?',
    options: ['Success', 'No output', 'Compilation Error', 'Runtime Error'],
    correctAnswer: 'Success',
    explanation: '`dynamic_cast` can be used for safe downcasting in a class hierarchy. Since `b` actually points to a `Derived` object, the cast succeeds and returns a valid pointer.',
  },
  {
    id: 'op125',
    title: 'JS `this` in strict mode',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `"use strict";
function showThis() {
  console.log(this);
}
showThis();`,
    question: 'What is the output?',
    options: ['The global window object', 'null', 'undefined', 'Error'],
    correctAnswer: 'undefined',
    explanation: 'In strict mode, if `this` is not set in an execution context, it remains `undefined`. In non-strict mode, it would default to the global object.',
  },
  {
    id: 'op126',
    title: 'Python `bool` function',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `print(bool("False"))`,
    question: 'What is the output?',
    options: ['True', 'False', 'Error', 'None'],
    correctAnswer: 'True',
    explanation: 'The `bool()` function returns `False` only for empty containers, `False`, `None`, and numeric zero. Any non-empty string, including `"False"`, is truthy.',
  },
  {
    id: 'op127',
    title: 'Java `StringBuilder` mutability',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `StringBuilder sb = new StringBuilder("Hi");
sb.append(" Java");
System.out.println(sb);`,
    question: 'What is the output?',
    options: ['Hi', 'Hi Java', 'Java', 'Error'],
    correctAnswer: 'Hi Java',
    explanation: '`StringBuilder` is mutable. The `append` method modifies the internal character array of the `sb` object.',
  },
  {
    id: 'op128',
    title: 'C++ `std::move`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 60,
    codeSnippet: `#include <iostream>
#include <string>
#include <vector>
int main() {
    std::string str = "hello";
    std::vector<std::string> vec;
    vec.push_back(std::move(str));
    std::cout << str;
    return 0;
}`,
    question: 'What is the output?',
    options: ['hello', 'An empty string', 'Garbage value', 'Undefined Behavior'],
    correctAnswer: 'An empty string',
    explanation: '`std::move` casts `str` to an rvalue reference, allowing `push_back` to "move" its contents. The state of `str` after the move is valid but unspecified; typically, it is empty.',
  },
  {
    id: 'op129',
    title: 'JS `Array.filter`',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `const arr = [1, 2, 3, 4];
const result = arr.filter(n => n > 2);
console.log(result);`,
    question: 'What is the output?',
    options: ['[1, 2]', '[3, 4]', '[1, 2, 3, 4]', 'true'],
    correctAnswer: '[3, 4]',
    explanation: 'The `filter` method creates a new array with all elements that pass the test implemented by the provided function.',
  },
  {
    id: 'op130',
    title: 'Python `*` for unpacking',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `def add(a, b, c):
    return a + b + c

nums = [1, 2, 3]
print(add(*nums))`,
    question: 'What is the output?',
    options: ['6', '[1, 2, 3]', 'Error', 'None'],
    correctAnswer: '6',
    explanation: 'The `*` operator unpacks the list `nums` into individual arguments for the `add` function, so it is called as `add(1, 2, 3)`.',
  },
  {
    id: 'op131',
    title: 'JS `switch` strict equality',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `const val = "2";
switch (val) {
  case 2: console.log("Number"); break;
  default: console.log("Not Number");
}`,
    question: 'What is the output?',
    options: ['Number', 'Not Number', 'Error', 'No output'],
    correctAnswer: 'Not Number',
    explanation: 'The `switch` statement uses strict equality (`===`) for comparison. The string `"2"` is not strictly equal to the number `2`.',
  },
  {
    id: 'op132',
    title: 'Python `set` difference',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `s1 = {1, 2, 3}
s2 = {3, 4, 5}
print(s1 - s2)`,
    question: 'What is the output?',
    options: ['{1, 2}', '{4, 5}', '{3}', '{}'],
    correctAnswer: '{1, 2}',
    explanation: 'The `-` operator for sets computes the difference, returning elements that are in the first set but not in the second.',
  },
  {
    id: 'op133',
    title: 'Java `protected` access',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `// In package1
public class A { protected int x = 10; }
// In package2
import package1.A;
public class B {
    public void test() {
        A a = new A();
        // System.out.println(a.x); // Is this line valid?
    }
}`,
    question: 'Is accessing `a.x` valid in class `B`?',
    options: ['Yes', 'No', 'Yes, if B extends A', 'Only in the same package'],
    correctAnswer: 'Yes, if B extends A',
    explanation: 'A `protected` member is accessible within its own package and by subclasses in other packages. `B` can only access `x` if it is a subclass of `A`.',
  },
  {
    id: 'op134',
    title: 'C++ `static_cast`',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `#include <iostream>
int main() {
    float f = 97.5;
    char c = static_cast<char>(f);
    std::cout << c;
    return 0;
}`,
    question: 'What is the output?',
    options: ['a', '97', 'Error', 'Undefined Behavior'],
    correctAnswer: 'a',
    explanation: 'The `float` `97.5` is cast to a `char`. The fractional part is truncated, leaving `97`. The ASCII character for `97` is `a`.',
  },
  {
    id: 'op135',
    title: 'JS `Object.is`',
    language: 'javascript',
    difficulty: 'Advanced',
    xp: 45,
    codeSnippet: `console.log(Object.is(-0, +0));`,
    question: 'What is the output?',
    options: ['true', 'false', '0', 'Error'],
    correctAnswer: 'false',
    explanation: '`Object.is()` is similar to `===` but treats `NaN` as equal to `NaN` and `-0` as not equal to `+0`.',
  },
  {
    id: 'op136',
    title: 'Python `try...finally`',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `def test():
    try:
        print("try")
        return
    finally:
        print("finally")

test()`,
    question: 'What is the output?',
    options: ['try', 'finally', 'try, finally', 'Error'],
    correctAnswer: 'try, finally',
    explanation: 'The `finally` block is always executed before leaving the `try...finally` statement, even if the `try` block has a `return` statement.',
  },
  {
    id: 'op137',
    title: 'Java `final` array',
    language: 'java',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `final int[] arr = {1, 2};
arr[0] = 5;
System.out.println(arr[0]);`,
    question: 'What is the output?',
    options: ['1', '5', 'Compilation Error', 'Runtime Error'],
    correctAnswer: '5',
    explanation: 'The `final` keyword on an array means the reference variable `arr` cannot be reassigned. However, the contents of the array itself can be modified.',
  },
  {
    id: 'op138',
    title: 'C++ Range-based `for` loop',
    language: 'cpp',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `#include <iostream>
#include <vector>
int main() {
    std::vector<int> v = {1, 2, 3};
    for (int x : v) {
        x = 0;
    }
    std::cout << v[0];
    return 0;
}`,
    question: 'What is the output?',
    options: ['0', '1', 'Error', 'Undefined'],
    correctAnswer: '1',
    explanation: 'The range-based for loop creates a copy of each element (`int x`). Modifying the copy `x` does not affect the original elements in the vector `v`. Use `int& x` to modify the elements.',
  },
  {
    id: 'op139',
    title: 'JS `Array.prototype.sort` mutation',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `const arr1 = [3, 1, 2];
const arr2 = arr1.sort();
console.log(arr1 === arr2);`,
    question: 'What is the output?',
    options: ['true', 'false', 'undefined', 'Error'],
    correctAnswer: 'true',
    explanation: 'The `sort()` method sorts the array in-place, meaning it modifies the original array and returns a reference to that same array.',
  },
  {
    id: 'op140',
    title: 'Python `id()` function',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `a = 256
b = 256
print(a is b)`,
    question: 'What is the output of this in CPython?',
    options: ['True', 'False', 'Error', 'None'],
    correctAnswer: 'True',
    explanation: 'CPython pre-allocates and caches small integers (usually from -5 to 256). Since both `a` and `b` are 256, they point to the exact same object in memory.',
  },
  {
    id: 'op141',
    title: 'JS `a++` vs `++a`',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `let a = 1;
let b = a++;
let c = ++a;
console.log(b, c);`,
    question: 'What is the output?',
    options: ['1 2', '1 3', '2 3', '2 2'],
    correctAnswer: '1 3',
    explanation: '`b = a++` (postfix): `b` gets the value of `a` (1), then `a` is incremented to 2. `c = ++a` (prefix): `a` is incremented to 3, then `c` gets the new value of `a` (3).',
  },
  {
    id: 'op142',
    title: 'Python `slice` assignment',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `l = [1, 2, 3, 4]
l[1:3] = [8, 9, 10]
print(l)`,
    question: 'What is the output?',
    options: ['[1, 8, 9, 10, 4]', '[1, [8, 9, 10], 4]', 'Error', '[1, 8, 9]'],
    correctAnswer: '[1, 8, 9, 10, 4]',
    explanation: 'Slice assignment replaces the specified slice of the list with the elements from the iterable on the right-hand side. It can change the length of the list.',
  },
  {
    id: 'op143',
    title: 'Java `hashCode` contract',
    language: 'java',
    difficulty: 'Advanced',
    xp: 55,
    codeSnippet: `public class Main {
    public static void main(String[] args) {
        // If a.equals(b) is true, what must be true for a.hashCode() and b.hashCode()?
    }
}`,
    question: 'If `a.equals(b)` is true, what about the hash codes?',
    options: ['a.hashCode() == b.hashCode()', 'a.hashCode() != b.hashCode()', 'They can be different', 'Compilation Error'],
    correctAnswer: 'a.hashCode() == b.hashCode()',
    explanation: 'The Java contract for `hashCode` states that if two objects are equal according to the `equals` method, then calling `hashCode` on each must produce the same integer result.',
  },
  {
    id: 'op144',
    title: 'C++ `reinterpret_cast`',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 65,
    codeSnippet: `#include <iostream>
int main() {
    float f = 1.0f;
    int* p = reinterpret_cast<int*>(&f);
    std::cout << (*p == 1);
    return 0;
}`,
    question: 'What is the most likely output?',
    options: ['1 (true)', '0 (false)', 'Compilation Error', 'Undefined Behavior'],
    correctAnswer: '0 (false)',
    explanation: '`reinterpret_cast` reinterprets the bits of the float `1.0f` as an integer. The binary representation of a float `1.0` is very different from the binary representation of an integer `1`, so they are not equal.',
  },
  {
    id: 'op145',
    title: 'JS `Array.every`',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 30,
    codeSnippet: `const arr = [1, 2, 3];
const result = arr.every(n => n > 0);
console.log(result);`,
    question: 'What is the output?',
    options: ['true', 'false', '[1, 2, 3]', 'undefined'],
    correctAnswer: 'true',
    explanation: 'The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.',
  },
  {
    id: 'op146',
    title: 'Python `**kwargs`',
    language: 'python',
    difficulty: 'Intermediate',
    xp: 40,
    codeSnippet: `def my_func(**kwargs):
    print(kwargs['b'])

my_func(a=1, b=2, c=3)`,
    question: 'What is the output?',
    options: ['1', '2', '3', 'Error'],
    correctAnswer: '2',
    explanation: 'The `**kwargs` syntax collects all keyword arguments into a dictionary. We can then access the value for key `"b"`.',
  },
  {
    id: 'op147',
    title: 'Java `final` class',
    language: 'java',
    difficulty: 'Intermediate',
    xp: 35,
    codeSnippet: `public final class MyClass {}
// In another file:
// class SubClass extends MyClass {}`,
    question: 'What is the result of trying to create `SubClass`?',
    options: ['No error', 'Runtime Error', 'Compilation Error', 'Warning'],
    correctAnswer: 'Compilation Error',
    explanation: 'A class marked as `final` cannot be subclassed (extended).',
  },
  {
    id: 'op148',
    title: 'C++ `std::string` capacity',
    language: 'cpp',
    difficulty: 'Advanced',
    xp: 50,
    codeSnippet: `#include <iostream>
#include <string>
int main() {
    std::string s;
    s.reserve(100);
    s = "hello";
    std::cout << s.capacity() >= 100;
    return 0;
}`,
    question: 'What is the output?',
    options: ['1 (true)', '0 (false)', 'Depends on implementation', 'Compilation Error'],
    correctAnswer: '1 (true)',
    explanation: 'Assigning a new, small string to `s` does not necessarily reduce its capacity. The capacity will remain at least what was reserved.',
  },
  {
    id: 'op149',
    title: 'JS `null == undefined`',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 25,
    codeSnippet: `console.log(null == undefined);
console.log(null === undefined);`,
    question: 'What is the output?',
    options: ['true, true', 'true, false', 'false, true', 'false, false'],
    correctAnswer: 'true, false',
    explanation: 'The loose equality `==` considers `null` and `undefined` to be equal. The strict equality `===` considers them to be different types and thus not equal.',
  },
  {
    id: 'op150',
    title: 'Python `set.add`',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    codeSnippet: `s = {1, 2}
s.add(1)
print(s)`,
    question: 'What is the output?',
    options: ['{1, 2}', '{1, 1, 2}', '{1}', 'Error'],
    correctAnswer: '{1, 2}',
    explanation: 'Sets only store unique elements. Adding an element that is already in the set has no effect.',
  }
];
