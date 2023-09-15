import { motion } from "framer-motion";
import StudyDescription from "./StudyDescription";
import hat from "../../assets/hat.svg";

export default function Study({ title, place, year, description }) {
  const studyCard = { scale: 1.02 };

  return (
    <motion.article className="flex items studyGridItem" whileHover={studyCard}>
      <div className="studyLeft">
        <h2 className="studyTitle">{title}</h2>
        <h3 className="place">{place}</h3>
        <p className="date">{year}</p>
        <ul className="noBullet">
          <StudyDescription description={description} />
        </ul>
      </div>
      <div>
        <span className="flex flexCenter hatBg">
          <img src={hat} className="hat" alt="" />
        </span>
      </div>
    </motion.article>
  );
}
