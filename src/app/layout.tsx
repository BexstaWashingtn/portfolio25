import type { Metadata } from "next";
import { Oswald, Inter, Quattrocento_Sans } from "next/font/google";
import "./globals.css";
import "../styles/styles.css";
//import { Analytics } from "@vercel/analytics/next";

// TODO: add local fonts - remove google Api Fonts

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
});

const quattrocento = Quattrocento_Sans({
  variable: "--font-quattrocento",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

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
      <body
        className={`${oswald.variable} ${inter.variable} ${quattrocento.variable}`}
      >
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
