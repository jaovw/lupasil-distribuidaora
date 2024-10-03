import "./Fornecedores.css";
import msa from "../../assets/MSA.svg";
import supersafty from "../../assets/SUPERSAFETY.svg";
import volk from "../../assets/VOLK_DO_BRASIL.svg";

const Fornecedores = () => {
  return (
    <div className="brands_container">
      <p>Nossos fornecedores</p>
      <div className="brands_div">
        <img className="brand" src={msa} alt="" />
        <img className="brand" src={supersafty} alt="" />
        <img className="brand" src={volk} alt="" />
      </div>
    </div>
  );
};

export default Fornecedores;
