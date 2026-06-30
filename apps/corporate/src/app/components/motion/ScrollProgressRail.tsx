"use client";

import { motion, useScroll, useSpring } from "motion/react";
import type { RefObject } from "react";

interface ScrollProgressRailProps {
  /** Element whose scroll progress drives the rail. */
  target: RefObject<HTMLElement | null>;
  /** Optional small labels rendered alongside the rail. */
  labels?: string[];
  className?: string;
}

/**
 * Thin vertical progress rail (left gutter) that fills as the target section
 * scrolls through the viewport. Premium "you are here" wayfinding.
 */
export function ScrollProgressRail({ target, labels = [], className = "" }: ScrollProgressRailProps) {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end end"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div className={`pointer-events-none flex flex-col items-center ${className}`} aria-hidden>
      <div className="relative h-full w-px overflow-hidden rounded-full bg-white/10">
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute inset-0 bg-gradient-to-b from-primary via-accent to-primary/40"
        />
      </div>
      {labels.length > 0 ? (
        <div className="mt-4 flex flex-col gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
          {labels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
