import type { Metadata } from "next";
import { Oswald, Nokora, Inter, Quattrocento_Sans } from "next/font/google";
import "../styles/styles.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
});

const nokora = Nokora({
  variable: "--font-nokora",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
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
        className={`${oswald.variable} ${nokora.variable} ${inter.variable} ${quattrocento.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
