
import type { ConceptMatchChallenge } from '@/lib/types';

export const conceptMatchChallenges: ConceptMatchChallenge[] = [
    {
        id: 'cm1',
        title: 'Basic Data Types',
        description: 'Match the code snippet to its fundamental data type.',
        difficulty: 'Beginner',
        xp: 20,
        codeSnippets: [
            { id: '1', language: 'generic', code: '"Hello World"' },
            { id: '2', language: 'generic', code: '42' },
            { id: '3', language: 'generic', code: 'true' },
            { id: '4', language: 'generic', code: '[1, 2, 3]' },
        ],
        concepts: [
            { id: '1', name: 'String' },
            { id: '2', name: 'Integer' },
            { id: '3', name: 'Boolean' },
            { id: '4', name: 'Array / List' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm2',
        title: 'OOP Principles',
        description: 'Match the definition to the core principle of Object-Oriented Programming.',
        difficulty: 'Intermediate',
        xp: 40,
        codeSnippets: [
            { id: '1', language: 'generic', code: 'class Car extends Vehicle { ... }' },
            { id: '2', language: 'generic', code: 'class Circle {\n  private radius;\n  public getArea() { ... }\n}' },
            { id: '3', language: 'generic', code: 'animal.makeSound()' },
            { id: '4', language: 'generic', code: 'class Shape { ... }' },
        ],
        concepts: [
            { id: '1', name: 'Inheritance' },
            { id: '2', name: 'Encapsulation' },
            { id: '3', name: 'Polymorphism' },
            { id: '4', name: 'Abstraction' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
            { codeId: '4', conceptId: '4' },
        ]
    },
    {
        id: 'cm3',
        title: 'JavaScript Frameworks',
        description: 'Match the code snippet to the correct JavaScript framework or library.',
        difficulty: 'Intermediate',
        xp: 35,
        codeSnippets: [
            { id: '1', language: 'javascript', code: 'const [count, setCount] = useState(0);' },
            { id: '2', language: 'javascript', code: '<div v-if="seen">Now you see me</div>' },
            { id: '3', language: 'javascript', code: 'constructor(private http: HttpClient) {}' },
        ],
        concepts: [
            { id: '1', name: 'React' },
            { id: '2', name: 'Vue.js' },
            { id: '3', name: 'Angular' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
    {
        id: 'cm4',
        title: 'Sorting Algorithms',
        description: 'Match the code logic to the name of the sorting algorithm.',
        difficulty: 'Advanced',
        xp: 60,
        codeSnippets: [
            { id: '1', language: 'python', code: 'for i in range(n):\n  for j in range(0, n-i-1):\n    if arr[j] > arr[j+1]:\n      arr[j], arr[j+1] = arr[j+1], arr[j]' },
            { id: '2', language: 'python', code: 'if len(arr) > 1:\n  mid = len(arr)//2\n  L = arr[:mid]\n  R = arr[mid:]\n  merge_sort(L)\n  merge_sort(R)\n  # ... merge L and R' },
            { id: '3', language: 'python', code: 'pivot = arr[len(arr) // 2]\nleft = [x for x in arr if x < pivot]\nmiddle = [x for x in arr if x == pivot]\nright = [x for x in arr if x > pivot]' },
        ],
        concepts: [
            { id: '1', name: 'Bubble Sort' },
            { id: '2', name: 'Merge Sort' },
            { id: '3', name: 'Quick Sort' },
        ],
        pairs: [
            { codeId: '1', conceptId: '1' },
            { codeId: '2', conceptId: '2' },
            { codeId: '3', conceptId: '3' },
        ]
    },
];
