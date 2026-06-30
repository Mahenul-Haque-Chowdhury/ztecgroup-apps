"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useReducedMotion, useSpring } from "motion/react";

interface CounterProps {
  /** Numeric target. Non-numeric prefix/suffix are passed separately. */
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  duration?: number;
}

/** Counts up from 0 to `to` once it scrolls into view. Respects reduced motion. */
export function Counter({ to, prefix = "", suffix = "", decimals = 0, className = "", duration = 1.7 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (!inView) return;
    if (shouldReduceMotion) {
      setDisplay(to);
      return;
    }
    mv.set(to);
  }, [inView, to, shouldReduceMotion, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(v));
    return () => unsub();
  }, [spring]);

  const formatted = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
