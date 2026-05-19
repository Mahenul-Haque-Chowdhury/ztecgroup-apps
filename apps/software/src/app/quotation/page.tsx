import type { Metadata } from "next";
import { QuotationRequirements } from "../pages/QuotationRequirements";

export const metadata: Metadata = {
  title: "Request Quotation",
  description:
    "Submit your software requirements for websites, apps, e-commerce, automation, ERP, CRM, HRMS, and custom systems.",
  alternates: {
    canonical: "/quotation",
  },
};

export default function QuotationPage() {
  return <QuotationRequirements />;
}
