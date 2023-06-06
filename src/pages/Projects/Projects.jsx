import ProjectsStyles from "./projects.module.css";
import LayoutStyles from "../../components/Layout/layout.module.css";
import projectData from "../../data/projectData.json";
import Project from "./Project";

export default function Projects() {
  return (
    <div className={LayoutStyles.wrapper}>
      <h1>Mes Projets</h1>
      <p>
        Voici une partie de mes projets que j'ai réalisés lors de ma formation
        au sein d'OpenClassrooms.
      </p>
      <main className={ProjectsStyles.grid}>
        {projectData.map((content, id) => (
          <Project
            key={id}
            title={content.title}
            img={content.image}
            altImg={content.altImage}
            link={content.link}
          />
        ))}
      </main>
    </div>
  );
}
