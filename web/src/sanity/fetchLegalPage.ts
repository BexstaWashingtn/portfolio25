import { LegalPageDataQueryResult } from "@/types/sanity/SanityLegalPage";
import { client } from "./client";
import { LEGAL_PAGE_QUERY } from "./queries/legalPagesQueries";

export async function fetchLegalPage(
  legalPageType: "imprint" | "privacy",
): Promise<LegalPageDataQueryResult> {
  return client.fetch<LegalPageDataQueryResult>(
    LEGAL_PAGE_QUERY,
    { legalPageType },
    {
      next: { revalidate: 60 },
    },
  );
}
