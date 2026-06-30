"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Shield, Video, Code, TrendingUp, type LucideIcon } from "lucide-react";
import { siteFaqs } from "@ztecgroup/content";
import { SectionContainer } from "../SectionContainer";
import { Button } from "../Button";
import { Faq } from "../Faq";
import { Reveal } from "../motion/Reveal";
import { Counter } from "../motion/Counter";
import { EcosystemDiagram, type EcosystemNode } from "../motion/EcosystemDiagram";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Division {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  logoSrc: string;
  href: string;
  accent: string;
  tags: string[];
}

const divisions: Division[] = [
  {
    number: "01",
    title: "Anonymous Communication Gateway",
    description: "Secure, encrypted communication infrastructure for privacy-first organizations and individuals.",
    icon: Shield,
    logoSrc: "/communication.svg",
    href: "https://communication.ztecgroup.au",
    accent: "from-blue-500 to-cyan-500",
    tags: ["Secure Messaging", "Anonymous Identity", "Encrypted Exchange"],
  },
  {
    number: "02",
    title: "Video & Motion Content Studio",
    description: "Premium video production, motion graphics, and cinematic storytelling for brands that demand excellence.",
    icon: Video,
    logoSrc: "/contentstudio.svg",
    href: "https://contentstudio.ztecgroup.au",
    accent: "from-amber-400 to-orange-500",
    tags: ["Cinematic Production", "Motion Graphics", "Story Systems"],
  },
  {
    number: "03",
    title: "Software & Business Systems",
    description: "Enterprise-grade software solutions and custom business automation platforms.",
    icon: Code,
    logoSrc: "/software.svg",
    href: "https://software.ztecgroup.au",
    accent: "from-cyan-500 to-teal-500",
    tags: ["Applications", "Integrations", "Automation"],
  },
  {
    number: "04",
    title: "STRA Management Consultation",
    description: "Strategic STRA (Short term rental accommodation) management consultation and optimization frameworks.",
    icon: TrendingUp,
    logoSrc: "/hospitality.svg",
    href: "https://hospitality.ztecgroup.au",
    accent: "from-emerald-400 to-lime-500",
    tags: ["Dynamic Pricing", "Forecasting", "Portfolio Ops"],
  },
];

const ecosystemNodes: EcosystemNode[] = divisions.map((d) => ({
  label: d.title.split(" ").slice(0, 2).join(" "),
  href: d.href,
  logoSrc: d.logoSrc,
  icon: d.icon,
  accent: d.accent,
}));

const credibilityStats: Array<{ to: number; prefix?: string; suffix?: string; decimals?: number; label: string }> = [
  { to: 80, suffix: "+", label: "Projects Delivered" },
  { to: 99.5, suffix: "%", decimals: 1, label: "Platform Reliability" },
  { to: 20, suffix: "+", label: "Active Clients" },
  { to: 4, label: "Specialist Divisions" },
];

