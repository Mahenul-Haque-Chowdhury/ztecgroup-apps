"use client";

import { serviceLinks as enterpriseServiceLinks } from "@ztecgroup/content";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Lock, Menu, ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";

const serviceDomainLinks = {
  communication: enterpriseServiceLinks.find((service) => service.slug === "communication")?.url ?? "https://communication.ztecgroup.au",
  content: enterpriseServiceLinks.find((service) => service.slug === "content")?.url ?? "https://contentstudio.ztecgroup.au",
  software: enterpriseServiceLinks.find((service) => service.slug === "software")?.url ?? "https://software.ztecgroup.au",
  revenue: enterpriseServiceLinks.find((service) => service.slug === "revenue")?.url ?? "https://hospitality.ztecgroup.au",
} as const;

const serviceLinks = [
  { path: serviceDomainLinks.communication, key: "communication", label: "ZTEC Communications", branches: ["Anonymous Communication Gateway, Scan2Call & more."], logoSrc: "/communication.svg", logoAlt: "ZTEC Communication - Anonymous Communication Gateway logo" },
  { path: serviceDomainLinks.content, key: "content", label: "ZTEC Content Studio", branches: ["Video & Motion Content Studio, Video Editing, Cinematic Production & more"], logoSrc: "/contentstudio.svg", logoAlt: "ZTEC Content Studio - Video & Motion Content Studio logo" },
  { path: serviceDomainLinks.software, key: "software", label: "ZTEC Software Lab", branches: ["Software & Business Systems, Web Design, Mobile App, E-commerce & more"], logoSrc: "/software.svg", logoAlt: "ZTEC Software Lab - Software & Business Systems logo" },
  { path: serviceDomainLinks.revenue, key: "revenue", label: "ZTEC STRA & Hospitality Management", branches: ["STRA Management Consultation, Property Renting Consultation"], logoSrc: "/hospitality.svg", logoAlt: "ZTEC Hospitality Management Consultation - STRA Management Consultation logo" },
];

const primaryLinks = [
  { path: "/", label: "Gateway" },
  { path: "/contact", label: "Contact" },
];

const activeServiceKey = "communication";

