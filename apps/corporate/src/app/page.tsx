import type { Metadata } from "next";
import { Home } from "./pages/Home";

export const metadata: Metadata = {
  title: "ZTEC Group Pty Ltd",
  description:
    "ZTEC Group Pty Ltd connects advanced digital systems, communication, and media into one seamless solution platform.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <Home />;
}
