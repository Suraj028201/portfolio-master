"use client";

import { m } from "framer-motion";
import { GlitchText } from "@/components/GlitchText";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { personal } from "@/data/resume";

const line = {
  hidden: { opacity: 0, x: -20 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.12 * i, duration: 0.4 },
  }),
};

export function HeroSection() {
  return (
    <section className="mb-24 flex flex-col items-center gap-10 sm:flex-row sm:items-center sm:gap-14">
      <m.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, type: "spring", stiffness: 140 }}
        className="animate-float"
      >
        <ProfilePhoto />
      </m.div>

      <div className="text-center sm:text-left">
        <m.p
          custom={0}
          variants={line}
          initial="hidden"
          animate="show"
          className="mb-3 font-mono text-xs tracking-[0.35em] text-cyan-400 uppercase"
        >
          ▶ Mission log · Online since 2022
        </m.p>

        <m.div custom={1} variants={line} initial="hidden" animate="show">
          <GlitchText
            text={personal.name}
            className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          />
        </m.div>

        <m.p
          custom={2}
          variants={line}
          initial="hidden"
          animate="show"
          className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400"
        >
          {personal.title}
        </m.p>

        <m.p
          custom={3}
          variants={line}
          initial="hidden"
          animate="show"
          className="mt-2 font-mono text-sm text-zinc-500"
        >
          📍 {personal.location}
        </m.p>

        <m.div
          custom={4}
          variants={line}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:justify-start"
        >
          <a href={`mailto:${personal.email}`} className="btn-arcade btn-shimmer">
            Start co-op
          </a>
          <a href="#projects" className="btn-arcade btn-arcade-secondary">
            View loot
          </a>
        </m.div>
      </div>
    </section>
  );
}
