"use client";

import { leadershipProfiles } from "@ztecgroup/content";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { SectionContainer } from "../components/SectionContainer";
import { Button } from "../components/Button";

const operatingPillars = [
  "Communication systems",
  "Content production",
  "Software infrastructure",
  "STRA consultation",
];

const principles = [
  {
    title: "One group, four specialist lanes",
    body: "Clients work with a connected leadership team instead of disconnected vendors.",
  },
  {
    title: "Executive direction stays close",
    body: "Strategy, delivery, production, and systems decisions stay aligned from kickoff to launch.",
  },
  {
    title: "Built for measurable execution",
    body: "Every engagement is shaped around practical delivery, operating clarity, and long-term lift.",
  },
];

export function About() {
  return (
    <div className="relative pt-24">
      <SectionContainer fullHeight={false}>
        <div className="relative overflow-hidden py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(127,211,255,0.15),transparent_36%),radial-gradient(circle_at_76%_18%,rgba(240,180,79,0.13),transparent_34%)]" />
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16"
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(36rem,1.12fr)_0.88fr] lg:items-end">
              <div>
                <div className="narrative-surface mb-6 inline-flex rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/70">
                  About ZTEC Group
                </div>
                <h1 className="max-w-4xl text-[clamp(2.1rem,5vw,4.25rem)] font-semibold leading-[1.04] tracking-tight xl:text-[4.5rem]">
                  One leadership structure for connected digital delivery.
                </h1>
              </div>
              <div className="narrative-surface rounded-[2rem] p-5 sm:p-6">
                <p className="text-base leading-relaxed text-white/66 md:text-lg">
                  Founded in 2019, ZTEC Group brings communication, content, software, and STRA consultation into one coordinated operating model.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {operatingPillars.map((pillar) => (
                    <span key={pillar} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.1em] text-white/62">
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      <SectionContainer fullHeight={false}>
        <div className="relative pb-14 md:pb-20">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
            <div className="narrative-surface narrative-grid-overlay overflow-hidden rounded-[2rem]">
              <div className="relative z-10 grid gap-px bg-white/8 md:grid-cols-3">
                {principles.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-[#070a12]/88 p-6 sm:p-7"
                  >
                    <div className="mb-5 text-[11px] uppercase tracking-[0.18em] text-primary/75">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h2 className="text-xl font-semibold leading-tight text-white/92">{item.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-white/58">{item.body}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer fullHeight={false}>
        <div className="relative py-14 md:py-20">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10 md:mb-12"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-primary/80">Leadership</p>
              <div className="grid gap-5 md:grid-cols-[0.75fr_1.25fr] md:items-end">
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">Executive profiles</h2>
                <p className="max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
                  The directors keep strategic direction, production standards, technical delivery, and client outcomes aligned across the group.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
                      sizes="(min-width: 1280px) 280px, (min-width: 768px) 45vw, 92vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/8 to-transparent" />
                  </div>
                  <div className="relative px-1 pt-5">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-primary/78">{member.jobTitle}</p>
                    <h3 className="mt-2 text-xl font-semibold leading-tight text-white/94">{member.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/58">{member.shortBio}</p>
                    <Link href={`/leadership/${member.slug}`} className="mt-5 inline-flex text-sm font-medium text-primary transition-colors hover:text-primary/80">
                      View profile
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

          </div>
        </div>
      </SectionContainer>

      <SectionContainer fullHeight={false}>
        <div className="relative border-y border-white/5 py-14 md:py-20">
          <div className="mx-auto max-w-[1320px] px-5 text-center sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-3xl"
            >
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">Built for integrated growth</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60">
                Partner with ZTEC Group when strategy, brand, technology, and commercial execution need to move together.
              </p>
              <div className="mt-8">
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
