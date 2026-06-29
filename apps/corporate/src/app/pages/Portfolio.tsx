"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SectionContainer } from "../components/SectionContainer";
import { StatStrip } from "../components/StatStrip";
import { Button } from "../components/Button";

const caseStudies = [
  {
    number: "01",
    title: "Enterprise Communication Platform",
    category: "Communication Gateway",
    description: "Global organization needed secure, private communication infrastructure compliant with international privacy regulations. Deployed zero-knowledge encrypted platform with distributed architecture.",
    outcome: "Private communication workflow with clear recovery, escalation, and reporting paths.",
    gradient: "from-blue-500/20 to-cyan-500/10",
    accent: "rgba(34,211,238,0.6)",
    tags: ["Security", "Enterprise", "Privacy"],
    size: "large",
  },
  {
    number: "02",
    title: "Luxury Brand Campaign",
    category: "Content Studio",
    description: "Premium automotive brand required cinematic brand film to launch new flagship model globally. Multi-location shoot with cinema-grade equipment.",
    outcome: "Reusable campaign editing system for launch assets, social cutdowns, and paid media variants.",
    gradient: "from-amber-400/20 to-orange-500/10",
    accent: "rgba(251,191,36,0.6)",
    tags: ["Video", "Luxury", "Branding"],
    size: "small",
  },
  {
    number: "03",
    title: "SaaS Platform Development",
    category: "Software & Systems",
    description: "Healthcare startup needed HIPAA-compliant patient management platform from concept to deployment. Built custom cloud-native application with real-time collaboration.",
    outcome: "Maintainable product architecture with secure workflows, role-based access, and reporting.",
    gradient: "from-cyan-500/20 to-teal-500/10",
    accent: "rgba(20,184,166,0.6)",
    tags: ["SaaS", "Healthcare", "Cloud"],
    size: "small",
  },
  {
    number: "04",
    title: "STRA Portfolio Optimization",
    category: "STRA Consultation",
    description: "Property management company with 200+ units experiencing suboptimal occupancy. Implemented AI-powered dynamic pricing and automated operations.",
    outcome: "Clearer launch plan covering pricing, compliance, listing quality, and day-to-day operations.",
    gradient: "from-emerald-400/20 to-lime-500/10",
    accent: "rgba(132,204,22,0.6)",
    tags: ["AI", "Real Estate", "Optimization"],
    size: "large",
  },
  {
    number: "05",
    title: "Government Secure Messaging",
    category: "Communication Gateway",
    description: "Federal agency required hardened communication system for classified operations. Engineered custom protocol with quantum-resistant encryption.",
    outcome: "Mapped sensitive communication requirements into a hardened, auditable delivery plan.",
    gradient: "from-violet-500/20 to-blue-500/10",
    accent: "rgba(139,92,246,0.6)",
    tags: ["Government", "Security", "Classified"],
    size: "small",
  },
  {
    number: "06",
    title: "Tech Product Launch Film",
    category: "Content Studio",
    description: "Tech unicorn launching revolutionary product needed hero film for global press event. Cinematic product film with advanced VFX on accelerated timeline.",
    outcome: "Structured product story with reusable launch clips, explainer edits, and social-ready formats.",
    gradient: "from-rose-500/20 to-orange-400/10",
    accent: "rgba(244,63,94,0.6)",
    tags: ["Tech", "Product Launch", "VFX"],
    size: "small",
  },
];

export function Portfolio() {
  return (
    <div className="relative pt-24">

      {/* Hero */}
      <SectionContainer fullHeight={false}>
        <div className="relative overflow-hidden py-16 md:py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(127,211,255,0.11),transparent)]" />
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16"
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
              <div>
                <span className="eyebrow mb-6">Selected Work</span>
                <h1 className="display-2xl mt-4 text-white">
                  Projects that<br /><span className="text-gradient">move the needle.</span>
                </h1>
              </div>
              <p className="max-w-xl text-lg leading-8 text-white/55 lg:text-right lg:self-end">
                Outcome-focused delivery across communication platforms, software systems, content production, and STRA optimization.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Case Studies */}
      <SectionContainer fullHeight={false}>
        <div className="relative pb-16 md:pb-24">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
            <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
              {caseStudies.map((study, index) => (
                <motion.article
                  key={study.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  className={`cinematic-panel group relative overflow-hidden rounded-2xl p-7 sm:p-8 ${study.size === "large" ? "md:col-span-2" : ""}`}
                >
                  {/* Gradient accent top-right */}
                  <div
                    className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${study.gradient} blur-3xl transition-opacity duration-500 group-hover:opacity-150`}
                  />

                  <div className="relative z-10">
                    {/* Top row */}
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <span className="text-5xl font-bold tracking-tight text-white/8 group-hover:text-white/14 transition-colors duration-500 leading-none">
                        {study.number}
                      </span>
                      <span className="rounded-full bg-white/6 px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-white/55">
                        {study.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className={`font-semibold leading-tight text-white ${study.size === "large" ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
                      {study.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed text-white/58">
                      {study.description}
                    </p>

                    {/* Outcome */}
                    <div className="mt-6 rounded-xl border border-white/8 bg-white/[0.035] p-4">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-white/38 mb-2">Outcome</p>
                      <p className="text-sm font-medium leading-relaxed text-white/82">{study.outcome}</p>
                    </div>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Stats */}
      <SectionContainer fullHeight={false}>
        <div className="relative border-y border-white/5 py-16 md:py-20">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
            <div className="mb-10 text-center md:mb-14">
              <span className="eyebrow justify-center">Delivery signals</span>
              <h2 className="display-lg mt-4 text-white">How we keep engagements<br /><span className="text-gradient">structured and accountable.</span></h2>
            </div>
            <StatStrip
              stats={[
                { value: "4", label: "Service Divisions" },
                { value: "1", label: "Delivery Roadmap" },
                { value: "2019", label: "Group Founded" },
                { value: "AU", label: "Registered Company" },
              ]}
            />
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer fullHeight={false}>
        <div className="relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(240,180,79,0.12),transparent_55%)]" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8 text-center"
          >
            <span className="eyebrow justify-center mb-6">Start your project</span>
            <h2 className="display-xl mt-4 text-white">
              Ready to create your<br /><span className="text-gradient">success story?</span>
            </h2>
            <p className="measure mx-auto mt-6 text-base leading-8 text-white/60">
              Let's design and deliver a project that is measurable, scalable, and built for long-term value.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </div>
  );
}
