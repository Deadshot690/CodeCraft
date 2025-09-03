
export interface TestCase {
  input: any;
  expectedOutput: any;
}
export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  domain: 'DSA' | 'Web' | 'AI';
  tags: string[];
  languages: ('javascript' | 'python' | 'cpp' | 'java' | 'c' | 'typescript' | 'go' | 'csharp')[];
  templates: {
    javascript: string;
    python: string;
    cpp: string;
    java: string;
    c?: string;
    typescript?: string;
    go?: string;
    csharp?: string;
  };
  testCases: TestCase[];
}

export const challenges: Challenge[] = [
  {
    id: 'fizz-buzz',
    title: 'FizzBuzz',
    description: 'Given an integer `n`, return a string array `answer` (1-indexed) where:\n\n- `answer[i] == "FizzBuzz"` if `i` is divisible by 3 and 5.\n- `answer[i] == "Fizz"` if `i` is divisible by 3.\n- `answer[i] == "Buzz"` if `i` is divisible by 5.\n- `answer[i] == i` (as a string) if none of the above conditions are true.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'String', 'Math', 'Simulation'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function fizzBuzz(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def fizzBuzz(self, n: int) -> List[str]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<string> fizzBuzz(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<String> fizzBuzz(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
        { input: { n: 3 }, expectedOutput: ["1","2","Fizz"] },
        { input: { n: 5 }, expectedOutput: ["1","2","Fizz","4","Buzz"] },
        { input: { n: 15 }, expectedOutput: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"] },
    ]
  },
  {
    id: 'two-sum',
    title: 'Two Sum',
    description: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Hash Table'],
    languages: ['javascript', 'python', 'cpp', 'java', 'c', 'typescript', 'go', 'csharp'],
    templates: {
      javascript: `function twoSum(nums, target) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your code here\n    }\n}`,
      c: `#include <stdio.h>\n\n// Note: The return type and function signature might need adjustments based on the platform's specific requirements.\nint* twoSum(int* nums, int numsSize, int target, int* returnSize) {\n    // Write your code here\n    *returnSize = 2;\n    int* result = malloc(2 * sizeof(int));\n    // ...\n    return result;\n}`,
      typescript: `function twoSum(nums: number[], target: number): number[] {\n  // Write your code here\n};`,
      go: `package main\n\nfunc twoSum(nums []int, target int) []int {\n    // Write your code here\n}`,
      csharp: `public class Solution {\n    public int[] TwoSum(int[] nums, int target) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
        { input: { nums: [2, 7, 11, 15], target: 9 }, expectedOutput: [0, 1] },
        { input: { nums: [3, 2, 4], target: 6 }, expectedOutput: [1, 2] },
        { input: { nums: [3, 3], target: 6 }, expectedOutput: [0, 1] },
    ]
  },
  {
    id: 'reverse-string',
    title: 'Reverse String',
    description: 'Write a function that reverses a string. The input string is given as an array of characters `s`. You must do this by modifying the input array in-place with O(1) extra memory.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function reverseString(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void reverseString(char[] s) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
        { input: { s: ["h","e","l","l","o"] }, expectedOutput: ["o","l","l","e","h"] },
        { input: { s: ["H","a","n","n","a","h"] }, expectedOutput: ["h","a","n","n","a","H"] },
    ]
  },
  {
    id: 'palindrome-number',
    title: 'Palindrome Number',
    description: 'Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isPalindrome(x) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isPalindrome(self, x: int) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isPalindrome(int x) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isPalindrome(int x) {\n        // Write your code here\n    }\n}`
    },
     testCases: [
        { input: { x: 121 }, expectedOutput: true },
        { input: { x: -121 }, expectedOutput: false },
        { input: { x: 10 }, expectedOutput: false },
    ]
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    description: 'Given a string `s` containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Stack'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isValid(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isValid(self, s: str) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isValid(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isValid(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { s: "()" }, expectedOutput: true },
      { input: { s: "()[]{}" }, expectedOutput: true },
      { input: { s: "(]" }, expectedOutput: false },
    ]
  },
  {
    id: 'merge-sorted-lists',
    title: 'Merge Two Sorted Lists',
    description: 'You are given the heads of two sorted linked lists `list1` and `list2`. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Linked List', 'Recursion'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function mergeTwoLists(list1, list2) {\n  // Write your code here\n};`,
      python: `# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n        // Write your code here\n    }\n};`,
      java: `/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'longest-substring',
    title: 'Longest Substring Without Repeating Characters',
    description: 'Given a string `s`, find the length of the longest substring without repeating characters.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Hash Table', 'Sliding Window'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function lengthOfLongestSubstring(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your code here\n    }\n}`
    },
     testCases: [
        { input: { s: "abcabcbb" }, expectedOutput: 3 },
        { input: { s: "bbbbb" }, expectedOutput: 1 },
        { input: { s: "pwwkew" }, expectedOutput: 3 },
    ]
  },
  {
    id: 'max-subarray',
    title: 'Maximum Subarray',
    description: 'Given an integer array `nums`, find the subarray with the largest sum, and return its sum.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Divide and Conquer', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function maxSubArray(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int maxSubArray(int[] nums) {\n        // Write your code here\n    }\n}`
    },
     testCases: [
        { input: { nums: [-2,1,-3,4,-1,2,1,-5,4] }, expectedOutput: 6 },
        { input: { nums: [1] }, expectedOutput: 1 },
        { input: { nums: [5,4,-1,7,8] }, expectedOutput: 23 },
    ]
  },
  {
    id: 'inorder-traversal',
    title: 'Binary Tree Inorder Traversal',
    description: 'Given the `root` of a binary tree, return the inorder traversal of its nodes\' values.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function inorderTraversal(root) {\n  // Write your code here\n};`,
      python: `# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        # Write your code here\n`,
      cpp: `/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    vector<int> inorderTraversal(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'roman-to-integer',
    title: 'Roman to Integer',
    description: 'Given a roman numeral, convert it to an integer.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Hash Table', 'Math'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function romanToInt(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def romanToInt(self, s: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int romanToInt(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int romanToInt(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'longest-common-prefix',
    title: 'Longest Common Prefix',
    description: 'Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Trie'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function longestCommonPrefix(strs) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def longestCommonPrefix(self, strs: List[str]) -> str:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    string longestCommonPrefix(vector<string>& strs) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public String longestCommonPrefix(String[] strs) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'remove-duplicates-sorted-array',
    title: 'Remove Duplicates from Sorted Array',
    description: 'Given a sorted array `nums`, remove the duplicates in-place such that each element appears only once and returns the new length. Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function removeDuplicates(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int removeDuplicates(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'implement-strstr',
    title: 'Implement strStr()',
    description: 'Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function strStr(haystack, needle) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def strStr(self, haystack: str, needle: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int strStr(string haystack, string needle) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int strStr(String haystack, String needle) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'add-two-numbers',
    title: 'Add Two Numbers',
    description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Linked List', 'Math', 'Recursion'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function addTwoNumbers(l1, l2) {\n  // Write your code here\n};`,
      python: `# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n        // Write your code here\n    }\n};`,
      java: `/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: '3sum',
    title: '3Sum',
    description: 'Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function threeSum(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def threeSum(self, nums: List[int]) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'letter-combinations-phone-number',
    title: 'Letter Combinations of a Phone Number',
    description: 'Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Backtracking', 'Recursion'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function letterCombinations(digits) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def letterCombinations(self, digits: str) -> List[str]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<string> letterCombinations(string digits) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<String> letterCombinations(String digits) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'remove-nth-node-from-end',
    title: 'Remove Nth Node From End of List',
    description: 'Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Linked List', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function removeNthFromEnd(head, n) {\n  // Write your code here\n};`,
      python: `# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* removeNthFromEnd(ListNode* head, int n) {\n        // Write your code here\n    }\n};`,
      java: `/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode removeNthFromEnd(ListNode head, int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'generate-parentheses',
    title: 'Generate Parentheses',
    description: 'Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Backtracking', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function generateParenthesis(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def generateParenthesis(self, n: int) -> List[str]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<string> generateParenthesis(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<String> generateParenthesis(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'merge-k-sorted-lists',
    title: 'Merge k Sorted Lists',
    description: 'You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Linked List', 'Heap', 'Divide and Conquer'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function mergeKLists(lists) {\n  // Write your code here\n};`,
      python: `# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* mergeKLists(vector<ListNode*>& lists) {\n        // Write your code here\n    }\n};`,
      java: `/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'search-in-rotated-sorted-array',
    title: 'Search in Rotated Sorted Array',
    description: 'There is an integer array `nums` sorted in ascending order (with distinct values). Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index `k`. Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Binary Search'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function search(nums, target) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int search(int[] nums, int target) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'group-anagrams',
    title: 'Group Anagrams',
    description: 'Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'String', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function groupAnagrams(strs) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'jump-game',
    title: 'Jump Game',
    description: 'You are given an integer array `nums`. You are initially positioned at the array\'s first index, and each element in the array represents your maximum jump length at that position. Return `true` if you can reach the last index, or `false` otherwise.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Greedy', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function canJump(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def canJump(self, nums: List[int]) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool canJump(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean canJump(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'permutations',
    title: 'Permutations',
    description: 'Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Backtracking'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function permute(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def permute(self, nums: List[int]) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> permute(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> permute(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'rotate-image',
    title: 'Rotate Image',
    description: 'You are given an `n x n` 2D `matrix` representing an image. Rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Math', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function rotate(matrix) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def rotate(self, matrix: List[List[int]]) -> None:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void rotate(vector<vector<int>>& matrix) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void rotate(int[][] matrix) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'climbing-stairs',
    title: 'Climbing Stairs',
    description: 'You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'Dynamic Programming', 'Memoization'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function climbStairs(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def climbStairs(self, n: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int climbStairs(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int climbStairs(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'minimum-path-sum',
    title: 'Minimum Path Sum',
    description: 'Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. Note: You can only move either down or right at any point in time.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function minPathSum(grid) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def minPathSum(self, grid: List[List[int]]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int minPathSum(vector<vector<int>>& grid) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int minPathSum(int[][] grid) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'unique-paths',
    title: 'Unique Paths',
    description: 'There is a robot on an `m x n` grid. The robot is initially located at the top-left corner. The robot tries to move to the bottom-right corner. The robot can only move either down or right at any point in time. Given the two integers `m` and `n`, return the number of possible unique paths that the robot can take to reach the bottom-right corner.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Math', 'Dynamic Programming', 'Combinatorics'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function uniquePaths(m, n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int uniquePaths(int m, int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'word-search',
    title: 'Word Search',
    description: 'Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Backtracking', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function exist(board, word) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool exist(vector<vector<char>>& board, string word) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean exist(char[][] board, String word) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'subsets',
    title: 'Subsets',
    description: 'Given an integer array `nums` of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Backtracking', 'Bit Manipulation'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function subsets(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def subsets(self, nums: List[int]) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> subsets(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'binary-tree-level-order-traversal',
    title: 'Binary Tree Level Order Traversal',
    description: 'Given the `root` of a binary tree, return the level order traversal of its nodes\' values. (i.e., from left to right, level by level).',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Tree', 'Breadth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function levelOrder(root) {\n  // Write your code here\n};`,
      python: `# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    vector<vector<int>> levelOrder(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'maximum-depth-of-binary-tree',
    title: 'Maximum Depth of Binary Tree',
    description: 'Given the `root` of a binary tree, return its maximum depth. A binary tree\'s maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function maxDepth(root) {\n  // Write your code here\n};`,
      python: `# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        # Write your code here\n`,
      cpp: `/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    int maxDepth(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public int maxDepth(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'best-time-to-buy-and-sell-stock',
    title: 'Best Time to Buy and Sell Stock',
    description: 'You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function maxProfit(prices) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'valid-palindrome',
    title: 'Valid Palindrome',
    description: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isPalindrome(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isPalindrome(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isPalindrome(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'single-number',
    title: 'Single Number',
    description: 'Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Bit Manipulation'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function singleNumber(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int singleNumber(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'linked-list-cycle',
    title: 'Linked List Cycle',
    description: 'Given `head`, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail\'s `next` pointer is connected to. Note that `pos` is not passed as a parameter.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Linked List', 'Hash Table', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function hasCycle(head) {\n  // Write your code here\n};`,
      python: `# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        # Write your code here\n`,
      cpp: `/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode(int x) : val(x), next(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        // Write your code here\n    }\n};`,
      java: `/**\n * Definition for singly-linked list.\n * class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) {\n *         val = x;\n *         next = null;\n *     }\n * }\n */\npublic class Solution {\n    public boolean hasCycle(ListNode head) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'lru-cache',
    title: 'LRU Cache',
    description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the `LRUCache` class.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Design', 'Hash Table', 'Linked List', 'Doubly-Linked List'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `class LRUCache {\n  constructor(capacity) {\n    // ...\n  }\n  get(key) {\n    // ...\n  }\n  put(key, value) {\n    // ...\n  }\n}`,
      python: `class LRUCache:\n\n    def __init__(self, capacity: int):\n        # Write your code here\n\n    def get(self, key: int) -> int:\n        # Write your code here\n\n    def put(self, key: int, value: int) -> None:\n        # Write your code here\n`,
      cpp: `class LRUCache {\npublic:\n    LRUCache(int capacity) {\n        // Write your code here\n    }\n    \n    int get(int key) {\n        // Write your code here\n    }\n    \n    void put(int key, int value) {\n        // Write your code here\n    }\n};`,
      java: `class LRUCache {\n    public LRUCache(int capacity) {\n        // Write your code here\n    }\n    \n    public int get(int key) {\n        // Write your code here\n    }\n    \n    public void put(int key, int value) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'min-stack',
    title: 'Min Stack',
    description: 'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Stack', 'Design'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `class MinStack {\n  constructor() {\n    // ...\n  }\n  push(val) {\n    // ...\n  }\n  pop() {\n    // ...\n  }\n  top() {\n    // ...\n  }\n  getMin() {\n    // ...\n  }\n}`,
      python: `class MinStack:\n\n    def __init__(self):\n        # Write your code here\n\n    def push(self, val: int) -> None:\n        # Write your code here\n\n    def pop(self) -> None:\n        # Write your code here\n\n    def top(self) -> int:\n        # Write your code here\n\n    def getMin(self) -> int:\n        # Write your code here\n`,
      cpp: `class MinStack {\npublic:\n    MinStack() {\n        // Write your code here\n    }\n    \n    void push(int val) {\n        // Write your code here\n    }\n    \n    void pop() {\n        // Write your code here\n    }\n    \n    int top() {\n        // Write your code here\n    }\n    \n    int getMin() {\n        // Write your code here\n    }\n};`,
      java: `class MinStack {\n\n    public MinStack() {\n        // Write your code here\n    }\n    \n    public void push(int val) {\n        // Write your code here\n    }\n    \n    public void pop() {\n        // Write your code here\n    }\n    \n    public int top() {\n        // Write your code here\n    }\n    \n    public int getMin() {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'intersection-of-two-linked-lists',
    title: 'Intersection of Two Linked Lists',
    description: 'Given the heads of two singly linked-lists `headA` and `headB`, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return `null`.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Linked List', 'Hash Table', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function getIntersectionNode(headA, headB) {\n  // Write your code here\n};`,
      python: `# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode(int x) : val(x), next(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {\n        // Write your code here\n    }\n};`,
      java: `/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) {\n *         val = x;\n *         next = null;\n *     }\n * }\n */\npublic class Solution {\n    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'majority-element',
    title: 'Majority Element',
    description: 'Given an array `nums` of size `n`, return the majority element. The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'Sorting', 'Counting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function majorityElement(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def majorityElement(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int majorityElement(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'reverse-linked-list',
    title: 'Reverse Linked List',
    description: 'Given the `head` of a singly linked list, reverse the list, and return the reversed list.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Linked List', 'Recursion'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function reverseList(head) {\n  // Write your code here\n};`,
      python: `# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        // Write your code here\n    }\n};`,
      java: `/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode reverseList(ListNode head) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'contains-duplicate',
    title: 'Contains Duplicate',
    description: 'Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function containsDuplicate(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def containsDuplicate(self, nums: List[int]) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'invert-binary-tree',
    title: 'Invert Binary Tree',
    description: 'Given the `root` of a binary tree, invert the tree, and return its root.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function invertTree(root) {\n  // Write your code here\n};`,
      python: `# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        # Write your code here\n`,
      cpp: `/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public TreeNode invertTree(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'valid-anagram',
    title: 'Valid Anagram',
    description: 'Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Hash Table', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isAnagram(s, t) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isAnagram(String s, String t) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'product-of-array-except-self',
    title: 'Product of Array Except Self',
    description: 'Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`. The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Prefix Sum'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function productExceptSelf(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def productExceptSelf(self, nums: List[int]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> productExceptSelf(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'lowest-common-ancestor-of-a-binary-search-tree',
    title: 'Lowest Common Ancestor of a Binary Search Tree',
    description: 'Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Binary Search Tree', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function lowestCommonAncestor(root, p, q) {\n  // Write your code here\n};`,
      python: `# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        # Write your code here\n`,
      cpp: `/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n * };\n */\n\nclass Solution {\npublic:\n    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n        // Write your code here\n    }\n};`,
      java: `/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\n\nclass Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'serialize-and-deserialize-binary-tree',
    title: 'Serialize and Deserialize Binary Tree',
    description: 'Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment. Design an algorithm to serialize and deserialize a binary tree.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Tree', 'String', 'Depth-First Search', 'Breadth-First Search', 'Design'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n\n/**\n * Encodes a tree to a single string.\n *\n * @param {TreeNode} root\n * @return {string}\n */\nvar serialize = function(root) {\n    \n};\n\n/**\n * Decodes your encoded data to tree.\n *\n * @param {string} data\n * @return {TreeNode}\n */\nvar deserialize = function(data) {\n    \n};`,
      python: `# Definition for a binary tree node.\n# class TreeNode(object):\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Codec:\n\n    def serialize(self, root):\n        # Write your code here\n        \n\n    def deserialize(self, data):\n        # Write your code here\n`,
      cpp: `/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n * };\n */\nclass Codec {\npublic:\n\n    // Encodes a tree to a single string.\n    string serialize(TreeNode* root) {\n        // Write your code here\n    }\n\n    // Decodes your encoded data to tree.\n    TreeNode* deserialize(string data) {\n        // Write your code here\n    }\n};`,
      java: `/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class Codec {\n\n    // Encodes a tree to a single string.\n    public String serialize(TreeNode root) {\n        // Write your code here\n    }\n\n    // Decodes your encoded data to tree.\n    public TreeNode deserialize(String data) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'coin-change',
    title: 'Coin Change',
    description: 'You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming', 'Breadth-First Search'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function coinChange(coins, amount) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int coinChange(int[] coins, int amount) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'longest-increasing-subsequence',
    title: 'Longest Increasing Subsequence',
    description: 'Given an integer array `nums`, return the length of the longest strictly increasing subsequence.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming', 'Binary Search'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function lengthOfLIS(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def lengthOfLIS(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int lengthOfLIS(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int lengthOfLIS(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'trapping-rain-water',
    title: 'Trapping Rain Water',
    description: 'Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers', 'Dynamic Programming', 'Stack'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function trap(height) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def trap(self, height: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int trap(vector<int>& height) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int trap(int[] height) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'find-median-from-data-stream',
    title: 'Find Median from Data Stream',
    description: 'The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values. Implement the MedianFinder class.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Design', 'Heap', 'Two Pointers', 'Data Stream'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `class MedianFinder {\n  constructor() {\n    // ...\n  }\n  addNum(num) {\n    // ...\n  }\n  findMedian() {\n    // ...\n  }\n}`,
      python: `class MedianFinder:\n\n    def __init__(self):\n        # Write your code here\n\n    def addNum(self, num: int) -> None:\n        # Write your code here\n\n    def findMedian(self) -> float:\n        # Write your code here\n`,
      cpp: `class MedianFinder {\npublic:\n    MedianFinder() {\n        // Write your code here\n    }\n    \n    void addNum(int num) {\n        // Write your code here\n    }\n    \n    double findMedian() {\n        // Write your code here\n    }\n};`,
      java: `class MedianFinder {\n\n    public MedianFinder() {\n        // Write your code here\n    }\n    \n    public void addNum(int num) {\n        // Write your code here\n    }\n    \n    public double findMedian() {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'container-with-most-water',
    title: 'Container With Most Water',
    description: 'You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers', 'Greedy'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function maxArea(height) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def maxArea(self, height: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int maxArea(int[] height) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'merge-intervals',
    title: 'Merge Intervals',
    description: 'Given an array of `intervals` where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function merge(intervals) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def merge(self, intervals: List[List[int]]) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[][] merge(int[][] intervals) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'sort-colors',
    title: 'Sort Colors',
    description: 'Given an array `nums` with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively. You must solve this problem without using the library\'s sort function.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function sortColors(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def sortColors(self, nums: List[int]) -> None:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void sortColors(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'validate-binary-search-tree',
    title: 'Validate Binary Search Tree',
    description: 'Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Binary Search Tree', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isValidBST(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isValidBST(self, root: Optional[TreeNode]) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isValidBST(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isValidBST(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'kth-smallest-element-in-a-bst',
    title: 'Kth Smallest Element in a BST',
    description: 'Given the `root` of a binary search tree, and an integer `k`, return the `kth` smallest value (1-indexed) of all the values of the nodes in the tree.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Binary Search Tree', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function kthSmallest(root, k) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int kthSmallest(TreeNode* root, int k) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int kthSmallest(TreeNode root, int k) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'construct-binary-tree-from-preorder-and-inorder-traversal',
    title: 'Construct Binary Tree from Preorder and Inorder Traversal',
    description: 'Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return the binary tree.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'Divide and Conquer', 'Tree', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function buildTree(preorder, inorder) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public TreeNode buildTree(int[] preorder, int[] inorder) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'word-break',
    title: 'Word Break',
    description: 'Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words. Note that the same word in the dictionary may be reused multiple times in the segmentation.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'String', 'Dynamic Programming', 'Trie', 'Memoization'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function wordBreak(s, wordDict) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def wordBreak(self, s: str, wordDict: List[str]) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool wordBreak(string s, vector<string>& wordDict) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean wordBreak(String s, List<String> wordDict) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'course-schedule',
    title: 'Course Schedule',
    description: 'There are a total of `numCourses` courses you have to take, labeled from 0 to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a_i, b_i]` indicates that you must take course `b_i` first if you want to take course `a_i`. Return `true` if you can finish all courses. Otherwise, return `false`.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Depth-First Search', 'Breadth-First Search', 'Graph', 'Topological Sort'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function canFinish(numCourses, prerequisites) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'implement-trie-prefix-tree',
    title: 'Implement Trie (Prefix Tree)',
    description: 'A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker. Implement the Trie class.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Hash Table', 'String', 'Design', 'Trie'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `class Trie {\n  constructor() {\n    // ...\n  }\n  insert(word) {\n    // ...\n  }\n  search(word) {\n    // ...\n  }\n  startsWith(prefix) {\n    // ...\n  }\n}`,
      python: `class Trie:\n\n    def __init__(self):\n        # Write your code here\n\n    def insert(self, word: str) -> None:\n        # Write your code here\n\n    def search(self, word: str) -> bool:\n        # Write your code here\n\n    def startsWith(self, prefix: str) -> bool:\n        # Write your code here\n`,
      cpp: `class Trie {\npublic:\n    Trie() {\n        // Write your code here\n    }\n    \n    void insert(string word) {\n        // Write your code here\n    }\n    \n    bool search(string word) {\n        // Write your code here\n    }\n    \n    bool startsWith(string prefix) {\n        // Write your code here\n    }\n};`,
      java: `class Trie {\n\n    public Trie() {\n        // Write your code here\n    }\n    \n    public void insert(String word) {\n        // Write your code here\n    }\n    \n    public boolean search(String word) {\n        // Write your code here\n    }\n    \n    public boolean startsWith(String prefix) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'find-all-anagrams-in-a-string',
    title: 'Find All Anagrams in a String',
    description: 'Given two strings `s` and `p`, return an array of all the start indices of `p`\'s anagrams in `s`. You may return the answer in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Hash Table', 'String', 'Sliding Window'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findAnagrams(s, p) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findAnagrams(self, s: str, p: str) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> findAnagrams(string s, string p) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<Integer> findAnagrams(String s, String p) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'word-ladder',
    title: 'Word Ladder',
    description: 'A transformation sequence from word `beginWord` to `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that: Every adjacent pair of words differs by a single letter. Every `si` for `1 <= i <= k` is in `wordList`. Note that `beginWord` does not need to be in `wordList`. `sk == endWord`. Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return the number of words in the shortest transformation sequence from `beginWord` to `endWord`, or 0 if no such sequence exists.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Hash Table', 'String', 'Breadth-First Search'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function ladderLength(beginWord, endWord, wordList) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int ladderLength(String beginWord, String endWord, List<String> wordList) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'median-of-two-sorted-arrays',
    title: 'Median of Two Sorted Arrays',
    description: 'Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Array', 'Binary Search', 'Divide and Conquer'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'regular-expression-matching',
    title: 'Regular Expression Matching',
    description: 'Given an input string `s` and a pattern `p`, implement regular expression matching with support for \'.\' and \'*\' where: \'.\' Matches any single character. \'*\' Matches zero or more of the preceding element. The matching should cover the entire input string (not partial).',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['String', 'Dynamic Programming', 'Recursion'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isMatch(s, p) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isMatch(self, s: str, p: str) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isMatch(string s, string p) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isMatch(String s, String p) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'binary-tree-maximum-path-sum',
    title: 'Binary Tree Maximum Path Sum',
    description: 'A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root. The path sum of a path is the sum of the node\'s values in the path. Given the `root` of a binary tree, return the maximum path sum of any non-empty path.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Binary Tree', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function maxPathSum(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def maxPathSum(self, root: Optional[TreeNode]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int maxPathSum(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int maxPathSum(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'longest-consecutive-sequence',
    title: 'Longest Consecutive Sequence',
    description: 'Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'Union Find'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function longestConsecutive(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def longestConsecutive(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int longestConsecutive(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int longestConsecutive(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'plus-one',
    title: 'Plus One',
    description: 'You are given a large integer represented as an integer array `digits`, where each `digits[i]` is the `ith` digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0\'s. Increment the large integer by one and return the resulting array of digits.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Math'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function plusOne(digits) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def plusOne(self, digits: List[int]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> plusOne(vector<int>& digits) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[] plusOne(int[] digits) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { digits: [1, 2, 3] }, expectedOutput: [1, 2, 4] },
      { input: { digits: [4, 3, 2, 1] }, expectedOutput: [4, 3, 2, 2] },
      { input: { digits: [9] }, expectedOutput: [1, 0] }
    ]
  },
  {
    id: 'sqrtx',
    title: 'Sqrt(x)',
    description: 'Given a non-negative integer `x`, compute and return the square root of `x`. Since the return type is an integer, the decimal part is truncated, and only the integer part of the result is returned.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'Binary Search'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function mySqrt(x) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def mySqrt(self, x: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int mySqrt(int x) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int mySqrt(int x) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { x: 4 }, expectedOutput: 2 },
      { input: { x: 8 }, expectedOutput: 2 },
      { input: { x: 0 }, expectedOutput: 0 }
    ]
  },
  {
    id: 'remove-element',
    title: 'Remove Element',
    description: 'Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function removeElement(nums, val) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def removeElement(self, nums: List[int], val: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int removeElement(vector<int>& nums, int val) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int removeElement(int[] nums, int val) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [3, 2, 2, 3], val: 3 }, expectedOutput: 2 },
      { input: { nums: [0, 1, 2, 2, 3, 0, 4, 2], val: 2 }, expectedOutput: 5 }
    ]
  },
  {
    id: 'search-insert-position',
    title: 'Search Insert Position',
    description: 'Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Binary Search'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function searchInsert(nums, target) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def searchInsert(self, nums: List[int], target: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int searchInsert(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int searchInsert(int[] nums, int target) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [1, 3, 5, 6], target: 5 }, expectedOutput: 2 },
      { input: { nums: [1, 3, 5, 6], target: 2 }, expectedOutput: 1 },
      { input: { nums: [1, 3, 5, 6], target: 7 }, expectedOutput: 4 }
    ]
  },
  {
    id: 'length-of-last-word',
    title: 'Length of Last Word',
    description: 'Given a string `s` consisting of words and spaces, return the length of the last word in the string.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function lengthOfLastWord(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def lengthOfLastWord(self, s: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int lengthOfLastWord(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int lengthOfLastWord(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { s: "Hello World" }, expectedOutput: 5 },
      { input: { s: "   fly me   to   the moon  " }, expectedOutput: 4 },
      { input: { s: "luffy is still joyboy" }, expectedOutput: 6 }
    ]
  },
  {
    id: 'add-binary',
    title: 'Add Binary',
    description: 'Given two binary strings `a` and `b`, return their sum as a binary string.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'String', 'Bit Manipulation', 'Simulation'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function addBinary(a, b) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def addBinary(self, a: str, b: str) -> str:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    string addBinary(string a, string b) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public String addBinary(String a, String b) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { a: "11", b: "1" }, expectedOutput: "100" },
      { input: { a: "1010", b: "1011" }, expectedOutput: "10101" }
    ]
  },
  {
    id: 'pascals-triangle',
    title: 'Pascal\'s Triangle',
    description: 'Given an integer `numRows`, return the first numRows of Pascal\'s triangle.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function generate(numRows) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def generate(self, numRows: int) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> generate(int numRows) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> generate(int numRows) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { numRows: 5 }, expectedOutput: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]] },
      { input: { numRows: 1 }, expectedOutput: [[1]] }
    ]
  },
  {
    id: 'pascals-triangle-ii',
    title: 'Pascal\'s Triangle II',
    description: 'Given an integer `rowIndex`, return the `rowIndex`th (0-indexed) row of the Pascal\'s triangle.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function getRow(rowIndex) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def getRow(self, rowIndex: int) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> getRow(int rowIndex) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<Integer> getRow(int rowIndex) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { rowIndex: 3 }, expectedOutput: [1, 3, 3, 1] },
      { input: { rowIndex: 0 }, expectedOutput: [1] },
      { input: { rowIndex: 1 }, expectedOutput: [1, 1] }
    ]
  },
  {
    id: 'single-number-ii',
    title: 'Single Number II',
    description: 'Given an integer array `nums` where every element appears three times except for one, which appears exactly once. Find the single element and return it.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Bit Manipulation'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function singleNumber(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int singleNumber(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [2, 2, 3, 2] }, expectedOutput: 3 },
      { input: { nums: [0, 1, 0, 1, 0, 1, 99] }, expectedOutput: 99 }
    ]
  },
  {
    id: 'symmetric-tree',
    title: 'Symmetric Tree',
    description: 'Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isSymmetric(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isSymmetric(self, root: Optional[TreeNode]) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isSymmetric(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isSymmetric(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'balanced-binary-tree',
    title: 'Balanced Binary Tree',
    description: 'Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isBalanced(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isBalanced(self, root: Optional[TreeNode]) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isBalanced(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isBalanced(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'minimum-depth-of-binary-tree',
    title: 'Minimum Depth of Binary Tree',
    description: 'Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function minDepth(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def minDepth(self, root: Optional[TreeNode]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int minDepth(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int minDepth(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'path-sum',
    title: 'Path Sum',
    description: 'Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function hasPathSum(root, targetSum) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool hasPathSum(TreeNode* root, int targetSum) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean hasPathSum(TreeNode root, int targetSum) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'binary-tree-preorder-traversal',
    title: 'Binary Tree Preorder Traversal',
    description: 'Given the `root` of a binary tree, return the preorder traversal of its nodes\' values.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Stack', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function preorderTraversal(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> preorderTraversal(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<Integer> preorderTraversal(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'binary-tree-postorder-traversal',
    title: 'Binary Tree Postorder Traversal',
    description: 'Given the `root` of a binary tree, return the postorder traversal of its nodes\' values.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Stack', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function postorderTraversal(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> postorderTraversal(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<Integer> postorderTraversal(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'excel-sheet-column-title',
    title: 'Excel Sheet Column Title',
    description: 'Given an integer `columnNumber`, return its corresponding column title as it appears in an Excel sheet.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'String'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function convertToTitle(columnNumber) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def convertToTitle(self, columnNumber: int) -> str:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    string convertToTitle(int columnNumber) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public String convertToTitle(int columnNumber) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { columnNumber: 1 }, expectedOutput: "A" },
      { input: { columnNumber: 28 }, expectedOutput: "AB" },
      { input: { columnNumber: 701 }, expectedOutput: "ZY" }
    ]
  },
  {
    id: 'excel-sheet-column-number',
    title: 'Excel Sheet Column Number',
    description: 'Given a string `columnTitle` that represents the column title as it appears in an Excel sheet, return its corresponding column number.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'String'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function titleToNumber(columnTitle) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def titleToNumber(self, columnTitle: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int titleToNumber(string columnTitle) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int titleToNumber(String columnTitle) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { columnTitle: "A" }, expectedOutput: 1 },
      { input: { columnTitle: "AB" }, expectedOutput: 28 },
      { input: { columnTitle: "ZY" }, expectedOutput: 701 }
    ]
  },
  {
    id: 'factorial-trailing-zeroes',
    title: 'Factorial Trailing Zeroes',
    description: 'Given an integer `n`, return the number of trailing zeroes in `n!`.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Math'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function trailingZeroes(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def trailingZeroes(self, n: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int trailingZeroes(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int trailingZeroes(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { n: 3 }, expectedOutput: 0 },
      { input: { n: 5 }, expectedOutput: 1 },
      { input: { n: 0 }, expectedOutput: 0 }
    ]
  },
  {
    id: 'rotate-array',
    title: 'Rotate Array',
    description: 'Given an array, rotate the array to the right by `k` steps, where `k` is non-negative.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Math', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function rotate(nums, k) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def rotate(self, nums: List[int], k: int) -> None:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void rotate(vector<int>& nums, int k) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void rotate(int[] nums, int k) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'reverse-bits',
    title: 'Reverse Bits',
    description: 'Reverse bits of a given 32 bits unsigned integer.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Bit Manipulation', 'Divide and Conquer'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function reverseBits(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def reverseBits(self, n: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    uint32_t reverseBits(uint32_t n) {\n        // Write your code here\n    }\n};`,
      java: `public class Solution {\n    public int reverseBits(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'number-of-1-bits',
    title: 'Number of 1 Bits',
    description: 'Write a function that takes an unsigned integer and returns the number of \'1\' bits it has (also known as the Hamming weight).',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Bit Manipulation', 'Divide and Conquer'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function hammingWeight(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def hammingWeight(self, n: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int hammingWeight(uint32_t n) {\n        // Write your code here\n    }\n};`,
      java: `public class Solution {\n    public int hammingWeight(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'house-robber',
    title: 'House Robber',
    description: 'You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function rob(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def rob(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int rob(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int rob(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [1, 2, 3, 1] }, expectedOutput: 4 },
      { input: { nums: [2, 7, 9, 3, 1] }, expectedOutput: 12 }
    ]
  },
  {
    id: 'happy-number',
    title: 'Happy Number',
    description: 'Write an algorithm to determine if a number `n` is happy. A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits. Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Hash Table', 'Math', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isHappy(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isHappy(self, n: int) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isHappy(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isHappy(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { n: 19 }, expectedOutput: true },
      { input: { n: 2 }, expectedOutput: false }
    ]
  },
  {
    id: 'remove-linked-list-elements',
    title: 'Remove Linked List Elements',
    description: 'Given the `head` of a linked list and an integer `val`, remove all the nodes of the linked list that has `Node.val == val`, and return the new head.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Linked List', 'Recursion'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function removeElements(head, val) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    ListNode* removeElements(ListNode* head, int val) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public ListNode removeElements(ListNode head, int val) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'count-primes',
    title: 'Count Primes',
    description: 'Given an integer `n`, return the number of prime numbers that are strictly less than `n`.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Math', 'Enumeration', 'Number Theory'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function countPrimes(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def countPrimes(self, n: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int countPrimes(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int countPrimes(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { n: 10 }, expectedOutput: 4 },
      { input: { n: 0 }, expectedOutput: 0 },
      { input: { n: 1 }, expectedOutput: 0 }
    ]
  },
  {
    id: 'isomorphic-strings',
    title: 'Isomorphic Strings',
    description: 'Given two strings `s` and `t`, determine if they are isomorphic. Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Hash Table'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isIsomorphic(s, t) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isIsomorphic(self, s: str, t: str) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isIsomorphic(string s, string t) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isIsomorphic(String s, String t) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { s: "egg", t: "add" }, expectedOutput: true },
      { input: { s: "foo", t: "bar" }, expectedOutput: false },
      { input: { s: "paper", t: "title" }, expectedOutput: true }
    ]
  },
  {
    id: 'power-of-two',
    title: 'Power of Two',
    description: 'Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'Bit Manipulation', 'Recursion'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isPowerOfTwo(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isPowerOfTwo(self, n: int) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isPowerOfTwo(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isPowerOfTwo(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { n: 1 }, expectedOutput: true },
      { input: { n: 16 }, expectedOutput: true },
      { input: { n: 3 }, expectedOutput: false }
    ]
  },
  {
    id: 'palindrome-linked-list',
    title: 'Palindrome Linked List',
    description: 'Given the `head` of a singly linked list, return `true` if it is a palindrome.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Linked List', 'Two Pointers', 'Stack', 'Recursion'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isPalindrome(head) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isPalindrome(self, head: Optional[ListNode]) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isPalindrome(ListNode* head) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isPalindrome(ListNode head) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'implement-queue-using-stacks',
    title: 'Implement Queue using Stacks',
    description: 'Implement a first in, first out (FIFO) queue using only two stacks.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Stack', 'Design', 'Queue'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `class MyQueue {\n  constructor() {\n    // ...\n  }\n  push(x) {\n    // ...\n  }\n  pop() {\n    // ...\n  }\n  peek() {\n    // ...\n  }\n  empty() {\n    // ...\n  }\n}`,
      python: `class MyQueue:\n    def __init__(self):\n        # ...\n\n    def push(self, x: int) -> None:\n        # ...\n\n    def pop(self) -> int:\n        # ...\n\n    def peek(self) -> int:\n        # ...\n\n    def empty(self) -> bool:\n        # ...\n`,
      cpp: `class MyQueue {\npublic:\n    MyQueue() {\n        // ...\n    }\n    \n    void push(int x) {\n        // ...\n    }\n    \n    int pop() {\n        // ...\n    }\n    \n    int peek() {\n        // ...\n    }\n    \n    bool empty() {\n        // ...\n    }\n};`,
      java: `class MyQueue {\n    public MyQueue() {\n        // ...\n    }\n    \n    public void push(int x) {\n        // ...\n    }\n    \n    public int pop() {\n        // ...\n    }\n    \n    public int peek() {\n        // ...\n    }\n    \n    public boolean empty() {\n        // ...\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'implement-stack-using-queues',
    title: 'Implement Stack using Queues',
    description: 'Implement a last-in, first-out (LIFO) stack using only two queues.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Stack', 'Design', 'Queue'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `class MyStack {\n  constructor() {\n    // ...\n  }\n  push(x) {\n    // ...\n  }\n  pop() {\n    // ...\n  }\n  top() {\n    // ...\n  }\n  empty() {\n    // ...\n  }\n}`,
      python: `class MyStack:\n    def __init__(self):\n        # ...\n\n    def push(self, x: int) -> None:\n        # ...\n\n    def pop(self) -> int:\n        # ...\n\n    def top(self) -> int:\n        # ...\n\n    def empty(self) -> bool:\n        # ...\n`,
      cpp: `class MyStack {\npublic:\n    MyStack() {\n        // ...\n    }\n    \n    void push(int x) {\n        // ...\n    }\n    \n    int pop() {\n        // ...\n    }\n    \n    int top() {\n        // ...\n    }\n    \n    bool empty() {\n        // ...\n    }\n};`,
      java: `class MyStack {\n    public MyStack() {\n        // ...\n    }\n    \n    public void push(int x) {\n        // ...\n    }\n    \n    public int pop() {\n        // ...\n    }\n    \n    public int top() {\n        // ...\n    }\n    \n    public boolean empty() {\n        // ...\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'missing-number',
    title: 'Missing Number',
    description: 'Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'Math', 'Bit Manipulation', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function missingNumber(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def missingNumber(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int missingNumber(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [3, 0, 1] }, expectedOutput: 2 },
      { input: { nums: [0, 1] }, expectedOutput: 2 },
      { input: { nums: [9, 6, 4, 2, 3, 5, 7, 0, 1] }, expectedOutput: 8 }
    ]
  },
  {
    id: 'move-zeroes',
    title: 'Move Zeroes',
    description: 'Given an integer array `nums`, move all `0`\'s to the end of it while maintaining the relative order of the non-zero elements.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function moveZeroes(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def moveZeroes(self, nums: List[int]) -> None:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void moveZeroes(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void moveZeroes(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'first-bad-version',
    title: 'First Bad Version',
    description: 'You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Each version is developed based on the previous version, so all the versions after a bad version are also bad. Suppose you have `n` versions `[1, 2, ..., n]` and you want to find out the first bad one, which causes all the following ones to be bad. You are given an API `bool isBadVersion(version)` which returns whether `version` is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Binary Search', 'Interactive'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `/**\n * Definition for isBadVersion()\n * \n * @param {integer} version number\n * @return {boolean} whether the version is bad\n * isBadVersion = function(version) { ... };\n */\n\nfunction solution(isBadVersion) {\n    return function(n) {\n        // Write your code here\n    };\n};`,
      python: `# The isBadVersion API is already defined for you.\n# def isBadVersion(version: int) -> bool:\n\nclass Solution:\n    def firstBadVersion(self, n: int) -> int:\n        # Write your code here\n`,
      cpp: `// The API isBadVersion is defined for you.\n// bool isBadVersion(int version);\n\nclass Solution {\npublic:\n    int firstBadVersion(int n) {\n        // Write your code here\n    }\n};`,
      java: `/* The isBadVersion API is defined in the parent class VersionControl.\n      boolean isBadVersion(int version); */\n\npublic class Solution extends VersionControl {\n    public int firstBadVersion(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'word-pattern',
    title: 'Word Pattern',
    description: 'Given a `pattern` and a string `s`, find if `s` follows the same pattern. Here follow means a full match, such that there is a bijection between a letter in `pattern` and a non-empty word in `s`.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Hash Table'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function wordPattern(pattern, s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def wordPattern(self, pattern: str, s: str) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool wordPattern(string pattern, string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean wordPattern(String pattern, String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { pattern: "abba", s: "dog cat cat dog" }, expectedOutput: true },
      { input: { pattern: "abba", s: "dog cat cat fish" }, expectedOutput: false },
      { input: { pattern: "aaaa", s: "dog cat cat dog" }, expectedOutput: false }
    ]
  },
  {
    id: 'ugly-number',
    title: 'Ugly Number',
    description: 'An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5. Given an integer `n`, return `true` if `n` is an ugly number.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isUgly(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isUgly(self, n: int) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isUgly(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isUgly(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { n: 6 }, expectedOutput: true },
      { input: { n: 1 }, expectedOutput: true },
      { input: { n: 14 }, expectedOutput: false }
    ]
  },
  {
    id: 'add-digits',
    title: 'Add Digits',
    description: 'Given an integer `num`, repeatedly add all its digits until the result has only one digit, and return it.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'Simulation', 'Number Theory'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function addDigits(num) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def addDigits(self, num: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int addDigits(int num) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int addDigits(int num) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { num: 38 }, expectedOutput: 2 },
      { input: { num: 0 }, expectedOutput: 0 }
    ]
  },
  {
    id: 'intersection-of-two-arrays',
    title: 'Intersection of Two Arrays',
    description: 'Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'Two Pointers', 'Binary Search', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function intersection(nums1, nums2) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[] intersection(int[] nums1, int[] nums2) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums1: [1, 2, 2, 1], nums2: [2, 2] }, expectedOutput: [2] },
      { input: { nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4] }, expectedOutput: [9, 4] }
    ]
  },
  {
    id: 'intersection-of-two-arrays-ii',
    title: 'Intersection of Two Arrays II',
    description: 'Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'Two Pointers', 'Binary Search', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function intersect(nums1, nums2) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[] intersect(int[] nums1, int[] nums2) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums1: [1, 2, 2, 1], nums2: [2, 2] }, expectedOutput: [2, 2] },
      { input: { nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4] }, expectedOutput: [4, 9] }
    ]
  },
  {
    id: 'power-of-three',
    title: 'Power of Three',
    description: 'Given an integer `n`, return `true` if it is a power of three. Otherwise, return `false`.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'Recursion'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isPowerOfThree(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isPowerOfThree(self, n: int) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isPowerOfThree(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isPowerOfThree(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { n: 27 }, expectedOutput: true },
      { input: { n: 0 }, expectedOutput: false },
      { input: { n: 9 }, expectedOutput: true }
    ]
  },
  {
    id: 'power-of-four',
    title: 'Power of Four',
    description: 'Given an integer `n`, return `true` if it is a power of four. Otherwise, return `false`.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'Bit Manipulation', 'Recursion'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isPowerOfFour(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isPowerOfFour(self, n: int) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isPowerOfFour(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isPowerOfFour(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { n: 16 }, expectedOutput: true },
      { input: { n: 5 }, expectedOutput: false },
      { input: { n: 1 }, expectedOutput: true }
    ]
  },
  {
    id: 'reverse-vowels-of-a-string',
    title: 'Reverse Vowels of a String',
    description: 'Given a string `s`, reverse only all the vowels in the string and return it.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function reverseVowels(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def reverseVowels(self, s: str) -> str:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    string reverseVowels(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public String reverseVowels(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { s: "hello" }, expectedOutput: "holle" },
      { input: { s: "leetcode" }, expectedOutput: "leotcede" }
    ]
  },
  {
    id: 'valid-perfect-square',
    title: 'Valid Perfect Square',
    description: 'Given a positive integer `num`, return `true` if `num` is a perfect square or `false` otherwise.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'Binary Search'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isPerfectSquare(num) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isPerfectSquare(self, num: int) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isPerfectSquare(int num) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isPerfectSquare(int num) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { num: 16 }, expectedOutput: true },
      { input: { num: 14 }, expectedOutput: false }
    ]
  },
  {
    id: 'find-the-difference',
    title: 'Find the Difference',
    description: 'You are given two strings `s` and `t`. String `t` is generated by random shuffling string `s` and then add one more letter at a random position. Return the letter that was added to `t`.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Hash Table', 'Bit Manipulation', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findTheDifference(s, t) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findTheDifference(self, s: str, t: str) -> str:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    char findTheDifference(string s, string t) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public char findTheDifference(String s, String t) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { s: "abcd", t: "abcde" }, expectedOutput: "e" },
      { input: { s: "", t: "y" }, expectedOutput: "y" }
    ]
  },
  {
    id: 'is-subsequence',
    title: 'Is Subsequence',
    description: 'Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Two Pointers', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isSubsequence(s, t) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isSubsequence(self, s: str, t: str) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isSubsequence(string s, string t) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isSubsequence(String s, String t) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { s: "abc", t: "ahbgdc" }, expectedOutput: true },
      { input: { s: "axc", t: "ahbgdc" }, expectedOutput: false }
    ]
  },
  {
    id: 'first-unique-character-in-a-string',
    title: 'First Unique Character in a String',
    description: 'Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return -1.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Hash Table', 'Queue', 'Counting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function firstUniqChar(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def firstUniqChar(self, s: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int firstUniqChar(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int firstUniqChar(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { s: "leetcode" }, expectedOutput: 0 },
      { input: { s: "loveleetcode" }, expectedOutput: 2 },
      { input: { s: "aabb" }, expectedOutput: -1 }
    ]
  },
  {
    id: 'ransom-note',
    title: 'Ransom Note',
    description: 'Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed from `magazine` and `false` otherwise. Each letter in `magazine` can only be used once in `ransomNote`.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Hash Table', 'Counting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function canConstruct(ransomNote, magazine) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def canConstruct(self, ransomNote: str, magazine: str) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool canConstruct(string ransomNote, string magazine) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean canConstruct(String ransomNote, String magazine) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { ransomNote: "a", magazine: "b" }, expectedOutput: false },
      { input: { ransomNote: "aa", magazine: "ab" }, expectedOutput: false },
      { input: { ransomNote: "aa", magazine: "aab" }, expectedOutput: true }
    ]
  },
  {
    id: 'binary-watch',
    title: 'Binary Watch',
    description: 'A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59). Each LED represents a zero or a one, with the least significant bit on the right. Given an integer `turnedOn` which represents the number of LEDs that are currently on, return all possible times the watch can represent.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Backtracking', 'Bit Manipulation'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function readBinaryWatch(turnedOn) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def readBinaryWatch(self, turnedOn: int) -> List[str]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<string> readBinaryWatch(int turnedOn) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<String> readBinaryWatch(int turnedOn) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'sum-of-left-leaves',
    title: 'Sum of Left Leaves',
    description: 'Given the `root` of a binary tree, return the sum of all left leaves.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function sumOfLeftLeaves(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int sumOfLeftLeaves(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int sumOfLeftLeaves(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'fizz-buzz-multithreaded',
    title: 'Fizz Buzz Multithreaded',
    description: 'You have the four functions: `fizz`, `buzz`, `fizzbuzz` and `number`. The same instance of `FizzBuzz` will be passed to four different threads. Implement a multithreaded version of `FizzBuzz`.',
    difficulty: 'Medium',
    domain: 'AI',
    tags: ['Concurrency'],
    languages: ['python', 'cpp', 'java'],
    templates: {
      javascript: `// Not applicable`,
      python: `from threading import Semaphore\n\nclass FizzBuzz:\n    def __init__(self, n: int):\n        self.n = n\n\n    def fizz(self, printFizz: \'Callable[[], None]\') -> None:\n        # ...\n\n    def buzz(self, printBuzz: \'Callable[[], None]\') -> None:\n        # ...\n\n    def fizzbuzz(self, printFizzBuzz: \'Callable[[], None]\') -> None:\n        # ...\n\n    def number(self, printNumber: \'Callable[[int], None]\') -> None:\n        # ...`,
      cpp: `class FizzBuzz {\nprivate:\n    int n;\npublic:\n    FizzBuzz(int n) {\n        this->n = n;\n    }\n\n    void fizz(function<void()> printFizz) {\n        // ...\n    }\n\n    void buzz(function<void()> printBuzz) {\n        // ...\n    }\n\n    void fizzbuzz(function<void()> printFizzBuzz) {\n        // ...\n    }\n\n    void number(function<void(int)> printNumber) {\n        // ...\n    }\n};`,
      java: `class FizzBuzz {\n    private int n;\n\n    public FizzBuzz(int n) {\n        this.n = n;\n    }\n\n    public void fizz(Runnable printFizz) throws InterruptedException {\n        // ...\n    }\n\n    public void buzz(Runnable printBuzz) throws InterruptedException {\n        // ...\n    }\n\n    public void fizzbuzz(Runnable printFizzBuzz) throws InterruptedException {\n        // ...\n    }\n\n    public void number(IntConsumer printNumber) throws InterruptedException {\n        // ...\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'add-strings',
    title: 'Add Strings',
    description: 'Given two non-negative integers, `num1` and `num2` represented as string, return the sum of `num1` and `num2` as a string.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'String', 'Simulation'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function addStrings(num1, num2) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def addStrings(self, num1: str, num2: str) -> str:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    string addStrings(string num1, string num2) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public String addStrings(String num1, String num2) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { num1: '11', num2: '123' }, expectedOutput: '134' },
      { input: { num1: '456', num2: '77' }, expectedOutput: '533' },
      { input: { num1: '0', num2: '0' }, expectedOutput: '0' }
    ]
  },
  {
    id: 'number-of-segments-in-a-string',
    title: 'Number of Segments in a String',
    description: 'Given a string `s`, return the number of segments in the string. A segment is defined to be a contiguous sequence of non-space characters.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function countSegments(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def countSegments(self, s: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int countSegments(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int countSegments(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { s: 'Hello, my name is John' }, expectedOutput: 5 },
      { input: { s: 'Hello' }, expectedOutput: 1 },
      { input: { s: '   ' }, expectedOutput: 0 }
    ]
  },
  {
    id: 'arranging-coins',
    title: 'Arranging Coins',
    description: 'You have `n` coins and you want to build a staircase with these coins. The staircase consists of `k` rows where the `ith` row has exactly `i` coins. The last row of the staircase may be incomplete. Given the integer `n`, return the number of complete rows of the staircase you will build.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'Binary Search'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function arrangeCoins(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def arrangeCoins(self, n: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int arrangeCoins(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int arrangeCoins(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { n: 5 }, expectedOutput: 2 },
      { input: { n: 8 }, expectedOutput: 3 }
    ]
  },
  {
    id: 'find-all-numbers-disappeared-in-an-array',
    title: 'Find All Numbers Disappeared in an Array',
    description: 'Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return an array of all the integers in the range `[1, n]` that do not appear in `nums`.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Hash Table'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findDisappearedNumbers(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> findDisappearedNumbers(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<Integer> findDisappearedNumbers(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [4, 3, 2, 7, 8, 2, 3, 1] }, expectedOutput: [5, 6] },
      { input: { nums: [1, 1] }, expectedOutput: [2] }
    ]
  },
  {
    id: 'assign-cookies',
    title: 'Assign Cookies',
    description: 'Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. Each child `i` has a greed factor `g[i]`, which is the minimum size of a cookie that the child will be content with; and each cookie `j` has a size `s[j]`. If `s[j] >= g[i]`, we can assign the cookie `j` to the child `i`, and the child `i` will be content. Your goal is to maximize the number of your content children and output the maximum number.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Greedy', 'Sorting', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findContentChildren(g, s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findContentChildren(self, g: List[int], s: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int findContentChildren(vector<int>& g, vector<int>& s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int findContentChildren(int[] g, int[] s) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { g: [1, 2, 3], s: [1, 1] }, expectedOutput: 1 },
      { input: { g: [1, 2], s: [1, 2, 3] }, expectedOutput: 2 }
    ]
  },
  {
    id: 'island-perimeter',
    title: 'Island Perimeter',
    description: 'You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn\'t have "lakes" (water inside that isn\'t connected to the water surrounding the island). One cell is a square with side length 1. The grid is rectangular, width and height don\'t exceed 100. Determine the perimeter of the island.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Depth-First Search', 'Breadth-First Search', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function islandPerimeter(grid) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def islandPerimeter(self, grid: List[List[int]]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int islandPerimeter(vector<vector<int>>& grid) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int islandPerimeter(int[][] grid) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { grid: [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]] }, expectedOutput: 16 },
      { input: { grid: [[1]] }, expectedOutput: 4 },
      { input: { grid: [[1, 0]] }, expectedOutput: 4 }
    ]
  },
  {
    id: 'max-consecutive-ones',
    title: 'Max Consecutive Ones',
    description: 'Given a binary array `nums`, return the maximum number of consecutive 1s in the array.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findMaxConsecutiveOnes(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int findMaxConsecutiveOnes(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int findMaxConsecutiveOnes(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [1, 1, 0, 1, 1, 1] }, expectedOutput: 3 },
      { input: { nums: [1, 0, 1, 1, 0, 1] }, expectedOutput: 2 }
    ]
  },
  {
    id: 'next-greater-element-i',
    title: 'Next Greater Element I',
    description: 'The next greater element of some element `x` in an array is the first greater element that is to the right of `x` in the same array. You are given two distinct 0-indexed integer arrays `nums1` and `nums2`, where `nums1` is a subset of `nums2`. For each `0 <= i < nums1.length`, find the index `j` such that `nums1[i] == nums2[j]` and determine the next greater element of `nums2[j]` in `nums2`. If there is no next greater element, then the answer for this query is -1. Return an array `ans` of length `nums1.length` such that `ans[i]` is the next greater element as described above.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'Stack', 'Monotonic Stack'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function nextGreaterElement(nums1, nums2) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[] nextGreaterElement(int[] nums1, int[] nums2) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums1: [4, 1, 2], nums2: [1, 3, 4, 2] }, expectedOutput: [-1, 3, -1] },
      { input: { nums1: [2, 4], nums2: [1, 2, 3, 4] }, expectedOutput: [3, -1] }
    ]
  },
  {
    id: 'keyboard-row',
    title: 'Keyboard Row',
    description: 'Given an array of strings `words`, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'String'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findWords(words) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findWords(self, words: List[str]) -> List[str]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<string> findWords(vector<string>& words) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public String[] findWords(String[] words) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { words: ["Hello", "Alaska", "Dad", "Peace"] }, expectedOutput: ["Alaska", "Dad"] },
      { input: { words: ["omk"] }, expectedOutput: [] }
    ]
  },
  {
    id: 'two-sum-ii-input-array-is-sorted',
    title: 'Two Sum II - Input Array Is Sorted',
    description: 'Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`. Return the indices of the two numbers, `index1` and `index2`, added by one as an integer array `[index1, index2]` of length 2.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers', 'Binary Search'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function twoSum(numbers, target) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def twoSum(self, numbers: List[int], target: int) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> twoSum(vector<int>& numbers, int target) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[] twoSum(int[] numbers, int target) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { numbers: [2, 7, 11, 15], target: 9 }, expectedOutput: [1, 2] },
      { input: { numbers: [2, 3, 4], target: 6 }, expectedOutput: [1, 3] },
      { input: { numbers: [-1, 0], target: -1 }, expectedOutput: [1, 2] }
    ]
  },
  {
    id: '3sum-closest',
    title: '3Sum Closest',
    description: 'Given an integer array `nums` of length `n` and an integer `target`, find three integers in `nums` such that the sum is closest to `target`. Return the sum of the three integers. You may assume that each input would have exactly one solution.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function threeSumClosest(nums, target) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def threeSumClosest(self, nums: List[int], target: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int threeSumClosest(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int threeSumClosest(int[] nums, int target) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [-1, 2, 1, -4], target: 1 }, expectedOutput: 2 },
      { input: { nums: [0, 0, 0], target: 1 }, expectedOutput: 0 }
    ]
  },
  {
    id: '4sum',
    title: '4Sum',
    description: 'Given an array `nums` of `n` integers, return an array of all the unique quadruplets `[nums[a], nums[b], nums[c], nums[d]]` such that: `0 <= a, b, c, d < n`, `a`, `b`, `c`, and `d` are distinct, and `nums[a] + nums[b] + nums[c] + nums[d] == target`. You may return the answer in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function fourSum(nums, target) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> fourSum(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> fourSum(int[] nums, int target) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [1, 0, -1, 0, -2, 2], target: 0 }, expectedOutput: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]] },
      { input: { nums: [2, 2, 2, 2, 2], target: 8 }, expectedOutput: [[2, 2, 2, 2]] }
    ]
  },
  {
    id: 'valid-sudoku',
    title: 'Valid Sudoku',
    description: 'Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated according to the following rules: Each row must contain the digits 1-9 without repetition. Each column must contain the digits 1-9 without repetition. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits 1-9 without repetition.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isValidSudoku(board) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isValidSudoku(self, board: List[List[str]]) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isValidSudoku(vector<vector<char>>& board) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isValidSudoku(char[][] board) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'combination-sum',
    title: 'Combination Sum',
    description: 'Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of `candidates` where the chosen numbers sum to `target`. You may return the combinations in any order. The same number may be chosen from `candidates` an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Backtracking'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function combinationSum(candidates, target) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> combinationSum(int[] candidates, int target) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { candidates: [2, 3, 6, 7], target: 7 }, expectedOutput: [[2, 2, 3], [7]] },
      { input: { candidates: [2, 3, 5], target: 8 }, expectedOutput: [[2, 2, 2, 2], [2, 3, 3], [3, 5]] }
    ]
  },
  {
    id: 'combination-sum-ii',
    title: 'Combination Sum II',
    description: 'Given a collection of candidate numbers `candidates` and a target number `target`, find all unique combinations in `candidates` where the candidate numbers sum to `target`. Each number in `candidates` may only be used once in the combination.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Backtracking'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function combinationSum2(candidates, target) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> combinationSum2(int[] candidates, int target) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { candidates: [10, 1, 2, 7, 6, 1, 5], target: 8 }, expectedOutput: [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]] },
      { input: { candidates: [2, 5, 2, 1, 2], target: 5 }, expectedOutput: [[1, 2, 2], [5]] }
    ]
  },
  {
    id: 'permutations-ii',
    title: 'Permutations II',
    description: 'Given a collection of numbers, `nums`, that might contain duplicates, return all possible unique permutations in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Backtracking'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function permuteUnique(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def permuteUnique(self, nums: List[int]) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> permuteUnique(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> permuteUnique(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [1, 1, 2] }, expectedOutput: [[1, 1, 2], [1, 2, 1], [2, 1, 1]] },
      { input: { nums: [1, 2, 3] }, expectedOutput: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]] }
    ]
  },
  {
    id: 'rotate-list',
    title: 'Rotate List',
    description: 'Given the `head` of a linked list, rotate the list to the right by `k` places.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Linked List', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function rotateRight(head, k) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    ListNode* rotateRight(ListNode* head, int k) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public ListNode rotateRight(ListNode head, int k) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'unique-paths-ii',
    title: 'Unique Paths II',
    description: 'You are given an `m x n` integer array `grid`. There is a robot on an `m x n` grid. The robot is initially located at the top-left corner. The robot tries to move to the bottom-right corner. The robot can only move either down or right at any point in time. An obstacle and space are marked as `1` or `0` respectively in `grid`. A path that the robot takes cannot include any square that is an obstacle. Return the number of possible unique paths that the robot can take to reach the bottom-right corner.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function uniquePathsWithObstacles(obstacleGrid) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int uniquePathsWithObstacles(int[][] obstacleGrid) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { obstacleGrid: [[0, 0, 0], [0, 1, 0], [0, 0, 0]] }, expectedOutput: 2 },
      { input: { obstacleGrid: [[0, 1], [0, 0]] }, expectedOutput: 1 }
    ]
  },
  {
    id: 'simplify-path',
    title: 'Simplify Path',
    description: 'Given a string `path`, which is an absolute path (starting with a slash \'/\') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Stack'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function simplifyPath(path) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def simplifyPath(self, path: str) -> str:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    string simplifyPath(string path) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public String simplifyPath(String path) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { path: '/home/' }, expectedOutput: '/home' },
      { input: { path: '/../' }, expectedOutput: '/' },
      { input: { path: '/home//foo/' }, expectedOutput: '/home/foo' }
    ]
  },
  {
    id: 'set-matrix-zeroes',
    title: 'Set Matrix Zeroes',
    description: 'Given an `m x n` integer matrix `matrix`, if an element is 0, set its entire row and column to 0\'s. You must do it in-place.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function setZeroes(matrix) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def setZeroes(self, matrix: List[List[int]]) -> None:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void setZeroes(vector<vector<int>>& matrix) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void setZeroes(int[][] matrix) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'sort-list',
    title: 'Sort List',
    description: 'Given the `head` of a linked list, return the list after sorting it in ascending order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Linked List', 'Two Pointers', 'Divide and Conquer', 'Sorting', 'Merge Sort'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function sortList(head) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    ListNode* sortList(ListNode* head) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public ListNode sortList(ListNode head) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'linked-list-cycle-ii',
    title: 'Linked List Cycle II',
    description: 'Given the `head` of a linked list, return the node where the cycle begins. If there is no cycle, return `null`.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Linked List', 'Hash Table', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function detectCycle(head) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    ListNode *detectCycle(ListNode *head) {\n        // Write your code here\n    }\n};`,
      java: `public class Solution {\n    public ListNode detectCycle(ListNode head) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'reorder-list',
    title: 'Reorder List',
    description: 'You are given the `head` of a singly linked-list. The list can be represented as: `L0 → L1 → … → Ln - 1 → Ln`. Reorder the list to be on the following form: `L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …`',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Linked List', 'Two Pointers', 'Stack', 'Recursion'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function reorderList(head) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def reorderList(self, head: Optional[ListNode]) -> None:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void reorderList(ListNode* head) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void reorderList(ListNode head) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'maximum-product-subarray',
    title: 'Maximum Product Subarray',
    description: 'Given an integer array `nums`, find a subarray that has the largest product, and return the product.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function maxProduct(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def maxProduct(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int maxProduct(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int maxProduct(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [2, 3, -2, 4] }, expectedOutput: 6 },
      { input: { nums: [-2, 0, -1] }, expectedOutput: 0 }
    ]
  },
  {
    id: 'find-minimum-in-rotated-sorted-array',
    title: 'Find Minimum in Rotated Sorted Array',
    description: 'Suppose an array of length `n` sorted in ascending order is rotated between `1` and `n` times. Given the sorted rotated array `nums` of unique elements, return the minimum element of this array.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Binary Search'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findMin(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findMin(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int findMin(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int findMin(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [3, 4, 5, 1, 2] }, expectedOutput: 1 },
      { input: { nums: [4, 5, 6, 7, 0, 1, 2] }, expectedOutput: 0 },
      { input: { nums: [11, 13, 15, 17] }, expectedOutput: 11 }
    ]
  },
  {
    id: 'gas-station',
    title: 'Gas Station',
    description: 'There are `n` gas stations along a circular route, where the amount of gas at the `ith` station is `gas[i]`. You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from the `ith` station to its next station (`i + 1`). You begin the journey with an empty tank at one of the gas stations. Given two integer arrays `gas` and `cost`, return the starting gas station\'s index if you can travel around the circuit once in the clockwise direction, otherwise return -1.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Greedy'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function canCompleteCircuit(gas, cost) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int canCompleteCircuit(int[] gas, int[] cost) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { gas: [1, 2, 3, 4, 5], cost: [3, 4, 5, 1, 2] }, expectedOutput: 3 },
      { input: { gas: [2, 3, 4], cost: [3, 4, 3] }, expectedOutput: -1 }
    ]
  },
  {
    id: 'clone-graph',
    title: 'Clone Graph',
    description: 'Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Hash Table', 'Depth-First Search', 'Breadth-First Search', 'Graph'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function cloneGraph(node) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def cloneGraph(self, node: 'Node') -> 'Node':\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    Node* cloneGraph(Node* node) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public Node cloneGraph(Node node) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'palindrome-partitioning',
    title: 'Palindrome Partitioning',
    description: 'Given a string `s`, partition `s` such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of `s`.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Dynamic Programming', 'Backtracking'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function partition(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def partition(self, s: str) -> List[List[str]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<string>> partition(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<String>> partition(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { s: 'aab' }, expectedOutput: [['a', 'a', 'b'], ['aa', 'b']] },
      { input: { s: 'a' }, expectedOutput: [['a']] }
    ]
  },
  {
    id: 'surrounded-regions',
    title: 'Surrounded Regions',
    description: 'Given an `m x n` matrix `board` containing \'X\' and \'O\', capture all regions that are 4-directionally surrounded by \'X\'. A region is captured by flipping all \'O\'s into \'X\'s in that surrounded region.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Depth-First Search', 'Breadth-First Search', 'Union Find', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function solve(board) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def solve(self, board: List[List[str]]) -> None:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void solve(vector<vector<char>>& board) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void solve(char[][] board) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'number-of-islands',
    title: 'Number of Islands',
    description: 'Given an `m x n` 2D binary grid `grid` which represents a map of \'1\'s (land) and \'0\'s (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Depth-First Search', 'Breadth-First Search', 'Union Find', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function numIslands(grid) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def numIslands(self, grid: List[List[str]]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int numIslands(char[][] grid) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'house-robber-ii',
    title: 'House Robber II',
    description: 'You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function rob(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def rob(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int rob(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int rob(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [2, 3, 2] }, expectedOutput: 3 },
      { input: { nums: [1, 2, 3, 1] }, expectedOutput: 4 }
    ]
  },
  {
    id: 'kth-largest-element-in-an-array',
    title: 'Kth Largest Element in an Array',
    description: 'Given an integer array `nums` and an integer `k`, return the `kth` largest element in the array. Note that it is the `kth` largest element in the sorted order, not the `kth` distinct element.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Divide and Conquer', 'Sorting', 'Heap', 'Quickselect'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findKthLargest(nums, k) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int findKthLargest(int[] nums, int k) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [3, 2, 1, 5, 6, 4], k: 2 }, expectedOutput: 5 },
      { input: { nums: [3, 2, 3, 1, 2, 4, 5, 5, 6], k: 4 }, expectedOutput: 4 }
    ]
  },
  {
    id: 'contains-duplicate-ii',
    title: 'Contains Duplicate II',
    description: 'Given an integer array `nums` and an integer `k`, return `true` if there are two distinct indices `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'Sliding Window'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function containsNearbyDuplicate(nums, k) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool containsNearbyDuplicate(vector<int>& nums, int k) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean containsNearbyDuplicate(int[] nums, int k) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [1, 2, 3, 1], k: 3 }, expectedOutput: true },
      { input: { nums: [1, 0, 1, 1], k: 1 }, expectedOutput: true },
      { input: { nums: [1, 2, 3, 1, 2, 3], k: 2 }, expectedOutput: false }
    ]
  },
  {
    id: 'contains-duplicate-iii',
    title: 'Contains Duplicate III',
    description: 'You are given an integer array `nums` and two integers `indexDiff` and `valueDiff`. Find a pair of indices `(i, j)` such that: `i != j`, `abs(i - j) <= indexDiff`, `abs(nums[i] - nums[j]) <= valueDiff`. Return `true` if such a pair exists or `false` otherwise.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Sliding Window', 'Sorting', 'Bucket Sort'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def containsNearbyAlmostDuplicate(self, nums: List[int], indexDiff: int, valueDiff: int) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool containsNearbyAlmostDuplicate(vector<int>& nums, int indexDiff, int valueDiff) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean containsNearbyAlmostDuplicate(int[] nums, int indexDiff, int valueDiff) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [1, 2, 3, 1], indexDiff: 3, valueDiff: 0 }, expectedOutput: true },
      { input: { nums: [1, 5, 9, 1, 5, 9], indexDiff: 2, valueDiff: 3 }, expectedOutput: false }
    ]
  },
  {
    id: 'sliding-window-maximum',
    title: 'Sliding Window Maximum',
    description: 'You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Array', 'Queue', 'Sliding Window', 'Heap', 'Monotonic Queue'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function maxSlidingWindow(nums, k) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [1, 3, -1, -3, 5, 3, 6, 7], k: 3 }, expectedOutput: [3, 3, 5, 5, 6, 7] },
      { input: { nums: [1], k: 1 }, expectedOutput: [1] }
    ]
  },
  {
    id: 'search-a-2d-matrix-ii',
    title: 'Search a 2D Matrix II',
    description: 'Write an efficient algorithm that searches for a `value` in an `m x n` `matrix`. This matrix has the following properties: Integers in each row are sorted in ascending from left to right. Integers in each column are sorted in ascending from top to bottom.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Binary Search', 'Divide and Conquer', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function searchMatrix(matrix, target) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean searchMatrix(int[][] matrix, int target) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'top-k-frequent-elements',
    title: 'Top K Frequent Elements',
    description: 'Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'Divide and Conquer', 'Sorting', 'Heap', 'Bucket Sort', 'Quickselect'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function topKFrequent(nums, k) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def topKFrequent(self, nums: List[int], k: int) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> topKFrequent(vector<int>& nums, int k) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [1, 1, 1, 2, 2, 3], k: 2 }, expectedOutput: [1, 2] },
      { input: { nums: [1], k: 1 }, expectedOutput: [1] }
    ]
  },
  {
    id: 'decode-string',
    title: 'Decode String',
    description: 'Given an encoded string, return its decoded string. The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. Note that `k` is guaranteed to be a positive integer.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Stack', 'Recursion'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function decodeString(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def decodeString(self, s: str) -> str:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    string decodeString(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public String decodeString(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { s: '3[a]2[bc]' }, expectedOutput: 'aaabcbc' },
      { input: { s: '3[a2[c]]' }, expectedOutput: 'accaccacc' },
      { input: { s: '2[abc]3[cd]ef' }, expectedOutput: 'abcabccdcdcdef' }
    ]
  },
  {
    id: 'daily-temperatures',
    title: 'Daily Temperatures',
    description: 'Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `ith` day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Stack', 'Monotonic Stack'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function dailyTemperatures(temperatures) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> dailyTemperatures(vector<int>& temperatures) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[] dailyTemperatures(int[] temperatures) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { temperatures: [73, 74, 75, 71, 69, 72, 76, 73] }, expectedOutput: [1, 1, 4, 2, 1, 1, 0, 0] },
      { input: { temperatures: [30, 40, 50, 60] }, expectedOutput: [1, 1, 1, 0] }
    ]
  },
  {
    id: 'basic-calculator',
    title: 'Basic Calculator',
    description: 'Given a string `s` representing a valid expression, implement a basic calculator to evaluate it and return the result of the evaluation.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Math', 'String', 'Stack', 'Recursion'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function calculate(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def calculate(self, s: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int calculate(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int calculate(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { s: '1 + 1' }, expectedOutput: 2 },
      { input: { s: ' 2-1 + 2 ' }, expectedOutput: 3 },
      { input: { s: '(1+(4+5+2)-3)+(6+8)' }, expectedOutput: 23 }
    ]
  },
  {
    id: 'word-search-ii',
    title: 'Word Search II',
    description: 'Given an `m x n` `board` of characters and a list of strings `words`, return all words on the board. Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Array', 'String', 'Backtracking', 'Trie', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findWords(board, words) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<String> findWords(char[][] board, String[] words) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'find-all-duplicates-in-an-array',
    title: 'Find All Duplicates in an Array',
    description: 'Given an integer array `nums` of length `n` where all the integers of `nums` are in the range `[1, n]` and each integer appears once or twice, return an array of all the integers that appears twice.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Hash Table'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findDuplicates(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findDuplicates(self, nums: List[int]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> findDuplicates(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<Integer> findDuplicates(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
        { input: { nums: [4,3,2,7,8,2,3,1] }, expectedOutput: [2, 3] },
        { input: { nums: [1,1,2] }, expectedOutput: [1] },
        { input: { nums: [1] }, expectedOutput: [] }
    ]
  },
  {
    id: 'kth-smallest-element-in-a-sorted-matrix',
    title: 'Kth Smallest Element in a Sorted Matrix',
    description: 'Given an `n x n` `matrix` where each of the rows and columns is sorted in ascending order, return the `k`th smallest element in the matrix.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Binary Search', 'Matrix', 'Heap'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function kthSmallest(matrix, k) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int kthSmallest(vector<vector<int>>& matrix, int k) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int kthSmallest(int[][] matrix, int k) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
        { input: { matrix: [[1,5,9],[10,11,13],[12,13,15]], k: 8 }, expectedOutput: 13 },
        { input: { matrix: [[-5]], k: 1 }, expectedOutput: -5 }
    ]
  },
  {
    id: 'longest-palindromic-substring',
    title: 'Longest Palindromic Substring',
    description: 'Given a string `s`, return the longest palindromic substring in `s`.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function longestPalindrome(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    string longestPalindrome(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public String longestPalindrome(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
        { input: { s: 'babad' }, expectedOutput: 'bab' },
        { input: { s: 'cbbd' }, expectedOutput: 'bb' }
    ]
  },
  {
    id: 'unique-binary-search-trees',
    title: 'Unique Binary Search Trees',
    description: 'Given an integer `n`, return the number of structurally unique BST\'s (binary search trees) which has exactly `n` nodes of unique values from 1 to `n`.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Math', 'Dynamic Programming', 'Tree', 'Binary Search Tree', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function numTrees(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def numTrees(self, n: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int numTrees(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int numTrees(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
        { input: { n: 3 }, expectedOutput: 5 },
        { input: { n: 1 }, expectedOutput: 1 }
    ]
  },
  {
    id: 'same-tree',
    title: 'Same Tree',
    description: 'Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isSameTree(p, q) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isSameTree(TreeNode* p, TreeNode* q) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isSameTree(TreeNode p, TreeNode q) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
        { input: { p: '[1,2,3]', q: '[1,2,3]' }, expectedOutput: true },
        { input: { p: '[1,2]', q: '[1,null,2]' }, expectedOutput: false }
    ]
  },
  {
    id: 'path-sum-ii',
    title: 'Path Sum II',
    description: 'Given the `root` of a binary tree and an integer `targetSum`, return all root-to-leaf paths where the sum of the node values in the path equals `targetSum`.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Tree', 'Backtracking', 'Depth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function pathSum(root, targetSum) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> pathSum(TreeNode* root, int targetSum) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'binary-tree-right-side-view',
    title: 'Binary Tree Right Side View',
    description: 'Given the `root` of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function rightSideView(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> rightSideView(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<Integer> rightSideView(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'number-of-provinces',
    title: 'Number of Provinces',
    description: 'There are `n` cities. Some of them are connected, while some are not. If city `a` is connected directly with city `b`, and city `b` is connected directly with city `c`, then city `a` is connected indirectly with city `c`. A province is a group of directly or indirectly connected cities and no other cities outside of the group. You are given an `n x n` matrix `isConnected` where `isConnected[i][j] = 1` if the `ith` city and the `jth` city are directly connected, and `isConnected[i][j] = 0` otherwise. Return the total number of provinces.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Depth-First Search', 'Breadth-First Search', 'Graph', 'Union Find'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findCircleNum(isConnected) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findCircleNum(self, isConnected: List[List[int]]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int findCircleNum(vector<vector<int>>& isConnected) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int findCircleNum(int[][] isConnected) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'edit-distance',
    title: 'Edit Distance',
    description: 'Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`. You have the following three operations permitted on a word: Insert a character, Delete a character, Replace a character.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function minDistance(word1, word2) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def minDistance(self, word1: str, word2: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int minDistance(string word1, string word2) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int minDistance(String word1, String word2) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'jump-game-ii',
    title: 'Jump Game II',
    description: 'You are given a 0-indexed array of integers `nums` of length `n`. You are initially positioned at `nums[0]`. Each element `nums[i]` represents the maximum length of a forward jump from index `i`. Return the minimum number of jumps to reach `nums[n - 1]`.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Greedy', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function jump(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def jump(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int jump(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int jump(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'unique-binary-search-trees-ii',
    title: 'Unique Binary Search Trees II',
    description: 'Given an integer `n`, return all the structurally unique BST\'s (binary search trees), which has exactly `n` nodes of unique values from 1 to `n`. Return the answer in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Dynamic Programming', 'Backtracking', 'Tree', 'Binary Search Tree', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function generateTrees(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def generateTrees(self, n: int) -> List[Optional[TreeNode]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<TreeNode*> generateTrees(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<TreeNode> generateTrees(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'interleaving-string',
    title: 'Interleaving String',
    description: 'Given strings `s1`, `s2`, and `s3`, find whether `s3` is formed by an interleaving of `s1` and `s2`.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function isInterleave(s1, s2, s3) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isInterleave(string s1, string s2, string s3) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isInterleave(String s1, String s2, String s3) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'restore-ip-addresses',
    title: 'Restore IP Addresses',
    description: 'A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros. Given a string `s` containing only digits, return all possible valid IP addresses that can be formed by inserting dots into `s`.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Backtracking'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function restoreIpAddresses(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def restoreIpAddresses(self, s: str) -> List[str]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<string> restoreIpAddresses(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<String> restoreIpAddresses(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'reverse-linked-list-ii',
    title: 'Reverse Linked List II',
    description: 'Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return the reversed list.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Linked List'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function reverseBetween(head, left, right) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    ListNode* reverseBetween(ListNode* head, int left, int right) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public ListNode reverseBetween(ListNode head, int left, int right) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'subsets-ii',
    title: 'Subsets II',
    description: 'Given an integer array `nums` that may contain duplicates, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Backtracking', 'Bit Manipulation'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function subsetsWithDup(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> subsetsWithDup(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> subsetsWithDup(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'decode-ways',
    title: 'Decode Ways',
    description: 'A message containing letters from A-Z can be encoded into numbers using the following mapping: \'A\' -> "1", \'B\' -> "2", ..., \'Z\' -> "26". Given a string `s` containing only digits, return the number of ways to decode it.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function numDecodings(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def numDecodings(self, s: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int numDecodings(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int numDecodings(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'gray-code',
    title: 'Gray Code',
    description: 'An n-bit gray code sequence is a sequence of 2^n integers where: Every integer is in the inclusive range [0, 2^n - 1], The first integer is 0, An integer appears no more than once in the sequence, The binary representation of every pair of adjacent integers differs by exactly one bit, and The binary representation of the first and last integers differs by exactly one bit. Given an integer n, return any valid n-bit gray code sequence.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Math', 'Backtracking', 'Bit Manipulation'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function grayCode(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def grayCode(self, n: int) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> grayCode(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<Integer> grayCode(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'partition-list',
    title: 'Partition List',
    description: 'Given the `head` of a linked list and a value `x`, partition it such that all nodes less than `x` come before nodes greater than or equal to `x`. You should preserve the original relative order of the nodes in each of the two partitions.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Linked List', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function partition(head, x) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    ListNode* partition(ListNode* head, int x) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public ListNode partition(ListNode head, int x) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'combinations',
    title: 'Combinations',
    description: 'Given two integers `n` and `k`, return all possible combinations of `k` numbers chosen from the range `[1, n]`. You may return the answer in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Backtracking'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function combine(n, k) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def combine(self, n: int, k: int) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> combine(int n, int k) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> combine(int n, int k) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'merge-sorted-array',
    title: 'Merge Sorted Array',
    description: 'You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively. Merge `nums1` and `nums2` into a single array sorted in non-decreasing order. The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function merge(nums1, m, nums2, n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'search-a-2d-matrix',
    title: 'Search a 2D Matrix',
    description: 'You are given an `m x n` integer matrix `matrix` with the following two properties: Each row is sorted in non-decreasing order. The first integer of each row is greater than the last integer of the previous row. Given an integer `target`, return `true` if `target` is in `matrix` or `false` otherwise.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Binary Search', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function searchMatrix(matrix, target) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean searchMatrix(int[][] matrix, int target) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'remove-duplicates-from-sorted-list-ii',
    title: 'Remove Duplicates from Sorted List II',
    description: 'Given the `head` of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Linked List', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function deleteDuplicates(head) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    ListNode* deleteDuplicates(ListNode* head) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public ListNode deleteDuplicates(ListNode head) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'remove-duplicates-from-sorted-list',
    title: 'Remove Duplicates from Sorted List',
    description: 'Given the `head` of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Linked List'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function deleteDuplicates(head) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    ListNode* deleteDuplicates(ListNode* head) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public ListNode deleteDuplicates(ListNode head) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'largest-rectangle-in-histogram',
    title: 'Largest Rectangle in Histogram',
    description: 'Given an array of integers `heights` representing the histogram\'s bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Array', 'Stack', 'Monotonic Stack'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function largestRectangleArea(heights) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int largestRectangleArea(vector<int>& heights) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int largestRectangleArea(int[] heights) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'maximal-rectangle',
    title: 'Maximal Rectangle',
    description: 'Given a `rows x cols` binary `matrix` filled with 0\'s and 1\'s, find the largest rectangle containing only 1\'s and return its area.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming', 'Stack', 'Matrix', 'Monotonic Stack'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function maximalRectangle(matrix) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def maximalRectangle(self, matrix: List[List[str]]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int maximalRectangle(vector<vector<char>>& matrix) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int maximalRectangle(char[][] matrix) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'populating-next-right-pointers-in-each-node',
    title: 'Populating Next Right Pointers in Each Node',
    description: 'You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL. Initially, all next pointers are set to NULL.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Linked List', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function connect(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    Node* connect(Node* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public Node connect(Node root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'populating-next-right-pointers-in-each-node-ii',
    title: 'Populating Next Right Pointers in Each Node II',
    description: 'Given a binary tree, populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL. Initially, all next pointers are set to NULL.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Linked List', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function connect(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def connect(self, root: 'Node') -> 'Node':\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    Node* connect(Node* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public Node connect(Node root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'flatten-binary-tree-to-linked-list',
    title: 'Flatten Binary Tree to Linked List',
    description: 'Given the `root` of a binary tree, flatten the tree into a "linked list". The "linked list" should use the same `TreeNode` class where the `right` child pointer points to the next node in the list and the `left` child pointer is always `null`.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Linked List', 'Stack', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function flatten(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def flatten(self, root: Optional[TreeNode]) -> None:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void flatten(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void flatten(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'distinct-subsequences',
    title: 'Distinct Subsequences',
    description: 'Given two strings `s` and `t`, return the number of distinct subsequences of `s` which equals `t`.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['String', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function numDistinct(s, t) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def numDistinct(self, s: str, t: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int numDistinct(string s, string t) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int numDistinct(String s, String t) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'best-time-to-buy-and-sell-stock-ii',
    title: 'Best Time to Buy and Sell Stock II',
    description: 'You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `ith` day. On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day. Find and return the maximum profit you can achieve.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Greedy', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function maxProfit(prices) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'best-time-to-buy-and-sell-stock-iii',
    title: 'Best Time to Buy and Sell Stock III',
    description: 'You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day. Find the maximum profit you can achieve. You may complete at most two transactions.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function maxProfit(prices) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'triangle',
    title: 'Triangle',
    description: 'Given a triangle array, return the minimum path sum from top to bottom. For each step, you may move to an adjacent number of the row below.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function minimumTotal(triangle) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def minimumTotal(self, triangle: List[List[int]]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int minimumTotal(vector<vector<int>>& triangle) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int minimumTotal(List<List<Integer>> triangle) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'sum-root-to-leaf-numbers',
    title: 'Sum Root to Leaf Numbers',
    description: 'You are given the `root` of a binary tree containing digits from 0 to 9 only. Each root-to-leaf path in the tree represents a number. Return the total sum of all root-to-leaf numbers.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function sumNumbers(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def sumNumbers(self, root: Optional[TreeNode]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int sumNumbers(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int sumNumbers(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'single-number-iii',
    title: 'Single Number III',
    description: 'Given an integer array `nums`, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Bit Manipulation'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function singleNumber(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def singleNumber(self, nums: List[int]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> singleNumber(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[] singleNumber(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'find-peak-element',
    title: 'Find Peak Element',
    description: 'A peak element is an element that is strictly greater than its neighbors. Given a 0-indexed integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Binary Search'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findPeakElement(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findPeakElement(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int findPeakElement(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int findPeakElement(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'combination-sum-iv',
    title: 'Combination Sum IV',
    description: 'Given an array of distinct integers `nums` and a target integer `target`, return the number of possible combinations that add up to `target`.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function combinationSum4(nums, target) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def combinationSum4(self, nums: List[int], target: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int combinationSum4(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int combinationSum4(int[] nums, int target) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'path-sum-iii',
    title: 'Path Sum III',
    description: 'Given the `root` of a binary tree and an integer `targetSum`, return the number of paths where the sum of the values along the path equals `targetSum`. The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function pathSum(root, targetSum) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int pathSum(TreeNode* root, int targetSum) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int pathSum(TreeNode root, int targetSum) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'find-bottom-left-tree-value',
    title: 'Find Bottom Left Tree Value',
    description: 'Given the `root` of a binary tree, return the leftmost value in the last row of the tree.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findBottomLeftValue(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int findBottomLeftValue(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int findBottomLeftValue(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'beautiful-arrangement',
    title: 'Beautiful Arrangement',
    description: 'Suppose you have `n` integers labeled 1 to `n`. A permutation of those `n` integers `perm` (1-indexed) is called a beautiful arrangement if for every `i` (1 <= i <= n), either `perm[i]` is divisible by `i` or `i` is divisible by `perm[i]`. Given an integer `n`, return the number of the beautiful arrangements that you can construct.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming', 'Backtracking', 'Bit Manipulation'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function countArrangement(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def countArrangement(self, n: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int countArrangement(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int countArrangement(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'next-greater-element-ii',
    title: 'Next Greater Element II',
    description: 'Given a circular integer array `nums` (i.e., the next element of `nums[nums.length - 1]` is `nums[0]`), return the next greater number for every element in `nums`.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Stack', 'Monotonic Stack'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function nextGreaterElements(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def nextGreaterElements(self, nums: List[int]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> nextGreaterElements(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[] nextGreaterElements(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'coin-change-2',
    title: 'Coin Change 2',
    description: 'You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money. Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function change(amount, coins) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def change(self, amount: int, coins: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int change(int amount, vector<int>& coins) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int change(int amount, int[] coins) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'palindromic-substrings',
    title: 'Palindromic Substrings',
    description: 'Given a string `s`, return the number of palindromic substrings in it.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function countSubstrings(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def countSubstrings(self, s: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int countSubstrings(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int countSubstrings(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'maximum-length-of-repeated-subarray',
    title: 'Maximum Length of Repeated Subarray',
    description: 'Given two integer arrays `nums1` and `nums2`, return the maximum length of a subarray that appears in both arrays.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Binary Search', 'Dynamic Programming', 'Sliding Window', 'Hash Function', 'Rolling Hash'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findLength(nums1, nums2) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findLength(self, nums1: List[int], nums2: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int findLength(vector<int>& nums1, vector<int>& nums2) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int findLength(int[] nums1, int[] nums2) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: '01-matrix',
    title: '01 Matrix',
    description: 'Given an `m x n` binary `matrix` `mat`, return the distance of the nearest 0 for each cell.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming', 'Breadth-First Search', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function updateMatrix(mat) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> updateMatrix(vector<vector<int>>& mat) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[][] updateMatrix(int[][] mat) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'partition-labels',
    title: 'Partition Labels',
    description: 'You are given a string `s`. We want to partition the string into as many parts as possible so that each letter appears in at most one part. Return a list of integers representing the size of these parts.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Hash Table', 'Two Pointers', 'String', 'Greedy'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function partitionLabels(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def partitionLabels(self, s: str) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> partitionLabels(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<Integer> partitionLabels(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'max-area-of-island',
    title: 'Max Area of Island',
    description: 'You are given an `m x n` binary `matrix` `grid`. An island is a group of 1\'s (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water. The area of an island is the number of cells with a value 1 in the island. Return the maximum area of an island in `grid`. If there is no island, return 0.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Depth-First Search', 'Breadth-First Search', 'Union Find', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function maxAreaOfIsland(grid) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int maxAreaOfIsland(vector<vector<int>>& grid) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int maxAreaOfIsland(int[][] grid) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'letter-case-permutation',
    title: 'Letter Case Permutation',
    description: 'Given a string `s`, you can transform every letter individually to be lowercase or uppercase to create another string. Return a list of all possible strings we could create. Return the output in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Backtracking', 'Bit Manipulation'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function letterCasePermutation(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def letterCasePermutation(self, s: str) -> List[str]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<string> letterCasePermutation(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<String> letterCasePermutation(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'all-paths-from-source-to-target',
    title: 'All Paths From Source to Target',
    description: 'Given a directed acyclic graph (DAG) of `n` nodes labeled from `0` to `n - 1`, find all possible paths from node `0` to node `n - 1` and return them in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Graph', 'Backtracking', 'Depth-First Search', 'Breadth-First Search'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function allPathsSourceTarget(graph) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> allPathsSourceTarget(vector<vector<int>>& graph) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'find-and-replace-pattern',
    title: 'Find and Replace Pattern',
    description: 'Given a list of strings `words` and a string `pattern`, return a list of `words[i]` that match `pattern`. You may return the answer in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'String'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findAndReplacePattern(words, pattern) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findAndReplacePattern(self, words: List[str], pattern: str) -> List[str]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<string> findAndReplacePattern(vector<string>& words, string pattern) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<String> findAndReplacePattern(String[] words, String pattern) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'validate-stack-sequences',
    title: 'Validate Stack Sequences',
    description: 'Given two integer arrays `pushed` and `popped` each with distinct values, return `true` if this could have been the result of a sequence of push and pop operations on an initially empty stack, or `false` otherwise.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Stack', 'Simulation'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function validateStackSequences(pushed, popped) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean validateStackSequences(int[] pushed, int[] popped) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'minimum-add-to-make-parentheses-valid',
    title: 'Minimum Add to Make Parentheses Valid',
    description: 'A parentheses string is valid if and only if for every opening bracket there is a corresponding closing bracket. Given a parentheses string `s`, return the minimum number of parentheses we must add to make the resulting string valid.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Stack', 'Greedy'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function minAddToMakeValid(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def minAddToMakeValid(self, s: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int minAddToMakeValid(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int minAddToMakeValid(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'rotting-oranges',
    title: 'Rotting Oranges',
    description: 'You are given an `m x n` `grid` where each cell can have one of three values: 0 representing an empty cell, 1 representing a fresh orange, or 2 representing a rotten orange. Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Breadth-First Search', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function orangesRotting(grid) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def orangesRotting(self, grid: List[List[int]]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int orangesRotting(vector<vector<int>>& grid) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int orangesRotting(int[][] grid) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'longest-common-subsequence',
    title: 'Longest Common Subsequence',
    description: 'Given two strings `text1` and `text2`, return the length of their longest common subsequence. If there is no common subsequence, return 0.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function longestCommonSubsequence(text1, text2) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int longestCommonSubsequence(string text1, string text2) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int longestCommonSubsequence(String text1, String text2) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'number-of-closed-islands',
    title: 'Number of Closed Islands',
    description: 'Given a 2D `grid` consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s. Return the number of closed islands.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Depth-First Search', 'Breadth-First Search', 'Union Find', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function closedIsland(grid) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def closedIsland(self, grid: List[List[int]]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int closedIsland(vector<vector<int>>& grid) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int closedIsland(int[][] grid) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'reconstruct-itinerary',
    title: 'Reconstruct Itinerary',
    description: 'You are given a list of airline `tickets` where `tickets[i] = [from_i, to_i]` represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it. All of the tickets belong to a man who departs from "JFK". Thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Depth-First Search', 'Graph', 'Eulerian Circuit'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findItinerary(tickets) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findItinerary(self, tickets: List[List[str]]) -> List[str]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<string> findItinerary(vector<vector<string>>& tickets) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<String> findItinerary(List<List<String>> tickets) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'minimum-height-trees',
    title: 'Minimum Height Trees',
    description: 'A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree. Given a tree of `n` nodes labelled from `0` to `n - 1` and an array of `n - 1` `edges` where `edges[i] = [a_i, b_i]` indicates that there is an undirected edge between the two nodes `a_i` and `b_i` in the tree, you can choose any node of the tree as the root. When you select a node `x` as the root, the result tree has height `h`. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs). Return a list of all MHTs\' root labels.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Depth-First Search', 'Breadth-First Search', 'Graph', 'Topological Sort'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findMinHeightTrees(n, edges) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> findMinHeightTrees(int n, vector<vector<int>>& edges) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<Integer> findMinHeightTrees(int n, int[][] edges) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'pacific-atlantic-water-flow',
    title: 'Pacific Atlantic Water Flow',
    description: 'There is an `m x n` rectangular island that borders both the Pacific Ocean and the Atlantic Ocean. The Pacific Ocean touches the island\'s left and top edges, and the Atlantic Ocean touches the island\'s right and bottom edges. The island is partitioned into a grid of square cells. You are given an `m x n` integer matrix `heights` where `heights[r][c]` represents the height above sea level of the cell at coordinate `(r, c)`. Return a 2D list of grid coordinates `result` where `result[i] = [ri, ci]` denotes that rain water can flow from cell `(ri, ci)` to both the Pacific and Atlantic oceans.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Depth-First Search', 'Breadth-First Search', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function pacificAtlantic(heights) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> pacificAtlantic(int[][] heights) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    id: 'course-schedule-ii',
    title: 'Course Schedule II',
    description: 'There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`. Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Depth-First Search', 'Breadth-First Search', 'Graph', 'Topological Sort'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function findOrder(numCourses, prerequisites) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[] findOrder(int numCourses, int[][] prerequisites) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
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

    