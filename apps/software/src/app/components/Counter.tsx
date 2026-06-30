"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useReducedMotion, useSpring } from "motion/react";

interface CounterProps {
  to: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

/** Counts up from 0 to `to` once it scrolls into view. */
export function Counter({ to, suffix = "", prefix = "", className = "", duration = 1.6 }: CounterProps) {
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
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return () => unsub();
  }, [spring]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
