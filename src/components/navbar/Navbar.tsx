import "./Navbar.css";
import logo from "../../assets/logo.svg";
// import Search from "../header/Search";

const Navbar = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo" />

      {/* <Search /> */}
      <nav className="navbar">
        <a href="/">Início</a>
        <a href="/">Botas</a>
        <a href="/">Luvas</a>
        <a href="/">Proteção</a>
      </nav>
    </header>
  );
};

export default Navbar;
