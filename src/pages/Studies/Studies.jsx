import studyData from "../../data/studyData.json";
import Study from "./Study";

export default function Courses() {
  return (
    <div className="wrapper">
      <h1>Mon Parcours</h1>
      <main className="grid gridGap">
        {studyData.map((content, id) => (
          <Study
            key={id}
            title={content.title}
            place={content.place}
            year={content.year}
            description={content.text}
          />
        ))}
      </main>
    </div>
  );
}
