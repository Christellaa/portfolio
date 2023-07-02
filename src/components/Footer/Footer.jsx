import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <ul className="flex flexCenter footer">
        <li className="noBullet">
          <Link
            className="noDecoration colorLinks hoveredLink"
            to="mailto:desousa.christella@proton.me"
            aria-label="Envoyer un email"
          >
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </Link>
        </li>
        <li className="noBullet">
          <Link
            className="noDecoration colorLinks hoveredLink"
            to="https://www.linkedin.com/in/christella-desousa/"
            target="blank"
            aria-label="Voir le compte Linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </Link>
        </li>
        <li className="noBullet">
          <Link
            className="noDecoration colorLinks hoveredLink"
            to="https://github.com/Christellaa"
            target="blank"
            aria-label="Voir le compte GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
