import groq from "groq";

export const HEADER_QUERY = groq`{
  "navigation": *[_type == "startpage"][0]{
    "heroSectionId": heroSection.sectionSettings.sectionId,

    "navigation": array::compact([
      select(
        heroSection.sectionSettings.showInNavigation => {
          "id": heroSection.sectionSettings.sectionId,
          "label": heroSection.sectionSettings.navigationLabel
        }
      ),
      select(
        aboutMeSection.sectionSettings.showInNavigation => {
          "id": aboutMeSection.sectionSettings.sectionId,
          "label": aboutMeSection.sectionSettings.navigationLabel
        }
      ),
      select(
        typeAnalysisSection.sectionSettings.showInNavigation => {
          "id": typeAnalysisSection.sectionSettings.sectionId,
          "label": typeAnalysisSection.sectionSettings.navigationLabel
        }
      ),
      select(
        workingMethodsSection.sectionSettings.showInNavigation => {
          "id": workingMethodsSection.sectionSettings.sectionId,
          "label": workingMethodsSection.sectionSettings.navigationLabel
        }
      ),
      select(
        skillsSection.sectionSettings.showInNavigation => {
          "id": skillsSection.sectionSettings.sectionId,
          "label": skillsSection.sectionSettings.navigationLabel
        }
      ),
      select(
        projectsSection.sectionSettings.showInNavigation => {
          "id": projectsSection.sectionSettings.sectionId,
          "label": projectsSection.sectionSettings.navigationLabel
        }
      ),
      select(
        contactSection.sectionSettings.showInNavigation => {
          "id": contactSection.sectionSettings.sectionId,
          "label": contactSection.sectionSettings.navigationLabel
        }
      )
    ])
  },

  "logo": *[_type == "siteSettings"][0].siteLogo
}`;
