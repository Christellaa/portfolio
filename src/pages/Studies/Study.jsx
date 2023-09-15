import StudyDescription from "./StudyDescription";

export default function Study({ title, place, year, description }) {
  return (
    <article className="items studyGridItem">
      <h2 className="studyTitle">{title}</h2>
      <h3 className="place">{place}</h3>
      <p className="date">{year}</p>
      <ul className="noBullet">
        <StudyDescription description={description} />
      </ul>
    </article>
  );
}
