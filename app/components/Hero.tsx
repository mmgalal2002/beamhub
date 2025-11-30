"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import ButtonLink from "./ButtonLink";

import heroDesktop1 from "@/public/heroDesktop1.png";
import heroDesktop2 from "@/public/heroDesktop2.png";
import heroDesktop3 from "@/public/heroDesktop3.png";
import heroDesktop4 from "@/public/heroDesktop4.png";
import heroDesktop5 from "@/public/heroDesktop5.png";

import heroTablet1 from "@/public/heroTablet1.png";
import heroTablet2 from "@/public/heroTablet2.png";
import heroTablet3 from "@/public/heroTablet3.png";
import heroTablet4 from "@/public/heroTablet4.png";
import heroTablet5 from "@/public/heroTablet5.png";

import heroMobile1 from "@/public/heroMobile1.png";
import heroMobile2 from "@/public/heroMobile2.png";
import heroMobile3 from "@/public/heroMobile3.png";
import heroMobile4 from "@/public/heroMobile4.png";
import heroMobile5 from "@/public/heroMobile5.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

type Device = "desktop" | "tablet" | "mobile";

type HeroSlide = {
  title: string;
  desktop: StaticImageData;
  tablet: StaticImageData;
  mobile: StaticImageData;
};

const HERO_SLIDES: HeroSlide[] = [
  {
    title: "Ideate together",
    desktop: heroDesktop1,
    tablet: heroTablet1,
    mobile: heroMobile1,
  },
  {
    title: "Create momentum",
    desktop: heroDesktop2,
    tablet: heroTablet2,
    mobile: heroMobile2,
  },
  {
    title: "Collaborate anywhere",
    desktop: heroDesktop3,
    tablet: heroTablet3,
    mobile: heroMobile3,
  },
  {
    title: "Grow your community",
    desktop: heroDesktop4,
    tablet: heroTablet4,
    mobile: heroMobile4,
  },
  {
    title: "Ship at beam-speed",
    desktop: heroDesktop5,
    tablet: heroTablet5,
    mobile: heroMobile5,
  },
];

const resolveDevice = (width: number): Device => {
  if (width < 640) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

export default function Hero() {
  const [device, setDevice] = useState<Device>("desktop");

  useEffect(() => {
    const handleResize = () => setDevice(resolveDevice(window.innerWidth));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[160px]" />
      </div>

      <div className="relative z-10 w-full">
        <Swiper
          modules={[Autoplay, Pagination, EffectCreative]}
          autoHeight
          loop
          centeredSlides
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          speed={900}
          grabCursor
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-25%", 0, -200],
              opacity: 0.5,
            },
            next: {
              translate: ["25%", 0, -200],
              opacity: 0.8,
            },
          }}
          className="hero-swiper w-full border-b border-white/10 bg-transparent"
        >
          {HERO_SLIDES.map((slide, index) => {
            const asset = slide[device];
            const aspectRatio = asset.width / asset.height;
            return (
              <SwiperSlide key={`${slide.title}-${device}`} className="flex!">
                <div
                  className="relative w-full overflow-hidden bg-[#0f0f1a]"
                  style={{ aspectRatio }}
                >
                  <Image
                    src={asset}
                    alt={slide.title}
                    fill
                    className="object-contain"
                    priority={index === 0}
                    sizes="100vw"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-10 text-center">
        <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
          Lead, learn, and grow — together
        </h1>
        <p className="mt-6 text-lg text-white/70 md:text-xl">
          <span className="font-extrabold">BeamHub.org</span> is a vibrant, professional community dedicated to radiation medicine practitioners
          and students across multi-disciplines.
        </p>
        <ButtonLink href="https://www.beamhub.org/feed" external className="mt-10">
          Explore the community
        </ButtonLink>
      </div>
    </section>
  );
}
