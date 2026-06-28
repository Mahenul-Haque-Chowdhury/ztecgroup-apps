import { leadershipProfiles, serviceLinks, socialLinks } from "./entities";
import { siteFaqs } from "./faq";
import { getSiteUrl, siteDefinitions, type SiteKey } from "./seo";
import { getIndexableRoutes, siteRoutes } from "./routes";

type JsonLdValue = Record<string, unknown>;

export const routeLabels: Partial<Record<SiteKey, Record<string, string>>> = {
  corporate: {
    "/": "Home",
    "/about": "About ZTEC Group",
    "/contact": "Contact",
    "/portfolio": "Portfolio",
    "/resources": "Resources",
    "/leadership": "Leadership",
    "/services": "Services",
    "/services/communication": "ZTEC Communications",
    "/services/content": "ZTEC Content Studio",
    "/services/revenue": "ZTEC Hospitality",
    "/services/software": "ZTEC Software Lab",
  },
  communication: {
    "/": "ZTEC Communications",
    "/contact": "Contact",
    "/services/communication": "Anonymous Communication Gateway",
  },
  contentstudio: {
    "/": "ZTEC Content Studio",
    "/contact": "Contact",
    "/services/content": "Video & Motion Content Studio",
  },
  hospitality: {
    "/": "ZTEC Hospitality",
    "/contact": "Contact",
    "/services/revenue": "STRA Management Consultation",
  },
  software: {
    "/": "ZTEC Software Lab",
    "/contact": "Contact",
    "/portfolio": "Portfolio",
    "/quotation": "Quotation Requirements",
    "/services/software": "Software & Business Systems",
  },
};

export function serializeJsonLd(value: JsonLdValue | JsonLdValue[]) {
  return JSON.stringify(value);
}

/**
 * Real, indexable pages with human-readable labels for this site, as absolute URLs.
 * Used to drive llms.txt and agent-facing markdown so AI crawlers discover every key page
 * (e.g. the corporate About page) without listing redirect shims.
 */
export function getNavigableLinks(site: SiteKey, siteUrl?: string) {
  const base = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");
  const labels = routeLabels[site] ?? {};

  return getIndexableRoutes(site)
    .filter((route) => labels[route.path])
    .map((route) => ({
      name: labels[route.path] as string,
      url: `${base}${route.path === "/" ? "/" : route.path}`,
    }));
}

export function buildOrganizationSchema(siteUrl?: string) {
  const corporateUrl = getSiteUrl("corporate", siteUrl && siteUrl.includes("ztecgroup.au") ? siteUrl : undefined).toString().replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${corporateUrl}/#organization`,
    name: "ZTEC Group Pty Ltd",
    legalName: "ZTEC Group Pty Ltd",
    alternateName: ["ZTEC Group", "ZTEC Group Pty Ltd"],
    url: corporateUrl,
    email: "info@ztecgroup.au",
    brand: {
      "@type": "Brand",
      name: "ZTEC Group",
    },
    sameAs: [
      ...socialLinks.map((social) => social.url),
      ...leadershipProfiles.flatMap((profile) => (profile.linkedIn ? [profile.linkedIn] : [])),
    ],
    subOrganization: serviceLinks.map((service) => ({
      "@type": "Organization",
      "@id": `${service.url}/#organization`,
      name: service.label,
      url: service.url,
    })),
  };
}

export function buildWebSiteSchema(site: SiteKey, siteUrl?: string) {
  const definition = siteDefinitions[site];
  const url = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");
  const siteNavigation = buildSiteNavigationSchema(site, siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name: definition.siteName,
    alternateName: definition.name,
    url,
    description: definition.description,
    keywords: definition.keywords,
    publisher: {
      "@id": `${siteDefinitions.corporate.host}/#organization`,
    },
    potentialAction: site === "corporate"
      ? {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${url}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        }
      : undefined,
    hasPart: siteNavigation,
    inLanguage: "en-AU",
  };
}

export function buildSiteNavigationSchema(site: SiteKey, siteUrl?: string) {
  const url = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");
  const labels = routeLabels[site] ?? {};
  const routes = siteRoutes[site]
    .filter((route) => labels[route.path])
    .map((route, index) => ({
      "@type": "SiteNavigationElement",
      "@id": `${url}${route.path === "/" ? "" : route.path}/#sitelink`,
      name: labels[route.path],
      url: `${url}${route.path}`,
      position: index + 1,
    }));

  if (site === "corporate") {
    const serviceNavigation = serviceLinks.map((service, index) => ({
      "@type": "SiteNavigationElement",
      "@id": `${url}/services/${service.slug}/#sitelink`,
      name: service.label,
      description: service.description,
      url: `${url}/services/${service.slug}`,
      position: routes.length + index + 1,
    }));

    return [...routes, ...serviceNavigation];
  }

  return routes;
}

export function buildServiceSchema(site: Exclude<SiteKey, "corporate">, siteUrl?: string) {
  const definition = siteDefinitions[site];
  const url = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}/#service`,
    name: definition.name,
    serviceType: definition.name,
    url,
    keywords: definition.keywords,
    areaServed: "AU",
    provider: {
      "@id": `${siteDefinitions.corporate.host}/#organization`,
    },
    brand: {
      "@type": "Brand",
      name: definition.siteName,
      url,
    },
    description: definition.description,
    category: definition.siteName,
    isPartOf: {
      "@id": `${siteDefinitions.corporate.host}/#organization`,
    },
  };
}

export function buildFaqSchema(site: SiteKey, siteUrl?: string) {
  const items = siteFaqs[site];

  if (!items?.length) {
    return null;
  }

  const url = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}/#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildLeadershipHubSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteDefinitions.corporate.host}/leadership/#webpage`,
    name: "ZTEC Group Leadership",
    url: `${siteDefinitions.corporate.host}/leadership`,
    about: {
      "@id": `${siteDefinitions.corporate.host}/#organization`,
    },
  };
}

export function buildPersonSchema(slug: string) {
  const profile = leadershipProfiles.find((entry) => entry.slug === slug);

  if (!profile) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteDefinitions.corporate.host}/leadership/${profile.slug}/#person`,
    name: profile.name,
    jobTitle: profile.jobTitle,
    description: profile.bio,
    image: `${siteDefinitions.corporate.host}${profile.image}`,
    worksFor: {
      "@id": `${siteDefinitions.corporate.host}/#organization`,
    },
    knowsAbout: profile.knowsAbout,
    sameAs: profile.linkedIn ? [profile.linkedIn] : undefined,
    url: `${siteDefinitions.corporate.host}/leadership/${profile.slug}`,
  };
}
