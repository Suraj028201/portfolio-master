"use client";

import { m } from "framer-motion";
import { useEffect, useState } from "react";

export function GameHUD() {
  const [xp, setXp] = useState(0);
  const targetXp = 87;

  useEffect(() => {
    const start = performance.now();
    const duration = 1400;
    let frame = 0;

    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setXp(Math.round(eased * targetXp));
      if (t < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="pointer-events-none fixed bottom-6 left-6 z-50 hidden font-mono text-[10px] tracking-wider text-cyan-400/90 sm:block"
      aria-hidden
    >
      <div className="game-panel rounded-lg px-4 py-3">
        <p className="text-[9px] text-emerald-400">PLAYER</p>
        <p className="font-display mt-1 text-xs text-white">SURAJ.K</p>
        <p className="mt-2 text-zinc-500">
          CLASS <span className="text-violet-300">FULL STACK</span>
        </p>
        <p className="mt-1">
          LVL <span className="text-cyan-300">04+</span>
        </p>
        <div className="mt-2 w-36">
          <div className="mb-1 flex justify-between text-[9px] text-zinc-500">
            <span>XP</span>
            <span>{xp}%</span>
          </div>
          <div className="stat-bar-track">
            <m.div
              className="stat-bar-fill"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: xp / 100 }}
              transition={{ duration: 0.08 }}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </m.div>
  );
}
