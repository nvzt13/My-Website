import React from "react";
import Link from "next/link";
import { RxGithubLogo, RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="dark:text-light relative bottom-0 w-full h-auto shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-lg z-50 transition-all duration-300 ease-in-out py-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-row space-x-8 mb-6">
          <Link
            href="https://x.com/nvzt_atly"
            className="flex items-center text-lg hover:text-blue-400 transition-all duration-300 group"
            target="_blank"
          >
            <RxTwitterLogo className="text-3xl group-hover:scale-110 transition-transform duration-300" />
            <span className="text-base ml-3 group-hover:underline">Twitter</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/nevzat-atalay-6b5164335/"
            className="flex items-center text-lg hover:text-blue-600 transition-all duration-300 group"
            target="_blank"
          >
            <RxLinkedinLogo className="text-3xl group-hover:scale-110 transition-transform duration-300" />
            <span className="text-base ml-3 group-hover:underline">LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/nvzt13"
            className="flex items-center text-lg hover:text-blue-400 transition-all duration-300 group"
            target="_blank"
          >
            <RxGithubLogo className="text-3xl group-hover:scale-110 transition-transform duration-300" />
            <span className="text-base ml-3 group-hover:underline">GitHub</span>
          </Link>
        </div>
        <div className="text-sm text-center text-dark dark:text-light">
          &copy; Nevzat Atalay {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;