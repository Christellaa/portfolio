import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import fiverrIcon from "../../assets/fiverrIcon.svg";
import upworkIcon from "../../assets/upworkIcon.svg";
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
        <li className="noBullet">
          <Link
            className="noDecoration colorLinks hoveredLink"
            to="https://fr.fiverr.com/christellaa_"
            target="blank"
            aria-label="Voir le compte Fiverr"
          >
            <img
              src={fiverrIcon}
              className="icon"
              width="28"
              height="28"
              alt="Icône de Fiverr"
            />
          </Link>
        </li>
        <li className="noBullet">
          <Link
            className="noDecoration colorLinks hoveredLink"
            to="https://www.upwork.com/freelancers/~01a83b2cc0a789ca2c"
            target="blank"
            aria-label="Voir le compte Upwork"
          >
            <img
              src={upworkIcon}
              className="icon"
              width="25"
              height="25"
              alt="Icône de Upwork"
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
