"use client";

import Inner from "@/components/utils/Inner";

import SectionHeader from "../../sectionHeader/SectionHeader";
import { ProjectVisualsData } from "../../../types/projectData";
import ProjectVisualsFullImage from "./projectVisualsFullImage";
import ProjectVisualsGallery from "./ProjectVisualsGallery";

type Props = {
  visuals: ProjectVisualsData[];
};

export default function ProjectVisuals({ visuals }: Props) {
  const hasGallery = visuals.length > 1;

  return (
    <section>
      <Inner paddingBottom='md' variant='narrow'>
        <SectionHeader
          headline='Visuelle Darstellung'
          icon={{
            src: "/img/projects/icons/icon_visuals.svg",
            alt: "Visuelle Projekt Darstellung",
          }}
        />
      </Inner>
      {hasGallery ? (
        <Inner paddingTop='md' paddingBottom='xxl' variant='wide'>
          <ProjectVisualsGallery visuals={visuals} />
        </Inner>
      ) : (
        <Inner paddingTop='md' paddingBottom='xxl' variant='narrow'>
          <ProjectVisualsFullImage
            item={visuals[0].imageFull}
            caption={visuals[0].caption}
          />
        </Inner>
      )}
    </section>
  );
}
