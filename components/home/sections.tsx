"use client";

import {
  ActionLink,
  Eyebrow,
  MediaZone,
  Section,
  SectionHeading,
} from "@/components/site";
import {
  BrainCircuit,
  Briefcase,
  CloudCog,
  Code2,
  Database,
  GraduationCap,
  Megaphone,
  MonitorSmartphone,
  Plus,
  Rocket,
  Search,
  ShieldCheck,
  PenTool,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScopedI18n } from "@/locales/client";

/* ---------- Capabilities ticker ---------- */
export function CapabilitiesTicker() {
  const t = useScopedI18n("home.ticker");
  const keys = ["web", "platforms", "software", "design", "cloud", "data"] as const;
  const items = [...keys, ...keys];

  return (
    <div className="overflow-hidden border-b border-white/10 bg-white py-4 text-black">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
        className="flex w-max items-center"
      >
        {items.map((key, index) => (
          <div key={key + index} className="flex items-center">
            <span className="px-7 text-sm font-semibold uppercase tracking-[0.14em] sm:px-10">
              {t(key)}
            </span>
            <span
              className={
                index % 4 === 0
                  ? "h-2 w-2 rounded-full bg-brand-blue"
                  : index % 4 === 1
                    ? "h-2 w-2 rounded-full bg-brand-red"
                    : index % 4 === 2
                      ? "h-2 w-2 rounded-full bg-brand-yellow"
                      : "h-2 w-2 rounded-full bg-brand-green"
              }
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ---------- Software engineering ---------- */
export function SoftwareExpertise() {
  const t = useScopedI18n("home.expertise");
  const capabilities = [
    { icon: MonitorSmartphone, key: "web" },
    { icon: Database, key: "software" },
    { icon: CloudCog, key: "cloud" },
  ] as const;

  return (
    <Section className="py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />
        <div className="flex flex-wrap gap-3 lg:justify-end">
          {(["performance", "security", "scalability"] as const).map((key) => (
            <span
              key={key}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/70"
            >
              {t("standards." + key)}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12 grid overflow-hidden rounded-lg border border-border md:grid-cols-3">
        {capabilities.map(({ icon: Icon, key }, index) => (
          <motion.article
            key={key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="group relative min-h-72 border-b border-border bg-card p-7 transition-colors hover:bg-white md:border-r md:border-b-0 md:last:border-r-0"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-white/15 bg-black text-white transition-colors group-hover:border-black/15">
                <Icon className="h-6 w-6" />
              </div>
              <span
                className={
                  index === 0
                    ? "h-2.5 w-2.5 rounded-full bg-brand-blue"
                    : index === 1
                      ? "h-2.5 w-2.5 rounded-full bg-brand-red"
                      : index === 2
                        ? "h-2.5 w-2.5 rounded-full bg-brand-yellow"
                        : "h-2.5 w-2.5 rounded-full bg-brand-green"
                }
              />
            </div>
            <div className="mt-16">
              <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-black">
                {t("items." + key + ".title")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60 transition-colors group-hover:text-black/60">
                {t("items." + key + ".description")}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Delivery method ---------- */
export function DeliveryProcess() {
  const t = useScopedI18n("home.process");
  const steps = [
    { icon: Search, key: "discover" },
    { icon: PenTool, key: "design" },
    { icon: Code2, key: "build" },
    { icon: Workflow, key: "evolve" },
  ] as const;

  return (
    <Section className="py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
          <div className="mt-8 flex items-center gap-3 text-sm text-white/60">
            <ShieldCheck className="h-5 w-5 text-brand-blue" />
            <span>{t("commitment")}</span>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {steps.map(({ icon: Icon, key }, index) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="bg-background p-7"
            >
              <Icon className="h-6 w-6 text-brand-blue" />
              <h3 className="mt-8 text-lg font-semibold text-white">
                {t("steps." + key + ".title")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {t("steps." + key + ".description")}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Ecosystem Overview ---------- */
export function Ecosystem() {
  const ecosystemT = useScopedI18n("home.ecosystem");
  const pillar = useScopedI18n("home.ecosystem.pillars");
  const pillars = [
    {
      icon: GraduationCap,
      title: pillar("train.title"),
      desc: pillar("train.description"),
    },
    {
      icon: Rocket,
      title: pillar("create.title"),
      desc: pillar("create.description"),
    },
    {
      icon: Briefcase,
      title: pillar("connect.title"),
      desc: pillar("connect.description"),
    },
  ];

  return (
    <Section className="py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow={ecosystemT("eyebrow")}
            title={ecosystemT("title")}
            description={ecosystemT("description")}
          />
          <div className="mt-10 flex flex-col gap-px overflow-hidden rounded-lg border border-border bg-border">
            {pillars.map((p, index) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex gap-5 bg-background p-6 transition-colors hover:bg-card"
              >
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border">
                  <span className="absolute -left-px top-3 h-5 w-0.5 bg-brand-blue" />
                  <p.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <MediaZone
          src="/images/ecosystem.jpg"
          alt={ecosystemT("imageAlt")}
          aspect="aspect-[4/5]"
          shape="right"
        />
      </div>
    </Section>
  );
}

/* ---------- Programs Overview ---------- */

export function ProgramsOverview() {
  const programT = useScopedI18n("home.programs");
  const programs = [
    { icon: Code2, title: programT("items.web") },
    { icon: BrainCircuit, title: programT("items.ai") },
    { icon: PenTool, title: programT("items.uiux") },
    { icon: Megaphone, title: programT("items.marketing") },
  ];
  return (
    <Section className="py-16 sm:py-24">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow={programT("eyebrow")}
          title={programT("title")}
          description={programT("description")}
        />
        <ActionLink href="/programs" variant="outline">
          {programT("viewAll")}
        </ActionLink>
      </div>
      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
        {programs.map((p) => (
          <Link
            key={p.title}
            href="/programs"
            className="group flex min-h-48 flex-col justify-between gap-8 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
          >
            <p.icon className="h-7 w-7 text-brand-blue transition-colors group-hover:text-black" />
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-black">
                {p.title}
              </span>
              <Plus className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-black" />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Services Overview ---------- */

export function ServicesOverview() {
  const serviceT = useScopedI18n("home.services");
  const services = [
    {
      title: serviceT("items.dev.title"),
      desc: serviceT("items.dev.description"),
    },
    {
      title: serviceT("items.marketing.title"),
      desc: serviceT("items.marketing.description"),
    },
    {
      title: serviceT("items.design.title"),
      desc: serviceT("items.design.description"),
    },
    {
      title: serviceT("items.custom.title"),
      desc: serviceT("items.custom.description"),
    },
  ];

  return (
    <Section className="bg-white py-16 text-black sm:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <MediaZone
          src="/images/service.jpg"
          alt="African UI/UX designer working across dual monitors"
          aspect="aspect-[4/3]"
          className="border-black/10"
          shape="left"
        />
        <div>
          <SectionHeading
            eyebrow={serviceT("eyebrow")}
            title={serviceT("title")}
            description={serviceT("description")}
            className="[&_div_span:last-child]:text-black [&_h2]:text-black [&_p]:text-black/60"
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-black/10 bg-black/10 sm:grid-cols-2">
            {services.map((s, index) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="bg-white p-6"
              >
                <h3 className="text-sm font-semibold text-black">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <ActionLink href="/services" className="mt-8 bg-black text-white hover:bg-brand-blue">
            {serviceT("cta")}
          </ActionLink>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Innovation Hub ---------- */
export function InnovationHubFeature() {
  const innovationT = useScopedI18n("home.innovationHub");
  return (
    <Section className="py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-lg border border-border bg-card">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <Eyebrow>{innovationT("eyebrow")}</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              {innovationT("title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {innovationT("description")}
            </p>
            <ActionLink href="/innovation-hub" className="mt-8 w-fit">
              {innovationT("cta")}
            </ActionLink>
          </div>
          <div className="relative min-h-64 lg:min-h-full">
            <MediaZone
              src="/images/innovation.jpg"
              alt={innovationT("imageAlt")}
              aspect="h-full"
              className="rounded-none border-0 border-l border-border"
              shape="soft"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Success Stories ---------- */
const stories = [
  {
    quote:
      "Afrix Global didn't just teach me to code — they placed me on an international project within months of graduating.",
    name: "Amara Okeke",
    role: "Full-Stack Developer, Lagos",
  },
  {
    quote:
      "The Innovation Hub gave my startup the mentorship and network we needed to raise our first round.",
    name: "Thabo Molefe",
    role: "Founder, PanAfri Pay",
  },
  {
    quote:
      "As a freelancer in the Talent 4 Startups network, I now work with clients across three continents.",
    name: "Fatima Diallo",
    role: "Product Designer, Dakar",
  },
];

export function SuccessStories() {
  return (
    <Section className="py-16 sm:py-24">
      <SectionHeading
        eyebrow="Success Stories"
        title="Real journeys, real outcomes"
      />
      <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
        {stories.map((s) => (
          <figure
            key={s.name}
            className="flex flex-col justify-between gap-8 bg-background p-8"
          >
            <blockquote className="text-base leading-relaxed text-foreground text-pretty">
              &ldquo;{s.quote}&rdquo;
            </blockquote>
            <figcaption>
              <p className="text-sm font-semibold text-foreground">{s.name}</p>
              <p className="text-sm text-muted-foreground">{s.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Partners ---------- */

export function PartnersStrip() {
  const partenerT = useScopedI18n("home.partners");
  const partners = [
    "Digital Africa",
    "TechCorp",
    "FutureFund",
    "InnovateNGO",
    "GlobalReach",
    "BuildAfrica",
  ];
  return (
    <Section className="bg-card/40 py-16 sm:py-24">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {partenerT("title")}
      </p>
      <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
        {partners.map((p) => (
          <div
            key={p}
            className="flex items-center justify-center bg-background p-6"
          >
            <span className="text-sm font-semibold tracking-tight text-muted-foreground">
              {p}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
