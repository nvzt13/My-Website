'use client'
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaMoon } from "react-icons/fa";

import { useSelector, useDispatch} from 'react-redux';
import { changeTheme } from '../../lib/counterSlice';
import { RootState } from '../../lib/store';
import { useState } from 'react';
import { GrMenu } from "react-icons/gr";
import { FiSun, FiMenu, FiX } from "react-icons/fi"; 

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.counter.isDark);
  const handleThemeChange = () => {
    dispatch(changeTheme());
    };
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="font-bold ml-[10px] text-gray-300">
            Nevzat Atalay
          </span>
        </a>

        <div className={`${isOpen ? 'block' : 'hidden'} w-[500px] h-full flex flex-row items-center justify-between md:mr-20`}>
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="gap-5">
          {
            theme ? <FaMoon className='text-gray-200 text-2xl md:text-3xl lg:text-4xl sm:mx-5' onClick={handleThemeChange} />:
            <FiSun className='text-gray-200 text-2xl md:text-3xl lg:text-4xl sm:mx-5' onClick={handleThemeChange} />
          }
          
        </div>
                  <button onClick={toggleMenu} className="sm:hidden text-3xl text-gray-200">
            {isOpen ? <FiX /> : <GrMenu />} {/* Açık/Kapalı duruma göre ikon değişir */}
          </button>
      </div>
    </div>
  
  );
};

export default Navbar;
