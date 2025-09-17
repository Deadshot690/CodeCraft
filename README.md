# CodeCraft Quest: A Gamified AI-Powered Coding Platform

![CodeCraft Quest Screenshot](https://storage.googleapis.com/studioprototyper-prompts/project_images/codecraft-quest.png)

Welcome to CodeCraft Quest, a modern, web-based platform designed to make learning to code more engaging, interactive, and effective. By blending a full-featured Integrated Development Environment (IDE) with gamification and powerful AI assistance, CodeCraft Quest transforms the learning process into an exciting adventure.

This project was bootstrapped in Firebase Studio.

## Features

-   **Interactive Coding Challenges**: Solve a wide range of algorithmic and domain-specific problems in a feature-rich IDE.
-   **AI-Powered Code Evaluation**: Submit your code and get instant, AI-driven feedback on correctness against multiple test cases.
-   **AI Tutor**: Get contextual hints and conceptual explanations from an integrated AI assistant without spoiling the solution.
-   **Gamified "Code Dungeon"**: Progress through floors of increasingly difficult challenges in a structured, story-driven mode.
-   **Engaging Mini-Games**: Sharpen specific skills with a variety of fun, interactive games:
    -   **Monster Battle**: Answer coding trivia to defeat monsters in a turn-based RPG.
    -   **Debug Hunt**: Find and fix bugs in code snippets against the clock.
    -   **Code Jigsaw**: Reassemble scrambled code blocks into a working program.
    -   **Code Typer**: Improve your typing speed and accuracy with real code snippets.
    -   **Output Prediction**: Test your code comprehension by predicting the output of tricky scripts.
    -   **Concept Match**: Reinforce your knowledge by matching code to programming concepts.
-   **User Profile & Progress Tracking**: Keep track of your solved challenges, XP, level, and see your recent achievements.

## Technology Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **AI Integration**: [Google's Genkit](https://firebase.google.com/docs/genkit) with the Gemini family of models.
-   **UI**: [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [ShadCN UI](https://ui.shadcn.com/)
-   **Local Persistence**: Browser `localStorage` for client-side progress tracking.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 18 or later recommended)
-   `npm` or `yarn` package manager

### Installation and Setup

1.  **Clone the repository**
    Download or clone the project source code to your local machine.

2.  **Navigate to the project directory**
    ```sh
    cd path/to/your/project
    ```

3.  **Install dependencies**
    Install the required `npm` packages.
    ```sh
    npm install
    ```

4.  **Set up Environment Variables**
    This project uses Genkit to connect to Google's Gemini models. You need to provide an API key for the AI features to work.

    a. Create a new file named `.env` in the root of your project directory.

    b. Add your Google AI API key to the `.env` file. You can obtain a key from [Google AI Studio](https://aistudio.google.com/app/apikey).
    ```
    GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```

5.  **Run the Development Server**
    Once the dependencies are installed and the environment variables are set, you can start the Next.js development server.
    ```sh
    npm run dev
    ```
    This command will start the application on `http://localhost:9002` by default.

6.  **Open the Application**
    Open [http://localhost:9002](http://localhost:9002) in your browser to see the application running.

## Project Structure

Here is an overview of the key directories in the project:

-   `src/app/`: Contains all the application routes and pages, following the Next.js App Router structure.
-   `src/components/`: Contains all shared React components, including UI components from `shadcn/ui`.
-   `src/lib/`: Contains the application's data, such as the definitions for all coding challenges, mini-games, and utility functions.
-   `src/ai/`: Contains all AI-related logic.
    -   `src/ai/flows/`: Genkit flows that orchestrate calls to the Gemini AI models for features like code evaluation and the AI tutor.
-   `src/hooks/`: Contains custom React hooks.
-   `public/`: Static assets like images and fonts.
-   `PROJECT_DOCUMENTATION.md`: A detailed project report and synopsis.

## Available Scripts

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Lints the project files.
