"use client";

import { m } from "framer-motion";
import { GamePanel } from "@/components/GamePanel";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/resume";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28 mb-24" style={{ perspective: 1200 }}>
      <SectionHeading eyebrow="Legendary drops" title="Projects" />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project, i) => (
          <m.div
            key={project.url}
            initial={{ opacity: 0, y: 40, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{
              y: -8,
              rotateX: -4,
              rotateY: i === 1 ? 0 : i === 0 ? 3 : -3,
              transition: { duration: 0.25 },
            }}
          >
            <GamePanel className="group flex h-full flex-col p-6">
              <div className="mb-2 font-mono text-[10px] tracking-widest text-fuchsia-400/80 uppercase">
                Tier · S-Rank
              </div>
              <div className="mb-3 flex items-start justify-between gap-2">
                <h3 className="font-display text-base text-zinc-100 transition group-hover:text-cyan-300">
                  {project.name}
                </h3>
                <span className="quest-badge cleared shrink-0">{project.badge}</span>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-zinc-500">
                {project.description}
              </p>
              <p className="mt-4 font-mono text-[10px] text-zinc-600">
                {project.stack}
              </p>
              <m.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-arcade btn-arcade-secondary mt-5 w-full text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Launch →
              </m.a>
            </GamePanel>
          </m.div>
        ))}
      </div>
    </section>
  );
}
