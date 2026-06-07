import { buildOAuthAuthorizationServer, jsonResponse } from "@ztecgroup/content";

export function GET() {
  return jsonResponse(buildOAuthAuthorizationServer("communication", process.env.NEXT_PUBLIC_SITE_URL));
}
