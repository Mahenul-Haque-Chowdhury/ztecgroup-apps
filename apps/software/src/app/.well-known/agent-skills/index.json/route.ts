import { buildAgentSkillsIndex, jsonResponse } from "@ztecgroup/content";

export async function GET() {
  return jsonResponse(await buildAgentSkillsIndex("software", process.env.NEXT_PUBLIC_SITE_URL));
}
