import { client } from "./client";
import {
  PROJECT_BYSLUG_QUERY,
  PROJECTS_PREVIEW_QUERY,
  PROJETCS_PREVIEW_WITHOUTSLUG_QUERY,
} from "./queries/projectQueries";

export async function getProjectsPreview() {
  return client.fetch(PROJECTS_PREVIEW_QUERY);
}

export async function getProjectsPreviewWithoutSlug(slug: string) {
  return client.fetch(PROJETCS_PREVIEW_WITHOUTSLUG_QUERY, { slug });
}

export async function getProjectBySlug(slug: string) {
  return client.fetch(PROJECT_BYSLUG_QUERY, { slug });
}
