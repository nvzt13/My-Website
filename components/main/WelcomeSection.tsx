'use client';
import React from 'react';
import { motion } from 'framer-motion';

const WelcomeSection = () => {
  return (
    <section className="welcome bg-gradient-to-r from-blue-800 via-purple-800 to-gray-900 dark:from-gray-800 dark:via-gray-700 dark:to-black mt-[100px] flex flex-col items-center text relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-evenly h-[768px] relative z-10 text-center"
      >
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-4 text-gray-50 dark:text-gray-100">
          Hey There, I am Nevzat
        </h1>
        <p className="text-4xl font-semibold mb-8 text-gray-300 dark:text-gray-400">
          Web Developer
        </p>
        
        {/* Progress Bar */}
        <div className="w-full max-w-[400px] mx-auto mb-6">
          <div className="relative pt-1">
            <div className="flex mb-5 items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgba(99, 102, 241, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-md text-white dark:bg-gradient-to-r dark:from-blue-500 dark:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-800"
                href="/contact"
              >
                Contact
              </motion.button>
            </div>
            <div className="flex mb-2">
              <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full">
                <div
                  className="bg-indigo-500 dark:bg-blue-500 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WelcomeSection;