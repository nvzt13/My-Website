'use client';
import React, { useEffect, useRef } from 'react';

const BubbleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const bubbles: { x: number; y: number; radius: number; speed: number; z: number }[] = [];

    const createBubbles = (count: number) => {
      for (let i = 0; i < count; i++) {
        const z = Math.random() * 2 + 1; // Initial z-position for 3D effect
        bubbles.push({
          x: Math.random() * canvas.width!,
          y: Math.random() * canvas.height!,
          radius: Math.random() * 10 + 5,
          speed: Math.random() * 0.8 + 0.2,
          z: z,
        });
      }
    };

    const updateBubbles = () => {
      for (let bubble of bubbles) {
        bubble.y -= bubble.speed + Math.sin(bubble.y * 0.05) * 0.5; // Dalga hareketi
        bubble.x += Math.sin(bubble.y * 0.05) * 0.3; // Hafif yatay hareket

        // Update z for depth movement
        bubble.z += Math.sin(bubble.y * 0.1) * 0.05; // Small oscillation for depth effect

        // Boyutların dalga etkisiyle değişmesi ve 3D efekt için z'yi kullanma
        bubble.radius = Math.max(5, (canvas.height! - bubble.y) / 1000 + Math.sin(bubble.y * 0.05) * 2) * (bubble.z / 2);

        // Ensure the radius is never negative or too small
        bubble.radius = Math.max(bubble.radius, 1);

        if (bubble.y < -bubble.radius) {
          bubble.y = canvas.height! + bubble.radius;
          bubble.x = Math.random() * canvas.width!;
          bubble.z = Math.random() * 2 + 1; // Reset z position
        }
      }
    };

    const drawBubbles = () => {
  ctx.clearRect(0, 0, canvas.width!, canvas.height!);

  // Beyaz renk kullanarak bubble'lar için fillStyle ayarla
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'; // Beyaz renk, opaklık 0.6

  for (let bubble of bubbles) {
    // Shadow for 3D effect
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 5;

    ctx.beginPath();
    ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
    ctx.fill();
  }
};

    const animate = () => {
      updateBubbles();
      drawBubbles();
      requestAnimationFrame(animate);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createBubbles(200);
    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full sky" />;
};

export default BubbleCanvas;