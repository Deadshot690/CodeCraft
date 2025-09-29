
"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface Settings {
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
    try {
      const storedSettings = localStorage.getItem('app-settings');
      if (storedSettings) {
        setSettings(JSON.parse(storedSettings));
      }
    } catch (error) {
      console.error('Failed to load settings from localStorage', error);
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
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
    setSettings(defaultSettings);
  }, []);

  const value = { settings, setSetting, resetSettings };

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
