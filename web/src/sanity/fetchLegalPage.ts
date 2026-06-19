import { client } from "./client";
import { LEGAL_PAGE_QUERY } from "./queries/legalPagesQueries";

export async function fetchLegalPage(legalPageType: string) {
  return client.fetch(
    LEGAL_PAGE_QUERY,
    { legalPageType },
    {
      next: { revalidate: 60 },
    },
  );
}
