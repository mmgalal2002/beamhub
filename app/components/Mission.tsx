import Image from "next/image";

import missionVisual from "@/public/driveLandscape.png";

const MISSION_PILLARS = [
  {
    icon: "🌐",
    title: "Empowering Professionals",
    description:
      "Empower radiation medicine professionals by knowledge exchange and professional development.",
    layoutClass: "md:flex-1",
  },
  {
    icon: "🏅",
    title: "Promoting Excellence",
    description:
      "Strives to promote excellence in radiation medicine through education and research to enhance patient care.",
    layoutClass: "md:flex-1",
  },
  {
    icon: "🤝",
    title: "Building a Global Community",
    description:
      "Build a global community committed to sharing knowledge, advancing research, and improving patient care collaboratively.",
    layoutClass: "md:flex-1",
  },
  {
    icon: "🚀",
    title: "Innovating Education and Practice",
    description:
      "Committed to innovating education and practice by providing resources, fostering research, and supporting compassionate care.",
    layoutClass: "md:flex-1",
  },
];

export default function Mission() {
  return (
    <section id="mission" className="bg-[#0f0f1a] py-4 md:py-5">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-6 text-center text-white xl:max-w-7xl 2xl:max-w-[1700px]">
        <div className="space-y-4">
          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-1 text-xs font-semibold uppercase tracking-[0.6em] text-(--accent)">
            Mission & Values
          </span>
          <h2 className="text-4xl font-semibold text-(--accent) md:text-5xl">
            What drives us
          </h2>
          <p className="text-lg text-white/80">
            The core principles that guide our community practice
          </p>
        </div>

        <div className="relative w-full rounded-4xl border border-white/10 bg-linear-to-br from-[#161927] to-[#0b0d16] p-6 text-left shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
          <div className="absolute -left-10 top-6 h-32 w-32 rounded-full bg-(--accent)/20 blur-[90px]" />
          <div className="absolute bottom-10 right-0 h-40 w-40 rounded-full bg-indigo-500/30 blur-[110px]" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={missionVisual}
              alt="BeamHub community collaboration"
              priority
              className="h-auto w-full"
            />
          </div>
          <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-4 text-left ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Innovation</p>
              <p className="mt-2 text-lg font-semibold">Clinical breakthroughs</p>
              <p className="text-sm text-white/70">Rapid knowledge exchange accelerates safer treatments.</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4 text-left ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">People first</p>
              <p className="mt-2 text-lg font-semibold">Patient impact</p>
              <p className="text-sm text-white/70">Every conversation centers on quality of care.</p>
            </div>
          </div>
        </div>

        <div className="w-full rounded-4xl border border-white/10 bg-white/5 p-8 text-center text-white shadow-lg backdrop-blur">
          <span className="text-sm font-semibold uppercase tracking-[0.6em] text-(--accent)">
            Our Mission
          </span>
          <p className="mt-4 text-xl font-semibold text-white">
            BeamHub.org unites radiation medicine professionals to foster collaboration, advance education,
            and drive innovation. We are dedicated to improving patient care through shared knowledge and
            cutting-edge practice.
          </p>
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-4 md:flex-row">
            {MISSION_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className={`group rounded-3xl border border-white/10 bg-[#0c0f1c] p-6 text-left text-white shadow-lg ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-(--accent) hover:bg-[#11142a] hover:shadow-[0_25px_60px_rgba(0,0,0,0.55)] ${pillar.layoutClass}`}
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-(--accent)/20 text-2xl text-(--accent) transition-colors duration-300 group-hover:bg-(--accent)/30">
                  {pillar.icon}
                </span>
                <h3 className="text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm text-white/70">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
