'use client';
import { useEffect, useState } from 'react';
import { RootState } from '../../lib/store';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../lib/counterSlice';
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { RiComputerLine } from "react-icons/ri";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('theme') : 'system'
  );
  const isDark = useSelector((state: RootState) => state.counter.isDark);
  const dispatch = useDispatch();

  useEffect(() => {
    const applyTheme = (newTheme) => {
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
      const handleChange = (e) => {
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

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      <FiSun onClick={() => handleThemeChange('light')} className="text-2xl" />
      <RiComputerLine onClick={() => handleThemeChange('system')} className="text-2xl" />
      <FaMoon onClick={() => handleThemeChange('dark')} className="text-2xl"/>
    </div>
  );
}