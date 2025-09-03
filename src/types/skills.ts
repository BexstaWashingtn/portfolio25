export type Entry = {
  name: string;
  level?: 1 | 2 | 3 | 4 | 5;
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
