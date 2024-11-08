import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [inputFiltro, setInputFiltro] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFiltro(e.target.value);
  };

  const pesquisar = () => {
    navigate(`/produtos?filtro=${inputFiltro}`);
  };

  return (
    <div className="header_search-container">
      <div className="header_search-input">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={inputFiltro}
          onChange={handleInputChange}
        />
      </div>
      <div className="header_search-button">
        <button onClick={pesquisar}>
          <span className="material-icons">search</span>
        </button>
      </div>
    </div>
  );
};

export default Search;
