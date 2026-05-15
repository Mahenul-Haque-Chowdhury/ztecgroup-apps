"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SectionContainer } from "../components/SectionContainer";
import { Target, Zap, Shield, Users } from "lucide-react";
import { Button } from "../components/Button";

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    description: "Every system we build is architected with meticulous attention to detail and performance."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We push boundaries and leverage cutting-edge technology to deliver competitive advantages."
  },
  {
    icon: Shield,
    title: "Security by Design",
    description: "Privacy and security are foundational principles, not afterthoughts."
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We become an extension of your team, invested in your long-term success."
  }
];

const executiveTeamMembers = [
  {
    id: 1,
    name: "Ben Chenery",
    designation: "Director",
    division: "Executive Leadership",
    shortBio: "Guides group direction, strategic partnerships, and long-horizon business growth across the ZTEC portfolio.",
  },
  {
    id: 2,
    name: "Shakil Ahamed",
    designation: "Director",
    division: "Operations & Delivery",
    shortBio: "Oversees cross-functional coordination and keeps execution aligned across service lines, timelines, and client outcomes.",
  },
  {
    id: 3,
    name: "Sayeed Hasan",
    designation: "Director of Content Studio",
    division: "Narrative & Production",
    shortBio: "Leads the content studio with a focus on brand storytelling, production systems, and commercially effective media output.",
  },
  {
    id: 4,
    name: "Mahenul Haque Chowdhury",
    designation: "Director of Software Lab",
    division: "Systems & Product",
    shortBio: "Drives software lab delivery, product architecture, and the technical systems that support scalable digital operations.",
  },
];

export function About() {
  return (
    <div className="relative pt-24">
      <SectionContainer fullHeight={false}>
        <div className="relative pt-12 pb-8 md:pt-20 md:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16"
          >
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="mb-8 text-[clamp(1.9rem,5vw,4.2rem)] font-bold leading-[1.1]">
                About ZTEC Group
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                We design and deliver integrated digital infrastructure across communication, content,
                software systems, and revenue services so organizations can scale with one trusted partner.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      <SectionContainer fullHeight={false}>
        <div className="relative pt-2 pb-12 md:pt-4 md:pb-14">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="cinematic-panel rounded-3xl p-6 sm:p-8 md:p-10"
            >
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">Unified Solutions, Single Partner</h2>
                  <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/65">
                    ZTEC Group was founded in 2019 to replace fragmented outsourcing with a more deliberate operating model. Rather than
                    splitting communication, production, software, and growth work across disconnected vendors, clients partner with one
                    leadership team and one integrated group structure.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-white/55">
                    That foundation still shapes how we work today: executive-level thinking, disciplined delivery, and specialist teams that
                    move in sync from strategy through execution.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] p-5 shadow-[0_24px_80px_rgba(4,10,24,0.28)]">
                    <div className="text-[clamp(2.75rem,5vw,4.5rem)] font-bold leading-none text-white/92">2019</div>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/60">Founded</p>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/58">
                      Built to unify strategic direction with real delivery across four specialist business units.
                    </p>
                  </div>
                  {[
                    "Communication, content, software, and STRA expertise operating inside one group ecosystem.",
                    "Executive involvement stays close to delivery so decisions remain fast, informed, and accountable.",
                    "Every engagement is designed for durable systems, sharper brand presence, and measurable business lift.",
                  ].map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl bg-white/6 p-4 text-sm leading-relaxed text-white/65 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer fullHeight={false}>
        <div className="relative pb-12 md:pb-16">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-10 md:mb-12"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.26em] text-primary/80">Leadership</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Executive Leadership</h2>
              <p className="text-base md:text-lg text-white/62 max-w-3xl mx-auto">
                Four executives shape the direction of ZTEC Group, keeping strategy, production, and technical delivery aligned at every stage.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {executiveTeamMembers.map((member, index) => (
                <motion.article
                  key={member.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group cinematic-panel relative overflow-hidden rounded-[1.75rem] p-5 sm:p-6"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,180,79,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative mb-5 overflow-hidden rounded-[1.4rem] border border-white/12 bg-[linear-gradient(160deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <div className="aspect-[4/5] w-full rounded-[1rem] border border-dashed border-white/12 bg-[radial-gradient(circle_at_top,rgba(240,180,79,0.16),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-5 py-6">
                      <div className="flex h-full flex-col justify-between">
                        <div className="flex items-start justify-between gap-3">
                          <span className="rounded-full border border-white/14 bg-white/8 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/70">
                            {member.division}
                          </span>
                          <span className="text-[10px] uppercase tracking-[0.22em] text-white/35">Portrait</span>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">Image Placeholder</p>
                          <p className="mt-2 max-w-[11rem] text-sm leading-relaxed text-white/52">
                            Reserved for executive portrait artwork.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary/80">{member.designation}</p>
                    <h3 className="mt-2 text-xl font-semibold leading-tight text-white/92 sm:text-2xl">{member.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/62">{member.shortBio}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer fullHeight={false}>
        <div className="relative py-16 md:py-20 border-y border-white/5">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">What Drives Us</h2>
              <p className="text-lg text-white/60 max-w-3xl mx-auto">
                Core values behind every strategy, build, and optimization cycle.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="cinematic-panel rounded-2xl p-6 transition-all duration-300 hover:border-white/25"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/7 text-white/85 mb-5">
                    <value.icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer fullHeight={false}>
        <div className="relative py-16 md:py-20">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Work</h2>
              <p className="text-lg text-white/60">A simple, repeatable operating model built for execution speed.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  number: "01",
                  title: "Discover",
                  description: "We map your business goals, technical constraints, and growth priorities into a clear implementation path.",
                },
                {
                  number: "02",
                  title: "Build & Launch",
                  description: "Our teams deliver strategy and production in sync, so your roadmap moves quickly into market-ready execution.",
                },
                {
                  number: "03",
                  title: "Optimize",
                  description: "After launch, we track performance and refine systems continuously to protect long-term outcomes.",
                },
              ].map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="cinematic-panel rounded-2xl p-6"
                >
                  <div className="text-4xl font-bold text-white/20 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer fullHeight={false}>
        <div className="relative py-16 md:py-20 border-y border-white/5">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Built For Integrated Growth</h2>
              <p className="text-lg text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
                The group is structured to keep brand, technology, and commercial execution connected instead of siloed.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "2019", label: "Founded" },
                  { value: "4", label: "Executive Leaders" },
                  { value: "4", label: "Core Verticals" },
                  { value: "1", label: "Unified Group Vision" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="cinematic-panel rounded-2xl p-6"
                  >
                    <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer fullHeight={false}>
        <div className="relative py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8">Join Leading Organizations</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 mb-10 md:mb-12">
              Partner with ZTEC Group to build digital infrastructure that supports long-term growth.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Start a Conversation
              </Button>
            </Link>
          </motion.div>
        </div>
      </SectionContainer>
    </div>
  );
}
