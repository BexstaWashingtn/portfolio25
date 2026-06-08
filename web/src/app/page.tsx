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
import {
  PreparedSectionQueryResult,
  StartpageQueryResult,
} from "@/types/sanity/SanityStartpageData";
import {
  AboutMeSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
  StartpageSectionsData,
  TypeAnalysisSection,
  WorkingMethodSection,
} from "@/types/StartpageData";
import { notFound } from "next/navigation";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import { mapImagesDeep } from "@/lib/mappers/sanity/mapImagesDeep";

export default async function Home() {
  const sanityStartpageData: StartpageQueryResult = await getStartpage();

  if (!sanityStartpageData) {
    notFound();
  }

  const StartpageSectionsData = mappedStartpageSections(sanityStartpageData);

  const {
    heroSection,
    aboutMeSection,
    typeAnalysisSection,
    workingMethodsSection,
    skillsSection,
    projectsSection,
    contactSection,
  } = StartpageSectionsData;

  const aboutMeSectionContent = (
    <>
      {aboutMeSection && <Aboutme data={aboutMeSection} />}
      {typeAnalysisSection && <TypeAnalysis data={typeAnalysisSection} />}
      {workingMethodsSection && <WorkingMethod data={workingMethodsSection} />}
    </>
  );

  return (
    <>
      <main id='main' className={styles.main}>
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

function mappedStartpageSections(
  data: StartpageQueryResult,
): StartpageSectionsData {
  // Moves contact details from the page settings to the contact section
  // & site logo from site settings to hero section header
  const sectionData = {
    ...data.startpage,
    contactSection: data.startpage.contactSection
      ? {
          ...data.startpage.contactSection,
          content: data.siteSettings.contactInformation,
        }
      : null,
    heroSection: data.startpage.heroSection
      ? {
          ...data.startpage.heroSection,
          header: {
            ...data.startpage.heroSection.header,
            image: data.siteSettings.siteLogo,
          },
        }
      : null,
  };

  // initiate the corresponding Sanity image build.
  return {
    heroSection: sectionData.heroSection
      ? (mapSectionImages(sectionData.heroSection) as HeroSection)
      : null,

    aboutMeSection: sectionData.aboutMeSection
      ? (mapSectionImages(sectionData.aboutMeSection) as AboutMeSection)
      : null,

    typeAnalysisSection: sectionData.typeAnalysisSection
      ? (mapSectionImages(
          sectionData.typeAnalysisSection,
        ) as TypeAnalysisSection)
      : null,

    workingMethodsSection: sectionData.workingMethodsSection
      ? (mapSectionImages(
          sectionData.workingMethodsSection,
        ) as WorkingMethodSection)
      : null,

    skillsSection: sectionData.skillsSection
      ? (mapSectionImages(sectionData.skillsSection) as SkillsSection)
      : null,

    projectsSection: sectionData.projectsSection
      ? (mapSectionImages(sectionData.projectsSection) as ProjectsSection)
      : null,

    contactSection: sectionData.contactSection
      ? (mapSectionImages(sectionData.contactSection) as ContactSection)
      : null,
  };
}

function mapSectionImages(section: PreparedSectionQueryResult): unknown {
  return {
    ...section,
    ...(section.settings && {
      settings: mapImagesDeep(section.settings),
    }),
    ...(section.header && {
      header: mapImagesDeep(section.header),
    }),
    ...("content" in section &&
      section.content && {
        content: mapImagesDeep(section.content),
      }),
  };
}
