import type { Metadata } from "next";
import { ServiceDetail } from "./pages/ServiceDetail";

export const metadata: Metadata = {
  title: {
    absolute: "ZTEC Software Lab - A service of ZTEC Group Pty Ltd.",
  },
  description:
    "ZTEC Software Lab delivers custom software engineering, process automation, and business systems architecture for enterprise operations. A ZTEC Group Pty Ltd service.",
  keywords: [
    "custom software development",
    "business process automation",
    "enterprise software architecture",
    "cloud systems",
    "API integration",
  ],
};

export default function HomePage() {
  return <ServiceDetail serviceId="software" />;
}
