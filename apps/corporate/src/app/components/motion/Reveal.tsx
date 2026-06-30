"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Entrance distance in px. */
  y?: number;
  blur?: boolean;
  as?: "div" | "li" | "article" | "section" | "span";
  once?: boolean;
}

/**
 * Consistent staggered scroll-reveal wrapper used across the corporate
 * redesign so every section shares one entrance language (blur + rise).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
  blur = true,
  as = "div",
  once = true,
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y, filter: blur ? "blur(10px)" : "blur(0px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: EASE, delay },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-70px" }}
      variants={variants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
