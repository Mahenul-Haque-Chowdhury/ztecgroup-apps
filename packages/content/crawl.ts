import type { MetadataRoute } from "next";
import { leadershipProfiles } from "./entities";
import { getIndexableRoutes } from "./routes";
import { getSiteUrl, siteDefinitions, type SiteKey } from "./seo";

function isProductionSite(site: SiteKey, siteUrl?: string) {
  // Explicit non-production deployments (e.g. Vercel preview/development) must never be indexed.
  const vercelEnv = process.env.VERCEL_ENV;
  if (vercelEnv && vercelEnv !== "production") {
    return false;
  }

  // Treat any ztecgroup.au host (apex, www, or a service subdomain) as production so a minor
  // host mismatch in NEXT_PUBLIC_SITE_URL can never accidentally block the whole site from search.
  if (siteUrl) {
    try {
      const host = new URL(siteUrl).host;
      const rootHost = new URL(siteDefinitions.corporate.host).host;
      if (host === rootHost || host.endsWith(`.${rootHost}`)) {
        return true;
      }
    } catch {
      // Fall through to environment-based detection on an unparseable URL.
    }
  }

  return vercelEnv === "production" || process.env.NODE_ENV === "production";
}

export function buildRobots(site: SiteKey, siteUrl?: string): MetadataRoute.Robots {
  const metadataBase = getSiteUrl(site, siteUrl);

  if (!isProductionSite(site, siteUrl)) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap: `${metadataBase.toString().replace(/\/$/, "")}/sitemap.xml`,
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/preview/"],
    },
    sitemap: `${metadataBase.toString().replace(/\/$/, "")}/sitemap.xml`,
    host: metadataBase.toString().replace(/\/$/, ""),
    // Content Signals are not yet typed by Next.js MetadataRoute.Robots.
    policies: {
      "Content-Signal": "ai-train=no, search=yes, ai-input=yes",
    },
  } as MetadataRoute.Robots;
}

export function buildRobotsText(site: SiteKey, siteUrl?: string) {
  const metadataBase = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");
  const lines = ["User-agent: *"];

  if (!isProductionSite(site, siteUrl)) {
    lines.push("Disallow: /");
  } else {
    lines.push("Allow: /", "Disallow: /api/", "Disallow: /preview/");
  }

  lines.push(
    "",
    "Content-Signal: ai-train=no, search=yes, ai-input=yes",
    "",
    `Sitemap: ${metadataBase}/sitemap.xml`,
    `Host: ${metadataBase}`,
    "",
  );

  return lines.join("\n");
}

export function buildSitemap(site: SiteKey, siteUrl?: string): MetadataRoute.Sitemap {
  const metadataBase = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");
  const lastModified = new Date();
  const routes = [...getIndexableRoutes(site)];

  if (site === "corporate") {
    for (const profile of leadershipProfiles) {
      routes.push({
        path: `/leadership/${profile.slug}`,
        priority: 0.7,
        changeFrequency: "monthly",
      });
    }
  }

  return routes.map((route) => ({
    url: `${metadataBase}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
