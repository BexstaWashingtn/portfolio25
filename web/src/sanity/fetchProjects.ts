import { client } from "./client";
import {
  PROJECT_BYSLUG_QUERY,
  PROJECTS_PREVIEW_QUERY,
} from "./queries/projectQueries";

export async function getProjectPreviews() {
  return client.fetch(PROJECTS_PREVIEW_QUERY);
}

export async function getProjectBySlug(slug: string) {
  return client.fetch(PROJECT_BYSLUG_QUERY, { slug });
}