function NavItem({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link href={href} className="group relative px-1 py-2 text-[13px] tracking-wide text-white/65 transition-colors hover:text-white">
      <span className={active ? "text-white" : ""}>{label}</span>
      <span
        className={`absolute -bottom-px left-0 h-px w-full origin-left bg-gradient-to-r from-[#79d7ff] to-[#2ed7c4] transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
      />
    </Link>
  );
}

/**
 * Communication nav: minimal "secure line" bar. Flat translucent surface with a
 * single hairline underline rule, lock/shield trust cues, and link underlines
 * that draw in (sky to teal). Restrained, privacy-forward, no pill chrome.
 */
export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    setIsServicesOpen(false);
  }, [pathname, isOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="relative bg-[rgba(7,12,22,0.7)] backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-10">
          {/* Logo */}
          <Link href="/" className="group flex shrink-0 items-center gap-2" aria-label="ZTEC Communication home">
            <motion.div whileHover={{ scale: 1.02 }} className="flex h-[2.1rem] items-center gap-0 sm:h-[2.4rem] lg:h-[2.7rem]">
              <div className="-translate-y-0.5 flex h-[78%] w-[3.1rem] items-center self-center overflow-hidden sm:w-[3.6rem] sm:-translate-y-0.5 lg:w-[4.1rem] lg:-translate-y-1">
                <Image src="/communication.svg" alt="ZTEC Communication" width={248} height={56} sizes="(max-width: 640px) 132px, (max-width: 1024px) 156px, 190px" priority loading="eager" className="h-full w-auto max-w-none origin-left scale-[1.78] object-contain" />
              </div>
              <div className="-ml-2 translate-y-1 flex h-[86%] w-[5.7rem] items-center self-center overflow-hidden sm:-ml-2.5 sm:w-[6.6rem] sm:translate-y-1 lg:-ml-3 lg:w-[8rem] lg:translate-y-[0.3rem]">
                <Image src="/ztecgroup-logo.svg" alt="ZTEC Group" width={376} height={56} sizes="(max-width: 640px) 228px, (max-width: 1024px) 264px, 320px" loading="eager" className="h-full w-auto max-w-none origin-left scale-[3] object-contain opacity-100 brightness-125 contrast-125" />
              </div>
            </motion.div>
          </Link>

          {/* Desktop nav (centered) */}
          <div className="hidden items-center gap-7 lg:flex">
            <NavItem href="/" label="Gateway" active={pathname === "/"} />

            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button
                type="button"
                onClick={() => setIsServicesOpen((p) => !p)}
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
                className="group relative inline-flex items-center gap-1 px-1 py-2 text-[13px] tracking-wide text-white/65 transition-colors hover:text-white"
              >
                <span className={isServicesOpen ? "text-white" : ""}>Services</span>
                <ChevronDown size={13} className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                <span className={`absolute -bottom-px left-0 h-px w-full origin-left bg-gradient-to-r from-[#79d7ff] to-[#2ed7c4] transition-transform duration-300 ${isServicesOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-1/2 top-[calc(100%+1rem)] z-40 w-[min(94vw,42rem)] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#080f1a] shadow-[0_26px_60px_rgba(4,8,20,0.62)]"
                  >
                    <div className="flex items-center gap-2 border-b border-white/8 px-5 py-2.5 text-[11px] uppercase tracking-[0.16em] text-white/40">
                      <ShieldCheck size={13} className="text-[#2ed7c4]" />
                      <span>Encrypted ecosystem</span>
                    </div>
                    <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.path}
                          href={service.path}
                          onClick={() => setIsServicesOpen(false)}
                          className={`block rounded-xl px-3 py-3 transition-colors ${activeServiceKey === service.key ? "bg-white/[0.07] text-white" : "text-white/72 hover:bg-white/[0.05] hover:text-white"}`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/8 p-1.5 ring-1 ring-white/8">
                              <Image src={service.logoSrc} alt={service.logoAlt} width={44} height={44} className="h-full w-full object-contain" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-[0.92rem] font-semibold leading-tight text-white">{service.label}</div>
                              <p className="mt-1 truncate text-[11px] text-white/45">{service.branches.slice(0, 3).join(" | ")}</p>
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
              <NavItem key={link.path} href={link.path} label={link.label} active={pathname === link.path} />
            ))}
            <a href="https://ztecgroup.au" className="text-[12px] text-white/45 transition-colors hover:text-white">ZTEC Group</a>
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#2ed7c4]/40 bg-[#2ed7c4]/12 px-4 py-2 text-[12px] uppercase tracking-[0.14em] text-[#bdf6ee] transition-colors hover:bg-[#2ed7c4]/20"
              >
                <Lock size={13} className="text-[#2ed7c4]" />
                Get Protected
              </motion.button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white lg:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((c) => !c)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {/* hairline rule */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mx-3 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#080f1a] shadow-[0_16px_40px_rgba(4,8,20,0.5)] lg:hidden"
          >
            <div className="flex max-h-[calc(100svh-5.5rem)] flex-col gap-1 overflow-y-auto overscroll-contain p-3">
              <Link href="/" onClick={() => setIsOpen(false)} className={`rounded-xl px-4 py-3 text-sm transition-colors ${pathname === "/" ? "bg-white/8 text-white" : "text-white/65 hover:bg-white/5 hover:text-white"}`}>Gateway</Link>

              <div>
                <button
                  type="button"
                  onClick={() => setIsServicesOpen((p) => !p)}
                  aria-expanded={isServicesOpen}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm text-white/65 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <span className="inline-flex items-center gap-2"><ShieldCheck size={14} className="text-[#2ed7c4]" /> Services</span>
                  <ChevronDown size={15} className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
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
                      <div className="mt-1 space-y-1 pb-1">
                        {serviceLinks.map((service) => (
                          <Link key={service.path} href={service.path} onClick={() => setIsOpen(false)} className={`block rounded-xl px-4 py-2.5 text-sm transition-colors ${activeServiceKey === service.key ? "bg-white/8 text-white" : "text-white/65 hover:bg-white/5 hover:text-white"}`}>
                            <div className="flex items-center gap-3">
                              <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/8 p-1.5">
                                <Image src={service.logoSrc} alt={service.logoAlt} width={36} height={36} className="h-full w-full object-contain" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[0.88rem] font-medium leading-snug text-white">{service.label}</div>
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
                <Link key={link.path} href={link.path} onClick={() => setIsOpen(false)} className={`rounded-xl px-4 py-3 text-sm transition-colors ${pathname === link.path ? "bg-white/8 text-white" : "text-white/65 hover:bg-white/5 hover:text-white"}`}>{link.label}</Link>
              ))}
              <a href="https://ztecgroup.au" className="rounded-xl px-4 py-3 text-sm text-white/55 transition-colors hover:bg-white/5 hover:text-white">Visit ZTEC Group</a>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-1">
                <button className="flex w-full items-center justify-center gap-2 rounded-full border border-[#2ed7c4]/40 bg-[#2ed7c4]/12 px-4 py-2.5 text-[12px] uppercase tracking-[0.14em] text-[#bdf6ee]">
                  <Lock size={13} className="text-[#2ed7c4]" /> Get Protected
                </button>
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
