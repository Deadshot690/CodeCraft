


export interface TestCase {
  input: any;
  expectedOutput: any;
}
export interface Challenge {
  srNo: number;
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
    srNo: 1,
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
    srNo: 2,
    id: 'reverse-integer',
    title: 'Reverse Integer',
    description: 'Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var reverse = function(x) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def reverse(self, x: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int reverse(int x) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int reverse(int x) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { x: 123 }, expectedOutput: 321 },
      { input: { x: -123 }, expectedOutput: -321 },
      { input: { x: 120 }, expectedOutput: 21 },
    ]
  },
  {
    srNo: 3,
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
    srNo: 4,
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
    testCases: [
      { input: { s: "III" }, expectedOutput: 3 },
      { input: { s: "LVIII" }, expectedOutput: 58 },
      { input: { s: "MCMXCIV" }, expectedOutput: 1994 },
    ]
  },
  {
    srNo: 5,
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
    testCases: [
      { input: { strs: ["flower","flow","flight"] }, expectedOutput: "fl" },
      { input: { strs: ["dog","racecar","car"] }, expectedOutput: "" },
    ]
  },
  {
    srNo: 6,
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
    srNo: 7,
    id: 'merge-two-sorted-lists',
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
    srNo: 8,
    id: 'remove-duplicates-from-sorted-array',
    title: 'Remove Duplicates from Sorted Array',
    description: 'Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var removeDuplicates = function(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int removeDuplicates(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [1,1,2] }, expectedOutput: 2 },
      { input: { nums: [0,0,1,1,1,2,2,3,3,4] }, expectedOutput: 5 },
    ]
  },
  {
    srNo: 9,
    id: 'remove-element',
    title: 'Remove Element',
    description: 'Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var removeElement = function(nums, val) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def removeElement(self, nums: List[int], val: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int removeElement(vector<int>& nums, int val) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int removeElement(int[] nums, int val) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [3,2,2,3], val: 3 }, expectedOutput: 2 },
      { input: { nums: [0,1,2,2,3,0,4,2], val: 2 }, expectedOutput: 5 },
    ]
  },
  {
    srNo: 10,
    id: 'search-insert-position',
    title: 'Search Insert Position',
    description: 'Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Binary Search'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var searchInsert = function(nums, target) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def searchInsert(self, nums: List[int], target: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int searchInsert(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int searchInsert(int[] nums, int target) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { nums: [1,3,5,6], target: 5 }, expectedOutput: 2 },
      { input: { nums: [1,3,5,6], target: 2 }, expectedOutput: 1 },
      { input: { nums: [1,3,5,6], target: 7 }, expectedOutput: 4 },
    ]
  },
  {
    srNo: 11,
    id: 'length-of-last-word',
    title: 'Length of Last Word',
    description: 'Given a string s consisting of words and spaces, return the length of the last word in the string.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var lengthOfLastWord = function(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def lengthOfLastWord(self, s: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int lengthOfLastWord(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int lengthOfLastWord(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { s: "Hello World" }, expectedOutput: 5 },
      { input: { s: "   fly me   to   the moon  " }, expectedOutput: 4 },
      { input: { s: "luffy is still joyboy" }, expectedOutput: 6 },
    ]
  },
  {
    srNo: 12,
    id: 'plus-one',
    title: 'Plus One',
    description: 'You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0\'s. Increment the large integer by one and return the resulting array of digits.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Math'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var plusOne = function(digits) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def plusOne(self, digits: List[int]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> plusOne(vector<int>& digits) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[] plusOne(int[] digits) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { digits: [1,2,3] }, expectedOutput: [1,2,4] },
      { input: { digits: [4,3,2,1] }, expectedOutput: [4,3,2,2] },
      { input: { digits: [9] }, expectedOutput: [1,0] },
    ]
  },
  {
    srNo: 13,
    id: 'add-binary',
    title: 'Add Binary',
    description: 'Given two binary strings a and b, return their sum as a binary string.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'String', 'Bit Manipulation', 'Simulation'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var addBinary = function(a, b) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def addBinary(self, a: str, b: str) -> str:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    string addBinary(string a, string b) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public String addBinary(String a, String b) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { a: "11", b: "1" }, expectedOutput: "100" },
      { input: { a: "1010", b: "1011" }, expectedOutput: "10101" },
    ]
  },
  {
    srNo: 14,
    id: 'sqrtx',
    title: 'Sqrt(x)',
    description: 'Given a non-negative integer x, compute and return the square root of x. Since the return type is an integer, the decimal part is truncated, and only the integer part of the result is returned.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'Binary Search'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var mySqrt = function(x) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def mySqrt(self, x: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int mySqrt(int x) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int mySqrt(int x) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: { x: 4 }, expectedOutput: 2 },
      { input: { x: 8 }, expectedOutput: 2 },
    ]
  },
  {
    srNo: 15,
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
    testCases: [
      { input: { n: 2 }, expectedOutput: 2 },
      { input: { n: 3 }, expectedOutput: 3 },
    ]
  },
  {
    srNo: 16,
    id: 'remove-duplicates-from-sorted-list',
    title: 'Remove Duplicates from Sorted List',
    description: 'Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Linked List'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var deleteDuplicates = function(head) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    ListNode* deleteDuplicates(ListNode* head) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public ListNode deleteDuplicates(ListNode head) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 17,
    id: 'merge-sorted-array',
    title: 'Merge Sorted Array',
    description: 'You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var merge = function(nums1, m, nums2, n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:\n        """\n        Do not return anything, modify nums1 in-place instead.\n        """\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 18,
    id: 'binary-tree-inorder-traversal',
    title: 'Binary Tree Inorder Traversal',
    description: 'Given the root of a binary tree, return the inorder traversal of its nodes\' values.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Stack', 'Tree', 'Depth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var inorderTraversal = function(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> inorderTraversal(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 19,
    id: 'symmetric-tree',
    title: 'Symmetric Tree',
    description: 'Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var isSymmetric = function(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isSymmetric(self, root: Optional[TreeNode]) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isSymmetric(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isSymmetric(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 20,
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
    srNo: 21,
    id: 'convert-sorted-array-to-binary-search-tree',
    title: 'Convert Sorted Array to Binary Search Tree',
    description: 'Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Divide and Conquer', 'Tree', 'Binary Search Tree', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var sortedArrayToBST = function(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    TreeNode* sortedArrayToBST(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public TreeNode sortedArrayToBST(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 22,
    id: 'balanced-binary-tree',
    title: 'Balanced Binary Tree',
    description: 'Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var isBalanced = function(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isBalanced(self, root: Optional[TreeNode]) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isBalanced(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isBalanced(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 23,
    id: 'minimum-depth-of-binary-tree',
    title: 'Minimum Depth of Binary Tree',
    description: 'Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var minDepth = function(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def minDepth(self, root: Optional[TreeNode]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int minDepth(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int minDepth(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 24,
    id: 'path-sum',
    title: 'Path Sum',
    description: 'Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var hasPathSum = function(root, targetSum) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool hasPathSum(TreeNode* root, int targetSum) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean hasPathSum(TreeNode root, int targetSum) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 25,
    id: 'pascals-triangle',
    title: 'Pascal\'s Triangle',
    description: 'Given an integer numRows, return the first numRows of Pascal\'s triangle.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var generate = function(numRows) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def generate(self, numRows: int) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> generate(int numRows) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> generate(int numRows) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 26,
    id: 'pascals-triangle-ii',
    title: 'Pascal\'s Triangle II',
    description: 'Given an integer rowIndex, return the rowIndex-th (0-indexed) row of the Pascal\'s triangle.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var getRow = function(rowIndex) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def getRow(self, rowIndex: int) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> getRow(int rowIndex) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<Integer> getRow(int rowIndex) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 27,
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
    srNo: 28,
    id: 'best-time-to-buy-and-sell-stock-ii',
    title: 'Best Time to Buy and Sell Stock II',
    description: 'You are given an integer array prices where prices[i] is the price of a given stock on the ith day. On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day. Find and return the maximum profit you can achieve.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming', 'Greedy'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var maxProfit = function(prices) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 29,
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
    srNo: 30,
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
    srNo: 31,
    id: 'single-number-ii',
    title: 'Single Number II',
    description: 'Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it. You must implement a solution with a linear runtime complexity and use only constant extra space.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Bit Manipulation'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var singleNumber = function(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int singleNumber(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 32,
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
    srNo: 33,
    id: 'linked-list-cycle-ii',
    title: 'Linked List Cycle II',
    description: 'Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail\'s next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Linked List', 'Hash Table', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var detectCycle = function(head) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    ListNode *detectCycle(ListNode *head) {\n        // Write your code here\n    }\n};`,
      java: `public class Solution {\n    public ListNode detectCycle(ListNode head) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 34,
    id: 'reorder-list',
    title: 'Reorder List',
    description: 'You are given the head of a singly linked-list. The list can be represented as: L0 → L1 → … → Ln - 1 → Ln. Reorder the list to be on the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Linked List', 'Two Pointers', 'Stack', 'Recursion'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var reorderList = function(head) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def reorderList(self, head: Optional[ListNode]) -> None:\n        """\n        Do not return anything, modify head in-place instead.\n        """\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void reorderList(ListNode* head) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void reorderList(ListNode head) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 35,
    id: 'binary-tree-preorder-traversal',
    title: 'Binary Tree Preorder Traversal',
    description: 'Given the root of a binary tree, return the preorder traversal of its nodes\' values.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Stack', 'Tree', 'Depth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var preorderTraversal = function(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> preorderTraversal(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<Integer> preorderTraversal(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 36,
    id: 'binary-tree-postorder-traversal',
    title: 'Binary Tree Postorder Traversal',
    description: 'Given the root of a binary tree, return the postorder traversal of its nodes\' values.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Stack', 'Tree', 'Depth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var postorderTraversal = function(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> postorderTraversal(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<Integer> postorderTraversal(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 37,
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
    srNo: 38,
    id: 'insertion-sort-list',
    title: 'Insertion Sort List',
    description: 'Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list\'s head.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Linked List', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var insertionSortList = function(head) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    ListNode* insertionSortList(ListNode* head) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public ListNode insertionSortList(ListNode head) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 39,
    id: 'sort-list',
    title: 'Sort List',
    description: 'Given the head of a linked list, return the list after sorting it in ascending order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Linked List', 'Two Pointers', 'Divide and Conquer', 'Sorting', 'Merge Sort'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var sortList = function(head) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    ListNode* sortList(ListNode* head) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public ListNode sortList(ListNode head) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 40,
    id: 'max-points-on-a-line',
    title: 'Max Points on a Line',
    description: 'Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'Math', 'Geometry'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var maxPoints = function(points) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def maxPoints(self, points: List[List[int]]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int maxPoints(vector<vector<int>>& points) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int maxPoints(int[][] points) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 41,
    id: 'evaluate-reverse-polish-notation',
    title: 'Evaluate Reverse Polish Notation',
    description: 'Evaluate the value of an arithmetic expression in Reverse Polish Notation.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Math', 'Stack'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var evalRPN = function(tokens) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def evalRPN(self, tokens: List[str]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int evalRPN(vector<string>& tokens) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int evalRPN(String[] tokens) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 42,
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
    srNo: 43,
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
    srNo: 44,
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
    srNo: 45,
    id: 'excel-sheet-column-title',
    title: 'Excel Sheet Column Title',
    description: 'Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'String'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var convertToTitle = function(columnNumber) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def convertToTitle(self, columnNumber: int) -> str:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    string convertToTitle(int columnNumber) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public String convertToTitle(int columnNumber) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 46,
    id: 'excel-sheet-column-number',
    title: 'Excel Sheet Column Number',
    description: 'Given a string columnTitle that represents the column title as it appears in an Excel sheet, return its corresponding column number.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'String'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var titleToNumber = function(columnTitle) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def titleToNumber(self, columnTitle: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int titleToNumber(string columnTitle) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int titleToNumber(String columnTitle) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 47,
    id: 'factorial-trailing-zeroes',
    title: 'Factorial Trailing Zeroes',
    description: 'Given an integer n, return the number of trailing zeroes in n!.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var trailingZeroes = function(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def trailingZeroes(self, n: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int trailingZeroes(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int trailingZeroes(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 48,
    id: 'rotate-array',
    title: 'Rotate Array',
    description: 'Given an array, rotate the array to the right by k steps, where k is non-negative.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Math', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var rotate = function(nums, k) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def rotate(self, nums: List[int], k: int) -> None:\n        """\n        Do not return anything, modify nums in-place instead.\n        """\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void rotate(vector<int>& nums, int k) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void rotate(int[] nums, int k) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 49,
    id: 'reverse-bits',
    title: 'Reverse Bits',
    description: 'Reverse bits of a given 32 bits unsigned integer.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Bit Manipulation', 'Divide and Conquer'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var reverseBits = function(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def reverseBits(self, n: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    uint32_t reverseBits(uint32_t n) {\n        // Write your code here\n    }\n};`,
      java: `public class Solution {\n    // you need treat n as an unsigned value\n    public int reverseBits(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 50,
    id: 'number-of-1-bits',
    title: 'Number of 1 Bits',
    description: 'Write a function that takes an unsigned integer and returns the number of \'1\' bits it has (also known as the Hamming weight).',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Bit Manipulation', 'Divide and Conquer'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var hammingWeight = function(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def hammingWeight(self, n: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int hammingWeight(uint32_t n) {\n        // Write your code here\n    }\n};`,
      java: `public class Solution {\n    // you need to treat n as an unsigned value\n    public int hammingWeight(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 51,
    id: 'house-robber',
    title: 'House Robber',
    description: 'You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var rob = function(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def rob(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int rob(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int rob(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 52,
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
    srNo: 53,
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
    srNo: 54,
    id: 'contains-duplicate-ii',
    title: 'Contains Duplicate II',
    description: 'Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'Sliding Window'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var containsNearbyDuplicate = function(nums, k) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool containsNearbyDuplicate(vector<int>& nums, int k) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean containsNearbyDuplicate(int[] nums, int k) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 55,
    id: 'implement-stack-using-queues',
    title: 'Implement Stack using Queues',
    description: 'Implement a last-in, first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Stack', 'Design', 'Queue'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var MyStack = function() {\n  // Write your code here\n};`,
      python: `class MyStack:\n    def __init__(self):\n        # Write your code here\n`,
      cpp: `class MyStack {\npublic:\n    MyStack() {\n        // Write your code here\n    }\n};`,
      java: `class MyStack {\n    public MyStack() {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 56,
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
    srNo: 57,
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
    srNo: 58,
    id: 'add-digits',
    title: 'Add Digits',
    description: 'Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'Simulation', 'Number Theory'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var addDigits = function(num) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def addDigits(self, num: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int addDigits(int num) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int addDigits(int num) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 59,
    id: 'missing-number',
    title: 'Missing Number',
    description: 'Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'Math', 'Bit Manipulation', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var missingNumber = function(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def missingNumber(self, nums: List[int]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int missingNumber(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 60,
    id: 'move-zeroes',
    title: 'Move Zeroes',
    description: 'Given an integer array nums, move all 0\'s to the end of it while maintaining the relative order of the non-zero elements.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var moveZeroes = function(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def moveZeroes(self, nums: List[int]) -> None:\n        """\n        Do not return anything, modify nums in-place instead.\n        """\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void moveZeroes(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void moveZeroes(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 61,
    id: 'word-pattern',
    title: 'Word Pattern',
    description: 'Given a pattern and a string s, find if s follows the same pattern. Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Hash Table', 'String'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var wordPattern = function(pattern, s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def wordPattern(self, pattern: str, s: str) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool wordPattern(string pattern, string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean wordPattern(String pattern, String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 62,
    id: 'valid-perfect-square',
    title: 'Valid Perfect Square',
    description: 'Given a positive integer num, write a function which returns True if num is a perfect square else False.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'Binary Search'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var isPerfectSquare = function(num) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isPerfectSquare(self, num: int) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isPerfectSquare(int num) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isPerfectSquare(int num) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 63,
    id: 'ransom-note',
    title: 'Ransom Note',
    description: 'Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise. Each letter in magazine can only be used once in ransomNote.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Hash Table', 'String', 'Counting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var canConstruct = function(ransomNote, magazine) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def canConstruct(self, ransomNote: str, magazine: str) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool canConstruct(string ransomNote, string magazine) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean canConstruct(String ransomNote, String magazine) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 64,
    id: 'first-unique-character-in-a-string',
    title: 'First Unique Character in a String',
    description: 'Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Hash Table', 'String', 'Queue', 'Counting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var firstUniqChar = function(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def firstUniqChar(self, s: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int firstUniqChar(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int firstUniqChar(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 65,
    id: 'find-the-difference',
    title: 'Find the Difference',
    description: 'You are given two strings s and t. String t is generated by random shuffling string s and then add one more letter at a random position. Return the letter that was added to t.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Hash Table', 'String', 'Bit Manipulation', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var findTheDifference = function(s, t) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findTheDifference(self, s: str, t: str) -> str:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    char findTheDifference(string s, string t) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public char findTheDifference(String s, String t) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 66,
    id: 'binary-tree-paths',
    title: 'Binary Tree Paths',
    description: 'Given the root of a binary tree, return all root-to-leaf paths in any order.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['String', 'Backtracking', 'Tree', 'Depth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var binaryTreePaths = function(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<string> binaryTreePaths(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<String> binaryTreePaths(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 67,
    id: 'ugly-number',
    title: 'Ugly Number',
    description: 'An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5. Given an integer n, return true if n is an ugly number.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var isUgly = function(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isUgly(self, n: int) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isUgly(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isUgly(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 68,
    id: 'power-of-two',
    title: 'Power of Two',
    description: 'Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two, if there exists an integer x such that n == 2^x.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Math', 'Bit Manipulation', 'Recursion'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var isPowerOfTwo = function(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isPowerOfTwo(self, n: int) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isPowerOfTwo(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isPowerOfTwo(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 69,
    id: 'implement-queue-using-stacks',
    title: 'Implement Queue using Stacks',
    description: 'Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Stack', 'Design', 'Queue'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var MyQueue = function() {\n  // Write your code here\n};`,
      python: `class MyQueue:\n    def __init__(self):\n        # Write your code here\n`,
      cpp: `class MyQueue {\npublic:\n    MyQueue() {\n        // Write your code here\n    }\n};`,
      java: `class MyQueue {\n    public MyQueue() {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 70,
    id: 'palindrome-linked-list',
    title: 'Palindrome Linked List',
    description: 'Given the head of a singly linked list, return true if it is a palindrome.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Linked List', 'Two Pointers', 'Stack', 'Recursion'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var isPalindrome = function(head) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isPalindrome(self, head: Optional[ListNode]) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isPalindrome(ListNode* head) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isPalindrome(ListNode head) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 71,
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
    srNo: 72,
    id: 'delete-node-in-a-linked-list',
    title: 'Delete Node in a Linked List',
    description: 'Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Linked List'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var deleteNode = function(node) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def deleteNode(self, node):\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void deleteNode(ListNode* node) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void deleteNode(ListNode node) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 73,
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
    srNo: 74,
    id: 'valid-anagram-ii',
    title: 'Valid Anagram II',
    description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Hash Table', 'String', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var isAnagram = function(s, t) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isAnagram(String s, String t) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 75,
    id: 'find-all-numbers-disappeared-in-an-array',
    title: 'Find All Numbers Disappeared in an Array',
    description: 'Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Hash Table'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var findDisappearedNumbers = function(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> findDisappearedNumbers(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<Integer> findDisappearedNumbers(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 76,
    id: 'sum-of-two-integers',
    title: 'Sum of Two Integers',
    description: 'Given two integers a and b, return the sum of the two integers without using the operators + and -.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Math', 'Bit Manipulation'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var getSum = function(a, b) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def getSum(self, a: int, b: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int getSum(int a, int b) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int getSum(int a, int b) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 77,
    id: 'longest-palindrome',
    title: 'Longest Palindrome',
    description: 'Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters. Letters are case sensitive, for example, "Aa" is not considered a palindrome here.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Hash Table', 'String', 'Greedy'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var longestPalindrome = function(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def longestPalindrome(self, s: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int longestPalindrome(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int longestPalindrome(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 78,
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
    srNo: 79,
    id: 'convert-bst-to-greater-tree',
    title: 'Convert BST to Greater Tree',
    description: 'Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Binary Search Tree', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var convertBST = function(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def convertBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    TreeNode* convertBST(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public TreeNode convertBST(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 80,
    id: 'diameter-of-binary-tree',
    title: 'Diameter of Binary Tree',
    description: 'Given the root of a binary tree, return the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var diameterOfBinaryTree = function(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int diameterOfBinaryTree(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int diameterOfBinaryTree(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 81,
    id: 'middle-of-the-linked-list',
    title: 'Middle of the Linked List',
    description: 'Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Linked List', 'Two Pointers'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var middleNode = function(head) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    ListNode* middleNode(ListNode* head) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public ListNode middleNode(ListNode head) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 82,
    id: 'maximum-subarray',
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
    srNo: 83,
    id: 'squares-of-a-sorted-array',
    title: 'Squares of a Sorted Array',
    description: 'Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var sortedSquares = function(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def sortedSquares(self, nums: List[int]) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> sortedSquares(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[] sortedSquares(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 84,
    id: 'backspace-string-compare',
    title: 'Backspace String Compare',
    description: 'Given two strings s and t, return true if they are equal when both are typed into empty text editors. \'#\' means a backspace character.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Two Pointers', 'String', 'Stack', 'Simulation'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var backspaceCompare = function(s, t) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def backspaceCompare(self, s: str, t: str) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool backspaceCompare(string s, string t) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean backspaceCompare(String s, String t) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 85,
    id: 'counting-bits',
    title: 'Counting Bits',
    description: 'Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1\'s in the binary representation of i.',
    difficulty: 'Easy',
    domain: 'DSA',
    tags: ['Dynamic Programming', 'Bit Manipulation'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var countBits = function(n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def countBits(self, n: int) -> List[int]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<int> countBits(int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[] countBits(int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 86,
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
    srNo: 87,
    id: 'longest-substring-without-repeating-characters',
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
    srNo: 88,
    id: 'longest-palindromic-substring',
    title: 'Longest Palindromic Substring',
    description: 'Given a string s, return the longest palindromic substring in s.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var longestPalindrome = function(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    string longestPalindrome(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public String longestPalindrome(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 89,
    id: 'zigzag-conversion',
    title: 'Zigzag Conversion',
    description: 'The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)\n\nP   A   H   N\nA P L S I I G\nY   I   R\n\nAnd then read line by line: "PAHNAPLSIIGYIR". Write the code that will take a string and make this conversion given a number of rows.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var convert = function(s, numRows) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def convert(self, s: str, numRows: int) -> str:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    string convert(string s, int numRows) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public String convert(String s, int numRows) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 90,
    id: 'string-to-integer-atoi',
    title: 'String to Integer (atoi)',
    description: 'Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++\'s atoi function).',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var myAtoi = function(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def myAtoi(self, s: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int myAtoi(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int myAtoi(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 91,
    id: 'integer-to-roman',
    title: 'Integer to Roman',
    description: 'Given an integer, convert it to a roman numeral.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Hash Table', 'Math', 'String'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var intToRoman = function(num) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def intToRoman(self, num: int) -> str:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    string intToRoman(int num) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public String intToRoman(int num) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 92,
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
    srNo: 93,
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
    srNo: 94,
    id: '3sum-closest',
    title: '3Sum Closest',
    description: 'Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var threeSumClosest = function(nums, target) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def threeSumClosest(self, nums: List[int], target: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int threeSumClosest(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int threeSumClosest(int[] nums, int target) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 95,
    id: 'letter-combinations-of-a-phone-number',
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
    srNo: 96,
    id: '4sum',
    title: '4Sum',
    description: 'Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that: a, b, c, and d are distinct. nums[a] + nums[b] + nums[c] + nums[d] == target. You may return the answer in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var fourSum = function(nums, target) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> fourSum(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> fourSum(int[] nums, int target) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 97,
    id: 'remove-nth-node-from-end-of-list',
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
    srNo: 98,
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
    srNo: 99,
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
    srNo: 100,
    id: 'swap-nodes-in-pairs',
    title: 'Swap Nodes in Pairs',
    description: 'Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list\'s nodes (i.e., only nodes themselves may be changed.)',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Linked List', 'Recursion'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var swapPairs = function(head) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    ListNode* swapPairs(ListNode* head) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public ListNode swapPairs(ListNode head) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 101,
    id: 'reverse-nodes-in-k-group',
    title: 'Reverse Nodes in k-Group',
    description: 'Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.',
    difficulty: 'Hard',
    domain: 'DSA',
    tags: ['Linked List', 'Recursion'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var reverseKGroup = function(head, k) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    ListNode* reverseKGroup(ListNode* head, int k) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public ListNode reverseKGroup(ListNode head, int k) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 102,
    id: 'search-in-rotated-sorted-array',
    title: 'Search in Rotated Sorted Array',
    description: 'There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Binary Search'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var search = function(nums, target) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int search(int[] nums, int target) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 103,
    id: 'combination-sum',
    title: 'Combination Sum',
    description: 'Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Backtracking'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var combinationSum = function(candidates, target) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> combinationSum(int[] candidates, int target) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 104,
    id: 'permutations',
    title: 'Permutations',
    description: 'Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Backtracking'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var permute = function(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def permute(self, nums: List[int]) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> permute(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> permute(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 105,
    id: 'rotate-image',
    title: 'Rotate Image',
    description: 'You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Math', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var rotate = function(matrix) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def rotate(self, matrix: List[List[int]]) -> None:\n        """\n        Do not return anything, modify matrix in-place instead.\n        """\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void rotate(vector<vector<int>>& matrix) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void rotate(int[][] matrix) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 106,
    id: 'group-anagrams',
    title: 'Group Anagrams',
    description: 'Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'String', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var groupAnagrams = function(strs) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 107,
    id: 'jump-game',
    title: 'Jump Game',
    description: 'You are given an integer array nums. You are initially positioned at the array\'s first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming', 'Greedy'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var canJump = function(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def canJump(self, nums: List[int]) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool canJump(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean canJump(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 108,
    id: 'merge-intervals',
    title: 'Merge Intervals',
    description: 'Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var merge = function(intervals) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def merge(self, intervals: List[List[int]]) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int[][] merge(int[][] intervals) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 109,
    id: 'unique-paths',
    title: 'Unique Paths',
    description: 'There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time. Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Math', 'Dynamic Programming', 'Combinatorics'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var uniquePaths = function(m, n) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int uniquePaths(int m, int n) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 110,
    id: 'set-matrix-zeroes',
    title: 'Set Matrix Zeroes',
    description: 'Given an m x n integer matrix, if an element is 0, set its entire row and column to 0\'s. You must do it in-place.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Hash Table', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var setZeroes = function(matrix) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def setZeroes(self, matrix: List[List[int]]) -> None:\n        """\n        Do not return anything, modify matrix in-place instead.\n        """\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void setZeroes(vector<vector<int>>& matrix) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void setZeroes(int[][] matrix) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 111,
    id: 'sort-colors',
    title: 'Sort Colors',
    description: 'Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Two Pointers', 'Sorting'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var sortColors = function(nums) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def sortColors(self, nums: List[int]) -> None:\n        """\n        Do not return anything, modify nums in-place instead.\n        """\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public void sortColors(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 112,
    id: 'word-search',
    title: 'Word Search',
    description: 'Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Backtracking', 'Matrix'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var exist = function(board, word) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool exist(vector<vector<char>>& board, string word) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean exist(char[][] board, String word) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 113,
    id: 'decode-ways',
    title: 'Decode Ways',
    description: 'A message containing letters from A-Z can be encoded into numbers using the following mapping: \'A\' -> "1", \'B\' -> "2", ..., \'Z\' -> "26". To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). Given a string s containing only digits, return the number of ways to decode it.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['String', 'Dynamic Programming'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var numDecodings = function(s) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def numDecodings(self, s: str) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int numDecodings(string s) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int numDecodings(String s) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 114,
    id: 'validate-binary-search-tree',
    title: 'Validate Binary Search Tree',
    description: 'Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as follows: The left subtree of a node contains only nodes with keys less than the node\'s key. The right subtree of a node contains only nodes with keys greater than the node\'s key. Both the left and right subtrees must also be binary search trees.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Tree', 'Depth-First Search', 'Binary Search Tree', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var isValidBST = function(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def isValidBST(self, root: Optional[TreeNode]) -> bool:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    bool isValidBST(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean isValidBST(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 115,
    id: 'binary-tree-level-order-traversal',
    title: 'Binary Tree Level Order Traversal',
    description: 'Given the root of a binary tree, return the level order traversal of its nodes\' values. (i.e., from left to right, level by level).',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Tree', 'Breadth-First Search', 'Binary Tree'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var levelOrder = function(root) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> levelOrder(TreeNode* root) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        // Write your code here\n    }\n}`
    },
    testCases: []
  },
  {
    srNo: 116,
    id: 'coin-change',
    title: 'Coin Change',
    description: 'You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.',
    difficulty: 'Medium',
    domain: 'DSA',
    tags: ['Array', 'Dynamic Programming', 'Breadth-First Search'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `var coinChange = function(coins, amount) {\n  // Write your code here\n};`,
      python: `class Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        # Write your code here\n`,
      cpp: `class Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public int coinChange(int[] coins, int amount) {\n        // Write your code here\n    }\n}`
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

export function getNextChallengeId(currentId: string): string | null {
  const currentIndex = challenges.findIndex(c => c.id === currentId);
  if (currentIndex === -1 || currentIndex === challenges.length - 1) {
    return null; // Not found or it's the last challenge
  }
  return challenges[currentIndex + 1].id;
}

export function getPreviousChallengeId(currentId: string): string | null {
  const currentIndex = challenges.findIndex(c => c.id === currentId);
  if (currentIndex <= 0) {
    return null; // Not found or it's the first challenge
  }
  return challenges[currentIndex - 1].id;
}


export function getChallengeReferenceSolution(id: string): string | undefined {
    const challenge = challenges.find(c => c.id === id);
    // For now, we will always use the javascript solution as the reference for the AI.
    return challenge?.templates?.javascript;
}

