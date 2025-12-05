"use client";

import { useEffect, useRef } from "react";

export function DottedWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let animationFrameId: number;

    // Configuration
    const spacing = 30;
    const baseRadius = 1.5;
    const waveSpeed = 0.02;
    const waveAmplitude = 10;
    const mouseRadius = 200;
    const mouseScale = 3;

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      offset: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.offset = Math.random() * 100;
        
        // Color gradient based on position
        const ratioX = x / width;
        const ratioY = y / height;
        
        // Blue top-left to Purple bottom-right
        if (ratioX + ratioY < 1) {
             this.color = `rgba(37, 99, 235, ${0.3 + Math.random() * 0.3})`; // Blue
        } else {
             this.color = `rgba(124, 58, 237, ${0.3 + Math.random() * 0.3})`; // Purple
        }
      }

      update(time: number) {
        // Wave movement
        this.y = this.baseY + Math.sin(time * waveSpeed + this.x * 0.01 + this.offset) * waveAmplitude;

        // Mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let scale = baseRadius;

        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          scale = baseRadius + force * mouseScale;
          
          // Slight repulsion/attraction
          // this.x -= dx * force * 0.1;
          // this.y -= dy * force * 0.1;
        } else {
            // Return to base X (elasticity)
            // this.x += (this.baseX - this.x) * 0.05;
        }

        this.draw(scale);
      }

      draw(radius: number) {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particles = [];

      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          particles.push(new Particle(x, y));
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      // Background gradient overlay (subtle)
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(2, 2, 5, 0.9)"); // Deep Black/Blue
      gradient.addColorStop(1, "rgba(15, 12, 41, 0.9)"); // Deep Violet
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const time = Date.now();
      particles.forEach(p => p.update(time));
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    init();
    animate();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
