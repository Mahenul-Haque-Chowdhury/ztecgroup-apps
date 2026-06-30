"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Shield, Video, Code, TrendingUp, ArrowRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { SectionContainer } from "../components/SectionContainer";
import { Button } from "../components/Button";
import { Reveal } from "../components/motion/Reveal";
import { ScrollProgressRail } from "../components/motion/ScrollProgressRail";

const EASE = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    id: "communication",
    href: "https://communication.ztecgroup.au",
    number: "01",
    title: "Anonymous Communication Gateway",
    tagline: "Privacy-First Infrastructure",
    description: "Enterprise-grade encrypted communication systems for organizations that can't afford exposure. Zero-knowledge architecture, distributed infrastructure, military-grade protocols.",
    features: [
      { icon: Shield, label: "End-to-end encrypted messaging" },
      { icon: Shield, label: "Zero-knowledge architecture" },
      { icon: Shield, label: "Distributed infrastructure" },
      { icon: Shield, label: "Military-grade security protocols" },
    ],
    imageSrc: "/service-comm.png",
    gradient: "from-blue-500 to-cyan-500",
    accentBg: "rgba(34,211,238,0.08)",
  },
  {
    id: "content",
    href: "https://contentstudio.ztecgroup.au",
    number: "02",
    title: "Video & Motion Content Studio",
    tagline: "Cinematic Excellence",
    description: "Premium video production and motion graphics that elevate brand storytelling to award-winning caliber. From concept through post, one creative team with no handoffs.",
    features: [
      { icon: Video, label: "Cinematic video production" },
      { icon: Video, label: "Motion graphics & animation" },
      { icon: Video, label: "Brand storytelling systems" },
      { icon: Video, label: "Post-production mastery" },
    ],
    imageSrc: "/service-video.png",
    gradient: "from-amber-400 to-orange-500",
    accentBg: "rgba(251,191,36,0.08)",
  },
  {
    id: "software",
    href: "https://software.ztecgroup.au",
    number: "03",
    title: "Software & Business Systems",
    tagline: "Enterprise Solutions",
    description: "Custom software development and business automation platforms that scale with your organization. From concept to deployment to long-term maintenance.",
    features: [
      { icon: Code, label: "Custom software development" },
      { icon: Code, label: "API & integration services" },
      { icon: Code, label: "Process automation" },
      { icon: Code, label: "Scalable architectures" },
    ],
    imageSrc: "/service-software.png",
    gradient: "from-cyan-500 to-teal-500",
    accentBg: "rgba(20,184,166,0.08)",
  },
  {
    id: "revenue",
    href: "https://hospitality.ztecgroup.au",
    number: "04",
    title: "STRA Management Consultation",
    tagline: "Advisory & Optimization",
    description: "Strategic consultation and optimization frameworks for short-term rental accommodation portfolios. Dynamic pricing, market analysis, and automated portfolio operations.",
    features: [
      { icon: TrendingUp, label: "Dynamic pricing algorithms" },
      { icon: TrendingUp, label: "Market analysis & forecasting" },
      { icon: TrendingUp, label: "Portfolio optimization" },
      { icon: TrendingUp, label: "Automated management systems" },
    ],
    imageSrc: "/service-revenue2.jpg",
    gradient: "from-emerald-400 to-lime-500",
    accentBg: "rgba(132,204,22,0.08)",
  },
];

const whyItems: Array<{ icon: LucideIcon; title: string; description: string }> = [
  { icon: Shield, title: "One point of contact", description: "Strategy, production, tech, and commercial decisions stay coordinated. No vendor juggling." },
  { icon: TrendingUp, title: "Outcome-first delivery", description: "Every engagement is structured around measurable results, not activity milestones." },
  { icon: Code, title: "Cross-division leverage", description: "Divisions work together. A software build can unlock a content strategy or STRA stack." },
  { icon: Video, title: "Executive-level access", description: "You work directly with decision-makers at every stage of delivery." },
];

