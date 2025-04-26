"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {Button} from "../ui/button";

const WelcomeSection = () => {
  return (
    <section className="flex flex-col items-center justify-center relative overflow-hidden bg-secondary p-2">
      <div className="text-center w-full relative z-20 ">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Welcome to My Website, I am
        </motion.h1>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold w-full"
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
            width={200} // Responsive width
            height={200} // Responsive height
            className="w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] rounded-full object-cover object-[50%_40%] z-10 mb-8 border-4 border-border"
          />
        </motion.div>
        <motion.p
          className="text-2xl sm:text-2xl lg:text-3xl font-semibold text-center mb-6 transform transition-all duration-500 ease-in-out "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          A Passionate Web Developer <span>Bringing Ideas to Life</span>
        </motion.p>
      </div>

      {/* Divider line */}
      <div className="w-full max-w-[400px] mx-auto relative z-20">
        <hr className="border-t-2 border-border mb-6" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Link href="/contact">
          <Button>Contact me</Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default WelcomeSection;
