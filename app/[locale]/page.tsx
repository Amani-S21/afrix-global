import { Hero } from "@/components/home/hero";
import {
  Ecosystem,
  CapabilitiesTicker,
  SoftwareExpertise,
  DeliveryProcess,
  ProgramsOverview,
  ServicesOverview,
  InnovationHubFeature,
} from "@/components/home/sections";
import { CtaBand } from "@/components/site";
import { getScopedI18n } from "@/locales/server";

export default async function HomePage() {
  const t = await getScopedI18n("home.cta");
  return (
    <>
      <Hero />
      <CapabilitiesTicker />
      <SoftwareExpertise />
      <ProgramsOverview />
      <Ecosystem />
      <ServicesOverview />
      <DeliveryProcess />
      <InnovationHubFeature />
      <CtaBand
        title={t("title")}
        description={t("description")}
        primary={{
          href: "/programs",
          label: t("primary"),
        }}
        secondary={{
          href: "/contact",
          label: t("secondary"),
        }}
      />
    </>
  );
}
