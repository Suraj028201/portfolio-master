"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const HEADER_OFFSET = 112;

export function useScrollSpy(sectionIds: readonly string[]) {
  const [active, setActive] = useState(
    sectionIds[0] ? `#${sectionIds[0]}` : "",
  );
  const lockRef = useRef<string | null>(null);
  const rafRef = useRef<number | null>(null);

  const measure = useCallback(() => {
    if (lockRef.current) {
      setActive(lockRef.current);
      const locked = document.getElementById(lockRef.current.slice(1));
      if (locked) {
        const dist = Math.abs(
          locked.getBoundingClientRect().top - HEADER_OFFSET,
        );
        if (dist < 4) lockRef.current = null;
      }
      return;
    }

    const doc = document.documentElement;
    const atPageBottom =
      window.innerHeight + window.scrollY >= doc.scrollHeight - 8;

    if (atPageBottom && sectionIds.length > 0) {
      const last = `#${sectionIds[sectionIds.length - 1]}`;
      setActive((prev) => (prev === last ? prev : last));
      return;
    }

    const probe = window.scrollY + HEADER_OFFSET;
    let current = sectionIds[0] ? `#${sectionIds[0]}` : "";

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (probe >= top - 8) current = `#${id}`;
    }

    setActive((prev) => (prev === current ? prev : current));
  }, [sectionIds]);

  const onScroll = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      measure();
    });
  }, [measure]);

  const setActiveSection = useCallback((href: string) => {
    lockRef.current = href;
    setActive(href);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [measure, onScroll]);

  return { active, setActiveSection };
}
