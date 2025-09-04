
'use server';

/**
 * @fileOverview A flow for simulating code execution and testing against test cases.
 *
 * - runCode - Simulates running user-provided code against a set of test cases.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import type { RunCodeInput, RunCodeOutput } from '@/lib/code-execution-types';
import { RunCodeInputSchema, RunCodeOutputSchema } from '@/lib/code-execution-types';


const runCodePrompt = ai.definePrompt({
  name: 'runCodePrompt',
  input: { schema: RunCodeInputSchema },
  output: { schema: RunCodeOutputSchema },
  prompt: `You are an expert code execution engine and programming contest judge.
Your task is to simulate the execution of a user's code for a given programming challenge and evaluate it against a series of test cases.

Challenge: {{{challengeTitle}}}
Language: {{{language}}}

User's Code:
\`\`\`{{{language}}}
{{{code}}}
\`\`\`

Test Cases (JSON):
{{{testCases}}}

Please execute the code against each test case provided.
For each test case, determine the following:
1.  **Actual Output**: What the user's code returns or produces for the given input.
2.  **Passed**: A boolean indicating if the 'Actual Output' strictly matches the 'Expected Output'.
3.  **Logs**: Any output printed to the console or standard output during execution.
4.  **Error**: Any runtime or compilation errors that occur. If the code runs without error, this should be null.

Return the results as a JSON object that adheres to the output schema. Ensure that the 'actualOutput' is in the same data type as the 'expectedOutput' for accurate comparison.
If the user's code is incomplete or contains syntax errors that prevent execution, set the 'error' field for each test case to a descriptive message (e.g., "Syntax Error: Incomplete function"). Do not try to complete the code.

{{#if (eq challengeTitle "Two Sum")}}
Here is a reference solution for the "Two Sum" problem in JavaScript for your guidance:
\`\`\`javascript
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "FizzBuzz")}}
Here is a reference solution for "FizzBuzz" in JavaScript for your guidance:
\`\`\`javascript
function fizzBuzz(n) {
    const answer = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push("FizzBuzz");
        } else if (i % 3 === 0) {
            answer.push("Fizz");
        } else if (i % 5 === 0) {
            answer.push("Buzz");
        } else {
            answer.push(String(i));
        }
    }
    return answer;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Reverse String")}}
Here is a reference solution for "Reverse String" in JavaScript for your guidance:
\`\`\`javascript
function reverseString(s) {
  s.reverse();
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Palindrome Number")}}
Here is a reference solution for "Palindrome Number" in JavaScript for your guidance:
\`\`\`javascript
var isPalindrome = function(x) {
    if (x < 0) return false;
    return x === parseInt(x.toString().split('').reverse().join(''));
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Valid Parentheses")}}
Here is a reference solution for "Valid Parentheses" in JavaScript for your guidance:
\`\`\`javascript
var isValid = function(s) {
    const stack = [];
    const map = { "(": ")", "{": "}", "[": "]" };
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (map[c]) {
            stack.push(map[c]);
        } else if (c.length > 0 && c === stack[stack.length - 1]) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Merge Two Sorted Lists")}}
Here is a reference solution for "Merge Two Sorted Lists" in JavaScript for your guidance:
\`\`\`javascript
var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Longest Substring Without Repeating Characters")}}
Here is a reference solution for "Longest Substring Without Repeating Characters" in JavaScript for your guidance:
\`\`\`javascript
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let maxSize = 0;

    for (let i = 0; i < s.length; i++) {
        while(set.has(s[i])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1);
    }
    return maxSize;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Maximum Subarray")}}
Here is a reference solution for "Maximum Subarray" in JavaScript for your guidance:
\`\`\`javascript
var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > max) max = sum;
        if (sum < 0) sum = 0;
    }
    return max;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Binary Tree Inorder Traversal")}}
Here is a reference solution for "Binary Tree Inorder Traversal" in JavaScript for your guidance:
\`\`\`javascript
var inorderTraversal = function(root) {
    const result = [];
    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }
    traverse(root);
    return result;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Roman to Integer")}}
Here is a reference solution for "Roman to Integer" in JavaScript for your guidance:
\`\`\`javascript
var romanToInt = function(s) {
    const map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] < map[s[i+1]]) {
            result -= map[s[i]];
        } else {
            result += map[s[i]];
        }
    }
    return result;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Longest Common Prefix")}}
Here is a reference solution for "Longest Common Prefix" in JavaScript for your guidance:
\`\`\`javascript
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Remove Duplicates from Sorted Array")}}
Here is a reference solution for "Remove Duplicates from Sorted Array" in JavaScript for your guidance:
\`\`\`javascript
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Implement strStr()")}}
Here is a reference solution for "Implement strStr()" in JavaScript for your guidance:
\`\`\`javascript
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Add Two Numbers")}}
Here is a reference solution for "Add Two Numbers" in JavaScript for your guidance:
\`\`\`javascript
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let curr = dummyHead;
    let carry = 0;
    while (l1 || l2 || carry > 0) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return dummyHead.next;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "3Sum")}}
Here is a reference solution for "3Sum" in JavaScript for your guidance:
\`\`\`javascript
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Letter Combinations of a Phone Number")}}
Here is a reference solution for "Letter Combinations of a Phone Number" in JavaScript for your guidance:
\`\`\`javascript
var letterCombinations = function(digits) {
    if (!digits) return [];
    const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
    const result = [];
    function backtrack(index, path) {
        if (index === digits.length) {
            result.push(path);
            return;
        }
        for (const char of map[digits[index]]) {
            backtrack(index + 1, path + char);
        }
    }
    backtrack(0, "");
    return result;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Remove Nth Node From End of List")}}
Here is a reference solution for "Remove Nth Node From End of List" in JavaScript for your guidance:
\`\`\`javascript
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Generate Parentheses")}}
Here is a reference solution for "Generate Parentheses" in JavaScript for your guidance:
\`\`\`javascript
var generateParenthesis = function(n) {
    const result = [];
    function backtrack(s, left, right) {
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }
        if (left < n) {
            backtrack(s + '(', left + 1, right);
        }
        if (right < left) {
            backtrack(s + ')', left, right + 1);
        }
    }
    backtrack('', 0, 0);
    return result;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Merge k Sorted Lists")}}
Here is a reference solution for "Merge k Sorted Lists" in JavaScript for your guidance:
\`\`\`javascript
// This is a simplified version using merge sort logic. A min-heap is more optimal.
var mergeKLists = function(lists) {
    if (!lists || lists.length === 0) return null;
    while (lists.length > 1) {
        let mergedLists = [];
        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = (i + 1 < lists.length) ? lists[i + 1] : null;
            mergedLists.push(mergeTwoLists(l1, l2));
        }
        lists = mergedLists;
    }
    return lists[0];
};

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let tail = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    tail.next = l1 || l2;
    return dummy.next;
}
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Search in Rotated Sorted Array")}}
Here is a reference solution for "Search in Rotated Sorted Array" in JavaScript for your guidance:
\`\`\`javascript
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[left] <= nums[mid]) {
            if (target > nums[mid] || target < nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (target < nums[mid] || target > nums[right]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Group Anagrams")}}
Here is a reference solution for "Group Anagrams" in JavaScript for your guidance:
\`\`\`javascript
var groupAnagrams = function(strs) {
    let map = {};
    for (let str of strs) {
        let sorted = str.split('').sort().join('');
        if (!map[sorted]) {
            map[sorted] = [];
        }
        map[sorted].push(str);
    }
    return Object.values(map);
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Jump Game")}}
Here is a reference solution for "Jump Game" in JavaScript for your guidance:
\`\`\`javascript
var canJump = function(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > max) return false;
        max = Math.max(max, i + nums[i]);
    }
    return true;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Permutations")}}
Here is a reference solution for "Permutations" in JavaScript for your guidance:
\`\`\`javascript
var permute = function(nums) {
    const result = [];
    function backtrack(index, current) {
        if (index === nums.length) {
            result.push([...current]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (!current.includes(nums[i])) {
                current.push(nums[i]);
                backtrack(index + 1, current);
                current.pop();
            }
        }
    }
    // This is a simplified version. A more correct backtrack would manage used elements differently.
    function backtrack_simple(start) {
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]];
            backtrack_simple(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }
    backtrack_simple(0);
    return result;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Rotate Image")}}
Here is a reference solution for "Rotate Image" in JavaScript for your guidance:
\`\`\`javascript
var rotate = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[0].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Climbing Stairs")}}
Here is a reference solution for "Climbing Stairs" in JavaScript for your guidance:
\`\`\`javascript
var climbStairs = function(n) {
    if (n <= 2) return n;
    let one = 1, two = 2;
    for (let i = 3; i <= n; i++) {
        let temp = one + two;
        one = two;
        two = temp;
    }
    return two;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Minimum Path Sum")}}
Here is a reference solution for "Minimum Path Sum" in JavaScript for your guidance:
\`\`\`javascript
var minPathSum = function(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (i > 0 && j > 0) {
                grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
            } else if (i > 0) {
                grid[i][j] += grid[i-1][j];
            } else if (j > 0) {
                grid[i][j] += grid[i][j-1];
            }
        }
    }
    return grid[grid.length - 1][grid[0].length - 1];
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Unique Paths")}}
Here is a reference solution for "Unique Paths" in JavaScript for your guidance:
\`\`\`javascript
var uniquePaths = function(m, n) {
    const dp = Array(m).fill(Array(n).fill(1));
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Word Search")}}
Here is a reference solution for "Word Search" in JavaScript for your guidance:
\`\`\`javascript
var exist = function(board, word) {
    function dfs(r, c, i) {
        if (i === word.length) return true;
        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || board[r][c] !== word[i]) return false;
        
        const temp = board[r][c];
        board[r][c] = '#'; // Mark as visited
        
        const found = dfs(r+1, c, i+1) || dfs(r-1, c, i+1) || dfs(r, c+1, i+1) || dfs(r, c-1, i+1);
        
        board[r][c] = temp; // Backtrack
        return found;
    }
    
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (dfs(r, c, 0)) return true;
        }
    }
    return false;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Subsets")}}
Here is a reference solution for "Subsets" in JavaScript for your guidance:
\`\`\`javascript
var subsets = function(nums) {
    const result = [];
    function backtrack(index, current) {
        result.push([...current]);
        for (let i = index; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }
    backtrack(0, []);
    return result;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Binary Tree Level Order Traversal")}}
Here is a reference solution for "Binary Tree Level Order Traversal" in JavaScript for your guidance:
\`\`\`javascript
var levelOrder = function(root) {
    if (!root) return [];
    const queue = [root];
    const result = [];
    while (queue.length > 0) {
        let levelSize = queue.length;
        const currentLevel = [];
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            currentLevel.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(currentLevel);
    }
    return result;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Maximum Depth of Binary Tree")}}
Here is a reference solution for "Maximum Depth of Binary Tree" in JavaScript for your guidance:
\`\`\`javascript
var maxDepth = function(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Best Time to Buy and Sell Stock")}}
Here is a reference solution for "Best Time to Buy and Sell Stock" in JavaScript for your guidance:
\`\`\`javascript
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Valid Palindrome")}}
Here is a reference solution for "Valid Palindrome" in JavaScript for your guidance:
\`\`\`javascript
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Single Number")}}
Here is a reference solution for "Single Number" in JavaScript for your guidance:
\`\`\`javascript
var singleNumber = function(nums) {
    let result = 0;
    for (const num of nums) {
        result ^= num;
    }
    return result;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Linked List Cycle")}}
Here is a reference solution for "Linked List Cycle" in JavaScript for your guidance:
\`\`\`javascript
var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "LRU Cache")}}
Here is a reference solution for "LRU Cache" in JavaScript for your guidance:
\`\`\`javascript
class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }
    get(key) {
        if (!this.cache.has(key)) return -1;
        const val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);
        return val;
    }
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Min Stack")}}
Here is a reference solution for "Min Stack" in JavaScript for your guidance:
\`\`\`javascript
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }
    pop() {
        const val = this.stack.pop();
        if (val === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Intersection of Two Linked Lists")}}
Here is a reference solution for "Intersection of Two Linked Lists" in JavaScript for your guidance:
\`\`\`javascript
var getIntersectionNode = function(headA, headB) {
    let p1 = headA;
    let p2 = headB;
    while (p1 !== p2) {
        p1 = p1 ? p1.next : headB;
        p2 = p2 ? p2.next : headA;
    }
    return p1;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Majority Element")}}
Here is a reference solution for "Majority Element" in JavaScript for your guidance:
\`\`\`javascript
var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Reverse Linked List")}}
Here is a reference solution for "Reverse Linked List" in JavaScript for your guidance:
\`\`\`javascript
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Contains Duplicate")}}
Here is a reference solution for "Contains Duplicate" in JavaScript for your guidance:
\`\`\`javascript
var containsDuplicate = function(nums) {
    const s = new Set(nums);
    return s.size !== nums.length;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Invert Binary Tree")}}
Here is a reference solution for "Invert Binary Tree" in JavaScript for your guidance:
\`\`\`javascript
var invertTree = function(root) {
    if (!root) return null;
    const temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Valid Anagram")}}
Here is a reference solution for "Valid Anagram" in JavaScript for your guidance:
\`\`\`javascript
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    return s.split('').sort().join('') === t.split('').sort().join('');
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Product of Array Except Self")}}
Here is a reference solution for "Product of Array Except Self" in JavaScript for your guidance:
\`\`\`javascript
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);
    let left = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = left;
        left *= nums[i];
    }
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= right;
        right *= nums[i];
    }
    return answer;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Lowest Common Ancestor of a Binary Search Tree")}}
Here is a reference solution for "Lowest Common Ancestor of a Binary Search Tree" in JavaScript for your guidance:
\`\`\`javascript
var lowestCommonAncestor = function(root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Serialize and Deserialize Binary Tree")}}
Here is a reference solution for "Serialize and Deserialize Binary Tree" in JavaScript for your guidance:
\`\`\`javascript
var serialize = function(root) {
    if (!root) return 'null';
    return root.val + ',' + serialize(root.left) + ',' + serialize(root.right);
};
var deserialize = function(data) {
    const nodes = data.split(',');
    function build() {
        const val = nodes.shift();
        if (val === 'null') return null;
        const node = new TreeNode(parseInt(val));
        node.left = build();
        node.right = build();
        return node;
    }
    return build();
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Coin Change")}}
Here is a reference solution for "Coin Change" in JavaScript for your guidance:
\`\`\`javascript
var coinChange = function(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Longest Increasing Subsequence")}}
Here is a reference solution for "Longest Increasing Subsequence" in JavaScript for your guidance:
\`\`\`javascript
var lengthOfLIS = function(nums) {
    const tails = [];
    for (const num of nums) {
        let i = 0, j = tails.length;
        while (i < j) {
            const m = Math.floor((i + j) / 2);
            if (tails[m] < num) {
                i = m + 1;
            } else {
                j = m;
            }
        }
        if (i === tails.length) {
            tails.push(num);
        } else {
            tails[i] = num;
        }
    }
    return tails.length;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Trapping Rain Water")}}
Here is a reference solution for "Trapping Rain Water" in JavaScript for your guidance:
\`\`\`javascript
var trap = function(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    return water;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Find Median from Data Stream")}}
Here is a reference solution for "Find Median from Data Stream" in JavaScript for your guidance:
\`\`\`javascript
// A simplified version using a sorted array. Min/Max heaps are more optimal.
class MedianFinder {
    constructor() { this.store = []; }
    addNum(num) {
        const index = this.store.findIndex(val => val >= num);
        if (index === -1) this.store.push(num);
        else this.store.splice(index, 0, num);
    }
    findMedian() {
        const mid = Math.floor(this.store.length / 2);
        return this.store.length % 2 !== 0
            ? this.store[mid]
            : (this.store[mid - 1] + this.store[mid]) / 2;
    }
}
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Container With Most Water")}}
Here is a reference solution for "Container With Most Water" in JavaScript for your guidance:
\`\`\`javascript
var maxArea = function(height) {
    let max = 0;
    let left = 0, right = height.length - 1;
    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(max, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Merge Intervals")}}
Here is a reference solution for "Merge Intervals" in JavaScript for your guidance:
\`\`\`javascript
var merge = function(intervals) {
    if (intervals.length === 0) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const last = merged[merged.length - 1];
        if (intervals[i][0] <= last[1]) {
            last[1] = Math.max(last[1], intervals[i][1]);
        } else {
            merged.push(intervals[i]);
        }
    }
    return merged;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Sort Colors")}}
Here is a reference solution for "Sort Colors" in JavaScript for your guidance:
\`\`\`javascript
var sortColors = function(nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Validate Binary Search Tree")}}
Here is a reference solution for "Validate Binary Search Tree" in JavaScript for your guidance:
\`\`\`javascript
var isValidBST = function(root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Kth Smallest Element in a BST")}}
Here is a reference solution for "Kth Smallest Element in a BST" in JavaScript for your guidance:
\`\`\`javascript
var kthSmallest = function(root, k) {
    const stack = [];
    while (true) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (--k === 0) return root.val;
        root = root.right;
    }
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Construct Binary Tree from Preorder and Inorder Traversal")}}
Here is a reference solution for "Construct Binary Tree from Preorder and Inorder Traversal" in JavaScript for your guidance:
\`\`\`javascript
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);
    const mid = inorder.indexOf(rootVal);
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
    return root;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Word Break")}}
Here is a reference solution for "Word Break" in JavaScript for your guidance:
\`\`\`javascript
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Course Schedule")}}
Here is a reference solution for "Course Schedule" in JavaScript for your guidance:
\`\`\`javascript
var canFinish = function(numCourses, prerequisites) {
    const adj = Array.from({ length: numCourses }, () => []);
    const inDegree = Array(numCourses).fill(0);
    for (const [course, prereq] of prerequisites) {
        adj[prereq].push(course);
        inDegree[course]++;
    }
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    let count = 0;
    while (queue.length > 0) {
        const current = queue.shift();
        count++;
        for (const neighbor of adj[current]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    return count === numCourses;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Implement Trie (Prefix Tree)")}}
Here is a reference solution for "Implement Trie (Prefix Tree)" in JavaScript for your guidance:
\`\`\`javascript
class Trie {
    constructor() {
        this.root = {};
    }
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node[char]) node[char] = {};
            node = node[char];
        }
        node.isEnd = true;
    }
    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node[char]) return false;
            node = node[char];
        }
        return node.isEnd === true;
    }
    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node[char]) return false;
            node = node[char];
        }
        return true;
    }
}
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Find All Anagrams in a String")}}
Here is a reference solution for "Find All Anagrams in a String" in JavaScript for your guidance:
\`\`\`javascript
var findAnagrams = function(s, p) {
    const result = [];
    if (s.length < p.length) return result;
    const pMap = {}, sMap = {};
    for (let i = 0; i < p.length; i++) {
        pMap[p[i]] = (pMap[p[i]] || 0) + 1;
        sMap[s[i]] = (sMap[s[i]] || 0) + 1;
    }
    let i = 0;
    for (let j = p.length; j < s.length; j++) {
        if (areEqual(pMap, sMap)) result.push(i);
        sMap[s[j]] = (sMap[s[j]] || 0) + 1;
        sMap[s[i]]--;
        if (sMap[s[i]] === 0) delete sMap[s[i]];
        i++;
    }
    if (areEqual(pMap, sMap)) result.push(i);
    return result;
};
function areEqual(map1, map2) {
    for (const key in map1) {
        if (map1[key] !== map2[key]) return false;
    }
    return Object.keys(map1).length === Object.keys(map2).length;
}
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Word Ladder")}}
Here is a reference solution for "Word Ladder" in JavaScript for your guidance:
\`\`\`javascript
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    let queue = [[beginWord, 1]];
    while (queue.length > 0) {
        let [word, length] = queue.shift();
        if (word === endWord) return length;
        for (let i = 0; i < word.length; i++) {
            for (let c of 'abcdefghijklmnopqrstuvwxyz') {
                let newWord = word.slice(0, i) + c + word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord, length + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }
    return 0;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Median of Two Sorted Arrays")}}
Here is a reference solution for "Median of Two Sorted Arrays" in JavaScript for your guidance:
\`\`\`javascript
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    return merged.length % 2 !== 0
        ? merged[mid]
        : (merged[mid - 1] + merged[mid]) / 2;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Regular Expression Matching")}}
Here is a reference solution for "Regular Expression Matching" in JavaScript for your guidance:
\`\`\`javascript
var isMatch = function(s, p) {
    const dp = Array(s.length + 1).fill(false).map(() => Array(p.length + 1).fill(false));
    dp[0][0] = true;
    for (let j = 1; j <= p.length; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2];
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            } else {
                dp[i][j] = false;
            }
        }
    }
    return dp[s.length][p.length];
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Binary Tree Maximum Path Sum")}}
Here is a reference solution for "Binary Tree Maximum Path Sum" in JavaScript for your guidance:
\`\`\`javascript
var maxPathSum = function(root) {
    let max = -Infinity;
    function dfs(node) {
        if (!node) return 0;
        let left = Math.max(0, dfs(node.left));
        let right = Math.max(0, dfs(node.right));
        max = Math.max(max, left + right + node.val);
        return Math.max(left, right) + node.val;
    }
    dfs(root);
    return max;
};
\`\`\`
{{/if}}
{{#if (eq challengeTitle "Longest Consecutive Sequence")}}
Here is a reference solution for "Longest Consecutive Sequence" in JavaScript for your guidance:
\`\`\`javascript
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let max = 0;
    for (const num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            while (set.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            max = Math.max(max, currentStreak);
        }
    }
    return max;
};
\`\`\`
{{/if}}
`,
});

export async function runCode(input: RunCodeInput): Promise<RunCodeOutput> {
    const { output } = await runCodePrompt(input);
    if (!output) {
      // This case should ideally not be reached if the prompt is well-defined
      // and the model behaves as expected.
      return {
        results: [],
      };
    }
    return output;
  }
