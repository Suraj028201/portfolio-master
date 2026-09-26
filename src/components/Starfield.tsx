"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
};

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationId = 0;
    let stars: Star[] = [];
    let lastFrame = 0;
    const starCount = 140;
    const targetFps = 30;
    const frameInterval = 1000 / targetFps;
    let visible = !document.hidden;

    const onVisibility = () => {
      visible = !document.hidden;
      if (visible) lastFrame = 0;
    };

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initStars = () => {
      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: Math.random() * 2.5 + 0.4,
        size: Math.random() * 1.6 + 0.25,
        opacity: Math.random() * 0.65 + 0.2,
      }));
    };

    const draw = (now: number) => {
      animationId = requestAnimationFrame(draw);
      if (!visible) return;
      if (now - lastFrame < frameInterval) return;
      lastFrame = now;

      const mx = (mouseRef.current.x - 0.5) * 24;
      const my = (mouseRef.current.y - 0.5) * 24;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const star of stars) {
        const speed = star.z * 0.28;
        star.x += mx * 0.0015 * star.z;
        star.y += speed + my * 0.0008 * star.z;

        if (star.y > window.innerHeight + 8) {
          star.y = -8;
          star.x = Math.random() * window.innerWidth;
        }

        const twinkle = 0.5 + 0.5 * Math.sin(now * 0.002 + star.x * 0.02);
        ctx.fillStyle = `rgba(200, 230, 255, ${star.opacity * twinkle})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    resize();
    initStars();
    animationId = requestAnimationFrame(draw);

    window.addEventListener("resize", () => {
      resize();
      initStars();
    });
    window.addEventListener("mousemove", onMouse, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    />
  );
}
