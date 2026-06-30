"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SectionContainer } from "../components/SectionContainer";
import { Reveal } from "../components/motion/Reveal";
import { FileText, BarChart2, BookOpen, Zap, ArrowUpRight, type LucideIcon } from "lucide-react";

const resourceTypes: Array<{ icon: LucideIcon; title: string; description: string; accent: string }> = [
  {
    icon: FileText,
    title: "Strategy Guides",
    description: "Frameworks and playbooks for digital infrastructure decisions, written by practitioners not consultants.",
    accent: "from-blue-500/25 to-cyan-500/15",
  },
  {
    icon: BarChart2,
    title: "Industry Reports",
    description: "Market analysis and data across communication, content, software, and short-term rental sectors.",
    accent: "from-amber-400/25 to-orange-500/15",
  },
  {
    icon: BookOpen,
    title: "Case Studies",
    description: "Deep-dives into real engagements: what we built, why we built it, and what the outcomes were.",
    accent: "from-cyan-500/25 to-teal-500/15",
  },
  {
    icon: Zap,
    title: "Execution Templates",
    description: "Operational templates for STRA portfolios, software delivery, and content production workflows.",
    accent: "from-emerald-400/25 to-lime-500/15",
  },
];

export function Resources() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ctaRef, offset: ["start end", "end start"] });
  const sweepX = useTransform(scrollYProgress, [0.3, 0.8], ["-40%", "140%"]);

  return (
    <div className="relative pt-24">
      {/* Hero */}
      <SectionContainer fullHeight={false}>
        <div className="relative overflow-hidden py-16 md:py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(127,211,255,0.11),transparent)]" />
          <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
              <div>
                <Reveal>
                  <span className="eyebrow mb-6">Resources</span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h1 className="display-2xl mt-4 text-white">
                    Practical insights.
                    <br />
                    <span className="text-gradient">No filler.</span>
                  </h1>
                </Reveal>
              </div>
              <Reveal delay={0.16}>
                <p className="max-w-xl text-lg leading-8 text-white/55 lg:self-end lg:text-right">
                  Strategy guides, execution templates, and industry analysis built for operators making real decisions.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* What's available */}
      <SectionContainer fullHeight={false}>
        <div className="relative py-4 md:py-8">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
            <Reveal className="mb-10 md:mb-14">
              <span className="eyebrow mb-4">What's inside</span>
              <h2 className="display-lg mt-4 max-w-xl text-white">
                Content built for
                <br />
                <span className="text-gradient">real execution</span>
              </h2>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              {resourceTypes.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={(i % 2) * 0.08} className="premium-card group p-7 sm:p-8">
                    <span className="narrative-glint" aria-hidden />
                    <div className="relative z-[2] flex items-start gap-5">
                      <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} ring-1 ring-white/12`}>
                        <Icon className="text-white" size={24} />
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
                          <ArrowUpRight size={16} className="text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                        </div>
                        <p className="mt-2.5 text-sm leading-relaxed text-white/58">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </SectionContainer>

      <hr className="section-divider mx-auto my-8 max-w-[1320px] px-5 sm:px-8 md:my-16 lg:px-16" />

      {/* Newsletter */}
      <SectionContainer fullHeight={false}>
        <div className="relative py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,211,255,0.08),transparent_60%)]" />
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
            <Reveal className="narrative-surface narrative-grid-overlay relative overflow-hidden rounded-[2rem] px-8 py-12 md:px-14 md:py-16 lg:px-20">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <span className="eyebrow mb-4">Newsletter</span>
                  <h2 className="display-lg mt-4 text-white">
                    Subscribe for
                    <br />
                    <span className="text-gradient">monthly strategy updates</span>
                  </h2>
                  <p className="measure mt-5 text-base leading-8 text-white/58">
                    Practical digital strategy insights, product updates, and execution tips delivered monthly. No spam, no fluff.
                  </p>
                </div>
                <div className="min-w-[300px] max-w-sm">
                  <div className="flex flex-col gap-3">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm transition-colors focus:border-primary/60 focus:outline-none"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full rounded-full border border-primary/60 bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
                    >
                      Subscribe
                    </motion.button>
                    <p className="text-center text-xs text-white/35">Unsubscribe anytime.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer fullHeight={false}>
        <div ref={ctaRef} className="relative overflow-hidden py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(240,180,79,0.1),transparent_55%)]" />
          <Reveal className="narrative-surface relative z-10 mx-auto max-w-3xl overflow-hidden rounded-[2.25rem] px-6 py-12 text-center shadow-[0_34px_100px_rgba(0,0,0,0.42)] sm:px-10 md:py-16">
            <motion.span
              aria-hidden
              style={{ x: sweepX }}
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
            />
            <div className="relative z-10">
              <span className="eyebrow mb-6 justify-center">Custom research</span>
              <h2 className="display-xl mt-4 text-white">
                Need <span className="text-gradient">tailored insights?</span>
              </h2>
              <p className="measure mx-auto mt-6 text-base leading-8 text-white/60">
                Our team can provide targeted research and analysis specific to your industry, use case, or delivery challenge.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground ring-1 ring-primary/50 transition-all hover:brightness-110"
                >
                  Request Custom Research
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </div>
  );
}
