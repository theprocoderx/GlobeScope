import { createContext, useState, useContext, useEffect } from 'react';

// Initializing the context object
const ThemeContext = createContext();

// 2. ThemeProvider combining both configurations into a single context
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    // Safely parsing cached theme from LocalStorage with fallback
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('isDarkMood');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  // Automatically updates document theme class and saves preference to LocalStorage
  useEffect(() => {
    // Reactively updates the document class list based on theme changes
    document.body.classList.toggle('dark', isDark);

    // Caches the new value in LocalStorage to prevent resetting on reload
    localStorage.setItem('isDarkMood', JSON.stringify(isDark));
  }, [isDark]); // Runs the effect conditionally on isDark state updates only

  // Returning an object instead of an array for cleaner property destructuring
  return <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>;
}
// 3. Bundling the custom useTheme hook into this single context file
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
