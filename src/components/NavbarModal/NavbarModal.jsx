import { Link } from "react-router-dom";
import cv from "../../assets/pdftest.pdf";
import { motion } from "framer-motion";

export default function NavbarModal({ isModalOpen, closeModal }) {
  const variants = isModalOpen ? "opened" : "closed";
  const menu = {
    opened: {
      scale: 1,
      transition: { duration: 0.3, delay: 0.2 },
    },
    closed: {
      scale: 0,
      originY: 0,
      originX: 1,
      transition: { duration: 0.3, delay: 0.5 },
    },
  };
  const link = {
    opened: {
      opacity: 1,
      right: 0,
      transition: { duration: 0.25, delay: 0.55 },
    },
    closed: {
      opacity: 0,
      right: 10,
      transition: { duration: 0.3 },
    },
  };
  const hr = {
    opened: {
      opacity: 1,
      width: 60,
      transition: { duration: 0.25, delay: 0.55 },
    },
    closed: {
      opacity: 0,
      width: 0,
    },
  };

  return (
    <motion.ul
      initial={{ scale: 0, originY: 0, originX: 1 }}
      animate={variants}
      variants={menu}
      exit={{
        scale: 0,
        originY: 0,
        originX: 1,
        transition: { duration: 0.3, delay: 0.5 },
      }}
      className="flexColumn flexCenter navbarModal"
    >
      <motion.li
        className="noBullet positionRelative"
        initial={{ opacity: 0, right: 10 }}
        animate={variants}
        variants={link}
        exit={{ opacity: 0, right: 10 }}
      >
        <Link
          className="noDecoration colorLinks"
          to="/"
          onClick={() => {
            closeModal();
            window.scrollTo(0, 0);
          }}
        >
          À Propos
        </Link>
      </motion.li>
      <motion.hr
        className="navbarHr"
        initial={{ opacity: 0, width: 0 }}
        animate={variants}
        variants={hr}
        exit={{ opacity: 0, width: 0 }}
      />
      <motion.li
        className="noBullet positionRelative"
        initial={{ opacity: 0, right: 10 }}
        animate={variants}
        variants={link}
        exit={{ opacity: 0, right: 10 }}
      >
        <Link
          className="noDecoration colorLinks"
          to="/studies"
          onClick={() => {
            closeModal();
            window.scrollTo(0, 0);
          }}
        >
          Parcours
        </Link>
      </motion.li>
      <motion.hr
        className="navbarHr"
        initial={{ opacity: 0, width: 0 }}
        animate={variants}
        variants={hr}
        exit={{ opacity: 0, width: 0 }}
      />
      <motion.li
        className="noBullet positionRelative"
        initial={{ opacity: 0, right: 10 }}
        animate={variants}
        variants={link}
        exit={{ opacity: 0, right: 10 }}
      >
        <Link
          className="noDecoration colorLinks"
          to="/projects"
          onClick={() => {
            closeModal();
            window.scrollTo(0, 0);
          }}
        >
          Projets
        </Link>
      </motion.li>
      <motion.hr
        className="navbarHr"
        initial={{ opacity: 0, width: 0 }}
        animate={variants}
        variants={hr}
        exit={{ opacity: 0, width: 0 }}
      />
      <motion.li
        className="noBullet positionRelative"
        initial={{ opacity: 0, right: 10 }}
        animate={variants}
        variants={link}
        exit={{ opacity: 0, right: 10 }}
      >
        <Link
          className="noDecoration colorLinks"
          to="/skills"
          onClick={() => {
            closeModal();
            window.scrollTo(0, 0);
          }}
        >
          Compétences
        </Link>
      </motion.li>
      <motion.hr
        className="navbarHr"
        initial={{ opacity: 0, width: 0 }}
        animate={variants}
        variants={hr}
        exit={{ opacity: 0, width: 0 }}
      />
      <motion.li
        className="noBullet positionRelative"
        initial={{ opacity: 0, right: 10 }}
        animate={variants}
        variants={link}
        exit={{ opacity: 0, right: 10 }}
      >
        <Link
          to={cv}
          className="noDecoration colorLinks"
          target="blank"
          onClick={closeModal}
        >
          CV
        </Link>
      </motion.li>
    </motion.ul>
  );
}
