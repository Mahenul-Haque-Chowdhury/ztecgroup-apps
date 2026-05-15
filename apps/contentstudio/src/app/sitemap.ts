import { buildSitemap } from "@ztecgroup/content";

export default function sitemap() {
  return buildSitemap("contentstudio", process.env.NEXT_PUBLIC_SITE_URL);
}