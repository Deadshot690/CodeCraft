
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './use-auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface ProgressContextType {
    solvedChallengeIds: Set<string>;
    solvedMiniGameIds: Set<string>;
    loading: boolean;
}

const ProgressContext = createContext<ProgressContextType>({
    solvedChallengeIds: new Set(),
    solvedMiniGameIds: new Set(),
    loading: true,
});

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
    const { user, loading: authLoading } = useAuth();
    const [solvedChallengeIds, setSolvedChallengeIds] = useState<Set<string>>(new Set());
    const [solvedMiniGameIds, setSolvedMiniGameIds] = useState<Set<string>>(new Set());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Don't do anything until Firebase auth has settled.
        if (authLoading) {
            setLoading(true);
            return;
        }

        // --- Handle Logged-In User ---
        if (user) {
            // Clear any anonymous progress from localStorage to prevent data bleed.
            localStorage.removeItem('solvedChallengesInfo');
            localStorage.removeItem('solvedMiniGames');

            const userDocRef = doc(db, 'users', user.uid);
            const unsubscribe = onSnapshot(userDocRef, (doc) => {
                if (doc.exists()) {
                    const userData = doc.data();
                    const challengeIds = new Set((userData.solvedChallenges || []).map((c: { id: string }) => c.id));
                    const gameIds = new Set(userData.solvedMiniGames || []);
                    setSolvedChallengeIds(challengeIds);
                    setSolvedMiniGameIds(gameIds);
                } else {
                    // User is authenticated but no doc exists yet, reset state
                    setSolvedChallengeIds(new Set());
                    setSolvedMiniGameIds(new Set());
                }
                setLoading(false);
            }, (error) => {
                console.error("Error fetching user progress from Firestore:", error);
                setSolvedChallengeIds(new Set());
                setSolvedMiniGameIds(new Set());
                setLoading(false);
            });

            // Cleanup Firestore listener on unmount or user change
            return () => unsubscribe();
        }
        // --- Handle Logged-Out User ---
        else {
            // Clear any authenticated state
            setSolvedChallengeIds(new Set());
            setSolvedMiniGameIds(new Set());

            // Load progress for anonymous users from localStorage
            try {
                const solvedChallenges: {id: string}[] = JSON.parse(localStorage.getItem('solvedChallengesInfo') || '[]');
                const solvedGames: string[] = JSON.parse(localStorage.getItem('solvedMiniGames') || '[]');
                setSolvedChallengeIds(new Set(solvedChallenges.map(c => c.id)));
                setSolvedMiniGameIds(new Set(solvedGames));
            } catch (e) {
                console.error("Failed to read progress from localStorage", e);
                setSolvedChallengeIds(new Set());
                setSolvedMiniGameIds(new Set());
            }
            setLoading(false);
        }

    }, [user, authLoading]);

    const value = { solvedChallengeIds, solvedMiniGameIds, loading };

    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    );
};
