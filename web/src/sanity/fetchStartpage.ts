import { client } from "./client";
import { STARTPAGE_QUERY } from "./queries/startpageQueries";

export async function getStartpage() {
  return client.fetch(
    STARTPAGE_QUERY,
    {},
    {
      next: { revalidate: 60 },
    },
  );
}
