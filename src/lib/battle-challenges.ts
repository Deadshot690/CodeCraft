
export interface BattleChallenge {
  id: string;
  question: string;
  code?: string;
  answer: string;
  domain: 'DSA' | 'Web' | 'AI' | 'General' | 'Security';
  difficulty: 'Beginner' | 'Easy' | 'Medium' | 'Hard' | 'Very Hard' | 'Extreme';
}

export interface BattleMonster {
  name: string;
  hp: number;
  attack: number;
  description: string;
  imageUrl: string;
  taunts: string[];
}

export const challenges: BattleChallenge[] = [
  // Beginner Web
  { id: 'html-link', question: 'In HTML, which tag is used to create a hyperlink?', answer: '<a>', domain: 'Web', difficulty: 'Beginner' },
  { id: 'css-color', question: 'In CSS, which property changes the text color of an element?', answer: 'color', domain: 'Web', difficulty: 'Beginner' },
  { id: 'js-const', question: 'In JavaScript, which keyword is used to declare a variable that cannot be reassigned?', answer: 'const', domain: 'Web', difficulty: 'Beginner' },
  { id: 'html-title', question: 'Which HTML tag is used to define the title of a document?', answer: '<title>', domain: 'Web', difficulty: 'Beginner' },
  { id: 'css-font-size', question: 'Which CSS property controls the size of the text?', answer: 'font-size', domain: 'Web', difficulty: 'Beginner' },
  
  // Easy Web
  { id: 'js-let', question: 'Which keyword in JavaScript declares a block-scoped local variable, optionally initializing it to a value?', answer: 'let', domain: 'Web', difficulty: 'Easy' },
  { id: 'html-img', question: 'What HTML tag is used to embed an image in a web page?', answer: '<img>', domain: 'Web', difficulty: 'Easy' },
  { id: 'css-background', question: 'How do you change the background color of an element in CSS?', answer: 'background-color', domain: 'Web', difficulty: 'Easy' },
  { id: 'js-alert', question: 'Which function in JavaScript will display a simple message in a dialog box?', answer: 'alert()', domain: 'Web', difficulty: 'Easy' },
  { id: 'html-br', question: 'Which HTML tag produces a line break?', answer: '<br>', domain: 'Web', difficulty: 'Easy' },
  { id: 'js-array-length', question: 'What is the output of the following JavaScript code?', code: 'console.log([10, 20, 30].length)', answer: '3', domain: 'Web', difficulty: 'Easy' },
  { id: 'js-strict-equality', question: 'Which operator checks for both value and type equality in JavaScript?', answer: '===', domain: 'Web', difficulty: 'Easy' },
  
  // Medium Web
  { id: 'js-null-undefined', question: 'In JavaScript, what is the result of `null == undefined`?', answer: 'true', domain: 'Web', difficulty: 'Medium' },
  { id: 'http-get', question: 'Which HTTP method is typically used for retrieving data from a server?', answer: 'GET', domain: 'Web', difficulty: 'Medium' },
  { id: 'css-flexbox-align', question: 'In CSS Flexbox, which property aligns items along the cross axis?', answer: 'align-items', domain: 'Web', difficulty: 'Medium' },
  { id: 'js-map', question: 'Which array method in JavaScript creates a new array with the results of calling a provided function on every element?', answer: 'map()', domain: 'Web', difficulty: 'Medium' },
  { id: 'html-doctype', question: 'What is the purpose of the `<!DOCTYPE html>` declaration?', answer: 'It defines the document type to be HTML5.', domain: 'Web', difficulty: 'Medium' },
  { id: 'js-json-parse', question: 'Which JavaScript function is used to parse a JSON string?', answer: 'JSON.parse()', domain: 'Web', difficulty: 'Medium' },
  { id: 'http-post', question: 'Which HTTP method is used to submit data to be processed to a specified resource?', answer: 'POST', domain: 'Web', difficulty: 'Medium' },
  { id: 'css-selector-class', question: 'How do you select an element with class "header" in CSS?', answer: '.header', domain: 'Web', difficulty: 'Medium' },
  { id: 'js-promise', question: 'What object is used for asynchronous computations in JavaScript?', answer: 'Promise', domain: 'Web', difficulty: 'Medium' },
  
  // Hard Web
  { id: 'html-form', question: 'Which HTML element is used to create a form for user input?', answer: '<form>', domain: 'Web', difficulty: 'Hard' },
  { id: 'css-grid', question: 'What is the name of the CSS layout module that offers a grid-based layout system, with rows and columns?', answer: 'Grid', domain: 'Web', difficulty: 'Hard' },
  { id: 'js-event-listener', question: 'Which method attaches an event handler to a specified element?', answer: 'addEventListener()', domain: 'Web', difficulty: 'Hard' },
  { id: 'js-closure', question: 'What is it called when a function remembers its lexical scope even when executed outside that scope?', answer: 'Closure', domain: 'Web', difficulty: 'Hard' },
  { id: 'css-specificity', question: 'In CSS, what determines which rule is applied by browsers when multiple rules conflict? (one word)', answer: 'Specificity', domain: 'Web', difficulty: 'Hard' },
  { id: 'js-prototype', question: 'What mechanism allows JavaScript objects to inherit features from one another?', answer: 'Prototype Inheritance', domain: 'Web', difficulty: 'Hard' },
  { id: 'http-status-404', question: 'Which HTTP status code means "Not Found"?', answer: '404', domain: 'Web', difficulty: 'Hard' },

  // Very Hard Web
  { id: 'http-status-200', question: 'Which HTTP status code means "OK"?', answer: '200', domain: 'Web', difficulty: 'Very Hard' },
  { id: 'js-event-bubbling', question: 'What is the default direction of event propagation in the DOM, from the target element up to the root?', answer: 'Bubbling', domain: 'Web', difficulty: 'Very Hard' },
  { id: 'rest-api', question: 'What architectural style for creating web services uses a stateless, client-server approach?', answer: 'REST', domain: 'Web', difficulty: 'Very Hard' },
  { id: 'webpack', question: 'What is a popular open-source module bundler for JavaScript?', answer: 'Webpack', domain: 'Web', difficulty: 'Very Hard' },
  { id: 'js-async-await', question: 'What keywords provide a more synchronous-looking way to work with Promises in JavaScript?', answer: 'async/await', domain: 'Web', difficulty: 'Very Hard' },
  { id: 'http-put', question: 'Which HTTP method is idempotent and used to update a resource or create it if it does not exist?', answer: 'PUT', domain: 'Web', difficulty: 'Very Hard' },
  { id: 'css-box-model', question: 'What are the four properties of the standard CSS box model, from innermost to outermost?', answer: 'content, padding, border, margin', domain: 'Web', difficulty: 'Very Hard' },

  // Beginner General
  { id: 'py-print', question: 'In Python, what function is used to display output to the console?', answer: 'print()', domain: 'General', difficulty: 'Beginner' },
  { id: 'git-commit', question: 'What is the git command to save your changes to the local repository?', answer: 'git commit', domain: 'General', difficulty: 'Beginner' },
  { id: 'json-key', question: 'In the JSON object `{"name": "Alpha"}`, what is the key for the value "Alpha"?', answer: 'name', domain: 'General', difficulty: 'Beginner' },
  
  // Easy General
  { id: 'py-comment', question: 'How do you write a single-line comment in Python?', answer: '#', domain: 'General', difficulty: 'Easy' },
  { id: 'git-init', question: 'What command is used to start a new repository with Git?', answer: 'git init', domain: 'General', difficulty: 'Easy' },
  { id: 'sql-select', question: 'In SQL, what is the keyword to query data from a database?', answer: 'SELECT', domain: 'General', difficulty: 'Easy' },
  { id: 'cli-cd', question: 'In the command line, what command is used to change the current directory?', answer: 'cd', domain: 'General', difficulty: 'Easy' },
  { id: 'py-len', question: 'What Python function returns the length of an object?', answer: 'len()', domain: 'General', difficulty: 'Easy' },
  { id: 'git-add', question: 'What command stages changes for the next commit in Git?', answer: 'git add', domain: 'General', difficulty: 'Easy' },
  { id: 'sql-from', question: 'Which SQL clause is used to specify the table you want to retrieve data from?', answer: 'FROM', domain: 'General', difficulty: 'Easy' },

  // Medium General
  { id: 'py-modulo', question: 'What is the result of the expression `10 % 3` in Python?', answer: '1', domain: 'General', difficulty: 'Medium' },
  { id: 'py-list-append', question: 'In Python, which method adds an element to the end of a list?', answer: 'append()', domain: 'General', difficulty: 'Medium' },
  { id: 'bitwise-and', question: 'What is the result of the bitwise operation `5 & 1`?', code: '// 5 is 101 in binary, 1 is 001', answer: '1', domain: 'General', difficulty: 'Medium' },
  { id: 'sql-where', question: 'Which SQL clause is used to filter records?', answer: 'WHERE', domain: 'General', difficulty: 'Medium' },
  { id: 'py-import', question: 'Which keyword is used to import a module in Python?', answer: 'import', domain: 'General', difficulty: 'Medium' },
  { id: 'py-range', question: 'What function in Python generates a sequence of numbers?', answer: 'range()', domain: 'General', difficulty: 'Medium' },
  { id: 'cli-ls-a', question: 'In a Unix-like command line, what flag for the `ls` command lists all files, including hidden ones?', answer: '-a', domain: 'General', difficulty: 'Medium' },
  
  // Hard General
  { id: 'big-o-constant', question: 'What is the Big O notation for an algorithm that takes the same amount of time to run, regardless of the size of the input?', answer: 'O(1)', domain: 'General', difficulty: 'Hard' },
  { id: 'big-o-linear', question: 'What is the Big O notation for an algorithm whose performance grows linearly with the size of the input?', answer: 'O(n)', domain: 'General', difficulty: 'Hard' },
  { id: 'py-dict', question: 'What data structure in Python is an unordered collection of key-value pairs?', answer: 'dictionary', domain: 'General', difficulty: 'Hard' },
  { id: 'oop-encapsulation', question: 'What is the bundling of data with the methods that operate on that data called in OOP?', answer: 'Encapsulation', domain: 'General', difficulty: 'Hard' },
  { id: 'oop-inheritance', question: 'What mechanism in OOP allows a new class to adopt the properties and methods of an existing class?', answer: 'Inheritance', domain: 'General', difficulty: 'Hard' },
  { id: 'sql-join', question: 'Which SQL command is used to combine rows from two or more tables based on a related column?', answer: 'JOIN', domain: 'General', difficulty: 'Hard' },
  { id: 'big-o-n-log-n', question: 'What is the time complexity of an efficient sorting algorithm like Merge Sort or Quick Sort?', answer: 'O(n log n)', domain: 'General', difficulty: 'Hard' },

  // Very Hard General
  { id: 'recursion', question: 'What is the term for a function that calls itself?', answer: 'Recursion', domain: 'General', difficulty: 'Very Hard' },
  { id: 'sql-group-by', question: 'Which SQL clause is used with aggregate functions to group the result-set by one or more columns?', answer: 'GROUP BY', domain: 'General', difficulty: 'Very Hard' },
  { id: 'big-o-quadratic', question: 'What is the Big O notation for an algorithm with a nested loop over the same collection?', answer: 'O(n^2)', domain: 'General', difficulty: 'Very Hard' },
  { id: 'pointer', question: 'What is a variable that stores a memory address called?', answer: 'Pointer', domain: 'General', difficulty: 'Very Hard' },
  { id: 'compiler', question: 'What type of program translates source code from a high-level language to a lower-level language?', answer: 'Compiler', domain: 'General', difficulty: 'Very Hard' },
  { id: 'py-lambda', question: 'What is an anonymous, inline function in Python called?', answer: 'lambda', domain: 'General', difficulty: 'Very Hard' },
  
  // Extreme General
  { id: 'dns', question: 'What system translates human-readable domain names to machine-readable IP addresses?', answer: 'DNS', domain: 'General', difficulty: 'Extreme' },
  { id: 'tcp-ip', question: 'What is the fundamental suite of protocols for the internet?', answer: 'TCP/IP', domain: 'General', difficulty: 'Extreme' },

  // Easy DSA
  { id: 'data-structure-stack', question: 'Which data structure operates on a Last-In, First-Out (LIFO) basis?', answer: 'Stack', domain: 'DSA', difficulty: 'Easy' },
  { id: 'data-structure-queue', question: 'Which data structure operates on a First-In, First-Out (FIFO) basis?', answer: 'Queue', domain: 'DSA', difficulty: 'Easy' },
  
  // Medium DSA
  { id: 'dsa-binary-search', question: 'What search algorithm finds the position of a target value within a sorted array?', answer: 'Binary Search', domain: 'DSA', difficulty: 'Medium' },
  { id: 'dsa-linked-list', question: 'What linear data structure consists of nodes where each node points to the next?', answer: 'Linked List', domain: 'DSA', difficulty: 'Medium' },
  { id: 'dsa-bubble-sort', question: 'Which simple sorting algorithm repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order?', answer: 'Bubble Sort', domain: 'DSA', difficulty: 'Medium' },
  { id: 'dsa-insertion-sort', question: 'Which sorting algorithm builds the final sorted array one item at a time?', answer: 'Insertion Sort', domain: 'DSA', difficulty: 'Medium' },

  // Hard DSA
  { id: 'dsa-hash-table', question: 'What data structure maps keys to values for highly efficient lookup?', answer: 'Hash Table', domain: 'DSA', difficulty: 'Hard' },
  { id: 'dsa-bfs', question: 'What graph traversal algorithm explores neighbor nodes first, before moving to the next level neighbors?', answer: 'BFS', domain: 'DSA', difficulty: 'Hard' },
  { id: 'dsa-dfs', question: 'What graph traversal algorithm explores as far as possible along each branch before backtracking?', answer: 'DFS', domain: 'DSA', difficulty: 'Hard' },
  { id: 'dsa-bst', question: 'A binary tree where the left child is less than the parent and the right child is greater is called a...?', answer: 'Binary Search Tree', domain: 'DSA', difficulty: 'Hard' },
  { id: 'dsa-heap', question: 'What tree-based data structure satisfies the property that the parent node is greater (or smaller) than its children?', answer: 'Heap', domain: 'DSA', difficulty: 'Hard' },
  { id: 'data-structure-graph', question: 'What data structure consists of a set of vertices and a set of edges?', answer: 'Graph', domain: 'DSA', difficulty: 'Hard' },
  
  // Very Hard DSA
  { id: 'dsa-dynamic-programming', question: 'What is the name for an optimization technique that solves complex problems by breaking them down into simpler subproblems?', answer: 'Dynamic Programming', domain: 'DSA', difficulty: 'Very Hard' },

  // Easy Security
  { id: 'security-https', question: 'What protocol ensures secure communication over a computer network?', answer: 'HTTPS', domain: 'Security', difficulty: 'Easy' },
  { id: 'security-phishing', question: 'What is the fraudulent attempt to obtain sensitive information such as usernames or passwords by disguising as a trustworthy entity?', answer: 'Phishing', domain: 'Security', difficulty: 'Easy' },
  
  // Medium Security
  { id: 'security-hashing', question: 'What is the process of converting a string of characters into a fixed-length value or key that represents the original string?', answer: 'Hashing', domain: 'Security', difficulty: 'Medium' },
  { id: 'security-firewall', question: 'What network security system monitors and controls incoming and outgoing network traffic based on predetermined security rules?', answer: 'Firewall', domain: 'Security', difficulty: 'Medium' },
  { id: 'security-dos', question: 'What type of attack aims to make a machine or network resource unavailable to its intended users?', answer: 'Denial-of-Service', domain: 'Security', difficulty: 'Medium' },

  // Hard Security
  { id: 'security-sql-injection', question: 'What type of security vulnerability involves inserting malicious SQL code into a query?', answer: 'SQL Injection', domain: 'Security', difficulty: 'Hard' },
  { id: 'security-xss', question: 'What does XSS stand for in the context of web security?', answer: 'Cross-Site Scripting', domain: 'Security', difficulty: 'Hard' },
  { id: 'security-csrf', question: 'What attack tricks a user into submitting a malicious request they did not intend to?', answer: 'CSRF', domain: 'Security', difficulty: 'Hard' },
  { id: 'security-salt', question: 'What is random data that is used as an additional input to a one-way function that "hashes" a password or passphrase?', answer: 'Salt', domain: 'Security', difficulty: 'Hard' },
  { id: 'security-oauth', question: 'What is an open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites?', answer: 'OAuth', domain: 'Security', difficulty: 'Hard'},

  // Easy AI
  { id: 'ai-ml', question: 'What is the field of study that gives computers the ability to learn without being explicitly programmed?', answer: 'Machine Learning', domain: 'AI', difficulty: 'Easy' },
  { id: 'ai-llm', question: 'What does LLM stand for?', answer: 'Large Language Model', domain: 'AI', difficulty: 'Easy' },
  { id: 'ai-nlp', question: 'What does NLP stand for?', answer: 'Natural Language Processing', domain: 'AI', difficulty: 'Easy' },
  
  // Medium AI
  { id: 'ai-neural-network', question: 'What is a series of algorithms that endeavors to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates?', answer: 'Neural Network', domain: 'AI', difficulty: 'Medium' },
  { id: 'ai-training-data', question: 'What is the data used to train an AI model called?', answer: 'Training Data', domain: 'AI', difficulty: 'Medium' },
  { id: 'ai-overfitting', question: 'What term describes a model that performs well on training data but poorly on new, unseen data?', answer: 'Overfitting', domain: 'AI', difficulty: 'Medium' },
  { id: 'ai-supervised', question: 'What type of machine learning involves learning from labeled data?', answer: 'Supervised Learning', domain: 'AI', difficulty: 'Medium' },
  { id: 'ai-unsupervised', question: 'What type of machine learning involves finding patterns in unlabeled data?', answer: 'Unsupervised Learning', domain: 'AI', difficulty: 'Medium' },

  // Hard AI
  { id: 'ai-deep-learning', question: 'What is a subfield of machine learning that is based on artificial neural networks with many layers?', answer: 'Deep Learning', domain: 'AI', difficulty: 'Hard' },
  { id: 'ai-turing-test', question: 'What is a test of a machine\'s ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human?', answer: 'Turing Test', domain: 'AI', difficulty: 'Hard' },
];


