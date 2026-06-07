import type { Metadata } from "next";
import { About } from "../pages/About";
import { leadershipProfiles, siteDefinitions } from "@ztecgroup/content";

export const metadata: Metadata = {
  title: "About ZTEC Group | Leadership, Divisions & Digital Delivery",
  description:
    "About ZTEC Group, its four delivery divisions, and leadership profiles for Ben Chenery, Shakil Ahamed, Sayeed Hasan, and Mahenul Haque Chowdhury.",
  keywords: [
    "ZTEC Group leadership",
    "Ben Chenery",
    "Shakil Ahamed",
    "Sayeed Hasan",
    "Mahenul Haque Chowdhury",
    "ZTEC Software Lab",
    "ZTEC Content Studio",
    "ZTEC Group directors",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About ZTEC Group | Leadership, Divisions & Digital Delivery",
    description:
      "Meet ZTEC Group's leadership and learn how its communication, content, software, and STRA consultation divisions operate together.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  const leadershipItemList = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteDefinitions.corporate.host}/about/#webpage`,
    url: `${siteDefinitions.corporate.host}/about`,
    name: "About ZTEC Group",
    description: metadata.description,
    about: {
      "@type": "Organization",
      name: "ZTEC Group",
      url: siteDefinitions.corporate.host,
      employee: leadershipProfiles.map((profile) => ({
        "@type": "Person",
        "@id": `${siteDefinitions.corporate.host}/leadership/${profile.slug}/#person`,
        name: profile.name,
        jobTitle: profile.jobTitle,
        image: `${siteDefinitions.corporate.host}${profile.image}`,
        url: `${siteDefinitions.corporate.host}/leadership/${profile.slug}`,
        knowsAbout: profile.knowsAbout,
      })),
    },
    mainEntity: {
      "@type": "ItemList",
      name: "ZTEC Group leadership profiles",
      itemListElement: leadershipProfiles.map((profile, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: profile.name,
        url: `${siteDefinitions.corporate.host}/leadership/${profile.slug}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(leadershipItemList) }}
      />
      <About />
    </>
  );
}
