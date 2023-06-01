import layoutStyles from "./layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
