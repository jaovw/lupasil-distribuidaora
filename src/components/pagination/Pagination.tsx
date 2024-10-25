import React from "react";
import "./Pagination.css";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Função para lidar com a mudança de página
  const handleClick = (page: number) => {
    onPageChange(page);
  };

  // Função para gerar a navegação paginada
  const renderPagination = () => {
    const pages = [];
    pages.push(1); // Sempre exibe a primeira página

    if (currentPage > 3) {
      pages.push("...");
    }

    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages); // Sempre exibe a última página
    }

    return pages.map((page, index) =>
      typeof page === "number" ? (
        <button
          key={index}
          onClick={() => handleClick(page)}
          className={`pagination-button ${
            page === currentPage ? "active" : ""
          }`}
        >
          {page}
        </button>
      ) : (
        <span key={index} className="pagination-dots">
          {page}
        </span>
      )
    );
  };

  return <div className="pagination-container">{renderPagination()}</div>;
};

export default Pagination;
