"use client";

import { serviceLinks as enterpriseServiceLinks } from "@ztecgroup/content";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
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

const serviceLinks = [
  { path: serviceDomainLinks.communication, key: "communication", label: "Anonymous Communication Gateway", branches: ["Scan2Call & more."], logoSrc: "/communication.svg", logoAlt: "Anonymous Communication Gateway logo" },
  { path: serviceDomainLinks.content, key: "content", label: "Video & Motion Content Studio", branches: ["Video Editing, Cinematic Production & more"], logoSrc: "/contentstudio.svg", logoAlt: "Video & Motion Content Studio logo" },
  { path: serviceDomainLinks.software, key: "software", label: "Software & Business Systems", branches: ["Web Design, Mobile App, E-commerce & more"], logoSrc: "/software.svg", logoAlt: "Software & Business Systems logo" },
  { path: serviceDomainLinks.revenue, key: "revenue", label: "STRA Management Consultation", branches: ["Property Renting Consultation"], logoSrc: "/hospitality.svg", logoAlt: "STRA Management Consultation logo" },
];

const primaryLinks = [
  { path: "/", label: "Gateway" },
  { path: "/contact", label: "Contact" },
  { path: "/privacy-policy", label: "Privacy" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const activeServiceKey = "communication";

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
      <GlassSurface className={`mx-auto max-w-[1440px] ${glassSurfaceClass}`}>
        <div className="flex h-14 items-center justify-between gap-2 px-3 sm:h-[4.5rem] sm:px-4 lg:pl-5 lg:pr-8">
          <Link href="/" className="group shrink-0" aria-label="ZTEC Communication home">
            <motion.div whileHover={{ scale: 1.02 }} className="flex h-[2.1rem] items-center gap-0 sm:h-[2.4rem] lg:h-[2.7rem]">
              <div className="-translate-y-0.5 flex h-[78%] w-[3.1rem] items-center self-center overflow-hidden sm:w-[3.6rem] sm:-translate-y-0.5 lg:w-[4.1rem] lg:-translate-y-1">
                <Image src="/communication.svg" alt="ZTEC Communication" width={248} height={56} sizes="(max-width: 640px) 132px, (max-width: 1024px) 156px, 190px" priority loading="eager" className="h-full w-auto max-w-none origin-left scale-[1.78] object-contain" />
              </div>
              <div className="-ml-2 translate-y-1 flex h-[86%] w-[5.7rem] items-center self-center overflow-hidden sm:-ml-2.5 sm:w-[6.6rem] sm:translate-y-1 lg:-ml-3 lg:w-[8rem] lg:translate-y-[0.3rem]">
                <Image src="/ztecgroup-logo.svg" alt="ZTEC Group" width={376} height={56} sizes="(max-width: 640px) 228px, (max-width: 1024px) 264px, 320px" loading="eager" className="h-full w-auto max-w-none origin-left scale-[3] object-contain opacity-100 brightness-125 contrast-125" />
              </div>
            </motion.div>
          </Link>

          <div className="hidden items-center gap-4 lg:flex">
            <motion.div className="relative" whileHover={{ y: -1 }} onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button type="button" onClick={() => setIsServicesOpen((previous) => !previous)} aria-haspopup="menu" aria-expanded={isServicesOpen} className="relative z-10 inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] text-white transition-colors">
                <motion.span layoutId="service-navbar-indicator" className="absolute inset-0 -z-10 rounded-full bg-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]" transition={{ type: "spring", stiffness: 320, damping: 30 }} />
                <span>Services</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <GlassSurface initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }} className={`absolute left-1/2 top-[calc(100%+1.5rem)] z-40 w-[min(94vw,52rem)] -translate-x-1/2 isolate p-6 ${solidDropdownSurfaceClass}`}>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {serviceLinks.map((service) => (
                        <Link key={service.path} href={service.path} onClick={() => setIsServicesOpen(false)} className={`block rounded-2xl px-4 py-3 transition-colors ${activeServiceKey === service.key ? "bg-white/12 text-white" : "text-white/72 hover:bg-white/8 hover:text-white"}`}>
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
            </motion.div>

            {primaryLinks.map((link) => (
              <motion.div key={link.path} className="relative" whileHover={{ y: -1 }}>
                <Link href={link.path} className={`relative z-10 inline-flex rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors ${pathname === link.path ? "text-white" : "text-white/70 hover:text-white"}`}>
                  {pathname === link.path && <motion.span layoutId="navbar-indicator" className="absolute inset-0 -z-10 rounded-full bg-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]" transition={{ type: "spring", stiffness: 320, damping: 30 }} />}
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <a href="https://ztecgroup.au" className="rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/55 transition-colors hover:text-white">ZTEC Group</a>
          </div>

          <div className="hidden lg:block">
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="rounded-full bg-[var(--brand-logo)] px-5 py-2.5 text-[var(--brand-logo-foreground)] ring-1 ring-[var(--brand-logo-ring)] shadow-[0_12px_28px_var(--brand-logo-shadow)] transition-all duration-300 hover:brightness-110">
                <span className="text-xs uppercase tracking-[0.14em]">Request Access</span>
              </motion.button>
            </Link>
          </div>

          <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden" aria-expanded={isOpen} aria-label="Toggle navigation" onClick={() => setIsOpen((current) => !current)}>
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </GlassSurface>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-[1440px] rounded-2xl bg-[#070a12] p-4 ring-1 ring-white/[0.08] shadow-[0_16px_40px_rgba(4,8,20,0.42)] lg:hidden">
          <div className="flex flex-col gap-2">
            <Link href="/" onClick={() => setIsOpen(false)} className={`rounded-full px-4 py-3 text-sm transition-colors ${pathname === "/" ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"}`}>Gateway</Link>

            <div className="space-y-3">
              <p className="px-4 pt-1 text-[11px] uppercase tracking-[0.16em] text-white/45">Services</p>
              <div className="space-y-2">
                {serviceLinks.map((service) => (
                  <Link key={service.path} href={service.path} onClick={() => setIsOpen(false)} className={`block rounded-[1.5rem] px-4 py-3 text-sm transition-colors ${activeServiceKey === service.key ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"}`}>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 p-1.5">
                        <Image src={service.logoSrc} alt={service.logoAlt} width={48} height={48} className="h-full w-full object-contain" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium leading-snug text-white">{service.label}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {primaryLinks.slice(1).map((link) => (
              <Link key={link.path} href={link.path} onClick={() => setIsOpen(false)} className={`rounded-full px-4 py-3 text-sm transition-colors ${pathname === link.path ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"}`}>{link.label}</Link>
            ))}
            <a href="https://ztecgroup.au" className="rounded-full px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white">Visit ZTEC Group</a>
          </div>
        </div>
      ) : null}
    </motion.nav>
  );
}