function DivisionRow({ service, index }: { service: (typeof services)[number]; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: rowRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const reversed = index % 2 === 1;

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <Link href={service.href} className="group block">
        <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reversed ? "lg:grid-flow-dense" : ""}`}>
          {/* Content */}
          <div className={reversed ? "lg:col-start-2" : ""}>
            <div className="mb-6 flex items-center gap-4">
              <span className="text-6xl font-bold leading-none text-white/[0.07] transition-colors duration-500 group-hover:text-white/[0.14]">
                {service.number}
              </span>
              <span className="eyebrow">{service.tagline}</span>
            </div>

            <h2 className="display-lg text-white">{service.title}</h2>

            <p className="measure mt-5 text-base leading-8 text-white/58">{service.description}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {service.features.map((f) => (
                <span key={f.label} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-white/65">
                  {f.label}
                </span>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 group-hover:gap-3">
              <span>Explore this division</span>
              <ArrowRight size={15} />
            </div>
          </div>

          {/* Visual */}
          <div className={`relative ${reversed ? "lg:col-start-1 lg:row-start-1" : ""}`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <div className={`absolute -inset-4 bg-gradient-to-br ${service.gradient} opacity-15 blur-2xl transition-opacity duration-700 group-hover:opacity-25`} />
              <div className="relative h-full overflow-hidden rounded-3xl bg-white/[0.03] shadow-[0_24px_56px_rgba(4,8,20,0.55),inset_0_1px_0_rgba(255,255,255,0.06)]">
                <motion.div style={{ y: imageY }} className="absolute inset-x-0 -inset-y-[8%]">
                  <div className="relative h-full w-full">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="cinematic-panel rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/80">
                    {service.tagline}
                  </span>
                </div>
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-primary/20 group-hover:ring-primary/40">
                  <ArrowUpRight size={16} className="text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ServicesHub() {
  const railRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ctaRef, offset: ["start end", "end start"] });
  const sweepX = useTransform(scrollYProgress, [0.3, 0.8], ["-40%", "140%"]);

  return (
    <div className="relative pt-24">
      {/* Hero */}
      <SectionContainer fullHeight={false}>
        <div className="relative overflow-hidden py-16 md:py-28 lg:py-36">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(127,211,255,0.12),transparent)]" />
            <div className="absolute left-1/3 top-1/3 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="absolute bottom-1/3 right-1/3 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-[1320px] px-5 text-center sm:px-8 lg:px-16">
            <Reveal>
              <span className="eyebrow mb-6 justify-center">Our Services</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="display-2xl mt-4 text-white">
                Integrated solutions.
                <br />
                <span className="text-gradient">One operating architecture.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="measure mx-auto mt-8 text-lg leading-8 text-white/58">
                Four specialist divisions engineered to work in synchronization. Comprehensive digital infrastructure without the coordination overhead.
              </p>
            </Reveal>
          </div>
        </div>
      </SectionContainer>

      {/* Services with progress rail */}
      <div className="relative pb-16 md:pb-24">
        <div className="mx-auto flex max-w-[1320px] gap-6 px-5 sm:px-8 lg:gap-10 lg:px-16">
          <div className="hidden shrink-0 lg:block">
            <div className="sticky top-32 h-[60vh]">
              <ScrollProgressRail target={railRef} className="h-full" />
            </div>
          </div>
          <div ref={railRef} className="min-w-0 flex-1 space-y-20 md:space-y-28 lg:space-y-36">
            {services.map((service, index) => (
              <DivisionRow key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>

      <hr className="section-divider" />

      {/* Why ZTEC */}
      <SectionContainer fullHeight={false}>
        <div className="relative py-16 md:py-24">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
            <Reveal className="mb-12 text-center md:mb-16">
              <span className="eyebrow mb-4 justify-center">Why ZTEC</span>
              <h2 className="display-xl mx-auto mt-4 max-w-2xl text-white">
                What makes the
                <br />
                <span className="text-gradient">delivery model different</span>
              </h2>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whyItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={i * 0.08} className="premium-card group p-7">
                    <span className="narrative-glint" aria-hidden />
                    <div className="relative z-[2]">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-accent/15 ring-1 ring-white/12">
                        <Icon className="text-primary" size={22} />
                      </span>
                      <h3 className="mt-6 text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-white/58">{item.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer fullHeight={false}>
        <div ref={ctaRef} className="relative overflow-hidden py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(240,180,79,0.12),transparent_55%)]" />
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
            <Reveal className="narrative-surface narrative-grid-overlay relative mx-auto max-w-3xl overflow-hidden rounded-[2.25rem] px-6 py-12 text-center shadow-[0_34px_100px_rgba(0,0,0,0.42)] sm:px-10 md:py-16">
              <motion.span
                aria-hidden
                style={{ x: sweepX }}
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
              />
              <div className="relative z-10">
                <span className="eyebrow mb-6 justify-center">Get started</span>
                <h2 className="display-xl mt-4 text-white">
                  Need a <span className="text-gradient">custom solution?</span>
                </h2>
                <p className="measure mx-auto mt-6 text-base leading-8 text-white/60">
                  Our team can architect bespoke systems tailored to your unique requirements, across one division or all four.
                </p>
                <div className="mt-10">
                  <Link href="/contact">
                    <Button variant="primary" size="lg">
                      Discuss Your Project
                    </Button>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
