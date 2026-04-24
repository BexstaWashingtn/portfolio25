export const PROJECT_PREVIEW_QUERY = `
  *[_type == "project"] | order(_createdAt desc) {
    title,
    "slug": slug.current,
    description,
    previewImage,
    "methods": projectInformations.methods
  }
`;
