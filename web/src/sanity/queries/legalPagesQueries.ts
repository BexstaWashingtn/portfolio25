import groq from "groq";

export const LEGAL_PAGE_QUERY = groq`{  "legalPage": *[_type == "legalPages" && pageSettings.legalPageType == $legalPageType][0]{
    pageSettings,
    pageHero,
    infoBlockTop,
    legalPageContent,
    infoBlockBottom
  },
    "contactData": select(
    *[
      _type == "legalPages" 
      && pageSettings.legalPageType == $legalPageType
    ][0].pageSettings.legalPageType == "imprint" => *[_type == "siteSettings"][0]{
      "firstName": contactInformation.firstName,
      "lastName":contactInformation.lastName,
      "address":contactInformation.address,
      "phone":contactInformation.phone,
      "email":contactInformation.email,
    }
  )
}`;
