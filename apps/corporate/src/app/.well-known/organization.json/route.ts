import { buildOrganizationAuthority } from "@ztecgroup/content";

export function GET() {
  return Response.json(buildOrganizationAuthority("corporate", process.env.NEXT_PUBLIC_SITE_URL));
}