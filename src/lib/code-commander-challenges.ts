
export interface TestCase {
  input: any;
  expectedOutput: any;
}
export interface CommanderChallenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  domain: 'AI';
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

export const commanderChallenges: CommanderChallenge[] = [
  {
    id: 'cc-level-1',
    title: 'Targeting System Online',
    description: "Write a function `shouldTarget(enemy)` that always returns `true`. Your tower must target any enemy that appears.",
    difficulty: 'Easy',
    domain: 'AI',
    tags: ['Logic', 'Boolean'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function shouldTarget(enemy) {\n  // An enemy object looks like: { type: 'ground', health: 100, distance: 50 }\n  return false; \n}`,
      python: `def should_target(enemy):\n  # An enemy object looks like: { 'type': 'ground', 'health': 100, 'distance': 50 }\n  return False`,
      cpp: `bool shouldTarget(Enemy enemy) {\n  // An enemy object has properties like: enemy.type, enemy.health, enemy.distance\n  return false;\n}`,
      java: `public boolean shouldTarget(Enemy enemy) {\n  // An enemy object has properties like: enemy.type, enemy.health, enemy.distance\n  return false;\n}`
    },
    testCases: [
        { input: { enemy: { type: 'ground', health: 100, distance: 50 } }, expectedOutput: true },
        { input: { enemy: { type: 'air', health: 80, distance: 120 } }, expectedOutput: true },
    ]
  },
  {
    id: 'cc-level-2',
    title: 'Prioritize Close Threats',
    description: "Update your function `shouldTarget(enemy)` to only target enemies that are closer than 100 distance units. Proximity is key to survival.",
    difficulty: 'Easy',
    domain: 'AI',
    tags: ['Logic', 'Conditional'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function shouldTarget(enemy) {\n  // An enemy object looks like: { type: 'ground', health: 100, distance: 50 }\n  return false; \n}`,
      python: `def should_target(enemy):\n  # An enemy object looks like: { 'type': 'ground', 'health': 100, 'distance': 50 }\n  return False`,
      cpp: `bool shouldTarget(Enemy enemy) {\n  // An enemy object has properties like: enemy.type, enemy.health, enemy.distance\n  return false;\n}`,
      java: `public boolean shouldTarget(Enemy enemy) {\n  // An enemy object has properties like: enemy.type, enemy.health, enemy.distance\n  return false;\n}`
    },
    testCases: [
        { input: { enemy: { type: 'ground', health: 100, distance: 50 } }, expectedOutput: true },
        { input: { enemy: { type: 'air', health: 80, distance: 120 } }, expectedOutput: false },
        { input: { enemy: { type: 'ground', health: 200, distance: 99 } }, expectedOutput: true },
    ]
  },
  {
    id: 'cc-level-3',
    title: 'Anti-Air Defenses',
    description: "Now, program your tower to only target 'air' type enemies. We need specialized defenses to handle threats from the sky.",
    difficulty: 'Easy',
    domain: 'AI',
    tags: ['Logic', 'Conditional', 'Strings'],
    languages: ['javascript', 'python', 'cpp', 'java'],
    templates: {
      javascript: `function shouldTarget(enemy) {\n  // An enemy object looks like: { type: 'ground', health: 100, distance: 50 }\n  return false; \n}`,
      python: `def should_target(enemy):\n  # An enemy object looks like: { 'type': 'ground', 'health': 100, 'distance': 50 }\n  return False`,
      cpp: `bool shouldTarget(Enemy enemy) {\n  // An enemy object has properties like: enemy.type, enemy.health, enemy.distance\n  return false;\n}`,
      java: `public boolean shouldTarget(Enemy enemy) {\n  // An enemy object has properties like: enemy.type, enemy.health, enemy.distance\n  return false;\n}`
    },
    testCases: [
        { input: { enemy: { type: 'ground', health: 100, distance: 50 } }, expectedOutput: false },
        { input: { enemy: { type: 'air', health: 80, distance: 120 } }, expectedOutput: true },
        { input: { enemy: { type: 'air', health: 150, distance: 20 } }, expectedOutput: true },
    ]
  },
];

export function getCommanderChallenge(level: number): CommanderChallenge | undefined {
  return commanderChallenges[level];
}

export function getAllCommanderChallenges(): CommanderChallenge[] {
  return commanderChallenges;
}
