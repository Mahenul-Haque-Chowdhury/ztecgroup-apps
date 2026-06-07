import { buildOAuthProtectedResource, jsonResponse } from "@ztecgroup/content";

export function GET() {
  return jsonResponse(buildOAuthProtectedResource("software", process.env.NEXT_PUBLIC_SITE_URL));
}
