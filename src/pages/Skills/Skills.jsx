import LayoutStyles from "../../components/Layout/layout.module.css";
import Skill from "./Skill";
import skillData from "../../data/skillData.json";

export default function Skills() {
  return (
    <div className={LayoutStyles.wrapper}>
      <h1>Mes Compétences</h1>
      <main>
        {skillData.map((content, id) => (
          <Skill key={id} title={content.title} skills={content.skills} />
        ))}
      </main>
    </div>
  );
}
