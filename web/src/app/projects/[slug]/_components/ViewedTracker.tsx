"use client";

import { addViewedProject } from "@/lib/utils/viewedProjects";
import { useEffect } from "react";

type Props = { slug: string };

export default function ViewedTracker({ slug }: Props) {
  useEffect(() => {
    addViewedProject(slug);
  }, [slug]);

  return null;
}
