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
      
      <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-10 sm:pt-14 md:pt-16 pb-0">
        <div className="cinematic-panel relative overflow-hidden rounded-t-3xl rounded-b-none p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="grid grid-cols-1 gap-8 mb-9 sm:gap-10 sm:mb-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-5 inline-flex justify-start">
              <div className="relative h-[3.6rem] w-[15.8rem] overflow-hidden sm:h-[4.1rem] sm:w-[18rem] lg:h-[4.8rem] lg:w-[21rem]">
                <Image
                  src="/ztecgroup-logo.svg"
                  alt="ZTEC Group"
                  fill
                  sizes="(max-width: 640px) 253px, (max-width: 1024px) 288px, 336px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-white/55 max-w-sm mb-8 leading-relaxed">
              Privacy-first communication infrastructure and anonymous recovery workflows delivered as a focused ZTEC service site.
            </p>
            <div className="mb-8 space-y-4 text-sm">
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
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:info@ztecgroup.au"
                className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:border-primary/60 hover:bg-primary/10 transition-colors"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </div>

          {/* Site */}
          <div>
            <h3 className="font-semibold mb-6 text-xs tracking-[0.18em] uppercase text-white/80">Site</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/50 hover:text-white transition-colors">Anonymous Communication Gateway</Link></li>
              <li><Link href="/contact" className="text-white/50 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-white/50 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-white/50 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Parent Brand */}
          <div>
            <h3 className="font-semibold mb-6 text-xs tracking-[0.18em] uppercase text-white/80">Parent Brand</h3>
            <ul className="space-y-4">
              <li><a href="https://ztecgroup.au" className="text-white/50 hover:text-white transition-colors">ZTEC Group</a></li>
              <li><a href="https://ztecgroup.au/about" className="text-white/50 hover:text-white transition-colors">About ZTEC</a></li>
              <li><a href="https://ztecgroup.au/contact" className="text-white/50 hover:text-white transition-colors">Corporate Contact</a></li>
              <li><a href="https://ztecgroup.au/services" className="text-white/50 hover:text-white transition-colors">All Services</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-6 text-xs tracking-[0.18em] uppercase text-white/80">Legal</h3>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="text-white/50 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-white/50 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="text-white/50 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
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

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-background/95 to-transparent" />
    </footer>
  );
}
