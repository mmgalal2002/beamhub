import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, Youtube } from "lucide-react";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "admin@BeamHub.org",
    href: "mailto:admin@BeamHub.org",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/company/beamhub",
    href: "https://www.linkedin.com/company/beamhub/",
  },
  {
    icon: Youtube,
    label: "YouTube",
    value: "youtube.com/@BeamHubPlatform",
    href: "https://www.youtube.com/@BeamHubPltform",
  },
];

const CONTACT_IMAGE =
  "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0f0f1a] py-4 md:py-5">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-4 text-center text-white sm:px-6 md:px-8 xl:max-w-7xl 2xl:max-w-[1700px]">
        <div className="space-y-4">
          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-1 text-xs font-semibold uppercase tracking-[0.6em] text-(--accent)">
            Contact
          </span>
          <h2 className="text-4xl font-semibold text-(--accent) md:text-5xl">Get in Touch</h2>
          <p className="text-lg text-white/80">Have questions or suggestions? Contact us today.</p>
        </div>

        <div className="grid w-full gap-6 text-left lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <div className="order-2 w-full space-y-6 rounded-3xl border border-white/10 bg-linear-to-br from-[#111429] to-[#070812] p-5 sm:p-7 shadow-[0_18px_45px_rgba(0,0,0,0.55)] lg:order-1">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">Reach out</p>
            <div className="space-y-5">
              {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-3 rounded-3xl border border-white/5 bg-white/5 px-5 py-4 transition-all duration-300 hover:border-(--accent) hover:bg-white/10 sm:flex-row sm:items-center sm:gap-4"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-(--accent)/15 text-(--accent) group-hover:bg-(--accent)/25 sm:h-12 sm:w-12">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/60 sm:text-xs">{label}</p>
                    <p className="text-sm font-semibold text-white wrap-break-word sm:text-base">{value}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative order-1 w-full overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#111428] to-[#06070f] p-4 sm:p-6 shadow-[0_18px_45px_rgba(0,0,0,0.55)] lg:order-2">
            <div className="absolute -top-10 right-0 h-52 w-52 rounded-full bg-(--accent)/15 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-purple-600/25 blur-[120px]" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={CONTACT_IMAGE}
                alt="Professionals collaborating at BeamHub contact center"
                className="h-auto w-full"
                width={1600}
                height={1067}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
