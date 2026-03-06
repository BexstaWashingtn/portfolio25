import styles from "./projectTimeline.module.css";

export default function ProjectTimeline() {
  const data = [
    {
      title: "Idee & Zielsetzung",
      description:
        "consectetur. Posuere amet sagittis massa vitae faucibus nibh neque. sagittis massa vitae faucibus nibh neque.",
    },
    {
      title: "Recherche & Card Sorting",
      description:
        "Lorem ipsum dolor sit amet consectetur. Cursus integer eget nisi quam vestibulum lorem magna.",
    },
    {
      title: "Scribbles & Wireframes",
      description:
        "dolor sit amet consectetur. Eu fermentum tristique eu nec netus tristique.",
    },
    {
      title: "UI-Design & Stilentwicklung",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sit hendrerit auctor elit lectus ultrices morbi.",
    },
    {
      title: "Technische Umsetzung",
      description:
        "Lorem ipsum dolor sit amet consectetur. Placerat ut porttitor velit ultrices rutrum sed sed vulputate vulputate.",
    },
    {
      title: "SEO",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quam sit facilisis.",
    },
    {
      title: "Barrierefreiheit & Testing",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quam sit facilisis.",
    },
    {
      title: "Deployment",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quam sit facilisis.",
    },
  ];

  return (
    <div className={styles.projectTimeline}>
      <h3>Ablauf</h3>

      <ul className={styles.timelineContent}>
        {data.map(({ title, description }, index) => {
          return (
            <li key={index} className={styles.timelineItem}>
              <h4 className={styles.headline}>{title}</h4>
              <p className={styles.description}>{description}</p>
            </li>
          );
        })}

        <li className={styles.timelineItem}>
          <h4 className={styles.headline}>Idee / Zielsetzung</h4>
          <p className={styles.description}>
            consectetur. Posuere amet sagittis massa vitae faucibus nibh neque.
            sagittis massa vitae faucibus nibh neque.
          </p>
        </li>
      </ul>
    </div>
  );
}
