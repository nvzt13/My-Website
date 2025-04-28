"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";

export default function ShootingStarsDemo() {
  return (
    <div className="h-screen w-full relative overflow-hidden flex flex-col items-center justify-center relative z-10 bg-cover">
      {/* Background with stars */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        <div className="stars absolute inset-0" />
      </div>

      {/* GİRİŞ */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Nevzat'ın Web Dünyasına Hoşgeldiniz 
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Website, e-ticaret ve kurumsal dijital ihtiyaçlarınızı bir arada çözebileceğiniz tek adres.
        </p>
      </section>
    </div>
  );
}
