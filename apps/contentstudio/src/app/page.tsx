import type { Metadata } from "next";
import { buildFaqSchema, serializeJsonLd, siteFaqs } from "@ztecgroup/content";
import { ContentExperience } from "./components/ContentExperience";
import { Faq } from "./components/Faq";

export const metadata: Metadata = {
  title: {
    absolute: "Video Editing & Motion Content Studio in Australia | ZTEC Content Studio",
  },
  description:
    "ZTEC Content Studio is an Australian video production studio for post-production, cinematic editing, social media cutdowns, motion graphics, and brand content creation. A ZTEC Group Pty Ltd service.",
  keywords: [
    "video production studio Australia",
    "video editing studio",
    "motion graphics",
    "post-production services",
    "social media video editing",
    "brand content creation",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const faqSchema = buildFaqSchema("contentstudio", process.env.NEXT_PUBLIC_SITE_URL);

  return (
    <>
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        />
      ) : null}
      <ContentExperience />
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
          <div className="mt-14">
            <Faq items={siteFaqs.contentstudio} />
          </div>
        </div>
      </section>
    </>
  );
}
