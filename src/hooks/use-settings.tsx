
"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Badge } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type Theme = 'light' | 'dark';

// This represents the static user data that we are not yet storing in a database.
// In a real app, this would be fetched from Firestore.
const staticUserData = {
    level: 5,
    xp: 750,
    xpToNextLevel: 1000,
    streak: 12,
    badges: [
      { id: '1', name: 'Python Pro', icon: PlaceHolderImages[0].imageUrl, description: 'Master of Python' },
      { id: '2', name: 'JS Master', icon: PlaceHolderImages[1].imageUrl, description: 'Wizard of the Web' },
      { id: '3', name: '5-Day Streak', icon: PlaceHolderImages[2].imageUrl, description: 'On Fire!' },
      { id: '4', name: 'First Challenge', icon: PlaceHolderImages[3].imageUrl, description: 'The Journey Begins' },
    ] as Badge[],
    completedTasks: [],
};


interface Settings {
  // User Profile - dynamic fields from auth or localStorage
  uid: string | null;
  email: string;
  name: string;
  username: string;
  avatarUrl: string;
  bio: string;
  location: string;
  github: string;
  linkedin: string;

  // App Settings
  theme: Theme;
  appLanguage: string;
  language: string;
  animations: boolean;
  sounds: boolean;
  highContrast: boolean;
}

interface UserContextData extends Omit<Settings, 'uid' | 'email' | 'name' | 'username' | 'avatarUrl' | 'bio' | 'location' | 'github' | 'linkedin'> {
    level: number;
    xp: number;
    xpToNextLevel: number;
    streak: number;
    badges: Badge[];
    completedTasks: string[];
}


interface SettingsContextType {
  settings: Settings;
  setSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
  resetSettings: () => void;
  user: UserContextData;
  isAuthLoading: boolean;
}

const defaultSettings: Settings = {
  // User Profile from mock data
  uid: null,
  email: 'guest@example.com',
  name: "Guest",
  username: 'guest_user', 
  avatarUrl: "https://picsum.photos/seed/guest/200/200",
  bio: 'Just browsing!',
  location: '',
  github: '',
  linkedin: '',

  // App settings
  theme: 'dark',
  appLanguage: 'en',
  language: 'javascript',
  animations: true,
  sounds: true,
  highContrast: false,
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setFirebaseUser(user);
      setIsAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const getLocalStorageKey = (uid: string | null) => uid ? `app-settings-${uid}` : 'app-settings-guest';

  useEffect(() => {
    if (isAuthLoading) return; // Wait until auth state is confirmed

    const key = getLocalStorageKey(firebaseUser?.uid || null);

    if (typeof window !== 'undefined') {
      try {
        const storedSettings = localStorage.getItem(key);
        if (storedSettings) {
          const parsedSettings = JSON.parse(storedSettings);
          setSettings(prev => ({ ...prev, ...parsedSettings }));
        } else {
           // If no stored settings, reset to default for the current user type
           const userDefaults = firebaseUser
             ? {
                 uid: firebaseUser.uid,
                 email: firebaseUser.email || 'user@example.com',
                 name: firebaseUser.displayName || 'New User',
                 username: firebaseUser.email?.split('@')[0] || 'new_user',
                 avatarUrl: firebaseUser.photoURL || `https://picsum.photos/seed/${firebaseUser.uid}/200/200`,
               }
             : defaultSettings;
           setSettings(prev => ({ ...defaultSettings, ...userDefaults }));
        }
      } catch (error) {
        console.error('Failed to load settings from localStorage', error);
        // Fallback to default
        setSettings(defaultSettings);
      }
      setIsInitialized(true);
    }
  }, [firebaseUser, isAuthLoading]);

  useEffect(() => {
    if (isInitialized && typeof window !== 'undefined') {
      const key = getLocalStorageKey(settings.uid);
      try {
        localStorage.setItem(key, JSON.stringify(settings));
        
        const root = document.documentElement;
        root.classList.remove('light', 'dark', 'high-contrast');
        
        if (settings.highContrast) {
          root.classList.add('high-contrast');
        } else {
          root.classList.add(settings.theme);
        }

      } catch (error) {
        console.error('Failed to save settings to localStorage', error);
      }
    }
  }, [settings, isInitialized]);

  const setSetting = useCallback(<K extends keyof Settings>(key: K, value: Settings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetSettings = useCallback(() => {
    const userSpecificDefaults = firebaseUser
      ? {
          uid: firebaseUser.uid,
          email: firebaseUser.email || '',
          name: firebaseUser.displayName || 'New User',
          username: firebaseUser.email?.split('@')[0] || 'new_user',
          avatarUrl: firebaseUser.photoURL || `https://picsum.photos/seed/${firebaseUser.uid}/200/200`,
        }
      : {};
    setSettings({...defaultSettings, ...userSpecificDefaults});
  }, [firebaseUser]);

  const user = { ...staticUserData };
  const value = { settings, setSetting, resetSettings, user, isAuthLoading };

  if (isAuthLoading) {
    return null; // Or a global loading spinner
  }

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
