import { motion } from "framer-motion";

export default function NavbarMenu({ isModalOpen, openModal, closeModal }) {
  const variants = isModalOpen ? "opened" : "closed";
  const bar = {
    opened: {
      rotate: "180deg",
      transition: { duration: 0.5 },
    },
    closed: {
      rotate: "-180deg",
      transition: { duration: 0.5 },
    },
  };
  const topBar = {
    opened: {
      rotate: "45deg",
      width: "20px",
      translate: "23px 9px",
      transition: { duration: 0.5 },
    },
    closed: {
      rotate: "0deg",
      translate: "0px 0px",
      transition: { duration: 0.5 },
    },
  };
  const bottomBar = {
    opened: {
      rotate: "-45deg",
      width: "20px",
      translate: "23px -7px",
      transition: { duration: 0.5 },
    },
    closed: {
      rotate: "0deg",
      translate: "0px 0px",
      transition: { duration: 0.5 },
    },
  };
  return (
    <>
      {!isModalOpen ? (
        <motion.div
          className="navbarMenu cursorPointer"
          onClick={openModal}
          animate={variants}
          variants={bar}
        >
          <motion.span
            className="navbarMenuBar"
            animate={variants}
            variants={topBar}
          ></motion.span>
          <span className="navbarMenuBar"></span>
          <motion.span
            className="navbarMenuBar"
            animate={variants}
            variants={bottomBar}
          ></motion.span>
        </motion.div>
      ) : (
        <motion.div
          className="navbarMenu cursorPointer"
          onClick={closeModal}
          animate={variants}
          variants={bar}
        >
          <motion.span
            className="navbarMenuBar"
            animate={variants}
            variants={topBar}
          ></motion.span>
          <span className="navbarMenuBar"></span>
          <motion.span
            className="navbarMenuBar"
            animate={variants}
            variants={bottomBar}
          ></motion.span>
        </motion.div>
      )}
    </>
  );
}
