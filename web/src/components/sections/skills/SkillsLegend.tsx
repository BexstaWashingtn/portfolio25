import Rating from "@/components/ui/rating/Rating";
import clsx from "clsx";
import styles from "./skillslegend.module.css";

const legendData = [
  {
    name: "Experte",
    level: 5,
  },
  {
    name: "Sehr gut",
    level: 4,
  },
  {
    name: "Fortgeschritten",
    level: 3,
  },
  {
    name: "Basiswissen",
    level: 2,
  },
  {
    name: "erste Erfahrungen",
    level: 1,
  },
];

export default function SkillsLegend({}) {
  return (
    <aside
      aria-label='Legende Skill-Level'
      className={clsx(styles.legend, "infoCard")}
    >
      <dl className={styles.legendList}>
        {legendData.map(({ name, level }) => (
          <div key={name} className={styles.legendItem}>
            <dt className={styles.rate}>
              <Rating rate={level} />
            </dt>
            <dd className={styles.itemLabel}>{name}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
