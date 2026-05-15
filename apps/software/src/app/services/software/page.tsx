import type { Metadata } from "next";
import { ServiceDetail } from "../../pages/ServiceDetail";

export const metadata: Metadata = {
  title: "Custom Software Engineering & Enterprise Systems",
  description:
    "Enterprise software development, process automation, cloud systems architecture, and API integration services from ZTEC Software Lab.",
  keywords: [
    "custom software development",
    "business process automation",
    "enterprise software architecture",
    "cloud systems",
    "API integration",
  ],
};

export default function SoftwareServicePage() {
  return <ServiceDetail serviceId="software" />;
}
