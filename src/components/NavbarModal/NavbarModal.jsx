import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import links from "../../data/links.json";

export default function NavbarModal({ isModalOpen, closeModal }) {
  const variants = isModalOpen ? "opened" : "closed";
  const showMenu = {
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
  const showLink = {
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
  const showHr = {
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
      variants={showMenu}
      exit={{
        scale: 0,
        originY: 0,
        originX: 1,
        transition: { duration: 0.3, delay: 0.5 },
      }}
      className="flexColumn flexCenter navbarModal"
    >
      {links.map((link, id) => (
        <>
          {link.openInNewTab === true ? (
            <motion.li
              key={id}
              className="noBullet positionRelative"
              initial={{ opacity: 0, right: 10 }}
              animate={variants}
              variants={showLink}
              exit={{ opacity: 0, right: 10 }}
            >
              <Link
                className="noDecoration colorLinks"
                to={link.url}
                target="_blank"
              >
                {link.name}
              </Link>
            </motion.li>
          ) : (
            <div key={id}>
              <motion.li
                className="noBullet positionRelative"
                initial={{ opacity: 0, right: 10 }}
                animate={variants}
                variants={showLink}
                exit={{ opacity: 0, right: 10 }}
              >
                <Link
                  className="noDecoration colorLinks"
                  to={link.url}
                  onClick={() => {
                    closeModal();
                    window.scrollTo(0, 0);
                  }}
                >
                  {link.name}
                </Link>
              </motion.li>
              <motion.hr
                className="navbarHr"
                initial={{ opacity: 0, width: 0 }}
                animate={variants}
                variants={showHr}
                exit={{ opacity: 0, width: 0 }}
              />
            </div>
          )}
        </>
      ))}
    </motion.ul>
  );
}
