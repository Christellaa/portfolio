import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import projectData from "../../data/projectData.json";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function ProjectCard() {
  const projectCard = { translateY: 10 };

  return (
    <>
      {projectData.map(({ id, title, image, altImage, website, linkCode }) => (
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={`/projects/${id}`}
          className="noDecoration colorBtn"
          key={id}
        >
          <motion.article
            className="flexColumn items cardContainer"
            whileHover={projectCard}
          >
            <img src={image} alt={altImage} />
            <div className="cardInfo">
              <h2 className="cardTitle">{title}</h2>
              <span>
                {website !== null && (
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="icon iconSpace"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(website, "_blank");
                    }}
                  />
                )}
                <FontAwesomeIcon
                  icon={faGithub}
                  className="icon iconSpace"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(linkCode, "_blank");
                  }}
                />
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="icon iconSpace"
                />
              </span>
            </div>
          </motion.article>
        </Link>
      ))}
    </>
  );
}
