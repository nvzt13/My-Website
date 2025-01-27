'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const WelcomeSection = () => {
  return (
    <section className="h-[760px] my-8 flex flex-col items-center justify-center bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 opacity-90 relative overflow-hidden">
      <div className="text-center text-dark w-full relative z-20">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug mb-6 dark:text-gray-100 w-full drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Welcome to My Website, I am
        </motion.h1>
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl dark:text-gray-100 font-sans font-extrabold w-full text-dark animate-pulse"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Nevzat Atalay
        </motion.h2>
      </div>

      {/* Subheading and Button */}
      <div className="w-full flex flex-col items-center justify-center mt-5 max-w-[400px] mx-auto mt-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image 
            src="/me.jpg"
            alt="me"
            width={200}  // Responsive width
            height={200} // Responsive height
            className="w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] rounded-full object-cover object-[50%_40%] z-10 mb-8 border-4 border-indigo-700 dark:border-white shadow-lg"
          />
        </motion.div>
        <motion.p
          className="text-2xl sm:text-2xl lg:text-3xl dark:text-gray-300 font-semibold text-center mb-6 transform transition-all duration-500 ease-in-out hover:text-indigo-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          A Passionate Web Developer <span className="text-indigo-500">Bringing Ideas to Life</span>
        </motion.p>
      </div>

      {/* Divider line */}
      <div className="w-full max-w-[400px] mx-auto relative z-20">
        <hr className="border-t-2 border-dark dark:border-light mb-6" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Link 
          href="/contact" 
          className="absolute left-0 bottom-0 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 bg-gradient-to-r from-indigo-600 to-sky-500 dark:from-gray-800 dark:to-gray-900 text-white rounded-full opacity-90 z-50 flex items-center justify-center text-lg font-semibold shadow-xl transform transition-all duration-500 hover:scale-110 hover:opacity-100 animate-bounce border-2 border-indigo-600 dark:border-indigo-400"
        >
          Contact me
        </Link>
      </motion.div>
    </section>
  );
};

export default WelcomeSection;