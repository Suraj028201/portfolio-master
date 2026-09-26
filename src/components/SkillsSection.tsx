"use client";

import { m } from "framer-motion";
import { GamePanel } from "@/components/GamePanel";
import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/data/resume";

const powerLevels = [96, 78, 82, 88, 74, 70];

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 mb-24">
      <SectionHeading eyebrow="Skill tree" title="Loadout" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <GamePanel key={group.label} delay={i * 0.06} className="p-6">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-display text-sm tracking-wide text-cyan-300">
                {group.label}
              </h3>
              <span className="font-mono text-xs text-violet-400">
                PWR {powerLevels[i] ?? 75}
              </span>
            </div>
            <div className="stat-bar-track mb-4">
              <m.div
                className="stat-bar-fill"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: (powerLevels[i] ?? 75) / 100 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
                style={{ width: "100%" }}
              />
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill, j) => (
                <m.li
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + j * 0.02 }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 12px rgba(0,245,255,0.4)",
                  }}
                  className="cursor-default rounded border border-cyan-500/20 bg-black/30 px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                >
                  {skill}
                </m.li>
              ))}
            </ul>
          </GamePanel>
        ))}
      </div>
    </section>
  );
}
