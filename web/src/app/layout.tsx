import type { Metadata } from "next";
import "./globals.css";
import "../styles/styles.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/ui/BackToTopButton";
import HashScroll from "@/lib/utils/HashScroll";
import { cookies } from "next/headers";
import { getProfileFullName } from "@/lib/profile/getFullName";

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

  return (
    <html lang='de'>
      <body>
        {hasFreeEntry && <Header />}
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
