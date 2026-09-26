"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type LazyMountProps = {
  children: ReactNode;
  minHeight?: number;
  rootMargin?: string;
  className?: string;
};

export function LazyMount({
  children,
  minHeight = 320,
  rootMargin = "180px 0px",
  className = "",
}: LazyMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!visible && typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ minHeight: visible ? undefined : minHeight }}
    >
      {visible ? (
        children
      ) : (
        <div
          className="game-panel h-full min-h-[inherit] animate-pulse rounded-xl opacity-40"
          aria-hidden
        />
      )}
    </div>
  );
}
