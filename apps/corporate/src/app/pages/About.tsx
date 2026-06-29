"use client";

import { leadershipProfiles } from "@ztecgroup/content";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { SectionContainer } from "../components/SectionContainer";
import { FeatureGrid } from "../components/FeatureGrid";
import { FeatureTile } from "../components/FeatureTile";
import { Button } from "../components/Button";
import { Layers, Target, Zap, Users } from "lucide-react";

const principles = [
  {
    icon: Layers,
    title: "One group, four specialist lanes",
    body: "Clients work with a connected leadership team instead of disconnected vendors. Communication, content, software, and STRA, coordinated under one roof.",
  },
  {
    icon: Target,
    title: "Executive direction stays close",
    body: "Strategy, delivery, production, and systems decisions stay aligned from kickoff to launch. No handoff chains, no agency middlemen.",
  },
  {
    icon: Zap,
    title: "Built for measurable execution",
    body: "Every engagement is shaped around practical delivery, operating clarity, and long-term lift. Not activity metrics or vanity reports.",
  },
  {
    icon: Users,
    title: "Clients stay in control",
    body: "You get direct access to decision-makers at every stage. No account managers between you and the people doing the work.",
  },
];

const stats = [
  { value: "2019", label: "Founded" },
  { value: "4", label: "Divisions" },
  { value: "80+", label: "Projects" },
  { value: "AU", label: "Registered" },
];

export function About() {
  return (
    <div className="relative pt-24">

      {/* Hero */}
      <SectionContainer fullHeight={false}>
        <div className="relative overflow-hidden py-16 md:py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(127,211,255,0.13),transparent)]" />
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16"
          >
            <span className="eyebrow mb-8">About ZTEC Group</span>
            <h1 className="display-2xl max-w-5xl text-white mt-4">
              One leadership structure.<br />
              <span className="text-gradient">Four specialist divisions.</span>
            </h1>
            <p className="measure mt-8 text-lg leading-8 text-white/60">
              Founded in 2019 in Perth, Australia. ZTEC Group brings communication, content, software, and STRA consultation into one coordinated operating model so strategy and delivery never drift apart.
            </p>

            {/* Inline stats row */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="cinematic-panel rounded-2xl px-6 py-7 text-center"
                >
                  <div className="display-lg text-gradient">{s.value}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-white/50">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Operating principles */}
      <SectionContainer fullHeight={false}>
        <div className="relative py-16 md:py-24">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-12 md:mb-16"
            >
              <span className="eyebrow mb-4">How we operate</span>
              <h2 className="display-xl mt-4 max-w-2xl text-white">
                The principles behind<br /><span className="text-gradient">the delivery model</span>
              </h2>
            </motion.div>

            <FeatureGrid columns={2}>
              {principles.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <FeatureTile icon={item.icon} title={item.title} description={item.body} />
                </motion.div>
              ))}
            </FeatureGrid>
          </div>
        </div>
      </SectionContainer>

      <hr className="section-divider mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16" />

      {/* Leadership */}
      <SectionContainer fullHeight={false}>
        <div className="relative py-16 md:py-24">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end"
            >
              <div>
                <span className="eyebrow mb-4">Leadership</span>
                <h2 className="display-xl mt-4 text-white">Executive<br /><span className="text-gradient">profiles</span></h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/55 md:text-base md:text-right">
                Direct access to decision-makers across strategy, production, technical delivery, and client outcomes.
              </p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {leadershipProfiles.map((member, index) => (
                <motion.article
                  key={member.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group narrative-surface relative overflow-hidden rounded-[1.75rem] p-4"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-white/[0.035]">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.jobTitle} at ZTEC Group`}
                      fill
                      sizes="(min-width: 1280px) 280px, (min-width: 640px) 45vw, 92vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>
                  <div className="relative px-1 pt-5">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-primary/78">{member.jobTitle}</p>
                    <h3 className="mt-2 text-xl font-semibold leading-tight text-white/94">{member.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">{member.shortBio}</p>
                    <Link
                      href={`/leadership/${member.slug}`}
                      className="mt-5 inline-flex text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      View profile →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer fullHeight={false}>
        <div className="relative overflow-hidden py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(240,180,79,0.12),transparent_60%)]" />
          <div className="mx-auto max-w-[1320px] px-5 text-center sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-3xl"
            >
              <span className="eyebrow mb-6 justify-center">Partner with ZTEC</span>
              <h2 className="display-xl mt-4 text-white">
                Strategy, brand, technology.<br /><span className="text-gradient">Moving together.</span>
              </h2>
              <p className="measure mx-auto mt-6 text-base leading-8 text-white/60">
                When you need communication, content, software, and commercial execution to align, ZTEC Group delivers them as one coordinated system.
              </p>
              <div className="mt-10">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Start a Conversation
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
