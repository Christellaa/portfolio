import { useState } from "react";
import SkillModal from "./SkillModal";
import { motion, AnimatePresence } from "framer-motion";

export default function Skill({ title, skills }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("");

  const skillIcon = {
    opacity: 0.8,
    scale: 1.1,
  };

  function openModal(skill) {
    setSelectedSkill(skill);
    setModalOpen(true);
    const body = document.body;
    body.classList.add("noScroll");
  }

  function closeModal() {
    setSelectedSkill("");
    setModalOpen(false);
    const body = document.body;
    body.classList.remove("noScroll");
  }

  return (
    <div>
      <h2 className="textCenter">{title}</h2>
      <div className="skillGrid">
        {skills.map((content, index) => (
          <div key={index}>
            <motion.img
              src={content.image}
              className="small cursorPointer"
              alt={content.altImage}
              width="80"
              height="80"
              whileHover={skillIcon}
              onClick={() => openModal(content)}
            />
          </div>
        ))}
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.2 } }}
              className="bgModalBackdrop"
              onClick={() => closeModal()}
            ></motion.div>
            <SkillModal
              openModal={openModal}
              closeModal={closeModal}
              skillId={selectedSkill.id}
              skillName={selectedSkill.name}
              skillDetails={selectedSkill.details}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
