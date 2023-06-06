import { Link } from "react-router-dom";
import ProjectsStyles from "./projects.module.css";

export default function Project({ title, img, altImg, link }) {
  return (
    <article className={ProjectsStyles.gridItem}>
      <img src={img} alt={altImg} />
      <div className={ProjectsStyles.inline}>
        <h2>{title}</h2>
        <Link to={link} className={ProjectsStyles.btn}>
          Lien du code
        </Link>
      </div>
    </article>
  );
}
