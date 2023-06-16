import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="wrapper">
      <h1>Mes Projets</h1>
      <p>
        Voici une partie de mes projets que j'ai réalisés lors de ma formation
        au sein d'OpenClassrooms.
      </p>
      <main className="grid gridGap">
        <ProjectCard />
      </main>
    </div>
  );
}
