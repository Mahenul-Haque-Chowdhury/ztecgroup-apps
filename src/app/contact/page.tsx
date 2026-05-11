import type { Metadata } from "next";
import { Contact } from "../pages/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ZTEC Group to discuss your communication, software, content, or revenue optimization project.",
};

export default function ContactPage() {
  return <Contact />;
}
