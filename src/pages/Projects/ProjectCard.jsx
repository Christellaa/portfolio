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
          <Link
            to={`/projects/${id}`}
            className="noDecoration colorBtn"
            key={id}
          >
            <article className="flexColumn items projectGridItem">
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
                <h2>{title}</h2>
                <span className="flex space">
                  {website !== null && (
                    <img
                      src={websiteImg}
                      alt="website"
                      width="23"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(website, "_blank");
                      }}
                    />
                  )}
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="icon"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(linkCode, "_blank");
                    }}
                  />
                  <FontAwesomeIcon icon={faArrowRight} className="icon" />
                </span>
              </div>
            </article>
          </Link>
        )
      )}
    </>
  );
}
