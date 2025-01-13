'use client'
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import SkyBackground from "@/components/main/SkyBackground";
import Theme from "./Theme";
import StarsCanvas from "@/components/main/StarBackground";

import type { RootState } from '../lib/store'
import { useSelector } from 'react-redux'

export default function Home() {
  const isDark = useSelector((state: RootState) => state.counter.isDark)

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        {
          isDark ? <StarsCanvas /> : <SkyBackground />
        }
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
