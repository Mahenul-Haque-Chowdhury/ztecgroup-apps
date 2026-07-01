"use client";

import { serviceLinks as enterpriseServiceLinks } from "@ztecgroup/content";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const GlassSurface = motion.div;
const glassSurfaceClass = "rounded-full bg-[rgba(7,10,18,0.58)] ring-1 ring-white/[0.08] shadow-[0_16px_40px_rgba(4,8,20,0.42)] backdrop-blur-xl";
const solidDropdownSurfaceClass = "rounded-2xl bg-[#070a12] ring-1 ring-white/[0.14] shadow-[0_26px_60px_rgba(4,8,20,0.62)]";

const serviceDomainLinks = {
  communication: enterpriseServiceLinks.find((service) => service.slug === "communication")?.url ?? "https://communication.ztecgroup.au",
  content: enterpriseServiceLinks.find((service) => service.slug === "content")?.url ?? "https://contentstudio.ztecgroup.au",
  software: enterpriseServiceLinks.find((service) => service.slug === "software")?.url ?? "https://software.ztecgroup.au",
  revenue: enterpriseServiceLinks.find((service) => service.slug === "revenue")?.url ?? "https://hospitality.ztecgroup.au",
} as const;

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const primaryLinks = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "About us" },
    { path: "/resources", label: "Resources" },
  ];

  const serviceLinks = [
    {
      path: serviceDomainLinks.communication,
      label: "ZTEC Communications",
      branches: ["Anonymous Communication Gateway, Scan2Call & more."],
      logoSrc: "/communication.svg",
      logoAlt: "ZTEC Communication - Anonymous Communication Gateway logo",
    },
    {
      path: serviceDomainLinks.content,
      label: "ZTEC Content Studio",
      branches: ["Video & Motion Content Studio, Video Editing, Cinematic Production & more"],
      logoSrc: "/contentstudio.svg",
      logoAlt: "ZTEC Content Studio - Video & Motion Content Studio logo",
    },
    {
      path: serviceDomainLinks.software,
      label: "ZTEC Software Lab",
      branches: ["Software & Business Systems, Web Design, Mobile App, E-commerce & more"],
      logoSrc: "/software.svg",
      logoAlt: "ZTEC Software Lab - Software & Business Systems logo",
    },
    {
      path: serviceDomainLinks.revenue,
      label: "ZTEC STRA & Hospitality Management",
      branches: ["STRA Management Consultation, Property Renting Consultation"],
      logoSrc: "/hospitality.svg",
      logoAlt: "ZTEC Hospitality Management Consultation - STRA Management Consultation logo",
    },
  ];

  useEffect(() => {
    setIsServicesOpen(false);
  }, [pathname, isOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4 lg:px-8"
    >
      <GlassSurface className={`relative max-w-[1440px] mx-auto ${glassSurfaceClass}`}>
        <div className="relative flex h-14 items-center justify-between gap-2 pl-3 pr-2 sm:h-[4.5rem] sm:px-4 lg:pl-5 lg:pr-8">
          {/* Logo */}
          <Link href="/" className="group min-w-0 shrink" aria-label="ZTEC Group home">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex h-[2.35rem] w-[10rem] items-center sm:h-[2.7rem] sm:w-[12rem] lg:h-[4.45rem] lg:w-[20rem]"
            >
              <div className="flex h-[88%] w-[100%] items-center overflow-hidden sm:h-[92%] lg:h-full">
                <Image
                  src="/ztecgroup-logo.svg"
                  alt="ZTEC Group"
                  width={420}
                  height={95}
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 320px"
                  priority
                  loading="eager"
                  className="translate-y-0.5 h-full w-auto max-w-none origin-left scale-[2.7] object-contain sm:translate-y-1 sm:scale-[3.0] lg:translate-y-[0.2rem] lg:scale-[1.3]"
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation: centered rail */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 items-center lg:flex">
            <div className="pointer-events-auto flex items-center gap-1">
              <Link
                href="/"
                className="group relative px-3 py-2 text-xs uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
              >
                <span className={pathname === "/" ? "text-white" : ""}>Home</span>
                <span className={`absolute -bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${pathname === "/" ? "w-5" : "w-0 group-hover:w-5"}`} />
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsServicesOpen((previous) => !previous)}
                  aria-haspopup="menu"
                  aria-expanded={isServicesOpen}
                  className="group relative inline-flex items-center gap-1 px-3 py-2 text-xs uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
                >
                  <span className={isServicesOpen ? "text-white" : ""}>Services</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                  <span className={`absolute -bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${isServicesOpen ? "w-5" : "w-0 group-hover:w-5"}`} />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <GlassSurface
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className={`absolute left-1/2 top-[calc(100%+1.5rem)] z-40 w-[min(94vw,52rem)] -translate-x-1/2 isolate p-6 ${solidDropdownSurfaceClass}`}
                    >
                      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.path}
                            href={service.path}
                            onClick={() => setIsServicesOpen(false)}
                            className="block rounded-2xl px-4 py-3 text-white/72 transition-colors hover:bg-white/8 hover:text-white"
                          >
                            <div className="flex items-start gap-3">
                              <div className="mt-0.5 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 p-1.5">
                                <Image src={service.logoSrc} alt={service.logoAlt} width={56} height={56} className="h-full w-full object-contain" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[0.95rem] font-semibold leading-tight text-white">{service.label}</div>
                                <p className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-[11px] uppercase tracking-[0.08em] text-white/45">{service.branches.slice(0, 3).join(" | ")}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </GlassSurface>
                  )}
                </AnimatePresence>
              </div>

              {primaryLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="group relative px-3 py-2 text-xs uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
                >
                  <span className={pathname === link.path ? "text-white" : ""}>{link.label}</span>
                  <span className={`absolute -bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${pathname === link.path ? "w-5" : "w-0 group-hover:w-5"}`} />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-[var(--brand-logo)] px-5 py-2.5 text-[var(--brand-logo-foreground)] ring-1 ring-[var(--brand-logo-ring)] shadow-[0_12px_28px_var(--brand-logo-shadow)] transition-all duration-300 hover:brightness-110"
              >
                <span className="text-xs tracking-[0.14em] uppercase">Get Started</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </GlassSurface>

      <div className="max-w-[1440px] mx-auto px-1 sm:px-2">
        <motion.div
          className="h-[2px] origin-left rounded-full bg-gradient-to-r from-transparent via-primary/90 to-transparent"
          style={{ scaleX }}
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 max-w-[1440px] overflow-hidden rounded-2xl bg-[#070a12] ring-1 ring-white/[0.08] shadow-[0_16px_40px_rgba(4,8,20,0.42)] lg:hidden"
          >
            <div className="flex max-h-[calc(100svh-6.5rem)] flex-col gap-2 overflow-y-auto overscroll-contain p-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`rounded-full px-4 py-3 text-sm transition-colors ${
                  pathname === "/" ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                Home
              </Link>

              {/* Services accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsServicesOpen((previous) => !previous)}
                  aria-expanded={isServicesOpen}
                  className="flex w-full items-center justify-between rounded-full px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <span className="text-[11px] uppercase tracking-[0.16em] text-white/55">Services</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isServicesOpen && (
                    <motion.div
                      key="mobile-services"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-1 space-y-1.5 pb-1">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.path}
                            href={service.path}
                            onClick={() => setIsOpen(false)}
                            className="block rounded-[1.25rem] px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                          >
                            <div className="flex items-center gap-3">
                              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 p-1.5">
                                <Image src={service.logoSrc} alt={service.logoAlt} width={40} height={40} className="h-full w-full object-contain" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[0.9rem] font-medium leading-snug text-white">{service.label}</div>
                                <p className="mt-0.5 truncate text-[11px] leading-snug text-white/50">{service.branches.slice(0, 3).join(" | ")}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {primaryLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-full px-4 py-3 text-sm transition-colors ${
                    pathname === link.path ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-1">
                <button className="w-full rounded-full bg-primary px-6 py-3 text-primary-foreground ring-1 ring-primary/35">
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
