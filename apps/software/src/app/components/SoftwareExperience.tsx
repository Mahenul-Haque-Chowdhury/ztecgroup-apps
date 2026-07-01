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
  ArrowUpRight,
  Boxes,
  Code2,
  Database,
  Lightbulb,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import { Button } from "./Button";
import { Counter } from "./Counter";
import ScrollVelocity from "./ScrollVelocity";
import { engineeringTechStackIcons, marketingTechStack, toolsStack } from "./softwareTechStacks";

const EASE = [0.22, 1, 0.36, 1] as const;

const HEADLINE = ["Build", "the", "systems", "your", "business", "actually", "runs", "on."];

const heroBranches = ["Web & Digital", "Infrastructure", "Enterprise Systems"];

const featuredCapabilities: Array<{
  code: string;
  title: string;
  description: string;
  icon: LucideIcon;
  specs: string[];
}> = [
  {
    code: "AUT",
    title: "Custom Software & Automation",
    description: "Bespoke tools and workflow automation built around how your business actually runs.",
    icon: Workflow,
    specs: ["Workflows", "Integrations", "Internal Tools"],
  },
  {
    code: "WEB",
    title: "Web & E-Commerce",
    description: "High-performance sites and scalable stores with secure payments built in.",
    icon: Code2,
    specs: ["Next.js", "Storefronts", "Payments"],
  },
  {
    code: "APP",
    title: "Mobile Apps",
    description: "Fast native and cross-platform experiences for iOS and Android.",
    icon: Smartphone,
    specs: ["iOS", "Android", "Cross-Platform"],
  },
  {
    code: "SYS",
    title: "Business Systems",
    description: "ERP, CRM, HRMS, and POS platforms that unify operations.",
    icon: Boxes,
    specs: ["ERP", "CRM", "HRMS · POS"],
  },
  {
    code: "DAT",
    title: "Data & Infrastructure",
    description: "Secure, optimized backends and scalable data warehousing.",
    icon: Database,
    specs: ["Databases", "Cloud", "Pipelines"],
  },
  {
    code: "ADV",
    title: "Tech Consultancy",
    description: "Strategic guidance on stacks, transformation, and future-ready planning.",
    icon: Lightbulb,
    specs: ["Architecture", "Strategy", "Roadmaps"],
  },
];

const alsoDelivers = [
  "Inventory & Warehouse",
  "Project Management",
  "Point of Sale",
  "SEO & Digital Marketing",
  "Bug Fixing & Maintenance",
  "Systems Integration",
];

const outcomes = [
  "Enterprise-grade reliability",
  "Architecture built to scale",
  "Cleaner operational control",
  "A real technical edge",
];

const heroSystemLines = [
  { label: "Customer platforms", status: "live" },
  { label: "Automation workflows", status: "live" },
  { label: "ERP · CRM · HRMS", status: "synced" },
  { label: "Data & infrastructure", status: "stable" },
];

const heroStats = [
  { value: "60%", label: "Less manual work" },
  { value: "24/7", label: "Reliability" },
  { value: "∞", label: "Built to scale" },
];

const wordVariants: Variants = {
  hidden: { opacity: 0, y: "0.5em", filter: "blur(12px)" },
  show: (i: number) => ({
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE, delay: 0.2 + i * 0.075 },
  }),
};

