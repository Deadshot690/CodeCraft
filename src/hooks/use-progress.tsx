
'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useAuth } from './use-auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface ProgressContextType {
    solvedChallengeIds: Set<string>;
    solvedMiniGameIds: Set<string>;
    loading: boolean;
    refreshProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
    const { user, loading: authLoading } = useAuth();
    const [solvedChallengeIds, setSolvedChallengeIds] = useState<Set<string>>(new Set());
    const [solvedMiniGameIds, setSolvedMiniGameIds] = useState<Set<string>>(new Set());
    const [loading, setLoading] = useState(true);

    const refreshProgress = useCallback(() => {
        // This function is now a placeholder for potential future manual refresh logic,
        // but Firestore's onSnapshot handles real-time updates automatically.
        // For non-logged in state, there's nothing to refresh.
    }, []);

    useEffect(() => {
        if (authLoading) {
            setLoading(true);
            return;
        }

        // Always reset state on user change to prevent data leakage.
        setSolvedChallengeIds(new Set());
        setSolvedMiniGameIds(new Set());
        setLoading(true);

        if (user) {
            // User is logged in, use Firestore
            const userDocRef = doc(db, 'users', user.uid);
            const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    const challengeIds = new Set((userData.solvedChallenges || []).map((c: { id: string }) => c.id));
                    const gameIds = new Set(userData.solvedMiniGames || []);
                    setSolvedChallengeIds(challengeIds);
                    setSolvedMiniGameIds(gameIds);
                } else {
                    // This handles the case where a user is newly created and doesn't have a doc yet.
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

            return () => unsubscribe();
        } else {
            // No user is logged in. Do not use localStorage. State is already cleared.
            setLoading(false);
        }
    }, [user, authLoading]);

    const value = { solvedChallengeIds, solvedMiniGameIds, loading, refreshProgress };

    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    );
};
