import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NavbarModal from "../NavbarModal/NavbarModal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
    const body = document.body;
    body.classList.add("noScroll");
  }
  function closeModal() {
    setModalOpen(false);
    const body = document.body;
    body.classList.remove("noScroll");
  }

  return (
    // if mobile ? faBars : links

    <nav>
      {!isModalOpen ? (
        <motion.div
          className="navbarMenu cursorPointer"
          onClick={openModal}
        >
          <motion.span
            className="navbarMenuBar"
          ></motion.span>
          <span className="navbarMenuBar"></span>
          <motion.span
            className="navbarMenuBar"
          ></motion.span>
        </motion.div>
      ) : (
        <motion.div
          className="navbarMenu cursorPointer"
          onClick={closeModal}
        >
          <motion.span
            className="navbarMenuBar"
          ></motion.span>
          <span className="navbarMenuBar"></span>
          <motion.span
            className="navbarMenuBar"
          ></motion.span>
        </motion.div>
      )}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.2 } }}
              className="bgModalBackdrop"
              onClick={(e) => setModalOpen(false)}
            ></motion.div>
            <NavbarModal setModalOpen={setModalOpen} />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
