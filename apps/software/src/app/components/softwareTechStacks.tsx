import type { IconType } from "react-icons";
import {
  SiCloudflare,
  SiCss,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiGoogleads,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiGoogletagmanager,
  SiGraphql,
  SiHotjar,
  SiHtml5,
  SiHubspot,
  SiJavascript,
  SiJsonwebtokens,
  SiLaravel,
  SiLucide,
  SiMailchimp,
  SiMeta,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiRedis,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiVercel,
  SiYoutube,
  SiDigitalocean,
} from "react-icons/si";
import { Bug, Cloud, Layers, Linkedin, Network, Search, ShieldCheck, Webhook } from "lucide-react";

export interface NamedTechItem {
  icon: IconType | typeof Bug | typeof Search | typeof Cloud | typeof Linkedin;
  name: string;
  color?: string;
  className?: string;
}

export interface IconTechItem {
  icon: IconType | typeof Layers | typeof Network | typeof Webhook | typeof ShieldCheck;
  label: string;
  color?: string;
  className?: string;
}

export const marketingTechStack: NamedTechItem[] = [
  { icon: SiGooglesearchconsole, name: "Search Console", color: "#4285F4" },
  { icon: SiGoogletagmanager, name: "Tag Manager", color: "#246FDB" },
  { icon: Linkedin, name: "LinkedIn Ads", color: "#0A66C2" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: Cloud, name: "AWS", color: "#FF9900" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiGoogleanalytics, name: "Google Analytics", color: "#E37400" },
];

export const engineeringTechStackIcons: IconTechItem[] = [
  { icon: SiHtml5, label: "HTML5", color: "#E34F26" },
  { icon: SiCss, label: "CSS3", color: "#1572B6" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiMysql, label: "SQL", color: "#4479A1" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", className: "text-white" },
  { icon: SiExpress, label: "Express.js", className: "text-white" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiRadixui, label: "Radix UI", className: "text-white" },
  { icon: SiFramer, label: "Framer Motion", className: "text-white" },
  { icon: SiLucide, label: "Lucide", className: "text-white" },
  { icon: Layers, label: "Zustand", color: "#94A3B8" },
  { icon: SiReactquery, label: "React Query", color: "#FF4154" },
  { icon: SiTrpc, label: "tRPC", color: "#2596BE" },
  { icon: SiPrisma, label: "Prisma", color: "#CBD5E1" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  { icon: SiRedis, label: "Redis", color: "#DC382D" },
  { icon: Network, label: "REST APIs", color: "#38BDF8" },
  { icon: SiGraphql, label: "GraphQL", color: "#E10098" },
  { icon: Webhook, label: "WebSockets", color: "#38BDF8" },
  { icon: SiJsonwebtokens, label: "JWT", color: "#94A3B8" },
  { icon: ShieldCheck, label: "OAuth 2.0", color: "#22C55E" },
  { icon: SiGit, label: "Git", color: "#F05032" },
  { icon: SiGithub, label: "GitHub", className: "text-white" },
  { icon: SiDocker, label: "Docker", color: "#2496ED" },
  { icon: SiVercel, label: "Vercel", className: "text-white" },
  { icon: SiCloudflare, label: "Cloudflare", color: "#F38020" },
];

export const toolsStack: NamedTechItem[] = [
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { icon: SiGoogleanalytics, name: "Google Analytics", color: "#E37400" },
  { icon: SiGooglesearchconsole, name: "Google Search Console", color: "#4285F4" },
  { icon: SiGoogletagmanager, name: "Google Tag Manager", color: "#246FDB" },
  { icon: SiMeta, name: "Meta Pixel", color: "#1877F2" },
  { icon: SiMeta, name: "Meta Business Suite", color: "#1877F2" },
  { icon: SiGoogleads, name: "Google Ads", color: "#4285F4" },
  { icon: Linkedin, name: "LinkedIn Ads", color: "#0A66C2" },
  { icon: SiYoutube, name: "YouTube Ads", color: "#FF0000" },
  { icon: SiHubspot, name: "HubSpot", color: "#FF7A59" },
  { icon: SiMailchimp, name: "Mailchimp", color: "#FFE01B" },
  { icon: Search as unknown as IconType, name: "Ahrefs", color: "#FF6B2B" },
  { icon: Bug as unknown as IconType, name: "Screaming Frog", color: "#22C55E" },
  { icon: SiHotjar, name: "Hotjar", color: "#FF3C00" },
  { icon: Cloud, name: "AWS", color: "#FF9900" },
  { icon: SiDigitalocean, name: "DigitalOcean", color: "#0080FF" },
  { icon: SiVercel, name: "Vercel", color: "#FFFFFF" },
];