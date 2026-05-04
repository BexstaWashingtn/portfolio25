export const PROJECTS_PREVIEW_QUERY = `
  *[_type == "project"] | order(_createdAt) {
    _id,
    title,
    "slug": slug.current,
    description,
    previewImage,
    "methods": projectInformations.methods
  }
`;

export const PROJETCS_PREVIEW_WITHOUTSLUG_QUERY = `
  *[_type == "project" && slug.current != $slug] | order(_createdAt) {
    _id,
    title,
    "slug": slug.current,
    description,
    previewImage,
    "methods": projectInformations.methods
  }
`;

export const PROJECT_BYSLUG_QUERY = `
  *[_type == "project" && slug.current == $slug][0]{
   _id,
    title,
    subtitle,
    projectImage,
    projectMainColor,
    projectInformations,
  }
`;
