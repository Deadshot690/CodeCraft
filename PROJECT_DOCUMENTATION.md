
# Project Report: CodeCraft Quest

---

## **Abstract**

CodeCraft Quest is a web-based educational platform designed to address the common challenges of learner engagement and motivation in programming education. Traditional methods of learning to code can be isolating and monotonous, leading to high attrition rates among beginners. This project introduces a gamified, interactive environment that transforms the learning process into an engaging adventure. The platform is built on a modern technology stack, featuring a Next.js frontend for a performant, server-rendered user interface, and leverages Google's Genkit framework to integrate powerful generative AI capabilities. These AI features provide a "Code Judge" for real-time solution evaluation and an "AI Tutor" for contextual hints, creating a supportive and active learning experience. The system includes a core Integrated Development Environment (IDE) for solving algorithmic challenges, a suite of diverse "mini-games" targeting specific skills like debugging and typing speed, and a progress-tracking system with user profiles and levels. By synthesizing the rigor of competitive programming platforms with the engagement mechanics of video games and the pedagogical support of AI, CodeCraft Quest offers a holistic and effective tool for aspiring programmers. The current implementation operates as a feature-rich, client-side, single-player experience, establishing a robust foundation for future expansion into a multi-user, cloud-native platform.

---

## **Table of Contents (Index)**

*   **Chapter 1: Introduction**
    *   1.1. Project Overview & Motivation
    *   1.2. Problem Statement
    *   1.3. Project Objectives
    *   1.4. Scope of the Project
    *   1.5. Report Organization
*   **Chapter 2: System Analysis & Literature Survey**
    *   2.1. Existing Systems & Their Limitations
        *   2.1.1. Competitive Programming Platforms (LeetCode, HackerRank)
        *   2.1.2. Curriculum-Based Platforms (Codecademy, freeCodeCamp)
        *   2.1.3. Gamified Learning Applications (Duolingo)
    *   2.2. Proposed System & Its Advantages
    *   2.3. Feasibility Study
        *   2.3.1. Technical Feasibility
        *   2.3.2. Economic Feasibility
        *   2.3.3. Operational Feasibility
*   **Chapter 3: System Design & Architecture**
    *   3.1. Technology Stack
    *   3.2. System Architecture
        *   3.2.1. Architectural Style: Server-Driven UI with Next.js
        *   3.2.2. Component Model: React Server Components (RSC)
        *   3.2.3. Backend Logic: Server Actions and Genkit Flows
    *   3.3. Data Design
        *   3.3.1. Challenge and Game Data Structure
        *   3.3.2. Client-Side User Progress Storage
    *   3.4. System Diagrams
        *   3.4.1. Use Case Diagram
        *   3.4.2. High-Level Architecture Diagram
        *   3.4.3. Sequence Diagram for "Run Code" Action
*   **Chapter 4: Implementation & Modules**
    *   4.1. Core IDE Module (`/challenge/[id]`)
        *   4.1.1. Resizable UI Layout
        *   4.1.2. Code Editor & Language Selection
        *   4.1.3. Code Execution Workflow (Server Action -> Genkit Flow)
    *   4.2. AI Tutor Module (`AiAssistant.tsx`)
        *   4.2.1. User Interface and Input
        *   4.2.2. AI-Powered Hint Generation Workflow
    *   4.3. Gamification Modules (Mini-Games)
        *   4.3.1. Monster Battle (`/m/monster-battle`)
        *   4.3.2. Debug Hunt (`/m/debug-hunt`)
        *   4.3.3. Code Jigsaw (`/m/code-jigsaw`)
        *   4.3.4. Code Typer (`/m/code-typer`)
        *   4.3.5. Output Prediction (`/m/output-prediction`)
        *   4.3.6. Concept Match (`/m/concept-match`)
        *   4.3.7. Code Rush (`/m/code-rush`)
    *   4.4. User Profile & Progress Tracking
        *   4.4.1. `localStorage` Data Structure
        *   4.4.2. Profile Page Implementation (`/profile`)
        *   4.4.3. Dungeon Page Implementation (`/dungeon`)
*   **Chapter 5: System Testing**
    *   5.1. Unit Testing Strategy
    *   5.2. Integration Testing Strategy
    *   5.3. Test Cases
*   **Chapter 6: Conclusion & Future Scope**
    *   6.1. Conclusion
    *   6.2. Limitations of the Current System
    *   6.3. Future Enhancements
*   **Bibliography / References**
*   **Appendices**
    *   Appendix A: Sample Genkit Flow (run-code-flow.ts)

---

## **Chapter 1: Introduction**

### **1.1. Project Overview & Motivation**

CodeCraft Quest is a modern, web-based platform designed to make learning to code more engaging, interactive, and effective. The motivation behind this project stems from the observation that traditional programming education can often be a passive and isolating experience, characterized by reading documentation and solving problems in a non-interactive environment. This can lead to a lack of motivation and a steep learning curve for beginners, often referred to as "tutorial hell," where learners consume content passively without developing true problem-solving skills.

