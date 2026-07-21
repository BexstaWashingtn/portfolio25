import styles from "./projectImplementation.module.css";
import Inner from "@/components/utils/Inner";
import SectionHeader from "../../sectionHeader/SectionHeader";
import ProjectProcess from "./ProjectProcess";
import ProjectTechStack from "./ProjectTechStack";
import ProjectChallenge from "./ProjectChallenge";
import {
  ProjectImplementationData,
  ProjectProcessData,
} from "@/types/projects/ProjectData";
import { safeString } from "@/lib/utils/data/safeString";

type Props = {
  implementation: ProjectImplementationData;
  mainColorRGB: string;
};

export default function ProjectImplementation({
  implementation,
  mainColorRGB,
}: Props) {
  const cleanedProcess = cleanProcess(implementation?.process);
  const hasProcess = !!cleanedProcess.length;

  const cleanChallenge = {
    problem: implementation?.challenge?.problem.trim() || "",
    approach: implementation?.challenge?.approach.trim() || "",
    learnings: implementation?.challenge?.learnings.trim() || "",
  };

  const hasChallenge =
    !!cleanChallenge.problem ||
    !!cleanChallenge.approach ||
    !!cleanChallenge.learnings;

  return (
    <section className={styles.projectImplementation}>
      <Inner paddingBottom='xl' variant='full'>
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

      {
        <ProjectTechStack
          techstack={implementation.techstack}
          mainColorRGB={mainColorRGB}
        />
      }

      {hasChallenge && (
        <Inner paddingBottom='xxl' variant='full'>
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
