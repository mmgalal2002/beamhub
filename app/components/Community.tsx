import Link from "next/link";

type CommunityCardProps = {
  icon: string;
  title: string;
  subtitle: string;
  href: string;
};

const COMMUNITY_FEATURES: CommunityCardProps[] = [
  {
    icon: "🎥",
    title: "Live Events",
    subtitle: "From expert talks to interactive workshops and community Q&As.",
    href: "https://www.beamhub.org/c/live-webinars/",
  },
  {
    icon: "🧭",
    title: "Online Courses",
    subtitle: "Structured courses guiding you through valuable skills step by step.",
    href: "https://www.beamhub.org/s/courses/",
  },
  {
    icon: "▶️",
    title: "YouTube Courses",
    subtitle: "Handpicked free, high-quality courses from YouTube.",
    href: "https://www.beamhub.org/s/youtube-courses/",
  },
  {
    icon: "📚",
    title: "Knowledge Base Groups",
    subtitle: "Focused discussions around key topics with the BeamHub community.",
    href: "https://www.beamhub.org/s/knowledge-base-groups/",
  },
  {
    icon: "💼",
    title: "Job Board",
    subtitle: "Discover opportunities or find the right talent on BeamHub.",
    href: "https://www.beamhub.org/s/job-board/",
  },
  {
    icon: "📝",
    title: "Survey Land",
    subtitle: "Contribute to member-led professional surveys and insights.",
    href: "https://www.beamhub.org/s/survey-land/",
  },
  {
    icon: "🤝",
    title: "Organizers & Instructors",
    subtitle: "Connect, plan, and collaborate with event leaders.",
    href: "https://www.beamhub.org/s/organizers-and-instructors/",
  },
  {
    icon: "🩺",
    title: "Journal Club",
    subtitle: "Expert-led sessions breaking down publications and guidelines.",
    href: "https://www.beamhub.org/c/journal-club-8c611b/",
  },
  {
    icon: "🎧",
    title: "Podcasts",
    subtitle: "Bite-sized summaries of impactful articles, books, and insights.",
    href: "https://www.beamhub.org/c/podcast/",
  },
  {
    icon: "🚀",
    title: "Discover BeamHub",
    subtitle: "Watch quick videos introducing the key features of our community.",
    href: "https://www.beamhub.org/",
  },
];

function CommunityCard({ icon, title, subtitle, href }: CommunityCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full flex-col gap-3 rounded-3xl bg-[#2c2e33] p-6 text-left text-white shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:shadow-black/50"
    >
      <span className="text-3xl" aria-hidden>
        {icon}
      </span>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-sm text-white/75">{subtitle}</p>
      <span className="mt-auto text-sm font-semibold text-(--accent)">Explore →</span>
    </Link>
  );
}

export default function Community() {
  return (
    <section id="community" className="bg-[#0f0f1a] py-4 md:py-5">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 text-center xl:max-w-7xl 2xl:max-w-[1700px]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.6em] text-(--accent)">
            Get Onboard, and Engage with the Community
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Spaces designed for whatever momentum looks like to you
          </h2>
          <p className="mt-6 text-lg text-white/80">
            Dive into live experiences, curated learning, focused groups, and community-led content—all
            within BeamHub’s collaborative ecosystem.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {COMMUNITY_FEATURES.map((feature) => (
            <CommunityCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
