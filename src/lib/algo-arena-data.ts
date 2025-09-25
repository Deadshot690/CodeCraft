import type { Task } from '@/lib/types';

export const algoArenaTasks: Task[] = [
    {
      id: 'aa1',
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
        id: 'aa2',
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
        id: 'aa3',
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
                explanation: "The root node\\\'s value is 5 but its right child\\\'s value is 4."
            }
        ],
        constraints: ['The number of nodes in the tree is in the range [1, 104].', '-231 <= Node.val <= 231 - 1']
    },
    {
      id: 'aa4',
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
      id: 'aa6',
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
    }
  ];

    