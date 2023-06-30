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
          altImage,
          website,
          linkCode,
        }) => (
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to={`/projects/${id}`}
            className="noDecoration colorBtn"
            key={id}
          >
            <article className="flexColumn items">
              <div className="imgContainer">
                <img
                  src={imageDesktop}
                  alt={altImage}
                  height="165"
                  width="270"
                  loading="lazy"
                />
                <img
                  src={imageMobile}
                  alt={altImage}
                  height="165"
                  width="122"
                  loading="lazy"
                />
              </div>
              <div className="flex flexCenter projectSpace">
                <h2>{title}</h2>
                <span className="flex space">
                  {website !== null && (
                    <img
                      src={websiteImg}
                      alt="website"
                      width="23"
                      height="23"
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
