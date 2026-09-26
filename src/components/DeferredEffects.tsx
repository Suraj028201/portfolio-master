"use client";

import { useEffect, useState } from "react";
import { CursorGlow } from "@/components/CursorGlow";
import { GameHUD } from "@/components/GameHUD";
import { Scanlines } from "@/components/Scanlines";
import { Starfield } from "@/components/Starfield";

export default function DeferredEffects() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = () => setReady(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 800 });
      return () => window.cancelIdleCallback(id);
    }
    const t = window.setTimeout(start, 200);
    return () => window.clearTimeout(t);
  }, []);

  if (!ready) {
    return <div className="css-starfield pointer-events-none fixed inset-0 z-0" aria-hidden />;
  }

  return (
    <>
      <Starfield />
      <Scanlines />
      <CursorGlow />
      <GameHUD />
    </>
  );
}
