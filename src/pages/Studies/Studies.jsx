import StudiesStyles from "./studies.module.css";
import LayoutStyles from "../../components/Layout/layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Courses() {
  return (
    <div className={LayoutStyles.wrapper}>
      <h1>Mon Parcours</h1>
      <main className={StudiesStyles.grid}>
        <article className={StudiesStyles.gridItem}>
          <h2 className={StudiesStyles.title}>
            Certification professionnelle Développeur Intégrateur Web - Titre
            RNCP niveau 5
          </h2>
          <h3 className={StudiesStyles.place}>OpenClassrooms - Paris</h3>
          <p className={StudiesStyles.date}>2022 - 2023</p>
          <ul className={StudiesStyles.noBullet}>
            <li className={StudiesStyles.inline}>
              <FontAwesomeIcon icon={faCode} className={StudiesStyles.space} />
              Construire un site web responsive et dynamique
            </li>
            <li className={StudiesStyles.inline}>
              <FontAwesomeIcon icon={faCode} className={StudiesStyles.space} />
              Planifier le déroulement de la réalisation d’un site
            </li>
            <li className={StudiesStyles.inline}>
              <FontAwesomeIcon icon={faCode} className={StudiesStyles.space} />
              Analyser les besoins client à partir d’un cahier des charges et de
              user stories
            </li>
            <li className={StudiesStyles.inline}>
              <FontAwesomeIcon icon={faCode} className={StudiesStyles.space} />
              Optimiser le référencement et débogguer un site
            </li>
          </ul>
        </article>
        <article className={StudiesStyles.gridItem}>
          <h2 className={StudiesStyles.title}>
            1ère année de licence Langues, Littérature et Civilisations
            Étrangères et Régionales (LLCER) Anglais-Japonais
          </h2>
          <h3 className={StudiesStyles.place}>
            Université Gustave Eiffel - Marne-la-Vallée
          </h3>
          <p className={StudiesStyles.date}>2019-2020</p>
          <ul className={StudiesStyles.noBullet}>
            <li className={StudiesStyles.inline}>
              <FontAwesomeIcon icon={faCode} className={StudiesStyles.space} />
              Apprentissage orale et écrite de l’anglais et du japonais
            </li>
            <li className={StudiesStyles.inline}>
              <FontAwesomeIcon icon={faCode} className={StudiesStyles.space} />
              Analyse et traduction littéraire (anglais-français et
              français-anglais)
            </li>
          </ul>
        </article>
        <article className={StudiesStyles.gridItem}>
          <h2 className={StudiesStyles.title}>
            Bac Sciences et Technologies du Management et de la Gestion (STMG) -
            option Systèmes d’Information et de Gestion (SIG)
          </h2>
          <h3 className={StudiesStyles.place}>
            Campus Jules Ferry - Coulommiers
          </h3>
          <p className={StudiesStyles.date}>2018-2019</p>
          <ul className={StudiesStyles.noBullet}>
            <li className={StudiesStyles.inline}>
              <FontAwesomeIcon icon={faCode} className={StudiesStyles.space} />
              Conception et développement d’un site web
            </li>
            <li className={StudiesStyles.inline}>
              <FontAwesomeIcon icon={faCode} className={StudiesStyles.space} />
              Modélisation du processus de développement d'un site web
            </li>
            <li className={StudiesStyles.inline}>
              <FontAwesomeIcon icon={faCode} className={StudiesStyles.space} />
              Architecture d'une base de données SQL
            </li>
          </ul>
        </article>
      </main>
    </div>
  );
}
