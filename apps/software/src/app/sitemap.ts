import { buildSitemap } from "@ztecgroup/content";

export default function sitemap() {
  return buildSitemap("software", process.env.NEXT_PUBLIC_SITE_URL);
}