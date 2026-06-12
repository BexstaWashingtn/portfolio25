import Hero from "@/components/sections/hero/Hero";
import { HeroSection } from "@/types/StartpageData";
import PageIntro from "@/components/sections/PageIntro";
import { Image } from "@/types/Image";

type dataType = {
  heroSection: HeroSection;
  pageIntro: {
    icon: Image;
    text: string;
  };
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
  };

  const { heroSection, pageIntro } = data;

  return (
    <>
      <Hero data={heroSection} layout='compact'></Hero>
      <PageIntro data={pageIntro} />
    </>
  );
}
