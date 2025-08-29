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
  }
];

export function getDailyChallenge(): Challenge {
  // For now, we'll just return a random challenge from the list.
  // In a real app, this would be determined by the date.
  const randomIndex = Math.floor(Math.random() * challenges.length);
  return challenges[randomIndex];
}
