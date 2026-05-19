import type { Metadata } from "next";
import { Home } from "./pages/Home";

export const metadata: Metadata = {
  description:
    "ZTEC Group connects advanced digital systems, communication, and media into one seamless solution platform.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <Home />;
}
