import { Image } from "@/types/image";

type Project = {
  id: number;
  slug: string;
  image: Image;
  title: string;
  description: string;
  tags: string[];
};

export type { Image };
export type { Project };
