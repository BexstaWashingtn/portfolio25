import type { Entry } from "@/types/skills";
import SkillsItem from "./SkillsItem";

type Props = { entries?: Entry[]; keyPrefix?: string };

export default function SkillsEntries({ entries = [], keyPrefix }: Props) {
  if (!entries.length) return null;

  return entries?.map((item) => {
    const key = keyPrefix ? `${keyPrefix}::${item.name}` : item.name;
    return <SkillsItem key={key} {...item} />;
  });
}
