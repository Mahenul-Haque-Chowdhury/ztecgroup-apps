import { buildAgentSkillsIndex, jsonResponse } from "@ztecgroup/content";

export async function GET() {
  return jsonResponse(await buildAgentSkillsIndex("corporate", process.env.NEXT_PUBLIC_SITE_URL));
}