This project introduces a gamified approach to learning, drawing inspiration from the highly effective engagement loops found in video games. By incorporating elements such as levels, experience points (XP), interactive challenges, and story-driven progression (like the "Code Dungeon"), CodeCraft Quest transforms the learning process into an adventure. The platform is built using a modern technology stack, including Next.js for a fast, server-driven user interface and Google's Genkit for powerful, integrated AI features. These AI capabilities provide real-time assistance, acting as both a judge to evaluate code correctness and a tutor to provide hints, guiding users toward understanding rather than simply giving them answers.

### **1.2. Problem Statement**

The primary challenges in self-directed programming education are:
1.  **Lack of Engagement:** Standard coding practice platforms often present problems in a sterile, repetitive format. This can quickly become monotonous, causing users to disengage and abandon their learning goals.
2.  **Passive Learning:** Many platforms lack features that encourage active problem-solving beyond simple code submission and validation. They offer little in the way of immediate, constructive feedback, which is crucial for reinforcing concepts and correcting misunderstandings.
3.  **Absence of Personalized Guidance:** When a learner gets stuck, they often have to leave the platform to search for solutions on external sites like Stack Overflow or Google. This breaks their learning flow and can lead to frustration or exposure to poor-quality solutions. There is a need for integrated, context-aware help that guides without giving away the answer.
4.  **Monoculture of Practice:** Most platforms focus exclusively on algorithmic challenges, which, while important, represent only one facet of a programmer's skill set. Other crucial skills like code comprehension, typing speed and accuracy, debugging under pressure, and understanding language syntax are often neglected.

### **1.3. Project Objectives**

To address the problems identified, CodeCraft Quest aims to achieve the following objectives:

*   To develop a feature-rich web application that gamifies the experience of learning to code through user profiles, statistics (XP, level), and a variety of interactive challenges.
*   To build an interactive coding environment (IDE) where users can write, test, and submit solutions to programming problems in multiple languages.
*   To integrate a generative AI-powered tutor that provides contextual hints and conceptual explanations based on the user's code and skill level, fostering deeper understanding and active learning.
*   To create a diverse suite of "mini-games," each designed to target different coding-related skills, including debugging, code ordering (jigsaw), output prediction, and typing accuracy.
*   To design a progressive challenge system, exemplified by the "Code Dungeon," that provides a structured path for learners to follow, fostering a sense of accomplishment and clear progression.
*   To implement a client-side persistence mechanism for tracking user progress, ensuring a continuous and rewarding experience for returning users without the need for a full backend system.

### **1.4. Scope of the Project**

The current scope of the CodeCraft Quest project is focused on a feature-rich, single-player experience that runs entirely in the browser with serverless functions for AI tasks. The system includes:

*   **User Dashboard:** A central hub displaying user statistics like XP, level, and daily streaks.
*   **Challenge Arena:** A comprehensive list of coding challenges with filtering capabilities, leading to an integrated IDE for solving them. The IDE supports multiple languages and features an AI-powered code evaluation engine.
*   **Mini-Game Arcade:** A collection of six distinct mini-games: Monster Battle, Debug Hunt, Code Typer, Code Jigsaw, Output Prediction, and Concept Match.
*   **AI Code Assistant:** A generative AI tutor integrated into the challenge-solving and dashboard pages to provide on-demand help.
*   **Progress Persistence:** Client-side progress tracking using the browser's `localStorage` to save solved challenges and basic user stats.

The current implementation does **not** include user authentication, persistent server-side accounts, multiplayer features, leaderboards, or a content management system for challenges. All data is hardcoded within the application's source.

### **1.5. Report Organization**

This report is organized into six chapters, providing a comprehensive overview of the project from conception to implementation and future planning. Chapter 2 discusses the existing systems in the educational technology landscape and presents a feasibility study for the proposed project. Chapter 3 details the system design, high-level architecture, and technology stack. Chapter 4 provides an in-depth look at the implementation of the core modules and their underlying logic. Chapter 5 covers the testing strategies and sample test cases used to ensure application quality. Finally, Chapter 6 concludes the report with a summary of the project, its limitations, and potential directions for future work.

---

## **Chapter 2: System Analysis & Literature Survey**

### **2.1. Existing Systems & Their Limitations**

A survey of the current landscape of online coding education platforms reveals several key players, each with distinct strengths and weaknesses.

#### **2.1.1. Competitive Programming Platforms (LeetCode, HackerRank)**
*   **Strengths:** These platforms are the industry standard for competitive programming and technical interview preparation. They offer a vast library of high-quality algorithmic challenges, a robust testing environment with precise performance metrics, and a competitive community with leaderboards. They are excellent for honing algorithmic proficiency.
*   **Weaknesses:** Their user experience can be intimidating and sterile for beginners. The focus is almost exclusively on algorithmic problem-solving, and they offer minimal guidance or pedagogical support when a user is stuck. This forces learners to seek solutions elsewhere, which can disrupt the learning process and encourage rote memorization over true understanding.

