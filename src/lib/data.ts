import type { User, Task, Game, Badge } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Swords, Gamepad2, Puzzle, Shield, BrainCircuit, Castle } from 'lucide-react';

export const user: User = {
  name: 'Alex',
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
};

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Reverse a String',
    category: 'Data Structures & Algorithms',
    difficulty: 'Beginner',
    xp: 50,
    description: 'Write a function that takes a string as input and returns the string reversed.',
    starterCode: {
      python: 'def reverse_string(s):\n  # Your code here\n  pass',
      javascript: 'function reverseString(s) {\n  // Your code here\n}',
      java: 'class Solution {\n  public String reverseString(String s) {\n    // Your code here\n  }\n}',
      cpp: '#include <string>\n#include <algorithm>\n\nstd::string reverseString(std::string s) {\n  // Your code here\n  return s;\n}',
    },
    examples: [
        { input: 's = "hello"', output: '"olleh"' },
        { input: 's = "CodeCraft"', output: '"tfarCedoC"' }
    ],
    constraints: ['The input string\'s length is between 1 and 10^5.'],
  },
  {
    id: '2',
    title: 'Two Sum',
    category: 'Data Structures & Algorithms',
    difficulty: 'Intermediate',
    xp: 100,
    description: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
    starterCode: {
        python: 'def two_sum(nums, target):\n  # Your code here\n  pass',
        javascript: 'function twoSum(nums, target) {\n  // Your code here\n}',
        java: 'class Solution {\n  public int[] twoSum(int[] nums, int target) {\n    // Your code here\n  }\n}',
        cpp: '#include <vector>\n\nstd::vector<int> twoSum(std::vector<int>& nums, int target) {\n  // Your code here\n}',
    },
    examples: [
        { input: 'nums = [2, 7, 11, 15], target = 9', output: '[0, 1]', explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].' },
    ],
    constraints: ['2 <= nums.length <= 10^4', '-10^9 <= nums[i] <= 10^9', '-10^9 <= target <= 10^9', 'Only one valid answer exists.'],
  },
  {
    id: '3',
    title: 'Simple API Fetch',
    category: 'Web Development',
    difficulty: 'Beginner',
    xp: 75,
    description: 'Using the native `fetch` API in JavaScript, make a GET request to `https://api.example.com/data` and log the response to the console.',
    starterCode: {
      python: '# Python does not run in the browser for this challenge.\n# Please use JavaScript.',
      javascript: '// Your code here\nfetch(\'https://api.example.com/data\')\n  .then(response => response.json())\n  .then(data => {\n    console.log(data);\n    // Assume verification is handled elsewhere\n  });',
      java: '// Java does not run in the browser for this challenge.\n// Please use JavaScript.',
      cpp: '// C++ does not run in the browser for this challenge.\n// Please use JavaScript.',
    },
    examples: [],
    constraints: ['Use the Fetch API.', 'Do not use any external libraries like Axios.'],
  },
    {
    id: '4',
    title: 'SQL Injection Prevention',
    category: 'Cybersecurity',
    difficulty: 'Intermediate',
    xp: 150,
    description: 'Refactor the given Python code to prevent SQL injection vulnerabilities. The function should safely query the database for a user by their username.',
    starterCode: {
      python: 'import sqlite3\n\ndef get_user(username):\n  db = sqlite3.connect(":memory:")\n  cursor = db.cursor()\n  # Vulnerable code below\n  query = "SELECT * FROM users WHERE username = \'" + username + "\'"\n  cursor.execute(query)\n  return cursor.fetchone()\n\n# Your refactored, secure code here\n',
      javascript: '# N/A for this challenge.',
      java: '# N/A for this challenge.',
      cpp: '# N/A for this challenge.',
    },
    examples: [],
    constraints: ['Use parameterized queries or prepared statements.'],
  },
  {
    id: '5',
    title: 'Valid Parentheses',
    category: 'Data Structures & Algorithms',
    difficulty: 'Beginner',
    xp: 75,
    description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.',
    starterCode: {
        python: 'def is_valid(s):\n  # Your code here\n  pass',
        javascript: 'function isValid(s) {\n  // Your code here\n}',
        java: 'class Solution {\n  public boolean isValid(String s) {\n    // Your code here\n  }\n}',
        cpp: '#include <string>\n#include <stack>\n\nbool isValid(std::string s) {\n  // Your code here\n}',
    },
    examples: [
        { input: 's = "()"', output: 'true' },
        { input: 's = "()[]{}"', output: 'true' },
        { input: 's = "(]"', output: 'false' },
    ],
    constraints: ['1 <= s.length <= 10^4', 's consists of parentheses only \'()[]{}\'.'],
  },
  {
    id: '6',
    title: 'Merge Two Sorted Lists',
    category: 'Data Structures & Algorithms',
    difficulty: 'Beginner',
    xp: 75,
    description: 'You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.',
    starterCode: {
        python: '# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\ndef merge_two_lists(list1, list2):\n  # Your code here\n  pass',
        javascript: '/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\nfunction mergeTwoLists(list1, list2) {\n  // Your code here\n}',
        java: '/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n  public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n    // Your code here\n  }\n}',
        cpp: '/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n        // Your code here\n    }\n};',
    },
    examples: [
        { input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]' },
        { input: 'list1 = [], list2 = []', output: '[]' },
        { input: 'list1 = [], list2 = [0]', output: '[0]' },
    ],
    constraints: ['The number of nodes in both lists is in the range [0, 50].', '-100 <= Node.val <= 100', 'Both list1 and list2 are sorted in non-decreasing order.'],
  },
  {
    id: '7',
    title: 'Maximum Subarray',
    category: 'Data Structures & Algorithms',
    difficulty: 'Intermediate',
    xp: 125,
    description: 'Given an integer array nums, find the subarray with the largest sum, and return its sum.',
    starterCode: {
        python: 'def max_subarray(nums):\n  # Your code here\n  pass',
        javascript: 'function maxSubArray(nums) {\n  // Your code here\n}',
        java: 'class Solution {\n    public int maxSubArray(int[] nums) {\n        // Your code here\n    }\n}',
        cpp: '#include <vector>\n#include <algorithm>\n\nint maxSubArray(std::vector<int>& nums) {\n    // Your code here\n}',
    },
    examples: [
        { input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6', explanation: 'The subarray [4,-1,2,1] has the largest sum 6.' },
        { input: 'nums = [1]', output: '1', explanation: 'The subarray [1] has the largest sum 1.' },
        { input: 'nums = [5,4,-1,7,8]', output: '23', explanation: 'The subarray [5,4,-1,7,8] has the largest sum 23.' },
    ],
    constraints: ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4'],
  },
];

export const games: Game[] = [
    { id: '1', title: 'Code Rush', description: 'Timed typing game with missing code snippets.', icon: Gamepad2, href: '#' },
    { id: '2', title: 'Code Invaders', description: 'Space Invaders with coding MCQs.', icon: Swords, href: '#' },
    { id: '3', title: 'Debug Tower', description: 'Drag/drop fixes into a buggy code tower.', icon: Puzzle, href: '#' },
    { id: '4', title: 'Monster Battle', description: 'RPG fight with coding questions.', icon: Shield, href: '#' },
    { id: '5', title: 'Code Dungeon', description: 'Dungeon crawler with coding puzzles.', icon: Castle, href: '#' },
];
