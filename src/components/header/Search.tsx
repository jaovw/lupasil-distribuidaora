import './Search.css';

const Search = () => {

  const pesquisar = () => {
    alert('Pesquisar...');
  }

  return (
    <div className="header_search-container">
      <div className="header_search-input">
        <input type="text" placeholder="Pesquisar..." />
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
