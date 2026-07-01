"use client";

import Link from "next/link";
import Image from "next/image";
import {
  motion,
  type Variants,
} from "motion/react";
import { ArrowRight, Building2, Home, KeyRound } from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import { Button } from "./Button";
import { Counter } from "./Counter";

const EASE = [0.22, 1, 0.36, 1] as const;
const SERIF = "var(--font-serif, 'Cormorant Garamond', 'Playfair Display', Georgia, 'Times New Roman', serif)";

const heroBranches = ["STRA Launch", "Listing Optimization", "Revenue Strategy", "Done-For-You"];

const stats: Array<{ value: number; suffix: string; label: string; sub: string }> = [
  { value: 90, suffix: "%+", label: "Occupancy", sub: "Achievable with the right pricing" },
  { value: 3, suffix: "×", label: "Listing reach", sub: "From optimised positioning" },
  { value: 20, suffix: " min", label: "Discovery call", sub: "Free, no obligation" },
];

const investorPoints = [
  "Feasibility first: suburb demand, competitor occupancy, and average daily rates assessed before you sign.",
  "Licensing made simple: every council permit, fire-safety, and insurance obligation mapped.",
  "Operations from day one: rosters, housekeeping checklists, and guest templates pre-built.",
  "Revenue management: dynamic nightly rates that beat the OTAs, even in low season.",
];

const homeownerPoints = [
  "Suitability assessed: space, entry, noise, and local STRA council rules reviewed.",
  "Setup without overwhelm: smart locks, photography, and listing copy that converts.",
  "Pricing that works: never too high (no bookings) or too low (losses, bad guests).",
  "House rules & launch checklist: from GST to automated messaging, done for you.",
];

const roadmap = [
  { step: "Feasibility", note: "Demand, rates, and risk assessed up front." },
  { step: "Setup", note: "Compliance, systems, and listing built." },
  { step: "Pricing", note: "Dynamic strategy to protect occupancy." },
  { step: "Launch", note: "Go live with confidence and support." },
];

const wordVariants: Variants = {
  hidden: { opacity: 0, y: "0.4em", filter: "blur(10px)" },
  show: (i: number) => ({
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE, delay: 0.25 + i * 0.09 },
  }),
};

const HEADLINE = ["Short-stay", "properties,", "run", "beautifully."];

