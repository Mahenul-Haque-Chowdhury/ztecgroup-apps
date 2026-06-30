"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { LucideIcon } from "lucide-react";

export interface EcosystemNode {
  label: string;
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
    { x: "20%", y: "18%" },
    { x: "80%", y: "18%" },
    { x: "20%", y: "82%" },
    { x: "80%", y: "82%" },
  ];

  return (
    <div ref={ref} className={`relative mx-auto w-full max-w-[820px] ${className}`}>
      <div className="relative aspect-square sm:aspect-[1.35/1]">
        {/* connecting lines */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="eco-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7fd3ff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#f0b44f" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {corners.map((c, i) => (
            <motion.line
              key={i}
              x1="50"
              y1="50"
              x2={c.x.replace("%", "")}
              y2={c.y.replace("%", "")}
              stroke="url(#eco-line)"
              strokeWidth="0.4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 + i * 0.12 }}
            />
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
          className="absolute left-1/2 top-1/2 z-[2] flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/12 bg-[radial-gradient(circle,rgba(240,180,79,0.18),rgba(7,10,18,0.9))] backdrop-blur-sm sm:h-36 sm:w-36"
        >
          <span className="absolute inset-0 -z-10 animate-pulse rounded-full bg-primary/10 blur-2xl" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/55">ZTEC</span>
          <span className="font-display text-lg font-bold tracking-tight text-white sm:text-2xl">Group</span>
          <span className="mt-1 h-px w-8 bg-gradient-to-r from-transparent via-primary to-transparent" />
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
              className="group absolute z-[3] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
              style={{ left: pos.x, top: pos.y }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.5 + i * 0.12 }}
              whileHover={{ scale: 1.06 }}
            >
              <span
                className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${node.accent} shadow-[0_18px_38px_rgba(4,8,20,0.5)] ring-1 ring-white/15 sm:h-20 sm:w-20`}
              >
                <span className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60" style={{ background: "inherit" }} />
                <Image src={node.logoSrc} alt={node.label} width={44} height={44} className="h-9 w-9 object-contain sm:h-11 sm:w-11" />
              </span>
              <span className="max-w-[9rem] text-center text-[10px] font-medium uppercase tracking-[0.12em] text-white/65 transition-colors group-hover:text-white sm:text-[11px]">
                {node.label}
              </span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
