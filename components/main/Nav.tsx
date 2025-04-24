"use client";
import { useState, useEffect, useRef } from "react";
import { GrMenu } from "react-icons/gr";
import { FiX } from "react-icons/fi"; // Menu toggle icons

import ThemeToggle from "../sub/ThemeToggle";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Specify the type for the state
  const menuRef = useRef<HTMLDivElement | null>(null); // Reference to the menu container, specifying the type
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Reference to the menu button, specifying the type

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Specify the event type
      // Check if the click is outside both the menu and the button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Only add the event listener when the menu is open
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="fixed w-full h-auto shadow-lg top-0 shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-3xl z-50 transition-all duration-300 ease-in-out py-4">
      <nav className="max-w-[100rem] w-full mx-auto px-5 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="text-3xl font-bold text-primary">
            Nevzat Atalay
          </Link>
          {/* Mobile menu button */}
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="sm:hidden text-3xl text-gray-200 dark:text-white transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none"
          >
            {isOpen ? <FiX /> : <GrMenu />}{" "}
            {/* Icon changes based on open/close state */}
          </button>
        </div>

        <div
          ref={menuRef}
          className={`${
            isOpen ? "block" : "hidden"
          } w-full sm:flex sm:items-center sm:justify-end transition-all duration-500 ease-in-out text-[#000]`}
        >
          <div className="flex flex-col gap-6 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 mx-auto text-primary font-bold">
            <Link href="/">Home</Link>
            <Link href="/works">Works</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <ThemeToggle />
            <Link href="/admin">Login</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
