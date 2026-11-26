"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
      <div className="absolute inset-0 -z-10 bg-black/55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-transparent to-black/25" />

      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl text-[clamp(2.1rem,6vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.045em] text-white text-balance"
          >
            {heroT("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 text-pretty sm:text-lg"
          >
            {heroT("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex flex-wrap justify-center gap-3"
          >
            <ActionLink href="/services">
              {heroT("cta.startups")}
            </ActionLink>

            <ActionLink href="/talent-4-startups" variant="outline">
              {heroT("cta.hireTalent")}
            </ActionLink>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-8 w-fit border-b-2 border-brand-blue pb-2 text-sm font-semibold text-white [@media(max-height:600px)]:hidden"
          >
            {heroT("tagline.train")}{" "}
            <span className="text-white/60">
              {heroT("tagline.create")}
            </span>{" "}
            <span className="text-white">{heroT("tagline.connect")}</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
