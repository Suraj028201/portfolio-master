"use client";

import { m } from "framer-motion";
import { GamePanel } from "@/components/GamePanel";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/resume";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 mb-24">
      <SectionHeading eyebrow="Quest log" title="Campaign" />
      <ol className="relative mt-10 space-y-6">
        {experience.map((job, i) => {
          const isActive = i === 0;
          return (
            <m.li
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <GamePanel className="p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span
                    className={`quest-badge ${isActive ? "active" : "cleared"}`}
                  >
                    {isActive ? "▶ Active mission" : "✓ Cleared"}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-600">
                    QUEST_{String(experience.length - i).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg text-zinc-100">
                      {job.role}
                    </h3>
                    <p className="text-violet-300">{job.company}</p>
                  </div>
                  <p className="font-mono text-xs text-zinc-500">
                    {job.period} · {job.location}
                  </p>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-400">
                  {job.highlights.map((point, j) => (
                    <m.li
                      key={point}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + j * 0.06 }}
                      className="flex gap-2"
                    >
                      <span className="shrink-0 font-mono text-cyan-500" aria-hidden>
                        +
                      </span>
                      <span>{point}</span>
                    </m.li>
                  ))}
                </ul>
              </GamePanel>
            </m.li>
          );
        })}
      </ol>
    </section>
  );
}
