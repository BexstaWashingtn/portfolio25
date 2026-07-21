import LegalPage from "@/components/pages/legalPages/LegalPage";
import { LegalPageDataQueryResult } from "@/components/pages/legalPages/LegalPage.types";
import { mapLegalPageData } from "@/lib/mappers/legalPage/mapLegalPageData";
import { getProfileFullName } from "@/lib/profile/getFullName";
import { fetchLegalPage } from "@/sanity/fetchLegalPage";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const fullName = getProfileFullName();

export const metadata: Metadata = {
  title: `Datenschutz | ${fullName}`,
  description: `Datenschutzerklärung für das Portfolio von ${fullName}.`,
};

export default async function Datenschutz() {
  const dataQueryResult: LegalPageDataQueryResult =
    await fetchLegalPage("privacy");

  console.log("dataQueryResult", dataQueryResult);

  if (!dataQueryResult?.legalPage) {
    notFound();
  }

  const mappedData = {
    ...dataQueryResult,
    legalPage: mapLegalPageData(dataQueryResult.legalPage),
  };

  console.log("mappedData", mappedData);

  return <LegalPage data={mappedData} />;
}
