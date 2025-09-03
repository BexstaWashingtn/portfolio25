export type Entry = {
  name: string;
  level: number;
};

export type Subcategory = {
  name: string;
  entries: Entry[];
};

export type Category = {
  name: string;
  entries?: Entry[];
  subcategory?: Subcategory[];
};
