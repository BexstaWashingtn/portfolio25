import Hero from "@/components/sections/hero/Hero";
import ContentNotice from "@/components/ui/contentNotice/ContentNotice";
import InfoList from "@/components/ui/infoList/InfoList";
import { InfoList as InfoListType } from "@/components/ui/infoList/InfoList.type";
import { HeroSection } from "@/types/StartpageData";
import type { ContentNotice as ContentNoticeType } from "@components/ui/contentNotice/ContentNotice.type";

type dataType = {
  heroSection: HeroSection;
  pageIntro: ContentNoticeType;
  pageOutro: ContentNoticeType;
  content: InfoListType[];
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
    pageOutro: {
      icon: {
        src: "/img/icons/icon_document.svg",
        alt: "Icon Lock",
        width: 50,
        height: 50,
      },
      text: "Stand: Mai 2024",
    },
    content: [
      {
        icon: {
          src: "/img/icons/icon_person.svg",
          width: 50,
          height: 50,
          alt: "icon person",
          title: "icon person",
        },
        headline: "Angaben gemäß § TMG",
        text: "Vorname Nachname[br]Musterstr. 24[br]12335 Stadt[br]Deutschland",
      },
      {
        icon: {
          src: "/img/icons/icon_mail.svg",
          width: 50,
          height: 50,
          alt: "icon mail",
          title: "icon mail",
        },
        headline: "Angaben gemäß § TMG",
        text: "Vorname Nachname[br]Musterstr. 24[br]12335 Stadt[br]Deutschland",
      },
    ],
  };

  const { heroSection, pageIntro, pageOutro, content } = data;

  return (
    <>
      {heroSection && <Hero data={heroSection} layout='compact' />}
      {pageIntro && <ContentNotice data={pageIntro} />}
      {content && (
        <InfoList data={content}>
          {pageOutro && (
            <ContentNotice data={pageOutro} background='surfaceBackground' />
          )}
        </InfoList>
      )}
    </>
  );
}
