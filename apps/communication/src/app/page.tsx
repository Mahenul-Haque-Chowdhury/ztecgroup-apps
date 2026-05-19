import type { Metadata } from "next";
import { ServiceDetail } from "./pages/ServiceDetail";

export const metadata: Metadata = {
  title: {
    absolute: "ZTEC Communications - A service of ZTEC Group Pty Ltd.",
  },
  description:
    "ZTEC Communications provides privacy-first anonymous communication infrastructure with Scan2Call recovery and secure owner-finder connectivity. ZTEC Group Pty Ltd.",
  keywords: [
    "anonymous communication platform",
    "privacy-first contact recovery",
    "secure owner-finder communication",
    "Scan2Call",
    "encrypted messaging infrastructure",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <ServiceDetail serviceId="communication" />;
}
