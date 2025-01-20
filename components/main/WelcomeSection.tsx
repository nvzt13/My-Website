'use client';
import React from 'react';
import { motion } from 'framer-motion';

const WelcomeSection = () => {
  return (
    <section className="welcome bg-gradient-to-r from-blue-400 to-white dark:from-gray-800 dark:to-black mt-[100px] flex flex-col items-center text relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-evenly h-[768px] relative z-10 text-center"
      >
        <h1 className="text-3xl font-extrabold tracking-tight leading-tight mb-4 text-dark dark:text-light shadow-md">
          Welcome My Website I'm
        </h1>
        <h2 className="text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-600 transition-transform duration-300 shadow-md">
          Nevzat Atalay
        </h2>
        <p className="text-dark text-3xl font-medium dark:text-light mb-
        8">
         A Web Developer
        </p>
        <div className="w-full max-w-[400px] mx-auto mb-6">
          <div className="relative pt-1">
            <div className="flex mb-5 items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgba(99, 102, 241, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-primary text-light hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-md text-dark dark: dark:hover:from-blue-600 dark:hover:to-indigo-800"
              >
                Contact Me
              </motion.button>
            </div>
            <hr />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WelcomeSection;