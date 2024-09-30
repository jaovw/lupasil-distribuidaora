import './Header.css'
import logo from '../../assets/logo.svg';
import Search from './Search';
import Button from './Button';

const Header = () => {

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" width='100px' height='100px' /> {/* Usando o SVG como caminho de imagem */}
      </div>

      <Search/>
      <Button/>
    </header>
  );
}

export default Header;