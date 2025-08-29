
import { Challenge } from './challenges';

export interface DungeonFloor {
  id: string;
  title: string;
  description: string;
  challenges: Challenge['id'][];
}

export const dungeon: DungeonFloor[] = [
  {
    id: 'floor-1',
    title: 'The Entry Hall of Arrays',
    description: 'Begin your journey by mastering the fundamental building blocks.',
    challenges: ['two-sum', 'reverse-string', 'contains-duplicate', 'max-subarray', 'valid-palindrome'],
  },
  {
    id: 'floor-2',
    title: 'The Crypt of Strings',
    description: 'Manipulate words and characters to unlock the secrets of this floor.',
    challenges: ['valid-parentheses', 'valid-anagram', 'longest-substring', 'longest-common-prefix', 'implement-strstr'],
  },
  {
    id: 'floor-3',
    title: 'The Linked Corridors',
    description: 'Navigate complex connections and pointers to find your way through.',
    challenges: ['merge-sorted-lists', 'reverse-linked-list', 'linked-list-cycle', 'remove-nth-node-from-end'],
  },
  {
    id: 'floor-4',
    title: 'The Sorting Sanctum',
    description: 'Bring order to chaos and prove your mastery of sorting algorithms.',
    challenges: ['sort-colors', 'merge-intervals', 'group-anagrams'],
  },
  {
    id: 'floor-5',
    title: 'The Grove of Trees',
    description: 'Traverse the branches of binary trees to solve these arboreal puzzles.',
    challenges: ['inorder-traversal', 'max-depth-of-binary-tree', 'invert-binary-tree', 'validate-binary-search-tree', 'binary-tree-level-order-traversal'],
  },
  {
    id: 'floor-6',
    title: 'The Pit of Dynamic Programming',
    description: 'Only the most efficient solutions will suffice to escape this treacherous pit.',
    challenges: ['climbing-stairs', 'coin-change', 'word-break', 'longest-increasing-subsequence'],
  },
];
