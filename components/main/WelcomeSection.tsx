"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const WelcomeSection = () => {
  return (
    <section className="welcome mt-[100px] flex justify-evenly flex-col  m-x-auto">
          <h1 className="text-6xl font-black tracking-widest leading-loose ">
            Hey There I am Nevzat
          </h1>
          <p className="vtext-6xl font-black leading-loose">
            Web Developer
          </p>
          <button className="Welcome-box  button-primary">Wiev Cv</button>
      </section>
  )
}

export default WelcomeSection