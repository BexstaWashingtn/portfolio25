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
import ViewedTracker from "./_components/ViewedTracker";
import { IoMdClose } from "react-icons/io";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectView({ params }: Props) {
  const { slug: slug } = await params;

  return (
    <>
      <Link href={"/"} className={clsx(control.control, control.primary)}>
        <IoMdClose />
      </Link>

      <ProjectHero />
      <ProjectChallenge />
      <ProjectImplementation />
      <ProjectVisuals />
      <ProjectLearnings />
      <ProjectPreview slug={slug} />

      <Inner variant='narrow' paddingTop='xl' paddingBottom='xl'>
        <Link
          href={`/#projects`}
          className={clsx(control.control, control.primary)}
        >
          zurück zur Startseite
        </Link>
      </Inner>

      {/* Speichert das gesehene Projekt im LocalStorage*/}
      <ViewedTracker slug={slug} />
    </>
  );
}
