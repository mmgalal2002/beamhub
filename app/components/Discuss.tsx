type StatCardProps = {
  label: string;
  value: string;
  description: string;
};

const stats: StatCardProps[] = [
  {
    label: "Members",
    value: "1.2K+",
    description: "Active clinicians, physicists, dosimetrists, and students",
  },
  {
    label: "Countries",
    value: "80+",
    description: "Global perspectives that challenge and inspire",
  },
  {
    label: "Course Enrollments",
    value: "4.6K+",
    description: "Self-paced and cohort-based learning moments",
  },
  {
    label: "Events",
    value: "59+",
    description: "Expert-led sessions, AMAs, and virtual meetups",
  },
];

function StatCard({ label, value, description }: StatCardProps) {
  return (
    <div className="group rounded-3xl bg-[#2c2e33] p-8 text-white shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:shadow-black/50">
      <p className="text-sm uppercase tracking-[0.4em] text-white/60">{label}</p>
      <div className="mt-3 text-4xl font-bold text-(--accent)">{value}</div>
      <p className="mt-3 text-base text-white/80">{description}</p>
    </div>
  );
}

export default function Discuss() {
  return (
    <section id="discuss" className="bg-[#0f0f1a] py-4 md:py-5">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 text-center xl:max-w-7xl 2xl:max-w-[1700px]">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.6em] text-(--accent)">
            Discuss, Ask or Explain
          </h2>
          <p className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Collaboration that moves radiation medicine forward
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
           <span className="font-extrabold">BeamHub</span> is designed to foster collaboration, knowledge exchange, and professional growth.
            <span className="font-extrabold"> BeamHub.org</span> offers a central hub for discussions, case sharing, resource access, and peer
            networking. Whether you're advancing clinical practice, exploring cutting-edge research, or
            mentoring the next generation, <span className="font-extrabold">BeamHub </span>connects you with a global network committed to
            excellence in radiation medicine.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
