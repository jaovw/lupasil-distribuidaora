import React from "react";
import "./Produtos.css";
import { useEffect, useState } from "react";
import api from "../../config/Axios";
import { Produto } from "../../interface/Produto";

const Produtos: React.FC = () => {
  const [produtos, setProdtos] = useState<Produto[]>([]);

  const getProdutos = async () => {
    await api.get("/produtos").then((response) => setProdtos(response.data));
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <div className="product-list">
      {produtos.map((product) => (
        <div className="product-item" key={product.id}>
          <img
            src={product.url}
            alt={product.descricao}
            className="product-image"
          />
          <div className="product-name">{product.nome}</div>
          <div className="product-description">{product.descricao}</div>
          {product.promocao ? (
            <div className="product-price">R$ {product.preco}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Produtos;
