import './Button.css';

const Button = () => {

  return (
    <div className="header_buttons">
      <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <span className="material-icons">person</span>
      </button>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <span className="material-icons">shopping_cart</span>
      </button>
    </div>
  );
};

export default Button;
