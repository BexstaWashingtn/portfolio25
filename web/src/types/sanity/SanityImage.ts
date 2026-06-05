export type SanityImage = {
  _type: "image";
  asset?: {
    _ref?: string;
    _type?: "reference";
  };
  alt: string;
  title?: string;
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  hotspot?: {
    x: number;
    y: number;
    height?: number;
    width?: number;
  };
};
