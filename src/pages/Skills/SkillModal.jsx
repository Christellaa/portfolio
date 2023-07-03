import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckMark from "../../assets/checkMark.svg";
import { motion } from "framer-motion";

export default function SkillModal({ closeModal, skillName, skillDetails }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="skillModal items"
    >
      <FontAwesomeIcon
        icon={faXmark}
        className="icon xMark cursorPointer"
        onClick={() => closeModal()}
      />
      <h1 className="textCenter">{skillName}</h1>
      <ul className="NoPaddingLeft">
        {skillDetails.map((detail, index) => (
          <li key={index} className="flex listItems itemsSpace">
            <span className="minWidthIcons">
              <CheckMark width="23" height="23" alt="Icône de coche" />
            </span>
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
