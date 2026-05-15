import type { Metadata } from "next";
import { ServiceDetail } from "./pages/ServiceDetail";

export const metadata: Metadata = {
  title: {
    absolute: "ZTEC STRA & Hospitality Management Consultation Service - A service of ZTEC Group Pty Ltd.",
  },
  description:
    "ZTEC STRA & Hospitality Management provides expert consultation on launch planning, compliance, pricing optimization, and occupancy for property owners. ZTEC Group Pty Ltd.",
  keywords: [
    "STRA consulting",
    "short term rental accommodation",
    "hospitality management consultation",
    "pricing optimization",
    "occupancy strategy",
  ],
};

export default function HomePage() {
  return <ServiceDetail serviceId="revenue" />;
}
