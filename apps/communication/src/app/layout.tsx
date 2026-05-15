import type { Metadata, Viewport } from "next";
import { buildOrganizationSchema, buildServiceSchema, buildSiteMetadata, buildWebSiteSchema, serializeJsonLd } from "@ztecgroup/content";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollToTopOnMount } from "./components/ScrollToTopOnMount";
import { CinematicAmbient } from "./components/CinematicAmbient";
import { Preloader } from "./components/Preloader";
import { SmoothScroll } from "./components/SmoothScroll";

export const viewport: Viewport = {
  themeColor: "#070a12",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export const metadata: Metadata = buildSiteMetadata("communication", {}, process.env.NEXT_PUBLIC_SITE_URL);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = buildOrganizationSchema(process.env.NEXT_PUBLIC_SITE_URL);
  const websiteSchema = buildWebSiteSchema("communication", process.env.NEXT_PUBLIC_SITE_URL);
  const serviceSchema = buildServiceSchema("communication", process.env.NEXT_PUBLIC_SITE_URL);

  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd([organizationSchema, websiteSchema, serviceSchema]) }}
        />
      </head>
      <body suppressHydrationWarning>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
          <SmoothScroll />
          <Preloader />
          <CinematicAmbient />
          <ScrollToTopOnMount />
          <ScrollToTop />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
