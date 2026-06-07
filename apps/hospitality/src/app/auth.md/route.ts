import { buildAuthMarkdown, markdownResponse } from "@ztecgroup/content";

export function GET() {
  return markdownResponse(buildAuthMarkdown("hospitality", process.env.NEXT_PUBLIC_SITE_URL));
}
