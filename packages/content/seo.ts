import type { Metadata } from "next";

export type SiteKey = "corporate" | "communication" | "contentstudio" | "hospitality" | "software";

type SiteDefinition = {
  key: SiteKey;
  name: string;
  legalName: string;
  siteName: string;
  applicationName: string;
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  host: string;
  type: "website";
};

const sharedIcons: NonNullable<Metadata["icons"]> = {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
    { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
    { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
  ],
  apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  shortcut: [{ url: "/favicon.ico" }],
};

export const siteDefinitions: Record<SiteKey, SiteDefinition> = {
  corporate: {
    key: "corporate",
    name: "ZTEC Group",
    legalName: "ZTEC Group Pty Ltd",
    siteName: "ZTEC Group",
    applicationName: "ZTEC Group",
    defaultTitle: "ZTEC Group - Unified Ecosystem of Digital Services",
    titleTemplate: "%s | ZTEC Group - Unified Ecosystem of Digital Services",
    description:
      "ZTEC Group connects advanced digital systems, communication, and media into one seamless solution platform.",
    keywords: [
      "digital services Australia",
      "enterprise technology solutions",
      "software and communication services",
      "media production services",
      "ZTEC Group Pty Ltd",
    ],
    host: "https://ztecgroup.au",
    type: "website",
  },
  communication: {
    key: "communication",
    name: "ZTEC Communications",
    legalName: "ZTEC Group Pty Ltd",
    siteName: "ZTEC Communications",
    applicationName: "ZTEC Communications",
    defaultTitle: "ZTEC Communications - A service of ZTEC Group Pty Ltd.",
    titleTemplate: "%s | ZTEC Communications - A service of ZTEC Group Pty Ltd.",
    description:
      "ZTEC Communications provides privacy-first anonymous communication infrastructure with Scan2Call recovery and secure owner-finder connectivity. ZTEC Group Pty Ltd.",
    keywords: [
      "anonymous communication platform",
      "privacy-first contact recovery",
      "secure owner-finder communication",
      "Scan2Call",
      "encrypted messaging infrastructure",
    ],
    host: "https://communication.ztecgroup.au",
    type: "website",
  },
  contentstudio: {
    key: "contentstudio",
    name: "ZTEC Content Studio",
    legalName: "ZTEC Group Pty Ltd",
    siteName: "ZTEC Content Studio",
    applicationName: "ZTEC Content Studio",
    defaultTitle: "ZTEC Content Studio - A service of ZTEC Group Pty Ltd.",
    titleTemplate: "%s | ZTEC Content Studio - A service of ZTEC Group Pty Ltd.",
    description:
      "ZTEC Content Studio specializes in post-production, cinematic editing, social media cutdowns, and motion content creation for brands. A ZTEC Group Pty Ltd service.",
    keywords: [
      "video editing studio",
      "motion graphics",
      "post-production services",
      "social media video editing",
      "brand content creation",
    ],
    host: "https://contentstudio.ztecgroup.au",
    type: "website",
  },
  hospitality: {
    key: "hospitality",
    name: "ZTEC STRA & Hospitality Management Consultation Service",
    legalName: "ZTEC Group Pty Ltd",
    siteName: "ZTEC Hospitality",
    applicationName: "ZTEC Hospitality",
    defaultTitle: "ZTEC STRA & Hospitality Management Consultation Service - A service of ZTEC Group Pty Ltd.",
    titleTemplate: "%s | ZTEC STRA & Hospitality Management Consultation Service - A service of ZTEC Group Pty Ltd.",
    description:
      "ZTEC STRA & Hospitality Management provides expert consultation on launch planning, compliance, pricing optimization, and occupancy for property owners. ZTEC Group Pty Ltd.",
    keywords: [
      "STRA consulting",
      "short term rental accommodation",
      "hospitality management consultation",
      "pricing optimization",
      "occupancy strategy",
    ],
    host: "https://hospitality.ztecgroup.au",
    type: "website",
  },
  software: {
    key: "software",
    name: "ZTEC Software Lab",
    legalName: "ZTEC Group Pty Ltd",
    siteName: "ZTEC Software Lab",
    applicationName: "ZTEC Software Lab",
    defaultTitle: "ZTEC Software Lab - A service of ZTEC Group Pty Ltd.",
    titleTemplate: "%s | ZTEC Software Lab - A service of ZTEC Group Pty Ltd.",
    description:
      "ZTEC Software Lab delivers custom software engineering, process automation, and business systems architecture for enterprise operations. A ZTEC Group Pty Ltd service.",
    keywords: [
      "custom software development",
      "business process automation",
      "enterprise software architecture",
      "cloud systems",
      "API integration",
    ],
    host: "https://software.ztecgroup.au",
    type: "website",
  },
};

export function getSiteUrl(site: SiteKey, siteUrl?: string): URL {
  return new URL(siteUrl ?? siteDefinitions[site].host);
}

export function buildSiteMetadata(site: SiteKey, overrides: Partial<Metadata> = {}, siteUrl?: string): Metadata {
  const definition = siteDefinitions[site];
  const metadataBase = getSiteUrl(site, siteUrl);

  return {
    metadataBase,
    applicationName: definition.applicationName,
    title: {
      default: definition.defaultTitle,
      template: definition.titleTemplate,
    },
    description: definition.description,
    keywords: definition.keywords,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: definition.type,
      url: metadataBase,
      siteName: definition.siteName,
      title: definition.defaultTitle,
      description: definition.description,
      locale: "en_AU",
    },
    twitter: {
      card: "summary_large_image",
      title: definition.defaultTitle,
      description: definition.description,
    },
    manifest: "/site.webmanifest",
    icons: sharedIcons,
    other: {
      "msapplication-TileColor": "#070a12",
      "msapplication-config": "/browserconfig.xml",
    },
    ...overrides,
  };
}