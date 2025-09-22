
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
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (authLoading) {
            setLoading(true);
            return;
        }
        
        // CRITICAL FIX: Immediately reset state on any user change.
        // This prevents the race condition and data leakage between sessions.
        setSolvedChallengeIds(new Set());
        setSolvedMiniGameIds(new Set());
        setLoading(true);

        if (user) {
            // User is logged in, use Firestore
            // Clear any lingering anonymous data
            localStorage.removeItem('solvedChallengesInfo');
            localStorage.removeItem('solvedMiniGames');
            
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
            // User is logged out, load from localStorage
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
