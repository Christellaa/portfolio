import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Study({ description }) {
  return (
    <>
      {description.map((descriptionItem, id) => (
        <li key={id} className="studySpace">
          <FontAwesomeIcon icon={faCode} className="flex space" />
          {descriptionItem}
        </li>
      ))}
    </>
  );
}
