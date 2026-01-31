import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes, defaultTheme } from './themes';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState(defaultTheme);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved && themes[saved]) {
      setThemeKey(saved);
    }
  }, []);

  const switchTheme = key => {
    if (themes[key]) {
      setThemeKey(key);
      localStorage.setItem('portfolio-theme', key);
    }
  };

  const theme = themes[themeKey];

  return (
    <ThemeContext.Provider value={{ theme, themeKey, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