export function HospitalityExperience() {
  return (
    <div className="relative">
      {/* Preserved hero background image + warm overlays */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[100svh] min-h-[100lvh] w-full z-0 md:inset-0 md:h-auto md:min-h-0">
        <Image
          src="/service-revenue2.jpg"
          alt="Short-Term Rental Accommodation Management"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/78" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#9cdf74] to-[#d8be74] opacity-[0.1] mix-blend-screen" />
      </div>

      <div className="relative z-10">
        {/* ───────────────────────── Hero (editorial) ───────────────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative flex min-h-[92svh] items-center px-5 pt-[calc(env(safe-area-inset-top)+8rem)] pb-20 sm:px-8 md:min-h-screen md:pt-36 lg:px-16">
            <div className="mx-auto w-full max-w-[1100px]">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[#d8be74]/70" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-[#e6d8a8]/90">
                  STRA Advisory · Short-Stay Operators
                </span>
              </motion.div>

              <h1
                className="mt-8 flex flex-wrap gap-x-[0.28em] gap-y-1 text-[clamp(1.9rem,7vw,6rem)] font-medium leading-[0.98] tracking-[-0.01em] text-white"
                style={{ fontFamily: SERIF }}
              >
                {HEADLINE.map((word, i) => {
                  const accent = word === "beautifully.";
                  return (
                    <motion.span
                      key={`${word}-${i}`}
                      custom={i}
                      variants={wordVariants}
                      initial="hidden"
                      animate="show"
                      className={`inline-block ${accent ? "text-[#d8be74] italic" : ""}`}
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.85 }}
                className="mt-8 max-w-xl text-lg leading-relaxed text-white/72"
              >
                We help owners and investors move from uncertainty to operating clarity, with practical setup, pricing, compliance, and occupancy systems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.95 }}
                className="mt-9 flex flex-wrap gap-2.5"
              >
                {heroBranches.map((branch) => (
                  <span
                    key={branch}
                    className="rounded-full border border-[#d8be74]/25 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/72"
                  >
                    {branch}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 1.05 }}
                className="mt-11 flex flex-col gap-3 sm:flex-row"
              >
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Book Free 20-min Discovery Call
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg">
                    Discuss Your Property
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </SectionContainer>

        {/* ───────────────────── Performance stats ───────────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative py-20 md:py-28">
            <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-16">
              <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] sm:grid-cols-3">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-70px" }}
                    transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                    className="bg-[#0a0f0a]/80 p-9 text-center"
                  >
                    <div
                      className="text-[clamp(2.6rem,5vw,3.8rem)] font-medium leading-none text-[#cfe7b6]"
                      style={{ fontFamily: SERIF }}
                    >
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-4 text-[12px] uppercase tracking-[0.2em] text-[#d8be74]/90">{stat.label}</div>
                    <div className="mt-2 text-sm text-white/55">{stat.sub}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* ───────────────────── Two audiences (editorial) ───────────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative py-20 md:py-28">
            <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
                className="max-w-2xl"
              >
                <span className="text-[11px] uppercase tracking-[0.24em] text-[#d8be74]/90">Who we help</span>
                <h2
                  className="mt-5 text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.05] text-white"
                  style={{ fontFamily: SERIF }}
                >
                  No five years of experience required, just a proven system.
                </h2>
              </motion.div>

              <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
                <EditorialColumn
                  icon={Building2}
                  eyebrow="For Investors"
                  title="Boutique motels & multi-unit"
                  points={investorPoints}
                />
                <EditorialColumn
                  icon={Home}
                  eyebrow="For Homeowners"
                  title="Your house, as an Airbnb"
                  points={homeownerPoints}
                />
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* ───────────────────── Roadmap ───────────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative py-20 md:py-28">
            <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
                className="text-center"
              >
                <span className="text-[11px] uppercase tracking-[0.24em] text-[#d8be74]/90">The roadmap</span>
                <h2
                  className="mt-5 text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.05] text-white"
                  style={{ fontFamily: SERIF }}
                >
                  From first idea to first guest
                </h2>
              </motion.div>

              <div className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
                {roadmap.map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, ease: EASE, delay: i * 0.09 }}
                    className="bg-[#0a0f0a]/80 p-8"
                  >
                    <div
                      className="text-4xl font-medium text-[#d8be74]/80"
                      style={{ fontFamily: SERIF }}
                    >
                      0{i + 1}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">{item.step}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{item.note}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* ───────────────────────── CTA ───────────────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative overflow-hidden py-24 md:py-36">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#9cdf74] to-[#d8be74] opacity-[0.05] blur-3xl" />
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8"
            >
              <KeyRound className="mx-auto mb-7 text-[#d8be74]" size={32} />
              <h2
                className="text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.05] text-white"
                style={{ fontFamily: SERIF }}
              >
                Open confidently. Operate profitably.
              </h2>
              <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-white/65">
                Tell us about your property and we'll tell you exactly what steps come next.
              </p>
              <div className="mt-11 flex justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Book a 20-minute Consultation
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

function EditorialColumn({
  icon: Icon,
  eyebrow,
  title,
  points,
}: {
  icon: typeof Building2;
  eyebrow: string;
  title: string;
  points: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, ease: EASE }}
    >
      <div className="flex items-center gap-3 border-b border-white/10 pb-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8be74]/30 bg-[#d8be74]/[0.08]">
          <Icon className="text-[#e6d8a8]" size={20} />
        </span>
        <div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#d8be74]/90">{eyebrow}</div>
          <div className="text-lg font-semibold text-white">{title}</div>
        </div>
      </div>
      <ul className="mt-7 space-y-5">
        {points.map((point) => (
          <li key={point} className="flex gap-4">
            <ArrowRight className="mt-1 flex-shrink-0 text-[#9cdf74]/80" size={16} />
            <span className="text-[0.98rem] leading-relaxed text-white/68">{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
