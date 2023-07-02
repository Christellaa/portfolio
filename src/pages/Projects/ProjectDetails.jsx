import projectData from "../../data/projectData.json";
import { useParams } from "react-router-dom";
import Error from "../Error";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import websiteImg from "../../assets/website.svg";
import checkMark from "../../assets/checkMark.svg";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const hoveredIcon = { scale: 1.1 };

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
        <motion.span whileHover={hoveredIcon}>
          <Link
            to="/projects"
            aria-label="Retourner sur l'ensemble des projets"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="colorBtn icon" />
          </Link>
        </motion.span>
        <span className="flex space" whileHover={hoveredIcon}>
          {website !== null && (
            <motion.span whileHover={hoveredIcon}>
              <Link to={website} target="blank">
                <img
                  src={websiteImg}
                  alt="Voir le site web"
                  width="23"
                  height="23"
                />
              </Link>
            </motion.span>
          )}
          <motion.span whileHover={hoveredIcon}>
            <Link
              to={linkCode}
              target="blank"
              aria-label="Voir le code du site sur GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="colorBtn icon" />
            </Link>
          </motion.span>
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
              <img
                src={checkMark}
                width="23"
                height="23"
                alt="Icône de coche"
              />
              {tool}
            </li>
          ))}
        </ul>
        <h2>Ce que le projet m'a apporté</h2>
        <ul className="NoPaddingLeft">
          {learned.map((learn, id) => (
            <li key={id} className="flex listItems itemsSpace">
              <img
                src={checkMark}
                width="23"
                height="23"
                alt="Icône de coche"
              />
              {learn}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
