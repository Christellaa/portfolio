import { Link } from "react-router-dom";
import ProjectCard from "../../components/Project/ProjectCard";

export default function Projects() {
  return (
    <div className="wrapper">
      <h1>Mes Projets</h1>
      <p>
        Voici une partie des projets que j'ai réalisés.
        <br /> Pour voir les autres projets, cliquez&nbsp;
        <Link
          to="https://github.com/Christellaa?tab=repositories"
          target="_blank"
        >
          ici
        </Link>
        .
      </p>
      <main className="grid gridGap gridLargeScreen">
        <ProjectCard />
      </main>
    </div>
  );
}
