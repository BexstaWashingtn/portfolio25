export const PROJECT_PREVIEW_QUERY = `
  *[_type == "project"] | order(_createdAt) {
    _id,
    title,
    "slug": slug.current,
    description,
    previewImage,
    "methods": projectInformations.methods
  }
`;
