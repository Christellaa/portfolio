import checkMark from "../../assets/checkMark.svg";

export default function Study({ description }) {
  return (
    <>
      {description.map((descriptionItem, id) => (
        <li key={id} className="flex listItems itemsSpace">
          <img src={checkMark} width="23" height="23" alt="Icône de coche" />
          {descriptionItem}
        </li>
      ))}
    </>
  );
}
