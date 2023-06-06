import StudiesStyles from "./studies.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Study({ description }) {
  return (
    <>
      {description.map((descriptionItem, id) => (
        <li key={id} className={StudiesStyles.inline}>
          <FontAwesomeIcon icon={faCode} className={StudiesStyles.space} />
          {descriptionItem}
        </li>
      ))}
    </>
  );
}