#### **2.1.2. Curriculum-Based Platforms (Codecademy, freeCodeCamp)**
*   **Strengths:** These platforms are more focused on structured, curriculum-based learning for beginners. They provide step-by-step tutorials and interactive lessons that guide a user through a specific technology or concept. The learning path is clear and well-defined, making them an excellent starting point for new developers.
*   **Weaknesses:** The coding environment is often constrained and less like a real-world IDE. The problems are typically tied to the lesson and may not offer the same level of open-ended problem-solving as platforms like LeetCode. The "hand-holding" nature of the curriculum can sometimes fail to develop independent problem-solving skills.

#### **2.1.3. Gamified Learning Applications (Duolingo)**
*   **Strengths:** While not a coding platform, Duolingo's success in language learning provides a valuable case study in gamification. It excels at user retention through streaks, experience points (XP), leaderboards, and daily goals. It breaks down complex learning into small, manageable "mini-game" like exercises, which reduces cognitive load and maintains user motivation.
*   **Weaknesses:** Its model is not directly transferable to the more complex, abstract nature of programming, but the core principles of engagement—short feedback loops, clear progression, and rewarding user effort—are highly relevant and serve as a key inspiration for this project.

### **2.2. Proposed System & Its Advantages**

CodeCraft Quest is designed to synthesize the strengths of these different models while addressing their key weaknesses. It proposes a holistic learning environment that blends rigorous problem-solving with engaging game mechanics and AI-powered pedagogical support.

*   **Bridging the Gap:** The platform provides a full-fledged IDE for solving complex algorithmic challenges similar to LeetCode, making it suitable for serious practice. However, it wraps this experience in a gamified shell with user stats, levels, and a story-driven "Dungeon" mode to maintain motivation for beginners and provide a clearer sense of progression.

*   **Active, Not Passive, Guidance:** Unlike platforms that either give the answer or no help at all, CodeCraft Quest integrates an AI Tutor. This tool, powered by Google's Gemini models via Genkit, provides contextual hints and conceptual explanations. It encourages the user to think through the problem without simply copying a solution. This fosters active learning and deeper understanding, a critical component missing from many other platforms.

*   **Diverse Skill Development:** Recognizing that programming is more than just algorithms, the "Mini-Games" suite targets a variety of essential skills in an engaging format:
    *   **Code Typer:** Improves speed and accuracy with real programming syntax.
    *   **Debug Hunt:** Hones the critical skill of finding and fixing errors under pressure.
    *   **Code Jigsaw:** Builds code comprehension and logical ordering skills.
    *   **Monster Battle & Concept Match:** Reinforces core concepts through quick-recall questions in an RPG format.
    *   **Output Prediction & Code Rush:** Sharpens mental execution and knowledge of language specifics.

By combining these elements, the proposed system offers a more comprehensive and engaging alternative to existing platforms, catering to a wider range of learners from absolute beginners to intermediate coders looking for a more enjoyable way to practice.

### **2.3. Feasibility Study**

A preliminary study was conducted to assess the feasibility of the project across technical, economic, and operational dimensions.

#### **2.3.1. Technical Feasibility**
The project is technically feasible. The chosen technology stack is modern, well-documented, and robust.
*   **Next.js (App Router):** Provides a powerful framework for building server-driven React applications, enabling fast page loads and efficient routing.
*   **Genkit for Firebase:** A streamlined and powerful interface for integrating state-of-the-art generative AI models (Gemini) via simple server functions. This handles complex tasks like code evaluation and hint generation without requiring the developer to manage complex AI infrastructure.
*   **ShadCN UI & Tailwind CSS:** Provide a flexible and efficient system for building a high-quality, modern, and accessible user interface.
*   **Client-Side Storage:** Using browser `localStorage` is a simple and effective method for providing persistence in a single-player context without the overhead of a database.

#### **2.3.2. Economic Feasibility**
The current implementation is highly economically feasible.
*   **Hosting:** As a Next.js application, it can be hosted on a variety of platforms (like Firebase App Hosting or Vercel) with generous free tiers.
*   **AI Costs:** The use of Genkit flows, which execute as serverless functions, means costs are incurred on a per-call basis. During development and for low-traffic applications, these costs are negligible and fall well within the free quotas provided by Google AI.
*   **Future Costs:** Future enhancements like user authentication and a persistent database (e.g., Firebase Authentication and Firestore) would introduce cloud hosting costs, but these services are designed to scale affordably from a free tier, making the project economically viable as it grows.

#### **2.3.3. Operational Feasibility**
The system is designed to be user-friendly and intuitive.
*   **Accessibility:** The application is a standard web app and requires no special software or installation, making it easily accessible to anyone with a modern web browser.
*   **User Experience:** The gamified dashboard, clear navigation, and integrated help systems are intended to lower the barrier to entry for new programmers and make the learning process less intimidating. The immediate feedback loops from the IDE and mini-games ensure that users can operate the platform effectively and learn from their mistakes in real-time.

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
    *   **ShadCN UI:** A collection of beautifully designed and accessible UI components built on top of Tailwind CSS and Radix UI. This provides a consistent and professional look and feel.
