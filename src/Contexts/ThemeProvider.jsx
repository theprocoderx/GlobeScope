// src/Contexts/ThemeProvider.jsx
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => JSON.parse(localStorage.getItem('isDarkMood')) || false);

  if (typeof window !== 'undefined') {
    document.body.classList.toggle('dark', isDark);
  }

  return <ThemeContext.Provider value={[isDark, setIsDark]}>{children}</ThemeContext.Provider>;
}
