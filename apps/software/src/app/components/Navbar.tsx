"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { path: "/", label: "Systems" },
  { path: "/contact", label: "Contact" },
  { path: "/privacy-policy", label: "Privacy" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4 lg:px-8"
    >
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between rounded-2xl bg-[rgba(7,10,18,0.72)] px-3 ring-1 ring-white/[0.08] shadow-[0_16px_40px_rgba(4,8,20,0.42)] backdrop-blur-xl sm:h-[4.5rem] sm:px-4 lg:pl-5 lg:pr-8">
        <Link href="/" className="group shrink-0" aria-label="ZTEC Software home">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex h-[2.2rem] w-[10rem] items-center sm:h-[2.7rem] sm:w-[12rem] lg:h-[3.1rem] lg:w-[14.6rem]"
          >
            <Image
              src="/ztecgroup.png"
              alt="ZTEC Software"
              width={186}
              height={42}
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 234px"
              priority
              loading="eager"
              className="h-full w-auto object-contain"
            />
          </motion.div>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors ${
                pathname === link.path ? "bg-white/10 text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://ztecgroup.au"
            className="rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/55 transition-colors hover:text-white"
          >
            ZTEC Group
          </a>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl bg-[var(--brand-logo)] px-5 py-2.5 text-[var(--brand-logo-foreground)] ring-1 ring-[var(--brand-logo-ring)] shadow-[0_12px_28px_var(--brand-logo-shadow)] transition-all duration-300 hover:brightness-110"
            >
              <span className="text-xs uppercase tracking-[0.14em]">Book a Discovery Call</span>
            </motion.button>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-[1440px] rounded-2xl bg-[#070a12] p-4 ring-1 ring-white/[0.08] shadow-[0_16px_40px_rgba(4,8,20,0.42)] lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
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
            <a
              href="https://ztecgroup.au"
              className="rounded-xl px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              Visit ZTEC Group
            </a>
          </div>
        </div>
      ) : null}
    </motion.nav>
  );
}

