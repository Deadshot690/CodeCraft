import type { DebugChallenge } from '@/lib/types';

export const debugChallenges: DebugChallenge[] = [
    {
      id: 'db1',
      title: 'Python: Sum of List',
      description: 'This Python function is supposed to calculate the sum of a list of numbers, but it keeps returning 0.',
      language: 'python',
      difficulty: 'Beginner',
      xp: 20,
      buggyCode: `def calculate_sum(numbers):
  total = 0
  for number in numbers:
    number + total
  return total
`,
      testCases: [
          { input: '[1, 2, 3]', expectedOutput: '6' },
          { input: '[-1, 1, 10]', expectedOutput: '10' },
          { input: '[]', expectedOutput: '0' },
      ]
    },
    {
      id: 'db2',
      title: 'JavaScript: Greet User',
      description: 'This JavaScript function should return a greeting string "Hello, [name]!", but it\'s not working correctly.',
      language: 'javascript',
      difficulty: 'Beginner',
      xp: 20,
      buggyCode: `function greet(name) {
  "Hello, " + name + "!"
}`,
      testCases: [
          { input: '"World"', expectedOutput: 'Hello, World!' },
          { input: '"Alice"', expectedOutput: 'Hello, Alice!' },
      ]
    },
    {
      id: 'db3',
      title: 'JavaScript: Counter Bug',
      description: 'This React component has a button that should increment a counter, but the counter value never changes in the UI.',
      language: 'javascript',
      difficulty: 'Intermediate',
      xp: 40,
      buggyCode: `import { useState } from 'react';

function Counter() {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
`,
      testCases: [
          { input: 'User clicks button once', expectedOutput: 'Count: 1' },
          { input: 'User clicks button three times', expectedOutput: 'Count: 3' },
      ]
    }
  ];
  