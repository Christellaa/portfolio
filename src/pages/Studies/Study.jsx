import StudyDescription from "./StudyDescription";

export default function Study({ title, place, year, description }) {
  return (
    <article className="studyGridItem">
      <h2 className="title">{title}</h2>
      <h3 className="place">{place}</h3>
      <p className="date">{year}</p>
      <ul className="noBullet">
        <StudyDescription description={description} />
      </ul>
    </article>
  );
}
