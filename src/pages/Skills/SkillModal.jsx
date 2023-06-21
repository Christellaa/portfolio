import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import checkMark from "../../assets/checkMark.svg";
import { motion } from "framer-motion";

export default function SkillModal({ name, details, Toggle }) {
  console.log(name, details);
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="skillModal items"
    >
      <FontAwesomeIcon
        icon={faXmark}
        className="icon xMark"
        onClick={() => Toggle()}
      />
      <h1 className="textCenter">React</h1>
      <ul className="NoPaddingLeft">
        <li className="flex listItems itemsSpace">
          <img src={checkMark} width="23" alt="Icône de coche" />
          details
        </li>
        <li className="flex listItems itemsSpace">
          <img src={checkMark} width="23" alt="Icône de coche" />
          details
        </li>
        <li className="flex listItems itemsSpace">
          <img src={checkMark} width="23" alt="Icône de coche" />
          details
        </li>
        <li className="flex listItems itemsSpace">
          <img src={checkMark} width="23" alt="Icône de coche" />
          details
        </li>
        <li className="flex listItems itemsSpace">
          <img src={checkMark} width="23" alt="Icône de coche" />
          details
        </li>
      </ul>
    </motion.div>
    // <>
    //   {skills.map((id, name, details) => (
    //     <div key={id}>
    //       <h3>{name}</h3>
    //       <ul>
    //         {details.map((detail, id) => (
    //           <li key={id}>{detail}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   ))}
    // </>
  );
}
