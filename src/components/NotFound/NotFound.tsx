import { Link } from "react-router-dom";
import "./NotFound.css"; // Estilização separada

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img
        src="src\assets\404NotFound.png"
        alt="Página não encontrada"
        className="not-found-image"
      />
      <div className="not-found-content">
        <h1>Esta página não existe</h1>
        <p>Verifique sua URL ou volte para a página de início.</p>
        <Link to="/inicio" className="not-found-button">
          Voltar para o início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
