import Image from "next/image";
import Link from "next/link";

import ButtonLink from "./ButtonLink";
import adBanner from "@/public/Beamhub-ad.gif";

const COURSE_URL =
  "https://www.beamhub.org/c/shielding-design-for-linear-accelerator-self-paced-course/";

export default function AD() {
  return (
    <section id="ad" className="relative bg-[#0f0f1a] py-4">
      <div className="mx-auto flex w-full max-w-6xl px-6 text-center xl:max-w-7xl 2xl:max-w-[1700px]">
        <div className="w-full">
          <Link
            href={COURSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-[0_35px_70px_rgba(0,0,0,0.45)]"
          >
            <Image
              src={adBanner}
              alt="BeamHub Shielding Design self-paced course ad"
              priority
              className="h-auto w-full"
            />
          </Link>

          <div className="mt-10 rounded-4xl border border-white/10 bg-white/5 p-8 text-white shadow-lg backdrop-blur">
            <p className="text-2xl font-semibold leading-relaxed text-(--accent)">
              Take your Linac shielding expertise to the next level with this unique course
            </p>
            <ButtonLink href={COURSE_URL} external className="mt-6 w-full sm:w-auto">
              Join this Course Now!
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
