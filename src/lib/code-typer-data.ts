import type { CodeTyperChallenge } from '@/lib/types';

export const codeTyperChallenges: CodeTyperChallenge[] = [
  {
    id: 'ct1',
    title: 'JavaScript FizzBuzz',
    language: 'javascript',
    difficulty: 'Beginner',
    xp: 15,
    snippet: `for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}`
  },
  {
    id: 'ct2',
    title: 'Python Quick Sort',
    language: 'python',
    difficulty: 'Advanced',
    xp: 50,
    snippet: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)`
  },
  {
    id: 'ct3',
    title: 'Java Hello World',
    language: 'java',
    difficulty: 'Beginner',
    xp: 10,
    snippet: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
  },
  {
    id: 'ct4',
    title: 'C++ Factorial',
    language: 'cpp',
    difficulty: 'Intermediate',
    xp: 30,
    snippet: `#include <iostream>

unsigned long long factorial(int n) {
    if (n < 0)
        return 0; // Or throw an exception
    if (n == 0)
        return 1;
    else
        return n * factorial(n - 1);
}`
  },
  {
    id: 'ct5',
    title: 'JavaScript Fetch API',
    language: 'javascript',
    difficulty: 'Intermediate',
    xp: 35,
    snippet: `async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}`
  },
  {
    id: 'ct6',
    title: 'Python List Comprehension',
    language: 'python',
    difficulty: 'Beginner',
    xp: 20,
    snippet: `squares = [x**2 for x in range(10)]
even_numbers = [x for x in range(20) if x % 2 == 0]`
  },
];
