import { buildOAuthProtectedResource, jsonResponse } from "@ztecgroup/content";

export function GET() {
  return jsonResponse(buildOAuthProtectedResource("corporate", process.env.NEXT_PUBLIC_SITE_URL));
}
