import { SanityImage } from "./SanityImage";

export type SanityProjectPreview = {
  _id: number;
  description: string;
  methods: string[];
  previewImage: SanityImage;
  slug: string;
  title: string;
};
