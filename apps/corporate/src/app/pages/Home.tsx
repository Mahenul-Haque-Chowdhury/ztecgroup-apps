"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { Shield, Video, Code, TrendingUp, ChevronDown } from "lucide-react";
import { SectionContainer } from "../components/SectionContainer";
import { ServiceCard } from "../components/ServiceCard";
import { Button } from "../components/Button";
import BlurText from "../components/BlurText";
import ShapeGrid from "../components/ShapeGrid";
import CardSwap, { Card } from "../components/CardSwap";
import { useEffect, useRef, useState } from "react";

const HERO_ROTATING_CTAS = [
  {
    label: "Explore Software Services",
    href: "/services/software",
    external: false,
    toneClassName:
      "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 ring-cyan-200/40 shadow-[0_14px_35px_rgba(34,211,238,0.3)] hover:brightness-110",
  },
  {
    label: "Explore Video Services",
    href: "/services/content",
    external: false,
    toneClassName:
      "bg-gradient-to-r from-rose-500 to-orange-400 text-white ring-rose-200/35 shadow-[0_14px_35px_rgba(244,63,94,0.34)] hover:brightness-110",
  },
  {
    label: "Book a Consultation",
    href: "/services/revenue",
    external: false,
    toneClassName:
      "!bg-[rgb(0,209,148)] text-slate-950 ring-[#86efd1]/70 shadow-[0_14px_35px_rgba(0,209,148,0.34)] hover:!bg-[rgb(0,209,148)]",
  },
  {
    label: "Visit Scan2Call.net",
    href: "https://scan2call.net",
    external: true,
    toneClassName:
      "bg-[#FFC657] text-slate-950 ring-[#ffe3a6]/70 shadow-[0_14px_35px_rgba(255,198,87,0.34)] hover:bg-[#ffd173]",
  },
] as const;

