import type { SiteKey } from "./seo";

export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Keyword-targeted FAQs per site. Rendered visibly on each home page AND emitted as
 * FAQPage structured data (buildFaqSchema) so the questions can win rich results,
 * "People also ask" placements, and AI answer-engine citations.
 */
export const siteFaqs: Record<SiteKey, FaqItem[]> = {
  corporate: [
    {
      question: "How do your four divisions collaborate on one engagement?",
      answer:
        "Each project starts with a shared roadmap, then we assign a lead division while the other teams plug in at mapped milestones for communication, media, systems, and growth outcomes.",
    },
    {
      question: "Can we launch with one service first and expand later?",
      answer:
        "Yes. Most clients begin with one priority track, then add additional divisions once the first deployment reaches measurable traction.",
    },
    {
      question: "What happens during the kickoff sprint?",
      answer:
        "We align goals, define KPIs, audit current infrastructure, and deliver an execution blueprint with timelines, owners, and phased delivery checkpoints.",
    },
    {
      question: "How fast can you ship a first usable release?",
      answer:
        "Depending on scope, we typically deliver a validated first release within 3-6 weeks, including design, build, and real-world feedback loops.",
    },
    {
      question: "Do you integrate with our existing tools and platforms?",
      answer:
        "Absolutely. We integrate with existing CRMs, analytics stacks, communication tools, and internal workflows to avoid disruption and accelerate adoption.",
    },
    {
      question: "What support do we get after go-live?",
      answer:
        "You can choose a continuous support model covering optimization, monitoring, monthly performance reviews, and iterative feature upgrades.",
    },
  ],
  communication: [
    {
      question: "What is Scan2Call and how does it work?",
      answer:
        "Scan2Call links a QR smart tag to your belongings. When someone finds a lost item and scans the tag, they can call, text, or send a recovery report to you anonymously, without either party seeing the other's personal contact details.",
    },
    {
      question: "Is my phone number kept private?",
      answer:
        "Yes. All calls, texts, and reports route through a privacy-by-design relay with contact masking, so finders and owners communicate without exposing personal numbers or identities.",
    },
    {
      question: "What can I attach a Scan2Call QR tag to?",
      answer:
        "Keys, wallets, luggage, laptops, equipment, and pet collars, any belonging you want returned quickly if it is lost.",
    },
    {
      question: "How fast is lost-item recovery?",
      answer:
        "Owners receive a real-time notification the moment a tag is scanned, so recovery can begin instantly, and every interaction is tracked from first scan to safe return.",
    },
  ],
  contentstudio: [
    {
      question: "What types of video editing do you offer?",
      answer:
        "Short-form social edits for Reels, TikTok, and YouTube Shorts, long-form and YouTube editing, documentary and story-driven edits, ad creative, and full post-production finishing.",
    },
    {
      question: "Can I send raw or unorganized footage?",
      answer:
        "Yes. Send raw clips, mixed footage, or even a disorganized folder of takes, and we handle the structuring, editing, and polishing into production-ready video.",
    },
    {
      question: "Do you repurpose one shoot into multiple platform formats?",
      answer:
        "Absolutely. We turn a single source shoot into platform-ready vertical and horizontal assets for Instagram, Facebook, TikTok, and YouTube.",
    },
    {
      question: "What turnaround can I expect?",
      answer:
        "Turnaround depends on length and complexity, but most social cutdowns are delivered within days, with clear milestones agreed upfront.",
    },
  ],
  hospitality: [
    {
      question: "What is STRA consulting?",
      answer:
        "Short-Term Rental Accommodation (STRA) consulting helps property owners launch, run, and optimize short-stay rentals, covering setup, compliance, pricing, and occupancy strategy.",
    },
    {
      question: "Do you help with STRA compliance and regulations?",
      answer:
        "Yes. We guide you through registration, compliance requirements, and operating obligations so your short-term rental runs legally and smoothly.",
    },
    {
      question: "Can you improve my rental's occupancy and revenue?",
      answer:
        "We use pricing optimization and occupancy strategy to lift revenue, reduce vacant nights, and improve your property's overall performance.",
    },
    {
      question: "Do you consult for Airbnb and holiday rentals?",
      answer:
        "Yes. Our consultation covers Airbnb, holiday lets, and other short-term rental platforms, from launch planning to ongoing operations.",
    },
  ],
  software: [
    {
      question: "What software services does ZTEC Software Lab provide?",
      answer:
        "Custom software development, web and mobile application development, business process automation, systems integration, and cloud infrastructure for scalable operations.",
    },
    {
      question: "Can you automate our existing business processes?",
      answer:
        "Yes. We map your current workflows and build automation and integrations that reduce manual work and connect the tools you already use.",
    },
    {
      question: "Do you integrate with our current systems?",
      answer:
        "We integrate with existing CRMs, analytics stacks, and internal tools through APIs to avoid disruption and accelerate adoption.",
    },
    {
      question: "How long does a custom software project take?",
      answer:
        "It is scope dependent, but we typically deliver a validated first release within weeks using phased, milestone-based delivery.",
    },
  ],
};
