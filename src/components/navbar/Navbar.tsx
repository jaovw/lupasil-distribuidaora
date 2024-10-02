import './Navbar.css';
import logo from '../../assets/logo.svg';
import Search from '../header/Search';

const Navbar = () => {
  return (
    <header className='header'>
        <img src={logo} alt="Logo" width='90px' height='75px'/>

        <Search/>
        <nav className='navbar'>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Portifolio</a>
            <a href="/">Contact</a>
        </nav>
    </header>
  );
};

export default Navbar;
