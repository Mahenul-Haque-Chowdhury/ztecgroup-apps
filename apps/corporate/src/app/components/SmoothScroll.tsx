"use client";

import { useEffect } from "react";
import Lenis from "lenis";

type WindowWithLenis = Window & {
  __lenis?: Lenis;
};

export function SmoothScroll() {
  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;

    const lenis = new Lenis({
      duration: isTouchDevice ? 0.88 : 1.05,
      smoothWheel: true,
      syncTouch: isTouchDevice,
      syncTouchLerp: isTouchDevice ? 0.14 : undefined,
      touchMultiplier: isTouchDevice ? 1 : 1.06,
      wheelMultiplier: isTouchDevice ? 1 : 0.9,
      autoRaf: false,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    (window as WindowWithLenis).__lenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
      htmlElement.classList.remove("lenis", "lenis-smooth", "lenis-stopped");
      bodyElement.classList.remove("lenis", "lenis-smooth", "lenis-stopped");
      delete (window as WindowWithLenis).__lenis;
    };
  }, []);

  return null;
}
