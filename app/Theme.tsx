'use client';
import React from 'react'
import type { RootState } from '../../lib/store'
import { useSelector } from 'react-redux'

import SkyBackground from "@/components/main/SkyBackground";
import StarsCanvas from "@/components/main/StarBackground";

export default function Theme() {
  const isDark = useSelector((state: RootState) => state.counter.isDark)

  return (
    <div>
             {
          isDark ? <StarsCanvas /> 
                 : <SkyBackground />
        }
    </div>
  )
}