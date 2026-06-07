"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Mail } from "lucide-react";

export function Footer() {

  return (
    <footer className="relative mt-auto">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      
      <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-6 sm:pt-8 md:pt-10 pb-0">
        <div className="narrative-surface relative overflow-hidden rounded-t-[2rem] rounded-b-none px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="grid grid-cols-1 gap-6 mb-6 sm:gap-7 sm:mb-7 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-3 inline-flex justify-start">
              <div className="relative h-[2.6rem] w-[12rem] overflow-hidden sm:h-[2.9rem] sm:w-[13.5rem] lg:h-[3.1rem] lg:w-[14.5rem]">
                <Image
                  src="/ztecgroup-logo.svg"
                  alt="ZTEC Group"
                  fill
                  sizes="(max-width: 640px) 253px, (max-width: 1024px) 288px, 336px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-white/55 max-w-sm mb-5 text-sm leading-relaxed">
              A standalone software and systems site focused on delivery, automation, and scalable digital infrastructure from ZTEC Group.
            </p>
            <div className="mb-5 grid gap-3 text-sm sm:grid-cols-3 lg:grid-cols-1">
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/55">Email</p>
                <a
                  href="mailto:info@ztecgroup.au"
                  className="text-white/75 transition-colors hover:text-white"
                >
                  info@ztecgroup.au
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/55">Phone</p>
                <a
                  href="tel:+61451994192"
                  className="text-white/75 transition-colors hover:text-white"
                >
                  +61451994192
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/55">Address</p>
                <p className="max-w-sm leading-relaxed text-white/75">1 Silas Street, East Fremantle, Perth WA 6158</p>
              </div>
            </div>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:info@ztecgroup.au"
                className="w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:border-primary/60 hover:bg-primary/10 transition-colors"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </div>

          {/* Site */}
          <div>
            <h3 className="font-semibold mb-4 text-xs tracking-[0.18em] uppercase text-white/80">Site</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-white/50 hover:text-white transition-colors">Software & Business Systems</Link></li>
              <li><Link href="/contact" className="text-white/50 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-white/50 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-white/50 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Parent Brand */}
          <div>
            <h3 className="font-semibold mb-4 text-xs tracking-[0.18em] uppercase text-white/80">Parent Brand</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://ztecgroup.au" className="text-white/50 hover:text-white transition-colors">ZTEC Group</a></li>
              <li><a href="https://ztecgroup.au/about" className="text-white/50 hover:text-white transition-colors">About ZTEC</a></li>
              <li><a href="https://ztecgroup.au/contact" className="text-white/50 hover:text-white transition-colors">Corporate Contact</a></li>
              <li><a href="https://ztecgroup.au/services" className="text-white/50 hover:text-white transition-colors">All Services</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-xs tracking-[0.18em] uppercase text-white/80">Legal</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/privacy-policy" className="text-white/50 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-white/50 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="text-white/50 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

          {/* Bottom Bar */}
          <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © 2026 ZTEC Group Pty Ltd. All rights reserved. ABN: 82 697 931 445
          </p>
          <p className="text-white/40 text-sm">
            Designed by{" "}
            <a
              href="https://software.ztecgroup.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition-colors hover:text-white"
            >
              ZTEC Software Lab
            </a>
          </p>
        </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-background/95 to-transparent" />
    </footer>
  );
}
