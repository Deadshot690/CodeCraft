
import type { ConceptMatchChallenge } from '@/lib/types';

export const conceptMatchChallenges: ConceptMatchChallenge[] = [
    {
        id: 'cm1',
        title: 'Basic Data Types',
        description: 'Match the code snippet to its fundamental data type.',
        difficulty: 'Beginner',
        xp: 20,
        codeSnippets: [
            { id: '1', language: 'generic', code: '"Hello World"' },
            { id: '2', language: 'generic', code: '42' },
            { id: '3', language: 'generic', code: 'true' },
            { id: '4', language: 'generic', code: '[1, 2, 3]' },
        ],
        concepts: [
            { id: '1', name: 'String' },
            { id: '2', name: 'Integer' },
            { id: '3', name: 'Boolean' },
            { id: '4', name: 'Array / List' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm2',
        title: 'OOP Principles',
        description: 'Match the definition to the core principle of Object-Oriented Programming.',
        difficulty: 'Intermediate',
        xp: 40,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'class Car extends Vehicle { ... }' },
            { id: '2', language: 'generic', code: 'class Circle {\n  private radius;\n  public getArea() { ... }\n}' },
            { id: '3', language: 'generic', code: 'animal.makeSound()' },
            { id: '4', language: 'generic', code: 'class Shape { ... }' },
        ],
        concepts: [
            { id: '1', name: 'Inheritance' },
            { id: '2', name: 'Encapsulation' },
            { id: '3', name: 'Polymorphism' },
            { id: '4', name: 'Abstraction' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm3',
        title: 'JavaScript Frameworks',
        description: 'Match the code snippet to the correct JavaScript framework or library.',
        difficulty: 'Intermediate',
        xp: 35,
        codeSnippets: [
            { id: '1', language: 'javascript', code: 'const [count, setCount] = useState(0);' },
            { id: '2', language: 'javascript', code: '<div v-if="seen">Now you see me</div>' },
            { id: '3', language: 'javascript', code: 'constructor(private http: HttpClient) {}' },
        ],
        concepts: [
            { id: '1', name: 'React' },
            { id: '2', name: 'Vue.js' },
            { id: '3', name: 'Angular' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm4',
        title: 'Sorting Algorithms',
        description: 'Match the code logic to the name of the sorting algorithm.',
        difficulty: 'Advanced',
        xp: 60,
        codeSnippets: [
            { id: '1', language: 'python', code: 'for i in range(n):\n  for j in range(0, n-i-1):\n    if arr[j] > arr[j+1]:\n      arr[j], arr[j+1] = arr[j+1], arr[j]' },
            { id: '2', language: 'python', code: 'if len(arr) > 1:\n  mid = len(arr)//2\n  L = arr[:mid]\n  R = arr[mid:]\n  merge_sort(L)\n  merge_sort(R)\n  # ... merge L and R' },
            { id: '3', language: 'python', code: 'pivot = arr[len(arr) // 2]\nleft = [x for x in arr if x < pivot]\nmiddle = [x for x in arr if x == pivot]\nright = [x for x in arr if x > pivot]' },
        ],
        concepts: [
            { id: '1', name: 'Bubble Sort' },
            { id: '2', name: 'Merge Sort' },
            { id: '3', name: 'Quick Sort' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm5',
        title: 'Design Patterns (GoF)',
        description: 'Match the description to the correct Gang of Four design pattern.',
        difficulty: 'Advanced',
        xp: 70,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'Ensures a class has only one instance and provides a global point of access to it.' },
            { id: '2', language: 'generic', code: 'Provides a way to create objects without specifying the exact class of object that will be created.' },
            { id: '3', language: 'generic', code: 'Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified.' },
            { id: '4', language: 'generic', code: 'Defines a family of algorithms, encapsulates each one, and makes them interchangeable.' },
        ],
        concepts: [
            { id: '1', name: 'Singleton Pattern' },
            { id: '2', name: 'Factory Method Pattern' },
            { id: '3', name: 'Observer Pattern' },
            { id: '4', name: 'Strategy Pattern' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm6',
        title: 'HTTP Methods',
        description: 'Match the HTTP method to its primary purpose.',
        difficulty: 'Beginner',
        xp: 25,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'Retrieve data from a server.' },
            { id: '2', language: 'generic', code: 'Submit data to a server to create a new resource.' },
            { id: '3', language: 'generic', code: 'Update an existing resource on a server.' },
            { id: '4', language: 'generic', code: 'Delete a resource from a server.' },
        ],
        concepts: [
            { id: '1', name: 'GET' },
            { id: '2', name: 'POST' },
            { id: '3', name: 'PUT' },
            { id: '4', name: 'DELETE' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm7',
        title: 'Python Data Structures',
        description: 'Match the data structure to its description in Python.',
        difficulty: 'Beginner',
        xp: 30,
        codeSnippets: [
            { id: '1', language: 'python', code: 'my_list = [1, "a", 1]' },
            { id: '2', language: 'python', code: 'my_tuple = (1, "a", 1)' },
            { id: '3', language: 'python', code: 'my_set = {1, "a"}' },
            { id: '4', language: 'python', code: 'my_dict = {"key": "value"}' },
        ],
        concepts: [
            { id: '1', name: 'List (Mutable, Ordered, Allows Duplicates)' },
            { id: '2', name: 'Tuple (Immutable, Ordered, Allows Duplicates)' },
            { id: '3', name: 'Set (Mutable, Unordered, No Duplicates)' },
            { id: '4', name: 'Dictionary (Mutable, Ordered, Key-Value Pairs)' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm8',
        title: 'JavaScript Async Concepts',
        description: 'Match the JavaScript code to the asynchronous concept it represents.',
        difficulty: 'Intermediate',
        xp: 45,
        codeSnippets: [
            { id: '1', language: 'javascript', code: 'setTimeout(() => console.log("Done"), 1000);' },
            { id: '2', language: 'javascript', code: 'fetch(url).then(res => res.json());' },
            { id: '3', language: 'javascript', code: 'async function getData() { await fetch(url); }' },
        ],
        concepts: [
            { id: '1', name: 'Callback' },
            { id: '2', name: 'Promise' },
            { id: '3', name: 'Async/Await' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm9',
        title: 'Big O Notations',
        description: 'Match the Big O notation to its common name and complexity.',
        difficulty: 'Intermediate',
        xp: 50,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'Accessing an array element by index.' },
            { id: '2', language: 'generic', code: 'Searching an element in a sorted array (e.g. Binary Search).' },
            { id: '3', language: 'generic', code: 'Iterating through all elements in a list.' },
            { id: '4', language: 'generic', code: 'A nested loop iterating through a list.' },
        ],
        concepts: [
            { id: '1', name: 'O(1) - Constant Time' },
            { id: '2', name: 'O(log n) - Logarithmic Time' },
            { id: '3', name: 'O(n) - Linear Time' },
            { id: '4', name: 'O(n^2) - Quadratic Time' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm10',
        title: 'Common Data Structures',
        description: 'Match the data structure to its core property.',
        difficulty: 'Intermediate',
        xp: 40,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'A collection where the last element added is the first one to be removed (LIFO).' },
            { id: '2', language: 'generic', code: 'A collection where the first element added is the first one to be removed (FIFO).' },
            { id: '3', language: 'generic', code: 'A data structure that connects nodes, where each node points to the next.' },
            { id: '4', language: 'generic', code: 'A collection of key-value pairs with fast lookups.' },
        ],
        concepts: [
            { id: '1', name: 'Stack' },
            { id: '2', name: 'Queue' },
            { id: '3', name: 'Linked List' },
            { id: '4', name: 'Hash Table / Dictionary' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm11',
        title: 'Tree Traversal Algorithms',
        description: 'Match the traversal order to the algorithm name.',
        difficulty: 'Advanced',
        xp: 60,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'Visit the root, then the left subtree, then the right subtree.' },
            { id: '2', language: 'generic', code: 'Visit the left subtree, then the root, then the right subtree.' },
            { id: '3', language: 'generic', code: 'Visit the left subtree, then the right subtree, then the root.' },
            { id: '4', language: 'generic', code: 'Visit nodes level by level, from left to right.' },
        ],
        concepts: [
            { id: '1', name: 'Pre-order Traversal' },
            { id: '2', name: 'In-order Traversal' },
            { id: '3', name: 'Post-order Traversal' },
            { id: '4', name: 'Breadth-First Search (BFS)' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm12',
        title: 'HTTP Status Codes',
        description: 'Match the status code to its meaning.',
        difficulty: 'Beginner',
        xp: 30,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'The request has succeeded.' },
            { id: '2', language: 'generic', code: 'The server cannot find the requested resource.' },
            { id: '3', language: 'generic', code: 'The server has encountered a situation it does not know how to handle.' },
            { id: '4', language: 'generic', code: 'The client must authenticate itself to get the requested response.' },
        ],
        concepts: [
            { id: '1', name: '200 OK' },
            { id: '2', name: '404 Not Found' },
            { id: '3', name: '500 Internal Server Error' },
            { id: '4_concept', name: '401 Unauthorized' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4_concept' },
        ]
    },
    {
        id: 'cm13',
        title: 'SOLID Principles',
        description: 'Match the SOLID principle to its definition.',
        difficulty: 'Advanced',
        xp: 80,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'A class should have only one reason to change.' },
            { id: '2', language: 'generic', code: 'Software entities should be open for extension, but closed for modification.' },
            { id: '3', language: 'generic', code: 'Objects of a superclass shall be replaceable with objects of its subclasses without breaking the application.' },
            { id: '4', language: 'generic', code: 'High-level modules should not depend on low-level modules. Both should depend on abstractions.' },
        ],
        concepts: [
            { id: '1', name: 'Single Responsibility Principle (SRP)' },
            { id: '2', name: 'Open/Closed Principle (OCP)' },
            { id: '3', name: 'Liskov Substitution Principle (LSP)' },
            { id: '4', name: 'Dependency Inversion Principle (DIP)' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm14',
        title: 'Basic Git Commands',
        description: 'Match the git command to its function.',
        difficulty: 'Beginner',
        xp: 25,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'Create a copy of a remote repository on your local machine.' },
            { id: '2', language: 'generic', code: 'Stage changes for the next commit.' },
            { id: '3', language: 'generic', code: 'Record staged changes to the repository.' },
            { id: '4', language: 'generic', code: 'Upload local repository content to a remote repository.' },
        ],
        concepts: [
            { id: '1', name: 'git clone' },
            { id: '2', name: 'git add' },
            { id: '3', name: 'git commit' },
            { id: '4', name: 'git push' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm15',
        title: 'JavaScript Array Methods',
        description: 'Match the array method to its functionality.',
        difficulty: 'Intermediate',
        xp: 40,
        codeSnippets: [
            { id: '1', language: 'javascript', code: 'Creates a new array with the results of calling a provided function on every element.' },
            { id: '2', language: 'javascript', code: 'Creates a new array with all elements that pass the test implemented by the provided function.' },
            { id: '3', language: 'javascript', code: 'Executes a "reducer" function on each element of the array, resulting in a single output value.' },
            { id: '4', language: 'javascript', code: 'Executes a provided function once for each array element.' },
        ],
        concepts: [
            { id: '1', name: '.map()' },
            { id: '2', name: '.filter()' },
            { id: '3', name: '.reduce()' },
            { id: '4', name: '.forEach()' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm16',
        title: 'Database Normalization Forms',
        description: 'Match the Normal Form to its rule.',
        difficulty: 'Advanced',
        xp: 75,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'All attributes must be atomic (indivisible).' },
            { id: '2', language: 'generic', code: 'Must be in 1NF and all non-key attributes must be fully functional on the primary key.' },
            { id: '3', language: 'generic', code: 'Must be in 2NF and all attributes must be dependent only on the primary key, not on other non-key attributes (no transitive dependencies).' },
        ],
        concepts: [
            { id: '1', name: 'First Normal Form (1NF)' },
            { id: '2', name: 'Second Normal Form (2NF)' },
            { id: '3', name: 'Third Normal Form (3NF)' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm17',
        title: 'REST API Principles',
        description: 'Match the principle to its description in the context of REST APIs.',
        difficulty: 'Advanced',
        xp: 65,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'The server does not store any client context between requests. Each request from any client contains all the information needed.' },
            { id: '2', language: 'generic', code: 'The client and server act independently. The server provides the API, and the client consumes it.' },
            { id: '3', language: 'generic', code: 'Manipulations of resources are done through their representations, using a uniform interface (e.g., GET, POST, PUT, DELETE).' },
        ],
        concepts: [
            { id: '1', name: 'Statelessness' },
            { id: '2', name: 'Client-Server' },
            { id: '3', name: 'Uniform Interface' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm18',
        title: 'Web Security Acronyms',
        description: 'Match the acronym to what it stands for.',
        difficulty: 'Intermediate',
        xp: 40,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'Prevents unauthorized commands from being transmitted from a user that a web application trusts.' },
            { id: '2', language: 'generic', code: 'Enables a web page to request additional resources from a different domain.' },
            { id: '3', language: 'generic', code: 'A type of injection attack where malicious scripts are injected into otherwise benign and trusted websites.' },
            { id: '4', language: 'generic', code: 'A web security policy mechanism that helps to mitigate certain types of attacks, including XSS and data injection.' },
        ],
        concepts: [
            { id: '1', name: 'CSRF (Cross-Site Request Forgery)' },
            { id: '2', name: 'CORS (Cross-Origin Resource Sharing)' },
            { id: '3', name: 'XSS (Cross-Site Scripting)' },
            { id: '4', name: 'CSP (Content Security Policy)' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm19',
        title: 'Graph Algorithms',
        description: 'Match the algorithm to its primary use case.',
        difficulty: 'Advanced',
        xp: 70,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'Finds the shortest path between nodes in a weighted graph.' },
            { id: '2', language: 'generic', code: 'Finds the shortest path in an unweighted graph.' },
            { id: '3', language: 'generic', code: 'Finds a minimum spanning tree for a weighted undirected graph.' },
            { id: '4', language: 'generic', code: 'Topologically sorts a directed acyclic graph (DAG).' },
        ],
        concepts: [
            { id: '1', name: 'Dijkstra\'s Algorithm' },
            { id: '2', name: 'Breadth-First Search (BFS)' },
            { id: '3', name: 'Kruskal\'s / Prim\'s Algorithm' },
            { id: '4', name: 'Topological Sort (Kahn\'s Algorithm)' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm20',
        title: 'Python `__dunder__` Methods',
        description: 'Match the "dunder" (double underscore) method to the operator or function it implements.',
        difficulty: 'Intermediate',
        xp: 50,
        codeSnippets: [
            { id: '1', language: 'python', code: 'len(my_obj)' },
            { id: '2', language: 'python', code: 'str(my_obj)' },
            { id: '3', language: 'python', code: 'my_obj[key]' },
            { id: '4', language: 'python', code: 'my_obj(arg1, arg2)' },
        ],
        concepts: [
            { id: '1', name: '__len__' },
            { id: '2', name: '__str__' },
            { id: '3', name: '__getitem__' },
            { id: '4', name: '__call__' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm21',
        title: 'C++ Smart Pointers',
        description: 'Match the smart pointer to its ownership semantics.',
        difficulty: 'Advanced',
        xp: 65,
        codeSnippets: [
            { id: '1', language: 'cpp', code: 'Represents exclusive ownership of a resource. Cannot be copied, only moved.' },
            { id: '2', language: 'cpp', code: 'Represents shared ownership of a resource using a reference count.' },
            { id: '3', language: 'cpp', code: 'Represents non-owning ("weak") reference to a resource managed by a shared_ptr.' },
        ],
        concepts: [
            { id: '1', name: 'std::unique_ptr' },
            { id: '2', name: 'std::shared_ptr' },
            { id: '3', name: 'std::weak_ptr' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm22',
        title: 'Java Concurrency Primitives',
        description: 'Match the concurrency utility to its function.',
        difficulty: 'Advanced',
        xp: 70,
        codeSnippets: [
            { id: '1', language: 'java', code: 'A lock that allows multiple readers or one writer.' },
            { id: '2', language: 'java', code: 'A synchronization aid that allows one or more threads to wait until a set of operations being performed in other threads completes.' },
            { id: '3', language: 'java', code: 'A synchronization primitive that can be used to control access to a shared resource through the use of a counter.' },
            { id: '4', language: 'java', code: 'A thread-safe hash map implementation.' },
        ],
        concepts: [
            { id: '1', name: 'ReadWriteLock' },
            { id: '2', name: 'CountDownLatch' },
            { id: '3', name: 'Semaphore' },
            { id: '4', name: 'ConcurrentHashMap' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm23',
        title: 'JavaScript Event Loop',
        description: 'Match the term to its role in the JavaScript event loop.',
        difficulty: 'Advanced',
        xp: 75,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'The place where JavaScript code is executed one line at a time.' },
            { id: '2', language: 'generic', code: 'A queue of messages (or functions) to be processed when the stack is empty.' },
            { id: '3', language: 'generic', code: 'Provided by the browser (e.g., `setTimeout`, `fetch`) to handle asynchronous operations.' },
            { id: '4', language: 'generic', code: 'The component that constantly checks if the stack is empty to push messages from the queue.' },
        ],
        concepts: [
            { id: '1', name: 'Call Stack' },
            { id: '2', name: 'Callback Queue (Task Queue)' },
            { id: '3', name: 'Web APIs' },
            { id: '4', name: 'Event Loop' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm24',
        title: 'Linux/Unix Commands',
        description: 'Match the command to its primary function.',
        difficulty: 'Beginner',
        xp: 25,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'List directory contents.' },
            { id: '2', language: 'generic', code: 'Change the current directory.' },
            { id: '3', language: 'generic', code: 'Print the current working directory.' },
            { id: '4', language: 'generic', code: 'Create a new directory.' },
        ],
        concepts: [
            { id: '1', name: 'ls' },
            { id: '2', name: 'cd' },
            { id: '3', name: 'pwd' },
            { id: '4', name: 'mkdir' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm25',
        title: 'CSS Selectors',
        description: 'Match the CSS selector to what it targets.',
        difficulty: 'Beginner',
        xp: 30,
        codeSnippets: [
            { id: '1', language: 'css', code: '#main-header' },
            { id: '2', language: 'css', code: '.btn-primary' },
            { id: '3', language: 'css', code: 'div > p' },
            { id: '4', language: 'css', code: 'a:hover' },
        ],
        concepts: [
            { id: '1', name: 'Selects an element with a specific ID.' },
            { id: '2', name: 'Selects all elements with a specific class.' },
            { id: '3', name: 'Selects all <p> elements that are direct children of a <div>.' },
            { id: '4', name: 'Selects a link when the user mouses over it.' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm26',
        title: 'SQL Join Types',
        description: 'Match the SQL JOIN to its description.',
        difficulty: 'Intermediate',
        xp: 45,
        codeSnippets: [
            { id: '1', language: 'sql', code: 'Returns records that have matching values in both tables.' },
            { id: '2', language: 'sql', code: 'Returns all records from the left table, and the matched records from the right table.' },
            { id: '3', language: 'sql', code: 'Returns all records from the right table, and the matched records from the left table.' },
            { id: '4', language: 'sql', code: 'Returns all records when there is a match in either left or right table.' },
        ],
        concepts: [
            { id: '1', name: 'INNER JOIN' },
            { id: '2', name: 'LEFT JOIN' },
            { id: '3', name: 'RIGHT JOIN' },
            { id: '4', name: 'FULL OUTER JOIN' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm27',
        title: 'React Hooks',
        description: 'Match the React Hook to its purpose.',
        difficulty: 'Intermediate',
        xp: 50,
        codeSnippets: [
            { id: '1', language: 'javascript', code: 'Lets you add state to a functional component.' },
            { id: '2', language: 'javascript', code: 'Lets you perform side effects in a functional component (e.g., data fetching).' },
            { id: '3', language: 'javascript', code: 'Lets you memoize a function, so it is only re-created when dependencies change.' },
            { id: '4', language: 'javascript', code: 'Lets you access the DOM directly.' },
        ],
        concepts: [
            { id: '1', name: 'useState' },
            { id: '2', name: 'useEffect' },
            { id: '3', name: 'useCallback' },
            { id: '4', name: 'useRef' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm28',
        title: 'Cloud Service Models',
        description: 'Match the service model to its description.',
        difficulty: 'Intermediate',
        xp: 45,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'Delivers fundamental compute, network, and storage resources to consumers on-demand.' },
            { id: '2', language: 'generic', code: 'Provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure.' },
            { id: '3', language: 'generic', code: 'Provides software that is centrally hosted and licensed on a subscription basis.' },
        ],
        concepts: [
            { id: '1', name: 'IaaS (Infrastructure as a Service)' },
            { id: '2', name: 'PaaS (Platform as a Service)' },
            { id: '3', name: 'SaaS (Software as a Service)' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm29',
        title: 'Binary Tree Types',
        description: 'Match the type of binary tree to its definition.',
        difficulty: 'Advanced',
        xp: 60,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'A binary tree where every level, except possibly the last, is completely filled, and all nodes are as far left as possible.' },
            { id: '2', language: 'generic', code: 'A binary tree in which the depth of the two subtrees of every node never differ by more than one.' },
            { id: '3', language: 'generic', code: 'A binary tree where for each node, all elements in the left subtree are less than the node, and all elements in the right subtree are greater.' },
        ],
        concepts: [
            { id: '1', name: 'Complete Binary Tree' },
            { id: '2', name: 'Balanced Binary Tree (e.g., AVL)' },
            { id: '3', name: 'Binary Search Tree (BST)' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm30',
        title: 'C++ Casts',
        description: 'Match the C++ cast to its purpose.',
        difficulty: 'Advanced',
        xp: 70,
        codeSnippets: [
            { id: '1', language: 'cpp', code: 'Safely converts pointers and references within an inheritance hierarchy.' },
            { id: '2', language: 'cpp', code: 'Used for explicit conversions that are well-defined, like converting float to int.' },
            { id: '3', language: 'cpp', code: 'The most dangerous cast, used for low-level reinterpretation of bit patterns.' },
            { id: '4', language: 'cpp', code: 'Used to add or remove const or volatile qualifiers.' },
        ],
        concepts: [
            { id: '1', name: 'dynamic_cast' },
            { id: '2', name: 'static_cast' },
            { id: '3', name: 'reinterpret_cast' },
            { id: '4', name: 'const_cast' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm31',
        title: 'Java `final` Keyword',
        description: 'Match the use of the `final` keyword to its effect.',
        difficulty: 'Intermediate',
        xp: 45,
        codeSnippets: [
            { id: '1', language: 'java', code: 'public final class MyClass { }' },
            { id: '2', language: 'java', code: 'public final void myMethod() { }' },
            { id: '3', language: 'java', code: 'final int x = 10;' },
        ],
        concepts: [
            { id: '1', name: 'Prevents the class from being subclassed.' },
            { id: '2', name: 'Prevents the method from being overridden.' },
            { id: '3', name: 'Makes a variable a constant (cannot be reassigned).' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm32',
        title: 'JavaScript `this` Contexts',
        description: 'Match the code to how `this` is determined.',
        difficulty: 'Advanced',
        xp: 70,
        codeSnippets: [
            { id: '1', language: 'javascript', code: 'myFunction();' },
            { id: '2', language: 'javascript', code: 'myObj.myMethod();' },
            { id: '3', language: 'javascript', code: 'new MyClass();' },
            { id: '4', language: 'javascript', code: 'const boundFunc = myFunc.bind(myObj);' },
        ],
        concepts: [
            { id: '1', name: 'Global object (window) or undefined in strict mode.' },
            { id: '2', name: 'The object the method was called on (`myObj`).' },
            { id: '3', name: 'A newly created instance of the class.' },
            { id: '4', name: 'The object passed as the first argument (`myObj`).' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    }
];
