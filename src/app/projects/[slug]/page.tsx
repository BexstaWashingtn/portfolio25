import ProjectChallenge from "./_components/sections/ProjectChallenge";
import ProjectHero from "./_components/sections/ProjectHero";
import ProjectImplementation from "./_components/sections/ProjectImplementation";
import ProjectTechStack from "./_components/sections/ProjectTechStack";

export default function ProjectView() {
  return (
    <>
      <ProjectHero />
      <ProjectChallenge />
      <ProjectImplementation />
      <ProjectTechStack />
    </>
  );
}
