import { buildRobots } from "@ztecgroup/content";

export default function robots() {
  return buildRobots("communication", process.env.NEXT_PUBLIC_SITE_URL);
}