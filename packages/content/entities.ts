import type { SiteKey } from "./seo";

export type ServiceLink = {
  slug: string;
  site: SiteKey;
  label: string;
  description: string;
  url: string;
};

export type LeadershipProfile = {
  slug: string;
  name: string;
  jobTitle: string;
  division: string;
  shortBio: string;
  bio: string;
  image: string;
  linkedIn?: string;
  worksFor: SiteKey[];
  knowsAbout: string[];
};

export type SocialLink = {
  platform: "linkedin" | "facebook";
  label: string;
  url: string;
};

/** Official ZTEC Group social profiles. Used for footer links and Organization schema sameAs. */
export const socialLinks: SocialLink[] = [
  {
    platform: "linkedin",
    label: "ZTEC Group on LinkedIn",
    url: "https://www.linkedin.com/company/117544016/",
  },
  {
    platform: "facebook",
    label: "ZTEC Group on Facebook",
    url: "https://www.facebook.com/profile.php?id=61590654996152",
  },
];

export const serviceLinks: ServiceLink[] = [
  {
    slug: "communication",
    site: "communication",
    label: "ZTEC Communications",
    description: "Anonymous communication gateway, privacy-first reporting, and operational trust systems.",
    url: "https://communication.ztecgroup.au",
  },
  {
    slug: "content",
    site: "contentstudio",
    label: "ZTEC Content Studio",
    description: "Video, motion, post-production, and platform-ready content systems.",
    url: "https://contentstudio.ztecgroup.au",
  },
  {
    slug: "software",
    site: "software",
    label: "ZTEC Software Lab",
    description: "Software systems, automation, and digital infrastructure for scalable operations.",
    url: "https://software.ztecgroup.au",
  },
  {
    slug: "revenue",
    site: "hospitality",
    label: "ZTEC STRA & Hospitality Management Consultation Service",
    description: "STRA and hospitality strategy, setup, optimization, and operating consultation.",
    url: "https://hospitality.ztecgroup.au",
  },
];

export const leadershipProfiles: LeadershipProfile[] = [
  {
    slug: "ben-chenery",
    name: "Ben Chenery",
    jobTitle: "Director",
    division: "Executive Leadership",
    shortBio: "Guides group direction, strategic partnerships, and long-horizon business growth across the ZTEC portfolio.",
    bio: "Ben Chenery provides strategic direction across ZTEC Group, connecting executive planning, partnerships, and long-horizon growth decisions across the corporate ecosystem.",
    image: "/Ben_Chenery_Director_of_ZTEC_Group.jpeg",
    worksFor: ["corporate"],
    knowsAbout: ["Executive strategy", "Partnership development", "Business growth", "Corporate leadership"],
  },
  {
    slug: "shakil-ahamed",
    name: "Shakil Ahamed",
    jobTitle: "Director",
    division: "Operations & Delivery",
    shortBio: "Oversees cross-functional coordination and keeps execution aligned across service lines, timelines, and client outcomes.",
    bio: "Shakil Ahamed oversees operating discipline across ZTEC Group, aligning cross-functional delivery, timelines, and client outcomes across multiple service lines.",
    image: "/Shakil Ahamed_Director_of_ZTEC_Group_Pty.jpeg",
    worksFor: ["corporate"],
    knowsAbout: ["Operations", "Delivery leadership", "Cross-functional coordination", "Client outcomes"],
  },
  {
    slug: "sayeed-hasan",
    name: "Sayeed Hasan",
    jobTitle: "Director of Content Studio",
    division: "Narrative & Production",
    shortBio: "Leads the content studio with a focus on brand storytelling, production systems, and commercially effective media output.",
    bio: "Sayeed Hasan leads ZTEC Content Studio, shaping brand storytelling, production systems, and creative delivery designed for commercially effective media performance.",
    image: "/Director_of_ZTEC_Content_Studio_Sayeed_Hasan.jpeg",
    worksFor: ["corporate", "contentstudio"],
    knowsAbout: ["Brand storytelling", "Video production", "Motion content", "Creative systems"],
  },
  {
    slug: "mahenul-haque-chowdhury",
    name: "Mahenul Haque Chowdhury",
    jobTitle: "Director of Software Lab",
    division: "Systems & Product",
    shortBio: "Drives software lab delivery, product architecture, and the technical systems that support scalable digital operations.",
    bio: "Mahenul Haque Chowdhury leads ZTEC Software Lab, directing software delivery, product architecture, and the technical systems that enable scalable digital operations.",
    image: "/mahenul haque chowdhury Director_of_ZTEC_Software_Lab.jpg",
    worksFor: ["corporate", "software"],
    knowsAbout: ["Product architecture", "Software delivery", "Automation", "Digital systems"],
  },
];

export function getLeadershipProfile(slug: string) {
  return leadershipProfiles.find((profile) => profile.slug === slug);
}
