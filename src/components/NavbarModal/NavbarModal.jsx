import { Link } from "react-router-dom";
import cv from "../../assets/pdftest.pdf";
import navbarModalStyles from "./navbarModal.module.css";

export default function NavbarModal() {
  return (
    <ul className={navbarModalStyles.modal}>
      <li className={navbarModalStyles.noBullet}>
        <Link className={navbarModalStyles.noDecoration} to="/projects">
          Projets
        </Link>
      </li>
      <hr className={navbarModalStyles.hr} />
      <li className={navbarModalStyles.noBullet}>
        <Link className={navbarModalStyles.noDecoration} to="/skills">
          Compétences
        </Link>
      </li>
      <li className={navbarModalStyles.noBullet}>
        <Link to={cv} className={navbarModalStyles.noDecoration} target="blank">
          CV
        </Link>
      </li>
    </ul>
  );
}
