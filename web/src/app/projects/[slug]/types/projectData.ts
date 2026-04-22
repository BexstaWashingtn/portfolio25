export type ProjectData = {
  details: ProjectDetailsData;
  goals: ProjectGoalsData;
  implementation: ProjectImplementationData;
  visuals: ProjectVisualsData[];
  learnings: ProjectLearningsData;
};

export type ProjectDetailsData = {
  title: string;
  subtitle: string;
  src: string;
  backgroundImageSrc: string;
  mainColorRGB: string;
  projectInformations: ProjectInformationData[];
};

export type ProjectInformationData = {
  id: number;
  icon: ProjectInformationIcon;
  description: string;
  href?: string;
};

export type ProjectInformationIcon =
  | "calendar"
  | "brain"
  | "toolbox"
  | "link"
  | "github";

export type ProjectGoalsData = {
  initial: string;
  reason: string;
};

export type ProjectImplementationData = {
  process: ProjectProcessData[];
  techstack: ProjectTechstackData[];
  challenge: ProjectChallengeData;
};

export type ProjectProcessData = {
  title: string;
  description: string;
};

export type ProjectTechstackData = {
  title: string;
  icon: TechStackIcon;
  items: string[];
};

type TechStackIcon = "frontend" | "backend" | "tools";

export type ProjectChallengeData = {
  problem: string[];
  approach: string[];
  learnings: string[];
};
export type ProjectVisualsData = {
  id: number;
  src: string;
  alt: string;
  title?: string;
};

export type ProjectLearningsData = {
  learnings: string[];
  improvements: string[];
  feedback: string[];
};
