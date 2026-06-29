"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SectionContainer } from "../components/SectionContainer";
import { FeatureGrid } from "../components/FeatureGrid";
import { FeatureTile } from "../components/FeatureTile";
import { FileText, BarChart2, BookOpen, Zap } from "lucide-react";

const resourceTypes = [
  {
    icon: FileText,
    title: "Strategy Guides",
    description: "Frameworks and playbooks for digital infrastructure decisions, written by practitioners not consultants.",
  },
  {
    icon: BarChart2,
    title: "Industry Reports",
    description: "Market analysis and data across communication, content, software, and short-term rental sectors.",
  },
  {
    icon: BookOpen,
    title: "Case Studies",
    description: "Deep-dives into real engagements: what we built, why we built it, and what the outcomes were.",
  },
  {
    icon: Zap,
    title: "Execution Templates",
    description: "Operational templates for STRA portfolios, software delivery, and content production workflows.",
  },
];

export function Resources() {
  return (
    <div className="relative pt-24">

      {/* Hero */}
      <SectionContainer fullHeight={false}>
        <div className="relative overflow-hidden py-16 md:py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(127,211,255,0.11),transparent)]" />
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16"
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
              <div>
                <span className="eyebrow mb-6">Resources</span>
                <h1 className="display-2xl mt-4 text-white">
                  Practical insights.<br /><span className="text-gradient">No filler.</span>
                </h1>
              </div>
              <p className="max-w-xl text-lg leading-8 text-white/55 lg:self-end lg:text-right">
                Strategy guides, execution templates, and industry analysis built for operators making real decisions.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* What's available */}
      <SectionContainer fullHeight={false}>
        <div className="relative py-4 md:py-8">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 md:mb-14"
            >
              <span className="eyebrow mb-4">What's inside</span>
              <h2 className="display-lg mt-4 text-white max-w-xl">
                Content built for<br /><span className="text-gradient">real execution</span>
              </h2>
            </motion.div>
            <FeatureGrid columns={2}>
              {resourceTypes.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <FeatureTile icon={item.icon} title={item.title} description={item.description} />
                </motion.div>
              ))}
            </FeatureGrid>
          </div>
        </div>
      </SectionContainer>

      <hr className="section-divider my-8 md:my-16 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16" />

      {/* Newsletter */}
      <SectionContainer fullHeight={false}>
        <div className="relative py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,211,255,0.08),transparent_60%)]" />
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="narrative-surface rounded-[2rem] px-8 py-12 md:px-14 md:py-16 lg:px-20"
            >
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <span className="eyebrow mb-4">Newsletter</span>
                  <h2 className="display-lg mt-4 text-white">
                    Subscribe for<br /><span className="text-gradient">monthly strategy updates</span>
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
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-3.5 text-sm focus:border-primary/60 focus:outline-none transition-colors"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground border border-primary/60 hover:brightness-110 transition-all"
                    >
                      Subscribe
                    </motion.button>
                    <p className="text-center text-xs text-white/35">Unsubscribe anytime.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer fullHeight={false}>
        <div className="relative overflow-hidden py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(240,180,79,0.1),transparent_55%)]" />
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8 text-center"
          >
            <span className="eyebrow justify-center mb-6">Custom research</span>
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
          </motion.div>
        </div>
      </SectionContainer>
    </div>
  );
}
