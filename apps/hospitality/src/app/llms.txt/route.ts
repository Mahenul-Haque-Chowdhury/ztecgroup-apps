import { buildLlmsTxt } from "@ztecgroup/content";

export function GET() {
  return new Response(buildLlmsTxt("hospitality", process.env.NEXT_PUBLIC_SITE_URL), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}