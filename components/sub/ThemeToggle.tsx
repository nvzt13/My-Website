'use client';
import { useEffect, useState } from 'react';
import { RootState } from '../../lib/store';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../lib/themeSlice';
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  // Accessing 'isDark' from the Redux store
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const dispatch = useDispatch();

  const handleChangeTheme = () => {

    document.documentElement.classList.toggle('dark');

    dispatch(changeTheme());
  };


  return (
    <div className="flex justify-center items-center space-x-4 m-4 dark:text-white">
      {isDark ? (
        <FiSun onClick={handleChangeTheme} className="text-2xl cursor-pointer" />
      ) : (
        <FaMoon onClick={handleChangeTheme} className="text-2xl cursor-pointer" />
      )}
    </div>
  );
}