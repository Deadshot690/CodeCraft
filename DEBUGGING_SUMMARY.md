
# Debugging Summary: Persistent State Issue in Next.js/Firebase App

## 1. Project Overview

-   **Tech Stack:** Next.js (App Router), React, TypeScript, Firebase (Authentication and Firestore), Tailwind CSS.
-   **Functionality:** A gamified coding platform where users can solve challenges and mini-games.
-   **User Progress:**
    -   **Logged-in users:** Progress (solved challenges, XP, etc.) is stored in a `users` collection in Firestore.
    -   **Anonymous users:** Progress is stored in the browser's `localStorage` to provide a logged-out experience.

## 2. The Core Problem

When a user logs out and another user logs in within the same browser session (e.g., in the same tab, or a new tab), the progress data from the first user incorrectly appears in the second user's session. The application state is not being cleanly reset between user sessions.

**Symptoms:**
-   User A logs in, solves challenges. Progress is displayed correctly.
-   User A logs out.
-   User B logs in. For a moment, or until a hard refresh, User B sees User A's solved challenges.
-   The issue is inconsistent and seems like a race condition, being more pronounced in some navigation scenarios than others.

## 3. Key Architectural Components

### a. `src/hooks/use-auth.ts`
This hook is the primary mechanism for authentication. It wraps Firebase's `onAuthStateChanged` listener to provide a global `user` object and a `loading` state to the application.

```typescript
// Simplified logic of use-auth.ts
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { user, loading };
}
```

### b. `src/hooks/use-progress.tsx` & `ProgressProvider`
This is intended to be the **single source of truth** for all user progress data. The `ProgressProvider` wraps the entire application in `src/app/layout.tsx`.

-   It uses the `useAuth` hook to get the current user.
-   If a user is logged in, it fetches their solved challenges from their document in Firestore.
-   If no user is logged in, it falls back to reading progress from `localStorage`.

```typescript
// Simplified logic of use-progress.tsx
export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
    const { user, loading: authLoading } = useAuth();
    const [solvedChallengeIds, setSolvedChallengeIds] = useState(new Set());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (authLoading) return;

        if (user) {
            // Firestore logic: onSnapshot listens for changes
            const unsub = onSnapshot(doc(db, 'users', user.uid), (doc) => {
                // ... sets solvedChallengeIds from doc data
                setLoading(false);
            });
            return () => unsub();
        } else {
            // LocalStorage logic for anonymous users
            const localData = JSON.parse(localStorage.getItem('solvedChallengesInfo') || '[]');
            setSolvedChallengeIds(new Set(localData.map(c => c.id)));
            setLoading(false);
        }
    }, [user, authLoading]);

    // ... value provided through context
};
```

### c. UI Components (e.g., `/challenge/page.tsx`)
These pages consume the `useProgress` hook to get the set of solved challenge IDs and display the UI accordingly.

```typescript
// Simplified logic of a page component
function ChallengeTable() {
    const { solvedChallengeIds, loading } = useProgress();
    // ... renders a list of challenges, marking them as solved
    // if the challenge.id is in solvedChallengeIds
}
```

## 4. Chronology of Failed Solutions

The core issue is that state from one session is "leaking" into the next. My attempts to fix this have failed.

### Attempt 1: Fixing `useEffect` dependencies
-   **Hypothesis:** The data-fetching hooks on individual pages were not re-running when the user changed.
-   **Action:** Ensured all `useEffect` hooks that fetched data had the `user` object in their dependency array.
-   **Result:** Failure. The problem is not that the hook doesn't re-run, but that the component's state isn't cleared before the new data arrives, creating a race condition where stale data is displayed.

### Attempt 2: Centralizing State with `useProgress`
-   **Hypothesis:** Each page managing its own state was the problem. Centralizing state would fix it.
-   **Action:** Created the `useProgress` hook and `ProgressProvider` to act as a single source of truth.
-   **Result:** Failure. The core problem remained. The `ProgressProvider` itself was not resetting its state correctly between user sessions. When a user logged out, the `user` object became null, but the provider's internal state (`solvedChallengeIds`) held the old data for a render cycle, which was then passed down to all child components.

### Attempt 3: Keying the Provider
-   **Hypothesis:** The `ProgressProvider` component itself needed to be completely unmounted and remounted between user changes to guarantee a state reset.
-   **Action:** Added a `key` prop to the `ProgressProvider` in `src/app/layout.tsx`, tied to the user's UID. (`<ProgressProvider key={user?.uid || 'anonymous'}>`).
-   **Result:** Failure. While this is a standard React pattern for resetting state, it did not work in this specific Next.js App Router context, suggesting the state persistence is happening in a way that survives this re-mounting strategy.

### Attempt 4: Aggressive `localStorage` Management
-   **Hypothesis:** The fallback to `localStorage` was being triggered improperly during the user transition, causing old anonymous data to be loaded into the new user's session.
-   **Action:** Modified `useProgress` to explicitly clear `localStorage` upon user login.
-   **Result:** Failure. The bug is not about anonymous data contaminating a logged-in session, but about User A's data contaminating User B's session.

### Attempt 5: Forcing a Full Page Reload
-   **Hypothesis:** The React state lifecycle within Next.js is too complex and the only guaranteed way to clear all state is a full page refresh.
-   **Action:** Modified the `useAuth` hook to perform a `window.location.reload()` whenever the user's UID changes.
-   **Result:** Failure. This indicates that either my implementation of the reload was flawed, or the issue is even more subtle and is somehow persisting across a full refresh (which seems unlikely, but the bug persists).

The problem lies in the React state management across authentication changes in a Next.js App Router environment. A robust solution is needed to ensure that whenever the user object from `useAuth` changes, the entire state managed by `useProgress` is instantly and reliably cleared before any components can re-render with stale data.
