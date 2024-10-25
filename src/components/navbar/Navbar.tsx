import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
// import Search from "../header/Search";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/inicio");
  };

  return (
    <header className="header">
      <img
        className="logo"
        src={logo}
        alt="Logo"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />

      {/* <Search /> */}
      <nav className="navbar">
        <a href="/produtos">Produtos</a>
        <a href="/">Botas</a>
        <a href="/">Luvas</a>
        <a href="/">Proteção</a>
      </nav>
    </header>
  );
};

export default Navbar;
