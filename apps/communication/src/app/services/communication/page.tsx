import type { Metadata } from "next";
import { ServiceDetail } from "../../pages/ServiceDetail";

export const metadata: Metadata = {
  title: "Anonymous Communication Platform & Scan2Call Recovery",
  description:
    "Privacy-first encrypted communication infrastructure with zero-knowledge architecture, Scan2Call recovery, and secure owner-finder connectivity.",
  keywords: [
    "anonymous communication platform",
    "privacy-first contact recovery",
    "secure owner-finder communication",
    "Scan2Call",
    "encrypted messaging infrastructure",
  ],
  alternates: {
    canonical: "/services/communication",
  },
};

export default function CommunicationServicePage() {
  return <ServiceDetail serviceId="communication" />;
}
