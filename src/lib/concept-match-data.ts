
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
    },
    {
        id: 'cm33',
        title: 'Python `*args` and `**kwargs`',
        description: 'Match the syntax to its purpose in a Python function definition.',
        difficulty: 'Intermediate',
        xp: 40,
        codeSnippets: [
            { id: '1', language: 'python', code: 'def func(*args): ...' },
            { id: '2', language: 'python', code: 'def func(**kwargs): ...' },
            { id: '3', language: 'python', code: 'func(val1, val2)' },
            { id: '4', language: 'python', code: 'func(key1="a", key2="b")' },
        ],
        concepts: [
            { id: '1', name: 'Collects all positional arguments into a tuple.' },
            { id: '2', name: 'Collects all keyword arguments into a dictionary.' },
            { id: '3', name: 'Positional Arguments' },
            { id: '4', name: 'Keyword Arguments' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm34',
        title: 'CSS Box Model',
        description: 'Match the CSS property to the part of the box model it controls.',
        difficulty: 'Beginner',
        xp: 30,
        codeSnippets: [
            { id: '1', language: 'css', code: 'The innermost part of the box, where the text and images appear.' },
            { id: '2', language: 'css', code: 'Clears an area around the content. It is transparent.' },
            { id: '3', language: 'css', code: 'Goes around the padding and content.' },
            { id: '4', language: 'css', code: 'Clears an area outside the border. It is transparent.' },
        ],
        concepts: [
            { id: '1', name: 'Content' },
            { id: '2', name: 'Padding' },
            { id: '3', name: 'Border' },
            { id: '4', name: 'Margin' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm35',
        title: 'Java Access Modifiers',
        description: 'Match the access modifier to its visibility level.',
        difficulty: 'Intermediate',
        xp: 40,
        codeSnippets: [
            { id: '1', language: 'java', code: 'Visible to the class only.' },
            { id: '2', language: 'java', code: 'Visible to the world.' },
            { id: '3', language: 'java', code: 'Visible to the package and all subclasses.' },
            { id: '4', language: 'java', code: 'Visible to the package only. (No modifier specified)' },
        ],
        concepts: [
            { id: '1', name: 'private' },
            { id: '2', name: 'public' },
            { id: '3', name: 'protected' },
            { id: '4', name: 'default (package-private)' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm36',
        title: 'JavaScript `let`, `const`, `var`',
        description: 'Match the variable declaration to its scope.',
        difficulty: 'Beginner',
        xp: 35,
        codeSnippets: [
            { id: '1', language: 'javascript', code: 'Function-scoped, can be re-declared and updated.' },
            { id: '2', language: 'javascript', code: 'Block-scoped, can be updated but not re-declared.' },
            { id: '3', language: 'javascript', code: 'Block-scoped, cannot be updated or re-declared.' },
        ],
        concepts: [
            { id: '1', name: 'var' },
            { id: '2', name: 'let' },
            { id: '3', name: 'const' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm37',
        title: 'More Design Patterns',
        description: 'Match the pattern to its description.',
        difficulty: 'Advanced',
        xp: 75,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'Allows incompatible interfaces to work together.' },
            { id: '2', language: 'generic', code: 'Provides a simplified interface to a complex subsystem.' },
            { id: '3', language: 'generic', code: 'Attaches additional responsibilities to an object dynamically.' },
        ],
        concepts: [
            { id: '1', name: 'Adapter Pattern' },
            { id: '2', name: 'Facade Pattern' },
            { id: '3', name: 'Decorator Pattern' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm38',
        title: 'Python Magic Methods',
        description: 'Match the magic method to its purpose.',
        difficulty: 'Intermediate',
        xp: 45,
        codeSnippets: [
            { id: '1', language: 'python', code: '`__init__(self, ...)`' },
            { id: '2', language: 'python', code: '`__str__(self)`' },
            { id: '3', language: 'python', code: '`__add__(self, other)`' },
        ],
        concepts: [
            { id: '1', name: 'Object constructor' },
            { id: '2', name: 'Called by `str()` and `print()`' },
            { id: '3', name: 'Implements the `+` operator' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm39',
        title: 'CSS Display Properties',
        description: 'Match the display value to its behavior.',
        difficulty: 'Beginner',
        xp: 30,
        codeSnippets: [
            { id: '1', language: 'css', code: 'Starts on a new line and takes up the full width available.' },
            { id: '2', language: 'css', code: 'Does not start on a new line and only takes up as much width as necessary.' },
            { id: '3', language: 'css', code: 'Enables a flex context for all its direct children.' },
            { id: '4', language: 'css', code: 'The element is not displayed at all.' },
        ],
        concepts: [
            { id: '1', name: '`display: block;`' },
            { id: '2', name: '`display: inline;`' },
            { id: '3', name: '`display: flex;`' },
            { id: '4', name: '`display: none;`' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm40',
        title: 'Java Collections',
        description: 'Match the Java collection to its main characteristic.',
        difficulty: 'Intermediate',
        xp: 40,
        codeSnippets: [
            { id: '1', language: 'java', code: 'An ordered collection that allows duplicate elements.' },
            { id: '2', language: 'java', code: 'A collection that contains no duplicate elements.' },
            { id: '3', language: 'java', code: 'An object that maps keys to values. Cannot contain duplicate keys.' },
        ],
        concepts: [
            { id: '1', name: 'List' },
            { id: '2', name: 'Set' },
            { id: '3', name: 'Map' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm41',
        title: 'C++ `const` Positions',
        description: 'Match the `const` placement to what it makes constant.',
        difficulty: 'Advanced',
        xp: 65,
        codeSnippets: [
            { id: '1', language: 'cpp', code: '`const int * p`' },
            { id: '2', language: 'cpp', code: '`int * const p`' },
            { id: '3', language: 'cpp', code: '`const int * const p`' },
            { id: '4', language: 'cpp', code: '`void func() const`' },
        ],
        concepts: [
            { id: '1', name: 'Pointer to a constant integer (value cannot be changed).' },
            { id: '2', name: 'Constant pointer to an integer (pointer address cannot be changed).' },
            { id: '3', name: 'Constant pointer to a constant integer (neither can be changed).' },
            { id: '4', name: 'A member function that does not modify the object.' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm42',
        title: 'JavaScript Data Type Coercion',
        description: 'Match the expression to its resulting value due to type coercion.',
        difficulty: 'Intermediate',
        xp: 45,
        codeSnippets: [
            { id: '1', language: 'javascript', code: '`"5" - 3`' },
            { id: '2', language: 'javascript', code: '`"5" + 3`' },
            { id: '3', language: 'javascript', code: '`null == undefined`' },
            { id: '4', language: 'javascript', code: '`5 + true`' },
        ],
        concepts: [
            { id: '1', name: '2 (number)' },
            { id: '2', name: '"53" (string)' },
            { id: '3', name: 'true' },
            { id: '4', name: '6 (number)' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm43',
        title: 'Database Keys',
        description: 'Match the database key to its definition.',
        difficulty: 'Intermediate',
        xp: 40,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'A column (or set of columns) in a table that uniquely identifies each row.' },
            { id: '2', language: 'generic', code: 'A column (or set of columns) in a table that refers to the primary key of another table.' },
            { id: '3', language: 'generic', code: 'A column that has a unique constraint, but is not the primary key.' },
        ],
        concepts: [
            { id: '1', name: 'Primary Key' },
            { id: '2', name: 'Foreign Key' },
            { id: '3', name: 'Unique Key' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm44',
        title: 'More Git Commands',
        description: 'Match the Git command to its purpose.',
        difficulty: 'Intermediate',
        xp: 40,
        codeSnippets: [
            { id: '1', language: 'generic', code: '`git fetch` followed by `git merge`' },
            { id: '2', language: 'generic', code: 'Create a new branch' },
            { id: '3', language: 'generic', code: 'Switch branches or restore working tree files' },
            { id: '4', language: 'generic', code: 'Join two or more development histories together' },
        ],
        concepts: [
            { id: '1', name: '`git pull`' },
            { id: '2', name: '`git branch <name>`' },
            { id: '3', name: '`git checkout`' },
            { id: '4', name: '`git merge`' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm45',
        title: 'Regular Expression Symbols',
        description: 'Match the regex symbol to what it matches.',
        difficulty: 'Beginner',
        xp: 35,
        codeSnippets: [
            { id: '1', language: 'generic', code: '`.`' },
            { id: '2', language: 'generic', code: '`*`' },
            { id: '3', language: 'generic', code: '`^`' },
            { id: '4', language: 'generic', code: '`\\d`' },
        ],
        concepts: [
            { id: '1', name: 'Any single character' },
            { id: '2', name: 'Zero or more occurrences of the preceding element' },
            { id: '3', name: 'Start of a string' },
            { id: '4', name: 'Any digit' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm46',
        title: 'CI/CD Concepts',
        description: 'Match the term to its definition in CI/CD pipelines.',
        difficulty: 'Advanced',
        xp: 60,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'The practice of merging all developers\' working copies to a shared mainline several times a day.' },
            { id: '2', language: 'generic', code: 'Automatically releasing the application to a production environment.' },
            { id: '3', language: 'generic', code: 'A server that automates the build, test, and deployment processes.' },
        ],
        concepts: [
            { id: '1', name: 'Continuous Integration (CI)' },
            { id: '2', name: 'Continuous Deployment (CD)' },
            { id: '3', name: 'Build Server (e.g., Jenkins, GitLab CI)' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm47',
        title: 'C++ Standard Template Library (STL)',
        description: 'Match the STL component to its category.',
        difficulty: 'Intermediate',
        xp: 45,
        codeSnippets: [
            { id: '1', language: 'cpp', code: '`std::vector`, `std::list`, `std::map`' },
            { id: '2', language: 'cpp', code: '`std::sort`, `std::find`, `std::copy`' },
            { id: '3', language: 'cpp', code: '`std::vector<int>::iterator`' },
        ],
        concepts: [
            { id: '1', name: 'Containers' },
            { id: '2', name: 'Algorithms' },
            { id: '3', name: 'Iterators' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm48',
        title: 'Exception Handling Keywords',
        description: 'Match the keyword to its role in exception handling.',
        difficulty: 'Beginner',
        xp: 30,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'Encloses a block of code in which an exception can occur.' },
            { id: '2', language: 'generic', code: 'Catches and handles an exception thrown from the preceding block.' },
            { id: '3', language: 'generic', code: 'Specifies a block of code that is always executed, regardless of whether an exception occurred.' },
            { id: '4', language: 'generic', code: 'Used to signal that an exceptional condition has occurred.' },
        ],
        concepts: [
            { id: '1', name: '`try`' },
            { id: '2', name: '`catch` / `except`' },
            { id: '3', name: '`finally`' },
            { id: '4', name: '`throw` / `raise`' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm49',
        title: 'Java `Stream` API Operations',
        description: 'Match the stream operation to its purpose.',
        difficulty: 'Advanced',
        xp: 60,
        codeSnippets: [
            { id: '1', language: 'java', code: 'Transforms each element of the stream.' },
            { id: '2', language: 'java', code: 'Removes elements based on a predicate.' },
            { id: '3', language: 'java', code: 'Performs a reduction on the elements of the stream.' },
            { id: '4', language: 'java', code: 'A terminal operation that gathers the stream elements into a collection.' },
        ],
        concepts: [
            { id: '1', name: '`map`' },
            { id: '2', name: '`filter`' },
            { id: '3', name: '`reduce`' },
            { id: '4', name: '`collect`' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm50',
        title: 'JavaScript Promise States',
        description: 'Match the state to its meaning for a JavaScript Promise.',
        difficulty: 'Intermediate',
        xp: 40,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'The initial state; neither fulfilled nor rejected.' },
            { id: '2', language: 'generic', code: 'The operation completed successfully.' },
            { id: '3', language: 'generic', code: 'The operation failed.' },
        ],
        concepts: [
            { id: '1', name: 'Pending' },
            { id: '2', name: 'Fulfilled' },
            { id: '3', name: 'Rejected' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm51',
        title: 'Python File Modes',
        description: 'Match the file mode character to its function.',
        difficulty: 'Beginner',
        xp: 25,
        codeSnippets: [
            { id: '1', language: 'python', code: 'Opens a file for reading. (default)' },
            { id: '2', language: 'python', code: 'Opens a file for writing, creates the file if it does not exist.' },
            { id: '3', language: 'python', code: 'Opens a file for appending, creates the file if it does not exist.' },
            { id: '4', language: 'python', code: 'Opens a file in binary mode.' },
        ],
        concepts: [
            { id: '1', name: '`r`' },
            { id: '2', name: '`w`' },
            { id: '3', name: '`a`' },
            { id: '4', name: '`b`' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm52',
        title: 'React Component Lifecycle (Class)',
        description: 'Match the lifecycle method to when it is called.',
        difficulty: 'Advanced',
        xp: 65,
        codeSnippets: [
            { id: '1', language: 'javascript', code: 'Called after the component is rendered for the first time.' },
            { id: '2', language: 'javascript', code: 'Called just before a component is unmounted and destroyed.' },
            { id: '3', language: 'javascript', code: 'Called after a component is updated. Not called on initial render.' },
        ],
        concepts: [
            { id: '1', name: '`componentDidMount`' },
            { id: '2', name: '`componentWillUnmount`' },
            { id: '3', name: '`componentDidUpdate`' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm53',
        title: 'C++ Keywords',
        description: 'Match the C++ keyword to its purpose.',
        difficulty: 'Beginner',
        xp: 30,
        codeSnippets: [
            { id: '1', language: 'cpp', code: '`auto`' },
            { id: '2', language: 'cpp', code: '`nullptr`' },
            { id: '3', language: 'cpp', code: '`virtual`' },
        ],
        concepts: [
            { id: '1', name: 'Deduces the type of a variable from its initializer.' },
            { id: '2', name: 'Represents a null pointer value.' },
            { id: '3', name: 'Indicates a member function can be overridden by a subclass.' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm54',
        title: 'HTTP Request/Response',
        description: 'Match the term to its place in an HTTP transaction.',
        difficulty: 'Intermediate',
        xp: 40,
        codeSnippets: [
            { id: '1', language: 'generic', code: '`GET /index.html HTTP/1.1`' },
            { id: '2', language: 'generic', code: '`Content-Type: text/html`' },
            { id: '3', language: 'generic', code: '`<html>...</html>`' },
            { id: '4', language: 'generic', code: '`200 OK`' },
        ],
        concepts: [
            { id: '1', name: 'Request Line' },
            { id: '2', name: 'Header' },
            { id: '3', name: 'Body' },
            { id: '4', name: 'Status Line' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm55',
        title: 'JSON Data Types',
        description: 'Match the example to the JSON data type.',
        difficulty: 'Beginner',
        xp: 25,
        codeSnippets: [
            { id: '1', language: 'json', code: '`"value"`' },
            { id: '2', language: 'json', code: '`123.45`' },
            { id: '3', language: 'json', code: '`[ "a", "b" ]`' },
            { id: '4', language: 'json', code: '`{ "key": "value" }`' },
        ],
        concepts: [
            { id: '1', name: 'String' },
            { id: '2', name: 'Number' },
            { id: '3', name: 'Array' },
            { id: '4', name: 'Object' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm56',
        title: 'Dynamic vs. Static Typing',
        description: 'Match the language to its primary typing discipline.',
        difficulty: 'Beginner',
        xp: 30,
        codeSnippets: [
            { id: '1', language: 'generic', code: '`let x = 5;\nx = "hello";`' },
            { id: '2', language: 'generic', code: '`int x = 5;\nx = "hello"; // Error`' },
        ],
        concepts: [
            { id: '1', name: 'Dynamic Typing (e.g., Python, JavaScript)' },
            { id: '2', name: 'Static Typing (e.g., Java, C++)' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
        ]
    },
    {
        id: 'cm57',
        title: 'Hashing Concepts',
        description: 'Match the hashing term to its description.',
        difficulty: 'Advanced',
        xp: 60,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'Two different inputs produce the same hash output.' },
            { id: '2', language: 'generic', code: 'Random data added to an input before hashing, used to prevent rainbow table attacks.' },
            { id: '3', language: 'generic', code: 'A data structure that maps keys to values for highly efficient lookup.' },
        ],
        concepts: [
            { id: '1', name: 'Collision' },
            { id: '2', name: 'Salt' },
            { id: '3', name: 'Hash Table' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm58',
        title: 'Java `static` vs. `final`',
        description: 'Match the keyword combination to its meaning.',
        difficulty: 'Intermediate',
        xp: 45,
        codeSnippets: [
            { id: '1', language: 'java', code: 'A variable that belongs to the class, not an instance.' },
            { id: '2', language: 'java', code: 'A variable that cannot be reassigned.' },
            { id: '3', language: 'java', code: 'A class-level constant shared by all instances.' },
        ],
        concepts: [
            { id: '1', name: '`static`' },
            { id: '2', name: '`final`' },
            { id: '3', name: '`static final`' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm59',
        title: 'Binary Search',
        description: 'Match the concept to its role in the binary search algorithm.',
        difficulty: 'Intermediate',
        xp: 50,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'The array must be in this state for the algorithm to work.' },
            { id: '2', language: 'generic', code: 'The core principle of the algorithm.' },
            { id: '3', language: 'generic', code: 'The time complexity of the algorithm.' },
        ],
        concepts: [
            { id: '1', name: 'Sorted' },
            { id: '2', name: 'Repeatedly divide the search interval in half.' },
            { id: '3', name: 'O(log n)' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm60',
        title: 'State Management in React',
        description: 'Match the state management solution to its description.',
        difficulty: 'Advanced',
        xp: 65,
        codeSnippets: [
            { id: '1', language: 'javascript', code: 'Built-in React hook for managing local component state.' },
            { id: '2', language: 'javascript', code: 'Built-in React hook for passing state down through the component tree without prop drilling.' },
            { id: '3', language: 'javascript', code: 'A popular external library for managing global application state in a predictable container.' },
        ],
        concepts: [
            { id: '1', name: '`useState`' },
            { id: '2', name: '`useContext`' },
            { id: '3', name: 'Redux' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm61',
        title: 'Dynamic vs Static Typing',
        description: 'Match the language to its typing discipline.',
        difficulty: 'Beginner',
        xp: 25,
        codeSnippets: [
            { id: 'cm61-c1', language: 'python', code: 'x = 5\nx = "hello"' },
            { id: 'cm61-c2', language: 'java', code: 'int x = 5;\nx = "hello"; // Compile Error' },
        ],
        concepts: [
            { id: 'cm61-p1', name: 'Dynamic Typing' },
            { id: 'cm61-p2', name: 'Static Typing' },
        ],
        pairs: [
            { codeId: 'cm61-c1', conceptId: 'cm61-p1' },
            { codeId: 'cm61-c2', conceptId: 'cm61-p2' },
        ]
    },
    {
        id: 'cm62',
        title: 'Hashing Concepts',
        description: 'Match the term to its definition.',
        difficulty: 'Intermediate',
        xp: 45,
        codeSnippets: [
            { id: 'cm62-c1', language: 'generic', code: 'A function that converts input data of any size into a fixed-size string of bytes.' },
            { id: 'cm62-c2', language: 'generic', code: 'When two different inputs produce the same hash output.' },
            { id: 'cm62-c3', language: 'generic', code: 'Random data added to an input before hashing to prevent rainbow table attacks.' },
        ],
        concepts: [
            { id: 'cm62-p1', name: 'Hash Function' },
            { id: 'cm62-p2', name: 'Collision' },
            { id: 'cm62-p3', name: 'Salt' },
        ],
        pairs: [
            { codeId: 'cm62-c1', conceptId: 'cm62-p1' },
            { codeId: 'cm62-c2', conceptId: 'cm62-p2' },
            { codeId: 'cm62-c3', conceptId: 'cm62-p3' },
        ]
    },
    {
        id: 'cm63',
        title: 'CSS Positioning',
        description: 'Match the CSS position value to its behavior.',
        difficulty: 'Intermediate',
        xp: 40,
        codeSnippets: [
            { id: 'cm63-c1', language: 'css', code: 'The element is positioned relative to the normal flow of the document.' },
            { id: 'cm63-c2', language: 'css', code: 'The element is positioned relative to its nearest positioned ancestor.' },
            { id: 'cm63-c3', language: 'css', code: 'The element is positioned relative to the viewport, meaning it always stays in the same place even if the page is scrolled.' },
            { id: 'cm63-c4', language: 'css', code: 'The element is positioned based on the user\'s scroll position.' },
        ],
        concepts: [
            { id: 'cm63-p1', name: 'position: relative;' },
            { id: 'cm63-p2', name: 'position: absolute;' },
            { id: 'cm63-p3', name: 'position: fixed;' },
            { id: 'cm63-p4', name: 'position: sticky;' },
        ],
        pairs: [
            { codeId: 'cm63-c1', conceptId: 'cm63-p1' },
            { codeId: 'cm63-c2', conceptId: 'cm63-p2' },
            { codeId: 'cm63-c3', conceptId: 'cm63-p3' },
            { codeId: 'cm63-c4', conceptId: 'cm63-p4' },
        ]
    },
    {
        id: 'cm64',
        title: 'Python `*args` and `**kwargs` in calling',
        description: 'Match the syntax to its purpose when calling a Python function.',
        difficulty: 'Intermediate',
        xp: 45,
        codeSnippets: [
            { id: 'cm64-c1', language: 'python', code: 'my_list = [1, 2, 3]\nmy_func(*my_list)' },
            { id: 'cm64-c2', language: 'python', code: 'my_dict = {"a": 1, "b": 2}\nmy_func(**my_dict)' },
        ],
        concepts: [
            { id: 'cm64-p1', name: 'Unpacks a list or tuple into positional arguments.' },
            { id: 'cm64-p2', name: 'Unpacks a dictionary into keyword arguments.' },
        ],
        pairs: [
            { codeId: 'cm64-c1', conceptId: 'cm64-p1' },
            { codeId: 'cm64-c2', conceptId: 'cm64-p2' },
        ]
    },
    {
        id: 'cm65',
        title: 'Common Network Protocols',
        description: 'Match the protocol to its primary use.',
        difficulty: 'Beginner',
        xp: 35,
        codeSnippets: [
            { id: 'cm65-c1', language: 'generic', code: 'The foundation of data communication for the World Wide Web.' },
            { id: 'cm65-c2', language: 'generic', code: 'Used for sending e-mails.' },
            { id: 'cm65-c3', language: 'generic', code: 'Used to transfer computer files between a client and server on a computer network.' },
            { id: 'cm65-c4', language: 'generic', code: 'Provides reliable, ordered, and error-checked delivery of a stream of octets between applications.' },
        ],
        concepts: [
            { id: 'cm65-p1', name: 'HTTP' },
            { id: 'cm65-p2', name: 'SMTP' },
            { id: 'cm65-p3', name: 'FTP' },
            { id: 'cm65-p4', name: 'TCP' },
        ],
        pairs: [
            { codeId: 'cm65-c1', conceptId: 'cm65-p1' },
            { codeId: 'cm65-c2', conceptId: 'cm65-p2' },
            { codeId: 'cm65-c3', conceptId: 'cm65-p3' },
            { codeId: 'cm65-c4', conceptId: 'cm65-p4' },
        ]
    },
    {
        id: 'cm66',
        title: 'JavaScript Scope Chain',
        description: 'Match the term to its definition in JavaScript scoping.',
        difficulty: 'Advanced',
        xp: 65,
        codeSnippets: [
            { id: 'cm66-c1', language: 'generic', code: 'The scope where a variable is physically located in the code.' },
            { id: 'cm66-c2', language: 'generic', code: 'The set of all variables and functions that are accessible at a given point in the code.' },
            { id: 'cm66-c3', language: 'generic', code: 'A function bundled together with references to its surrounding state (the lexical environment).' },
        ],
        concepts: [
            { id: 'cm66-p1', name: 'Lexical Scope' },
            { id: 'cm66-p2', name: 'Scope' },
            { id: 'cm66-p3', name: 'Closure' },
        ],
        pairs: [
            { codeId: 'cm66-c1', conceptId: 'cm66-p1' },
            { codeId: 'cm66-c2', conceptId: 'cm66-p2' },
            { codeId: 'cm66-c3', conceptId: 'cm66-p3' },
        ]
    },
    {
        id: 'cm67',
        title: 'SQL Constraints',
        description: 'Match the SQL constraint to its function.',
        difficulty: 'Intermediate',
        xp: 40,
        codeSnippets: [
            { id: 'cm67-c1', language: 'sql', code: 'Ensures that a column cannot have a NULL value.' },
            { id: 'cm67-c2', language: 'sql', code: 'Ensures that all values in a column are different.' },
            { id: 'cm67-c3', language: 'sql', code: 'A combination of a NOT NULL and UNIQUE constraint.' },
            { id: 'cm67-c4', language: 'sql', code: 'Prevents actions that would destroy links between tables.' },
        ],
        concepts: [
            { id: 'cm67-p1', name: 'NOT NULL' },
            { id: 'cm67-p2', name: 'UNIQUE' },
            { id: 'cm67-p3', name: 'PRIMARY KEY' },
            { id: 'cm67-p4', name: 'FOREIGN KEY' },
        ],
        pairs: [
            { codeId: 'cm67-c1', conceptId: 'cm67-p1' },
            { codeId: 'cm67-c2', conceptId: 'cm67-p2' },
            { codeId: 'cm67-c3', conceptId: 'cm67-p3' },
            { codeId: 'cm67-c4', conceptId: 'cm67-p4' },
        ]
    },
    {
        id: 'cm68',
        title: 'CSS Flexbox Properties',
        description: 'Match the Flexbox property to its effect.',
        difficulty: 'Intermediate',
        xp: 45,
        codeSnippets: [
            { id: 'cm68-c1', language: 'css', code: 'Defines the direction flex items are placed in the flex container.' },
            { id: 'cm68-c2', language: 'css', code: 'Aligns flex items along the main axis of the current line of the flex container.' },
            { id: 'cm68-c3', language: 'css', code: 'Aligns flex items along the cross axis of the current line of the flex container.' },
            { id: 'cm68-c4', language: 'css', code: 'Specifies how flex items are placed in the flex container, defining the main axis and direction.' },
        ],
        concepts: [
            { id: 'cm68-p1', name: 'flex-direction' },
            { id: 'cm68-p2', name: 'justify-content' },
            { id: 'cm68-p3', name: 'align-items' },
            { id: 'cm68-p4', name: 'flex-flow' },
        ],
        pairs: [
            { codeId: 'cm68-c1', conceptId: 'cm68-p1' },
            { codeId: 'cm68-c2', conceptId: 'cm68-p2' },
            { codeId: 'cm68-c3', conceptId: 'cm68-p3' },
            { codeId: 'cm68-c4', conceptId: 'cm68-p4' },
        ]
    },
    {
        id: 'cm69',
        title: 'React `useReducer` Hook',
        description: 'Match the term to its role in the `useReducer` hook.',
        difficulty: 'Advanced',
        xp: 60,
        codeSnippets: [
            { id: 'cm69-c1', language: 'javascript', code: 'A function that specifies how the state changes in response to an action.' },
            { id: 'cm69-c2', language: 'javascript', code: 'An object that describes what happened.' },
            { id: 'cm69-c3', language: 'javascript', code: 'A function that sends an action to the reducer.' },
        ],
        concepts: [
            { id: 'cm69-p1', name: 'Reducer' },
            { id: 'cm69-p2', name: 'Action' },
            { id: 'cm69-p3', name: 'Dispatch' },
        ],
        pairs: [
            { codeId: 'cm69-c1', conceptId: 'cm69-p1' },
            { codeId: 'cm69-c2', conceptId: 'cm69-p2' },
            { codeId: 'cm69-c3', conceptId: 'cm69-p3' },
        ]
    },
    {
        id: 'cm70',
        title: 'Java `static` Keyword',
        description: 'Match the `static` keyword use to its effect.',
        difficulty: 'Intermediate',
        xp: 45,
        codeSnippets: [
            { id: 'cm70-c1', language: 'java', code: 'A variable that belongs to the class, rather than any object instance.' },
            { id: 'cm70-c2', language: 'java', code: 'A method that belongs to the class and can be called without creating an object.' },
            { id: 'cm70-c3', language: 'java', code: 'A block of code that is executed once when the class is first loaded.' },
        ],
        concepts: [
            { id: 'cm70-p1', name: 'Static Variable' },
            { id: 'cm70-p2', name: 'Static Method' },
            { id: 'cm70-p3', name: 'Static Block' },
        ],
        pairs: [
            { codeId: 'cm70-c1', conceptId: 'cm70-p1' },
            { codeId: 'cm70-c2', conceptId: 'cm70-p2' },
            { codeId: 'cm70-c3', conceptId: 'cm70-p3' },
        ]
    },
    {
        id: 'cm71',
        title: 'Python Generators',
        description: 'Match the concept to its definition related to Python generators.',
        difficulty: 'Advanced',
        xp: 60,
        codeSnippets: [
            { id: 'cm71-c1', language: 'python', code: 'A function that returns an iterator that produces a sequence of values when iterated over.' },
            { id: 'cm71-c2', language: 'python', code: 'A keyword used to produce a value from a generator.' },
            { id: 'cm71-c3', language: 'python', code: '(x*x for x in range(10))' },
        ],
        concepts: [
            { id: 'cm71-p1', name: 'Generator Function' },
            { id: 'cm71-p2', name: '`yield`' },
            { id: 'cm71-p3', name: 'Generator Expression' },
        ],
        pairs: [
            { codeId: 'cm71-c1', conceptId: 'cm71-p1' },
            { codeId: 'cm71-c2', conceptId: 'cm71-p2' },
            { codeId: 'cm71-c3', conceptId: 'cm71-p3' },
        ]
    },
    {
        id: 'cm72',
        title: 'C++ `RAII`',
        description: 'Match the term to its role in Resource Acquisition Is Initialization.',
        difficulty: 'Advanced',
        xp: 75,
        codeSnippets: [
            { id: 'cm72-c1', language: 'cpp', code: 'Resource is acquired in the object\'s constructor.' },
            { id: 'cm72-c2', language: 'cpp', code: 'Resource is released in the object\'s destructor.' },
            { id: 'cm72-c3', language: 'cpp', code: 'Smart pointers like `std::unique_ptr` and `std::shared_ptr`.' },
        ],
        concepts: [
            { id: 'cm72-p1', name: 'Acquisition' },
            { id: 'cm72-p2', name: 'Release' },
            { id: 'cm72-p3', name: 'RAII examples' },
        ],
        pairs: [
            { codeId: 'cm72-c1', conceptId: 'cm72-p1' },
            { codeId: 'cm72-c2', conceptId: 'cm72-p2' },
            { codeId: 'cm72-c3', conceptId: 'cm72-p3' },
        ]
    },
    {
        id: 'cm73',
        title: 'More Linux Commands',
        description: 'Match the command to its function.',
        difficulty: 'Beginner',
        xp: 30,
        codeSnippets: [
            { id: 'cm73-c1', language: 'generic', code: 'Display the contents of a file.' },
            { id: 'cm73-c2', language: 'generic', code: 'Move or rename a file.' },
            { id: 'cm73-c3', language: 'generic', code: 'Copy a file.' },
            { id: 'cm73-c4', language: 'generic', code: 'Remove a file.' },
        ],
        concepts: [
            { id: 'cm73-p1', name: '`cat`' },
            { id: 'cm73-p2', name: '`mv`' },
            { id: 'cm73-p3', name: '`cp`' },
            { id: 'cm73-p4', name: '`rm`' },
        ],
        pairs: [
            { codeId: 'cm73-c1', conceptId: 'cm73-p1' },
            { codeId: 'cm73-c2', conceptId: 'cm73-p2' },
            { codeId: 'cm73-c3', conceptId: 'cm73-p3' },
            { codeId: 'cm73-c4', conceptId: 'cm73-p4' },
        ]
    },
    {
        id: 'cm74',
        title: 'JavaScript Truthiness/Falsiness',
        description: 'Match the value to whether it is "truthy" or "falsy".',
        difficulty: 'Beginner',
        xp: 30,
        codeSnippets: [
            { id: 'cm74-c1', language: 'javascript', code: '`0`' },
            { id: 'cm74-c2', language: 'javascript', code: '`"0"`' },
            { id: 'cm74-c3', language: 'javascript', code: '`[]` (an empty array)' },
            { id: 'cm74-c4', language: 'javascript', code: '`{}` (an empty object)' },
        ],
        concepts: [
            { id: 'cm74-p1', name: 'Falsy' },
            { id: 'cm74-p2', name: 'Truthy' },
        ],
        pairs: [
            { codeId: 'cm74-c1', conceptId: 'cm74-p1' },
            { codeId: 'cm74-c2', conceptId: 'cm74-p2' },
            { codeId: 'cm74-c3', conceptId: 'cm74-p2' },
            { codeId: 'cm74-c4', conceptId: 'cm74-p2' },
        ]
    },
    {
        id: 'cm75',
        title: 'NoSQL Database Types',
        description: 'Match the NoSQL database type to its data model.',
        difficulty: 'Advanced',
        xp: 65,
        codeSnippets: [
            { id: 'cm75-c1', language: 'generic', code: 'Stores data in JSON-like documents. (e.g., MongoDB)' },
            { id: 'cm75-c2', language: 'generic', code: 'Uses nodes and edges to represent and store data. (e.g., Neo4j)' },
            { id: 'cm75-c3', language: 'generic', code: 'Uses a simple key for storage and retrieval. (e.g., Redis)' },
            { id: 'cm75-c4', language: 'generic', code: 'Stores data in tables with rows and dynamic columns. (e.g., Cassandra)' },
        ],
        concepts: [
            { id: 'cm75-p1', name: 'Document Database' },
            { id: 'cm75-p2', name: 'Graph Database' },
            { id: 'cm75-p3', name: 'Key-Value Store' },
            { id: 'cm75-p4', name: 'Wide-Column Store' },
        ],
        pairs: [
            { codeId: 'cm75-c1', conceptId: 'cm75-p1' },
            { codeId: 'cm75-c2', conceptId: 'cm75-p2' },
            { codeId: 'cm75-c3', conceptId: 'cm75-p3' },
            { codeId: 'cm75-c4', conceptId: 'cm75-p4' },
        ]
    },
    {
        id: 'cm76',
        title: 'Java `abstract` vs `interface`',
        description: 'Match the feature to the correct Java construct.',
        difficulty: 'Intermediate',
        xp: 50,
        codeSnippets: [
            { id: 'cm76-c1', language: 'java', code: 'Can have constructors.' },
            { id: 'cm76-c2', language: 'java', code: 'A class can implement multiple of these.' },
            { id: 'cm76-c3', language: 'java', code: 'Can contain non-final variables.' },
            { id: 'cm76-c4', language: 'java', code: 'All methods are implicitly `public`.' },
        ],
        concepts: [
            { id: 'cm76-p1', name: 'Abstract Class' },
            { id: 'cm76-p2', name: 'Interface' },
        ],
        pairs: [
            { codeId: 'cm76-c1', conceptId: 'cm76-p1' },
            { codeId: 'cm76-c2', conceptId: 'cm76-p2' },
            { codeId: 'cm76-c3', conceptId: 'cm76-p1' },
            { codeId: 'cm76-c4', conceptId: 'cm76-p2' },
        ]
    },
    {
        id: 'cm77',
        title: 'Python Decorators',
        description: 'Match the syntax to its role in creating a Python decorator.',
        difficulty: 'Advanced',
        xp: 65,
        codeSnippets: [
            { id: 'cm77-c1', language: 'python', code: '`@my_decorator`' },
            { id: 'cm77-c2', language: 'python', code: 'A function that takes another function as an argument and returns a new function.' },
            { id: 'cm77-c3', language: 'python', code: 'The new function returned by the decorator, which usually adds functionality before or after calling the original function.' },
        ],
        concepts: [
            { id: 'cm77-p1', name: 'Syntactic Sugar' },
            { id: 'cm77-p2', name: 'Decorator Function' },
            { id: 'cm77-p3', name: 'Wrapper Function' },
        ],
        pairs: [
            { codeId: 'cm77-c1', conceptId: 'cm77-p1' },
            { codeId: 'cm77-c2', conceptId: 'cm77-p2' },
            { codeId: 'cm77-c3', conceptId: 'cm77-p3' },
        ]
    },
    {
        id: 'cm78',
        title: 'C++ `new` vs `malloc`',
        description: 'Match the memory allocation function to its characteristic.',
        difficulty: 'Intermediate',
        xp: 50,
        codeSnippets: [
            { id: 'cm78-c1', language: 'cpp', code: 'Calls constructors for objects.' },
            { id: 'cm78-c2', language: 'cpp', code: 'Is an operator, not a function.' },
            { id: 'cm78-c3', language: 'cpp', code: 'Returns a `void*` pointer that must be cast.' },
            { id: 'cm78-c4', language: 'cpp', 'code': 'Should be paired with `free()`.' },
        ],
        concepts: [
            { id: 'cm78-p1', name: '`new`' },
            { id: 'cm78-p2', name: '`malloc`' },
        ],
        pairs: [
            { codeId: 'cm78-c1', conceptId: 'cm78-p1' },
            { codeId: 'cm78-c2', conceptId: 'cm78-p1' },
            { codeId: 'cm78-c3', conceptId: 'cm78-p2' },
            { codeId: 'cm78-c4', conceptId: 'cm78-p2' },
        ]
    },
    {
        id: 'cm79',
        title: 'JavaScript `null` vs `undefined`',
        description: 'Match the value to its meaning.',
        difficulty: 'Beginner',
        xp: 30,
        codeSnippets: [
            { id: 'cm79-c1', language: 'javascript', code: 'Represents the intentional absence of any object value.' },
            { id: 'cm79-c2', language: 'javascript', code: 'A variable that has been declared but has not yet been assigned a value.' },
        ],
        concepts: [
            { id: 'cm79-p1', name: '`null`' },
            { id: 'cm79-p2', name: '`undefined`' },
        ],
        pairs: [
            { codeId: 'cm79-c1', conceptId: 'cm79-p1' },
            { codeId: 'cm79-c2', conceptId: 'cm79-p2' },
        ]
    },
    {
        id: 'cm80',
        title: 'Regular Expression Quantifiers',
        description: 'Match the regex quantifier to its meaning.',
        difficulty: 'Intermediate',
        xp: 40,
        codeSnippets: [
            { id: 'cm80-c1', language: 'generic', code: '`+`' },
            { id: 'cm80-c2', language: 'generic', code: '`?`' },
            { id: 'cm80-c3', language: 'generic', code: '`{3}`' },
            { id: 'cm80-c4', language: 'generic', code: '`{2,4}`' },
        ],
        concepts: [
            { id: 'cm80-p1', name: 'One or more occurrences.' },
            { id: 'cm80-p2', name: 'Zero or one occurrence.' },
            { id: 'cm80-p3', name: 'Exactly three occurrences.' },
            { id: 'cm80-p4', name: 'Between two and four occurrences.' },
        ],
        pairs: [
            { codeId: 'cm80-c1', conceptId: 'cm80-p1' },
            { codeId: 'cm80-c2', conceptId: 'cm80-p2' },
            { codeId: 'cm80-c3', conceptId: 'cm80-p3' },
            { codeId: 'cm80-c4', conceptId: 'cm80-p4' },
        ]
    },
    {
        id: 'cm81',
        title: 'React Higher-Order Component vs. Hook',
        description: 'Match the description to the correct React pattern.',
        difficulty: 'Advanced',
        xp: 65,
        codeSnippets: [
            { id: 'cm81-c1', language: 'javascript', code: 'A function that takes a component and returns a new component.' },
            { id: 'cm81-c2', language: 'javascript', code: 'A function that lets you "hook into" React state and lifecycle features from function components.' },
        ],
        concepts: [
            { id: 'cm81-p1', name: 'Higher-Order Component (HOC)' },
            { id: 'cm81-p2', name: 'Hook' },
        ],
        pairs: [
            { codeId: 'cm81-c1', conceptId: 'cm81-p1' },
            { codeId: 'cm81-c2', conceptId: 'cm81-p2' },
        ]
    },
    {
        id: 'cm82',
        title: 'SQL Aggregate Functions',
        description: 'Match the SQL function to its purpose.',
        difficulty: 'Beginner',
        xp: 30,
        codeSnippets: [
            { id: 'cm82-c1', language: 'sql', code: 'Returns the number of rows.' },
            { id: 'cm82-c2', language: 'sql', code: 'Returns the total sum of a numeric column.' },
            { id: 'cm82-c3', language: 'sql', code: 'Returns the average value of a numeric column.' },
            { id: 'cm82-c4', language: 'sql', code: 'Returns the smallest value of the selected column.' },
        ],
        concepts: [
            { id: 'cm82-p1', name: '`COUNT()`' },
            { id: 'cm82-p2', name: '`SUM()`' },
            { id: 'cm82-p3', name: '`AVG()`' },
            { id: 'cm82-p4', name: '`MIN()`' },
        ],
        pairs: [
            { codeId: 'cm82-c1', conceptId: 'cm82-p1' },
            { codeId: 'cm82-c2', conceptId: 'cm82-p2' },
            { codeId: 'cm82-c3', conceptId: 'cm82-p3' },
            { codeId: 'cm82-c4', conceptId: 'cm82-p4' },
        ]
    },
    {
        id: 'cm83',
        title: 'JavaScript `==` vs `===`',
        description: 'Match the equality operator to its behavior.',
        difficulty: 'Beginner',
        xp: 35,
        codeSnippets: [
            { id: 'cm83-c1', language: 'javascript', code: 'Compares for equality after performing any necessary type conversions.' },
            { id: 'cm83-c2', language: 'javascript', code: 'Compares for equality without type conversion.' },
            { id: 'cm83-c3', language: 'javascript', code: 'Which operator returns `true` for `5 == "5"`?' },
            { id: 'cm83-c4', language: 'javascript', code: 'Which operator returns `false` for `5 === "5"`?' },
        ],
        concepts: [
            { id: 'cm83-p1', name: 'Loose Equality (`==`)' },
            { id: 'cm83-p2', name: 'Strict Equality (`===`)' },
        ],
        pairs: [
            { codeId: 'cm83-c1', conceptId: 'cm83-p1' },
            { codeId: 'cm83-c2', conceptId: 'cm83-p2' },
            { codeId: 'cm83-c3', conceptId: 'cm83-p1' },
            { codeId: 'cm83-c4', conceptId: 'cm83-p2' },
        ]
    },
    {
        id: 'cm84',
        title: 'C++ `const` and Pointers Deep Dive',
        description: 'Match the declaration to its meaning.',
        difficulty: 'Advanced',
        xp: 70,
        codeSnippets: [
            { id: 'cm84-c1', language: 'cpp', code: '`int const * p`' },
            { id: 'cm84-c2', language: 'cpp', code: '`int * const p`' },
        ],
        concepts: [
            { id: 'cm84-p1', name: 'Pointer to a constant integer (value is constant).' },
            { id: 'cm84-p2', name: 'Constant pointer to an integer (pointer is constant).' },
        ],
        pairs: [
            { codeId: 'cm84-c1', conceptId: 'cm84-p1' },
            { codeId: 'cm84-c2', conceptId: 'cm84-p2' },
        ]
    },
    {
        id: 'cm85',
        title: 'Python `copy` vs `deepcopy`',
        description: 'Match the copy function to its behavior.',
        difficulty: 'Advanced',
        xp: 65,
        codeSnippets: [
            { id: 'cm85-c1', language: 'python', code: 'Creates a new object but inserts references to the objects found in the original.' },
            { id: 'cm85-c2', language: 'python', code: 'Creates a new object and recursively copies all objects found in the original.' },
        ],
        concepts: [
            { id: 'cm85-p1', name: 'Shallow Copy (`copy.copy()`)' },
            { id: 'cm85-p2', name: 'Deep Copy (`copy.deepcopy()`)' },
        ],
        pairs: [
            { codeId: 'cm85-c1', conceptId: 'cm85-p1' },
            { codeId: 'cm85-c2', conceptId: 'cm85-p2' },
        ]
    },
    {
        id: 'cm86',
        title: 'DOM vs. Virtual DOM',
        description: 'Match the concept to its description.',
        difficulty: 'Advanced',
        xp: 60,
        codeSnippets: [
            { id: 'cm86-c1', language: 'generic', code: 'The browser\'s programming interface for HTML and XML documents. Direct manipulation can be slow.' },
            { id: 'cm86-c2', language: 'generic', code: 'A programming concept where a representation of a UI is kept in memory and synced with the "real" one. Used by libraries like React.' },
        ],
        concepts: [
            { id: 'cm86-p1', name: 'DOM (Document Object Model)' },
            { id: 'cm86-p2', name: 'Virtual DOM' },
        ],
        pairs: [
            { codeId: 'cm86-c1', conceptId: 'cm86-p1' },
            { codeId: 'cm86-c2', conceptId: 'cm86-p2' },
        ]
    },
    {
        id: 'cm87',
        title: 'Process vs. Thread',
        description: 'Match the term to its characteristic.',
        difficulty: 'Intermediate',
        xp: 50,
        codeSnippets: [
            { id: 'cm87-c1', language: 'generic', code: 'An instance of a program in execution. Has its own memory space.' },
            { id: 'cm87-c2', language: 'generic', code: 'The smallest unit of execution within a process. Shares memory space with other units in the same process.' },
        ],
        concepts: [
            { id: 'cm87-p1', name: 'Process' },
            { id: 'cm87-p2', name: 'Thread' },
        ],
        pairs: [
            { codeId: 'cm87-c1', conceptId: 'cm87-p1' },
            { codeId: 'cm87-c2', conceptId: 'cm87-p2' },
        ]
    },
    {
        id: 'cm88',
        title: 'Finalizer/Destructor Concepts',
        description: 'Match the language-specific concept for object cleanup.',
        difficulty: 'Advanced',
        xp: 70,
        codeSnippets: [
            { id: 'cm88-c1', language: 'java', code: 'A method called by the garbage collector just before an object is garbage collected. (Deprecated and unreliable)' },
            { id: 'cm88-c2', language: 'cpp', code: 'A special member function that is called automatically when an object goes out of scope or is explicitly deleted.' },
            { id: 'cm88-c3', language: 'python', code: 'A method called when an object\'s reference count drops to zero. (Not guaranteed to be called)' },
        ],
        concepts: [
            { id: 'cm88-p1', name: 'Java `finalize()`' },
            { id: 'cm88-p2', name: 'C++ Destructor `~ClassName()`' },
            { id: 'cm88-p3', name: 'Python `__del__()`' },
        ],
        pairs: [
            { codeId: 'cm88-c1', conceptId: 'cm88-p1' },
            { codeId: 'cm88-c2', conceptId: 'cm88-p2' },
            { codeId: 'cm88-c3', conceptId: 'cm88-p3' },
        ]
    },
    {
        id: 'cm89',
        title: 'JavaScript Prototype Chain',
        description: 'Match the term to its role in prototypal inheritance.',
        difficulty: 'Advanced',
        xp: 70,
        codeSnippets: [
            { id: 'cm89-c1', language: 'javascript', code: 'An internal property of an object that links to another object.' },
            { id: 'cm89-c2', language: 'javascript', code: 'A property on a constructor function that defines what will become the `[[Prototype]]` of instances created by that constructor.' },
        ],
        concepts: [
            { id: 'cm89-p1', name: '`[[Prototype]]` (accessible via `__proto__`)' },
            { id: 'cm89-p2', name: '`.prototype` property' },
        ],
        pairs: [
            { codeId: 'cm89-c1', conceptId: 'cm89-p1' },
            { codeId: 'cm89-c2', conceptId: 'cm89-p2' },
        ]
    },
    {
        id: 'cm90',
        title: 'Compiler vs. Interpreter',
        description: 'Match the term to its execution model.',
        difficulty: 'Intermediate',
        xp: 40,
        codeSnippets: [
            { id: 'cm90-c1', language: 'generic', code: 'Translates the entire source code into machine code before execution. (e.g., C++, Java)' },
            { id: 'cm90-c2', language: 'generic', code: 'Translates and executes the source code line-by-line. (e.g., Python, JavaScript)' },
        ],
        concepts: [
            { id: 'cm90-p1', name: 'Compiler' },
            { id: 'cm90-p2', name: 'Interpreter' },
        ],
        pairs: [
            { codeId: 'cm90-c1', conceptId: 'cm90-p1' },
            { codeId: 'cm90-c2', conceptId: 'cm90-p2' },
        ]
    },
    {
        id: 'cm91',
        title: 'ACID Properties',
        description: 'Match the ACID property to its meaning in database transactions.',
        difficulty: 'Advanced',
        xp: 80,
        codeSnippets: [
            { id: 'cm91-c1', language: 'generic', code: 'Transactions are all-or-nothing.' },
            { id: 'cm91-c2', language: 'generic', code: 'A transaction brings the database from one valid state to another.' },
            { id: 'cm91-c3', language: 'generic', code: 'Concurrent execution of transactions results in a system state that would be obtained if transactions were executed serially.' },
            { id: 'cm91-c4', language: 'generic', code: 'Once a transaction has been committed, it will remain so, even in the event of power loss.' },
        ],
        concepts: [
            { id: 'cm91-p1', name: 'Atomicity' },
            { id: 'cm91-p2', name: 'Consistency' },
            { id: 'cm91-p3', name: 'Isolation' },
            { id: 'cm91-p4', name: 'Durability' },
        ],
        pairs: [
            { codeId: 'cm91-c1', conceptId: 'cm91-p1' },
            { codeId: 'cm91-c2', conceptId: 'cm91-p2' },
            { codeId: 'cm91-c3', conceptId: 'cm91-p3' },
            { codeId: 'cm91-c4', conceptId: 'cm91-p4' },
        ]
    },
    {
        id: 'cm92',
        title: 'CAP Theorem',
        description: 'Match the CAP theorem property to its meaning for distributed systems.',
        difficulty: 'Advanced',
        xp: 80,
        codeSnippets: [
            { id: 'cm92-c1', language: 'generic', code: 'Every read receives the most recent write or an error.' },
            { id: 'cm92-c2', language: 'generic', code: 'Every request receives a (non-error) response, without the guarantee that it contains the most recent write.' },
            { id: 'cm92-c3', language: 'generic', code: 'The system continues to operate despite an arbitrary number of messages being dropped by the network between nodes.' },
        ],
        concepts: [
            { id: 'cm92-p1', name: 'Consistency' },
            { id: 'cm92-p2', name: 'Availability' },
            { id: 'cm92-p3', name: 'Partition Tolerance' },
        ],
        pairs: [
            { codeId: 'cm92-c1', conceptId: 'cm92-p1' },
            { codeId: 'cm92-c2', conceptId: 'cm92-p2' },
            { codeId: 'cm92-c3', conceptId: 'cm92-p3' },
        ]
    },
    {
        id: 'cm93',
        title: 'Authentication vs. Authorization',
        description: 'Match the security concept to its definition.',
        difficulty: 'Intermediate',
        xp: 45,
        codeSnippets: [
            { id: 'cm93-c1', language: 'generic', code: 'The process of verifying who a user is.' },
            { id: 'cm93-c2', language: 'generic', code: 'The process of verifying what a user has access to.' },
        ],
        concepts: [
            { id: 'cm93-p1', name: 'Authentication (AuthN)' },
            { id: 'cm93-p2', name: 'Authorization (AuthZ)' },
        ],
        pairs: [
            { codeId: 'cm93-c1', conceptId: 'cm93-p1' },
            { codeId: 'cm93-c2', conceptId: 'cm93-p2' },
        ]
    },
    {
        id: 'cm94',
        title: 'Java `final` vs `finally` vs `finalize`',
        description: 'Match the Java keyword/method to its purpose.',
        difficulty: 'Advanced',
        xp: 70,
        codeSnippets: [
            { id: 'cm94-c1', language: 'java', code: 'A keyword used to declare constants, prevent method overriding, and prevent class inheritance.' },
            { id: 'cm94-c2', language: 'java', code: 'A block of code in a try-catch statement that is always executed.' },
            { id: 'cm94-c3', language: 'java', code: 'A method called by the garbage collector before an object is reclaimed. (Deprecated)' },
        ],
        concepts: [
            { id: 'cm94-p1', name: '`final`' },
            { id: 'cm94-p2', name: '`finally`' },
            { id: 'cm94-p3', name: '`finalize()`' },
        ],
        pairs: [
            { codeId: 'cm94-c1', conceptId: 'cm94-p1' },
            { codeId: 'cm94-c2', conceptId: 'cm94-p2' },
            { codeId: 'cm94-c3', conceptId: 'cm94-p3' },
        ]
    },
    {
        id: 'cm95',
        title: 'C++ `struct` vs `class`',
        description: 'Match the keyword to its default member access.',
        difficulty: 'Beginner',
        xp: 30,
        codeSnippets: [
            { id: 'cm95-c1', language: 'cpp', code: 'Default member access is `public`.' },
            { id: 'cm95-c2', language: 'cpp', code: 'Default member access is `private`.' },
        ],
        concepts: [
            { id: 'cm95-p1', name: '`struct`' },
            { id: 'cm95-p2', name: '`class`' },
        ],
        pairs: [
            { codeId: 'cm95-c1', conceptId: 'cm95-p1' },
            { codeId: 'cm95-c2', conceptId: 'cm95-p2' },
        ]
    },
    {
        id: 'cm96',
        title: 'SQL vs NoSQL',
        description: 'Match the database type to its characteristic.',
        difficulty: 'Intermediate',
        xp: 45,
        codeSnippets: [
            { id: 'cm96-c1', language: 'generic', code: 'Relational databases with a predefined schema.' },
            { id: 'cm96-c2', language: 'generic', code: 'Non-relational databases with dynamic schemas for unstructured data.' },
        ],
        concepts: [
            { id: 'cm96-p1', name: 'SQL (e.g., MySQL, PostgreSQL)' },
            { id: 'cm96-p2', name: 'NoSQL (e.g., MongoDB, Cassandra)' },
        ],
        pairs: [
            { codeId: 'cm96-c1', conceptId: 'cm96-p1' },
            { codeId: 'cm96-c2', conceptId: 'cm96-p2' },
        ]
    },
    {
        id: 'cm97',
        title: 'Concurrency vs Parallelism',
        description: 'Match the term to its definition.',
        difficulty: 'Advanced',
        xp: 70,
        codeSnippets: [
            { id: 'cm97-c1', language: 'generic', code: 'Multiple tasks making progress over time, often by interleaving (task switching).' },
            { id: 'cm97-c2', language: 'generic', code: 'Multiple tasks running at the exact same time, requiring multiple CPU cores.' },
        ],
        concepts: [
            { id: 'cm97-p1', name: 'Concurrency' },
            { id: 'cm97-p2', name: 'Parallelism' },
        ],
        pairs: [
            { codeId: 'cm97-c1', conceptId: 'cm97-p1' },
            { codeId: 'cm97-c2', conceptId: 'cm97-p2' },
        ]
    },
    {
        id: 'cm98',
        title: 'JavaScript `slice` vs `splice`',
        description: 'Match the array method to its behavior.',
        difficulty: 'Intermediate',
        xp: 45,
        codeSnippets: [
            { id: 'cm98-c1', language: 'javascript', code: 'Returns a shallow copy of a portion of an array into a new array object. Does not modify the original array.' },
            { id: 'cm98-c2', language: 'javascript', code: 'Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.' },
        ],
        concepts: [
            { id: 'cm98-p1', name: '`.slice()`' },
            { id: 'cm98-p2', name: '`.splice()`' },
        ],
        pairs: [
            { codeId: 'cm98-c1', conceptId: 'cm98-p1' },
            { codeId: 'cm98-c2', conceptId: 'cm98-p2' },
        ]
    },
    {
        id: 'cm99',
        title: 'Heaps',
        description: 'Match the type of heap to its property.',
        difficulty: 'Advanced',
        xp: 60,
        codeSnippets: [
            { id: 'cm99-c1', language: 'generic', code: 'The value of each node is greater than or equal to the value of its children.' },
            { id: 'cm99-c2', language: 'generic', code: 'The value of each node is less than or equal to the value of its children.' },
        ],
        concepts: [
            { id: 'cm99-p1', name: 'Max-Heap' },
            { id: 'cm99-p2', name: 'Min-Heap' },
        ],
        pairs: [
            { codeId: 'cm99-c1', conceptId: 'cm99-p1' },
            { codeId: 'cm99-c2', conceptId: 'cm99-p2' },
        ]
    },
    {
        id: 'cm100',
        title: 'TCP vs UDP',
        description: 'Match the transport layer protocol to its characteristic.',
        difficulty: 'Intermediate',
        xp: 50,
        codeSnippets: [
            { id: 'cm100-c1', language: 'generic', code: 'Connection-oriented, reliable, ordered delivery. Used for web browsing, email.' },
            { id: 'cm100-c2', language: 'generic', code: 'Connectionless, unreliable, faster delivery. Used for video streaming, online gaming.' },
        ],
        concepts: [
            { id: 'cm100-p1', name: 'TCP (Transmission Control Protocol)' },
            { id: 'cm100-p2', name: 'UDP (User Datagram Protocol)' },
        ],
        pairs: [
            { codeId: 'cm100-c1', conceptId: 'cm100-p1' },
            { codeId: 'cm100-c2', conceptId: 'cm100-p2' },
        ]
    },
    {
        id: 'cm101',
        title: 'JavaScript Equality Quirks',
        description: 'Match the expression to its boolean result.',
        difficulty: 'Advanced',
        xp: 60,
        codeSnippets: [
            { id: 'cm101-c1', language: 'javascript', code: '`NaN === NaN`' },
            { id: 'cm101-c2', language: 'javascript', code: '`[] == ![]`' },
            { id: 'cm101-c3', language: 'javascript', code: '`"5" == 5`' },
        ],
        concepts: [
            { id: 'cm101-p1', name: '`false`' },
            { id: 'cm101-p2', name: '`true`' },
        ],
        pairs: [
            { codeId: 'cm101-c1', conceptId: 'cm101-p1' },
            { codeId: 'cm101-c2', conceptId: 'cm101-p2' },
            { codeId: 'cm101-c3', conceptId: 'cm101-p2' },
        ]
    },
    {
        id: 'cm102',
        title: 'Python List vs Tuple',
        description: 'Match the data type to its characteristic.',
        difficulty: 'Beginner',
        xp: 25,
        codeSnippets: [
            { id: 'cm102-c1', language: 'python', code: 'Mutable (can be changed after creation).' },
            { id: 'cm102-c2', language: 'python', code: 'Immutable (cannot be changed after creation).' },
        ],
        concepts: [
            { id: 'cm102-p1', name: 'List' },
            { id: 'cm102-p2', name: 'Tuple' },
        ],
        pairs: [
            { codeId: 'cm102-c1', conceptId: 'cm102-p1' },
            { codeId: 'cm102-c2', conceptId: 'cm102-p2' },
        ]
    },
    {
        id: 'cm103',
        title: 'Java Synchronization',
        description: 'Match the synchronization mechanism to its purpose.',
        difficulty: 'Advanced',
        xp: 75,
        codeSnippets: [
            { id: 'cm103-c1', language: 'java', code: 'A keyword that provides lock-based synchronization on an object or method.' },
            { id: 'cm103-c2', language: 'java', code: 'A keyword ensuring that changes to a variable are always visible to other threads.' },
            { id: 'cm103-c3', language: 'java', code: 'A class providing lock-free, thread-safe operations on a single variable.' },
        ],
        concepts: [
            { id: 'cm103-p1', name: '`synchronized`' },
            { id: 'cm103-p2', name: '`volatile`' },
            { id: 'cm103-p3', name: '`java.util.concurrent.atomic` classes' },
        ],
        pairs: [
            { codeId: 'cm103-c1', conceptId: 'cm103-p1' },
            { codeId: 'cm103-c2', conceptId: 'cm103-p2' },
            { codeId: 'cm103-c3', conceptId: 'cm103-p3' },
        ]
    },
    {
        id: 'cm104',
        title: 'C++ Move Semantics',
        description: 'Match the concept to its role in move semantics.',
        difficulty: 'Advanced',
        xp: 80,
        codeSnippets: [
            { id: 'cm104-c1', language: 'cpp', code: 'An expression that refers to a temporary object that can be moved from.' },
            { id: 'cm104-c2', language: 'cpp', code: 'A cast that unconditionally converts its argument to an rvalue.' },
            { id: 'cm104-c3', language: 'cpp', code: 'A constructor that "steals" resources from a temporary object.' },
        ],
        concepts: [
            { id: 'cm104-p1', name: 'Rvalue' },
            { id: 'cm104-p2', name: '`std::move`' },
            { id: 'cm104-p3', name: 'Move Constructor' },
        ],
        pairs: [
            { codeId: 'cm104-c1', conceptId: 'cm104-p1' },
            { codeId: 'cm104-c2', conceptId: 'cm104-p2' },
            { codeId: 'cm104-c3', conceptId: 'cm104-p3' },
        ]
    },
    {
        id: 'cm105',
        title: 'Git Merge Strategies',
        description: 'Match the merge strategy to its outcome.',
        difficulty: 'Advanced',
        xp: 70,
        codeSnippets: [
            { id: 'cm105-c1', language: 'generic', code: 'Creates a new commit with two parents, preserving the history of both branches.' },
            { id: 'cm105-c2', language: 'generic', code: 'Moves or combines a sequence of commits to a new base commit, creating a linear history.' },
            { id: 'cm105-c3', language: 'generic', code: 'Combines multiple commits into a single commit before merging.' },
        ],
        concepts: [
            { id: 'cm105-p1', name: 'Merge Commit' },
            { id: 'cm105-p2', name: 'Rebase' },
            { id: 'cm105-p3', name: 'Squash' },
        ],
        pairs: [
            { codeId: 'cm105-c1', conceptId: 'cm105-p1' },
            { codeId: 'cm105-c2', conceptId: 'cm105-p2' },
            { codeId: 'cm105-c3', conceptId: 'cm105-p3' },
        ]
    }
];
