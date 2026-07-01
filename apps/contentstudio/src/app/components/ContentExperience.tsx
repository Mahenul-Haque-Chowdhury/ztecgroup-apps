"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import {
  Clapperboard,
  Film,
  Play,
  Scissors,
  Sparkles,
  Subtitles,
  Volume2,
  Wand2,
  type LucideIcon,
} from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import { Button } from "./Button";
import { Counter } from "./Counter";

const EASE = [0.22, 1, 0.36, 1] as const;

const HEADLINE = ["Raw", "footage", "in.", "Cinematic", "stories", "out."];

const heroBranches = ["Short-Form Social", "Long-Form & Docs", "Post & Finishing", "Platform Delivery"];

const clips: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  duration: string;
  ratio: string;
  platforms: string[];
}> = [
  {
    title: "Short-Form & Reels",
    description: "Hook-first vertical edits tuned to each platform's native pacing.",
    icon: Play,
    duration: "0:30",
    ratio: "9:16",
    platforms: ["TikTok", "Reels", "Shorts"],
  },
  {
    title: "YouTube Editing",
    description: "Talking-head cuts to documentary episodes and channel series.",
    icon: Film,
    duration: "12:00",
    ratio: "16:9",
    platforms: ["YouTube"],
  },
  {
    title: "Documentary & Story",
    description: "Narrative structure, pacing, and emotional arc for long-form.",
    icon: Clapperboard,
    duration: "24:00",
    ratio: "16:9",
    platforms: ["Brand", "Docs"],
  },
  {
    title: "Ad & Promo Creative",
    description: "High-performance edits for launches, offers, and paid campaigns.",
    icon: Sparkles,
    duration: "0:15",
    ratio: "1:1",
    platforms: ["Ads", "Social"],
  },
  {
    title: "Motion & Captions",
    description: "Branded typography, lower thirds, subtitles, and graphic overlays.",
    icon: Subtitles,
    duration: "Any",
    ratio: "Any",
    platforms: ["Graphics"],
  },
  {
    title: "Color & Audio Finish",
    description: "Cinematic grading, noise reduction, and broadcast-safe mastering.",
    icon: Volume2,
    duration: "Any",
    ratio: "Master",
    platforms: ["Grade", "Mix"],
  },
];

const outcomes = [
  { label: "Higher watch-time & retention", icon: Play },
  { label: "Faster publishing cycles", icon: Scissors },
  { label: "Consistent premium quality", icon: Wand2 },
  { label: "More from existing footage", icon: Film },
];

const wordVariants: Variants = {
  hidden: { opacity: 0, y: "0.5em", filter: "blur(12px)" },
  show: (i: number) => ({
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE, delay: 0.2 + i * 0.08 },
  }),
};

