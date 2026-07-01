"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
  className?: string;
}

export function Faq({ items, className = "" }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            style={{
              backgroundImage: isOpen
                ? "linear-gradient(112deg,color-mix(in srgb,var(--primary) 9%,transparent),color-mix(in srgb,var(--primary) 2%,transparent)),linear-gradient(112deg,rgba(44,51,62,0.96),rgba(33,39,49,0.95))"
                : "linear-gradient(112deg,color-mix(in srgb,var(--primary) 6%,transparent),transparent 62%),linear-gradient(112deg,rgba(31,37,47,0.94),rgba(24,29,37,0.93))",
            }}
            className={`overflow-hidden rounded-[1.35rem] border transition-all duration-300 ${
              isOpen ? "border-white/20" : "border-white/12 hover:border-white/20"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
            >
              <span className="text-base font-semibold text-white sm:text-lg">{item.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/65"
              >
                <Plus size={16} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[62ch] px-6 pb-6 text-sm leading-7 text-white/62 sm:px-7">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
