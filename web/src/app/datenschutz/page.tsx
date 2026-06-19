import Hero from "@/components/sections/hero/Hero";
import { HeroSection } from "@/components/sections/hero/Hero.types";
import ContentNotice from "@/components/ui/contentNotice/ContentNotice";
import type { ContentNotice as ContentNoticeType } from "@components/ui/contentNotice/ContentNotice.type";

type dataType = {
  heroSection: HeroSection;
  pageIntro: ContentNoticeType;
  pageOutro: ContentNoticeType;
};

export default function Datenschutz() {
  const data: dataType = {
    heroSection: {
      _type: "heroSection",
      header: {
        headline: "Datenschutz",
        text: "Transparenz drüber, welche Daten auf dieser Website verarbeitet werden.",
      },
      settings: {
        id: "hero",
        backgroundImage: {
          src: "/img/background/particel-waves_mono_1920x1280.jpg",
          width: 1920,
          height: 1080,
          alt: "Hero Image",
          _type: "image",
          title: "particle waves",
        },
      },
    },
    pageIntro: {
      icon: {
        src: "/img/icons/icon_secure_lock.svg",
        alt: "Icon Secure",
        width: 50,
        height: 50,
      },
      text: "Der Schutz deine persönlichen Daten ist mir wichtig. Diese Datenschutzerklärung informiert dich über die Art, den Umfang und den Zweck der Verarbeitung personenbezogener Daten auf dieser Website.",
    },
    pageOutro: {
      icon: {
        src: "/img/icons/icon_lock.svg",
        alt: "Icon Lock",
        width: 50,
        height: 50,
      },
      text: "Wenn du zum Datenschutz hast, kannst du mich jederzeit über das Kontaktformular erreichen.",
    },
  };

  const { heroSection, pageIntro, pageOutro } = data;
  const hasPageIntro = pageIntro?.text || pageIntro?.icon;
  const hasPageOutro = pageOutro?.text || pageOutro?.icon;

  return (
    <>
      <Hero data={heroSection} layout='compact' />
      {hasPageIntro && <ContentNotice data={pageIntro} />}
      {hasPageOutro && (
        <ContentNotice data={pageOutro} background='surfaceBackground' />
      )}
    </>
  );
}
