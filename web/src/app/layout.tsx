import type { Metadata } from "next";
import "./globals.css";
import "../styles/styles.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HashScroll from "./components/HashScroll";

//import { Analytics } from "@vercel/analytics/next";
// TODO: is Website ready acivate Vercel Analytics

export const metadata: Metadata = {
  title: "Portfolio | Thomas Badrow",
  description: "Herzlich Willkommen auf meinem Portfolio",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='de'>
      <body>
        <Header />
        {children}
        {/* <Analytics /> */}
        <Footer />

        {/* HashScroll makes Navigation clicks Scrollable */}
        <HashScroll />
      </body>
    </html>
  );
}