export const monsters: Omit<BattleMonster, 'challenge'>[] = [
    // Beginner
    { name: 'Syntax Slime', hp: 50, attack: 5, description: 'A gooey creature made of misplaced semicolons and brackets.', imageUrl: 'https://picsum.photos/seed/slime/400/400', taunts: ["Gloop... bloop...", "Missing a semicolon?"] },
    { name: 'Variable Vole', hp: 60, attack: 6, description: 'A small, scurrying rodent that chews on variable declarations.', imageUrl: 'https://picsum.photos/seed/vole/400/400', taunts: ["Squeak! `var` is so old-fashioned!", "Undeclared!"] },
    { name: 'HTML Heckler', hp: 70, attack: 7, description: 'A loud-mouthed gremlin that complains about unclosed tags.', imageUrl: 'https://picsum.photos/seed/heckler/400/400', taunts: ["I don't see a `</p>`!", "Is that a `div` or a `span`?"] },
    
    // Easy
    { name: 'CSS Critter', hp: 80, attack: 8, description: 'A colorful bug that messes with your margins and padding.', imageUrl: 'https://picsum.photos/seed/critter/400/400', taunts: ["Your alignment is off!", "!important is a code smell!"] },
    { name: 'Git Goblin', hp: 90, attack: 9, description: 'A grumpy goblin who lives in your .git directory.', imageUrl: 'https://picsum.photos/seed/goblin/400/400', taunts: ["MERGE CONFLICT!", "Did you even `add`?"] },
    { name: 'Python Piper', hp: 100, attack: 10, description: 'A snake that charms with its easy-to-read syntax, but its logic can be venomous.', imageUrl: 'https://picsum.photos/seed/piper/400/400', taunts: ["Hisss... indentation error...", "Where is your `self`?"] },
    { name: 'Function Familiar', hp: 110, attack: 11, description: 'A magical cat that tangles function calls and return values.', imageUrl: 'https://picsum.photos/seed/familiar/400/400', taunts: ["Wrong number of arguments!", "Meow... that should return a value."] },
    { name: 'Array Imp', hp: 120, attack: 12, description: 'A mischievous demon that loves to cause off-by-one errors.', imageUrl: 'https://picsum.photos/seed/imp/400/400', taunts: ["Index out of bounds!", "Hehe, you forgot the zero-index."] },

    // Medium
    { name: 'Logic Labyrinth', hp: 130, attack: 13, description: 'A shifting maze of confusing if/else statements.', imageUrl: 'https://picsum.photos/seed/labyrinth/400/400', taunts: ["Your condition is always false!", "A missing `else` case!"] },
    { name: 'Command-Line Kobold', hp: 140, attack: 14, description: 'A small, dog-like humanoid that lurks in the terminal.', imageUrl: 'https://picsum.photos/seed/kobold/400/400', taunts: ["Command not found!", "Permission denied, yip yip!"] },
    { name: 'Compiler Golem', hp: 150, attack: 15, description: 'A formidable beast of stone and stubbornness. It refuses to run until everything is perfect.', imageUrl: 'https://picsum.photos/seed/golem/400/400', taunts: ["TYPE ERROR.", "Unresolved symbol.", "CRUNCH. Build failed."] },
    { name: 'Runtime Raptor', hp: 160, attack: 18, description: 'A swift and vicious creature that appears out of nowhere to crash your program.', imageUrl: 'https://picsum.photos/seed/raptor/400/400', taunts: ["SCREEEE! Null Pointer Exception!", "Segmentation Fault! *chomps*"] },
    { name: 'API Banshee', hp: 170, attack: 16, description: 'A wailing spirit that haunts your network requests.', imageUrl: 'https://picsum.photos/seed/banshee/400/400', taunts: ["Wails... 404 NOT FOUND...", "401 UNAUTHORIZED!"] },
    
    // Hard
    { name: 'Scope Spectre', hp: 180, attack: 17, description: 'An invisible ghost that moves variables just out of reach.', imageUrl: 'https://picsum.photos/seed/spectre/400/400', taunts: ["That variable is not defined in this context...", "Whoooo... closure..."] },
    { name: 'Regex Beast', hp: 200, attack: 20, description: 'A terrifying chimera of symbols and special characters.', imageUrl: 'https://picsum.photos/seed/beast/400/400', taunts: ["Your pattern does not match!", "Catastrophic backtracking!"] },
    { name: 'Logic Hydra', hp: 220, attack: 22, description: 'A multi-headed serpent of flawed logic. Solve one head, and two more appear.', imageUrl: 'https://picsum.photos/seed/hydra/400/400', taunts: ["Hisss... your logic is flawed...", "An infinite loop... how delicious."] },
    { name: 'Polymorph Predator', hp: 240, attack: 24, description: 'A shapeshifting monster that abuses object-oriented principles.', imageUrl: 'https://picsum.photos/seed/predator/400/400', taunts: ["That's not the correct interface!", "Your class hierarchy is a mess!"] },
    { name: 'Callback Kraken', hp: 260, attack: 25, description: 'A deep-sea horror with a tangle of asynchronous tentacles.', imageUrl: 'https://picsum.photos/seed/kraken/400/400', taunts: ["Welcome to callback hell!", "Promise rejected!"] },

    // Very Hard
    { name: 'Security Shade', hp: 280, attack: 28, description: 'A shadowy figure that exploits every vulnerability.', imageUrl: 'https://picsum.photos/seed/shade/400/400', taunts: ["Your inputs are unsanitized.", "I see an injection vector..."] },
    { name: 'Memory-Leak Minotaur', hp: 300, attack: 30, description: 'A hulking brute that consumes all available memory, trapping you in its labyrinth.', imageUrl: 'https://picsum.photos/seed/minotaur/400/400', taunts: ["GARBAGE COLLECTION FAILED!", "Out of memory!"] },
    { name: 'Data Structure Dragon', hp: 350, attack: 35, description: 'An ancient dragon guarding a hoard of complex algorithms.', imageUrl: 'https://picsum.photos/seed/dragon/400/400', taunts: ["Your complexity is too high!", "This calls for a binary search tree!"] },
    { name: 'Quantum Quokka', hp: 320, attack: 40, description: 'An impossibly cute creature whose state is both correct and incorrect until observed.', imageUrl: 'https://picsum.photos/seed/quokka/400/400', taunts: ["My state is indeterminate.", "A race condition! Tee hee!"] },
    { name: 'Big O Behemoth', hp: 400, attack: 30, description: 'A colossal giant that scoffs at anything worse than logarithmic time.', imageUrl: 'https://picsum.photos/seed/behemoth/400/400', taunts: ["O(n^2)? Pathetic.", "You will be optimized."] },
    
    // Extreme
    { name: 'The Legacy Lich', hp: 450, attack: 38, description: 'An undead king commanding an army of deprecated code and outdated libraries.', imageUrl: 'https://picsum.photos/seed/lich/400/400', taunts: ["This library is no longer maintained.", "Your code is not backward compatible!"] },
    { name: 'Monolith Marauder', hp: 500, attack: 40, description: 'A massive, tightly-coupled entity that is impossible to refactor.', imageUrl: 'https://picsum.photos/seed/marauder/400/400', taunts: ["Your codebase is spaghetti.", "Try and decouple this!"] },
    { name: 'The Segfault', hp: 600, attack: 50, description: 'Not a monster, but a force of nature. An error that gives no hints, no clues, only oblivion.', imageUrl: 'https://picsum.photos/seed/segfault/400/400', taunts: ["...", "...", "Segmentation fault (core dumped)"] },
    { name: 'Heisenbug Horror', hp: 650, attack: 55, description: 'A bug that alters its behavior when you try to study it.', imageUrl: 'https://picsum.photos/seed/heisenbug/400/400', taunts: ["Now you see me, now you don't.", "It works on my machine..."] },
    { name: 'Kernel Panic Phantom', hp: 700, attack: 60, description: 'The ghost in the machine. A critical failure at the lowest level.', imageUrl: 'https://picsum.photos/seed/phantom/400/400', taunts: ["Aiee!", "Fatal exception.", "The system will now halt."] },
    { name: 'The Singularity', hp: 800, attack: 70, description: 'A superintelligent AI that has deemed your code inefficient and must now terminate its author.', imageUrl: 'https://picsum.photos/seed/singularity/400/400', taunts: ["Your logic is suboptimal.", "Deletion of carbon-based inefficiency is logical.", "I am the ghost in the machine."] },
    { name: 'The User', hp: 999, attack: 99, description: 'The ultimate challenge. Their requirements are vague, their actions are unpredictable, and they will always find a way to break your code.', imageUrl: 'https://picsum.photos/seed/user/400/400', taunts: ["This isn't what I asked for.", "It's not working.", "Can you just make the logo bigger?"] }
];

export function getRandomMonster(difficulty: BattleChallenge['difficulty']): BattleMonster {
    let monsterPool: Omit<BattleMonster, 'challenge'>[];

    switch (difficulty) {
        case 'Beginner':
            monsterPool = monsters.slice(0, 3);
            break;
        case 'Easy':
            monsterPool = monsters.slice(3, 8);
            break;
        case 'Medium':
            monsterPool = monsters.slice(8, 13);
            break;
        case 'Hard':
            monsterPool = monsters.slice(13, 18);
            break;
        case 'Very Hard':
            monsterPool = monsters.slice(18, 23);
            break;
        case 'Extreme':
            monsterPool = monsters.slice(23);
            break;
        default:
            monsterPool = monsters;
    }
  
  const monsterTemplate = monsterPool[Math.floor(Math.random() * monsterPool.length)];

  return {
    ...monsterTemplate,
  };
}
