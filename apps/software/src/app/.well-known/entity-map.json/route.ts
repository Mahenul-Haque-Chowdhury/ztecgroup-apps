import { buildEntityMap } from "@ztecgroup/content";

export function GET() {
  return Response.json(buildEntityMap("software", process.env.NEXT_PUBLIC_SITE_URL));
}