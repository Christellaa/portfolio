import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <div className="headerContainer">
      <header className="flex flexCenter header">
        <Link to="./">
          <img src={logo} alt="Logo du site" width="58" height="58" />
        </Link>
        <Navbar />
      </header>
    </div>
  );
}
