'use client';
import React, { useEffect, useRef } from 'react';

const StarCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const stars: {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      delta: number;
      speedY: number;
      speedX: number;
    }[] = [];

    const createStars = (count: number) => {
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width!,
          y: Math.random() * canvas.height!,
          radius: Math.random() * 1.5 + 0.3,
          alpha: Math.random(),
          delta: Math.random() * 0.02 + 0.005,
          speedY: Math.random() * 0.2 + 0.05, // yavaş y ekseni hareketi
          speedX: Math.random() * 0.2 - 0.1, // hafif x hareketi (sağa/sola)
        });
      }
    };

    const updateStars = () => {
      for (let star of stars) {
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) {
          star.delta = -star.delta;
        }

        // yıldızları hareket ettir
        star.y += star.speedY;
        star.x += star.speedX;

        // ekran dışına çıkarsa başa al
        if (star.y > canvas.height!) {
          star.y = 0;
          star.x = Math.random() * canvas.width!;
        }
        if (star.x < 0 || star.x > canvas.width!) {
          star.x = Math.random() * canvas.width!;
        }
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width!, canvas.height!);

      for (let star of stars) {
        ctx.beginPath();
        ctx.globalAlpha = star.alpha;
        ctx.fillStyle = 'white';
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    const animate = () => {
      updateStars();
      drawStars();
      requestAnimationFrame(animate);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createStars(300);
    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full bg-black sky"
    />
  );
};

export default StarCanvas;