"use client";

import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import {
  BellRing,
  EyeOff,
  Fingerprint,
  KeyRound,
  Lock,
  MessageCircle,
  PackageCheck,
  QrCode,
  ScanLine,
  ShieldCheck,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import { Button } from "./Button";

const EASE = [0.22, 1, 0.36, 1] as const;
const SCAN2CALL_URL = "https://scan2call.com.au";

const HEADLINE = ["Lost", "items", "found,", "without", "exposing", "who", "you", "are."];

const heroBranches = ["Scan2Call Platform", "QR Smart Tags", "Anonymous Channel", "Recovery Alerts"];

const recoverySteps: Array<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: "Scan the tag",
    description: "A finder scans the QR and lands on a secure recovery page.",
    icon: ScanLine,
  },
  {
    title: "Anonymous contact",
    description: "Call, text, or report, with no personal numbers ever shared.",
    icon: MessageCircle,
  },
  {
    title: "Owner alerted",
    description: "The owner gets a real-time notification through the relay.",
    icon: BellRing,
  },
  {
    title: "Safe return",
    description: "Both sides coordinate a return while staying private.",
    icon: PackageCheck,
  },
];

const channels: Array<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: "QR Tag Activation",
    description: "Assign each tag to a belonging through a simple web setup.",
    icon: QrCode,
  },
  {
    title: "Instant Scan Link",
    description: "A scan opens a dedicated recovery channel immediately.",
    icon: ScanLine,
  },
  {
    title: "Masked Contact",
    description: "Finders reach owners with identities kept fully private.",
    icon: EyeOff,
  },
  {
    title: "Notification Relay",
    description: "Owners are alerted the moment an item is scanned.",
    icon: BellRing,
  },
  {
    title: "Recovery Timeline",
    description: "Every interaction logged from first scan to safe return.",
    icon: ShieldCheck,
  },
  {
    title: "Privacy by Design",
    description: "Contact masking and controlled relay protect both sides.",
    icon: Lock,
  },
];

const trustBadges = [
  { label: "Contact masked", icon: EyeOff },
  { label: "No numbers shared", icon: Fingerprint },
  { label: "Relay only", icon: KeyRound },
];

const wordVariants: Variants = {
  hidden: { opacity: 0, y: "0.5em", filter: "blur(12px)" },
  show: (i: number) => ({
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE, delay: 0.2 + i * 0.07 },
  }),
};

