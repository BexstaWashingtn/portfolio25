import Hero from "@/components/sections/hero/Hero";
import ContentNotice from "@/components/ui/contentNotice/ContentNotice";
import InfoList from "@/components/ui/infoList/InfoList";
import { LegalPageDataQueryResult } from "./LegalPage.types";

type Props = {
  data: LegalPageDataQueryResult;
};

export default function LegalPage({ data }: Props) {
  const { heroSection, pageIntro, pageOutro, content } = data.legalPage;

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
