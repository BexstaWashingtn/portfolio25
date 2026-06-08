import groq from "groq";

export const LOCKEDPAGE_QUERY = groq`{ "siteSettings": *[_type == "siteSettings"][0]{
  "siteLogo": siteLogo,
  },
  "startpage": *[_type == "startpage"][0]{
    "heroSection": select(
      heroSection.sectionSettings.visible => {
        "_type": "heroSection",
        "settings":{ 
          "id": heroSection.sectionSettings.sectionId,
          "backgroundImage": heroSection.sectionSettings.backgroundImage,
        },
        "header": {
          "headline": heroSection.teaser
        }
      }
    )
  }
}`;
