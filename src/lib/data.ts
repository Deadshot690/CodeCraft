
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
                explanation: "The root node\'s value is 5 but its right child\'s value is 4."
            }
        ],
        constraints: ['The number of nodes in the tree is in the range [1, 104].', '-231 <= Node.val <= 231 - 1']
    },
    {
      id: '4',
      title: 'FizzBuzz',
      category: 'Data Structures & Algorithms',
      difficulty: 'Beginner',
      xp: 30,
      description: 'Given an integer n, return a string array answer (1-indexed) where: answer[i] == "FizzBuzz" if i is divisible by 3 and 5, answer[i] == "Fizz" if i is divisible by 3, answer[i] == "Buzz" if i is divisible by 5, answer[i] == i (as a string) if none of the above conditions are true.',
      starterCode: {
        python: 'def fizz_buzz(n):\n  # Your code here\n  pass',
        javascript: 'function fizzBuzz(n) {\n  // Your code here\n}',
        java: 'class Solution {\n  public List<String> fizzBuzz(int n) {\n    // Your code here\n  }\n}',
        cpp: 'class Solution {\npublic:\n    vector<string> fizzBuzz(int n) {\n        // Your code here\n    }\n};',
      },
      examples: [{ input: 'n = 5', output: '["1","2","Fizz","4","Buzz"]' }],
      constraints: ['1 <= n <= 104'],
    },
    {
      id: '5',
      title: 'Build a Basic Counter with React',
      category: 'Web Development',
      difficulty: 'Beginner',
      xp: 60,
      description: 'Create a React component that displays a count and two buttons: one to increment the count and one to decrement it.',
      starterCode: {
        python: '# N/A for this challenge',
        javascript: 'import React, { useState } from "react";\n\nfunction Counter() {\n  // Your code here\n  return (\n    <div>\n      {/* Your JSX here */}\n    </div>\n  );\n}',
        java: '// N/A for this challenge',
        cpp: '// N/A for this challenge',
      },
      examples: [],
      constraints: ['The count should start at 0.'],
    },
    {
      id: '6',
      title: 'Maximum Subarray',
      category: 'Data Structures & Algorithms',
      difficulty: 'Intermediate',
      xp: 100,
      description: 'Given an integer array nums, find the subarray with the largest sum, and return its sum.',
      starterCode: {
        python: 'def max_sub_array(nums):\n  # Your code here\n  pass',
        javascript: 'function maxSubArray(nums) {\n  // Your code here\n}',
        java: 'class Solution {\n  public int maxSubArray(int[] nums) {\n    // Your code here\n  }\n}',
        cpp: 'class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        // Your code here\n    }\n};',
      },
      examples: [{ input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6', explanation: 'The subarray [4,-1,2,1] has the largest sum 6.' }],
      constraints: ['1 <= nums.length <= 105', '-104 <= nums[i] <= 104'],
    },
    {
      id: '7',
      title: 'Train a Simple Linear Regression Model',
      category: 'AI/ML',
      difficulty: 'Intermediate',
      xp: 120,
      description: 'Using a library like scikit-learn, train a linear regression model on a given dataset.',
      starterCode: {
        python: 'from sklearn.linear_model import LinearRegression\nimport numpy as np\n\ndef train_model(X, y):\n  # Your code here\n  pass',
        javascript: '// N/A for this challenge',
        java: '// N/A for this challenge',
        cpp: '// N/A for this challenge',
      },
      examples: [],
      constraints: ['The input X will be a 2D numpy array.', 'The input y will be a 1D numpy array.'],
    },
    {
      id: '8',
      title: 'Detect SQL Injection',
      category: 'Cybersecurity',
      difficulty: 'Advanced',
      xp: 180,
      description: 'Write a function that takes a string query and returns true if it detects a potential SQL injection attempt.',
      starterCode: {
        python: 'import re\n\ndef is_sql_injection(query):\n  # Your code here\n  pass',
        javascript: 'function isSqlInjection(query) {\n  // Your code here\n}',
        java: 'import java.util.regex.Pattern;\n\nclass Detector {\n  public boolean isSqlInjection(String query) {\n    // Your code here\n  }\n}',
        cpp: '#include <regex>\n#include <string>\n\nbool isSqlInjection(const std::string& query) {\n    // Your code here\n}',
      },
      examples: [{ input: "query = 'SELECT * FROM users WHERE id = \\'1\\' OR \\'1\\'=\\'1\\''", output: 'true' }],
      constraints: [],
    },
    {
      id: '9',
      title: 'Implement a Queue using Stacks',
      category: 'Data Structures & Algorithms',
      difficulty: 'Intermediate',
      xp: 110,
      description: 'Implement a first in, first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).',
      starterCode: {
        python: 'class MyQueue:\n\n    def __init__(self):\n        # Your code here\n\n    def push(self, x: int) -> None:\n        # Your code here\n\n    def pop(self) -> int:\n        # Your code here\n\n    def peek(self) -> int:\n        # Your code here\n\n    def empty(self) -> bool:\n        # Your code here\n',
        javascript: 'var MyQueue = function() {\n    // Your code here\n};\n\nMyQueue.prototype.push = function(x) {\n    // Your code here\n};\n\nMyQueue.prototype.pop = function() {\n    // Your code here\n};\n\nMyQueue.prototype.peek = function() {\n    // Your code here\n};\n\nMyQueue.prototype.empty = function() {\n    // Your code here\n};',
        java: 'class MyQueue {\n\n    public MyQueue() {\n        // Your code here\n    }\n    \n    public void push(int x) {\n        // Your code here\n    }\n    \n    public int pop() {\n        // Your code here\n    }\n    \n    public int peek() {\n        // Your code here\n    }\n    \n    public boolean empty() {\n        // Your code here\n    }\n}',
        cpp: 'class MyQueue {\npublic:\n    MyQueue() {\n        // Your code here\n    }\n    \n    void push(int x) {\n        // Your code here\n    }\n    \n    int pop() {\n        // Your code here\n    }\n    \n    int peek() {\n        // Your code here\n    }\n    \n    bool empty() {\n        // Your code here\n    }\n};',
      },
      examples: [],
      constraints: ['1 <= x <= 9', 'At most 100 calls will be made to push, pop, peek, and empty.'],
    },
    {
      id: '10',
      title: 'Longest Common Subsequence',
      category: 'Data Structures & Algorithms',
      difficulty: 'Expert',
      xp: 250,
      description: 'Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.',
      starterCode: {
        python: 'def longest_common_subsequence(text1, text2):\n  # Your code here\n  pass',
        javascript: 'function longestCommonSubsequence(text1, text2) {\n  // Your code here\n}',
        java: 'class Solution {\n  public int longestCommonSubsequence(String text1, String text2) {\n    // Your code here\n  }\n}',
        cpp: 'class Solution {\npublic:\n    int longestCommonSubsequence(string text1, string text2) {\n        // Your code here\n    }\n};',
      },
      examples: [{ input: 'text1 = "abcde", text2 = "ace"', output: '3', explanation: 'The longest common subsequence is "ace" and its length is 3.' }],
      constraints: ['1 <= text1.length, text2.length <= 1000', 'text1 and text2 consist of only lowercase English characters.'],
    },
    {
      id: '11',
      title: 'Fetch Data from an API',
      category: 'Web Development',
      difficulty: 'Beginner',
      xp: 70,
      description: 'Write an async JavaScript function that fetches data from a given URL and returns it as JSON.',
      starterCode: {
        python: '# N/A for this challenge',
        javascript: 'async function fetchData(url) {\n  // Your code here\n}',
        java: '// N/A for this challenge',
        cpp: '// N/A for this challenge',
      },
      examples: [],
      constraints: ['Use the Fetch API.', 'Handle potential errors.'],
    },
    {
      id: '12',
      title: 'Palindrome Number',
      category: 'Data Structures & Algorithms',
      difficulty: 'Beginner',
      xp: 45,
      description: 'Given an integer x, return true if x is a palindrome, and false otherwise.',
      starterCode: {
        python: 'def is_palindrome(x):\n  # Your code here\n  pass',
        javascript: 'function isPalindrome(x) {\n  // Your code here\n}',
        java: 'class Solution {\n  public boolean isPalindrome(int x) {\n    // Your code here\n  }\n}',
        cpp: 'class Solution {\npublic:\n    bool isPalindrome(int x) {\n        // Your code here\n    }\n};',
      },
      examples: [{ input: 'x = 121', output: 'true' }, { input: 'x = -121', output: 'false' }],
      constraints: ['-2^31 <= x <= 2^31 - 1'],
    },
    {
      id: '13',
      title: 'Implement a LRU Cache',
      category: 'Data Structures & Algorithms',
      difficulty: 'Expert',
      xp: 300,
      description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.',
      starterCode: {
        python: 'class LRUCache:\n\n    def __init__(self, capacity: int):\n        # Your code here\n\n    def get(self, key: int) -> int:\n        # Your code here\n\n    def put(self, key: int, value: int) -> None:\n        # Your code here\n',
        javascript: 'var LRUCache = function(capacity) {\n    // Your code here\n};\n\nLRUCache.prototype.get = function(key) {\n    // Your code here\n};\n\nLRUCache.prototype.put = function(key, value) {\n    // Your code here\n};',
        java: 'class LRUCache {\n\n    public LRUCache(int capacity) {\n        // Your code here\n    }\n    \n    public int get(int key) {\n        // Your code here\n    }\n    \n    public void put(int key, int value) {\n        // Your code here\n    }\n}',
        cpp: 'class LRUCache {\npublic:\n    LRUCache(int capacity) {\n        // Your code here\n    }\n    \n    int get(int key) {\n        // Your code here\n    }\n    \n    void put(int key, int value) {\n        // Your code here\n    }\n};',
      },
      examples: [],
      constraints: ['1 <= capacity <= 3000', '0 <= key <= 10000', '0 <= value <= 10^5', 'At most 2 * 10^5 calls will be made to get and put.'],
    },
    {
      id: '14',
      title: 'Basic Cross-Site Scripting (XSS) Prevention',
      category: 'Cybersecurity',
      difficulty: 'Intermediate',
      xp: 130,
      description: 'Write a function that takes a string and sanitizes it to prevent basic XSS attacks by replacing < and > characters.',
      starterCode: {
        python: 'def sanitize(s):\n  # Your code here\n  pass',
        javascript: 'function sanitize(s) {\n  // Your code here\n}',
        java: 'class Sanitizer {\n  public String sanitize(String s) {\n    // Your code here\n  }\n}',
        cpp: '#include <string>\n\nstd::string sanitize(std::string s) {\n    // Your code here\n}',
      },
      examples: [{ input: 's = "<script>alert(\\\'XSS\\\')</script>"', output: '&lt;script&gt;alert(&#39;XSS&#39;)&lt;/script&gt;' }],
      constraints: [],
    },
    {
      id: '15',
      title: 'Merge Two Sorted Lists',
      category: 'Data Structures & Algorithms',
      difficulty: 'Beginner',
      xp: 80,
      description: 'You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.',
      starterCode: {
        python: '# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n        # Your code here',
        javascript: '/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} list1\n * @param {ListNode} list2\n * @return {ListNode}\n */\nvar mergeTwoLists = function(list1, list2) {\n    // Your code here\n};',
        java: '/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n        // Your code here\n    }\n}',
        cpp: '/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n        // Your code here\n    }\n};',
      },
      examples: [{ input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]' }],
      constraints: ['The number of nodes in both lists is in the range [0, 50].', '-100 <= Node.val <= 100', 'Both list1 and list2 are sorted in non-decreasing order.'],
    },
    {
      id: '16',
      title: 'Debounce a Function',
      category: 'Web Development',
      difficulty: 'Intermediate',
      xp: 140,
      description: 'Implement a debounce function in JavaScript that limits the rate at which a function gets called.',
      starterCode: {
        python: '# N/A for this challenge',
        javascript: 'function debounce(func, delay) {\n  // Your code here\n}',
        java: '// N/A for this challenge',
        cpp: '// N/A for this challenge',
      },
      examples: [],
      constraints: ['The debounced function should only be called after the user has stopped invoking it for `delay` milliseconds.'],
    },
    {
      id: '17',
      title: 'Valid Parentheses',
      category: 'Data Structures & Algorithms',
      difficulty: 'Beginner',
      xp: 75,
      description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
      starterCode: {
        python: 'def is_valid(s):\n  # Your code here\n  pass',
        javascript: 'function isValid(s) {\n  // Your code here\n}',
        java: 'class Solution {\n  public boolean isValid(String s) {\n    // Your code here\n  }\n}',
        cpp: 'class Solution {\npublic:\n    bool isValid(string s) {\n        // Your code here\n    }\n};',
      },
      examples: [{ input: 's = "()[]{}"', output: 'true' }, { input: 's = "(]"', output: 'false' }],
      constraints: ['1 <= s.length <= 104', 's consists of parentheses only \'()[]{}\'.'],
    },
    {
      id: '18',
      title: 'Implement a Basic Web Scraper',
      category: 'AI/ML',
      difficulty: 'Intermediate',
      xp: 150,
      description: 'Write a Python script to scrape the titles from the front page of Hacker News.',
      starterCode: {
        python: 'import requests\nfrom bs4 import BeautifulSoup\n\ndef get_hacker_news_titles():\n  # Your code here\n  pass',
        javascript: '// N/A for this challenge',
        java: '// N/A for this challenge',
        cpp: '// N/A for this challenge',
      },
      examples: [],
      constraints: ['Use the `requests` and `BeautifulSoup4` libraries.'],
    },
    {
      id: '19',
      title: 'Word Break',
      category: 'Data Structures & Algorithms',
      difficulty: 'Expert',
      xp: 280,
      description: 'Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.',
      starterCode: {
        python: 'def word_break(s, word_dict):\n  # Your code here\n  pass',
        javascript: 'function wordBreak(s, wordDict) {\n  // Your code here\n}',
        java: 'class Solution {\n  public boolean wordBreak(String s, List<String> wordDict) {\n    // Your code here\n  }\n}',
        cpp: 'class Solution {\npublic:\n    bool wordBreak(string s, vector<string>& wordDict) {\n        // Your code here\n    }\n};',
      },
      examples: [{ input: 's = "leetcode", wordDict = ["leet","code"]', output: 'true' }],
      constraints: ['1 <= s.length <= 300', '1 <= wordDict.length <= 1000', '1 <= wordDict[i].length <= 20', 's and wordDict[i] consist of only lowercase English letters.', 'All the strings of wordDict are unique.'],
    },
    {
      id: '20',
      title: 'Climbing Stairs',
      category: 'Data Structures & Algorithms',
      difficulty: 'Beginner',
      xp: 65,
      description: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
      starterCode: {
        python: 'def climb_stairs(n):\n  # Your code here\n  pass',
        javascript: 'function climbStairs(n) {\n  // Your code here\n}',
        java: 'class Solution {\n  public int climbStairs(int n) {\n    // Your code here\n  }\n}',
        cpp: 'class Solution {\npublic:\n    int climbStairs(int n) {\n        // Your code here\n    }\n};',
      },
      examples: [{ input: 'n = 3', output: '3', explanation: 'There are three ways: 1. 1 + 1 + 1, 2. 1 + 2, 3. 2 + 1' }],
      constraints: ['1 <= n <= 45'],
    },
    {
      id: '21',
      title: 'Implement Promise.all',
      category: 'Web Development',
      difficulty: 'Advanced',
      xp: 200,
      description: 'Write a function that mimics the behavior of `Promise.all`.',
      starterCode: {
        python: '# N/A for this challenge',
        javascript: 'function promiseAll(promises) {\n  // Your code here\n}',
        java: '// N/A for this challenge',
        cpp: '// N/A for this challenge',
      },
      examples: [],
      constraints: ['The function should take an array of promises.', 'It should return a single promise that resolves with an array of results.'],
    },
    {
      id: '22',
      title: 'Caesar Cipher',
      category: 'Cybersecurity',
      difficulty: 'Beginner',
      xp: 90,
      description: 'Implement a Caesar cipher function that takes a string and a shift amount, and returns the encrypted string.',
      starterCode: {
        python: 'def caesar_cipher(text, shift):\n  # Your code here\n  pass',
        javascript: 'function caesarCipher(text, shift) {\n  // Your code here\n}',
        java: 'class Cipher {\n  public String caesarCipher(String text, int shift) {\n    // Your code here\n  }\n}',
        cpp: '#include <string>\n\nstd::string caesarCipher(std::string text, int shift) {\n    // Your code here\n}',
      },
      examples: [{ input: 'text = "abc", shift = 1', output: '"bcd"' }],
      constraints: ['The shift will be a positive integer.'],
    },
    {
      id: '23',
      title: 'Binary Tree Inorder Traversal',
      category: 'Data Structures & Algorithms',
      difficulty: 'Intermediate',
      xp: 95,
      description: 'Given the root of a binary tree, return the inorder traversal of its nodes\' values.',
      starterCode: {
        python: '# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n      # Your code here\n      pass',
        javascript: '/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\nvar inorderTraversal = function(root) {\n    // Your code here\n};',
        java: 'class Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        // Your code here\n    }\n}',
        cpp: 'class Solution {\npublic:\n    vector<int> inorderTraversal(TreeNode* root) {\n        // Your code here\n    }\n};',
      },
      examples: [{ input: 'root = [1,null,2,3]', output: '[1,3,2]' }],
      constraints: ['The number of nodes in the tree is in the range [0, 100].', '-100 <= Node.val <= 100'],
    },
    {
      id: '24',
      title: 'Analyze Text Sentiment',
      category: 'AI/ML',
      difficulty: 'Advanced',
      xp: 220,
      description: 'Use a library like NLTK or TextBlob in Python to determine if a piece of text has positive, negative, or neutral sentiment.',
      starterCode: {
        python: 'from textblob import TextBlob\n\ndef analyze_sentiment(text):\n  # Returns "positive", "negative", or "neutral"\n  # Your code here\n  pass',
        javascript: '// N/A for this challenge',
        java: '// N/A for this challenge',
        cpp: '// N/A for this challenge',
      },
      examples: [{ input: 'text = "I love this product!"', output: '"positive"' }, { input: 'text = "This is the worst thing ever."', output: '"negative"' }],
      constraints: [],
    },
    {
      id: '25',
      title: 'Container With Most Water',
      category: 'Data Structures & Algorithms',
      difficulty: 'Intermediate',
      xp: 160,
      description: 'You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.',
      starterCode: {
        python: 'def max_area(height):\n  # Your code here\n  pass',
        javascript: 'function maxArea(height) {\n  // Your code here\n}',
        java: 'class Solution {\n  public int maxArea(int[] height) {\n    // Your code here\n  }\n}',
        cpp: 'class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        // Your code here\n    }\n};',
      },
      examples: [{ input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49' }],
      constraints: ['n == height.length', '2 <= n <= 10^5', '0 <= height[i] <= 10^4'],
    },
    {
      id: '26',
      title: 'Implement a Centralized State Management Store',
      category: 'Web Development',
      difficulty: 'Advanced',
      xp: 250,
      description: 'Create a simple Redux-like store from scratch in JavaScript with a reducer, actions, and a subscription mechanism.',
      starterCode: {
        python: '# N/A for this challenge',
        javascript: 'function createStore(reducer) {\n  // Your code here\n}',
        java: '// N/A for this challenge',
        cpp: '// N/A for this challenge',
      },
      examples: [],
      constraints: ['The store should have `getState`, `dispatch`, and `subscribe` methods.'],
    },
    {
      id: '27',
      title: 'Hash a Password',
      category: 'Cybersecurity',
      difficulty: 'Intermediate',
      xp: 150,
      description: 'Write a function to securely hash a password using a library like bcrypt.',
      starterCode: {
        python: 'import bcrypt\n\ndef hash_password(password):\n  # Your code here\n  pass',
        javascript: 'const bcrypt = require("bcrypt");\n\nasync function hashPassword(password) {\n  // Your code here\n}',
        java: '// Recommended to use a library like jBcrypt\nclass Hasher {\n  public String hashPassword(String password) {\n    // Your code here\n  }\n}',
        cpp: '// Libraries like libbcrypt are available\n#include <string>\n\nstd::string hashPassword(const std::string& password) {\n    // Your code here\n}',
      },
      examples: [],
      constraints: ['Use a salt in the hashing process.'],
    },
    {
      id: '28',
      title: 'Trapping Rain Water',
      category: 'Data Structures & Algorithms',
      difficulty: 'Expert',
      xp: 350,
      description: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
      starterCode: {
        python: 'def trap(height):\n  # Your code here\n  pass',
        javascript: 'function trap(height) {\n  // Your code here\n}',
        java: 'class Solution {\n  public int trap(int[] height) {\n    // Your code here\n  }\n}',
        cpp: 'class Solution {\npublic:\n    int trap(vector<int>& height) {\n        // Your code here\n    }\n};',
      },
      examples: [{ input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6' }],
      constraints: ['n == height.length', '1 <= n <= 2 * 10^4', '0 <= height[i] <= 10^5'],
    },
    {
      id: '29',
      title: 'Implement a Trie (Prefix Tree)',
      category: 'Data Structures & Algorithms',
      difficulty: 'Advanced',
      xp: 220,
      description: 'Implement a trie with insert, search, and startsWith methods.',
      starterCode: {
        python: 'class Trie:\n\n    def __init__(self):\n        # Your code here\n\n    def insert(self, word: str) -> None:\n        # Your code here\n\n    def search(self, word: str) -> bool:\n        # Your code here\n\n    def startsWith(self, prefix: str) -> bool:\n        # Your code here\n',
        javascript: 'var Trie = function() {\n    // Your code here\n};\n\nTrie.prototype.insert = function(word) {\n    // Your code here\n};\n\nTrie.prototype.search = function(word) {\n    // Your code here\n};\n\nTrie.prototype.startsWith = function(prefix) {\n    // Your code here\n};',
        java: 'class Trie {\n\n    public Trie() {\n        // Your code here\n    }\n    \n    public void insert(String word) {\n        // Your code here\n    }\n    \n    public boolean search(String word) {\n        // Your code here\n    }\n    \n    public boolean startsWith(String prefix) {\n        // Your code here\n    }\n}',
        cpp: 'class Trie {\npublic:\n    Trie() {\n        // Your code here\n    }\n    \n    void insert(string word) {\n        // Your code here\n    }\n    \n    bool search(string word) {\n        // Your code here\n    }\n    \n    bool startsWith(string prefix) {\n        // Your code here\n    }\n};',
      },
      examples: [],
      constraints: ['1 <= word.length, prefix.length <= 2000', 'word and prefix consist of only lowercase English letters.', 'At most 3 * 10^4 calls in total will be made to insert, search, and startsWith.'],
    },
    {
      id: '30',
      title: 'Find K-th Largest Element in an Array',
      category: 'Data Structures & Algorithms',
      difficulty: 'Intermediate',
      xp: 170,
      description: 'Given an integer array nums and an integer k, return the kth largest element in the array.',
      starterCode: {
        python: 'def find_kth_largest(nums, k):\n  # Your code here\n  pass',
        javascript: 'function findKthLargest(nums, k) {\n  // Your code here\n}',
        java: 'class Solution {\n  public int findKthLargest(int[] nums, int k) {\n    // Your code here\n  }\n}',
        cpp: 'class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        // Your code here\n    }\n};',
      },
      examples: [{ input: 'nums = [3,2,1,5,6,4], k = 2', output: '5' }],
      constraints: ['1 <= k <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4'],
    },
    {
      id: '31',
      title: 'Create a Simple REST API Endpoint',
      category: 'Web Development',
      difficulty: 'Beginner',
      xp: 85,
      description: 'Using a framework like Express.js or Flask, create a single API endpoint that returns a JSON object.',
      starterCode: {
        python: '# Using Flask\nfrom flask import Flask, jsonify\n\napp = Flask(__name__)\n\n# Your code here\n',
        javascript: '// Using Express.js\nconst express = require(\'express\');\nconst app = express();\n\n// Your code here',
        java: '// Using Spring Boot\n@RestController\npublic class HelloController {\n    // Your code here\n}',
        cpp: '// Using a library like Cpp-Http-Lib\n// Your code here',
      },
      examples: [],
      constraints: ['The endpoint should be at the path `/api/hello`.', 'It should return `{"message": "Hello, World!"}`.'],
    },
    {
      id: '32',
      title: 'Median of Two Sorted Arrays',
      category: 'Data Structures & Algorithms',
      difficulty: 'Expert',
      xp: 400,
      description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).',
      starterCode: {
        python: 'def find_median_sorted_arrays(nums1, nums2):\n  # Your code here\n  pass',
        javascript: 'function findMedianSortedArrays(nums1, nums2) {\n  // Your code here\n}',
        java: 'class Solution {\n  public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n    // Your code here\n  }\n}',
        cpp: 'class Solution {\npublic:\n    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        // Your code here\n    }\n};',
      },
      examples: [{ input: 'nums1 = [1,3], nums2 = [2]', output: '2.00000' }],
      constraints: ['nums1.length == m', 'nums2.length == n', '0 <= m <= 1000', '0 <= n <= 1000', '1 <= m + n <= 2000', '-10^6 <= nums1[i], nums2[i] <= 10^6'],
    },
    {
      id: '33',
      title: 'Image Classification with a Pre-trained Model',
      category: 'AI/ML',
      difficulty: 'Advanced',
      xp: 280,
      description: 'Use a pre-trained model (like ResNet50 from TensorFlow/Keras or PyTorch) to classify an image.',
      starterCode: {
        python: '# Using TensorFlow/Keras\nfrom tensorflow.keras.applications.resnet50 import ResNet50, preprocess_input, decode_predictions\nfrom tensorflow.keras.preprocessing import image\nimport numpy as np\n\ndef classify_image(image_path):\n  # Your code here\n  pass',
        javascript: '// Using TensorFlow.js\n// Your code here',
        java: '// N/A for this challenge',
        cpp: '// Using a library like OpenCV DNN\n// Your code here',
      },
      examples: [],
      constraints: ['The function should take an image file path and return the top predicted label.'],
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
