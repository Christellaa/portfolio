import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import FooterStyles from "./footer.module.css";
import LayoutStyles from "../Layout/layout.module.css";

export default function Footer() {
  return (
    <footer className={FooterStyles.bg}>
      <ul className={FooterStyles.footer}>
        <li className={LayoutStyles.noBullet}>
          <Link
            className={LayoutStyles.noDecoration}
            to="mailto:desousa.christella@proton.me"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </li>
        <li className={LayoutStyles.noBullet}>
          <Link
            className={LayoutStyles.noDecoration}
            to="https://www.linkedin.com/in/christella-desousa/"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </li>
        <li className={LayoutStyles.noBullet}>
          <Link
            className={LayoutStyles.noDecoration}
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
