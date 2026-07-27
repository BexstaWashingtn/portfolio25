import {
  SectionHeader,
  SectionSettings,
} from "@/types/sections/Section";
import { HeroSection } from "@/types/sections/Hero";
import {
  HeroSectionQueryResult,
  SectionHeaderQueryResult,
  SectionSettingsQueryResult,
} from "@/types/sanity/SanitySection";
import { IMAGE_VARIANTS } from "@/sanity/constants/imageVariants";
import { ImageWithType } from "@/types/Image";
import {
  AboutMeSection,
  ContactSection,
  ProjectsSection,
  SkillsSection,
  StartpageSectionsData,
  TypeAnalysisSection,
  WorkingMethodItem,
  WorkingMethodSection,
} from "@/types/StartpageData";
import {
  AboutMeSectionQueryResult,
  ContactInformationQueryResult,
  ContactSectionQueryResult,
  ProjectsSectionQueryResult,
  SkillsSectionQueryResult,
  StartpageQueryResult,
  TypeAnalysisSectionQueryResult,
  WorkingMethodItemQueryResult,
  WorkingMethodsSectionQueryResult,
} from "@/types/sanity/SanityStartpageData";
import { SanityImage } from "@/types/sanity/SanityImage";
import { SanityImageVariant } from "@/types/sanity/SanityImageVariant";
import { mapSanityImage } from "../sanity/mapSanityImage";

type CmsImage = SanityImage & SanityImageVariant;

export function mapStartpageSections(
  data: StartpageQueryResult,
): StartpageSectionsData {
  const { startpage, siteSettings } = data;

  return {
    heroSection: startpage.heroSection
      ? mapHeroSection(startpage.heroSection, siteSettings.siteLogo)
      : null,
    aboutMeSection: startpage.aboutMeSection
      ? mapAboutMeSection(startpage.aboutMeSection)
      : null,
    typeAnalysisSection: startpage.typeAnalysisSection
      ? mapTypeAnalysisSection(startpage.typeAnalysisSection)
      : null,
    workingMethodsSection: startpage.workingMethodsSection
      ? mapWorkingMethodsSection(startpage.workingMethodsSection)
      : null,
    skillsSection: startpage.skillsSection
      ? mapSkillsSection(startpage.skillsSection)
      : null,
    projectsSection: startpage.projectsSection
      ? mapProjectsSection(startpage.projectsSection)
      : null,
    contactSection: startpage.contactSection
      ? mapContactSection(
          startpage.contactSection,
          siteSettings.contactInformation,
        )
      : null,
  };
}

function mapHeroSection(
  section: HeroSectionQueryResult,
  siteLogo: CmsImage,
): HeroSection {
  return {
    _type: section._type,
    settings: mapSectionSettings(section.settings),
    header: mapSectionHeader({ ...section.header, image: siteLogo }),
  };
}

function mapAboutMeSection(
  section: AboutMeSectionQueryResult,
): AboutMeSection {
  return {
    _type: section._type,
    settings: mapSectionSettings(section.settings),
    header: mapSectionHeader(section.header),
  };
}

function mapTypeAnalysisSection(
  section: TypeAnalysisSectionQueryResult,
): TypeAnalysisSection {
  return {
    _type: section._type,
    settings: section.settings,
    header: section.header,
    content: section.content,
  };
}

function mapWorkingMethodsSection(
  section: WorkingMethodsSectionQueryResult,
): WorkingMethodSection {
  return {
    _type: section._type,
    settings: section.settings,
    header: section.header,
    content: {
      items: section.content.items.flatMap((item) => {
        const mappedItem = mapWorkingMethodItem(item);
        return mappedItem ? [mappedItem] : [];
      }),
    },
  };
}

function mapWorkingMethodItem(
  item: WorkingMethodItemQueryResult,
): WorkingMethodItem | null {
  const icon = mapImage(item.icon);
  if (!icon) return null;

  return {
    _key: item._key,
    _type: item._type,
    id: item.id,
    headline: item.headline,
    text: item.text,
    icon,
  };
}

function mapSkillsSection(section: SkillsSectionQueryResult): SkillsSection {
  return {
    _type: section._type,
    settings: mapSectionSettings(section.settings),
    header: mapSectionHeader(section.header),
    content: section.content,
  };
}

function mapProjectsSection(
  section: ProjectsSectionQueryResult,
): ProjectsSection {
  return {
    _type: section._type,
    settings: mapSectionSettings(section.settings),
    header: mapSectionHeader(section.header),
  };
}

function mapContactSection(
  section: ContactSectionQueryResult,
  contact: ContactInformationQueryResult,
): ContactSection {
  return {
    _type: section._type,
    settings: mapSectionSettings(section.settings),
    header: mapSectionHeader(section.header),
    content: {
      firstName: contact.firstName,
      lastName: contact.lastName,
      address: contact.address,
      phone: contact.phone,
      email: contact.email,
      ...(contact.github && { github: contact.github }),
    },
  };
}

function mapSectionSettings(
  settings: SectionSettingsQueryResult,
): SectionSettings {
  return {
    id: settings.id,
    ...(settings.backgroundImage && {
      backgroundImage: mapImage(settings.backgroundImage),
    }),
  };
}

function mapSectionHeader(header: SectionHeaderQueryResult): SectionHeader {
  return {
    ...(header.headline && { headline: header.headline }),
    ...(header.text && { text: header.text }),
    ...(header.image && { image: mapImage(header.image) }),
  };
}

function mapImage(image: CmsImage): ImageWithType | null {
  const variant = IMAGE_VARIANTS[image.imageVariant];

  return mapSanityImage({
    image,
    width: variant.width,
    height: variant.height,
    alt: image.alt,
    title: image.title ?? image.alt,
    _type: image._type,
  });
}
