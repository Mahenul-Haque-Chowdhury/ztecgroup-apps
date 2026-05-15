import type { Metadata } from "next";
import { ServiceDetail } from "../../pages/ServiceDetail";

export const metadata: Metadata = {
  title: "STRA & Hospitality Management Consultation",
  description:
    "STRA launch planning, compliance, pricing optimization, occupancy strategy, and hospitality operations guidance for property owners and investors.",
  keywords: [
    "STRA consulting",
    "short term rental accommodation",
    "hospitality management consultation",
    "pricing optimization",
    "occupancy strategy",
  ],
};

export default function RevenueServicePage() {
  return <ServiceDetail serviceId="revenue" />;
}
