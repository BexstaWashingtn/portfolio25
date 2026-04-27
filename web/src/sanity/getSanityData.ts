export function getSanityData() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

  if (!projectId || !dataset || !apiVersion) {
    throw new Error("Missing Sanity environment variables");
  }

  return {
    projectId,
    dataset,
    apiVersion,
  };
}
