"use client";

export function getViewedProjects(): string[] {
  return JSON.parse(localStorage.getItem("viewedProjects") || "[]");
}

export function isProjectViewed(slug: string): boolean {
  const viewedProjects = getViewedProjects();
  return viewedProjects.includes(slug);
}

export function addViewedProject(slug: string) {
  const viewedProjects = getViewedProjects();

  if (!viewedProjects.includes(slug)) {
    viewedProjects.push(slug);
    localStorage.setItem("viewedProjects", JSON.stringify(viewedProjects));
  }
}
