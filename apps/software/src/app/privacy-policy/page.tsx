import type { Metadata } from "next";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how ZTEC Group Pty Ltd collects, uses, stores, and discloses personal information across its services.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
