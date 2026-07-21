import groq from "groq";

export const LEGAL_PAGE_QUERY = groq`{  "legalPage": *[_type == "legalPages" && pageSettings.legalPageType == $legalPageType][0]{
    "heroSection": {
      "settings":{
        "backgroundImage": pageHero.backgroundImage,
        "id": "heroSection",
      },
      "header":{
        "headline": pageHero.headline,
        "text": pageHero.text,
      },
      "_type": "heroSection",
    },
    "contentNoticeTop":infoBlockTop,
    legalPageContent,
    "contentNoticeBottom":infoBlockBottom,
  },
    "contactData": select(
    $legalPageType == "imprint" => *[_type == "siteSettings"][0]{
      "firstName": contactInformation.firstName,
      "lastName":contactInformation.lastName,
      "address":contactInformation.address,
      "phone":contactInformation.phone,
      "email":contactInformation.email,
    }
  )
}`;
