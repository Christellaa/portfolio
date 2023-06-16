import logo from "../../assets/logo.png";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className="flex flexCenter header">
      <img src={logo} alt="Logo" />
      <Navbar />
    </header>
  );
}
