import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <h4>Retrouvez-moi ici:</h4>
      <ul className="flex flexCenter footer">
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
