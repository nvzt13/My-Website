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
    <header className="w-full h-auto fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur z-50  flex flex-wrap sm:justify-start py-4 ">
      <nav className="max-w-[100rem] w-full mx-auto px-2 sm:flex sm:items-center sm:justify-between">
        <div className="flex flex-row items-center justify-between">
          <a
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center"
          >
            <ThemeToggle/>
            <span className="font-bold ml-[10px] md:block ">
              Nevzat Atalay
            </span>
          </a>
          {/* Mobil menü butonu */}
          <button onClick={toggleMenu} className="sm:hidden text-3xl text-gray-200">
            {isOpen ? <FiX /> : <GrMenu />} {/* Açık/Kapalı duruma göre ikon değişir */}
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} sm:flex sm:items-center sm:justify-end`}>
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <a className="font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#">Home</a>
            <a className="font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#">Work</a>
            <a className="font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#">About</a>
                      <div className="gap-5">
            {theme ? (
              <FaMoon className="text-2xl" onClick={handleThemeChange} />
            ) : (
              <FiSun className="text-2xl" onClick={handleThemeChange} />
            )}
          </div>
          </div>
        </div>

      </nav>
    </header>
  );
}

export default Nav;