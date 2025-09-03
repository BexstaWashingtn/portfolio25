import type { Entry } from "@/types/skills";
import SkillsItem from "./SkillsItem";

export default function SkillsEntries({ entries = [] as Entry[] }) {
  if (!entries.length) return null;

  return entries?.map((item) => <SkillsItem key={item.name} {...item} />);
}
