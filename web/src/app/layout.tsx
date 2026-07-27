import type { Metadata } from "next";
import "./globals.css";
import "../styles/styles.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/ui/BackToTopButton";
import HashScroll from "@/lib/utils/HashScroll";
import { cookies } from "next/headers";
import { getProfileFullName } from "@/lib/profile/getFullName";
import { SkipToContent } from "@/components/utils/a11y";
import { getHeader } from "@/sanity/fetchHeader";
import { mapHeaderData } from "@/lib/mappers/header/mapHeaderData";

const fullName = getProfileFullName();

export const metadata: Metadata = {
  title: `Portfolio | ${fullName}`,
  description: `Portfolio von ${fullName} mit Projekten aus Webentwicklung, React, Next.js und UX/UI.`,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const hasFreeEntry = Boolean(cookieStore.get("freeentry")?.value);
  const headerData = hasFreeEntry ? mapHeaderData(await getHeader()) : null;

  return (
    <html lang='de'>
      <body>
        <SkipToContent />
        {headerData && <Header data={headerData} />}
        {children}
        {/* <Analytics /> */}
        {hasFreeEntry && <Footer />}

        {/* HashScroll makes Navigation clicks Scrollable */}
        {hasFreeEntry && <HashScroll />}

        {/* Scroll to Top 0px */}
        {hasFreeEntry && <BackToTopButton />}
      </body>
    </html>
  );
}
