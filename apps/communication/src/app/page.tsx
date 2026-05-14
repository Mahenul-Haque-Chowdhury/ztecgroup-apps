import type { Metadata } from "next";
import { ServiceDetail } from "./pages/ServiceDetail";

export const metadata: Metadata = {
  title: "Anonymous Communication Gateway",
  description:
    "Privacy-first anonymous communication infrastructure with Scan2Call recovery workflows and protected owner-finder communication.",
};

export default function HomePage() {
  return <ServiceDetail serviceId="communication" />;
}