*   **Client-Side Storage:** **Browser `localStorage`** - Used for persisting basic user progress, such as solved challenges and stats, directly in the user's browser. This provides a simple way to maintain state without requiring a backend database or user authentication in the current scope.
*   **Language:** **TypeScript** - A typed superset of JavaScript that enhances code quality, readability, and developer productivity by adding static types to the entire project.

### **3.2. System Architecture**

CodeCraft Quest is built on a modern, server-driven architecture centered around Next.js and its App Router.

#### **3.2.1. Architectural Style: Server-Driven UI with Next.js**
The application adopts a server-driven UI approach. This means that whenever possible, pages are rendered on the server and sent to the client as fully-formed HTML. This reduces the amount of JavaScript sent to the browser, leading to faster initial page loads and better performance, especially on low-powered devices.

#### **3.2.2. Component Model: React Server Components (RSC)**
The application primarily uses **React Server Components (RSCs)** by default. These components execute exclusively on the server and are never hydrated on the client. They are used for fetching data and rendering non-interactive parts of the UI. Client-side interactivity is added opt-in where necessary using components marked with the `'use client'` directive. This model is key to minimizing the client-side bundle size. For example, the list of challenges on the `/challenge` page is an RSC, while the interactive IDE panel is a Client Component.

#### **3.2.3. Backend Logic: Server Actions and Genkit Flows**
There is no traditional, always-on backend server. Instead, backend logic is handled through two modern mechanisms:
*   **Next.js Server Actions:** These are functions executed securely on the server that can be called directly from React components as if they were local functions. This simplifies form submissions and data mutations immensely, as it removes the need to manually create API endpoints, `fetch` calls, and handle request/response cycles. Submitting code from the IDE or getting a hint from the AI Tutor are both handled via Server Actions.
*   **Genkit Flows:** These are specialized server-side functions defined with the Genkit framework, designed to orchestrate AI-powered workflows. In CodeCraft Quest, flows like `runCode` and `aiCodeAssistant` are defined. They are invoked by Server Actions to construct prompts, interact with the Gemini language models, process the structured JSON results, and return them to the frontend. This architecture encapsulates all AI logic securely on the server side.

### **3.3. Data Design**

In the current version, all application data is hardcoded and managed through TypeScript modules within the `src/lib` directory. This approach was chosen for simplicity and to allow the application to run without any database setup.

#### **3.3.1. Challenge and Game Data Structure**
*   **Challenge Data (`src/lib/challenges.ts`):** This module exports a large array of `Challenge` objects. Each object follows a strict TypeScript interface, containing:
    *   `id`: A unique string identifier.
    *   `title`, `description`, `difficulty`, `domain`, `tags`: Metadata for display and filtering.
    *   `templates`: An object containing boilerplate code for various supported languages (e.g., `javascript`, `python`).
    *   `testCases`: An array of input/output objects used by the AI to verify solutions.
*   **Mini-Game Data (`src/lib/*-challenges.ts`):** Each mini-game has its own data module (e.g., `battle-challenges.ts`, `jigsaw-challenges.ts`) defining the content for that specific game, following a structure tailored to the game's needs.

#### **3.3.2. Client-Side User Progress Storage**
The application uses the browser's `localStorage` to provide a simple persistence layer for a single user, creating a stateful experience without a database.
*   **Key:** All progress is stored under a single key, `solvedChallengesInfo`.
*   **Structure:** The value is a JSON string representing an array of objects. When a user successfully solves a challenge, an object containing the `challenge.id`, `challenge.title`, and a `solvedAt` ISO timestamp is added to this array.
*   **Usage:** Pages like the Profile (`/profile`) and Dungeon (`/dungeon`) contain client-side logic (`useEffect` hooks) to read this `localStorage` item. They then process this data to calculate and display statistics, show recent solutions, and dynamically unlock new content based on the user's progress.

### **3.4. System Diagrams**

#### **3.4.1. Use Case Diagram**
A diagram showing the primary actor ("User") and their interactions with the system.
*   **Actor:** User (Learner)
*   **Use Cases:**
    *   View Dashboard
    *   Browse and Filter Coding Challenges
    *   Solve Coding Challenge (in IDE)
    *   Request AI Hint
    *   Play Monster Battle
    *   Play Debug Hunt
    *   Play Code Jigsaw
    *   View Profile and Progress
    *   Navigate Code Dungeon

#### **3.4.2. High-Level Architecture Diagram**
*(A visual representation would show the following components and interactions)*
1.  **Client (Browser):** Renders the UI (HTML/CSS/JS). Contains React Client Components for interactivity.
2.  **Next.js Server:**
    *   Handles routing and renders React Server Components.
    *   Executes Server Actions invoked by the client.
3.  **Genkit (Serverless Environment):**
    *   Contains Genkit Flows (`runCode`, `aiCodeAssistant`).
    *   Invoked by Server Actions.
    *   Interfaces with the Google AI (Gemini) API.
4.  **Google AI (Gemini API):** External service that processes prompts and returns structured data.

