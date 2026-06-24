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
  iconPath: string;
  type: "website";
};

export const siteDefinitions: Record<SiteKey, SiteDefinition> = {
  corporate: {
    key: "corporate",
    name: "ZTEC Group",
    legalName: "ZTEC Group Pty Ltd",
    siteName: "ZTEC Group",
    applicationName: "ZTEC Group",
    defaultTitle: "ZTEC Group Pty Ltd - Unified Ecosystem of Digital Services",
    titleTemplate: "%s | ZTEC Group Pty Ltd - Unified Ecosystem of Digital Services",
    description:
      "ZTEC Group Pty Ltd connects advanced digital systems, communication, and media into one seamless solution platform.",
    keywords: [
      "ZTEC Group",
      "ZTEC Group Pty Ltd",
      "digital services Australia",
      "digital transformation company Australia",
      "enterprise technology solutions",
      "business systems consulting",
      "software development company Australia",
      "communications solutions Australia",
      "content production services Australia",
      "hospitality consulting Australia",
      "software and communication services",
      "media production services",
      "enterprise service ecosystem",
    ],
    host: "https://ztecgroup.au",
    iconPath: "/ztecgroup-logo.svg",
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
      "ZTEC Communications",
      "anonymous communication platform",
      "anonymous contact solution",
      "lost and found communication system",
      "privacy-first contact recovery",
      "secure owner-finder communication",
      "Scan2Call",
      "encrypted messaging infrastructure",
      "QR code contact recovery",
      "private contact relay service",
    ],
    host: "https://communication.ztecgroup.au",
    iconPath: "/communication.svg",
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
      "ZTEC Content Studio",
      "video production studio Australia",
      "video editing studio",
      "motion graphics",
      "post-production services",
      "social media video editing",
      "brand content creation",
      "commercial video editing",
      "motion design studio",
      "content production services",
    ],
    host: "https://contentstudio.ztecgroup.au",
    iconPath: "/contentstudio.svg",
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
      "ZTEC Hospitality",
      "STRA consulting",
      "short term rental accommodation",
      "hospitality management consultation",
      "pricing optimization",
      "occupancy strategy",
      "airbnb management consulting",
      "holiday rental revenue management",
      "hospitality operations consulting",
    ],
    host: "https://hospitality.ztecgroup.au",
    iconPath: "/hospitality.svg",
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
      "ZTEC Software Lab",
      "custom software development",
      "software development company Australia",
      "business process automation",
      "enterprise software architecture",
      "cloud systems",
      "API integration",
      "custom web application development",
      "business systems integration",
      "workflow automation services",
    ],
    host: "https://software.ztecgroup.au",
    iconPath: "/software.svg",
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
    category: definition.name,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: definition.type,
      siteName: definition.siteName,
      title: definition.defaultTitle,
      description: definition.description,
      locale: "en_AU",
      images: [
        {
          url: "/hero-bg.png",
          width: 1200,
          height: 630,
          alt: `${definition.siteName} brand preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: definition.defaultTitle,
      description: definition.description,
      images: ["/hero-bg.png"],
    },
    manifest: "/site.webmanifest",
    icons: {
      icon: [{ url: definition.iconPath, type: "image/svg+xml", sizes: "any" }],
      shortcut: [definition.iconPath],
    },
    other: {
      "msapplication-TileColor": "#070a12",
      "classification": definition.name,
    },
    ...overrides,
  };
}
