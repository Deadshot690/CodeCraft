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
  languages: ('javascript' | 'python' | 'cpp' | 'java')[];
  templates: {
    javascript: string;
    python: string;
    cpp: string;
    java: string;
  };
  testCases: TestCase[];
}

export const challenges: Challenge[] = [
  {
    id: 'two-sum',
    title: 'Two Sum',
    description: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Hash Table'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function twoSum(nums, target) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your code here\n    }\n}`
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
    testCases: []
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
    testCases: []
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
    testCases: []
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