export function CommunicationExperience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative">
      {/* Preserved hero background image + brand-tinted overlays */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[100svh] min-h-[100lvh] w-full z-0 md:inset-0 md:h-auto md:min-h-0">
        <Image
          src="/service-comm.png"
          alt="Anonymous Communication Gateway"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/70 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-300 to-cyan-400 opacity-20 mix-blend-screen" />
      </div>

      <div className="relative z-10">
        {/* ───────────────────────── Hero ───────────────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative flex min-h-[94svh] items-center justify-center overflow-hidden px-5 pt-[calc(env(safe-area-inset-top)+7rem)] pb-16 sm:px-8 md:min-h-screen md:pt-32 lg:px-16">
            <div className="relative z-10 mx-auto grid w-full max-w-[1380px] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
              {/* Left: headline + CTAs */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="flex justify-center lg:justify-start"
                >
                  <span className="cinematic-kicker">
                    <Lock size={12} className="text-primary" />
                    Scan2Call · Privacy-First Recovery
                  </span>
                </motion.div>

                <h1 className="mt-8 flex flex-wrap justify-center gap-x-[0.26em] gap-y-1 text-[clamp(2.1rem,5vw,4.3rem)] font-bold leading-[1.0] tracking-[-0.04em] text-white lg:justify-start">
                  {HEADLINE.map((word, i) => {
                    const accent = word === "found," || word === "are.";
                    return (
                      <motion.span
                        key={`${word}-${i}`}
                        custom={i}
                        variants={wordVariants}
                        initial="hidden"
                        animate="show"
                        className={`inline-block ${accent ? "bg-gradient-to-br from-cyan-200 via-primary to-sky-400 bg-clip-text text-transparent" : ""}`}
                      >
                        {word}
                      </motion.span>
                    );
                  })}
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 1 }}
                  className="mx-auto mt-7 max-w-md text-base leading-relaxed text-white/64 sm:text-lg lg:mx-0"
                >
                  A QR scan connects finder and owner through a private relay, with personal details hidden on both sides.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 1.1 }}
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
                  transition={{ duration: 0.7, ease: EASE, delay: 1.2 }}
                  className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
                >
                  <a href={SCAN2CALL_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="lg">
                      Visit Scan2Call
                    </Button>
                  </a>
                  <Link href="/services">
                    <Button variant="outline" size="lg">
                      Explore the Platform
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Right: scan → relay visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
                className="relative mx-auto w-full max-w-md lg:max-w-none"
              >
                <div className="cinematic-panel narrative-grid-overlay relative overflow-hidden rounded-[2rem] p-8 sm:p-10">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <div className="relative z-[2]">
                    <div className="mb-8 flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
                        secure relay
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-300/90">
                        <motion.span
                          animate={shouldReduceMotion ? undefined : { opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                          className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                        />
                        encrypted
                      </span>
                    </div>

                    {/* relay row: finder ── QR ── owner */}
                    <div className="flex items-center justify-between gap-3">
                      <RelayParty label="Finder" />

                      {/* center QR with expanding signal ripples */}
                      <div className="relative flex h-24 w-24 flex-shrink-0 items-center justify-center sm:h-28 sm:w-28">
                        {!shouldReduceMotion &&
                          [0, 1, 2].map((ring) => (
                            <motion.span
                              key={ring}
                              className="absolute inset-0 rounded-2xl border border-cyan-300/40"
                              animate={{ scale: [1, 1.9], opacity: [0.6, 0] }}
                              transition={{
                                duration: 2.4,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: ring * 0.8,
                              }}
                            />
                          ))}
                        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-300 to-cyan-400 shadow-[0_18px_38px_rgba(45,215,196,0.35)] ring-1 ring-white/20 sm:h-20 sm:w-20">
                          <QrCode className="text-[#07131d]" size={34} />
                        </div>
                      </div>

                      <RelayParty label="Owner" />
                    </div>

                    {/* animated relay line with traveling pulse */}
                    <div className="relative mt-7 h-px w-full bg-white/10">
                      {!shouldReduceMotion && (
                        <motion.span
                          className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(45,215,196,0.9)]"
                          animate={{ left: ["0%", "100%"] }}
                          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                        />
                      )}
                    </div>

                    <p className="mt-7 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
                      identities masked · message relayed
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionContainer>

        {/* ───────────────────── How it works ───────────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative py-20 md:py-28">
            <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
                className="mx-auto max-w-2xl text-center"
              >
                <span className="cinematic-kicker">How recovery works</span>
                <h2 className="mt-7 text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
                  Four steps. Zero exposure.
                </h2>
              </motion.div>

              <div className="relative mt-16">
                {/* connecting path */}
                <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent lg:block" />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {recoverySteps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-70px" }}
                        transition={{ duration: 0.55, ease: EASE, delay: i * 0.1 }}
                        className="relative text-center"
                      >
                        <div className="relative z-[2] mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-300 to-cyan-400 shadow-[0_16px_30px_rgba(45,215,196,0.3)] ring-1 ring-white/15">
                          <Icon className="text-[#07131d]" size={24} />
                        </div>
                        <div className="mt-3 font-mono text-[11px] tracking-[0.2em] text-cyan-300/70">
                          0{i + 1}
                        </div>
                        <h3 className="mt-2 text-lg font-semibold text-white/95">{step.title}</h3>
                        <p className="mx-auto mt-2 max-w-[26ch] text-sm leading-relaxed text-white/58">
                          {step.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* ───────────────────── Secure channels ───────────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative py-20 md:py-28">
            <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
                className="mx-auto max-w-2xl text-center"
              >
                <span className="cinematic-kicker">What's inside</span>
                <h2 className="mt-7 text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
                  Private by default
                </h2>
              </motion.div>

              <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {channels.map((channel, i) => {
                  const Icon = channel.icon;
                  return (
                    <motion.div
                      key={channel.title}
                      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, margin: "-70px" }}
                      transition={{ duration: 0.55, ease: EASE, delay: (i % 3) * 0.08 }}
                      className="cinematic-panel group relative overflow-hidden rounded-[1.6rem] p-7 transition-transform duration-500 hover:-translate-y-1.5"
                    >
                      <span className="narrative-glint" aria-hidden />
                      {/* encrypted-dots motif */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-[0.12] [background-image:radial-gradient(rgba(127,211,255,0.9)_1px,transparent_1.4px)] [background-size:9px_9px]"
                      />
                      <div className="relative z-[2]">
                        <div className="flex items-center justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-cyan-300/20">
                            <Icon className="text-cyan-200" size={22} />
                          </div>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-cyan-200/80">
                            <Lock size={9} />
                            masked
                          </span>
                        </div>
                        <h3 className="mt-6 text-[1.3rem] font-semibold leading-tight text-white/95">
                          {channel.title}
                        </h3>
                        <p className="mt-3 text-[0.95rem] leading-relaxed text-white/60">
                          {channel.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* ───────────────────── Trust band ───────────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative py-16 md:py-24">
            <div className="mx-auto max-w-[1000px] px-5 sm:px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
                className="cinematic-panel rounded-[2rem] p-8 text-center sm:p-12"
              >
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {trustBadges.map((badge) => {
                    const Icon = badge.icon;
                    return (
                      <span
                        key={badge.label}
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.05] px-4 py-2 text-[12px] uppercase tracking-[0.12em] text-cyan-100/85"
                      >
                        <Icon size={13} />
                        {badge.label}
                      </span>
                    );
                  })}
                </div>
                <p className="mx-auto mt-9 max-w-2xl text-[clamp(1.2rem,2.4vw,1.8rem)] font-medium leading-snug tracking-[-0.01em] text-white/90">
                  “A simple QR scan that connects finder and owner privately is exactly what recovery should feel like.”
                </p>
              </motion.div>
            </div>
          </div>
        </SectionContainer>

        {/* ───────────────────────── CTA ───────────────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative overflow-hidden py-24 md:py-36">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-300 to-cyan-400 opacity-[0.06] blur-3xl" />
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8"
            >
              <h2 className="text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.04] tracking-[-0.035em] text-white">
                Bring Scan2Call to your community
              </h2>
              <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-white/62">
                Private lost-and-found recovery, ready to deploy.
              </p>
              <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={SCAN2CALL_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg">
                    Visit Now
                  </Button>
                </a>
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

function RelayParty({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] sm:h-16 sm:w-16">
        <UserRound className="text-white/70" size={26} />
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">{label}</span>
    </div>
  );
}
