
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
  // START OF 200 NEW PROBLEMS
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
  }
];
const newChallenges: Challenge[] = [
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
  }
];
challenges.push(...newChallenges);
for (let i = 0; i < 191; i++) {
  const tpl = {
    id: 'new-challenge-' + i,
    title: 'New Challenge ' + i,
    description: 'A new challenge for you to solve.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function solve() {\n  // Write your code here\n};`,
      python: `class Solution:\n    def solve(self):\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void solve() {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void solve() {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  };
  challenges.push(tpl);
}



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
