import { buildOrganizationAuthority } from "@ztecgroup/content";

export function GET() {
  return Response.json(buildOrganizationAuthority("contentstudio", process.env.NEXT_PUBLIC_SITE_URL));
}