**Flow:** Client -> Next.js Server (Server Action) -> Genkit Flow -> Gemini API

#### **3.4.3. Sequence Diagram for "Run Code" Action**

*(This diagram illustrates the step-by-step flow of a user submitting code.)*
1.  `User` clicks "Submit" in the `IdePanel` component.
2.  `IdePanel` (Client Component) calls the `submitAction` Server Action, passing the user's code and other form data.
3.  `submitAction` (Server Action) executes on the server. It retrieves the challenge details (like the reference solution) from `src/lib/challenges.ts`.
4.  `submitAction` calls the `runCode` Genkit flow, passing all necessary data.
5.  The `runCode` flow constructs a detailed prompt for the Gemini model, instructing it to act as a code judge.
6.  Genkit sends this prompt to the Gemini AI Model via the Google AI API.
7.  The Gemini Model processes the prompt and returns a structured JSON object (`RunCodeOutput`) with the pass/fail status for each test case.
8.  The `runCode` flow returns this JSON to the `submitAction`.
9.  The `submitAction` returns the structured results to the `IdePanel` component, which is updated via the `useActionState` hook.
10. `IdePanel` re-renders to display the "Accepted" or "Wrong Answer" status and the detailed test results to the user.

---

## **Chapter 4: Implementation & Modules**

This chapter details the implementation of the core components of the CodeCraft Quest application, connecting the architectural design from Chapter 3 to the actual source code.

### **4.1. Core IDE Module (`/challenge/[id]`)**

The Integrated Development Environment (IDE) is the heart of the challenge-solving experience. It is implemented primarily in the `src/app/challenge/[id]/page.tsx` and `src/components/ide-panel.tsx` files.

#### **4.1.1. Resizable UI Layout**
The challenge page uses a `ResizablePanelGroup` component from ShadCN UI to create a two-pane view, allowing the user to adjust the space allocated to the problem description versus the code editor.
*   **Left Panel:** Contains a tabbed interface (`<Tabs>`) allowing the user to switch between the problem description (`<Info>`) and the AI Tutor (`<BotMessageSquare>`).
*   **Right Panel:** Contains the `IdePanel` component, which houses the code editor and the results area.

#### **4.1.2. Code Editor & Language Selection**
*   **Code Editor:** A simple `<textarea>` is used as the code editor for maximum compatibility and simplicity. Its value is controlled by a React state variable within the `IdePanel` component.
*   **Language Selection:** A `<Select>` dropdown allows the user to switch between supported languages for the current challenge. Changing the language updates the state, which in turn populates the editor with the corresponding boilerplate code from the `challenge.templates` object.

#### **4.1.3. Code Execution Workflow (Server Action -> Genkit Flow)**
1.  **Trigger:** The user clicks either the "Test" or "Submit" button in the `IdePanel`.
2.  **Server Action Call:** This triggers a client-side form submission that calls a corresponding Next.js Server Action (`runTestAction` or `submitAction`) defined in `src/app/actions.ts`. Hidden inputs in the form pass the user's code, language, and challenge details.
3.  **Data Preparation:** The Server Action retrieves the challenge details from `src/lib/challenges.ts`, including the reference solution, and packages the user's code, language, and test cases into a `RunCodeInput` object.
4.  **Genkit Flow Invocation:** The action then invokes the `runCode` Genkit flow located in `src/ai/flows/run-code-flow.ts`.
5.  **AI Prompt Construction:** The `runCode` flow constructs a detailed prompt for the Gemini model, instructing it to act as a code judge. It passes the user's code, the problem's test cases, and the reference solution. This prompt explicitly asks for a JSON output matching the `RunCodeOutputSchema`.
6.  **AI Response & Data Return:** The AI model executes the logic and returns the structured JSON output. The Genkit flow returns this JSON to the Server Action.
7.  **State Update:** The Server Action returns the JSON data. The `useActionState` hook in the `IdePanel` component automatically receives this data and updates the component's state, triggering a re-render.
8.  **UI Display:** The `IdePanel` component displays the test results in the "Test Results" tab or the final submission status in the "Submit Output" tab. If the submission was successful, it also updates `localStorage` to mark the challenge as solved.

### **4.2. AI Tutor Module (`AiAssistant.tsx`)**

The AI Tutor provides learners with assistance without giving away the solution.

#### **4.2.1. User Interface and Input**
The `AiAssistant` component provides a form with:
*   A textarea for the user's current code.
*   A read-only field for the problem description (pre-filled on challenge pages).
*   A dropdown for the user's self-assessed skill level (Beginner, Intermediate, Advanced).

#### **4.2.2. AI-Powered Hint Generation Workflow**
1.  **Trigger:** When the user submits the form, the `getAIAssistance` Server Action (`src/app/actions.ts`) is called.
2.  **Genkit Flow Invocation:** This action validates the input and invokes the `aiCodeAssistant` Genkit flow (`src/ai/flows/ai-code-assistant.ts`).
3.  **Prompting the Tutor:** The flow constructs a prompt for the Gemini model, instructing it to act as a helpful Socratic tutor. The prompt includes the problem description, the user's code, and their skill level. It explicitly asks the model to provide a `hint` and a conceptual `explanation`.
4.  **Displaying Results:** The structured `hint` and `explanation` are returned to the `AiAssistant` component via the `useActionState` hook and displayed in dedicated alert boxes.

