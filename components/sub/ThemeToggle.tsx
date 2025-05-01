"use client";
import { RootState } from "../../lib/redux/store";
import { changeTheme } from "../../lib/redux/themeSlice";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

export default function ThemeToggle() {
  // Accessing 'isDark' from the Redux store
  const isDark = useAppSelector((state: RootState) => state.theme.isDark);
  const dispatch = useAppDispatch();

  const handleChangeTheme = () => {
    document.documentElement.classList.toggle("dark");

    dispatch(changeTheme());
  };

  return (
    <div className="flex justify-center items-center space-x-4 m-4 dark:text-white">
      {isDark ? (
        <FiSun
          onClick={handleChangeTheme}
          className="text-2xl cursor-pointer"
        />
      ) : (
        <FaMoon
          onClick={handleChangeTheme}
          className="text-2xl cursor-pointer"
        />
      )}
    </div>
  );
}
