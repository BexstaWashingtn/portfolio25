import Hero from "@/components/sections/hero/Hero";
import PageIntro from "@/components/sections/PageIntro";
import { Image } from "@/types/Image";
import { HeroSection } from "@/types/StartpageData";

type dataType = {
  heroSection: HeroSection;
  pageIntro: {
    icon: Image;
    text: string;
  };
};

export default function Impressum() {
  const data: dataType = {
    heroSection: {
      _type: "heroSection",
      header: {
        headline: "Impressum",
        text: "Angaben gemäß § 5 TMG",
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
        src: "/img/icons/icon_document.svg",
        alt: "Icon Secure",
        width: 50,
        height: 50,
      },
      text: "Verantowrtlich für den Inhalt dieser Website gemäß § 55 Abs. 2 RStV.",
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
