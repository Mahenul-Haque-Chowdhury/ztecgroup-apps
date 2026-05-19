import type { Metadata } from "next";
import { ServiceDetail } from "../../pages/ServiceDetail";

export const metadata: Metadata = {
  title: "Video Editing, Motion Graphics & Post-Production",
  description:
    "Post-production, cinematic editing, social media cutdowns, and motion content creation for campaigns, brands, and digital platforms.",
  keywords: [
    "video editing studio",
    "motion graphics",
    "post-production services",
    "social media video editing",
    "brand content creation",
  ],
  alternates: {
    canonical: "/services/content",
  },
};

export default function ContentServicePage() {
  return <ServiceDetail serviceId="content" />;
}
