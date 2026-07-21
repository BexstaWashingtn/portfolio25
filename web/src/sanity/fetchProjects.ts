import { client } from "./client";
import {
  PROJECT_BYSLUG_QUERY,
  PROJECTS_PREVIEW_QUERY,
  PROJETCS_PREVIEW_WITHOUTSLUG_QUERY,
} from "./queries/projectQueries";
import { SanityProjectQueryResult } from "@/types/sanity/SanityProjectData";

export async function getProjectsPreview() {
  return client.fetch(
    PROJECTS_PREVIEW_QUERY,
    {},
    {
      next: { revalidate: 60 },
    },
  );
}

export async function getProjectsPreviewWithoutSlug(slug: string) {
  return client.fetch(
    PROJETCS_PREVIEW_WITHOUTSLUG_QUERY,
    { slug },
    {
      next: { revalidate: 60 },
    },
  );
}

export async function getProjectBySlug(
  slug: string,
): Promise<SanityProjectQueryResult | null> {
  return client.fetch<SanityProjectQueryResult | null>(
    PROJECT_BYSLUG_QUERY,
    { slug },
    {
      next: { revalidate: 60 },
    },
  );
}
