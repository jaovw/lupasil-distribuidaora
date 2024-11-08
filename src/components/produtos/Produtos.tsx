import React, { useEffect, useState } from "react";
import "./Produtos.css";
import api from "../../config/Axios";
import { Produto } from "../../interface/Produto";
import Pagination from "../pagination/Pagination";
import { useLocation } from "react-router-dom";

const Produtos: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 15; // Define quantos produtos serão exibidos por página
  const location = useLocation(); // Usado para acessar os query params da URL

  const getProdutos = async (filtro: string) => {
    try {
      const response = await api.post("/produtos/filtro", { filtro });
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filtro = queryParams.get("filtro") || "";

    getProdutos(filtro); 
  }, [location]); // Reexecuta sempre que a URL mudar

  // Calcula os produtos da página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = produtos.slice(indexOfFirstItem, indexOfLastItem);

  // Muda a página
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="product-container">
      <div className="product-list">
        {currentProducts.map((product) => (
          <div className="product-item" key={product.id}>
            <img
              src={product.url}
              alt={product.descricao}
              className="product-image"
            />
            <div className="product-name">{product.nome}</div>
            <div className="product-description">CA {product.CA}</div>
            {product.promocao && (
              <div className="product-price">R$ {product.preco}</div>
            )}
          </div>
        ))}
      </div>

      {/* Componente de paginação */}
      <Pagination
        totalItems={produtos.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Produtos;