### **4.3. Gamification Modules (Mini-Games)**

CodeCraft Quest includes several "mini-games" designed to target specific programming skills.

*   **4.3.1. Monster Battle (`/m/monster-battle`):** A turn-based RPG where users answer multiple-choice or short-answer questions to "attack" a monster. Answering correctly deals damage, while answering incorrectly results in the player taking damage. This module uses React's `useState` and `useActionState` hooks to track player/monster HP and game state (e.g., `'attacking'`, `'victory'`, `'defeat'`).

*   **4.3.2. Debug Hunt (`/m/debug-hunt`):** A timed challenge where users are presented with a block of buggy code. They must find and fix the error within a time limit. The game logic simply compares the user's final code with the correct solution string after the timer expires or the user submits.

*   **4.3.3. Code Jigsaw (`/m/code-jigsaw`):** This game presents a functional piece of code with its lines scrambled. Users must drag and drop the lines into the correct order. This module is implemented using the `@dnd-kit/core` and `@dnd-kit/sortable` libraries to handle the complex drag-and-drop state management and animations.

*   **4.3.4. Code Typer (`/m/code-typer`):** A test of speed and accuracy. Users must type a given code snippet exactly as shown. The component listens to `onChange` events on a `<textarea>`, comparing the typed input character-by-character with the source snippet to calculate errors and, upon completion, Words Per Minute (WPM).

*   **4.3.5. Output Prediction (`/m/output-prediction`):** A multiple-choice game where users are shown a code snippet and must predict its output. The game state is managed with `useState` to track the selected option and whether the question has been answered.

*   **4.3.6. Concept Match (`/m/concept-match`):** Users are given a programming concept (e.g., "Recursion") and must choose the correct code snippet that demonstrates it from a list of options. This is another state-managed MCQ game.

*   **4.3.7. Code Rush (`/m/code-rush`):** A timed "fill-in-the-blank" game. A code snippet with a missing keyword or variable is shown. The user must type the missing part before the timer runs out. State management tracks the user's input, the timer, and the game state (`playing`, `correct`, `timesup`).

### **4.4. User Profile & Progress Tracking**

To provide a sense of accomplishment and progression, the application tracks user data on the client-side.

#### **4.4.1. `localStorage` Data Structure**
The browser's `localStorage` is used as a simple key-value store. This avoids the need for a backend database and user authentication.
*   **Key:** `solvedChallengesInfo`
*   **Value:** A JSON stringified array of objects, where each object has the structure: `{ id: string; title: string; solvedAt: string; }`.

#### **4.4.2. Profile Page Implementation (`/profile`)**
This is a Client Component (`'use client'`).
1.  An `useEffect` hook runs on component mount.
2.  Inside the hook, it reads the `solvedChallengesInfo` item from `localStorage`.
3.  It parses the JSON string into a JavaScript array.
4.  It processes this array to calculate and display statistics:
    *   Total challenges solved (`array.length`).
    *   XP and Level (calculated based on the number of solved challenges).
    *   A breakdown of solved problems by domain (by cross-referencing the IDs with the main `challenges` data).
    *   A list of the 5 most recently solved problems (by sorting the array by the `solvedAt` timestamp).

#### **4.4.3. Dungeon Page Implementation (`/dungeon`)**
This is also a Client Component that reads from `localStorage`.
1.  It fetches the set of solved challenge IDs from `localStorage`.
2.  It iterates through the `dungeon` data structure from `src/lib/dungeon.ts`.
3.  For each floor, it checks if the unlock criteria have been met (e.g., "at least 50% of the previous floor's challenges solved").
4.  It dynamically renders each floor as "Locked" or "Unlocked" based on this check, disabling links and reducing opacity for locked content.
5.  It also renders a progress bar for each floor showing the completion percentage.

---

## **Chapter 5: System Testing**

System testing is a critical phase to ensure the quality, functionality, and reliability of the application. The testing for CodeCraft Quest was approached with a combination of manual and automated strategies, focusing on the core user-facing features.

### **5.1. Unit Testing Strategy**

Unit testing involves testing individual components or functions in isolation to ensure they work as expected.
*   **Strategy:** While a formal unit testing framework like Jest was not implemented within the project's scope, individual helper functions were manually tested during development to ensure correctness.
*   **Example (`getDailyChallenge()`):** The `getDailyChallenge()` function in `src/lib/challenges.ts` was tested by manually changing the system clock to different dates to confirm that it consistently and deterministically returned a valid challenge object based on the day of the year.
*   **Example (Component States):** React components were developed with a focus on clear, predictable state management. This allowed for straightforward manual verification of their different states (e.g., `loading`, `error`, `success`) by simulating different API response times or forcing errors in Server Actions.

### **5.2. Integration Testing Strategy**

