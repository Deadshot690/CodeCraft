
"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { user as defaultUser } from '@/lib/user-data';

type Theme = 'light' | 'dark';

interface Settings {
  // User Profile
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

interface SettingsContextType {
  settings: Settings;
  setSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
  resetSettings: () => void;
}

const defaultSettings: Settings = {
  // User Profile from mock data
  name: "Alex",
  username: 'alex_codes', // default mock value
  avatarUrl: "https://picsum.photos/seed/alex/200/200",
  bio: 'Full-stack developer and coffee enthusiast. Turning ideas into reality, one line of code at a time.',
  location: 'San Francisco, CA',
  github: 'https://github.com/alex_codes',
  linkedin: 'https://linkedin.com/in/alex_codes',

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
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedSettings = localStorage.getItem('app-settings');
        if (storedSettings) {
          // Merge stored settings with defaults to avoid breaking changes
          const parsedSettings = JSON.parse(storedSettings);
          setSettings(prev => ({ ...prev, ...parsedSettings }));
        }
      } catch (error) {
        console.error('Failed to load settings from localStorage', error);
      }
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized && typeof window !== 'undefined') {
      try {
        localStorage.setItem('app-settings', JSON.stringify(settings));
        
        // Apply theme and high contrast to the document element
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
    // Reset to defaults but keep user-specific info if needed, or full reset
    setSettings(defaultSettings);
  }, []);

  const value = { settings, setSetting, resetSettings };

  if (!isInitialized) {
    return null; // Or a loading spinner
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
