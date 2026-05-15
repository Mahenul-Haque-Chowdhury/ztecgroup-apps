import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildPersonSchema, getLeadershipProfile, leadershipProfiles, serializeJsonLd } from "@ztecgroup/content";

type LeadershipProfilePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return leadershipProfiles.map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({ params }: LeadershipProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getLeadershipProfile(slug);

  if (!profile) {
    return {};
  }

  return {
    title: profile.name,
    description: profile.bio,
    alternates: {
      canonical: `/leadership/${profile.slug}`,
    },
  };
}

export default async function LeadershipProfilePage({ params }: LeadershipProfilePageProps) {
  const { slug } = await params;
  const profile = getLeadershipProfile(slug);

  if (!profile) {
    notFound();
  }

  const personSchema = buildPersonSchema(profile.slug);

  return (
    <div className="relative px-5 pb-20 pt-32 sm:px-8 lg:px-16">
      {personSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(personSchema) }}
        />
      ) : null}
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
          <div className="relative aspect-[4/5] w-full bg-white/[0.04]">
            <Image src={profile.image} alt={profile.name} fill sizes="(min-width: 1024px) 340px, 92vw" className="object-cover" />
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-primary/80">Leadership Profile</p>
          <h1 className="mt-4 text-[clamp(2.2rem,4vw,4.4rem)] font-bold leading-[1.05] text-white">{profile.name}</h1>
          <p className="mt-3 text-sm uppercase tracking-[0.22em] text-white/54">{profile.jobTitle}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">{profile.bio}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <section className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-lg font-semibold text-white">Primary focus</h2>
              <p className="mt-4 text-sm leading-7 text-white/68">{profile.division}</p>
            </section>
            <section className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-lg font-semibold text-white">Works across</h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-white/68">
                {profile.worksFor.map((site) => (
                  <li key={site}>{site}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold text-white">Expertise areas</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {profile.knowsAbout.map((topic) => (
                <span key={topic} className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/72">
                  {topic}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}