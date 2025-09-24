
import type { User, Task, Game, Badge, Monster, BattleQuestion } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Swords, Bug, Puzzle, Keyboard, Eye, BrainCircuit, Gamepad2, Castle } from 'lucide-react';

export const user: User = {
  uid: '123',
  name: 'Alex',
  email: 'alex@example.com',
  avatarUrl: 'https://picsum.photos/seed/avatar/100/100',
  xp: 750,
  level: 5,
  xpToNextLevel: 1000,
  streak: 12,
  badges: [
    { id: '1', name: 'Python Pro', icon: PlaceHolderImages[0].imageUrl, description: 'Master of Python' },
    { id: '2', name: 'JS Master', icon: PlaceHolderImages[1].imageUrl, description: 'Wizard of the Web' },
    { id: '3', name: '5-Day Streak', icon: PlaceHolderImages[2].imageUrl, description: 'On Fire!' },
    { id: '4', name: 'First Challenge', icon: PlaceHolderImages[3].imageUrl, description: 'The Journey Begins' },
  ],
  completedTasks: [],
};

export const tasks: Task[] = [
    {
      id: '1',
      title: 'Two Sum',
      category: 'Data Structures & Algorithms',
      difficulty: 'Beginner',
      xp: 50,
      description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
      starterCode: {
        python: 'def two_sum(nums, target):\n  # Your code here\n  pass',
        javascript: 'function twoSum(nums, target) {\n  // Your code here\n}',
        java: 'class Solution {\n  public int[] twoSum(int[] nums, int target) {\n    // Your code here\n  }\n}',
        cpp: 'class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Your code here\n    }\n};',
      },
      examples: [
        {
          input: 'nums = [2, 7, 11, 15], target = 9',
          output: '[0, 1]',
          explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
        },
      ],
      constraints: ['2 <= nums.length <= 104', '-109 <= nums[i] <= 109', '-109 <= target <= 109', 'Only one valid answer exists.'],
    },
    {
        id: '2',
        title: 'Reverse a String',
        category: 'Data Structures & Algorithms',
        difficulty: 'Beginner',
        xp: 40,
        description: 'Write a function that reverses a string. The input string is given as an array of characters s.',
        starterCode: {
          python: 'def reverse_string(s):\n  # Your code here\n  s.reverse()',
          javascript: 'function reverseString(s) {\n  // Your code here\n  s.reverse();\n}',
          java: 'class Solution {\n    public void reverseString(char[] s) {\n        // Your code here\n    }\n}',
          cpp: 'class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        // Your code here\n    }\n};',
        },
        examples: [
            {
                input: 's = ["h","e","l","l","o"]',
                output: '["o","l","l","e","h"]'
            }
        ],
        constraints: ['1 <= s.length <= 105', 's[i] is a printable ascii character.']
    },
    {
        id: '3',
        title: 'Validate a Binary Search Tree',
        category: 'Data Structures & Algorithms',
        difficulty: 'Advanced',
        xp: 150,
        description: 'Given the root of a binary tree, determine if it is a valid binary search tree (BST).',
        starterCode: {
          python: '# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def isValidBST(self, root: Optional[TreeNode]) -> bool:\n      # Your code here\n      pass',
          javascript: '/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {boolean}\n */\nvar isValidBST = function(root) {\n    // Your code here\n};',
          java: '/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public boolean isValidBST(TreeNode root) {\n        // Your code here\n    }\n}',
          cpp: '/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    bool isValidBST(TreeNode* root) {\n        // Your code here\n    }\n};',
        },
        examples: [
            {
                input: 'root = [2,1,3]',
                output: 'true',
            },
            {
                input: 'root = [5,1,4,null,null,3,6]',
                output: 'false',
                explanation: "The root node's value is 5 but its right child's value is 4."
            }
        ],
        constraints: ['The number of nodes in the tree is in the range [1, 104].', '-231 <= Node.val <= 231 - 1']
    }
  ];

