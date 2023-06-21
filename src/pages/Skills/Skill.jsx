import { useState } from "react";
import SkillModal from "./SkillModal";
import skillData from "../../data/skillData.json";
import { motion, AnimatePresence } from "framer-motion";

export default function Skill({ title, skills }) {
  const [isModalOpen, setModalOpen] = useState(false);

  function Toggle() {
    setModalOpen(!isModalOpen);
  }

  return (
    <div>
      <h2 className="textCenter">{title}</h2>
      <div className="skillGrid">
        {skills.map((content, id) => (
          <div key={id}>
            <img
              src={content.image}
              className="small skillIcon"
              alt={content.altImage}
              onClick={() => Toggle()}
            />
            {/* <h3>{content.name}</h3> */}
          </div>
        ))}
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <>
            {skillData.map((content, id) => (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { delay: 0.2 } }}
                  className="bgModalBackdrop"
                  onClick={() => Toggle()}
                ></motion.div>
                <SkillModal
                  key={id}
                  name={content.skills.name}
                  details={content.skills.details}
                  Toggle={Toggle}
                />
              </>
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
