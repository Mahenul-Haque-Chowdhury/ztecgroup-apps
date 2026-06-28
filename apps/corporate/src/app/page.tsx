import type { Metadata } from "next";
import { buildFaqSchema, serializeJsonLd } from "@ztecgroup/content";
import { Home } from "./pages/Home";

export const metadata: Metadata = {
  title: {
    absolute: "ZTEC Group — Digital Services, Software & Media Company in Australia",
  },
  description:
    "ZTEC Group Pty Ltd is an Australian digital services company uniting software development, communication, content production, and hospitality consulting in one connected ecosystem.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const faqSchema = buildFaqSchema("corporate", process.env.NEXT_PUBLIC_SITE_URL);

  return (
    <>
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        />
      ) : null}
      <Home />
    </>
  );
}