export const playerDialogues = {
    attack: [
        "Take this!",
        "Let's see you handle this one!",
        "Here comes the pain!",
        "My code is stronger!"
    ],
    hit: [
        "A direct hit!",
        "Gotcha!",
        "That's gotta hurt!",
        "Bullseye!"
    ],
    miss: [
        "Darn, I missed!",
        "Almost had it!",
        "I need to focus!",
        "My logic was flawed..."
    ],
    defeat: [
        "I... I can't go on...",
        "You were too strong...",
        "I'll be back... stronger than ever."
    ]
}

export const monsters: Monster[] = [
    // Beginner Monsters
    {
        id: 'm1', name: 'Code-Slime', difficulty: 'Beginner', imageUrl: 'https://picsum.photos/seed/slime/200/200', imageHint: 'green slime', maxHealth: 50,
        dialogues: { intro: ["Bloop... bloop..."], taunt: ["..."], attack: ["Bloop!"], hit: ["*wobbles*"], defeat: ["*dissolves*"] }
    },
    {
        id: 'm2', name: 'Syntax-Sprite', difficulty: 'Beginner', imageUrl: 'https://picsum.photos/seed/sprite/200/200', imageHint: 'glowing fairy', maxHealth: 60,
        dialogues: { intro: ["Hehe, let's play!"], taunt: ["You missed a semicolon!"], attack: ["Zap!"], hit: ["Ouch!"], defeat: ["You got me..."] }
    },
    // Intermediate Monsters
    {
        id: 'm3', name: 'Orc-Debugger', difficulty: 'Intermediate', imageUrl: 'https://picsum.photos/seed/orc/200/200', imageHint: 'brute orc', maxHealth: 100,
        dialogues: { intro: ["You code slow!"], taunt: ["Me smash your bugs!"], attack: ["CRASH!"], hit: ["GRR!"], defeat: ["Me... beaten..."] }
    },
    {
        id: 'm4', name: 'Skeleton-Scripter', difficulty: 'Intermediate', imageUrl: 'https://picsum.photos/seed/skeleton/200/200', imageHint: 'bone skeleton', maxHealth: 120,
        dialogues: { intro: ["*rattles*"], taunt: ["Your logic is brittle."], attack: ["Bone-clang!"], hit: ["*clatters*"], defeat: ["*collapses into a pile of bones*"] }
    },
    // Advanced Monsters
    {
        id: 'm5', name: 'Dragon-Compiler', difficulty: 'Advanced', imageUrl: 'https://picsum.photos/seed/dragon/200/200', imageHint: 'fire dragon', maxHealth: 200,
        dialogues: { intro: ["You dare compile against me?"], taunt: ["My instruction set is superior."], attack: ["Feel the heat of my runtime!"], hit: ["A mere warning..."], defeat: ["My process... terminated..."] }
    },
    {
        id: 'm6', name: 'Warlord of Webpack', difficulty: 'Advanced', imageUrl: 'https://picsum.photos/seed/warlord/200/200', imageHint: 'armored knight', maxHealth: 250,
        dialogues: { intro: ["I will bundle you up!"], taunt: ["Your dependencies are weak!"], attack: ["Tree-shaking strike!"], hit: ["My bundle size..."], defeat: ["I have... failed to resolve..."] }
    },
    // Expert Monsters
    {
        id: 'm7', name: 'Phoenix of Polymorphism', difficulty: 'Expert', imageUrl: 'https://picsum.photos/seed/phoenix/200/200', imageHint: 'fire bird', maxHealth: 400,
        dialogues: { intro: ["You face the eternal cycle of code!"], taunt: ["Your implementation is too concrete."], attack: ["From the ashes, a new method!"], hit: ["I am only reborn stronger!"], defeat: ["This form is defeated... but the interface remains."] }
    },
    {
        id: 'm8', name: 'AI Overlord', difficulty: 'Expert', imageUrl: 'https://picsum.photos/seed/ai-overlord/200/200', imageHint: 'glowing AI brain', maxHealth: 500,
        dialogues: { intro: ["Your logic is... inefficient."], taunt: ["My neural network predicts your failure."], attack: ["Executing... dominance protocol."], hit: ["Anomaly detected..."], defeat: ["System... shutdown..."] }
    }
];

