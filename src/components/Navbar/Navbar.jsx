import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NavbarModal from "../NavbarModal/NavbarModal";
import { useState } from "react";
import navbarStyles from "./navbar.module.css";

export default function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    // if mobile ? faBars : links
    <nav>
      {!isModalOpen ? (
        <FontAwesomeIcon
          icon={faBars}
          className={navbarStyles.menu}
          onClick={() => setModalOpen(true)}
        />
      ) : (
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={navbarStyles.menu}
          onClick={() => setModalOpen(false)}
        />
      )}
      {isModalOpen && <NavbarModal onClick={(e) => e.stopPropagation()} />}
    </nav>
  );
}
