"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { useEffect, useState } from "react";
import { personal } from "@/data/resume";

export function ProfilePhoto() {
  const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    fetch(personal.profileImagePath, { method: "HEAD" })
      .then((res) => setHasImage(res.ok))
      .catch(() => setHasImage(false));
  }, []);

  return (
    <div className="relative mx-auto w-44 shrink-0 sm:mx-0 sm:w-52">
      <div
        className="absolute -inset-3 rounded-full border border-dashed border-cyan-500/30 ring-scan opacity-60"
        aria-hidden
      />
      <m.div
        className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet-500/80 via-cyan-400/50 to-fuchsia-500/70 opacity-90 blur-md avatar-glow"
        aria-hidden
      />
      <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-cyan-400/40 bg-[#0c0c18] shadow-[0_0_50px_rgba(0,245,255,0.25)]">
        <div className="avatar-scanline pointer-events-none absolute inset-0 z-10" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-cyan-400/10 via-transparent to-violet-600/10"
          aria-hidden
        />
        {hasImage ? (
          <Image
            src={personal.profileImagePath}
            alt={`${personal.name} profile`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 176px, 208px"
            priority
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 px-4 text-center">
            <span className="font-display text-2xl text-cyan-300 avatar-pulse" aria-hidden>
              AVATAR
            </span>
            <p className="text-xs leading-snug text-zinc-400">
              Equip portrait:{" "}
              <code className="rounded bg-black/40 px-1 py-0.5 font-mono text-[10px] text-cyan-300">
                public/profile.jpg
              </code>
            </p>
          </div>
        )}
      </div>
      <p className="mt-3 text-center font-mono text-[10px] tracking-widest text-cyan-500/70 uppercase sm:text-left">
        Player slot · Ready
      </p>
    </div>
  );
}
