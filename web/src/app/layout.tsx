import type { Metadata } from "next";
import "./globals.css";
import "../styles/styles.css";
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
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
