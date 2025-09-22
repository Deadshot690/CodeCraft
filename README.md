# CodeCraft Quest: A Gamified AI-Powered Coding Platform

Welcome to CodeCraft Quest, a modern, web-based platform designed to make learning to code more engaging, interactive, and effective. By blending a full-featured Integrated Development Environment (IDE) with gamification, persistent user accounts, and powerful AI assistance, CodeCraft Quest transforms the learning process into an exciting adventure.

This project was bootstrapped in Firebase Studio.

## Features

-   **Persistent User Accounts**: Sign up and log in to have your progress saved to the cloud.
-   **Cloud-Based Progress Tracking**: Your XP, level, and solved challenges are stored in Firestore, available across devices.
-   **Interactive Coding Challenges**: Solve a wide range of algorithmic problems in a feature-rich IDE.
-   **AI-Powered Code Evaluation**: Get instant, AI-driven feedback on correctness against multiple test cases.
-   **AI Tutor**: Get contextual hints from an integrated AI assistant without spoiling the solution.
-   **Gamified "Code Dungeon"**: Progress through floors of increasingly difficult challenges in a structured, story-driven mode.
-   **Engaging Mini-Games**: Sharpen specific skills with a variety of fun, interactive games:
    -   **Monster Battle**: Answer coding trivia to defeat monsters in a turn-based RPG.
    -   **Debug Hunt**: Find and fix bugs in code snippets against the clock.
    -   **Code Jigsaw**: Reassemble scrambled code blocks into a working program.
    -   **Code Typer**: Improve your typing speed and accuracy.
    -   **Output Prediction**: Test your code comprehension.
    -   **Concept Match**: Match code to programming concepts.

## Technology Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Authentication**: [Firebase Authentication](https://firebase.google.com/docs/auth)
-   **Database**: [Cloud Firestore](https://firebase.google.com/docs/firestore)
-   **AI Integration**: [Google's Genkit](https://firebase.google.com/docs/genkit) with the Gemini family of models.
-   **UI**: [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [ShadCN UI](https://ui.shadcn.com/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 18 or later recommended)
-   `npm` or `yarn` package manager
-   A [Firebase Project](https://console.firebase.google.com/)

### Installation and Setup

1.  **Clone the repository**
    Download or clone the project source code to your local machine.
    ```sh
    https://github.com/Deadshot690/CodeCraft.git
    ```

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
    This project requires credentials for both Firebase and Google AI services.

    a. **Firebase Client Configuration:**
    - Go to your Firebase project settings.
    - Under "Your apps," select your web app (or create one).
    - In the app settings, find the "SDK setup and configuration" section and select "Config".
    - Copy the `firebaseConfig` object.
    - Replace the placeholder configuration in `src/lib/firebase.ts` with the object you copied.

    b. **Google AI & Firebase Admin Configuration:**
    - Create a new file named `.env` in the root of your project directory.
    - **Add your Google AI API Key:** You can obtain a key from [Google AI Studio](https://aistudio.google.com/app/apikey).
      ```
      GEMINI_API_KEY=YOUR_API_KEY_HERE
      ```
    - **Add your Firebase Service Account Key (Optional but Recommended):** For server-side features like the leaderboard to work correctly, you need a service account key.
      - In your Firebase project, go to **Project Settings > Service accounts**.
      - Click "Generate new private key". A JSON file will be downloaded.
      - **Do not commit this file to Git.** Open the file, copy its entire contents, and then encode it in Base64 format. You can use an online tool or a command-line utility:
        `base64 -i /path/to/your/key.json`
      - Add the resulting Base64 string to your `.env` file:
      ```
      FIREBASE_SERVICE_ACCOUNT_KEY=YOUR_BASE64_ENCODED_KEY_HERE
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
-   `src/lib/`: Contains the application's data, utility functions, and Firebase configurations (`firebase.ts`, `firebase-admin.ts`).
-   `src/ai/`: Contains all AI-related logic.
    -   `src/ai/flows/`: Genkit flows that orchestrate calls to the Gemini AI models.
-   `src/hooks/`: Contains custom React hooks for authentication (`useAuth`) and progress tracking (`useProgress`).
-   `public/`: Static assets like images and fonts.

## Available Scripts

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Lints the project files.

## Author
Mohd Juned Md Taufik Bhojani