import type { Metadata } from "next";
import { buildFaqSchema, serializeJsonLd, siteFaqs } from "@ztecgroup/content";
import { HospitalityExperience } from "./components/HospitalityExperience";

export const metadata: Metadata = {
  title: {
    absolute: "STRA & Short-Term Rental Management Consulting in Australia | ZTEC Hospitality",
  },
  description:
    "ZTEC STRA & Hospitality Management provides Australian short-term rental consulting on launch planning, compliance, pricing optimization, and occupancy for property owners. A ZTEC Group Pty Ltd service.",
  keywords: [
    "STRA consulting Australia",
    "short term rental accommodation",
    "hospitality management consultation",
    "airbnb management consulting",
    "pricing optimization",
    "occupancy strategy",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const faqSchema = buildFaqSchema("hospitality", process.env.NEXT_PUBLIC_SITE_URL);

  return (
    <>
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        />
      ) : null}
      <HospitalityExperience />
      <section
        aria-labelledby="faq-heading"
        className="relative z-10 px-5 pb-28 pt-6 sm:px-8 md:pb-36 lg:px-16"
      >
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#d8be74]/90">FAQ</span>
            <h2
              id="faq-heading"
              className="mt-5 text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.05] text-white"
              style={{ fontFamily: "var(--font-serif, 'Cormorant Garamond', 'Playfair Display', Georgia, serif)" }}
            >
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-14 space-y-5">
            {siteFaqs.hospitality.map((item) => (
              <div key={item.question} className="cinematic-panel rounded-[1.5rem] p-7 sm:p-8">
                <h3 className="text-lg font-semibold text-white sm:text-xl">{item.question}</h3>
                <p className="mt-4 text-[0.98rem] leading-7 text-white/66">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
