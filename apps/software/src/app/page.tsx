import type { Metadata } from "next";
import { ServiceDetail } from "./pages/ServiceDetail";

export const metadata: Metadata = {
  title: "Software & Business Systems",
  description:
    "Custom software engineering, process automation, and business systems architecture for modern operations.",
};

export default function HomePage() {
  return <ServiceDetail serviceId="software" />;
}
