import React from "react";
import {
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <footer className=" bottom-0 w-full h-auto shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-lg z-50 transition-all duration-300 ease-in-out py-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-row space-x-6 mb-4">
          <a href="https://twitter.com" className="flex items-center hover:text-blue-400 transition duration-300">
            <RxTwitterLogo className="text-2xl" />
            <span className="text-sm ml-2">Twitter</span>
          </a>
          <a href="https://linkedin.com" className="flex items-center hover:text-blue-600 transition duration-300">
            <RxLinkedinLogo className="text-2xl" />
            <span className="text-sm ml-2">LinkedIn</span>
          </a>
          <a href="https://github.com" className="flex items-center hover:text-gray-400 transition duration-300">
            <RxGithubLogo className="text-2xl" />
            <span className="text-sm ml-2">GitHub</span>
          </a>
        </div>
        <div className="text-sm text-center">
          &copy; WebChain Dev 2023 Inc. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;