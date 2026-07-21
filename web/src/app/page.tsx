import styles from "./page.module.css";

import Hero from "@/components/sections/hero/Hero";
import { BackgroundGradientWrapper } from "@/components/layout/BackgroundGradientWrapper";
import { BackgroundImageWrapper } from "@/components/layout/BackgroundImageWrapper";
import Aboutme from "@/components/sections/Aboutme";
import TypeAnalysis from "@/components/sections/TypeAnalysis";
import Projects from "@/components/sections/projects/SectionProjects";
import WorkingMethod from "@/components/sections/workingMethods/WorkingMethod";
import Skills from "@/components/sections/skills/Skills";
import Contact from "@/components/sections/contact/Contact";
import { getStartpage } from "@/sanity/fetchStartpage";
import { StartpageQueryResult } from "@/types/sanity/SanityStartpageData";
import { notFound } from "next/navigation";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import { mapStartpageSections } from "@/lib/mappers/startpage/mapStartpageSections";

export default async function Home() {
  const sanityStartpageData: StartpageQueryResult = await getStartpage();

  if (!sanityStartpageData) {
    notFound();
  }

  const startpageSectionsData = mapStartpageSections(sanityStartpageData);

  const {
    heroSection,
    aboutMeSection,
    typeAnalysisSection,
    workingMethodsSection,
    skillsSection,
    projectsSection,
    contactSection,
  } = startpageSectionsData;

  const aboutMeSectionContent = (
    <>
      {aboutMeSection && <Aboutme data={aboutMeSection} />}
      {typeAnalysisSection && <TypeAnalysis data={typeAnalysisSection} />}
      {workingMethodsSection && <WorkingMethod data={workingMethodsSection} />}
    </>
  );

  return (
    <>
      <main id='main' tabIndex={-1} className={styles.main}>
        {heroSection && (
          <Hero data={heroSection}>
            {/* Overlay shows locked state of website*/}
            <HeroOverlay icon='down' />
          </Hero>
        )}

        {/* AboutME Section */}

        {aboutMeSection?.settings.backgroundImage?.src ? (
          <BackgroundImageWrapper
            image={{
              src: aboutMeSection.settings.backgroundImage.src,
              alt: aboutMeSection.settings.backgroundImage.alt,
              ...(aboutMeSection.settings?.backgroundImage?.title && {
                title: aboutMeSection.settings.backgroundImage.title,
              }),
              style: { opacity: 1 },
            }}
            blur={32}
          >
            <BackgroundGradientWrapper
              gradient={{
                type: "radial",
                shape: "circle",
                startX: "75%",
                startY: "0%",
                colorStops: [
                  {
                    color: "rgba(113,21,33, 0.75)",
                    position: "0%",
                  },

                  {
                    color: "rgba(20,20,20, 0.75)",
                    position: "67%",
                  },
                  {
                    color: "rgba(75, 47, 38, 0.75)",
                    position: "100%",
                  },
                ],
              }}
            >
              {aboutMeSectionContent}
            </BackgroundGradientWrapper>
          </BackgroundImageWrapper>
        ) : (
          aboutMeSectionContent
        )}
        {skillsSection && <Skills data={skillsSection} />}
        {projectsSection && <Projects data={projectsSection} />}
        {/*<SectionMusic />*/}
        {contactSection && <Contact data={contactSection} />}
      </main>
    </>
  );
}
