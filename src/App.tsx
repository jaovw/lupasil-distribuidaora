import { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Fornecedores from "./components/footer/Fornecedores";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/swiper/Carousel";
import Produtos from "./components/produtos/Produtos";
import { epis } from "./components/swiper/Data";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        {/* Definindo as rotas */}
        <Routes>
          {/* Redireciona a raiz '/' para '/inicio' */}
          <Route path="/" element={<Navigate to="/inicio" />} />

          {/* Rota para a página inicial com Carousel e Fornecedores */}
          <Route
            path="/inicio"
            element={
              <>
                <Carousel images={epis} />
                <Fornecedores />
              </>
            }
          />

          {/* Rota para a página de produtos */}
          <Route path="/produtos" element={<Produtos />} />

          {/* Rota "catch-all" para URLs inexistentes */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default App;
