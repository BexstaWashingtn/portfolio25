import styles from "./projectImplemenation.module.css";
import Inner from "@/components/utils/Inner";
import SectionHeader from "../../sectionHeader/SectionHeader";
import ProjectProcess from "./ProjectProcess";
import ProjectTechStack from "./ProjectTechStack";
import ProjectChallenge from "./ProjectChallenge";
import { ProjectImplementationData } from "./../../../types/projectData";
import { cleanStringArray } from "@/lib/utils/cleanStringArray";

type Props = {
  implementation: ProjectImplementationData;
};

export default function ProjectImplementation({ implementation }: Props) {
  const hasProcess = !!implementation?.process?.length;
  const hasTechstack = !!implementation?.techstack?.length;

  const cleanChallenge = {
    problem: cleanStringArray(implementation?.challenge?.problem),
    approach: cleanStringArray(implementation?.challenge?.approach),
    learnings: cleanStringArray(implementation?.challenge?.learnings),
  };

  const hasChallenge =
    !!cleanChallenge.problem.length ||
    !!cleanChallenge.approach.length ||
    !!cleanChallenge.learnings.length;

  if (!hasProcess && !hasTechstack && !hasChallenge) return null;

  return (
    <section className={styles.projectImplementation}>
      <Inner paddingTop='xl' variant='full'>
        <Inner variant='narrow'>
          <SectionHeader
            icon={{
              src: "/img/projects/icons/icon_implementation.svg",
              alt: "Projekt Umsetzung",
            }}
            headline='Umsetzung'
          />

          {hasProcess && <ProjectProcess process={implementation.process} />}
        </Inner>
      </Inner>

      {hasTechstack && (
        <ProjectTechStack techstack={implementation.techstack} />
      )}

      {hasChallenge && (
        <Inner paddingBottom='xl' variant='full'>
          <Inner variant='narrow' paddingTop='md' paddingBottom='md'>
            <ProjectChallenge challenge={cleanChallenge} />
          </Inner>
        </Inner>
      )}
    </section>
  );
}
