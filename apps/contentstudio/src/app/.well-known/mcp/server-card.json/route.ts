import { buildMcpServerCard, jsonResponse } from "@ztecgroup/content";

export function GET() {
  return jsonResponse(buildMcpServerCard("contentstudio", process.env.NEXT_PUBLIC_SITE_URL));
}
