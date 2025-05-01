'use client';
import { useState, useEffect, useRef } from 'react';
import { GrMenu } from "react-icons/gr";
import { FiX } from "react-icons/fi"; // Menu toggle icons

import ThemeToggle from '../sub/ThemeToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);  // Specify the type for the state
  const menuRef = useRef<HTMLDivElement | null>(null);  // Reference to the menu container, specifying the type
  const buttonRef = useRef<HTMLButtonElement | null>(null);  // Reference to the menu button, specifying the type

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {  // Specify the event type
      // Check if the click is outside both the menu and the button
      if (
        menuRef.current && !menuRef.current.contains(event.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Only add the event listener when the menu is open
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);
  const navItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Hizmetler', href: '/#hizmetler' },    // bu da belki `/services`?
    { label: 'Hakkımızda', href: '/#hakkimizda' },
    { label: 'Blog', href: '/#blog' },         // muhtemelen `/blog` olmalı?
    { label: 'Projeler', href: '/#projeler' },
    { label: 'İletişim', href: '/#iletisim' },
  ];
  return (
    <header className="bg-gray-100 dark:bg-gray-900 w-full h-auto shadow-lg top-0 py-4 sticky z-50">
      <nav className="max-w-[100rem] w-full mx-auto px-5 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between w-full">
          <Link
            href="/"
            className="text-3xl"
          >
            Web13
          </Link>
          {/* Mobile menu button */}
          <button 
            ref={buttonRef} 
            onClick={toggleMenu} 
            className="sm:hidden text-3xl text-gray-200 dark:text-white transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none"
          >
{isOpen ? (
  <FiX className="text-black dark:text-white" />
) : (
  <GrMenu className="text-black dark:text-white" />
)}
          </button>
        </div>

        <div ref={menuRef} className={`${isOpen ? 'block' : 'hidden'} w-full sm:flex sm:items-center sm:justify-end transition-all duration-500 ease-in-out text-[#000]`}>
          <div className="flex flex-col gap-6 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 mx-auto">
          {navItems.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={`
            text-xl font-medium transition-colors
            ${pathname === href
              ? 'text-indigo-600 dark:text-blue-400'
              : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-blue-400'}
          `}
        >
          {label}
        </Link>
      ))}
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
