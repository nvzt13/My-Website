'use client'
import { useState } from 'react';
import { GrMenu } from "react-icons/gr";
import { FiSun, FiMenu, FiX } from "react-icons/fi"; // Menü açma kapama iconları
import { FaMoon } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../lib/counterSlice';
import { RootState } from '../../lib/store';
import ThemeToggle from './ThemeToggle';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.counter.isDark);
  const handleThemeChange = () => {
    dispatch(changeTheme());
  };

  return (
    <header className="w-full h-auto fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-lg z-50 transition-all duration-300 ease-in-out py-4">
      <nav className="max-w-[100rem] w-full mx-auto px-5 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between w-full">
          <a
            href="#about-me"
            className="text-2xl font-bold tracking-wide text-gray-200 transition-transform duration-300 hover:scale-105"
          >
            Nevzat Atalay
          </a>
          {/* Mobil menü butonu */}
          <button onClick={toggleMenu} className="sm:hidden text-3xl text-gray-200 transition-transform duration-300 hover:scale-110 focus:outline-none">
            {isOpen ? <FiX /> : <GrMenu />} {/* Açık/Kapalı duruma göre ikon değişir */}
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full sm:flex sm:items-center sm:justify-end transition-all duration-500 ease-in-out`}>
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 mx-auto">
            <a className="font-medium text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400 transition-colors duration-300 border-b-2" href="#">Home</a>
            <a className="font-medium text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400 transition-colors duration-300" href="#">Works</a>
            <a className="font-medium text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400 transition-colors duration-300" href="#">About</a>
            <a className="font-medium text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400 transition-colors duration-300" href="#">Contact</a>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Nav;