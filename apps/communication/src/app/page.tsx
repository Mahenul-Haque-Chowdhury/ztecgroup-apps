import type { Metadata } from "next";
import { buildFaqSchema, serializeJsonLd, siteFaqs } from "@ztecgroup/content";
import { CommunicationExperience } from "./components/CommunicationExperience";

export const metadata: Metadata = {
  title: {
    absolute: "Anonymous Communication Platform & Scan2Call QR Recovery | ZTEC Communications",
  },
  description:
    "ZTEC Communications provides privacy-first anonymous communication infrastructure with Scan2Call QR recovery and secure owner-finder connectivity. A ZTEC Group Pty Ltd service.",
  keywords: [
    "anonymous communication platform",
    "privacy-first contact recovery",
    "secure owner-finder communication",
    "Scan2Call",
    "QR code contact recovery",
    "encrypted messaging infrastructure",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const faqSchema = buildFaqSchema("communication", process.env.NEXT_PUBLIC_SITE_URL);

  return (
    <>
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        />
      ) : null}
      <CommunicationExperience />
      <section
        aria-labelledby="faq-heading"
        className="relative z-10 px-5 pb-28 pt-6 sm:px-8 md:pb-36 lg:px-16"
      >
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="cinematic-kicker">FAQ</span>
            <h2
              id="faq-heading"
              className="mt-7 text-[clamp(1.9rem,4.2vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white"
            >
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-14 space-y-5">
            {siteFaqs.communication.map((item) => (
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