const HERO_CTA_ROTATION_MS = 2800;

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeHeroCtaIndex, setActiveHeroCtaIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const rotationTimer = window.setInterval(() => {
      setActiveHeroCtaIndex((previousIndex) =>
        (previousIndex + 1) % HERO_ROTATING_CTAS.length
      );
    }, HERO_CTA_ROTATION_MS);

    return () => window.clearInterval(rotationTimer);
  }, []);

  const { scrollYProgress: solutionsProgress } = useScroll({
    target: solutionsRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -120]);
  const gridPatternOpacity = useTransform(scrollYProgress, [0, 0.5], [0.85, 0.28]);
  const blobPrimaryY = useTransform(scrollYProgress, [0, 0.5], [0, -130]);
  const blobSecondaryY = useTransform(scrollYProgress, [0, 0.5], [0, 130]);
  const tickerDriftY = useTransform(solutionsProgress, [0, 1], [16, -16]);
  const orbPrimaryY = useTransform(solutionsProgress, [0, 1], [26, -26]);
  const orbSecondaryY = useTransform(solutionsProgress, [0, 1], [-22, 22]);
  const activeHeroCta = HERO_ROTATING_CTAS[activeHeroCtaIndex] ?? HERO_ROTATING_CTAS[0];

  const tickerItems = [
    "Anonymous Communication Gateway",
    "Website Development",
    "E-Commerce Solutions",
    "Mobile App Development",
    "SEO & Digital Marketing",
    "CRM",
    "HRMS",
    "Documentary & Story-Driven Video Edits",
    "Shorts",
    "Reels & Vertical Repurposing",
    "Ad Creative & Promo Editing",
    "Facebook-TikTok-YouTube",
    "Video & Reels Editing",
    "Short Term Rental Management Consultation",
  ];

  const comprehensiveServices = [
    {
      number: "01",
      title: "Anonymous Communication Gateway",
      description: "Secure, encrypted communication infrastructure for privacy-first organizations and individuals.",
      icon: Shield,
      logoSrc: "/communication.svg",
      logoAlt: "Anonymous Communication Gateway logo",
      imageSrc: "/service-comm.png",
      href: "/services/communication",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
      tags: ["Secure Messaging", "Anonymous Identity", "Encrypted Exchange"],
    },
    {
      number: "02",
      title: "Video & Motion Content Studio",
      description: "Premium video production, motion graphics, and cinematic storytelling for brands that demand excellence.",
      icon: Video,
      logoSrc: "/contentstudio.svg",
      logoAlt: "Video & Motion Content Studio logo",
      imageSrc: "/service-video.png",
      href: "/services/content",
      gradient: "bg-gradient-to-br from-amber-400 to-orange-500",
      tags: ["Cinematic Production", "Motion Graphics", "Story Systems"],
    },
    {
      number: "03",
      title: "Software & Business Systems",
      description: "Enterprise-grade software solutions and custom business automation platforms.",
      icon: Code,
      logoSrc: "/software.svg",
      logoAlt: "Software & Business Systems logo",
      imageSrc: "/service-software.png",
      href: "/services/software",
      gradient: "bg-gradient-to-br from-cyan-500 to-teal-500",
      tags: ["Applications", "Integrations", "Automation"],
    },
    {
      number: "04",
      title: "STRA Management Consultation",
      description: "Strategic STRA (Short term rental accommodation) management consultation and optimization frameworks.",
      icon: TrendingUp,
      logoSrc: "/hospitality.svg",
      logoAlt: "STRA Management Consultation logo",
      imageSrc: "/service-revenue2.jpg",
      href: "/services/revenue",
      gradient: "bg-gradient-to-br from-emerald-400 to-lime-500",
      tags: ["Dynamic Pricing", "Forecasting", "Portfolio Ops"],
    },
  ];

  const faqItems = [
    {
      question: "How do your four divisions collaborate on one engagement?",
      answer: "Each project starts with a shared roadmap, then we assign a lead division while the other teams plug in at mapped milestones for communication, media, systems, and growth outcomes.",
    },
    {
      question: "Can we launch with one service first and expand later?",
      answer: "Yes. Most clients begin with one priority track, then add additional divisions once the first deployment reaches measurable traction.",
    },
    {
      question: "What happens during the kickoff sprint?",
      answer: "We align goals, define KPIs, audit current infrastructure, and deliver an execution blueprint with timelines, owners, and phased delivery checkpoints.",
    },
    {
      question: "How fast can you ship a first usable release?",
      answer: "Depending on scope, we typically deliver a validated first release within 3-6 weeks, including design, build, and real-world feedback loops.",
    },
    {
      question: "Do you integrate with our existing tools and platforms?",
      answer: "Absolutely. We integrate with existing CRMs, analytics stacks, communication tools, and internal workflows to avoid disruption and accelerate adoption.",
    },
    {
      question: "What support do we get after go-live?",
      answer: "You can choose a continuous support model covering optimization, monitoring, monthly performance reviews, and iterative feature upgrades.",
    },
  ];

  return (
    <div className="relative">
      <div className="relative z-10">
      {/* Hero Section */}
      <SectionContainer fullHeight>
        <div ref={heroRef} className="relative flex min-h-[100svh] items-start justify-center overflow-hidden pt-32 sm:pt-36 md:pt-36 lg:pt-36 xl:pt-40">
          {/* Animated Background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(59,130,246,0.28),transparent_32%),radial-gradient(circle_at_30%_74%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_64%_22%,rgba(251,191,36,0.26),transparent_28%),radial-gradient(circle_at_84%_64%,rgba(249,115,22,0.2),transparent_26%),radial-gradient(circle_at_78%_32%,rgba(16,185,129,0.22),transparent_30%),radial-gradient(circle_at_54%_78%,rgba(132,204,22,0.18),transparent_26%),radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.06),transparent_40%),linear-gradient(180deg,rgba(6,10,18,0.42),rgba(3,6,12,0.76))]" />
            <motion.div
              style={{ y: blobPrimaryY }}
              className="absolute top-[16%] left-[12%] h-80 w-80 rounded-full bg-amber-400/20 blur-3xl animate-pulse"
            />
            <motion.div
              style={{ y: blobSecondaryY, animationDelay: "1s" }}
              className="absolute bottom-[14%] right-[10%] h-96 w-96 rounded-full bg-cyan-400/18 blur-3xl animate-pulse"
            />
          </div>

          <motion.div style={{ opacity: gridPatternOpacity }} className="absolute inset-0">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_60%),radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.055),transparent_40%)]" />
            <div className="absolute inset-0 opacity-65">
              <ShapeGrid
                speed={0}
                squareSize={25}
                direction="up"
                borderColor="#2F293A"
                hoverFillColor="#4a4a4a"
                shape="hexagon"
                hoverTrailAmount={2}
                className="scale-[1.05]"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,14,0.02),rgba(2,6,14,0.34)_72%,rgba(2,6,14,0.68))]" />
          </motion.div>

          <motion.div 
            style={{ opacity, y: heroY }}
            className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-8 px-5 text-center sm:px-8 lg:grid-cols-[minmax(42rem,1.12fr)_0.88fr] lg:px-16 lg:text-left"
          >
            <div className="min-w-0 lg:-ml-8 xl:-ml-12">
              {/* Main Headline */}
              <h1 className="sr-only">ZTEC Group Pty Ltd. Everything Connected. Nothing Compromised.</h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-white/65 sm:text-xs lg:mb-4"
              >
                Welcome to ZTEC GROUP PTY LTD
              </motion.p>
              <div aria-hidden className="mb-8 space-y-1">
                <BlurText
                  text="Everything Connected."
                  delay={190}
                  stepDuration={0.62}
                  animateBy="words"
                  direction="top"
                  className="w-full justify-center text-[clamp(2rem,9vw,2.85rem)] font-bold tracking-tight leading-[1.08] sm:text-[2.55rem] md:text-[3.15rem] lg:justify-start lg:whitespace-nowrap lg:text-[3.35rem] xl:text-[3.75rem]"
                />
                <BlurText
                  text="Nothing Compromised."
                  delay={170}
                  stepDuration={0.62}
                  animateBy="words"
                  direction="bottom"
                  className="w-full justify-center text-[clamp(2rem,9vw,2.85rem)] font-bold tracking-tight leading-[1.08] sm:text-[2.55rem] md:text-[3.15rem] lg:justify-start lg:whitespace-nowrap lg:text-[3.35rem] xl:text-[3.75rem]"
                  segmentClassName="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent"
                />
              </div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg md:mb-12 md:text-xl lg:mx-0"
              >
                ZTEC Group Pty Ltd is a unified operating system for communication, content, software, and hospitality services without trade-offs on clarity, control, or execution.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mx-auto flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center lg:mx-0 lg:justify-start"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeHeroCta.label}
                    initial={{ opacity: 0, rotateX: 92, y: 10, scale: 0.98, filter: "saturate(70%)" }}
                    animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1, filter: "saturate(100%)" }}
                    exit={{ opacity: 0, rotateX: -92, y: -10, scale: 0.98, filter: "saturate(70%)" }}
                    transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full [perspective:1200px] sm:w-auto"
                    style={{ transformOrigin: "center center", transformStyle: "preserve-3d", willChange: "transform, opacity, filter" }}
                  >
                    {activeHeroCta.external ? (
                      <a href={activeHeroCta.href} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="primary"
                          size="lg"
                          className={`w-full px-4 py-3 text-[0.75rem] normal-case tracking-[0.01em] sm:w-[14.5rem] sm:text-[0.8rem] md:w-[15.5rem] md:text-[0.82rem] ${activeHeroCta.toneClassName}`}
                        >
                          <span className="inline-flex min-h-[1.25rem] w-full items-center justify-center whitespace-nowrap">
                            {activeHeroCta.label}
                          </span>
                        </Button>
                      </a>
                    ) : (
                      <Link href={activeHeroCta.href}>
                        <Button
                          variant="primary"
                          size="lg"
                          className={`w-full px-4 py-3 text-[0.75rem] normal-case tracking-[0.01em] sm:w-[14.5rem] sm:text-[0.8rem] md:w-[15.5rem] md:text-[0.82rem] ${activeHeroCta.toneClassName}`}
                        >
                          <span className="inline-flex min-h-[1.25rem] w-full items-center justify-center whitespace-nowrap">
                            {activeHeroCta.label}
                          </span>
                        </Button>
                      </Link>
                    )}
                  </motion.div>
                </AnimatePresence>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Get in Touch
                  </Button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto hidden min-h-[28rem] w-full max-w-[32rem] overflow-visible lg:block"
              aria-label="ZTEC Group four company sectors"
            >
              <CardSwap
                width="27rem"
                height="19rem"
                cardDistance={42}
                verticalDistance={54}
                delay={3400}
                pauseOnHover
                skewAmount={4}
                easing="elastic"
              >
                {comprehensiveServices.map((service) => {
                  return (
                    <Card
                      key={service.number}
                      className="group overflow-hidden p-5 text-left shadow-[0_28px_80px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(255,255,255,0.035)]"
                    >
                      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                      <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-20 blur-3xl`} />
                      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-[1.15rem] bg-white/[0.055] p-1.5 shadow-[0_16px_30px_rgba(0,0,0,0.24)] ring-1 ring-white/12">
                        <Image
                          src={service.logoSrc}
                          alt={service.logoAlt}
                          width={56}
                          height={56}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="mb-3 text-[11px] uppercase tracking-[0.16em] text-white/42">{service.number}</div>
                      <h2 className="text-xl font-semibold leading-tight text-white sm:text-2xl">{service.title}</h2>
                      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-white/62">{service.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {service.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="rounded-full border border-white/8 bg-white/[0.035] px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-white/58 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Card>
                  );
                })}
              </CardSwap>
            </motion.div>

          </motion.div>
        </div>
      </SectionContainer>

      {/* Services Preview Section */}
      <SectionContainer fullHeight={false} className="z-30 -mt-32 sm:-mt-36 md:-mt-44">
        <div ref={solutionsRef} className="relative overflow-x-hidden overflow-y-visible pt-2 pb-16 md:pb-20 md:pt-4">
          <motion.div
            style={{ y: orbPrimaryY }}
            className="narrative-orb narrative-orb-cyan -left-24 top-4"
            aria-hidden
          />
          <motion.div
            style={{ y: orbSecondaryY }}
            className="narrative-orb narrative-orb-amber -right-24 bottom-4"
            aria-hidden
          />

          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
            <motion.div
              style={{ y: tickerDriftY }}
              className="narrative-surface narrative-ticker-full-bleed relative z-50 mb-8 overflow-hidden px-2 py-3 sm:mb-10 sm:px-2 sm:py-3"
            >
              <div className="narrative-ticker">
                <div className="narrative-ticker-track text-[10px] leading-[1.35] uppercase tracking-[0.12em] text-white/68 sm:text-[12px] sm:tracking-[0.18em]">
                  {Array.from({ length: 2 }).map((_, loopIndex) => (
                    tickerItems.map((item, itemIndex) => (
                      <span key={`${loopIndex}-${itemIndex}`} className="inline-flex items-center gap-2.5 whitespace-nowrap sm:gap-3">
                        <span>{item}</span>
                        <span className="h-1 w-1 rounded-full bg-primary/75" />
                      </span>
                    ))
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-center mb-10 md:mb-14"
            >
              <div className="narrative-surface inline-flex items-center rounded-full px-4 py-2 text-[11px] tracking-[0.16em] text-white/70 mb-8 uppercase">
                Core Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-[1.08]">
                Comprehensive
                <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent"> Solutions</span>
              </h2>
              <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-white/62 leading-relaxed">
                Coordinated service delivery across communication, content, software, and hospitality operations.
              </p>
            </motion.div>

            {/* Service Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="narrative-surface narrative-surface-no-border relative z-10 rounded-[2rem] p-2.5 md:p-4"
            >
              <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                {comprehensiveServices.map((service) => (
                  <ServiceCard
                    key={service.number}
                    number={service.number}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    imageSrc={service.imageSrc}
                    href={service.href}
                    gradient={service.gradient}
                    tags={service.tags}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer fullHeight={false}>
        <div className="relative py-16 md:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-10 h-72 bg-[radial-gradient(circle_at_center,rgba(127,211,255,0.12),transparent_68%)]" />
          <div className="mx-auto max-w-[1120px] px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-9 text-center md:mb-12"
            >
              <div className="narrative-surface mb-5 inline-flex items-center rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/70">
                Decision support
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white/95 sm:text-4xl md:text-5xl">FAQ</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/58 sm:text-base">
                Clear answers for teams evaluating a multi-division delivery partner.
              </p>
            </motion.div>

            <div className="narrative-surface rounded-[2rem] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.34)] md:p-3">
              {faqItems.map((item, index) => {
                const isOpen = openFaqIndex === index;

                return (
                  <motion.div
                    key={item.question}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className={`overflow-hidden rounded-[1.5rem] border transition-all duration-300 ${
                      isOpen
                        ? "border-primary/30 bg-[linear-gradient(112deg,rgba(42,48,58,0.98),rgba(22,28,37,0.96))] shadow-[0_18px_46px_rgba(0,0,0,0.24)]"
                        : "border-white/10 bg-white/[0.035] hover:border-white/18 hover:bg-white/[0.055]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                    >
                      <span className="flex items-start gap-4">
                        <span className="mt-0.5 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[11px] uppercase tracking-[0.08em] text-white/50 sm:inline-flex">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-base font-medium leading-snug text-white/92 sm:text-lg md:text-xl md:leading-snug">
                          {item.question}
                        </span>
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/65"
                      >
                        <ChevronDown size={20} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="faq-answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-sm leading-relaxed text-white/68 sm:pl-[4.75rem] md:pr-12 md:text-base">
                            {item.answer}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Credibility Section */}
      <SectionContainer fullHeight={false}>
        <div className="relative border-y border-white/5 py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(127,211,255,0.07),transparent_34%,rgba(240,180,79,0.07)_66%,transparent)]" />
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
            >
              <div className="narrative-surface mb-5 inline-flex items-center rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/70">
                Operating proof
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Built for Practical Delivery
              </h2>
              <p className="text-sm leading-relaxed text-white/60 sm:text-base">
                A growing mix of operators, teams, and service-led businesses rely on our delivery model
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="narrative-surface narrative-grid-overlay overflow-hidden rounded-[2rem]">
              <div className="relative z-10 grid grid-cols-2 divide-x divide-y divide-white/8 md:grid-cols-4 md:divide-y-0">
              {[
                { value: "80+", label: "Projects Delivered" },
                { value: "99.5%", label: "Platform Reliability" },
                { value: "20+", label: "Active Clients" },
                { value: "4", label: "Specialist Divisions" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative px-4 py-8 text-center transition-colors duration-300 hover:bg-white/[0.045] sm:px-6 sm:py-10"
                >
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="mx-auto mb-5 h-px w-10 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <div className="mb-3 bg-gradient-to-r from-white via-white/90 to-white/58 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl">{stat.value}</div>
                  <div className="text-xs uppercase tracking-[0.16em] text-white/48">{stat.label}</div>
                </motion.div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Final CTA Section */}
      <SectionContainer>
        <div className="relative flex min-h-[74svh] items-center justify-center overflow-hidden md:min-h-screen">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_30%,rgba(127,211,255,0.14),transparent_34%),radial-gradient(circle_at_72%_58%,rgba(240,180,79,0.13),transparent_34%),linear-gradient(180deg,transparent,rgba(4,8,16,0.62))]" />
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="narrative-surface narrative-grid-overlay relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[2.25rem] px-5 py-10 text-center shadow-[0_34px_100px_rgba(0,0,0,0.42)] sm:px-8 sm:py-12 md:py-16"
          >
            <div className="relative z-10">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/70">
              Begin the build
            </div>
            <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:mb-8 md:text-6xl">
              Ready to Transform Your
              <br />
              <span className="bg-gradient-to-r from-white via-white/88 to-white/58 bg-clip-text text-transparent">Digital Infrastructure?</span>
            </h2>
            <p className="mx-auto mb-9 max-w-2xl text-base leading-relaxed text-white/62 sm:text-lg md:mb-12 md:text-xl">
              Join forward-thinking organizations leveraging the ZTEC ecosystem for competitive advantage.
            </p>
            <Link href="/contact" className="inline-flex w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full px-8 shadow-[0_18px_42px_rgba(240,180,79,0.24)] sm:w-auto">
                Start Your Project
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
