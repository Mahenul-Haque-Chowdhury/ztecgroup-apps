import { buildSitemap } from "@ztecgroup/content";

export default function sitemap() {
  return buildSitemap("communication", process.env.NEXT_PUBLIC_SITE_URL);
}