import { leadershipProfiles, serviceLinks } from "./entities";
import { getSiteUrl, siteDefinitions, type SiteKey } from "./seo";

type JsonLdValue = Record<string, unknown>;

export function serializeJsonLd(value: JsonLdValue | JsonLdValue[]) {
  return JSON.stringify(value);
}

export function buildOrganizationSchema(siteUrl?: string) {
  const corporateUrl = getSiteUrl("corporate", siteUrl && siteUrl.includes("ztecgroup.au") ? siteUrl : undefined).toString().replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${corporateUrl}/#organization`,
    name: "ZTEC Group Pty Ltd",
    alternateName: "ZTEC Group",
    url: corporateUrl,
    email: "info@ztecgroup.au",
    sameAs: leadershipProfiles.flatMap((profile) => profile.linkedIn ? [profile.linkedIn] : []),
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
    inLanguage: "en-AU",
  };
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