import LegalPage from "@/components/pages/legalPages/LegalPage";
import { LegalPageDataQueryResult } from "@/components/pages/legalPages/LegalPage.types";
import { mapLegalPageData } from "@/lib/mappers/legalPage/mapLegalPageData";
import { fetchLegalPage } from "@/sanity/fetchLegalPage";
import { ContactData } from "@/types/shared/ContactData";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProfileFullName } from "@/lib/profile/getFullName";

const fullName = getProfileFullName();

export const metadata: Metadata = {
  title: `Impressum | ${fullName}`,
  description: `Impressum und Anbieterkennzeichnung des Portfolios von ${fullName}.`,
};

export default async function Impressum() {
  const dataQueryResult: LegalPageDataQueryResult =
    await fetchLegalPage("imprint");

  if (!dataQueryResult?.legalPage) {
    notFound();
  }

  if (!hasCompleteContactData(dataQueryResult.contactData)) {
    notFound();
  }

  const mappedData = {
    ...dataQueryResult,
    legalPage: mapLegalPageData(
      dataQueryResult.legalPage,
      dataQueryResult.contactData,
    ),
  };

  return <LegalPage data={mappedData} />;
}

function hasCompleteContactData(
  data: ContactData | null,
): data is ContactData {
  return Boolean(
    data?.firstName &&
      data.lastName &&
      data.phone &&
      data.email &&
      data.address?.street &&
      data.address.postalCode &&
      data.address.city &&
      data.address.country,
  );
}
