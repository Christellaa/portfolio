import StudiesStyles from "./studies.module.css";
import StudyDescription from "./StudyDescription";

export default function Study({ title, place, year, description }) {
  return (
    <article className={StudiesStyles.gridItem}>
      <h2 className={StudiesStyles.title}>{title}</h2>
      <h3 className={StudiesStyles.place}>{place}</h3>
      <p className={StudiesStyles.date}>{year}</p>
      <ul className={StudiesStyles.noBullet}>
        <StudyDescription description={description} />
      </ul>
    </article>
  );
}
