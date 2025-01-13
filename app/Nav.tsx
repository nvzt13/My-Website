'use client'
import { useState } from 'react';
import { GrMenu } from "react-icons/gr";
import { FiSun, FiMenu, FiX } from "react-icons/fi"; // Menü açma kapama iconları
import { FaMoon } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../lib/counterSlice';
import { RootState } from '../../lib/store';

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
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-[#0300145e] text-sm py-3 mt-20">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex flex-row items-center justify-between m-auto px-[10px]">
          <a
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center"
          >
            <span className="font-bold ml-[10px] md:block text-gray-300">
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
            <a className="font-medium text-blue-500 focus:outline-none" href="#" aria-current="page">Landing</a>
            <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#">Account</a>
            <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#">Work</a>
            <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#">Blog</a>
                      <div className="gap-5">
            {theme ? (
              <FaMoon className="text-gray-200 text-2xl md:text-3xl lg:text-4xl sm:mx-5" onClick={handleThemeChange} />
            ) : (
              <FiSun className="text-gray-200 text-2xl md:text-3xl lg:text-4xl sm:mx-5" onClick={handleThemeChange} />
            )}
          </div>
          </div>
        </div>

      </nav>
    </header>
  );
}

export default Nav;