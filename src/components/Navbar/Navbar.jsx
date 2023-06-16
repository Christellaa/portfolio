import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NavbarModal from "../NavbarModal/NavbarModal";
import { useState } from "react";

export default function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    // if mobile ? faBars : links
    <nav>
      {!isModalOpen ? (
        <FontAwesomeIcon
          icon={faBars}
          className="icon colorLinks"
          onClick={(e) => setModalOpen(true)}
        />
      ) : (
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="icon colorLinks"
          onClick={() => setModalOpen(false)}
        />
      )}
      {isModalOpen && (
        <>
          <div
            className="bg-transparent"
            onClick={(e) => setModalOpen(false)}
          ></div>
          <NavbarModal setModalOpen={setModalOpen} />
        </>
      )}
    </nav>
  );
}
