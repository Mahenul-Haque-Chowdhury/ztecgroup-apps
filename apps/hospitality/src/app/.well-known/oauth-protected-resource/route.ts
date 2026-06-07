import { buildOAuthProtectedResource, jsonResponse } from "@ztecgroup/content";

export function GET() {
  return jsonResponse(buildOAuthProtectedResource("hospitality", process.env.NEXT_PUBLIC_SITE_URL));
}
