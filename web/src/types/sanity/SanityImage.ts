export type SanityImage = {
  _type: "image";
  asset?: {
    _ref?: string;
    _type?: "reference";
  };
  alt?: string;
  title?: string;
  crop?: unknown;
  hotspot?: unknown;
};
