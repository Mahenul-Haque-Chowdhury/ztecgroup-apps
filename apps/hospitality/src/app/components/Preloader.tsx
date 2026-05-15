"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const DISPLAY_MS = 720;
const REDUCED_MOTION_MS = 180;

export function Preloader() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const hideTimerRef = useRef<number | null>(null);

  useEffect(() => {
    setIsVisible(true);

    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current);
    }

    hideTimerRef.current = window.setTimeout(() => {
      setIsVisible(false);
      hideTimerRef.current = null;
    }, shouldReduceMotion ? REDUCED_MOTION_MS : DISPLAY_MS);

    return () => {
      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    };
  }, [pathname, shouldReduceMotion]);

  return (
    <AnimatePresence initial={false} mode="wait">
      {isVisible ? (
        <motion.div
          key={pathname ?? "initial"}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.12 : 0.24, ease: [0.22, 1, 0.36, 1] }}
          aria-live="polite"
          aria-label="Hospitality page loading"
        >
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92, y: 10 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: -8 }}
            transition={{ duration: shouldReduceMotion ? 0.12 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-[6rem] w-[16rem] items-center justify-center sm:h-[7rem] sm:w-[18.5rem] lg:h-[8rem] lg:w-[21.5rem]"
          >
            <Image
              src="/hospitality.svg"
              alt="ZTEC Hospitality"
              width={344}
              height={118}
              priority
              sizes="(max-width: 640px) 256px, (max-width: 1024px) 296px, 344px"
              className="h-full w-auto object-contain"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}