export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type SkillEntry = {
  _key: string;
  _type?: "skill";
  skill: string;
  level?: SkillLevel;
};

export type SkillSubcategory = {
  title: string;
  entries: SkillEntry[];
};

export type SkillCategory = {
  title: string;
  entries?: SkillEntry[];
  subcategories?: SkillSubcategory[];
};

export type SkillsContent = SkillCategory[];