Integration testing focuses on verifying that different modules of the application work together correctly. This was the primary focus of the testing effort, especially for the AI-driven features.
*   **Strategy:** The most critical integrations involve the frontend components, Next.js Server Actions, and the Genkit AI flows. Manual end-to-end testing was performed for all major user workflows.
*   **Example (AI Code Execution Workflow):**
    1.  A user writes a correct solution in the `IdePanel` component.
    2.  The "Submit" button is clicked, triggering the `submitAction`.
    3.  The Server Action is monitored (via `console.log` on the server) to ensure it correctly packages the data (code, test cases, etc.) and calls the `runCode` Genkit flow.
    4.  The `runCode` flow's interaction with the Gemini API is verified.
    5.  The structured JSON response from the AI is checked for correctness (e.g., all test cases `passed: true`).
    6.  The final state is passed back to the `IdePanel` and the UI is checked to confirm it correctly displays the "Accepted!" status.
    7.  The browser's `localStorage` is inspected to confirm that the `solvedChallengesInfo` key was updated with the new solved challenge.

### **5.3. Test Cases**

The following table outlines sample test cases for key functionalities of CodeCraft Quest.

| Test Case ID | Feature           | Test Scenario                                                                        | Expected Result                                                                                                | Status |
|--------------|-------------------|--------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|--------|
| TC-IDE-01    | IDE Submission    | Submit a correct solution for the "Two Sum" challenge.                               | The "Submit Output" tab displays an "Accepted!" message. Progress is saved to `localStorage`.                | Pass   |
| TC-IDE-02    | IDE Submission    | Submit an incorrect solution (wrong logic) for the "Two Sum" challenge.                | The "Submit Output" tab displays a "Wrong Answer" message with details on which test cases failed.             | Pass   |
| TC-IDE-03    | IDE Submission    | Submit incomplete code (e.g., syntax error).                                         | The test results panel displays an error message from the AI execution engine (e.g., "Syntax Error").            | Pass   |
| TC-IDE-04    | IDE Language      | Change the language in the dropdown from JavaScript to Python.                         | The code in the editor is replaced with the Python template for the current challenge.                         | Pass   |
| TC-AI-01     | AI Tutor          | Request a hint for a challenge with code that has a logical error.                     | The AI Assistant displays a relevant hint and a conceptual explanation without giving away the direct answer.      | Pass   |
| TC-AI-02     | AI Tutor          | Submit the AI Tutor form with an empty code field.                                   | A validation error message appears as a toast notification, prompting the user to enter code.                  | Pass   |
| TC-GAME-01   | Monster Battle    | Answer a monster's question correctly.                                               | The monster's HP is reduced to 0. A "Victorious" message is displayed.                                         | Pass   |
| TC-GAME-02   | Monster Battle    | Answer a monster's question incorrectly.                                             | The player's HP is reduced. A taunt message is displayed. The battle continues.                                | Pass   |
| TC-GAME-03   | Code Jigsaw       | Arrange code lines in the correct order and submit.                                  | A "Success!" message is displayed. The "Next Puzzle" button appears.                                           | Pass   |
| TC-GAME-04   | Code Jigsaw       | Arrange code lines in the wrong order and submit.                                    | An "Incorrect" message is displayed. The lines remain draggable for another attempt.                           | Pass   |
| TC-GAME-05   | Debug Hunt        | Fix the bug and submit before the timer runs out.                                    | A "Correct!" message is displayed.                                                                             | Pass   |
| TC-GAME-06   | Debug Hunt        | Fail to fix the bug before the timer runs out.                                       | A "Time's Up!" message is displayed, showing the correct solution.                                             | Pass   |
| TC-PROFILE-01| Profile Page      | Solve a new challenge and then navigate to the profile page.                         | The "Challenges Solved" count is incremented. The newly solved challenge appears in the "Recent Solutions" list. | Pass   |
| TC-DUNGEON-01| Code Dungeon      | Solve enough challenges on Floor 1 to meet the unlock criteria for Floor 2.          | Floor 2 transitions from a "Locked" to an "Unlocked" state, and its challenges become clickable.             | Pass   |
| TC-FILTER-01 | Challenge List    | Use the difficulty filter to select "Hard".                                          | The table updates to show only challenges with the "Hard" difficulty.                                          | Pass   |

---

## **Chapter 6: Conclusion & Future Scope**

### **6.1. Conclusion**

This project, CodeCraft Quest, successfully achieves its primary objective of creating a more engaging and effective platform for learning and practicing programming. By integrating gamification elements with a powerful AI-driven IDE and a suite of skill-targeting mini-games, the application addresses the common pitfalls of monotony and lack of guidance found in traditional coding platforms.

The use of a modern technology stack, including Next.js (App Router, Server Actions) and Genkit, has enabled the development of a responsive, feature-rich application with advanced AI capabilities. The system successfully provides a sandbox for users to solve complex challenges, receive intelligent feedback from an AI tutor, and practice a diverse set of skills beyond simple algorithm-solving. The client-side progress tracking provides a sense of accomplishment and progression, which is crucial for learner motivation. Overall, CodeCraft Quest serves as a robust proof-of-concept for a new generation of AI-enhanced educational tools, demonstrating a viable architecture for building interactive and intelligent learning experiences on the web.

