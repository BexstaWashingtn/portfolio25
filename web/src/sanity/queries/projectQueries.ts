export const PROJECTS_PREVIEW_QUERY = `
  *[_type == "project"] | order(completedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    previewImage,
    "techStack": [
      ...implementation.techstack.frontend[],
      ...implementation.techstack.backend[],
    ]
  }
`;

export const PROJETCS_PREVIEW_WITHOUTSLUG_QUERY = `
  *[_type == "project" && slug.current != $slug] | order(completedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    previewImage,
    "techStack": [
      ...implementation.techstack.frontend[],
      ...implementation.techstack.backend[],
    ]
  }
`;

export const PROJECT_BYSLUG_QUERY = `
  *[_type == "project" && slug.current == $slug][0]{
   _id,
    title,
    subtitle,
    projectImage,
    projectMainColor,
    backgroundImage,
    projectInformations,
    goals,
    implementation,
    visuals,
    learnings,
  }
`;
