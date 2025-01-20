import React from "react";
import Link  from "next/link";
import {
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="dark:text-light bottom-0 w-full h-auto shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-lg z-50 transition-all duration-300 ease-in-out py-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-row space-x-6 mb-4">
          <Link href="https://x.com/nvzt_atly" className="flex items-center text-lg hover:text-blue-400 transition duration-300" target="_blak">
            <RxTwitterLogo className="text-2xl" />
            <span className="text-sm ml-2">Twitter</span>
          </Link>
          <Link href="https://www.linkedin.com/in/nevzat-atalay-6b5164335/" className="flex items-center text-lg hover:text-blue-600 transition duration-300" target="_blak">
            <RxLinkedinLogo className="text-2xl" />
            <span className="text-sm ml-2">LinkedIn</span>
          </Link>
          <Link href="https://github.com/nvzt13" target="_blak" className="flex items-center text-lg hover:text-blue-400 transition duration-300">
            <RxGithubLogo className="text-2xl" />
            <span className="text-sm ml-2">GitHub</span>
          </Link>
        </div>
        <div className="text-sm text-center">
          &copy; Nevzat Atalay 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;