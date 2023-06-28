import { Link } from "react-router-dom";
import cv from "../../assets/pdftest.pdf";

export default function NavbarHorizontal() {
  return (
    <ul className="flex flexCenter space">
      <li className="noBullet">
        <Link className="noDecoration colorLinks" to="/">
          À Propos
        </Link>
      </li>
      <li className="noBullet">
        <Link className="noDecoration colorLinks" to="/studies">
          Parcours
        </Link>
      </li>
      <li className="noBullet">
        <Link className="noDecoration colorLinks" to="/projects">
          Projets
        </Link>
      </li>
      <li className="noBullet">
        <Link className="noDecoration colorLinks" to="/skills">
          Compétences
        </Link>
      </li>
      <li className="noBullet">
        <Link to={cv} className="noDecoration colorLinks" target="blank">
          CV
        </Link>
      </li>
    </ul>
  );
}
