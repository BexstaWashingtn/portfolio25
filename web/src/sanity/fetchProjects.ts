import { client } from "./client";
import { PROJECT_PREVIEW_QUERY } from "./queries/projectQueries";

export async function getProjectPreviews() {
  return client.fetch(PROJECT_PREVIEW_QUERY);
}
