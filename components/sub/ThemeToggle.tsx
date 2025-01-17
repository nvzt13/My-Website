'use client';
import { useEffect, useState } from 'react';
import { RootState } from '../../lib/store';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../lib/counterSlice';
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { RiComputerLine } from "react-icons/ri";

export default function ThemeToggle() {
  // 'theme' tipini string olarak belirtiyoruz
  const [theme, setTheme] = useState<string>(
    typeof window !== 'undefined' ? localStorage.getItem('theme') || 'system' : 'system'
  );

  // 'isDark' boolean tipinde olmalı
  const isDark = useSelector((state: RootState) => state.counter.isDark);

  // 'dispatch' tipi Redux'ın 'Dispatch' tipi ile belirtilmeli
  const dispatch = useDispatch();

  useEffect(() => {
    const applyTheme = (newTheme: string) => {
      if (newTheme === 'system') {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', systemPrefersDark);
        dispatch(changeTheme(systemPrefersDark)); // Sadece boolean değer gönderiliyor
      } else {
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        dispatch(changeTheme(newTheme === 'dark')); // Sadece boolean değer gönderiliyor
      }
    };

    applyTheme(theme);

    // Add listener for system theme changes
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        document.documentElement.classList.toggle('dark', e.matches);
        dispatch(changeTheme(e.matches)); // Sadece boolean değer gönderiliyor
      };
      mediaQuery.addEventListener('change', handleChange);

      // Cleanup listener on unmount
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, dispatch]);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme('system'); // default to system theme
    }
  }, []);

  // 'newTheme' tipini string olarak belirtiyoruz
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="flex justify-center items-center space-x-4 dark:text-white">
      <FiSun onClick={() => handleThemeChange('light')} className="text-2xl" />
      <RiComputerLine onClick={() => handleThemeChange('system')} className="text-2xl" />
      <FaMoon onClick={() => handleThemeChange('dark')} className="text-2xl"/>
    </div>
  );
}