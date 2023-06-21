import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NavbarModal from "../NavbarModal/NavbarModal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    // if mobile ? faBars : links
    <nav>
      {!isModalOpen ? (
        <FontAwesomeIcon
          icon={faBars}
          className="icon colorLinks cursorPointer"
          onClick={(e) => setModalOpen(true)}
        />
      ) : (
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="icon colorLinks cursorPointer"
          onClick={() => setModalOpen(false)}
        />
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
