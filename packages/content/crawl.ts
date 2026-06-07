import type { MetadataRoute } from "next";
import { leadershipProfiles } from "./entities";
import { siteRoutes } from "./routes";
import { getSiteUrl, siteDefinitions, type SiteKey } from "./seo";

function isProductionSite(site: SiteKey, siteUrl?: string) {
  const expectedHost = new URL(siteDefinitions[site].host).host;

  if (!siteUrl) {
    return process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production";
  }

  return new URL(siteUrl).host === expectedHost;
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
  const routes = [...siteRoutes[site]];

  if (site === "corporate") {
    for (const profile of leadershipProfiles) {
      routes.push({
        path: `/leadership/${profile.slug}`,
        priority: 0.7,
        changeFrequency: "monthly",
      });
    }

    routes.push({ path: "/leadership", priority: 0.8, changeFrequency: "weekly" });
  }

  return routes.map((route) => ({
    url: `${metadataBase}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
