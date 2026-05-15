"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  imageSrc?: string;
  href: string;
  gradient: string;
  tags?: string[];
}

export function ServiceCard({ number, title, description, icon: Icon, imageSrc, href, gradient, tags = [] }: ServiceCardProps) {
  const previewTags = tags.slice(0, 3);

  return (
    <Link href={href} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 44, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -12, scale: 1.012 }}
        className="group relative h-full"
      >
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 via-white/[0.02] to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(10,18,31,0.96),rgba(7,14,24,0.88)_55%,rgba(14,36,52,0.82))] shadow-[0_24px_70px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:border-white/18 group-hover:shadow-[0_34px_90px_rgba(0,0,0,0.4)]">
          <span className="narrative-glint" aria-hidden />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70" />
          <div className={`absolute inset-x-0 top-0 h-44 bg-gradient-to-br ${gradient} opacity-18 blur-3xl transition-all duration-500 group-hover:opacity-28`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_24%)] opacity-80" />

          <div className="relative z-[2] flex h-full flex-col p-5 sm:p-6 lg:p-8">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="inline-flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-[0_14px_30px_rgba(15,23,42,0.32)] ring-1 ring-white/10`}>
                  <Icon size={22} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/46">Service</div>
                  <div className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/78">{number}</div>
                </div>
              </div>

              <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/58 transition-colors duration-300 group-hover:border-white/18 group-hover:text-white/76">
                Premium Delivery
              </div>
            </div>

            <div className="relative z-[2] mb-6 overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              {imageSrc ? (
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,12,22,0.04),rgba(6,12,22,0.28)_45%,rgba(6,12,22,0.74))]" />
                  <div className={`absolute inset-x-0 bottom-0 h-20 bg-gradient-to-r ${gradient} opacity-18 blur-2xl`} />
                </div>
              ) : (
                <div className="flex min-h-[180px] items-center justify-center">
                  <div className={`flex h-20 w-20 items-center justify-center rounded-[1.4rem] bg-gradient-to-br ${gradient} shadow-[0_18px_40px_rgba(15,23,42,0.36)]`}>
                    <Icon size={34} className="text-white" />
                  </div>
                </div>
              )}
            </div>

            <div className="relative z-[2] flex flex-1 flex-col">
              <h3 className="mb-3 text-[1.45rem] font-semibold leading-tight text-white/96 transition-colors duration-300 group-hover:text-white sm:text-[1.65rem]">
                {title}
              </h3>
              <p className="mb-6 max-w-[36ch] text-[0.98rem] leading-relaxed text-white/66 sm:text-[1.02rem]">
                {description}
              </p>

              {previewTags.length > 0 ? (
                <div className="mb-7 flex flex-wrap gap-2.5">
                  {previewTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/12 bg-white/[0.045] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/74 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/88"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/8 pt-5">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/44">Delivery Focus</div>
                  <div className="mt-1 text-sm text-white/74">Strategy, execution, and measurable rollout</div>
                </div>

                <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/86 transition-all duration-300 group-hover:border-white/22 group-hover:bg-white/[0.07] group-hover:text-white">
                  <span>Explore</span>
                  <span aria-hidden className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
