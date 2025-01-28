"use client";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
const Arrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Scroll to Top Button */}
      {isVisible && (
        <FaArrowUp
          className="fixed bottom-32 right-10 text-3xl cursor-pointer text-dark dark:text-light hover:text-indigo-800 transition-all"
          onClick={scrollToTop}
        />
      )}
    </div>
  );
};

export default Arrow;
