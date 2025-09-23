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
];

export const games: Game[] = [
    { id: '1', title: 'Code Rush', description: 'Timed typing game with missing code snippets.', icon: Gamepad2, href: '#' },
    { id: '2', title: 'Code Invaders', description: 'Space Invaders with coding MCQs.', icon: Swords, href: '#' },
    { id: '3', title: 'Debug Tower', description: 'Drag/drop fixes into a buggy code tower.', icon: Puzzle, href: '#' },
    { id: '4', title: 'Monster Battle', description: 'RPG fight with coding questions.', icon: Shield, href: '#' },
    { id: '5', title: 'Code Dungeon', description: 'Dungeon crawler with coding puzzles.', icon: Castle, href: '#' },
];
