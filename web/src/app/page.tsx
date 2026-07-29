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
import { notFound } from "next/navigation";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import { mapStartpageSections } from "@/lib/mappers/startpage/mapStartpageSections";
import { getProjectsPreview } from "@/sanity/fetchProjects";
import { mapProjectPreviews } from "@/lib/mappers/projects/mapProjectPreviews";

export default async function Home() {
  const [sanityStartpageData, sanityProjects] = await Promise.all([
    getStartpage(),
    getProjectsPreview(),
  ]);

  if (!sanityStartpageData) {
    notFound();
  }

  const startpageSectionsData = mapStartpageSections(sanityStartpageData);
  const projects = mapProjectPreviews(sanityProjects);

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
            <HeroOverlay icon='down' />
          </Hero>
        )}

        {projectsSection && (
          <Projects data={projectsSection} projects={projects} />
        )}

        {skillsSection && <Skills data={skillsSection} />}

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
                startX: "50%",
                startY: "-25%",
                colorStops: [
                  {
                    color: "rgba(0, 20, 45, 0.8)",
                    position: "0%",
                  },

                  {
                    color: "rgba(0, 0, 0, 0.8)",
                    position: "67%",
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

        {contactSection && <Contact data={contactSection} />}
      </main>
    </>
  );
}
