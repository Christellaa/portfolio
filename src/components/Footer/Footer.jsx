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
            className="noDecoration colorLinks"
            to="mailto:desousa.christella@proton.me"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </li>
        <li className="noBullet">
          <Link
            className="noDecoration colorLinks"
            to="https://www.linkedin.com/in/christella-desousa/"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </li>
        <li className="noBullet">
          <Link
            className="noDecoration colorLinks"
            to="https://github.com/Christellaa"
            target="blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
