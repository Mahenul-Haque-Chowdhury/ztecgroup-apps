import type { Metadata } from "next";
import { Portfolio } from "../pages/Portfolio";

export const metadata: Metadata = {
  title: "Delivery Approach | Software & Business Systems",
  description:
    "See how ZTEC Software structures delivery, execution, and measurable outcomes across software engagements.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return <Portfolio />;
}
