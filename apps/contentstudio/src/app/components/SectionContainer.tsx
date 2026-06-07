"use client";

import { ReactNode, useRef } from "react";
import { motion } from "motion/react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export function SectionContainer({ children, className = "", fullHeight = true }: SectionContainerProps) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <motion.section
      ref={sectionRef}
      className={`relative ${fullHeight ? "min-h-[100svh] md:min-h-screen" : ""} ${className}`}
    >
      {children}
    </motion.section>
  );
}
