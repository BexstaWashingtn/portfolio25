import type { Entry } from "@/types/skills";

export default function SkillsItem({ name, level }: Entry) {
  return (
    <li>
      <span>{name}</span>
      <span>{level}</span>
    </li>
  );
}
