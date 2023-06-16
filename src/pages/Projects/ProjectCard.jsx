import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import projectData from "../../data/projectData.json";
import websiteImg from "../../assets/website.svg";

export default function ProjectCard() {
  return (
    <>
      {projectData.map(
        ({
          id,
          title,
          imageDesktop,
          imageMobile,
          classnameDesktop,
          classnameMobile,
          altImage,
          website,
          linkCode,
        }) => (
          <article key={id} className="flexColumn projectGridItem">
            <div className="flex flexAround">
              <div className="imgContainer imgContainerDesktop">
                <img
                  src={imageDesktop}
                  alt={altImage}
                  className={classnameDesktop}
                />
              </div>
              <div className="imgContainer imgContainerMobile">
                <img
                  src={imageMobile}
                  alt={altImage}
                  className={classnameMobile}
                />
              </div>
            </div>
            <div className="flex flexCenter projectSpace">
              <Link to={`/projects/${id}`} className="noDecoration colorBtn">
                <h2>{title}</h2>
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
                <Link to={`/projects/${id}`}>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="colorBtn icon"
                  />
                </Link>
              </span>
            </div>
          </article>
        )
      )}
    </>
  );
}
