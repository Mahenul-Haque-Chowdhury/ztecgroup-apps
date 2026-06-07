import { buildRobotsText } from "@ztecgroup/content";

export function GET() {
  return new Response(buildRobotsText("corporate", process.env.NEXT_PUBLIC_SITE_URL), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
