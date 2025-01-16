"use client"
import React from 'react'
import { motion } from 'framer-motion'

const WelcomeSection = () => {
  return (
    <section className="welcome mt-[100px] flex flex-col items-center text relative overflow-hidden">
      {/* Arka planda hafif bir mavi gökyüzü animasyonu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-300 transform scale-150 blur-2xl"
      />
      {/* Gökyüzüne bulut efektleri eklenmiş animasyon */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 0.3, x: 100 }} 
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 left-0 w-full h-full bg-[url('/clouds.png')] opacity-30 transform scale-150"
      />
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-evenly h-[768px] relative z-10 text-center"
      >
        <h1 className="text-6xl font-extrabold tracking-widest leading-tight mb-4 text-white">
          Hey There, I am Nevzat
        </h1>
        <p className="text-5xl font-semibold mb-8 text-white">
          Web Developer
        </p>
        <div className="w-25">
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(99, 102, 241, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-blue-600 transition-all duration-300 shadow-lg text-white"
          >
            Contact
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

export default WelcomeSection