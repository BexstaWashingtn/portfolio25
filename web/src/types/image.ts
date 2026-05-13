export type Image = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  title?: string;
  _type?: string;
  hotspot?: object | null;
  crop?: object | null;
};
