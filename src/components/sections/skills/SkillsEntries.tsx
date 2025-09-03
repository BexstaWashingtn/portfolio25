import type { Entry } from "@/types/skills";
import SkillsItem from "./SkillsItem";

type Props = { entries?: Entry[] };

export default function SkillsEntries({ entries = [] }: Props) {
  if (!entries.length) return null;

  return entries?.map((item) => <SkillsItem key={item.name} {...item} />);
}
