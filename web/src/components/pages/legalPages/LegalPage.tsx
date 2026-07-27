import Hero from "@/components/sections/hero/Hero";
import ContentNotice from "@/components/ui/contentNotice/ContentNotice";
import InfoList from "@/components/ui/infoList/InfoList";
import { LegalPageData } from "@/types/legal/LegalPage";

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
      <main id='main' tabIndex={-1}>
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
      </main>
    </>
  );
}
