import ProjectCard from "../../components/Project/ProjectCard";

export default function Projects() {
  return (
    <div className="wrapper">
      <h1>Mes Projets</h1>
      <p>Voici une partie des projets que j'ai réalisés.</p>
      <main className="grid gridGap gridLargeScreen">
        <ProjectCard />
      </main>
    </div>
  );
}
