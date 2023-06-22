import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className="flex flexCenter header">
      <Link to="./">
        <img src={logo} alt="Logo du site" />
      </Link>
      <Navbar />
    </header>
  );
}
