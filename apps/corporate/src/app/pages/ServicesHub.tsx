"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Shield, Video, Code, TrendingUp, ArrowRight } from "lucide-react";
import { SectionContainer } from "../components/SectionContainer";
import { FeatureGrid } from "../components/FeatureGrid";
import { FeatureTile } from "../components/FeatureTile";
import { Button } from "../components/Button";

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

const whyItems = [
  { icon: Shield, title: "One point of contact", description: "Strategy, production, tech, and commercial decisions stay coordinated. No vendor juggling." },
  { icon: TrendingUp, title: "Outcome-first delivery", description: "Every engagement is structured around measurable results, not activity milestones." },
  { icon: Code, title: "Cross-division leverage", description: "Divisions work together. A software build can unlock a content strategy or STRA stack." },
  { icon: Video, title: "Executive-level access", description: "You work directly with decision-makers at every stage of delivery." },
];

export function ServicesHub() {
  return (
    <div className="relative pt-24">

      {/* Hero */}
      <SectionContainer fullHeight={false}>
        <div className="relative overflow-hidden py-16 md:py-28 lg:py-36">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(127,211,255,0.12),transparent)]" />
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16 text-center"
          >
            <span className="eyebrow justify-center mb-6">Our Services</span>
            <h1 className="display-2xl mt-4 text-white">
              Integrated solutions.<br /><span className="text-gradient">One operating architecture.</span>
            </h1>
            <p className="measure mx-auto mt-8 text-lg leading-8 text-white/58">
              Four specialist divisions engineered to work in synchronization. Comprehensive digital infrastructure without the coordination overhead.
            </p>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Services */}
      <div className="relative pb-16 md:pb-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
          <div className="space-y-20 md:space-y-28 lg:space-y-36">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
              >
                <Link href={service.href} className="group block">
                  <div className={`grid gap-10 lg:grid-cols-2 lg:gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>

                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                      {/* Number + tagline */}
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-6xl font-bold leading-none text-white/7 group-hover:text-white/14 transition-colors duration-500">
                          {service.number}
                        </span>
                        <span className="eyebrow">{service.tagline}</span>
                      </div>

                      <h2 className="display-lg text-white group-hover:text-white transition-colors">
                        {service.title}
                      </h2>

                      <p className="measure mt-5 text-base leading-8 text-white/58">
                        {service.description}
                      </p>

                      {/* Feature list as simple pills */}
                      <div className="mt-7 flex flex-wrap gap-2">
                        {service.features.map((f) => (
                          <span key={f.label} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-white/65">
                            {f.label}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
                        <span>Explore this division</span>
                        <ArrowRight size={15} />
                      </div>
                    </div>

                    {/* Visual */}
                    <div className={`relative ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                        {/* Glow behind image */}
                        <div className={`absolute -inset-4 bg-gradient-to-br ${service.gradient} opacity-15 blur-2xl group-hover:opacity-25 transition-opacity duration-700`} />
                        <div className="relative h-full overflow-hidden rounded-3xl bg-white/[0.03] shadow-[0_24px_56px_rgba(4,8,20,0.55),inset_0_1px_0_rgba(255,255,255,0.06)]">
                          <Image
                            src={service.imageSrc}
                            alt={service.title}
                            fill
                            sizes="(max-width: 1024px) 90vw, 45vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                          {/* Category badge on image */}
                          <div className="absolute bottom-4 left-4">
                            <span className="cinematic-panel rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/80">
                              {service.tagline}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <hr className="section-divider" />

      {/* Why ZTEC */}
      <SectionContainer fullHeight={false}>
        <div className="relative py-16 md:py-24">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-12 text-center md:mb-16"
            >
              <span className="eyebrow justify-center mb-4">Why ZTEC</span>
              <h2 className="display-xl mt-4 text-white max-w-2xl mx-auto">
                What makes the<br /><span className="text-gradient">delivery model different</span>
              </h2>
            </motion.div>
            <FeatureGrid columns={4}>
              {whyItems.map((item, i) => (
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

      {/* CTA */}
      <SectionContainer fullHeight={false}>
        <div className="relative overflow-hidden py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(240,180,79,0.12),transparent_55%)]" />
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl"
            >
              <span className="eyebrow justify-center mb-6">Get started</span>
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
            </motion.div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
