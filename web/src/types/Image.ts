export type Image = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  title?: string;
};

export type ImageWithType = Image & {
  _type: "image";
};
