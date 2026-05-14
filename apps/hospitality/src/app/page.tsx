import type { Metadata } from "next";
import { ServiceDetail } from "./pages/ServiceDetail";

export const metadata: Metadata = {
  title: "STRA Management Consultation",
  description:
    "Launch planning, compliance, pricing, occupancy, and STRA operational advisory for property owners and investors.",
};

export default function HomePage() {
  return <ServiceDetail serviceId="revenue" />;
}
