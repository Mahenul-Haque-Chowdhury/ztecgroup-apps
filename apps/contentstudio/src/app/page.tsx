import type { Metadata } from "next";
import { ServiceDetail } from "./pages/ServiceDetail";

export const metadata: Metadata = {
  title: {
    absolute: "ZTEC Content Studio - A service of ZTEC Group Pty Ltd.",
  },
  description:
    "ZTEC Content Studio specializes in post-production, cinematic editing, social media cutdowns, and motion content creation for brands. A ZTEC Group Pty Ltd service.",
  keywords: [
    "video editing studio",
    "motion graphics",
    "post-production services",
    "social media video editing",
    "brand content creation",
  ],
};

export default function HomePage() {
  return <ServiceDetail serviceId="content" />;
}