export function ContentExperience() {
  const shouldReduceMotion = useReducedMotion();
  const reelRef = useRef<HTMLDivElement>(null);

  // Scroll-scrubbed playhead across the showreel timeline.
  const { scrollYProgress } = useScroll({
    target: reelRef,
    offset: ["start end", "end start"],
  });
  const playheadX = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["50%", "50%"] : ["2%", "98%"]);
  const filmstripX = useTransform(scrollYProgress, [0, 1], [shouldReduceMotion ? 0 : -80, shouldReduceMotion ? 0 : 80]);

  return (
    <div className="relative">
      {/* Preserved hero background image + brand-tinted overlays */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[100svh] min-h-[100lvh] w-full z-0 md:inset-0 md:h-auto md:min-h-0">
        <Image
          src="/service-video.png"
          alt="Video & Motion Content Studio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/72 to-black/88" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 opacity-[0.12] mix-blend-screen" />
        {/* film grain */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* ───────────────────────── Hero (letterboxed) ───────────────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative flex min-h-[94svh] items-center justify-center overflow-hidden px-5 pt-[calc(env(safe-area-inset-top)+7rem)] pb-16 sm:px-8 md:min-h-screen md:pt-32 lg:px-16">
            {/* letterbox bars */}
            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[8vh] bg-black/55" />
            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[8vh] bg-black/55" />

            <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="flex items-center justify-center gap-4"
              >
                <span className="cinematic-kicker">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/80" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
                  </span>
                  REC · Content Studio
                </span>
                <span className="hidden font-mono text-[12px] tracking-[0.2em] text-amber-200/70 sm:inline">
                  00:00:24:12
                </span>
              </motion.div>

              <h1 className="mt-9 flex flex-wrap justify-center gap-x-[0.26em] gap-y-1 text-[clamp(2.2rem,5.6vw,4.8rem)] font-bold leading-[1.0] tracking-[-0.04em] text-white">
                {HEADLINE.map((word, i) => {
                  const accent = word === "Cinematic" || word === "out.";
                  return (
                    <motion.span
                      key={`${word}-${i}`}
                      custom={i}
                      variants={wordVariants}
                      initial="hidden"
                      animate="show"
                      className={`inline-block ${accent ? "bg-gradient-to-br from-amber-200 via-primary to-orange-400 bg-clip-text text-transparent" : ""}`}
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.85 }}
                className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/64 sm:text-lg"
              >
                Editorial post-production with story structure, motion polish, and delivery discipline for every platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: EASE, delay: 1 }}
                className="mt-10 flex justify-center"
              >
                <div className="group flex h-20 w-20 items-center justify-center rounded-full border border-amber-200/30 bg-amber-200/[0.06] backdrop-blur-sm transition-colors hover:bg-amber-200/[0.12]">
                  <Play className="ml-1 text-amber-100" size={30} fill="currentColor" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 1.1 }}
                className="mt-10 flex flex-wrap justify-center gap-2.5"
              >
                {heroBranches.map((branch) => (
                  <span
                    key={branch}
                    className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/70 backdrop-blur-sm"
                  >
                    {branch}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 1.2 }}
                className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                <Link href="/quotation">
                  <Button variant="primary" size="lg">
                    Get Editing Quote
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg">
                    Watch Our Work
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </SectionContainer>

        {/* ───────────────── Showreel timeline (scrubbed) ───────────────── */}
        <SectionContainer fullHeight={false}>
          <div ref={reelRef} className="relative py-20 md:py-28">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <span className="cinematic-kicker">The timeline</span>
                  <h2 className="mt-5 text-[clamp(1.6rem,3.4vw,2.6rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
                    Every frame, finished.
                  </h2>
                </div>
                <span className="hidden font-mono text-[12px] tracking-[0.18em] text-amber-200/60 sm:block">
                  TL · 01
                </span>
              </div>

              {/* filmstrip */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-4">
                <motion.div style={{ x: filmstripX }} className="flex gap-3">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <div
                      key={i}
                      className="relative aspect-video w-[12%] min-w-[120px] flex-shrink-0 overflow-hidden rounded-md border border-white/8 bg-gradient-to-br from-white/[0.07] to-white/[0.02]"
                    >
                      <div className="absolute inset-x-2 top-1 flex justify-between font-mono text-[8px] text-white/30">
                        <span>{String(i + 1).padStart(2, "0")}</span>
                        <span>·{i % 9}</span>
                      </div>
                      <div
                        className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t ${
                          i % 3 === 0 ? "from-amber-400/30" : i % 3 === 1 ? "from-orange-500/25" : "from-rose-400/20"
                        } to-transparent`}
                      />
                    </div>
                  ))}
                </motion.div>

                {/* sprocket holes */}
                <div className="mt-3 flex gap-3 px-1">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <span key={i} className="h-1.5 w-3 flex-shrink-0 rounded-[1px] bg-white/10" />
                  ))}
                </div>
              </div>

              {/* scrubber track + playhead */}
              <div className="relative mt-6">
                <div className="h-1 w-full rounded-full bg-white/10">
                  <motion.div
                    style={{ width: playheadX }}
                    className="h-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                  />
                </div>
                <motion.div
                  style={{ left: playheadX }}
                  className="absolute top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="h-4 w-4 rounded-full bg-amber-300 shadow-[0_0_16px_rgba(246,186,85,0.9)] ring-2 ring-black/40" />
                </motion.div>
                <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-white/40">
                  <span>00:00:00</span>
                  <span className="hidden sm:inline">EDIT · GRADE · MIX · MASTER</span>
                  <span>00:24:00</span>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* ───────────────── Services as clips ───────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative py-20 md:py-28">
            <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
                className="mx-auto max-w-2xl text-center"
              >
                <span className="cinematic-kicker">The reel</span>
                <h2 className="mt-7 text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
                  What we cut
                </h2>
              </motion.div>

              <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {clips.map((clip, i) => {
                  const Icon = clip.icon;
                  return (
                    <motion.div
                      key={clip.title}
                      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, margin: "-70px" }}
                      transition={{ duration: 0.55, ease: EASE, delay: (i % 3) * 0.08 }}
                      className="group relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-[linear-gradient(155deg,rgba(20,14,10,0.92),rgba(12,9,7,0.86))] transition-transform duration-500 hover:-translate-y-1.5"
                    >
                      {/* clip preview strip */}
                      <div className="relative flex aspect-[16/7] items-center justify-center overflow-hidden border-b border-white/8 bg-gradient-to-br from-amber-500/15 via-orange-500/8 to-transparent">
                        <div className="absolute left-3 top-3 font-mono text-[10px] tracking-[0.14em] text-white/45">
                          {clip.ratio}
                        </div>
                        <div className="absolute right-3 top-3 rounded bg-black/40 px-2 py-0.5 font-mono text-[10px] text-amber-100/90">
                          {clip.duration}
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-200/30 bg-black/30 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-300/20">
                          <Play className="ml-0.5 text-amber-100" size={18} fill="currentColor" />
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3">
                          <Icon className="text-amber-200" size={20} />
                          <h3 className="text-[1.2rem] font-semibold leading-tight text-white/95">{clip.title}</h3>
                        </div>
                        <p className="mt-3 text-[0.92rem] leading-relaxed text-white/58">{clip.description}</p>
                        <div className="mt-5 flex flex-wrap gap-2 border-t border-white/8 pt-4">
                          {clip.platforms.map((pf) => (
                            <span
                              key={pf}
                              className="rounded border border-amber-200/20 bg-amber-200/[0.05] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-amber-100/80"
                            >
                              {pf}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* ───────────────── Turnaround / outcomes ───────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative py-20 md:py-28">
            <div className="mx-auto max-w-[1120px] px-5 sm:px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
                className="grid items-center gap-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(155deg,rgba(20,14,10,0.9),rgba(12,9,7,0.84))] p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr]"
              >
                <div className="text-center lg:text-left">
                  <div className="flex items-end justify-center gap-1 lg:justify-start">
                    <Counter
                      to={24}
                      className="bg-gradient-to-br from-amber-200 to-orange-400 bg-clip-text text-[clamp(3.5rem,8vw,6rem)] font-bold leading-none text-transparent"
                    />
                    <span className="mb-2 text-2xl font-semibold text-amber-200/70">to 72h</span>
                  </div>
                  <p className="mt-3 text-lg text-white/70">typical turnaround for standard edits</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {outcomes.map((outcome, i) => {
                    const Icon = outcome.icon;
                    return (
                      <motion.div
                        key={outcome.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
                        className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-4"
                      >
                        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-amber-400/15">
                          <Icon className="text-amber-200" size={18} />
                        </span>
                        <span className="text-sm text-white/78">{outcome.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </SectionContainer>

        {/* ───────────────────────── CTA ───────────────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative overflow-hidden py-24 md:py-36">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 opacity-[0.05] blur-3xl" />
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8"
            >
              <h2 className="text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.04] tracking-[-0.035em] text-white">
                Send your footage
              </h2>
              <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-white/62">
                Even a chaotic folder of clips. We'll return production-ready edits for every channel.
              </p>
              <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/quotation">
                  <Button variant="primary" size="lg">
                    Get Editing Quote
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg">
                    View All Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
}
