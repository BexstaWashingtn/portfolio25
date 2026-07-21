import { SanityImage } from "./SanityImage";

export type ProjectTechstackRaw = {
  frontend?: string[];
  backend?: string[];
  tools?: string[];
};

export type SanityProjectMainColor = {
  r: number;
  g: number;
  b: number;
};

export type SanityVisualsData = {
  caption: string;
  image: SanityImage;
  _key: string;
};

export type SanityProjectQueryResult = {
  _id: string;
  title: string;
  subtitle: string;
  projectImage: SanityImage;
  backgroundImage?: SanityImage | null;
  projectMainColor?: SanityProjectMainColor | null;
  projectInformations: {
    developmentTime?: { description?: string };
    methods?: string[];
    tools?: string[];
    liveDemo?: { href?: string };
    github?: { href?: string };
  };
  goals?: {
    initial: string;
    reason: string;
  } | null;
  implementation?: {
    process?: Array<{
      title: string;
      description: string;
    }>;
    techstack?: ProjectTechstackRaw;
    challenge?: {
      problem?: string;
      approach?: string;
      learnings?: string;
    };
  } | null;
  visuals?: SanityVisualsData[] | null;
  learnings?: {
    learnings?: string[];
    improvements?: string;
    feedback?: string;
  } | null;
};
