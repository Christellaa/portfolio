import { Link } from "react-router-dom";
import cv from "../../assets/pdftest.pdf";

export default function NavbarModal({ setModalOpen }) {
  return (
    <ul className="flexColumn flexCenter navbarModal">
      <li className="noBullet">
        <Link
          className="noDecoration colorLinks"
          to="/"
          onClick={() => setModalOpen(false)}
        >
          À Propos
        </Link>
      </li>
      <hr className="navbarHr" />
      <li className="noBullet">
        <Link
          className="noDecoration colorLinks"
          to="/studies"
          onClick={() => setModalOpen(false)}
        >
          Parcours
        </Link>
      </li>
      <hr className="navbarHr" />
      <li className="noBullet">
        <Link
          className="noDecoration colorLinks"
          to="/projects"
          onClick={() => setModalOpen(false)}
        >
          Projets
        </Link>
      </li>
      <hr className="navbarHr" />
      <li className="noBullet">
        <Link
          className="noDecoration colorLinks"
          to="/skills"
          onClick={() => setModalOpen(false)}
        >
          Compétences
        </Link>
      </li>
      <hr className="navbarHr" />
      <li className="noBullet">
        <Link
          to={cv}
          className="noDecoration colorLinks"
          target="blank"
          onClick={() => setModalOpen(false)}
        >
          CV
        </Link>
      </li>
    </ul>
  );
}
