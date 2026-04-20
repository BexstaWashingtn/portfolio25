import ProjectChallenge from "./_components/sections/ProjectChallenge";
import ProjectHeader from "./_components/sections/ProjectHeader";
import ProjectImplementation from "./_components/sections/implementation/ProjectImplementation";
import ProjectVisuals from "./_components/sections/visuals/ProjectVisuals";
import ProjectLearnings from "./_components/sections/ProjectLearnings";
import ProjectPreview from "./_components/sections/projectPreview/ProjectPreview";
import ViewedTracker from "./_components/ViewedTracker";
import projectData from "./data/data";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectView({ params }: Props) {
  const { slug } = await params;

  if (
    !projectData?.details?.title?.trim() ||
    !projectData?.details?.src?.trim()
  ) {
    notFound();
  }

  return (
    <>
      <header>
        <ProjectHeader details={projectData.details} />
      </header>

      <main>
        {projectData.goals && <ProjectChallenge goals={projectData.goals} />}
        {projectData.implementation && (
          <ProjectImplementation implementation={projectData.implementation} />
        )}
        {!!projectData?.visuals?.length && (
          <ProjectVisuals visuals={projectData.visuals} />
        )}
        {projectData.learnings && (
          <ProjectLearnings learnings={projectData.learnings} />
        )}

        {slug && <ProjectPreview slug={slug} />}
      </main>
      {/* Speichert das gesehene Projekt im LocalStorage*/}
      {slug && <ViewedTracker slug={slug} />}
    </>
  );
}
