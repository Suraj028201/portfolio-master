"use client";

import { m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { navLinks, personal } from "@/data/resume";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const sectionIds = navLinks.map((l) => l.href.slice(1));

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { active, setActiveSection } = useScrollSpy(sectionIds);
  const listRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const link = linkRefs.current[active];
      const list = listRef.current;
      if (!link || !list) return;
      const listRect = list.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      setIndicator({
        left: linkRect.left - listRect.left,
        width: linkRect.width,
      });
    };

    updateIndicator();
    window.addEventListener("scroll", updateIndicator, { passive: true });
    window.addEventListener("resize", updateIndicator);
    return () => {
      window.removeEventListener("scroll", updateIndicator);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [active, scrolled]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-cyan-500/20 bg-[#030308]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#"
          onClick={() => setActiveSection(sectionIds[0] ? `#${sectionIds[0]}` : "#about")}
          className="flex items-center gap-2 font-display text-sm font-bold tracking-[0.25em] text-cyan-300 uppercase"
        >
          <span className="logo-spin inline-block text-xs text-violet-400" aria-hidden>
            ✦
          </span>
          SKY.EXE
        </a>

        <ul ref={listRef} className="relative hidden items-center gap-1 md:flex">
          {indicator.width > 0 && (
            <m.span
              className="absolute -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 shadow-[0_0_10px_#00f5ff]"
              animate={{ left: indicator.left, width: indicator.width }}
              transition={{ type: "spring", stiffness: 520, damping: 38, mass: 0.4 }}
              style={{ left: indicator.left, width: indicator.width }}
            />
          )}
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  ref={(el) => {
                    linkRefs.current[link.href] = el;
                  }}
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className={`relative z-10 block px-3 py-2 font-mono text-xs tracking-wide uppercase transition-colors duration-150 ${
                    isActive ? "text-cyan-300" : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-arcade px-3 py-1.5 text-[10px]"
        >
          Link
        </a>
      </nav>
    </header>
  );
}
