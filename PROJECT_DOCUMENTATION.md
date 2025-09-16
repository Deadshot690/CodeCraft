

# Project Report: CodeCraft Quest

---

## **Abstract**

*(This section will be a concise summary of the entire project. We'll write this last so we can summarize everything effectively.)*

---

## **Table of Contents (Index)**

*   **Chapter 1: Introduction**
    *   1.1. Project Overview & Motivation
    *   1.2. Problem Statement
    *   1.3. Project Objectives
    *   1.4. Scope of the Project
    *   1.5. Report Organization
*   **Chapter 2: System Analysis & Literature Survey**
    *   2.1. Existing Systems
    *   2.2. Proposed System
    *   2.3. Feasibility Study
*   **Chapter 3: System Design & Architecture**
    *   3.1. Technology Stack
    *   3.2. System Architecture
    *   3.3. Data Design
    *   3.4. System Diagrams
*   **Chapter 4: Implementation & Modules**
    *   4.1. Core IDE Module
    *   4.2. AI Tutor Module
    *   4.3. Gamification Modules
    *   4.4. User Profile & Progress Tracking
*   **Chapter 5: System Testing**
    *   5.1. Unit Testing
    *   5.2. Integration Testing
    *   5.3. Test Cases
*   **Chapter 6: Conclusion & Future Scope**
    *   6.1. Conclusion
    *   6.2. Limitations of the Current System
    *   6.3. Future Enhancements
*   **Bibliography / References**
*   **Appendices**

---

## **Chapter 1: Introduction**

### **1.1. Project Overview & Motivation**

CodeCraft Quest is a modern, web-based platform designed to make learning to code more engaging, interactive, and effective. The motivation behind this project stems from the observation that traditional programming education can often be a passive and isolating experience, characterized by reading documentation and solving problems in a non-interactive environment. This can lead to a lack of motivation and a steep learning curve for beginners.

This project introduces a gamified approach to learning. By incorporating elements commonly found in video games—such as levels, experience points (XP), interactive challenges, and story-driven progression (like the "Code Dungeon")—CodeCraft Quest transforms the learning process into an adventure. The platform is built using a modern technology stack, including Next.js for a fast, server-driven user interface and Google's Genkit for powerful, integrated AI features that provide real-time assistance to the user.

### **1.2. Problem Statement**

The primary challenges in self-directed programming education are:
1.  **Lack of Engagement:** Standard coding practice platforms often present problems in a sterile, repetitive format, which can quickly become monotonous and fail to retain user interest.
2.  **Passive Learning:** Many platforms lack features that encourage active problem-solving beyond simple code submission and validation, offering little in the way of immediate, constructive feedback.
3.  **Absence of Personalized Guidance:** When a learner gets stuck, they often have to leave the platform to search for solutions, breaking their learning flow. There is a need for integrated, context-aware help that guides without giving away the answer.
4.  **Monoculture of Practice:** Most platforms focus exclusively on algorithmic challenges, neglecting other crucial skills like code comprehension, typing speed, and debugging under pressure.

### **1.3. Project Objectives**

To address the problems identified, CodeCraft Quest aims to achieve the following objectives:

*   To develop a web application that gamifies the experience of learning to code through user profiles, stats, and a variety of challenges.
*   To build an interactive coding environment (IDE) where users can write, test, and submit solutions to programming problems.
*   To integrate a generative AI-powered tutor that provides contextual hints and conceptual explanations, fostering deeper understanding.
*   To create a diverse suite of "mini-games" that target different coding-related skills, including debugging, code ordering (jigsaw), output prediction, and typing accuracy.
*   To design a progressive challenge system, like the "Code Dungeon," that provides a structured path for learners to follow and feel a sense of accomplishment.

### **1.4. Scope of the Project**

The current scope of the CodeCraft Quest project is focused on a feature-rich, single-player experience. The system includes:

*   A dashboard displaying user statistics like XP, level, and daily streaks.
*   A comprehensive list of coding challenges with an integrated IDE for solving them. The IDE supports multiple languages and features an AI-powered code evaluation engine.
*   Six distinct mini-games: Monster Battle, Debug Hunt, Code Typer, Code Jigsaw, Output Prediction, and Concept Match.
*   An AI Code Assistant integrated into the challenge-solving and dashboard pages.
*   Client-side progress tracking using the browser's `localStorage` to save solved challenges and basic user stats.

The current implementation does **not** include user authentication, persistent server-side accounts, multiplayer features, or leaderboards.

### **1.5. Report Organization**

This report is organized into six chapters. Chapter 2 discusses the existing systems and the feasibility of the proposed project. Chapter 3 details the system design, architecture, and technology stack. Chapter 4 provides an in-depth look at the implementation of the core modules. Chapter 5 covers the testing strategies employed. Finally, Chapter 6 concludes the report with a summary of the project, its limitations, and potential directions for future work.

---

## **Chapter 2: System Analysis & Literature Survey**

### **2.1. Existing Systems**

A survey of the current landscape of online coding education platforms reveals several key players, each with distinct strengths and weaknesses.

*   **LeetCode & HackerRank:** These platforms are the industry standard for competitive programming and technical interview preparation.
    *   **Strengths:** They offer a vast library of high-quality algorithmic challenges, a robust testing environment, and a competitive community with leaderboards.
    *   **Weaknesses:** Their user experience can be intimidating and sterile for beginners. The focus is almost exclusively on algorithmic problem-solving, and they offer minimal guidance or pedagogical support when a user is stuck, forcing learners to seek solutions elsewhere.

*   **Codecademy & freeCodeCamp:** These platforms are more focused on structured, curriculum-based learning for beginners.
    *   **Strengths:** They provide step-by-step tutorials and interactive lessons that guide a user through a specific technology or concept. The learning path is clear and well-defined.
    *   **Weaknesses:** The coding environment is often constrained and less like a real-world IDE. The problems are typically tied to the lesson and may not offer the same level of open-ended problem-solving as platforms like LeetCode.

*   **Duolingo:** While not a coding platform, its success in language learning provides a valuable case study in gamification.
    *   **Strengths:** Duolingo excels at user retention through streaks, experience points (XP), leaderboards, and daily goals. It breaks down complex learning into small, manageable "mini-game" like exercises.
    *   **Weaknesses:** Its model is not directly transferable to the more complex, abstract nature of programming, but the core principles of engagement are highly relevant.

### **2.2. Proposed System**

CodeCraft Quest is designed to synthesize the strengths of these different models while addressing their key weaknesses. It proposes a holistic learning environment that blends rigorous problem-solving with engaging game mechanics and AI-powered pedagogical support.

*   **Bridging the Gap:** The platform provides a full-fledged IDE for solving complex algorithmic challenges similar to LeetCode, making it suitable for serious practice. However, it wraps this experience in a gamified shell with user stats, levels, and a story-driven "Dungeon" mode to maintain motivation for beginners.

*   **Active, Not Passive, Guidance:** Unlike platforms that either give the answer or no help at all, CodeCraft Quest integrates an AI Tutor. This tool provides contextual hints and conceptual explanations, encouraging the user to think through the problem without simply copying a solution. This fosters active learning and deeper understanding.

*   **Diverse Skill Development:** Recognizing that programming is more than just algorithms, the "Mini-Games" suite targets a variety of essential skills:
    *   **Code Typer:** Improves speed and accuracy with real syntax.
    *   **Debug Hunt:** Hones the critical skill of finding and fixing errors under pressure.
    *   **Code Jigsaw:** Builds code comprehension and logical ordering skills.
    *   **Monster Battle:** Reinforces core concepts through quick-recall questions in an RPG format.

By combining these elements, the proposed system offers a more comprehensive and engaging alternative to existing platforms, catering to a wider range of learners from absolute beginners to intermediate coders looking for a more enjoyable way to practice.

### **2.3. Feasibility Study**

A preliminary study was conducted to assess the feasibility of the project.

*   **2.3.1. Technical Feasibility:** The project is technically feasible. The chosen technology stack is modern, well-documented, and robust. Next.js provides a powerful framework for building server-driven React applications. Genkit offers a streamlined and powerful interface for integrating state-of-the-art generative AI models (Gemini) via simple server actions, handling complex tasks like code evaluation and hint generation. ShadCN UI and Tailwind CSS provide a flexible and efficient system for building a high-quality user interface.

*   **2.3.2. Economic Feasibility:** The current implementation is economically feasible as it runs primarily on the client-side, with AI features executed through serverless functions (Genkit flows). This model incurs minimal costs. Future enhancements like user authentication and a persistent database would introduce cloud hosting costs (e.g., via Firebase), but these services are designed to scale affordably from a free tier.

*   **2.3.3. Operational Feasibility:** The system is designed to be user-friendly and intuitive. The gamified dashboard, clear navigation, and integrated help systems are intended to lower the barrier to entry for new programmers. The application is a standard web app and requires no special software or installation, making it easily accessible to anyone with a modern web browser.

---

## **Chapter 3: System Design & Architecture**

### **3.1. Technology Stack**

The technology stack for CodeCraft Quest was chosen to create a modern, performant, and feature-rich web application. It leverages a server-centric approach with Next.js and integrates powerful AI capabilities seamlessly.

*   **Frontend Framework:** **Next.js (with App Router)** - Used for building the user interface with React. The App Router paradigm with Server Components allows for fast page loads and a robust structure for routing and layouts.
*   **UI Library:** **React** - The core library for building composable user interface components, used within the Next.js framework.
*   **AI Integration:** **Genkit for Firebase** - A powerful, open-source framework used to build, deploy, and monitor production-grade AI-powered features. In this project, Genkit is used for:
    *   **AI-Powered Code Evaluation:** Simulating code execution and judging correctness against test cases.
    *   **AI Tutor:** Generating contextual hints and explanations for coding problems.
    *   **Model Integration:** Seamlessly integrating with Google's advanced Gemini family of models.
*   **Styling:**
    *   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
    *   **ShadCN UI:** A collection of beautifully designed and accessible UI components built on top of Tailwind CSS and Radix UI.
*   **Client-Side Storage:** **Browser `localStorage`** - Used for persisting basic user progress, such as solved challenges and stats, directly in the user's browser. This provides a simple way to maintain state without requiring a backend database or user authentication in the current scope.
*   **Language:** **TypeScript** - A typed superset of JavaScript that enhances code quality, readability, and developer productivity by adding static types.

### **3.2. System Architecture**

CodeCraft Quest is built on a modern, server-driven architecture centered around Next.js and its App Router.

*   **Component Model:** The application primarily uses **React Server Components (RSCs)** by default. This means most of the UI rendering and data fetching happens on the server, sending minimal JavaScript to the client. This results in faster initial page loads and a better user experience. Client-side interactivity is added where necessary using `'use client'` directives, such as in the IDE panel or mini-game interfaces.
*   **Backend and AI Logic:** There is no traditional, always-on backend server. Instead, backend logic is handled through **Next.js Server Actions** and **Genkit Flows**.
    *   **Server Actions:** These are functions executed on the server that can be called directly from React components, simplifying form submissions and data mutations. For example, submitting code to the IDE triggers a server action.
    *   **Genkit Flows:** These are specialized server-side functions designed to orchestrate AI-powered workflows. In CodeCraft Quest, flows like `runCodeFlow` and `aiCodeAssistantFlow` are defined with Genkit. They are invoked by Server Actions to interact with the Gemini language models, process the results, and return structured data to the frontend. This architecture encapsulates all AI logic securely on the server.
*   **Data Flow (IDE Example):**
    1.  A user writes code in the client-side IDE component.
    2.  The user clicks "Submit", triggering a Server Action.
    3.  The Server Action receives the user's code and calls the `runCode` Genkit flow.
    4.  The `runCode` flow constructs a detailed prompt, including the user's code, the problem's test cases, and a reference solution.
    5.  Genkit sends this prompt to the Gemini model.
    6.  The AI model executes the logic and returns a structured JSON object with the pass/fail status for each test case.
    7.  The flow returns this JSON to the Server Action, which then passes it back as state to the client-side component.
    8.  The IDE component re-renders to display the results to the user.

### **3.3. Data Design**

In the current version, all application data is hardcoded and managed through TypeScript modules within the `src/lib` directory.

*   **Challenge Data (`src/lib/challenges.ts`):** This module exports a large array of `Challenge` objects. Each object follows a strict interface, containing:
    *   `id`: A unique identifier.
    *   `title`, `description`, `difficulty`, `domain`, `tags`: Metadata for display and filtering.
    *   `templates`: Boilerplate code for various supported languages.
    *   `testCases`: An array of input/output objects used by the AI to verify solutions.
*   **Mini-Game Data (`src/lib/*-challenges.ts`):** Each mini-game has its own data module (e.g., `battle-challenges.ts`, `jigsaw-challenges.ts`) defining the content for that specific game.
*   **User Progress Data (`localStorage`):** The application uses the browser's `localStorage` to provide a simple persistence layer for a single user.
    *   When a user successfully solves a challenge, the challenge ID and completion timestamp are stored in a JSON array under the key `solvedChallengesInfo`.
    *   Pages like the Profile and Dungeon page read from `localStorage` on the client-side to display progress, calculate stats, and unlock new content.

### **3.4. System Diagrams**

*(For a formal report, this section would contain actual diagrams created with a tool like Lucidchart, Draw.io, or Mermaid.js. The following are descriptions of the recommended diagrams.)*

*   **Use Case Diagram:** A diagram showing the primary actors (the "User") and their interactions with the system.
    *   **Use Cases:** "Solve Coding Challenge", "Request AI Hint", "Play Monster Battle", "Play Debug Hunt", "View Profile", "Navigate Dungeon".
*   **Sequence Diagram for "Run Code" Action:** A diagram illustrating the step-by-step flow of a user submitting code.
    1.  `User` clicks "Run" in `IdePanel`.
    2.  `IdePanel` calls the `runTestAction` Server Action.
    3.  `runTestAction` calls the `runCode` Genkit flow.
    4.  `runCode` flow calls the Gemini AI Model.
    5.  Gemini AI Model returns results to `runCode`.
    6.  `runCode` returns structured results to `runTestAction`.
    7.  `runTestAction` updates the state of `IdePanel`.
    8.  `IdePanel` re-renders to display the results.

---

## **Chapter 4: Implementation & Modules**

This chapter details the implementation of the core components of the CodeCraft Quest application, connecting the architectural design from Chapter 3 to the actual source code.

### **4.1. Core IDE Module**

The Integrated Development Environment (IDE) is the heart of the challenge-solving experience. It is implemented primarily in the `src/app/challenge/[id]/page.tsx` and `src/components/ide-panel.tsx` files.

*   **Structure:** The challenge page uses a resizable panel layout (`ResizablePanelGroup`) from ShadCN UI to create a two-pane view.
    *   The left panel contains the problem description and the AI Tutor tab.
    *   The right panel contains the `IdePanel` component, which houses the code editor and the results area.
*   **Code Editor:** A simple `<textarea>` is used as the code editor for maximum compatibility and simplicity. It is state-managed within the `IdePanel` component. A language selector dropdown allows the user to switch between supported languages, which dynamically updates the boilerplate code in the editor.
*   **Code Execution Flow:**
    1.  The user writes code and clicks either the "Test" or "Submit" button.
    2.  This triggers a client-side form submission that calls a corresponding Next.js Server Action (`runTestAction` or `submitAction`) defined in `src/app/actions.ts`.
    3.  The Server Action is responsible for security and data preparation. It retrieves the challenge details, including the reference solution, and packages the user's code, language, and test cases into a `RunCodeInput` object.
    4.  The action then invokes the `runCode` Genkit flow (`src/ai/flows/run-code-flow.ts`).
    5.  The `runCode` flow constructs a detailed prompt for the Gemini model, instructing it to act as a code judge. It passes the user's code, the test cases, and the reference solution.
    6.  The AI simulates the code execution and returns a structured JSON object (`RunCodeOutput`) containing the results for each test case (pass/fail status, actual output, etc.).
    7.  The Server Action receives this JSON and returns it to the `IdePanel` component using the `useActionState` hook.
    8.  The `IdePanel` component re-renders, displaying the test results in the "Test Results" tab or the final submission status in the "Submit Output" tab.

### **4.2. AI Tutor Module**

The AI Tutor provides learners with assistance without giving away the solution. It is implemented in the `src/components/ai-assistant.tsx` component.

*   **Interface:** The component provides a form with a textarea for the user's current code, a read-only field for the problem description, and a dropdown for the user's self-assessed skill level (Beginner, Intermediate, Advanced).
*   **Workflow:**
    1.  When the user submits the form, the `getAIAssistance` Server Action (`src/app/actions.ts`) is called.
    2.  This action validates the input and invokes the `aiCodeAssistant` Genkit flow (`src/ai/flows/ai-code-assistant.ts`).
    3.  The flow constructs a prompt for the Gemini model, instructing it to act as a helpful tutor. The prompt includes the problem description, the user's code, and their skill level.
    4.  The AI model generates a response containing two fields: a `hint` to guide the user and a conceptual `explanation` of the underlying principles.
    5.  The results are returned to the `AiAssistant` component via the `useActionState` hook and displayed in dedicated alert boxes.

### **4.3. Gamification Modules**

CodeCraft Quest includes several "mini-games" designed to target specific programming skills in an engaging format.

*   **Monster Battle (`/m/battle`):** A turn-based RPG where users answer multiple-choice or short-answer questions to "attack" a monster. Answering correctly defeats the monster, while answering incorrectly results in the player taking damage. This module uses a simple state machine managed with React's `useState` and `useActionState` hooks to track player/monster HP and game state.
*   **Debug Hunt (`/m/debug-hunt`):** A timed challenge where users are presented with a block of buggy code. They must find and fix the error within a time limit. The game logic compares the user's final code with the correct solution.
*   **Code Jigsaw (`/m/code-jigsaw`):** This game presents a functional piece of code with its lines scrambled. Users must drag and drop the lines into the correct order. This module is implemented using the `@dnd-kit/core` and `@dnd-kit/sortable` libraries for the drag-and-drop functionality.
*   **Other Games:** The suite also includes **Code Typer** (for speed and accuracy), **Output Prediction** (for code comprehension), and **Concept Match** (for reinforcing theoretical knowledge). Each game follows a similar pattern of presenting a challenge and evaluating a user's input.

### **4.4. User Profile & Progress Tracking**

To provide a sense of accomplishment and progression, the application tracks user data on the client-side.

*   **Storage:** The browser's `localStorage` is used as a simple key-value store. This avoids the need for a backend database and user authentication in the current project scope.
*   **Data Structure:** When a user successfully solves a challenge in the IDE, an object containing the `challenge.id`, `challenge.title`, and a `solvedAt` timestamp is added to a JSON array stored under the `solvedChallengesInfo` key in `localStorage`.
*   **Profile Page (`/profile`):** This page reads the `solvedChallengesInfo` array from `localStorage` on the client side (`useEffect` hook). It then processes this data to calculate and display statistics like:
    *   Total challenges solved.
    *   XP and Level (calculated based on the number of solved challenges).
    *   A breakdown of solved problems by domain (DSA, Web, AI).
    *   A list of the 5 most recently solved problems.
*   **Dungeon Page (`/dungeon`):** This page also reads from `localStorage` to determine which challenges have been solved, dynamically unlocking new floors based on the user's progress.

---

## **Chapter 5: System Testing**

System testing is a critical phase to ensure the quality, functionality, and reliability of the application. The testing for CodeCraft Quest was approached with a combination of manual and automated strategies, focusing on the core user-facing features.

### **5.1. Unit Testing**

Unit testing involves testing individual components or functions in isolation to ensure they work as expected.
*   **Strategy:** While a formal unit testing framework like Jest was not implemented within the project's scope, individual helper functions (e.g., in `src/lib/challenges.ts` for getting challenges by ID) were manually tested during development to ensure correctness. React components were developed with a focus on clear, predictable state management, allowing for straightforward manual verification of their different states (e.g., loading, error, success).
*   **Example:** The `getDailyChallenge()` function was tested to confirm that it consistently returns a valid challenge object based on the current date.

### **5.2. Integration Testing**

Integration testing focuses on verifying that different modules of the application work together correctly. This was the primary focus of the testing effort.
*   **Strategy:** The most critical integrations involve the frontend components, Next.js Server Actions, and the Genkit AI flows. Manual end-to-end testing was performed for all major user workflows.
*   **Example (AI Code Execution):**
    1.  A user writes code in the `IdePanel` component.
    2.  The "Submit" button is clicked, triggering the `submitAction`.
    3.  The Server Action is manually monitored to ensure it correctly packages the data and calls the `runCode` Genkit flow.
    4.  The `runCode` flow's interaction with the Gemini API is verified.
    5.  The structured JSON response from the AI is checked for correctness.
    6.  The final state is passed back to the `IdePanel` and the UI is checked to confirm it correctly displays the "Accepted" or "Wrong Answer" status along with the test case results.

### **5.3. Test Cases**

The following table outlines sample test cases for some of the key functionalities of CodeCraft Quest.

| Test Case ID | Feature           | Test Scenario                                                                        | Expected Result                                                                                                | Status |
|--------------|-------------------|--------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|--------|
| TC-IDE-01    | IDE Submission    | Submit a correct solution for the "Two Sum" challenge.                               | The "Submit Output" tab displays an "Accepted!" message. Progress is saved to `localStorage`.                | Pass   |
| TC-IDE-02    | IDE Submission    | Submit an incorrect solution for the "Two Sum" challenge.                              | The "Submit Output" tab displays a "Wrong Answer" message with details on which test cases failed.             | Pass   |
| TC-IDE-03    | IDE Submission    | Submit incomplete code (e.g., syntax error).                                         | The test results panel displays an error message from the AI execution engine (e.g., "Syntax Error").            | Pass   |
| TC-AI-01     | AI Tutor          | Request a hint for a challenge with code that has a logical error.                     | The AI Assistant displays a relevant hint and a conceptual explanation without giving away the direct answer.      | Pass   |
| TC-AI-02     | AI Tutor          | Submit the AI Tutor form with an empty code field.                                   | A validation error message appears, prompting the user to enter code.                                          | Pass   |
| TC-GAME-01   | Monster Battle    | Answer a monster's question correctly.                                               | The monster's HP is reduced to 0. A "Victorious" message is displayed.                                         | Pass   |
| TC-GAME-02   | Monster Battle    | Answer a monster's question incorrectly.                                             | The player's HP is reduced. The monster taunts the player. The battle continues.                               | Pass   |
| TC-PROFILE-01| Profile Page      | Solve a new challenge and then navigate to the profile page.                         | The "Challenges Solved" count is incremented. The newly solved challenge appears in the "Recent Solutions" list. | Pass   |
| TC-DUNGEON-01| Code Dungeon      | Solve enough challenges on Floor 1 to meet the unlock criteria for Floor 2.          | Floor 2 transitions from a "Locked" to an "Unlocked" state, and its challenges become clickable.             | Pass   |
