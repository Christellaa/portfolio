import photo from "../../assets/photo.png";

export default function Home() {
  return (
        <span className="positionRelative itemsSpace textCenter">
          <img src={arrow} alt="" className="positionAbsolute arrow" />
          Développeuse web front-end
          <br />
          Développeuse Android
        </span>
        <hr className="hr" />
      <main className="flex flexCenter">
        <div className="homeText flexColumn flexCenter">
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
          <a
            href="mailto:desousa.christella@proton.me"
            className="noDecoration"
          >
            <button className="contactBtn">Me contacter</button>
          </a>
        </div>
      </main>
    </div>
  );
}
