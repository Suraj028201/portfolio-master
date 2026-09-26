"use client";

import { m } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <m.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <m.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mb-2 font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase"
      >
        ◈ {eyebrow}
      </m.p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 flex items-center gap-2">
        <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-cyan-500 to-transparent section-line-grow" />
        <span className="font-mono text-[10px] text-violet-400/80">[ SAVE DATA ]</span>
      </div>
    </m.div>
  );
}