export function SoftwareExperience() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll-driven hero parallax: content lifts + fades, background drifts.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -120]);
  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, shouldReduceMotion ? 1 : 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, shouldReduceMotion ? 1 : 1.06]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 80]);
  const orbCyanY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -140]);
  const orbAmberY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 120]);

  const renderLogoOnlyTechRow = (items: typeof engineeringTechStackIcons) => (
    <>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <span
            key={`${item.label}-logo-${index}`}
            className="inline-flex items-center justify-center whitespace-nowrap px-2.5 py-1.5 sm:px-3"
          >
            <Icon size={38} style={item.color ? { color: item.color } : undefined} className={item.className} />
          </span>
        );
      })}
    </>
  );

  const renderNamedTechRow = (items: typeof marketingTechStack) => (
    <>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <span
            key={`${item.name}-${index}`}
            className="inline-flex items-center gap-4 whitespace-nowrap px-2.5 py-1.5 sm:gap-5 sm:px-3"
          >
            <Icon size={38} style={item.color ? { color: item.color } : undefined} className={item.className} />
            <span>{item.name}</span>
          </span>
        );
      })}
    </>
  );

  const tickerTexts = [
    renderLogoOnlyTechRow(engineeringTechStackIcons),
    renderNamedTechRow([...marketingTechStack, ...toolsStack]),
  ];

  return (
    <div className="relative">
      {/* Preserved background image + cinematic overlays */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[100svh] min-h-[100lvh] w-full z-0 md:inset-0 md:h-auto md:min-h-0">
        <Image
          src="/service-software.png"
          alt="ZTEC Software Lab"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/70 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 mix-blend-screen" />
      </div>

      <div className="relative z-10">
        {/* ───────────────────────── Hero ───────────────────────── */}
        <SectionContainer fullHeight={false}>
          <div
            ref={heroRef}
            className="relative flex min-h-[94svh] items-center justify-center overflow-hidden px-5 pt-[calc(env(safe-area-inset-top)+7rem)] pb-16 sm:px-8 md:min-h-screen md:pt-32 lg:px-16"
          >
            {/* Aurora orbs + animated dot-grid floor */}
            <motion.div
              aria-hidden
              style={{ y: orbCyanY, scale: heroScale }}
              className="pointer-events-none absolute -left-[10%] top-[8%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(99,211,255,0.28),transparent_68%)] blur-3xl"
            />
            <motion.div
              aria-hidden
              style={{ y: orbAmberY }}
              className="pointer-events-none absolute -right-[12%] bottom-[2%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(240,180,79,0.2),transparent_68%)] blur-3xl"
            />
            <motion.div
              aria-hidden
              style={{ y: gridY }}
              className="pointer-events-none absolute inset-x-0 bottom-[-20%] top-1/2 [background-image:linear-gradient(rgba(127,211,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(127,211,255,0.10)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000,transparent_75%)]"
            />

            {/* HUD corner brackets */}
            <div aria-hidden className="pointer-events-none absolute inset-5 z-[5] hidden md:inset-8 md:block lg:inset-12">
              {["left-0 top-0 border-l border-t", "right-0 top-0 border-r border-t", "left-0 bottom-0 border-l border-b", "right-0 bottom-0 border-r border-b"].map((pos) => (
                <span key={pos} className={`absolute h-10 w-10 rounded-[2px] border-white/20 ${pos}`} />
              ))}
            </div>

            <motion.div
              style={{ y: heroContentY, opacity: heroContentOpacity }}
              className="relative z-10 mx-auto grid w-full max-w-[1380px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
            >
              {/* Left: kinetic headline + CTAs */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="flex justify-center lg:justify-start"
                >
                  <span className="cinematic-kicker">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                    ZTEC Software Lab
                  </span>
                </motion.div>

                <h1 className="mt-8 flex flex-wrap justify-center gap-x-[0.26em] gap-y-1 text-[clamp(2.3rem,5.4vw,4.6rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white lg:justify-start">
                  {HEADLINE.map((word, i) => {
                    const accent = word === "systems" || word === "runs";
                    return (
                      <motion.span
                        key={`${word}-${i}`}
                        custom={i}
                        variants={wordVariants}
                        initial="hidden"
                        animate="show"
                        className={`inline-block ${accent ? "bg-gradient-to-br from-cyan-200 via-primary to-blue-400 bg-clip-text text-transparent" : ""}`}
                      >
                        {word}
                      </motion.span>
                    );
                  })}
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.95 }}
                  className="mx-auto mt-7 max-w-md text-base leading-relaxed text-white/62 sm:text-lg lg:mx-0"
                >
                  Software that removes operational drag and gives leadership cleaner control.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 1.05 }}
                  className="mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start"
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
                  transition={{ duration: 0.7, ease: EASE, delay: 1.15 }}
                  className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
                >
                  <Link href="/quotation">
                    <Button variant="primary" size="lg">
                      Request Quotation
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button variant="outline" size="lg">
                      View Delivery Approach
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Right: always-on live system console */}
              <motion.div
                initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
                className="relative mx-auto w-full max-w-md lg:max-w-none"
              >
                <div className="cinematic-panel narrative-grid-overlay relative overflow-hidden rounded-[1.85rem] p-6 sm:p-7">
                  <span className="narrative-glint" aria-hidden />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <div className="relative z-[2]">
                    <div className="flex items-center justify-between border-b border-white/8 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-white/45">systems · online</span>
                    </div>

                    <div className="mt-5 space-y-2.5">
                      {heroSystemLines.map((line, i) => (
                        <motion.div
                          key={line.label}
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, ease: EASE, delay: 0.8 + i * 0.14 }}
                          className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3"
                        >
                          <span className="font-mono text-[0.82rem] text-white/78">{line.label}</span>
                          <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-emerald-300/90">
                            <motion.span
                              animate={shouldReduceMotion ? undefined : { opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                            />
                            {line.status}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/8 pt-5">
                      {heroStats.map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: EASE, delay: 1.3 + i * 0.1 }}
                          className="text-center"
                        >
                          <div className="bg-gradient-to-br from-white to-cyan-200 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
                            {stat.value}
                          </div>
                          <div className="mt-1.5 text-[9px] uppercase tracking-[0.12em] text-white/45">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
              aria-hidden
              style={{ opacity: heroContentOpacity }}
              className="pointer-events-none absolute bottom-7 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1"
              >
                <span className="h-2 w-0.5 rounded-full bg-white/55" />
              </motion.div>
            </motion.div>
          </div>
        </SectionContainer>

        {/* ────────────── Tech marquee (preserved intact) ────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative py-16 md:py-24">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
                className="relative z-10 overflow-hidden py-4 sm:py-5"
              >
                <div className="mb-9 flex justify-center px-5 text-center sm:px-6 lg:px-8">
                  <div className="inline-flex items-center text-[2.25rem] font-semibold uppercase tracking-[0.14em] text-white/72 sm:text-[2.75rem]">
                    Software Stack & Tooling
                  </div>
                </div>
                <div className="space-y-3 pb-1">
                  <ScrollVelocity
                    texts={tickerTexts}
                    velocity={24}
                    numCopies={6}
                    className="px-3 text-[1.25rem] font-semibold uppercase leading-[1.3] tracking-[0.05em] text-white/90 sm:px-4 sm:text-[1.5rem]"
                    parallaxClassName="py-2"
                    scrollerClassName="items-center gap-7 sm:gap-8"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </SectionContainer>

        {/* ───────────────────── Capabilities ───────────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative py-20 md:py-32">
            <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: EASE }}
                className="mx-auto max-w-2xl text-center"
              >
                <span className="cinematic-kicker">Capabilities</span>
                <h2 className="mt-7 text-[clamp(1.9rem,4.2vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
                  What we deliver
                </h2>
              </motion.div>

              <div className="mt-16 grid gap-px overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/[0.06] md:grid-cols-2 lg:grid-cols-3">
                {featuredCapabilities.map((capability, i) => {
                  const Icon = capability.icon;
                  const moduleId = String(i + 1).padStart(2, "0");
                  return (
                    <motion.div
                      key={capability.title}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-70px" }}
                      transition={{ duration: 0.55, ease: EASE, delay: (i % 3) * 0.08 }}
                      className="group relative isolate overflow-hidden bg-[#080d18] p-7 transition-colors duration-500 hover:bg-[#0b1322] lg:p-9"
                    >
                      {/* giant index watermark */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-2 -top-6 select-none font-mono text-[3.5rem] font-bold leading-none text-white/[0.03] transition-all duration-500 group-hover:text-cyan-300/[0.07] sm:text-[7rem]"
                      >
                        {moduleId}
                      </span>

                      {/* scanning light sweep on hover */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-cyan-300/[0.07] to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100"
                      />

                      {/* animated corner bracket */}
                      <span aria-hidden className="pointer-events-none absolute left-5 top-5 h-4 w-4 rounded-tl-[3px] border-l border-t border-cyan-300/0 transition-all duration-500 group-hover:border-cyan-300/50 lg:left-6 lg:top-6" />
                      <span aria-hidden className="pointer-events-none absolute bottom-5 right-5 h-4 w-4 rounded-br-[3px] border-b border-r border-cyan-300/0 transition-all duration-500 group-hover:border-cyan-300/50 lg:bottom-6 lg:right-6" />

                      <div className="relative z-[2] flex h-full flex-col">
                        {/* spec-sheet header */}
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[11px] tracking-[0.2em] text-white/35">
                            MOD_{capability.code} · {moduleId}/06
                          </span>
                          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300/80">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                            active
                          </span>
                        </div>

                        {/* icon with aura + connector line */}
                        <div className="mt-7 flex items-center gap-4">
                          <div className="relative">
                            <span className="absolute inset-0 rounded-2xl bg-cyan-400/30 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-[0_18px_32px_rgba(15,23,42,0.4)] ring-1 ring-white/15 transition-transform duration-500 group-hover:-translate-y-0.5">
                              <Icon className="text-white" size={26} />
                            </div>
                          </div>
                          <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent transition-all duration-500 group-hover:from-cyan-300/50" />
                        </div>

                        <h3 className="mt-6 text-[1.4rem] font-semibold leading-tight text-white/95">
                          {capability.title}
                        </h3>
                        <p className="mt-3 text-[0.96rem] leading-relaxed text-white/58">
                          {capability.description}
                        </p>

                        {/* spec footer */}
                        <div className="mt-7 flex items-center justify-between gap-3 border-t border-white/8 pt-5">
                          <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white/40">
                            {capability.specs.map((spec, si) => (
                              <span key={spec} className="inline-flex items-center gap-3">
                                {si > 0 ? <span className="text-white/20">/</span> : null}
                                <span className="transition-colors duration-300 group-hover:text-white/65">{spec}</span>
                              </span>
                            ))}
                          </div>
                          <ArrowUpRight
                            size={18}
                            className="flex-shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300"
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
                className="mt-12 flex flex-wrap items-center justify-center gap-3"
              >
                <span className="text-[11px] uppercase tracking-[0.18em] text-white/40">Also</span>
                {alsoDelivers.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/68"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </SectionContainer>

        {/* ─────────────── Proof (sticky pinned statement) ─────────────── */}
        <section className="relative">
          <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-16">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <span className="cinematic-kicker">Operational Systems</span>
                <p className="mt-9 text-[clamp(1.6rem,3.4vw,2.7rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
                  From scattered tools to a single, cleaner operating system.
                </p>
                <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
                  A structured delivery approach that gives teams calm, control, and room to scale.
                </p>
              </motion.div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE }}
                className="cinematic-panel rounded-[1.75rem] p-8 sm:col-span-2"
              >
                <div className="flex items-end gap-2">
                  <Counter
                    to={60}
                    suffix="%"
                    className="bg-gradient-to-br from-white to-cyan-200 bg-clip-text text-[clamp(3rem,7vw,5rem)] font-bold leading-none tracking-tight text-transparent"
                  />
                </div>
                <p className="mt-4 text-lg text-white/72">less manual work across day-to-day operations</p>
              </motion.div>

              {outcomes.map((outcome, i) => (
                <motion.div
                  key={outcome}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
                  className="cinematic-panel flex items-center gap-4 rounded-[1.5rem] p-6"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <span className="text-base text-white/80">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────── CTA ───────────────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative overflow-hidden py-24 md:py-36">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-[0.06] blur-3xl" />
            {/* Sweeping light beam */}
            <motion.div
              aria-hidden
              initial={{ x: "-120%" }}
              whileInView={shouldReduceMotion ? undefined : { x: "120%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: EASE, delay: 0.2 }}
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
            />
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8"
            >
              <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-bold leading-[1.04] tracking-[-0.035em] text-white">
                Need a tailored quote?
              </h2>
              <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-white/62">
                Share your requirements and get a custom quotation aligned to your stack.
              </p>
              <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/quotation">
                  <Button variant="primary" size="lg">
                    Request Quotation
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