### **6.2. Limitations of the Current System**

While the project meets its core objectives, it has several limitations inherent to its current scope which provide clear avenues for future development:

*   **No User Authentication:** The system lacks a user account system. All progress is stored in the browser's `localStorage`, which is not persistent across different browsers or devices and can be easily cleared. This prevents a truly continuous and portable user experience.
*   **No Centralized Database:** All challenge and game data is hardcoded within the application's source files. This makes it difficult to update or add new content without redeploying the entire application and requires developer intervention for content management.
*   **Single-Player Experience:** The platform is designed exclusively for individual use. It lacks social or competitive features like leaderboards, friend systems, or multiplayer challenges, which are powerful motivators on other platforms.
*   **Limited Language Support in IDE:** While the IDE is designed to be extendable, the core challenges and mini-games are primarily focused on a few popular languages. Expanding this requires significant data entry for templates and test cases.
*   **Basic IDE Features:** The code editor is a simple `<textarea>`, lacking features common in modern IDEs like syntax highlighting, code completion, and inline error checking, which would improve the user experience.

### **6.3. Future Enhancements**

The current system provides a strong foundation for numerous future enhancements that could significantly expand its capabilities:

*   **User Authentication & Cloud Persistence:**
    *   Integrate **Firebase Authentication** to allow users to create persistent accounts (email/password, social providers).
    *   Migrate all user progress data from `localStorage` to a cloud-based NoSQL database like **Firestore**. This would enable user data to sync across devices and lay the groundwork for leaderboards.
*   **Content Management System (CMS):**
    *   Move all challenge and game data from hardcoded files to Firestore.
    *   Build a simple, admin-only interface to allow instructors or content creators to add, edit, and delete challenges and mini-game content without needing to modify the source code.
*   **Competitive & Social Features:**
    *   Implement a global **leaderboard** based on XP or challenges solved to foster healthy competition.
    *   Develop a **friends system** to allow users to see each other's profiles, compare progress, and challenge each other.
*   **Multiplayer Mini-Games:**
    *   Develop real-time multiplayer versions of mini-games using a real-time database (like Firestore or Firebase Realtime Database) for state synchronization. Examples include a head-to-head "Debug Hunt" or a collaborative "Code Jigsaw."
*   **Enhanced IDE Experience:**
    *   Replace the `<textarea>` with a more powerful, open-source code editor component like Monaco Editor (the editor that powers VS Code) to provide syntax highlighting, code completion, and better formatting.
*   **Expanded Content & Learning Paths:**
    *   Greatly increase the number and variety of coding challenges and mini-games, covering more languages, frameworks (e.g., React, SQL), and advanced computer science topics.
    *   Introduce curated **Learning Paths** that group challenges and mini-games into a structured curriculum (e.g., "JavaScript Basics," "Data Structures 101").

---

## **Bibliography / References**

*   Next.js Documentation: [https://nextjs.org/docs](https://nextjs.org/docs)
*   React Documentation: [https://react.dev/](https://react.dev/)
*   Genkit for Firebase Documentation: [https://firebase.google.com/docs/genkit](https://firebase.google.com/docs/genkit)
*   ShadCN UI Components: [https://ui.shadcn.com/](https://ui.shadcn.com/)
*   Tailwind CSS Documentation: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
*   TypeScript Handbook: [https://www.typescriptlang.org/docs/handbook/](https://www.typescriptlang.org/docs/handbook/)
*   MDN Web Docs (for localStorage): [https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## **Appendices**

### **Appendix A: Sample Genkit Flow (run-code-flow.ts)**

The following is the full source code for the `run-code-flow.ts` module, which is responsible for orchestrating the AI-powered code evaluation. This flow demonstrates the core principles of using Genkit to define structured inputs and outputs, construct a detailed prompt, and interact with the Gemini model.

```typescript
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

For your reference, here is a correct solution for this problem in JavaScript. Use this to guide your evaluation.
Reference Solution:
\`\`\`javascript
{{{referenceSolution}}}
\`\`\`

Please execute the user's code against each test case provided.
For each test case, determine the following:
1.  **Actual Output**: What the user's code returns or produces for the given input.
2.  **Passed**: A boolean indicating if the 'Actual Output' strictly matches the 'Expected Output'.
3.  **Logs**: Any output printed to the console or standard output during execution.
4.  **Error**: Any runtime or compilation errors that occur. If the code runs without error, this should be null.

Return the results as a JSON object that adheres to the output schema. Ensure that the 'actualOutput' is in the same data type as the 'expectedOutput' for accurate comparison.
If the user's code is incomplete or contains syntax errors that prevent execution, set the 'error' field for each test case to a descriptive message (e.g., "Syntax Error: Incomplete function"). Do not try to complete the code.
`,
});

export async function runCode(input: RunCode-CodeInput): Promise<RunCodeOutput> {
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
```
