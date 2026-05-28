import { client } from "./client";
import { HEADER_QUERY } from "./queries/headerQueries";

export async function getHeader() {
  return client.fetch(
    HEADER_QUERY,
    {},
    {
      next: { revalidate: 60 },
    },
  );
}
