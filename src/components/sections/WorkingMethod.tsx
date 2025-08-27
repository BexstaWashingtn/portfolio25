import Inner from "@components/utils/Inner";
import styles from "./workingMethod.module.css";

export default function WorkingMethod() {
  return (
    <section className={styles.workingMethod} id='working-method'>
      <Inner variant='narrow' paddingTop='xl' paddingBottom='xl'>
        <h2 className={styles.h2}>Arbeitsweise</h2>
        <ul className={styles.workMethodList}>
          <li className={styles.workMehtodItem}>
            <img
              className={styles.icon}
              src='/img/workMethod/icon_analytically.svg'
              alt='Icon einer Lupe'
              title='Analytisch'
              height={80}
            />
            <h3 className={styles.headline}>Analytisch</h3>
            <p className={styles.text}>
              Ich plane strukturiert, denke in Nutzer-Flows und arbeite gern mit
              Skizzen & Wireframes.
            </p>
          </li>
          <li className={styles.workMehtodItem}>
            <img
              className={styles.icon}
              src='/img/workMethod/icon_cooperation.svg'
              alt='Icon von zwei Personen die sich die Hand geben'
              title='Analytisch'
              height={80}
            />
            <h3 className={styles.headline}>Kooperativ</h3>
            <p className={styles.text}>
              Ich bin lösungsorientiert, offen für Feedback und arbeite gern auf
              Augenhöhe – leise, aber präsent.
            </p>
          </li>
          <li className={styles.workMehtodItem}>
            <img
              className={styles.icon}
              src='/img/workMethod/icon_usercentric.svg'
              alt='Icon einer Zielscheibe'
              title='Nutzerzentriert'
              height={80}
            />
            <h3 className={styles.headline}>Nutzerzentriert</h3>
            <p className={styles.text}>
              Ich verbinde Barrierefreiheit mit Gestaltungslust – verständlich,
              zugänglich, individuell.
            </p>
          </li>
          <li className={styles.workMehtodItem}>
            <img
              className={styles.icon}
              src='/img/workMethod/icon_technically.svg'
              alt='Icon eines Zahnrades'
              title='Technisch'
              height={80}
            />
            <h3 className={styles.headline}>Technisch</h3>
            <p className={styles.text}>
              Ich schreibe modularen, sprechenden Code – lieber einfach & robust
              als überladen & trendy.
            </p>
          </li>
        </ul>
      </Inner>
    </section>
  );
}
