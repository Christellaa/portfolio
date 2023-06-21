import projectData from "../../data/projectData.json";
import { useParams } from "react-router-dom";
import Error from "../Error";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import websiteImg from "../../assets/website.svg";
import ProjectCard from "./ProjectCard";

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
    website,
    linkCode,
    details: { description, tools, learned },
  } = project;

  return (
    <div key={id} className="wrapper">
      <div className="flex projectLinks">
        <Link to="/projects">
          <FontAwesomeIcon icon={faArrowLeft} className="colorBtn icon" />
        </Link>
        <span className="flex space">
          {website !== null && (
            <Link to={website} target="blank">
              <img src={websiteImg} alt="website" width="23" />
            </Link>
          )}
          <Link to={linkCode} target="blank">
            <FontAwesomeIcon icon={faGithub} className="colorBtn icon" />
          </Link>
        </span>
      </div>
      <div>
        <h1>{title}</h1>
        <h2>Description</h2>
        <p>{description}</p>
        <h2>Langages et outils utilisés</h2>
        <ul className="NoPaddingLeft">
          {tools.map((tool, id) => (
            <li key={id} className="flex listItems itemsSpace">
              <FontAwesomeIcon icon={faPlay} className="colorBtn" />
              {tool}
            </li>
          ))}
        </ul>
        <h2>Ce que le projet m'a apporté</h2>
        <ul className="NoPaddingLeft">
          {learned.map((learn, id) => (
            <li key={id} className="flex listItems itemsSpace">
              <FontAwesomeIcon icon={faPlay} className="colorBtn" />
              {learn}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
