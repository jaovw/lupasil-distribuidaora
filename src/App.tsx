import { Component } from "react";
import Fornecedores from "./components/footer/Fornecedores";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/swiper/Carousel";
import { epis } from "./components/swiper/Data";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carousel images={epis} />
        <Fornecedores />
        <Footer />
      </div>
    );
  }
}

export default App;
