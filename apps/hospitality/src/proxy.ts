import { NextResponse, type NextRequest } from "next/server";
import { buildAgentLinkHeader, buildHomepageMarkdown } from "@ztecgroup/content";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  if (request.headers.get("accept")?.includes("text/markdown")) {
    return new Response(buildHomepageMarkdown("hospitality", process.env.NEXT_PUBLIC_SITE_URL), {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        Link: buildAgentLinkHeader("hospitality", process.env.NEXT_PUBLIC_SITE_URL),
      },
    });
  }

  response.headers.set("Link", buildAgentLinkHeader("hospitality", process.env.NEXT_PUBLIC_SITE_URL));
  return response;
}

export const config = {
  matcher: "/",
};
