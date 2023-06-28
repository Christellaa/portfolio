import NavbarModal from "../NavbarModal/NavbarModal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);
  const screenSize = window.innerWidth;

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
    <nav>
      {screenSize >= 769 ? (
        <NavbarHorizontal />
      ) : (
        <NavbarMenu
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
      <AnimatePresence>
        {isModalOpen && <NavbarModal closeModal={closeModal} />}
      </AnimatePresence>
    </nav>
  );
}
