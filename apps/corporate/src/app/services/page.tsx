import type { Metadata } from "next";
import { ServicesHub } from "../pages/ServicesHub";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore ZTEC Group services across anonymous communication, video and motion content, software and business systems, and STRA (Short term rental accommodation) management consultation.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesHub />;
}
