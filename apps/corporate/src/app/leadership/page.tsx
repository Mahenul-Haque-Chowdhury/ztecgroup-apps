import Link from "next/link";
import type { Metadata } from "next";
import { buildLeadershipHubSchema, leadershipProfiles, serializeJsonLd } from "@ztecgroup/content";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the ZTEC Group directors leading strategy, delivery, content, and software across the enterprise ecosystem.",
  alternates: {
    canonical: "/leadership",
  },
};

export default function LeadershipPage() {
  return (
    <div className="relative px-5 pb-20 pt-32 sm:px-8 lg:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildLeadershipHubSchema()) }}
      />
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.24em] text-primary/80">Leadership</p>
          <h1 className="mt-4 text-[clamp(2.25rem,5vw,4.75rem)] font-bold leading-[1.05] text-white">
            Directors behind the ZTEC Group ecosystem
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/68">
            ZTEC Group leadership keeps strategy, delivery, creative systems, and technical execution aligned across every service division.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {leadershipProfiles.map((profile) => (
            <article key={profile.slug} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <p className="text-[10px] uppercase tracking-[0.24em] text-primary/80">{profile.division}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{profile.name}</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/52">{profile.jobTitle}</p>
              <p className="mt-5 text-sm leading-7 text-white/66">{profile.shortBio}</p>
              <Link href={`/leadership/${profile.slug}`} className="mt-6 inline-flex text-sm font-medium text-primary transition-colors hover:text-primary/80">
                Open executive profile
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}