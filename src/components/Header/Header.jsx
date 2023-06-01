import logo from "../../assets/logo.png";
import Navbar from "../Navbar/Navbar";
import headerStyles from "./header.module.css";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <img src={logo} alt="Logo" />
      <Navbar />
    </header>
  );
}
