import projectData from "../../data/projectData.json";
import { useParams } from "react-router-dom";
import Error from "../Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectDetails() {
  const params = useParams();
  const project = projectData.find(
    (project) => project.id === parseInt(params.id)
  );
  if (project === undefined) {
    return <Error />;
  }

  const {
    id,
    title,
    details: { description, tools, learned },
  } = project;

  return (
    <div key={id}>
      <div>
        <FontAwesomeIcon icon={faArrowLeft} className="colorBtn icon" />
        <FontAwesomeIcon icon={faGithub} className="colorBtn icon" />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{tools}</p>
        <p>{learned}</p>
      </div>
    </div>
  );
}
