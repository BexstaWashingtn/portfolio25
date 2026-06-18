import groq from "groq";

export const STARTPAGE_QUERY = groq`{ "siteSettings": *[_type == "siteSettings"][0]{
    "contactInformation": {
      "firstName": contactInformation.firstName,
      "lastName":contactInformation.lastName,
      "address":contactInformation.address,
      "phone":contactInformation.phone,
      "email":contactInformation.email,
      "github":contactInformation.github,
    },
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
          "headline": heroSection.headline,
          "text": heroSection.text,
        }
      }
    ),
    "aboutMeSection": select(
      aboutMeSection.sectionSettings.visible => {
        "_type": "aboutMeSection",
        "settings":{ 
          "id": aboutMeSection.sectionSettings.sectionId,
          "backgroundImage": aboutMeSection.sectionSettings.backgroundImage,
        },
        "header": {
          "image": aboutMeSection.sectionHeader.headerImage,
          "headline": aboutMeSection.sectionHeader.headerHeadline,
          "text": aboutMeSection.sectionHeader.headerText,
        }
      }
    ), 
    "typeAnalysisSection": select(
      typeAnalysisSection.sectionSettings.visible => {
        "_type": "typeAnalysisSection",
        "settings":{ 
          "id": typeAnalysisSection.sectionSettings.sectionId,
        },
        "header": {
          "headline": typeAnalysisSection.headerHeadline,
        },
        "content": {
          "pros": typeAnalysisSection.pros,
          "cons": typeAnalysisSection.cons,
        }
      }
    ),
    "workingMethodsSection": select(
      workingMethodsSection.sectionSettings.visible => {
        "_type": "workingMethodsSection",
        "settings":{ 
          "id": workingMethodsSection.sectionSettings.sectionId,
        },
        "header": {
          "headline": workingMethodsSection.headerHeadline,
        },
        "content": {
          "items": workingMethodsSection.items[]{
            ...,
            "id": _key
          },
        },
      },
    ),
    "skillsSection": select(
      skillsSection.sectionSettings.visible => {
        "_type": "skillsSection",
        "settings":{ 
          "id": skillsSection.sectionSettings.sectionId,
          "backgroundImage": skillsSection.sectionSettings.backgroundImage,
        },
        "header": {
          "image": skillsSection.sectionHeader.headerImage,
          "headline": skillsSection.sectionHeader.headerHeadline,
          "text": skillsSection.sectionHeader.headerText,
        },
        "content": [
          {
            "title": "Erfahrungen",
            "entries": skillsSection.skills.experiences.items,
          },
          {
            "title": "Technologien",
            "subcategories": [
              {
                "title" : "Frontend",
                "entries": skillsSection.skills.technologies.frontend.items
              },
              {
                "title" : "Backend",
                "entries": skillsSection.skills.technologies.backend.items
              }
            ]
          },
          {
            "title": "Grafik",
            "entries": skillsSection.skills.graphics.items
          },
          {
            "title": "Software",
            "entries": skillsSection.skills.software.items
          },
          {
            "title": "OS",
            "entries": skillsSection.skills.os.items
          },
          {
            "title": "Sprachen",
            "entries": skillsSection.skills.languages.items
          },
        ]
      }
    ),
    "projectsSection": select(
      projectsSection.sectionSettings.visible => {
        "_type": "projectsSection",
        "settings":{ 
          "id": projectsSection.sectionSettings.sectionId,
          "backgroundImage": projectsSection.sectionSettings.backgroundImage,
        },
        "header": {
          "image": projectsSection.sectionHeader.headerImage,
          "headline": projectsSection.sectionHeader.headerHeadline,
          "text": projectsSection.sectionHeader.headerText,
        },
      }
    ),
    "contactSection": select(
      contactSection.sectionSettings.visible => {
        "_type": "contactSection",
        "settings":{ 
          "id": contactSection.sectionSettings.sectionId,
          "backgroundImage": contactSection.sectionSettings.backgroundImage,
        },
        "header": {
          "image": contactSection.sectionHeader.headerImage,
          "headline": contactSection.sectionHeader.headerHeadline,
          "text": contactSection.sectionHeader.headerText,
        },
      }
    ),
  }
}`;
