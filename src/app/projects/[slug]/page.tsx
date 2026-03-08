import ProjectChallenge from "./_components/sections/ProjectChallenge";
import ProjectHero from "./_components/sections/ProjectHero";
import ProjectImplementation from "./_components/sections/implementation/ProjectImplementation";
import ProjectVisuals from "./_components/sections/visuals/ProjectVisuals";
import ProjectLearnings from "./_components/sections/ProjectLearnings";
import ProjectPreview from "./_components/sections/projectPreview/ProjectPreview";
import control from "@ui/primitives/controls/control.module.css";
import clsx from "clsx";
import Link from "@/components/ui/link/Link";
import Inner from "@/components/utils/Inner";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectView({ params }: Props) {
  const { slug: currentSlug } = await params;

  return (
    <>
      <ProjectHero />
      <ProjectChallenge />
      <ProjectImplementation />
      <ProjectVisuals />
      <ProjectLearnings />
      <ProjectPreview currentSlug={currentSlug} />

      <Inner variant='narrow' paddingTop='xl' paddingBottom='xl'>
        <Link
          href={`/#projects`}
          className={clsx(control.control, control.primary)}
        >
          zurück zur Startseite
        </Link>
      </Inner>
    </>
  );
}
