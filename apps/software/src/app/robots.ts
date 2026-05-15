import { buildRobots } from "@ztecgroup/content";

export default function robots() {
  return buildRobots("software", process.env.NEXT_PUBLIC_SITE_URL);
}