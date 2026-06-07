import { getSiteUrl, siteDefinitions, type SiteKey } from "./seo";

const jsonHeaders = {
  "Cache-Control": "public, max-age=3600",
};

export function buildAgentLinkHeader(site: SiteKey, siteUrl?: string) {
  const base = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");

  return [
    `</.well-known/api-catalog>; rel="api-catalog"`,
    `</.well-known/api-catalog>; rel="service-desc"; type="application/linkset+json"`,
    `</.well-known/oauth-protected-resource>; rel="oauth-protected-resource"`,
    `</auth.md>; rel="authorization"`,
    `</llms.txt>; rel="service-doc"; type="text/plain"`,
    `<${base}/sitemap.xml>; rel="sitemap"; type="application/xml"`,
  ].join(", ");
}

export function withAgentDiscoveryHeaders(response: Response, site: SiteKey, siteUrl?: string) {
  response.headers.set("Link", buildAgentLinkHeader(site, siteUrl));
  response.headers.set("X-Robots-Tag", "index, follow");
  return response;
}

export function buildApiCatalog(site: SiteKey, siteUrl?: string) {
  const base = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");

  return {
    linkset: [
      {
        anchor: base,
        "service-desc": [
          {
            href: `${base}/.well-known/api-catalog`,
            type: "application/linkset+json",
          },
        ],
        "service-doc": [
          {
            href: `${base}/llms.txt`,
            type: "text/plain",
          },
        ],
        status: [
          {
            href: `${base}/`,
            type: "text/html",
          },
        ],
      },
    ],
  };
}

export function buildOAuthProtectedResource(site: SiteKey, siteUrl?: string) {
  const base = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");

  return {
    resource: base,
    authorization_servers: [],
    scopes_supported: [],
    bearer_methods_supported: ["header"],
    resource_documentation: `${base}/auth.md`,
  };
}

export function buildOAuthAuthorizationServer(site: SiteKey, siteUrl?: string) {
  const base = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");

  return {
    issuer: base,
    grant_types_supported: [],
    response_types_supported: [],
    scopes_supported: [],
    agent_auth: {
      register_uri: `${base}/auth.md`,
      supported_identity_types: [],
      supported_credential_types: [],
    },
  };
}

export function buildMcpServerCard(site: SiteKey, siteUrl?: string) {
  const definition = siteDefinitions[site];
  const base = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");

  return {
    serverInfo: {
      name: definition.siteName,
      version: "1.0.0",
    },
    transport: {
      type: "none",
      endpoint: null,
    },
    capabilities: {
      tools: false,
      resources: false,
      prompts: false,
    },
    documentation: `${base}/llms.txt`,
  };
}

export async function buildAgentSkillsIndex(site: SiteKey, siteUrl?: string) {
  const base = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");
  const skills = await Promise.all([
    {
      name: "site-documentation",
      type: "documentation",
      description: `Machine-readable overview and crawl guidance for ${siteDefinitions[site].siteName}.`,
      url: `${base}/llms.txt`,
    },
    {
      name: "api-catalog",
      type: "discovery",
      description: "RFC 9727 linkset catalog for automated API and service discovery.",
      url: `${base}/.well-known/api-catalog`,
    },
  ].map(async (skill) => ({
    ...skill,
    sha256: await sha256Hex(`${skill.name}:${skill.url}`),
  })));

  return {
    $schema: "https://agentskills.io/schemas/agent-skills-index-v0.2.json",
    skills,
  };
}

async function sha256Hex(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);

  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function buildAuthMarkdown(site: SiteKey, siteUrl?: string) {
  const definition = siteDefinitions[site];
  const base = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");

  return [
    `# ${definition.siteName} Agent Authentication`,
    "",
    `${definition.siteName} does not currently expose protected public APIs for autonomous agent registration.`,
    "",
    "Discovery resources:",
    "",
    `- API catalog: ${base}/.well-known/api-catalog`,
    `- OAuth protected resource metadata: ${base}/.well-known/oauth-protected-resource`,
    `- Agent documentation: ${base}/llms.txt`,
    "",
  ].join("\n");
}

export function buildHomepageMarkdown(site: SiteKey, siteUrl?: string) {
  const definition = siteDefinitions[site];
  const base = getSiteUrl(site, siteUrl).toString().replace(/\/$/, "");

  return [
    `# ${definition.defaultTitle}`,
    "",
    definition.description,
    "",
    "## Key Pages",
    "",
    `- Home: ${base}/`,
    `- Contact: ${base}/contact`,
    `- Sitemap: ${base}/sitemap.xml`,
    `- Agent documentation: ${base}/llms.txt`,
    `- API catalog: ${base}/.well-known/api-catalog`,
    "",
  ].join("\n");
}

export function jsonResponse(body: unknown, contentType = "application/json") {
  return Response.json(body, {
    headers: {
      ...jsonHeaders,
      "Content-Type": contentType,
    },
  });
}

export function markdownResponse(body: string) {
  return new Response(body, {
    headers: {
      ...jsonHeaders,
      "Content-Type": "text/markdown; charset=utf-8",
      "x-markdown-tokens": String(body.split(/\s+/).filter(Boolean).length),
    },
  });
}
