import { buildLlmProfile } from "@ztecgroup/content";

export function GET() {
  return Response.json(buildLlmProfile("hospitality", process.env.NEXT_PUBLIC_SITE_URL));
}