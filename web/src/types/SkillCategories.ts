export type Rating = number;

export type Entry = {
  name: string;
  level?: Rating;
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
