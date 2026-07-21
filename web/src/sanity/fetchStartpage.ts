import { client } from "./client";
import { STARTPAGE_QUERY } from "./queries/startpageQueries";
import { StartpageQueryResult } from "@/types/sanity/SanityStartpageData";

export async function getStartpage(): Promise<StartpageQueryResult> {
  return client.fetch<StartpageQueryResult>(
    STARTPAGE_QUERY,
    {},
    {
      next: { revalidate: 60 },
    },
  );
}
