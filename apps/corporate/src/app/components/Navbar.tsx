"use client";

import { serviceLinks as enterpriseServiceLinks } from "@ztecgroup/content";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ChevronDown, Code, Menu, Shield, TrendingUp, Video, X } from "lucide-react";
import { useEffect, useState } from "react";

const GlassSurface = motion.div;
const glassSurfaceClass = "rounded-2xl bg-[rgba(7,10,18,0.58)] ring-1 ring-white/[0.08] shadow-[0_16px_40px_rgba(4,8,20,0.42)] backdrop-blur-xl";
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
    { path: "/leadership", label: "Leadership" },
    { path: "/resources", label: "Resources" },
  ];

  const serviceLinks = [
    {
      path: serviceDomainLinks.communication,
      label: "Anonymous Communication Gateway",
      description: "",
      branches: ["Scan2Call & more."],
      icon: Shield,
    },
    {
      path: serviceDomainLinks.content,
      label: "Video & Motion Content Studio",
      description: "",
      branches: ["Video Editing, Cinemetic Production & more"],
      icon: Video,
    },
    {
      path: serviceDomainLinks.software,
      label: "Software & Business Systems",
      description: "",
      branches: ["Web Design, Mobile App, E-commerce & more"],
      icon: Code,
    },
    {
      path: serviceDomainLinks.revenue,
      label: "STRA Management Consultation",
      description: "",
      branches: ["Property Renting Consultation"],
      icon: TrendingUp,
    },
  ];

  const isServiceRoute = pathname.startsWith("/services/");

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
      <GlassSurface className={`max-w-[1440px] mx-auto ${glassSurfaceClass}`}>
        <div className="flex h-14 items-center justify-between gap-2 pl-3 pr-2 sm:h-[4.5rem] sm:px-4 lg:pl-5 lg:pr-8">
          {/* Logo */}
          <Link href="/" className="group min-w-0 shrink" aria-label="ZTEC Group home">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex h-[2.9rem] w-[11.4rem] items-center sm:h-[3.15rem] sm:w-[13rem] lg:h-[7.4rem] lg:w-[32rem]"
            >
              <div className="flex h-[88%] w-[100%] items-center overflow-hidden sm:h-[92%] lg:h-full">
                <Image
                  src="/ztecgroup-logo.svg"
                  alt="ZTEC Group"
                  width={420}
                  height={95}
                  sizes="(max-width: 640px) 182px, (max-width: 1024px) 208px, 488px"
                  priority
                  loading="eager"
                  className="translate-y-0.5 h-full w-auto max-w-none origin-left scale-[2.9] object-contain sm:translate-y-0.5 sm:scale-[3.15] lg:translate-y-0 lg:scale-100"
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.div className="relative" whileHover={{ y: -1 }}>
              <Link
                href="/"
                className={`relative z-10 inline-flex rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors ${
                  pathname === "/" ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {pathname === "/" && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                Home
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              whileHover={{ y: -1 }}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen((previous) => !previous)}
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
                className={`relative z-10 inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors ${
                  isServiceRoute ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {isServiceRoute && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                <span>Services</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                />
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
                          className={`block rounded-2xl px-4 py-3 transition-colors ${
                            pathname === "/services/communication" && service.path === serviceDomainLinks.communication ||
                            pathname === "/services/content" && service.path === serviceDomainLinks.content ||
                            pathname === "/services/software" && service.path === serviceDomainLinks.software ||
                            pathname === "/services/revenue" && service.path === serviceDomainLinks.revenue
                              ? "bg-white/12 text-white"
                              : "text-white/72 hover:bg-white/8 hover:text-white"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/80">
                              <service.icon size={16} />
                            </div>
                            <div className="min-w-0">
                              <div className="text-[0.95rem] font-semibold leading-tight text-white">{service.label}</div>
                              {service.description ? (
                                <p className="mt-1 text-sm leading-snug text-white/58">{service.description}</p>
                              ) : null}
                              <p className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-[11px] uppercase tracking-[0.08em] text-white/45">
                                {service.branches.slice(0, 3).join(" | ")} {service.branches.length > 3 ? `| +${service.branches.length - 3} more` : ""}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </GlassSurface>
                )}
              </AnimatePresence>
            </motion.div>

            {primaryLinks.slice(1).map((link) => (
              <motion.div key={link.path} className="relative" whileHover={{ y: -1 }}>
                <Link
                  href={link.path}
                  className={`relative z-10 inline-flex rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors ${
                    pathname === link.path ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {pathname === link.path && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2.5 rounded-xl bg-[var(--brand-logo)] text-[var(--brand-logo-foreground)] ring-1 ring-[var(--brand-logo-ring)] shadow-[0_12px_28px_var(--brand-logo-shadow)] transition-all duration-300 hover:brightness-110"
              >
                <span className="text-xs tracking-[0.14em] uppercase">Get Started</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
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
      {isOpen && (
        <div className="mx-auto mt-3 max-w-[1440px] rounded-2xl bg-[#070a12] p-4 ring-1 ring-white/[0.08] shadow-[0_16px_40px_rgba(4,8,20,0.42)] lg:hidden">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm transition-colors ${
                pathname === "/" ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              Home
            </Link>

            <div className="space-y-3">
              <p className="px-4 pt-1 text-[11px] uppercase tracking-[0.16em] text-white/45">Services</p>
              <div className="space-y-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm transition-colors ${
                      pathname === "/services/communication" && service.path === serviceDomainLinks.communication ||
                      pathname === "/services/content" && service.path === serviceDomainLinks.content ||
                      pathname === "/services/software" && service.path === serviceDomainLinks.software ||
                      pathname === "/services/revenue" && service.path === serviceDomainLinks.revenue
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/80">
                        <service.icon size={14} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium leading-snug text-white">{service.label}</div>
                        {service.description ? (
                          <p className="mt-1 text-xs leading-snug text-white/55">{service.description}</p>
                        ) : null}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {primaryLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm transition-colors ${
                  pathname === link.path ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full rounded-xl bg-primary px-6 py-3 text-primary-foreground ring-1 ring-primary/35">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
}

