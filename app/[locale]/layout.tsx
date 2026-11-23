import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { I18nProviderClient } from "@/locales/client";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afrix Global - EdTech et Formation Digitale en Afrique",
  description:
    "Afrix Global accélère les compétences digitales en Afrique via des formations, du mentoring et des services tech.",
};

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${poppins.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <I18nProviderClient locale={locale}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </I18nProviderClient>
      </body>
    </html>
  );
}
