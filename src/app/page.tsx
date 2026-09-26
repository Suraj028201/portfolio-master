import dynamic from "next/dynamic";
import { AnimatedStat } from "@/components/AnimatedStat";
import { GamePanel } from "@/components/GamePanel";
import { HeroSection } from "@/components/HeroSection";
import { LazyMount } from "@/components/LazyMount";
import { Navigation } from "@/components/Navigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SectionHeading } from "@/components/SectionHeading";
import {
  achievement,
  education,
  interests,
  personal,
  summary,
} from "@/data/resume";
import DeferredEffects from "@/components/DeferredEffects";

const SkillsSection = dynamic(
  () => import("@/components/SkillsSection").then((m) => ({ default: m.SkillsSection })),
  { loading: () => <div className="min-h-[480px]" aria-hidden /> },
);

const ExperienceSection = dynamic(
  () =>
    import("@/components/ExperienceSection").then((m) => ({
      default: m.ExperienceSection,
    })),
  { loading: () => <div className="min-h-[520px]" aria-hidden /> },
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/ProjectsSection").then((m) => ({ default: m.ProjectsSection })),
  { loading: () => <div className="min-h-[400px]" aria-hidden /> },
);

export default function Home() {
  return (
    <div className="nebula-bg relative min-h-screen overflow-x-hidden">
      <DeferredEffects />
      <ScrollProgress />
      <Navigation />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-28">
        <HeroSection />

        <section id="about" className="scroll-mt-28 mb-24">
          <SectionHeading eyebrow="Intel brief" title="About" />
          <GamePanel className="mt-8 p-6 sm:p-8">
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">{summary}</p>
          </GamePanel>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <GamePanel delay={0.05}>
              <AnimatedStat value={30} label="Drop-off reduced (loan journey)" delay={0} />
            </GamePanel>
            <GamePanel delay={0.08}>
              <AnimatedStat value={40} label="Faster loan processing" delay={0.05} />
            </GamePanel>
            <GamePanel delay={0.1}>
              <AnimatedStat value={30} label="EV fleet utilization gain" delay={0.1} />
            </GamePanel>
          </div>
        </section>

        <LazyMount minHeight={480}>
          <SkillsSection />
        </LazyMount>

        <LazyMount minHeight={520}>
          <ExperienceSection />
        </LazyMount>

        <LazyMount minHeight={400}>
          <ProjectsSection />
        </LazyMount>

        <section className="mb-24 grid gap-6 lg:grid-cols-2">
          <GamePanel className="p-8">
            <SectionHeading eyebrow="Boss fight" title="Achievement" />
            <h3 className="mt-6 font-display text-sm text-amber-300/90">
              🏆 {achievement.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              {achievement.details.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="text-emerald-400" aria-hidden>
                    ★
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </GamePanel>
          <GamePanel className="p-8" delay={0.08}>
            <SectionHeading eyebrow="Origin story" title="Education" />
            <p className="mt-6 text-lg text-zinc-200">{education.degree}</p>
            <p className="text-violet-300">{education.school}</p>
            <p className="mt-2 font-mono text-xs text-zinc-500">{education.period}</p>
            <p className="mt-8 rounded border border-white/5 bg-black/20 p-4 text-sm leading-relaxed text-zinc-500">
              Side quests: {interests}
            </p>
          </GamePanel>
        </section>

        <section id="contact" className="scroll-mt-28">
          <GamePanel className="border-fuchsia-500/20 bg-gradient-to-br from-violet-950/50 to-black/40 p-10 text-center sm:p-14">
            <SectionHeading eyebrow="Multiplayer" title="Contact" />
            <p className="mx-auto mt-6 max-w-lg text-zinc-400">
              Ready for co-op on ambitious frontend & full-stack builds — especially where AI
              meets real users.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={`mailto:${personal.email}`} className="btn-arcade btn-shimmer">
                Send signal
              </a>
              <a href={`tel:+91${personal.phone}`} className="btn-arcade btn-arcade-secondary">
                +91 {personal.phone}
              </a>
            </div>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-mono text-xs text-cyan-400/80 hover:text-cyan-300"
            >
              linkedin.com/in/suraj-kumar-yadav-50b25518b
            </a>
          </GamePanel>
        </section>
      </main>

      <footer className="relative z-10 border-t border-cyan-500/10 py-8 text-center font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
        © {new Date().getFullYear()} {personal.name} · Press start to hire
      </footer>
    </div>
  );
}
