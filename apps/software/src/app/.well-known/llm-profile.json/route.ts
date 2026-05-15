import { buildLlmProfile } from "@ztecgroup/content";

export function GET() {
  return Response.json(buildLlmProfile("software", process.env.NEXT_PUBLIC_SITE_URL));
}