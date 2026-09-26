"use client";

import { useEffect, useState } from "react";

type GlitchTextProps = {
  text: string;
  as?: "h1" | "h2" | "span";
  className?: string;
};

export function GlitchText({ text, as: Tag = "h1", className = "" }: GlitchTextProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const tick = () => {
      setActive(true);
      window.setTimeout(() => setActive(false), 350);
    };
    const id = window.setInterval(tick, 4500 + Math.random() * 3000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <Tag
      data-text={text}
      className={`glitch-text ${active ? "glitch-active" : ""} ${className}`}
    >
      {text}
    </Tag>
  );
}
