import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>© {new Date().getFullYear()} Lupasil. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
