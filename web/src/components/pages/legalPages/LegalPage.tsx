import Hero from "@/components/sections/hero/Hero";
import ContentNotice from "@/components/ui/contentNotice/ContentNotice";
import InfoList from "@/components/ui/infoList/InfoList";
import { LegalPageData } from "./LegalPage.types";

type Props = {
  data: LegalPageData;
};

export default function LegalPage({ data }: Props) {
  const { legalPage } = data;
  const {
    heroSection,
    contentNoticeBottom,
    contentNoticeTop,
    legalPageContent,
  } = legalPage;

  return (
    <>
      {heroSection && <Hero data={heroSection} layout='compact' />}
      {contentNoticeTop && <ContentNotice data={contentNoticeTop} />}
      {legalPageContent && (
        <InfoList data={legalPageContent}>
          {contentNoticeBottom && (
            <ContentNotice
              data={contentNoticeBottom}
              background='surfaceBackground'
            />
          )}
        </InfoList>
      )}
    </>
  );
}
