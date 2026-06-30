"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  tilt?: number;
}

/**
 * Glass card that tracks the cursor: a soft spotlight follows the pointer and
 * the surface tilts in 3D toward it. All transform/opacity based, disabled on
 * touch + reduced-motion. Pair with the `cinematic-panel` class for the glass.
 */
export function SpotlightCard({ children, className = "", tilt = 6 }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const glow = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });

  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${px}% ${py}%, rgba(127,211,255,0.16), transparent 60%)`;

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || event.pointerType === "touch") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    px.set(x * 100);
    py.set(y * 100);
    ry.set((x - 0.5) * tilt * 2);
    rx.set(-(y - 0.5) * tilt * 2);
  };

  const handleEnter = (event: React.PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || event.pointerType === "touch") return;
    glow.set(1);
  };

  const handleLeave = () => {
    rx.set(0);
    ry.set(0);
    glow.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={`group relative [transform-style:preserve-3d] ${className}`}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"
        style={{ background: spotlight, opacity: glow }}
      />
      <div className="relative z-[2] h-full [transform:translateZ(40px)]">{children}</div>
    </motion.div>
  );
}
