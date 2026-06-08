import { client } from "./client";
import { LOCKEDPAGE_QUERY } from "./queries/lockedPageQuery";

export async function getLockedpage() {
  return client.fetch(
    LOCKEDPAGE_QUERY,
    {},
    {
      next: { revalidate: 60 },
    },
  );
}
