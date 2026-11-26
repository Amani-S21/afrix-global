"use client";

import Image from "next/image";
import { ActionLink } from "@/components/site";
import { useScopedI18n } from "@/locales/client";

export function Hero() {
  const heroT = useScopedI18n("home.hero");

  return (
    <section className="relative isolate flex h-[calc(100svh-5rem)] items-center overflow-hidden border-b border-white/15">
      <Image
        src="/images/hero image.jpg"
        alt={heroT("imageAlt")}
        fill
        priority
        className="-z-20 object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="max-w-5xl">
          <h1 className="max-w-4xl text-[clamp(2.1rem,6vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.045em] text-white text-balance">
            {heroT("title")}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 text-pretty sm:text-lg">
            {heroT("description")}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ActionLink href="/services" variant="outline">
              {heroT("cta.startups")}
            </ActionLink>

            <ActionLink href="/services" variant="outline">
              {heroT("cta.hireTalent")}
            </ActionLink>
          </div>

          <p className="mt-7 border-l-2 border-brand-blue pl-4 text-sm font-semibold text-white [@media(max-height:600px)]:hidden">
            {heroT("tagline.train")}{" "}
            <span className="text-white/60">
              {heroT("tagline.create")}
            </span>{" "}
            <span className="text-white">{heroT("tagline.connect")}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
