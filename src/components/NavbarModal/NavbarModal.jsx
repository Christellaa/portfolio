import { Link } from "react-router-dom";
import cv from "../../assets/pdftest.pdf";
import { motion } from "framer-motion";

export default function NavbarModal({ setModalOpen }) {
  return (
    <motion.ul
      initial={{ scale: 0, originY: 0, originX: 1 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="flexColumn flexCenter navbarModal"
    >
      <li className="noBullet">
        <Link
          className="noDecoration colorLinks"
          to="/"
          onClick={() => {
            setModalOpen(false);
            window.scrollTo(0, 0);
          }}
        >
          À Propos
        </Link>
      </li>
      <hr className="navbarHr" />
      <li className="noBullet">
        <Link
          className="noDecoration colorLinks"
          to="/studies"
          onClick={() => {
            setModalOpen(false);
            window.scrollTo(0, 0);
          }}
        >
          Parcours
        </Link>
      </li>
      <hr className="navbarHr" />
      <li className="noBullet">
        <Link
          className="noDecoration colorLinks"
          to="/projects"
          onClick={() => {
            setModalOpen(false);
            window.scrollTo(0, 0);
          }}
        >
          Projets
        </Link>
      </li>
      <hr className="navbarHr" />
      <li className="noBullet">
        <Link
          className="noDecoration colorLinks"
          to="/skills"
          onClick={() => {
            setModalOpen(false);
            window.scrollTo(0, 0);
          }}
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
    </motion.ul>
  );
}
