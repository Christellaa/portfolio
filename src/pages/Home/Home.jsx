import photo from "../../assets/photo.png";

export default function Home() {
  return (
    <div className="wrapper flex">
      <div className="homeLeft">
        <span className="photoBg">
          <img
            src={photo}
            className="homePhoto"
            alt="Website developer, Christella"
          />
        </span>
      </div>
      <div className="homeRight">
        <h1 className="textUppercase textCenter">
          Christella <br />
          <span className="titleMarginLeft">De Sousa</span>
        </h1>
        <hr className="hr" />
        <main>
          <p>
            Ayant récemment été diplômée en tant que intégratrice web, je suis
            enthousiaste à l'idée de poursuivre ma carrière dans le
            développement web. mon parcours chez OpenClassrooms m'a offert une
            solide formation, dans laquelle mes compétences se sont aiguisées
            grâce aux divers projets proposés.
          </p>
          <p>
            En ce début de carrière, je me spécialise dans la création de sites
            web côté front-end et dans le développement d'applications Android.
          </p>
        </main>
        <a href="mailto:desousa.christella@proton.me" className="noDecoration">
          <button className="contactBtn">Me contacter</button>
        </a>
      </div>
    </div>
  );
}