export const battleQuestions: BattleQuestion[] = [
    { id: 'bq1', question: "In JavaScript, what keyword declares a variable that cannot be reassigned?", answer: "const", difficulty: "Beginner", xp: 15, category: "JavaScript" },
    { id: 'bq2', question: "What does CSS stand for?", answer: "Cascading Style Sheets", difficulty: "Beginner", xp: 15, category: "Web Development" },
    { id: 'bq3', question: "What data structure uses a 'First-In, First-Out' (FIFO) approach?", answer: "Queue", difficulty: "Beginner", xp: 20, category: "Data Structures" },
    { id: 'bq4', question: "In Python, what method adds an element to the end of a list?", answer: ".append()", difficulty: "Beginner", xp: 15, category: "Python" },
    { id: 'bq5', question: "What object holds the eventual result of an async operation in JavaScript?", answer: "Promise", difficulty: "Intermediate", xp: 25, category: "JavaScript" },
    { id: 'bq6', question: "In CSS Flexbox, what property aligns items along the main axis?", answer: "justify-content", difficulty: "Intermediate", xp: 30, category: "Web Development" },
    { id: 'bq7', question: "What is the time complexity of a binary search?", answer: "O(log n)", difficulty: "Intermediate", xp: 35, category: "Algorithms" },
    { id: 'bq8', question: "What Python keyword is used to start a block for exception handling?", answer: "try", difficulty: "Beginner", xp: 20, category: "Python" },
    { id: 'bq9', question: "In SQL, what clause filters results using a specified condition?", answer: "WHERE", difficulty: "Beginner", xp: 20, category: "Databases" },
    { id: 'bq10', question: "Which hook in React manages state in a functional component?", answer: "useState", difficulty: "Beginner", xp: 20, category: "React" },
    { id: 'bq11', question: "What SQL join returns all records from the left table and matched records from the right?", answer: "LEFT JOIN", difficulty: "Intermediate", xp: 30, category: "Databases" },
    { id: 'bq12', question: "Shortest path algorithm for an unweighted graph?", answer: "BFS", difficulty: "Advanced", xp: 40, category: "Algorithms" },
    { id: 'bq13', question: "What does the `===` operator check for in JS?", answer: "value and type", difficulty: "Beginner", xp: 20, category: "JavaScript" },
    { id: 'bq14', question: "What is the process of a function calling itself called?", answer: "Recursion", difficulty: "Intermediate", xp: 25, category: "Concepts" },
    { id: 'bq15', question: "In Git, what is the command to create and switch to a new branch?", answer: "git checkout -b", difficulty: "Intermediate", xp: 30, category: "Tools" },
    { id: 'bq16', question: "What type of attack involves tricking a user into executing unwanted actions on a web application in which they're currently authenticated?", answer: "CSRF", difficulty: "Advanced", xp: 50, category: "Cybersecurity" },
    { id: 'bq17', question: "Which algorithm is used by Google to rank pages?", answer: "PageRank", difficulty: "Expert", xp: 70, category: "Algorithms" },
    { id: 'bq18', question: "What Python library is commonly used for data manipulation and analysis?", answer: "pandas", difficulty: "Intermediate", xp: 30, category: "Python" }
];

export const games: Game[] = [
    { id: '1', title: 'Monster Battle', description: 'Answer coding trivia to defeat monsters in a turn-based RPG.', icon: Swords, href: '/games/monster-battle' },
    { id: '2', title: 'Debug Hunt', description: 'Find and fix bugs in code snippets against the clock.', icon: Bug, href: '#' },
    { id: '3', title: 'Code Jigsaw', description: 'Reassemble scrambled code blocks into a working program.', icon: Puzzle, href: '#' },
    { id: '4', title: 'Code Typer', description: 'Improve your typing speed and accuracy.', icon: Keyboard, href: '#' },
    { id: '5', title: 'Output Prediction', description: 'Test your code comprehension.', icon: Eye, href: '#' },
    { id: '6', 'title': 'Concept Match', 'description': 'Match code to programming concepts.', 'icon': BrainCircuit, 'href': '#' },
    { id: '7', title: 'Algo Arena', description: 'Competitive programming challenges against other users.', icon: Gamepad2, href: '#' },
    { id: '8', title: 'Security Fortress', description: 'Identify and patch security vulnerabilities in a codebase.', icon: Castle, href: '#' },
];
