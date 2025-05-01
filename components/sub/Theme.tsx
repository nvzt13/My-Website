"use client";
import React from "react";
import type { RootState } from "@/lib/redux/store";
import { useSelector } from "react-redux";

import BubbleCanvas from "@/components/sub/SkyBackground";
import StarsCanvas from "@/components/sub/StarBackground";

export default function Theme() {
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  return <div>{isDark ? <StarsCanvas /> : <BubbleCanvas />}</div>;
}
