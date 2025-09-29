# CodeCraft - The Gamified Learning Platform

CodeCraft is a modern, gamified web application designed to make learning to code an engaging and rewarding experience. Built with Next.js and React, it provides a feature-rich platform for users to solve coding challenges, play educational mini-games, and track their progress through a system of experience points (XP), levels, and badges.

This project is architected with a decoupled frontend, making it ready for integration with any backend service like Supabase, Firebase, or a custom REST/GraphQL API.

## Core Features

- **Gamified Dashboard**: The central hub for users, displaying their current level, XP progress, daily streak, and earned badges. It also features a "Today's Challenge" card to encourage daily practice.
- **Extensive Task Library**: A filterable and searchable list of coding challenges categorized by difficulty and topic (e.g., Data Structures & Algorithms, Web Development).
- **Interactive Coding Arena**: A full-featured workspace for solving tasks, complete with a code editor supporting multiple languages, problem descriptions, examples, and a results panel to check solutions against test cases.
- **Mini-Games Arcade**: A collection of fun, educational mini-games designed to reinforce coding concepts in different ways:
  - **Monster Battle**: Answer coding trivia to defeat monsters.
  - **Debug Hunt**: Find and fix bugs in code snippets.
  - **Code Typer**: Test your typing speed and accuracy with real code.
  - **Output Prediction**: Analyze code and predict its output.
  - **Concept Match**: Match coding concepts to their definitions or code examples.
  - **Code Jigsaw**: Reassemble scrambled lines of code into a working program.
  - **Security Fortress**: Identify and fix common security vulnerabilities.
- **Persistent User Settings**: A comprehensive settings page where users can manage their profile, editor preferences, and other app settings. All settings are saved to the browser's `localStorage`.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15 (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/guide/react)
- **State Management**: React Context API and custom hooks.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v20.x or later recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    Run the following command to install all the required packages from `package.json`.
    ```bash
    npm install
    ```

3.  **Run the development server:**
    This command starts the Next.js development server, typically on `http://localhost:3000`.
    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the pages by modifying the files in the `src/app/` directory. The pages auto-update as you edit the files.

## Database Schema Guide

This application is backend-agnostic. To add authentication and persistent user data (beyond what is stored in `localStorage`), you will need to create a database with the following structure. This guide uses a generic SQL-like syntax but can be adapted for any database (like PostgreSQL for Supabase).

### `users` Table

This table stores the core user information.

| Column          | Type                 | Constraints              | Description                                        |
| --------------- | -------------------- | ------------------------ | -------------------------------------------------- |
| `id`            | `UUID`               | `PRIMARY KEY`            | Unique identifier for the user (e.g., from auth provider). |
| `username`      | `VARCHAR(255)`       | `UNIQUE`, `NOT NULL`     | The user's unique username.                          |
| `email`         | `VARCHAR(255)`       | `UNIQUE`, `NOT NULL`     | The user's email address.                            |
| `display_name`  | `VARCHAR(255)`       |                          | The user's public display name.                    |
| `avatar_url`    | `TEXT`               |                          | URL to the user's profile picture.                 |
| `bio`           | `TEXT`               |                          | A short user biography.                            |
| `location`      | `VARCHAR(255)`       |                          | User's location.                                   |
| `github_url`    | `TEXT`               |                          | Link to the user's GitHub profile.                 |
| `linkedin_url`  | `TEXT`               |                          | Link to the user's LinkedIn profile.               |
| `created_at`    | `TIMESTAMP WITH TIME ZONE` | `DEFAULT now()`          | Timestamp of when the user account was created.    |

### `user_stats` Table

This table stores a user's game-related statistics and progress. It has a one-to-one relationship with the `users` table.

| Column          | Type        | Constraints                    | Description                                  |
| --------------- | ----------- | ------------------------------ | -------------------------------------------- |
| `user_id`       | `UUID`      | `PRIMARY KEY`, `FOREIGN KEY (users.id)` | Foreign key linking to the `users` table.      |
| `xp`            | `INTEGER`   | `DEFAULT 0`, `NOT NULL`      | Total experience points earned.              |
| `level`         | `INTEGER`   | `DEFAULT 1`, `NOT NULL`      | The user's current level.                    |
| `streak`        | `INTEGER`   | `DEFAULT 0`, `NOT NULL`      | Current daily login/activity streak.         |
| `last_active`   | `DATE`      |                                | The last date the user was active, for streaks. |

### `user_completed_tasks` Table

This table tracks which coding tasks a user has successfully completed. It has a many-to-many relationship between users and tasks.

| Column         | Type           | Constraints                         | Description                                 |
| -------------- | -------------- | ----------------------------------- | ------------------------------------------- |
| `user_id`      | `UUID`         | `FOREIGN KEY (users.id)`, `PRIMARY KEY` | The ID of the user who completed the task.  |
| `task_id`      | `VARCHAR(255)` | `PRIMARY KEY`                       | The unique ID of the completed task (e.g., '1', 'two-sum'). |
| `completed_at` | `TIMESTAMP`    | `DEFAULT now()`                       | Timestamp of when the task was completed.   |

### `user_badges` Table

This table tracks the badges a user has earned.

| Column      | Type           | Constraints                         | Description                                |
| ----------- | -------------- | ----------------------------------- | ------------------------------------------ |
| `id`        | `SERIAL`       | `PRIMARY KEY`                       | Unique identifier for the entry.           |
| `user_id`   | `UUID`         | `FOREIGN KEY (users.id)`              | The ID of the user who earned the badge.   |
| `badge_id`  | `VARCHAR(255)` | `NOT NULL`                          | The unique ID of the earned badge (e.g., 'python-pro'). |
| `earned_at` | `TIMESTAMP`    | `DEFAULT now()`                       | Timestamp of when the badge was earned.    |

*Note: The `task_id` and `badge_id` columns link to the static data defined in the application's source code (`src/lib/tasks-data.ts`, `src/lib/placeholder-images.json`). These do not need to be separate tables in the database unless you want to make them dynamically configurable.*
