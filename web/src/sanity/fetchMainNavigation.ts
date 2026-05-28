import { client } from "./client";
import { MAIN_NAVIGATION_QUERY } from "./queries/navigationQueries";

export async function getMainNavigation() {
  return client.fetch(
    MAIN_NAVIGATION_QUERY,
    {},
    {
      next: { revalidate: 60 },
    },
  );
}
