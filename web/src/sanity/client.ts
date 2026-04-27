import { createClient } from "@sanity/client";
import { getSanityData } from "./getSanityData";

const { projectId, dataset, apiVersion } = getSanityData();

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true,
});
