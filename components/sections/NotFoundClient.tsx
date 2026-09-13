"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Link from "next/link";

export default function NotFoundClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Smooth mouse coordinates for parallax & interactive warping
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const x80 = useTransform(springX, (x) => x * 80);
  const y80 = useTransform(springY, (y) => y * 80);
  const xNeg45 = useTransform(springX, (x) => x * -45);
  const yNeg45 = useTransform(springY, (y) => y * -45);
  const xNeg25 = useTransform(springX, (x) => x * -25);
  const yNeg25 = useTransform(springY, (y) => y * -25);
  const xNeg65 = useTransform(springX, (x) => x * -65);
  const yNeg65 = useTransform(springY, (y) => y * -65);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      // Normalize values between -0.5 and 0.5
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("pointermove", handleMouseMove);
    return () => window.removeEventListener("pointermove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Interactive Particle Void Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      density: number;
      color: string;
      angle: number;
      speed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 1;
        this.density = Math.random() * 30 + 10;
        this.color = Math.random() > 0.1 ? "rgba(140, 140, 140, 0.15)" : "rgba(51, 102, 255, 0.4)";
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.5 + 0.1;
      }

      update(mx: number, my: number) {
        // Drift background particles gently
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // Wrap around screen boundaries
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Repel from current pointer position
        const dx = mx - this.x;
        const dy = my - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          // Soft interactive pushback
          this.x -= forceDirectionX * force * 3;
          this.y -= forceDirectionY * force * 3;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    const particles: Particle[] = Array.from({ length: 90 }, () => new Particle());
    let lastMouseX = -9999;
    let lastMouseY = -9999;

    const handlePointer = (e: PointerEvent) => {
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };
    window.addEventListener("pointermove", handlePointer);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Soft vignette backdrop inside canvas
      const grad = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, Math.max(width, height));
      grad.addColorStop(0, "rgba(249, 248, 246, 0)");
      grad.addColorStop(1, "rgba(249, 248, 246, 0.6)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((p) => {
        p.update(lastMouseX, lastMouseY);
        p.draw(ctx);
      });

      // Draw faint connects between close particles to form visual constellations/mesh
      ctx.strokeStyle = "rgba(51, 102, 255, 0.05)";
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-brand-secondary px-6"
    >
      {/* Interactive Fluid Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Behind-typography dynamic glowing aura */}
      <motion.div
        style={{
          x: x80,
          y: y80,
        }}
        className="absolute w-[45vw] h-[45vw] max-w-125 max-h-125 rounded-full bg-radial from-brand-tertiary/10 to-transparent pointer-events-none blur-3xl z-0"
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Animated 404 Large Title */}
        <div className="relative select-none pointer-events-none">
          <motion.h1
            style={{
              x: xNeg45,
              y: yNeg45,
            }}
            className="font-heading font-black text-[22vw] sm:text-[18vw] lg:text-[14rem] text-brand-primary leading-none tracking-tighter opacity-[0.9] select-none"
          >
            404
          </motion.h1>

          {/* Absolute layers mimicking a glitching/drifting chromatic aberration effect */}
          <motion.h1
            style={{
              x: xNeg25,
              y: yNeg25,
            }}
            className="absolute inset-0 font-heading font-black text-[22vw] sm:text-[18vw] lg:text-[14rem] text-brand-tertiary/20 leading-none tracking-tighter mix-blend-multiply select-none"
          >
            404
          </motion.h1>

          <motion.h1
            style={{
              x: xNeg65,
              y: yNeg65,
            }}
            className="absolute inset-0 font-heading font-black text-[22vw] sm:text-[18vw] lg:text-[14rem] text-brand-neutral/20 leading-none tracking-tighter mix-blend-screen select-none"
          >
            404
          </motion.h1>
        </div>

        {/* Cinematic Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-3 mt-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-tertiary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-tertiary"></span>
          </span>
          <p className="font-label text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-neutral uppercase">
            Lost in the digital void
          </p>
        </motion.div>

        {/* Narrative & Description */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 font-serif italic text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-primary leading-tight"
        >
          This coordinate does not exist.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-brand-neutral max-w-md leading-relaxed"
        >
          The page you requested has drifted out of bounds. Let&apos;s guide you back to our universe.
        </motion.p>

        {/* Interactive Magnetic CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="/">
            <button
              data-magnetic
              className="px-10 py-5 bg-brand-primary text-brand-secondary font-label text-[10px] sm:text-xs font-bold tracking-[0.2em] border border-brand-primary hover:bg-transparent hover:text-brand-primary transition-all duration-300 pointer-events-auto cursor-pointer"
            >
              RETURN TO BASE
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            data-magnetic
            className="px-10 py-5 bg-transparent text-brand-primary font-label text-[10px] sm:text-xs font-bold tracking-[0.2em] border border-brand-neutral/30 hover:border-brand-primary transition-all duration-300 pointer-events-auto cursor-pointer"
          >
            GO BACK
          </button>
        </motion.div>
      </div>
    </div>
  );
}
