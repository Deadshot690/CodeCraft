
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

const ProgressContext = createContext<ProgressContextType>({
    solvedChallengeIds: new Set(),
    solvedMiniGameIds: new Set(),
    loading: true,
    refreshProgress: () => {},
});

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
    const { user, loading: authLoading } = useAuth();
    const [solvedChallengeIds, setSolvedChallengeIds] = useState<Set<string>>(new Set());
    const [solvedMiniGameIds, setSolvedMiniGameIds] = useState<Set<string>>(new Set());
    const [loading, setLoading] = useState(true);

    const loadLocalProgress = useCallback(() => {
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
    }, []);

    useEffect(() => {
        if (authLoading) {
            setLoading(true);
            return;
        }

        if (user) {
            // User is logged in, clear local anonymous progress and listen to Firestore
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
            // User is logged out, load from localStorage
            setSolvedChallengeIds(new Set());
            setSolvedMiniGameIds(new Set());
            loadLocalProgress();
        }
    }, [user, authLoading, loadLocalProgress]);

    const refreshProgress = useCallback(() => {
        if (!user) {
            loadLocalProgress();
        }
        // For logged-in users, Firestore's onSnapshot handles refreshing automatically.
    }, [user, loadLocalProgress]);

    const value = { solvedChallengeIds, solvedMiniGameIds, loading, refreshProgress };

    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    );
};
