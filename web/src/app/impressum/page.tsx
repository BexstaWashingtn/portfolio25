import LegalPage from "@/components/pages/legalPages/LegalPage";
import { LegalPageDataQueryResult } from "@/components/pages/legalPages/LegalPage.types";
import { fetchLegalPage } from "@/sanity/fetchLegalPage";

export default async function Impressum() {
  /* const data: dataType = {
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
  }; */

  const dataQueryResult: LegalPageDataQueryResult =
    await fetchLegalPage("imprint");

  console.log("LegalPageQueryResult: ", dataQueryResult);

  const mappedData = mapLegalPageData(dataQueryResult);

  console.log("mappedLegalPage: ", mappedData);

  return <LegalPage data={mappedData} />;
}

function mapLegalPageData(data: LegalPageDataQueryResult) {
  return data;
}
