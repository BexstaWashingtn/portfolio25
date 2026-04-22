import styles from "./projectImplementation.module.css";
import Inner from "@/components/utils/Inner";
import SectionHeader from "../../sectionHeader/SectionHeader";
import ProjectProcess from "./ProjectProcess";
import ProjectTechStack from "./ProjectTechStack";
import ProjectChallenge from "./ProjectChallenge";
import {
  ProjectImplementationData,
  ProjectProcessData,
  ProjectTechstackData,
} from "./../../../types/projectData";
import { cleanStringArray } from "@/lib/utils/data/cleanStringArray";
import { safeString } from "@/lib/utils/data/safeString";

type Props = {
  implementation: ProjectImplementationData;
};

export default function ProjectImplementation({ implementation }: Props) {
  const cleanedProcess = cleanProcess(implementation?.process);
  const hasProcess = !!cleanedProcess.length;

  const cleanedTechStack = cleanTechstack(implementation?.techstack);
  const hasTechstack = !!cleanedTechStack.length;

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

          {hasProcess && <ProjectProcess process={cleanedProcess} />}
        </Inner>
      </Inner>

      {hasTechstack && <ProjectTechStack techstack={cleanedTechStack} />}

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

function cleanProcess(dataArray: ProjectProcessData[]) {
  if (!Array.isArray(dataArray)) return [];

  const trimmedData = dataArray.map(({ title, description }) => {
    const titleString = safeString(title);
    const descriptionString = safeString(description);

    return {
      title: titleString,
      description: descriptionString,
    };
  });

  const cleanData = trimmedData.filter(
    ({ title, description }) => title !== "" || description !== "",
  );

  return cleanData;
}

function cleanTechstack(techstackArr: ProjectTechstackData[]) {
  if (!Array.isArray(techstackArr)) return [];

  const trimmedTechstack = techstackArr.map(({ title, icon, items }) => {
    return {
      title: safeString(title),
      icon: icon,
      items: cleanStringArray(items),
    };
  });

  const cleanTechStack = trimmedTechstack.filter(
    ({ title, items }) => title !== "" && items.length > 0,
  );

  return cleanTechStack;
}
