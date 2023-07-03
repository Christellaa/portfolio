import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <div className="headerContainer">
      <header className="flex flexCenter header">
        <Link to="./">
          <Logo alt="Logo du site" width="58" height="58" />
        </Link>
        <Navbar />
      </header>
    </div>
  );
}
