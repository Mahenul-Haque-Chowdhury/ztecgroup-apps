import type { Metadata } from "next";
import { buildFaqSchema, serializeJsonLd, siteFaqs } from "@ztecgroup/content";
import { ServiceDetail } from "./pages/ServiceDetail";

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
      <ServiceDetail serviceId="content" />
      <section aria-labelledby="faq-heading" className="relative px-5 pb-24 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <h2 id="faq-heading" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {siteFaqs.contentstudio.map((item) => (
              <div key={item.question} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-medium text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
