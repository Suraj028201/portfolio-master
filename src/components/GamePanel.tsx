"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

type GamePanelProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function GamePanel({ children, className = "", delay = 0 }: GamePanelProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -2 }}
      className={`game-panel rounded-xl motion-safe:transition-transform ${className}`}
    >
      <span className="corner-bracket tl" aria-hidden />
      <span className="corner-bracket tr" aria-hidden />
      <span className="corner-bracket bl" aria-hidden />
      <span className="corner-bracket br" aria-hidden />
      {children}
    </m.div>
  );
}
