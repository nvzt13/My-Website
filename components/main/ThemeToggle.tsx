'use client'
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('theme') : 'system'
  );
useEffect(() => {
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (theme === 'system') {
    if (systemPrefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}, [theme]);
  useEffect(() => {
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
    } else {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);
useEffect(() => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    setTheme(storedTheme);
  } else {
    setTheme('system'); // varsayılan olarak sistem temasını kullan
  }
}, []);
 const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      <button onClick={() => handleThemeChange('light')} className="p-2">☀️</button>
      <button onClick={() => handleThemeChange('system')} className="p-2">💻</button>
      <button onClick={() => handleThemeChange('dark')} className="p-2">🌙</button>
    </div>
  );
}