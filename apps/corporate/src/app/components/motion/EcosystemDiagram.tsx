"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { LucideIcon } from "lucide-react";

export interface EcosystemNode {
  label: string;
  number: string;
  tagline: string;
  href: string;
  logoSrc: string;
  icon: LucideIcon;
  accent: string; // tailwind gradient e.g. "from-blue-500 to-cyan-500"
}

interface EcosystemDiagramProps {
  nodes: EcosystemNode[];
  className?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Signature corporate visual: a central "ZTEC Group" core with the four
 * specialist divisions arranged around it, connected by lines that draw in and
 * pulse. Communicates "one operating architecture, four divisions".
 * Lines/pulse are gated on reduced motion.
 */
export function EcosystemDiagram({ nodes, className = "" }: EcosystemDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const coreScale = useTransform(scrollYProgress, [0, 1], [0.82, 1]);

  // Connector endpoints (percent coords) toward the 4 corners.
  const corners = [
    { x: "10%", y: "22%" },
    { x: "90%", y: "22%" },
    { x: "10%", y: "80%" },
    { x: "90%", y: "80%" },
  ];

  return (
    <div ref={ref} className={`relative mx-auto w-full max-w-[1440px] ${className}`}>
      <div className="relative aspect-[0.85/1] sm:aspect-[2.15/1]">
        {/* faint radial grid backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.35] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(circle_at_center,#000_0%,transparent_72%)]"
        />

        {/* connecting lines */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="eco-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7fd3ff" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#f0b44f" stopOpacity="0.65" />
            </linearGradient>
            <filter id="eco-line-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {corners.map((c, i) => (
            <g key={i}>
              {/* soft underlay for depth */}
              <motion.line
                x1="50"
                y1="50"
                x2={c.x.replace("%", "")}
                y2={c.y.replace("%", "")}
                stroke="url(#eco-line)"
                strokeWidth="0.9"
                strokeOpacity="0.15"
                strokeLinecap="round"
                filter="url(#eco-line-glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1, ease: EASE, delay: 0.2 + i * 0.12 }}
              />
              <motion.line
                x1="50"
                y1="50"
                x2={c.x.replace("%", "")}
                y2={c.y.replace("%", "")}
                stroke="url(#eco-line)"
                strokeWidth="0.35"
                strokeLinecap="round"
                strokeDasharray="0.2 2.2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.25 + i * 0.12 }}
              />
            </g>
          ))}
        </svg>

        {/* traveling pulses along the lines */}
        {!shouldReduceMotion &&
          corners.map((c, i) => (
            <motion.span
              key={`pulse-${i}`}
              aria-hidden
              className="absolute h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(127,211,255,0.9)]"
              initial={{ left: "50%", top: "50%", opacity: 0 }}
              animate={{ left: ["50%", c.x], top: ["50%", c.y], opacity: [0, 1, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1 + i * 0.5 }}
            />
          ))}

        {/* central core */}
        <motion.div
          style={{ scale: shouldReduceMotion ? 1 : coreScale }}
          className="absolute left-1/2 top-1/2 z-[2] flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/[0.14] bg-[radial-gradient(circle_at_50%_38%,rgba(240,180,79,0.22),rgba(9,13,22,0.94)_68%)] shadow-[0_30px_70px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md sm:h-44 sm:w-44"
        >
          {/* soft ambient glow */}
          <span className="absolute inset-0 -z-10 animate-pulse rounded-full bg-primary/12 blur-3xl" />
          {/* slow rotating conic aura ring */}
          {!shouldReduceMotion && (
            <motion.span
              aria-hidden
              className="absolute -inset-[3px] -z-[5] rounded-full opacity-45 blur-[2px] [background:conic-gradient(from_0deg,transparent,rgba(240,180,79,0.55),transparent_38%,rgba(127,211,255,0.5),transparent_72%)] [mask:radial-gradient(circle,transparent_62%,#000_64%)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />
          )}
          {/* crisp inner rim */}
          <span aria-hidden className="pointer-events-none absolute inset-[6px] rounded-full ring-1 ring-inset ring-white/[0.08]" />
          {/* fine dotted orbit ring */}
          <span aria-hidden className="pointer-events-none absolute inset-[14px] rounded-full border border-dashed border-white/[0.08]" />
          <span className="text-sm font-semibold uppercase tracking-[0.34em] text-white/62 sm:text-base">ZTEC</span>
          <span className="font-display text-2xl font-bold leading-none tracking-tight text-white sm:text-[2rem]">Group</span>
          <span className="mt-2 h-px w-10 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        {/* division nodes */}
        {nodes.slice(0, 4).map((node, i) => {
          const pos = corners[i];
          return (
            <motion.a
              key={node.label}
              href={node.href}
              target="_blank"
              rel="noopener"
              className="group absolute z-[3] flex w-[19rem] -translate-x-1/2 -translate-y-1/2 flex-col gap-3 rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.07),rgba(10,14,22,0.96)_60%)] p-4 shadow-[0_24px_54px_rgba(4,8,20,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-500 hover:-translate-y-[calc(50%+3px)] hover:border-white/25 hover:shadow-[0_30px_64px_rgba(4,8,20,0.65)] sm:w-[23rem] sm:p-6"
              style={{ left: pos.x, top: pos.y }}
              initial={{ opacity: 0, scale: 0.9, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.5 + i * 0.12 }}
            >
              {/* accent tint wash */}
              <span className={`pointer-events-none absolute inset-0 -z-10 rounded-[1.4rem] bg-gradient-to-br ${node.accent} opacity-[0.08] transition-opacity duration-500 group-hover:opacity-[0.16]`} />
              {/* soft accent bloom */}
              <span className={`pointer-events-none absolute -inset-3 -z-20 rounded-[1.8rem] bg-gradient-to-br ${node.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`} />

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.16em] text-white/25 transition-colors duration-500 group-hover:text-white/45">
                  {node.number}/04
                </span>
                <span className={`h-px flex-1 ml-3 bg-gradient-to-r ${node.accent} opacity-25 transition-opacity duration-500 group-hover:opacity-55`} />
              </div>

              <div className="flex items-center gap-3.5">
                <span className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] sm:h-[4.5rem] sm:w-[4.5rem]">
                  <span className={`absolute inset-0 bg-gradient-to-br ${node.accent} opacity-20`} />
                  <Image src={node.logoSrc} alt={node.label} width={56} height={56} className="relative h-10 w-10 object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] sm:h-12 sm:w-12" />
                </span>
                <span className="min-w-0 text-lg font-semibold uppercase leading-[1.1] tracking-[0.02em] text-white/85 transition-colors group-hover:text-white sm:text-xl">
                  {node.label}
                </span>
              </div>

              <p className="text-[11.5px] leading-snug text-white/48 transition-colors duration-500 group-hover:text-white/62 sm:text-xs">
                {node.tagline}
              </p>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
