import { useState } from "react";
import NavbarModal from "../NavbarModal/NavbarModal";
import { AnimatePresence } from "framer-motion";
import NavbarMenu from "./NavbarMenu";
import NavbarHorizontal from "./NavbarHorizontal";

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
        {isModalOpen && (
          <NavbarModal isModalOpen={isModalOpen} closeModal={closeModal} />
        )}
      </AnimatePresence>
    </nav>
  );
}
