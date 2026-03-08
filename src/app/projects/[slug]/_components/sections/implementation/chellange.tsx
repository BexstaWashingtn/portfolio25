import styles from "./chellange.module.css";

export default function chellange() {
  return (
    <section className={styles.implementationChallenge}>
      <h3>Herausforderung</h3>

      <ul className={styles.implChellangeList}>
        <li className={styles.chellangeItem}>
          <div className={styles.chellangeListHeader}>
            <h4 className={styles.chellangeListHeadline}>
              1. Was war die Herausforderung?
            </h4>
            <span className={styles.chellangeListSubHeadline}>
              Beschreibe konkret, was schwierig war:
            </span>
          </div>

          <ul className={styles.itemList}>
            <li className={styles.listItem}>Technisch?</li>
            <li className={styles.listItem}>UX/UI-bezogen?</li>
            <li className={styles.listItem}>Projektmanagement?</li>
            <li className={styles.listItem}>Kommunikation?</li>
          </ul>
        </li>
        <li className={styles.chellangeItem}>
          <h4>2. Wie bist du herangegangen?</h4>

          <ul className={styles.itemList}>
            <li className={styles.listItem}>Recherche?</li>
            <li className={styles.listItem}>Ausprobieren?</li>
            <li className={styles.listItem}>Feedbackschleifen?</li>
            <li className={styles.listItem}>Refactoring?</li>
          </ul>
        </li>
        <li className={styles.chellangeItem}>
          <h4>3. Was war das Ergebnis oder Learning?</h4>

          <ul className={styles.itemList}>
            <li className={styles.listItem}>Lösung erfolgreich?</li>
            <li className={styles.listItem}>Neue Tools/Skills gelernt?</li>
            <li className={styles.listItem}>
              Etwas fürs nächste Mal mitgenommen?
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
