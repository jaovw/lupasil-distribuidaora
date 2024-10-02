import { Component } from 'react';
import './App.css';
// import Incremental from './components/footer/Incremental';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        {/* <Fornecedores/> */}
        {/* <Incremental/> */}
        <Footer/>
      </div>
    );
  }
}

export default App;
