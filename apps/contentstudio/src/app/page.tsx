import type { Metadata } from "next";
import { ServiceDetail } from "./pages/ServiceDetail";

export const metadata: Metadata = {
  title: "Video & Motion Content Studio",
  description:
    "Post-production, cinematic editing, social cutdowns, and production-ready motion content for modern brands.",
};

export default function HomePage() {
  return <ServiceDetail serviceId="content" />;
}
