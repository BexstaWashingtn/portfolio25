import type { SkillEntry } from "@/types/SkillCategories";
import SkillsItem from "./SkillsItem";

type Props = { entries?: SkillEntry[] };

export default function SkillsEntries({ entries = [] }: Props) {
  if (!entries.length) return null;

  return entries?.map((item) => {
    return <SkillsItem key={item._key} {...item} />;
  });
}
