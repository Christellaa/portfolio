import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`{"@context": "https://schema.org/WebPage", "@type": "Organization",
          "url": "https://christellaa.github.io/portfolio/", "logo":
          "https://christellaa.github.io/portfolio/assets/logo.svg"}`}
        </script>
        <meta
          name="description"
          content="Bienvenue sur mon portfolio! Vous y trouverez plusieurs de mes réalisations. Bonne visite!"
        />
        <meta itemProp="name" content="Portfolio Christella De Sousa" />
        <meta
          itemProp="image"
          content="https://christellaa.github.io/portfolio/assets/logo.svg"
        />
        <meta property="og:title" content="Portfolio Christella De Sousa" />
        <meta property="og:type" content="page" />
        <meta
          property="og:url"
          content="https://christellaa.github.io/portfolio/"
        />
        <meta
          property="og:image"
          content="https://christellaa.github.io/portfolio/assets/logo.svg"
        />
        <meta
          property="og:description"
          content="Bienvenue sur mon portfolio! Vous y trouverez plusieurs de mes réalisations. Bonne visite!"
        />
        <meta property="author" content="Christella De Sousa" />
        <meta name="twitter:creator" content="Christella De Sousa" />
        <meta
          name="twitter:image"
          content="https://christellaa.github.io/portfolio/assets/logo.svg"
        />
        <meta name="twitter:image:alt" content="Logo du site portfolio" />
      </Helmet>

      <div className="flexColumn layout">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
