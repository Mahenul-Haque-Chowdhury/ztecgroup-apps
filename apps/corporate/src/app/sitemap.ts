import { buildSitemap } from "@ztecgroup/content";

export default function sitemap() {
  return buildSitemap("corporate", process.env.NEXT_PUBLIC_SITE_URL);
}