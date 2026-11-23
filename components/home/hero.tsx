"use client";

import Image from "next/image";
import { ActionLink } from "@/components/site";
import { useScopedI18n } from "@/locales/client";

export function Hero() {
  const heroT = useScopedI18n("home.hero");

  return (
    <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-end overflow-hidden border-b border-white/15">
      <Image
        src="/images/hero.jpg"
        alt={heroT("imageAlt")}
        fill
        priority
        className="-z-20 object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/85 to-black/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-black/20" />

      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-brand-blue" />
            <span className="text-xs font-medium text-white/70">
              {heroT("badge")}
            </span>
          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-white text-balance sm:text-6xl lg:text-7xl">
            {heroT("title")}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 text-pretty sm:text-lg">
            {heroT("description")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href="/contact">{heroT("cta.joinProgram")}</ActionLink>

            <ActionLink href="/services" variant="outline">
              {heroT("cta.startups")}
            </ActionLink>

            <ActionLink href="/services" variant="outline">
              {heroT("cta.hireTalent")}
            </ActionLink>
          </div>

          <p className="mt-12 border-l-2 border-brand-blue pl-4 text-sm font-semibold text-white">
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
