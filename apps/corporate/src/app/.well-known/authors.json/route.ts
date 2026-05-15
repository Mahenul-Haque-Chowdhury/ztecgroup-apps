import { buildAuthorsFile } from "@ztecgroup/content";

export function GET() {
  return Response.json(buildAuthorsFile());
}