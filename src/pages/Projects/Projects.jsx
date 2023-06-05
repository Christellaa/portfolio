import ProjectsStyles from "./projects.module.css";
import LayoutStyles from "../../components/Layout/layout.module.css";

export default function Projects() {
  return (
    <div className={LayoutStyles.wrapper}>
      <h1>Mes Projets</h1>
      <p>
        Voici une partie de mes projets que j'ai réalisés lors de ma formation
        au sein d'OpenClassrooms.
      </p>
      <main className={ProjectsStyles.grid}>
        <article className={ProjectsStyles.gridItem}>
          <img src="#" alt="#" />
          <div className={ProjectsStyles.inline}>
            <h2>Kasa</h2>
            <button>Lien du code</button>
          </div>
        </article>
        <article className={ProjectsStyles.gridItem}>
          <img src="#" alt="#" />
          <div className={ProjectsStyles.inline}>
            <h2>Kasa</h2>
            <button>Lien du code</button>
          </div>
        </article>
        <article className={ProjectsStyles.gridItem}>
          <img src="#" alt="#" />
          <div className={ProjectsStyles.inline}>
            <h2>Kasa</h2>
            <button>Lien du code</button>
          </div>
        </article>
      </main>
    </div>
  );
}
