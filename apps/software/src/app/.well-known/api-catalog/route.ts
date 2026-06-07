import { buildApiCatalog, jsonResponse } from "@ztecgroup/content";

export function GET() {
  return jsonResponse(buildApiCatalog("software", process.env.NEXT_PUBLIC_SITE_URL), "application/linkset+json");
}
