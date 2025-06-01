'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const WelcomeSection = () => {
  return (
    <section id="ana-sayfa" className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-gradient-to-r from-[#eff4ff] to-[#55bded] dark:from-gray-900 dark:to-gray-800 max-w-7xl mx-auto shadow-lg mt-12 scroll-mt-20">
      {/* Sol taraf (Yazı ve butonlar) */}
      <div className="md:w-1/2 text-center md:text-left">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Web Tasarım ve <br /> Yazılım Çözümleri
        </motion.h1>

        <motion.p
          className="text-gray-700 dark:text-gray-300 text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Kişisel ve kurumsal web sitelerinden e-ticaret çözümlerine kadar profesyonel dijital hizmetler.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="/#iletisim"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            İletişime Geç
          </Link>
          <Link
            href="/#hizmetler"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-md shadow transition duration-300 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white"
          >
            Neler Yapıyorum?
          </Link>
        </div>
      </div>

      {/* Sağ taraf (Görsel) */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="https://plus.unsplash.com/premium_photo-1720287601013-69bed792f481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wzfHx8ZW58MHx8fHx8"
          alt="Web Illustration"
          width={500}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default WelcomeSection;