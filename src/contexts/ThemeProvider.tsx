import React, { createContext, useContext, useEffect, useState } from 'react';
import { formatInTimeZone } from 'date-fns-tz';

type Theme = 'light' | 'dark' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDarkMode: boolean;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
  isDarkMode: false,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if the current time in Asia/Kolkata is between 6 PM and 6 AM for dark mode
  const checkTimeBasedTheme = () => {
    try {
      // Get current time in Asia/Kolkata
      const now = new Date();
      const timeInKolkata = formatInTimeZone(now, 'Asia/Kolkata', 'HH');
      const hour = parseInt(timeInKolkata, 10);
      
      // Dark mode between 6 PM (18:00) and 6 AM (06:00) in Kolkata time
      return hour >= 18 || hour < 6;
    } catch (error) {
      console.error('Error getting time in Asia/Kolkata:', error);
      return false;
    }
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    let themeToApply = theme;
    
    if (theme === 'system') {
      const isDark = checkTimeBasedTheme();
      themeToApply = isDark ? 'dark' : 'light';
      setIsDarkMode(isDark);
    } else {
      setIsDarkMode(theme === 'dark');
    }

    root.classList.add(themeToApply);
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
    isDarkMode,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
