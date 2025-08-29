export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  domain: 'DSA' | 'Web' | 'AI';
  tags: string[];
  template: string;
}

export const challenges: Challenge[] = [
  {
    id: 'two-sum',
    title: 'Two Sum',
    description: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Hash Table'],
    template: `function twoSum(nums, target) {\n  // Write your code here\n};`
  },
  {
    id: 'reverse-string',
    title: 'Reverse String',
    description: 'Write a function that reverses a string. The input string is given as an array of characters `s`. You must do this by modifying the input array in-place with O(1) extra memory.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Two Pointers'],
    template: `function reverseString(s) {\n  // Write your code here\n};`
  },
  {
    id: 'palindrome-number',
    title: 'Palindrome Number',
    description: 'Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math'],
    template: `function isPalindrome(x) {\n  // Write your code here\n};`
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    description: 'Given a string `s` containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Stack'],
    template: `function isValid(s) {\n  // Write your code here\n};`
  },
  {
    id: 'merge-sorted-lists',
    title: 'Merge Two Sorted Lists',
    description: 'You are given the heads of two sorted linked lists `list1` and `list2`. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Linked List', 'Recursion'],
    template: `function mergeTwoLists(list1, list2) {\n  // Write your code here\n};`
  },
  {
    id: 'longest-substring',
    title: 'Longest Substring Without Repeating Characters',
    description: 'Given a string `s`, find the length of the longest substring without repeating characters.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Hash Table', 'Sliding Window'],
    template: `function lengthOfLongestSubstring(s) {\n  // Write your code here\n};`
  },
  {
    id: 'max-subarray',
    title: 'Maximum Subarray',
    description: 'Given an integer array `nums`, find the subarray with the largest sum, and return its sum.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Divide and Conquer', 'Dynamic Programming'],
    template: `function maxSubArray(nums) {\n  // Write your code here\n};`
  },
  {
    id: 'inorder-traversal',
    title: 'Binary Tree Inorder Traversal',
    description: 'Given the `root` of a binary tree, return the inorder traversal of its nodes\' values.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Binary Tree'],
    template: `function inorderTraversal(root) {\n  // Write your code here\n};`
  },
  {
    id: 'roman-to-integer',
    title: 'Roman to Integer',
    description: 'Given a roman numeral, convert it to an integer.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Hash Table', 'Math'],
    template: `function romanToInt(s) {\n  // Write your code here\n};`
  },
  {
    id: 'longest-common-prefix',
    title: 'Longest Common Prefix',
    description: 'Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Trie'],
    template: `function longestCommonPrefix(strs) {\n  // Write your code here\n};`
  },
  {
    id: 'remove-duplicates-sorted-array',
    title: 'Remove Duplicates from Sorted Array',
    description: 'Given a sorted array `nums`, remove the duplicates in-place such that each element appears only once and returns the new length. Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers'],
    template: `function removeDuplicates(nums) {\n  // Write your code here\n};`
  },
  {
    id: 'implement-strstr',
    title: 'Implement strStr()',
    description: 'Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Two Pointers'],
    template: `function strStr(haystack, needle) {\n  // Write your code here\n};`
  },
  {
    id: 'add-two-numbers',
    title: 'Add Two Numbers',
    description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Linked List', 'Math', 'Recursion'],
    template: `function addTwoNumbers(l1, l2) {\n  // Write your code here\n};`
  },
  {
    id: '3sum',
    title: '3Sum',
    description: 'Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers', 'Sorting'],
    template: `function threeSum(nums) {\n  // Write your code here\n};`
  },
  {
    id: 'letter-combinations-phone-number',
    title: 'Letter Combinations of a Phone Number',
    description: 'Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Backtracking', 'Recursion'],
    template: `function letterCombinations(digits) {\n  // Write your code here\n};`
  },
  {
    id: 'remove-nth-node-from-end',
    title: 'Remove Nth Node From End of List',
    description: 'Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Linked List', 'Two Pointers'],
    template: `function removeNthFromEnd(head, n) {\n  // Write your code here\n};`
  },
  {
    id: 'generate-parentheses',
    title: 'Generate Parentheses',
    description: 'Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Backtracking', 'Dynamic Programming'],
    template: `function generateParenthesis(n) {\n  // Write your code here\n};`
  },
  {
    id: 'merge-k-sorted-lists',
    title: 'Merge k Sorted Lists',
    description: 'You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Linked List', 'Heap', 'Divide and Conquer'],
    template: `function mergeKLists(lists) {\n  // Write your code here\n};`
  },
  {
    id: 'search-in-rotated-sorted-array',
    title: 'Search in Rotated Sorted Array',
    description: 'There is an integer array `nums` sorted in ascending order (with distinct values). Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index `k`. Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Binary Search'],
    template: `function search(nums, target) {\n  // Write your code here\n};`
  },
  {
    id: 'group-anagrams',
    title: 'Group Anagrams',
    description: 'Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'String', 'Sorting'],
    template: `function groupAnagrams(strs) {\n  // Write your code here\n};`
  },
  {
    id: 'jump-game',
    title: 'Jump Game',
    description: 'You are given an integer array `nums`. You are initially positioned at the array\'s first index, and each element in the array represents your maximum jump length at that position. Return `true` if you can reach the last index, or `false` otherwise.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Greedy', 'Dynamic Programming'],
    template: `function canJump(nums) {\n  // Write your code here\n};`
  },
  {
    id: 'permutations',
    title: 'Permutations',
    description: 'Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Backtracking'],
    template: `function permute(nums) {\n  // Write your code here\n};`
  },
  {
    id: 'rotate-image',
    title: 'Rotate Image',
    description: 'You are given an `n x n` 2D `matrix` representing an image. Rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Math', 'Matrix'],
    template: `function rotate(matrix) {\n  // Write your code here\n};`
  },
  {
    id: 'climbing-stairs',
    title: 'Climbing Stairs',
    description: 'You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'Dynamic Programming', 'Memoization'],
    template: `function climbStairs(n) {\n  // Write your code here\n};`
  },
  {
    id: 'minimum-path-sum',
    title: 'Minimum Path Sum',
    description: 'Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. Note: You can only move either down or right at any point in time.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming', 'Matrix'],
    template: `function minPathSum(grid) {\n  // Write your code here\n};`
  },
  {
    id: 'unique-paths',
    title: 'Unique Paths',
    description: 'There is a robot on an `m x n` grid. The robot is initially located at the top-left corner. The robot tries to move to the bottom-right corner. The robot can only move either down or right at any point in time. Given the two integers `m` and `n`, return the number of possible unique paths that the robot can take to reach the bottom-right corner.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Math', 'Dynamic Programming', 'Combinatorics'],
    template: `function uniquePaths(m, n) {\n  // Write your code here\n};`
  },
  {
    id: 'word-search',
    title: 'Word Search',
    description: 'Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Backtracking', 'Matrix'],
    template: `function exist(board, word) {\n  // Write your code here\n};`
  },
  {
    id: 'subsets',
    title: 'Subsets',
    description: 'Given an integer array `nums` of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Backtracking', 'Bit Manipulation'],
    template: `function subsets(nums) {\n  // Write your code here\n};`
  },
  {
    id: 'binary-tree-level-order-traversal',
    title: 'Binary Tree Level Order Traversal',
    description: 'Given the `root` of a binary tree, return the level order traversal of its nodes\' values. (i.e., from left to right, level by level).',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Tree', 'Breadth-First Search', 'Binary Tree'],
    template: `function levelOrder(root) {\n  // Write your code here\n};`
  },
  {
    id: 'maximum-depth-of-binary-tree',
    title: 'Maximum Depth of Binary Tree',
    description: 'Given the `root` of a binary tree, return its maximum depth. A binary tree\'s maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    template: `function maxDepth(root) {\n  // Write your code here\n};`
  },
  {
    id: 'best-time-to-buy-and-sell-stock',
    title: 'Best Time to Buy and Sell Stock',
    description: 'You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming'],
    template: `function maxProfit(prices) {\n  // Write your code here\n};`
  },
  {
    id: 'valid-palindrome',
    title: 'Valid Palindrome',
    description: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Two Pointers'],
    template: `function isPalindrome(s) {\n  // Write your code here\n};`
  },
  {
    id: 'single-number',
    title: 'Single Number',
    description: 'Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Bit Manipulation'],
    template: `function singleNumber(nums) {\n  // Write your code here\n};`
  },
  {
    id: 'linked-list-cycle',
    title: 'Linked List Cycle',
    description: 'Given `head`, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail\'s `next` pointer is connected to. Note that `pos` is not passed as a parameter.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Linked List', 'Hash Table', 'Two Pointers'],
    template: `function hasCycle(head) {\n  // Write your code here\n};`
  },
  {
    id: 'lru-cache',
    title: 'LRU Cache',
    description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the `LRUCache` class.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Design', 'Hash Table', 'Linked List', 'Doubly-Linked List'],
    template: `class LRUCache {\n  constructor(capacity) {\n    // ...\n  }\n  get(key) {\n    // ...\n  }\n  put(key, value) {\n    // ...\n  }\n}`
  },
  {
    id: 'min-stack',
    title: 'Min Stack',
    description: 'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Stack', 'Design'],
    template: `class MinStack {\n  constructor() {\n    // ...\n  }\n  push(val) {\n    // ...\n  }\n  pop() {\n    // ...\n  }\n  top() {\n    // ...\n  }\n  getMin() {\n    // ...\n  }\n}`
  },
  {
    id: 'intersection-of-two-linked-lists',
    title: 'Intersection of Two Linked Lists',
    description: 'Given the heads of two singly linked-lists `headA` and `headB`, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return `null`.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Linked List', 'Hash Table', 'Two Pointers'],
    template: `function getIntersectionNode(headA, headB) {\n  // Write your code here\n};`
  },
  {
    id: 'majority-element',
    title: 'Majority Element',
    description: 'Given an array `nums` of size `n`, return the majority element. The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'Sorting', 'Counting'],
    template: `function majorityElement(nums) {\n  // Write your code here\n};`
  },
  {
    id: 'reverse-linked-list',
    title: 'Reverse Linked List',
    description: 'Given the `head` of a singly linked list, reverse the list, and return the reversed list.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Linked List', 'Recursion'],
    template: `function reverseList(head) {\n  // Write your code here\n};`
  },
  {
    id: 'contains-duplicate',
    title: 'Contains Duplicate',
    description: 'Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'Sorting'],
    template: `function containsDuplicate(nums) {\n  // Write your code here\n};`
  },
  {
    id: 'invert-binary-tree',
    title: 'Invert Binary Tree',
    description: 'Given the `root` of a binary tree, invert the tree, and return its root.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    template: `function invertTree(root) {\n  // Write your code here\n};`
  },
  {
    id: 'valid-anagram',
    title: 'Valid Anagram',
    description: 'Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Hash Table', 'Sorting'],
    template: `function isAnagram(s, t) {\n  // Write your code here\n};`
  },
  {
    id: 'product-of-array-except-self',
    title: 'Product of Array Except Self',
    description: 'Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`. The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Prefix Sum'],
    template: `function productExceptSelf(nums) {\n  // Write your code here\n};`
  },
  {
    id: 'lowest-common-ancestor-of-a-binary-search-tree',
    title: 'Lowest Common Ancestor of a Binary Search Tree',
    description: 'Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Binary Search Tree', 'Binary Tree'],
    template: `function lowestCommonAncestor(root, p, q) {\n  // Write your code here\n};`
  },
  {
    id: 'serialize-and-deserialize-binary-tree',
    title: 'Serialize and Deserialize Binary Tree',
    description: 'Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment. Design an algorithm to serialize and deserialize a binary tree.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Tree', 'String', 'Depth-First Search', 'Breadth-First Search', 'Design'],
    template: `/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n\n/**\n * Encodes a tree to a single string.\n *\n * @param {TreeNode} root\n * @return {string}\n */\nvar serialize = function(root) {\n    \n};\n\n/**\n * Decodes your encoded data to tree.\n *\n * @param {string} data\n * @return {TreeNode}\n */\nvar deserialize = function(data) {\n    \n};`
  },
  {
    id: 'coin-change',
    title: 'Coin Change',
    description: 'You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming', 'Breadth-First Search'],
    template: `function coinChange(coins, amount) {\n  // Write your code here\n};`
  },
  {
    id: 'longest-increasing-subsequence',
    title: 'Longest Increasing Subsequence',
    description: 'Given an integer array `nums`, return the length of the longest strictly increasing subsequence.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming', 'Binary Search'],
    template: `function lengthOfLIS(nums) {\n  // Write your code here\n};`
  },
  {
    id: 'trapping-rain-water',
    title: 'Trapping Rain Water',
    description: 'Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers', 'Dynamic Programming', 'Stack'],
    template: `function trap(height) {\n  // Write your code here\n};`
  },
  {
    id: 'find-median-from-data-stream',
    title: 'Find Median from Data Stream',
    description: 'The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values. Implement the MedianFinder class.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Design', 'Heap', 'Two Pointers', 'Data Stream'],
    template: `class MedianFinder {\n  constructor() {\n    // ...\n  }\n  addNum(num) {\n    // ...\n  }\n  findMedian() {\n    // ...\n  }\n}`
  }
];

export function getDailyChallenge(): Challenge {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
  const challengeIndex = dayOfYear % challenges.length;
  return challenges[challengeIndex];
}


export function getChallenge(id: string): Challenge | undefined {
  return challenges.find(c => c.id === id);
}

export function getAllChallenges(): Challenge[] {
  return challenges;
}