function DivisionCard({ division, index }: { division: Division; index: number }) {
  const Icon = division.icon;
  return (
    <motion.a
      href={division.href}
      target="_blank"
      rel="noopener"
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6, ease: EASE, delay: (index % 2) * 0.1 }}
      whileHover={{ y: -6 }}
      className="premium-card group block p-7 sm:p-8"
    >
      <span className="narrative-glint" aria-hidden />
      <div className="relative z-[2]">
        <div className="flex items-start justify-between gap-4">
          <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${division.accent} shadow-[0_18px_32px_rgba(4,8,20,0.4)] ring-1 ring-white/12`}>
            <Icon className="text-white" size={24} />
          </span>
          <span className="font-mono text-[11px] tracking-[0.2em] text-white/35">{division.number}/04</span>
        </div>
        <h3 className="mt-7 text-[1.4rem] font-semibold leading-tight text-white">{division.title}</h3>
        <p className="mt-3 text-[0.96rem] leading-relaxed text-white/60">{division.description}</p>
        <div className="mt-6 flex flex-wrap gap-2 border-t border-white/8 pt-5">
          {division.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-white/55">
              {tag}
            </span>
          ))}
          <span className="ml-auto inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary/80 transition-colors group-hover:text-primary">
            Visit
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export function HomeSections() {
  const faqItems = siteFaqs.corporate;
  const ctaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ctaRef, offset: ["start end", "end start"] });
  const sweepX = useTransform(scrollYProgress, [0.3, 0.8], ["-40%", "140%"]);

  return (
    <>
      {/* ───────────── Services / Ecosystem ───────────── */}
      <SectionContainer fullHeight={false} className="z-30">
        <div className="relative py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(127,211,255,0.08),transparent_55%)]" />
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="eyebrow justify-center">Core Capabilities</span>
              <h2 className="display-xl mx-auto mt-5 text-white">
                Comprehensive <span className="text-gradient">Solutions</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                Coordinated delivery across communication, content, software, and hospitality.
              </p>
            </Reveal>

            <Reveal className="mt-14" delay={0.1}>
              <EcosystemDiagram nodes={ecosystemNodes} />
            </Reveal>

            <div className="mt-16 grid gap-5 md:grid-cols-2">
              {divisions.map((division, i) => (
                <DivisionCard key={division.number} division={division} index={i} />
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ───────────── FAQ ───────────── */}
      <SectionContainer fullHeight={false}>
        <div className="relative py-16 md:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-10 h-72 bg-[radial-gradient(circle_at_center,rgba(127,211,255,0.12),transparent_68%)]" />
          <div className="mx-auto max-w-[1120px] px-5 sm:px-8 lg:px-16">
            <Reveal className="mb-9 text-center md:mb-12">
              <span className="eyebrow justify-center">Decision support</span>
              <h2 className="display-xl mt-5 text-white">Frequently asked questions</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60">
                Clear answers for teams evaluating a multi-division delivery partner.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Faq items={faqItems} />
            </Reveal>
          </div>
        </div>
      </SectionContainer>

      {/* ───────────── Credibility / Stats ───────────── */}
      <SectionContainer fullHeight={false}>
        <div className="relative border-y border-white/5 py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(127,211,255,0.07),transparent_34%,rgba(240,180,79,0.07)_66%,transparent)]" />
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
            <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
              <div className="narrative-surface mb-5 inline-flex items-center rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/70">
                Operating proof
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Built for Practical Delivery
              </h2>
              <p className="text-sm leading-relaxed text-white/60 sm:text-base">
                A growing mix of operators, teams, and service-led businesses rely on our delivery model
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
              {credibilityStats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.08} className="premium-card flex flex-col items-center justify-center p-6 text-center md:p-8">
                  <Counter
                    to={stat.to}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    className="bg-gradient-to-br from-white to-primary bg-clip-text text-[clamp(2.2rem,5vw,3.4rem)] font-bold leading-none text-transparent"
                  />
                  <span className="mt-3 text-[11px] uppercase tracking-[0.16em] text-white/55 sm:text-xs">{stat.label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ───────────── Final CTA ───────────── */}
      <SectionContainer>
        <div ref={ctaRef} className="relative flex min-h-[74svh] items-center justify-center overflow-hidden md:min-h-screen">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_30%,rgba(127,211,255,0.14),transparent_34%),radial-gradient(circle_at_72%_58%,rgba(240,180,79,0.13),transparent_34%),linear-gradient(180deg,transparent,rgba(4,8,16,0.62))]" />
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
          </div>

          <Reveal className="narrative-surface narrative-grid-overlay relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[2.25rem] px-5 py-10 text-center shadow-[0_34px_100px_rgba(0,0,0,0.42)] sm:px-8 sm:py-12 md:py-16">
            {/* gradient sweep */}
            <motion.span
              aria-hidden
              style={{ x: sweepX }}
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
            />
            <div className="relative z-10">
              <span className="eyebrow justify-center">Begin the build</span>
              <h2 className="display-xl mx-auto mb-6 mt-5 max-w-3xl text-white md:mb-8">
                Ready to transform your <span className="text-gradient">digital infrastructure?</span>
              </h2>
              <p className="measure mx-auto mb-9 text-base leading-8 text-white/62 sm:text-lg md:mb-12">
                Join forward-thinking organizations leveraging the ZTEC ecosystem for competitive advantage.
              </p>
              <Link href="/contact" className="inline-flex w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full px-8 shadow-[0_18px_42px_rgba(240,180,79,0.24)] sm:w-auto">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </>
  );
}
