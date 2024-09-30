import './Incremental.css';

const Incremental = () => {
  const items = [
    { icon: 'local_shipping', text: 'Entrega para todo o Brasil' },
    { icon: 'credit_card', text: 'Cartão de crédito' },
    { icon: 'verified_user', text: 'Seguro' },
    { icon: 'forum', text: 'Solicite um orçamento' },
  ];

  return (
    <div className="incremental_icon-columns">
      {items.map((item, index) => (
        <div className="incremental_icon-column" key={index}>
          <span className="material-icons">{item.icon}</span>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Incremental;
