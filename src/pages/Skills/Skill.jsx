import { useState } from "react";
import SkillModal from "./SkillModal";

export default function Skill({ title, skills }) {
  const [isModalOpen, setModalOpen] = useState(false);

  function Toggle() {
    setModalOpen(!isModalOpen);
  }

  return (
    <div className="skillGrid">
      <h2>{title}</h2>
      {skills.map((content, id) => (
        <img
          key={id}
          src={content.image}
          className="small"
          alt={content.altImage}
          onClick={Toggle}
        />
      ))}
      {isModalOpen && <SkillModal />}
    </div>
  );
}
