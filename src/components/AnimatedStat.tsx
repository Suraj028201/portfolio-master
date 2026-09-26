"use client";

import { m, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedStatProps = {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
};

export function AnimatedStat({ value, suffix = "%", label, delay = 0 }: AnimatedStatProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 900;
    let frame = 0;

    const step = (now: number) => {
      const t = Math.min((now - start - delay * 1000) / duration, 1);
      if (t <= 0) {
        frame = requestAnimationFrame(step);
        return;
      }
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, delay]);

  return (
    <m.div ref={ref} className="p-5">
      <p className="font-display text-3xl text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-zinc-500">{label}</p>
      <div className="stat-bar-track mt-3">
        <m.div
          className="stat-bar-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: value / 100 } : { scaleX: 0 }}
          transition={{ delay: delay + 0.15, duration: 0.75, ease: "easeOut" }}
          style={{ width: "100%" }}
        />
      </div>
    </m.div>
  );
}
