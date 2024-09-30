import { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Incremental from './components/footer/Incremental';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {/* <Fornecedores/> */}
        <Incremental/>
        <Footer/>
      </div>
    );
  }
}

export default App;
