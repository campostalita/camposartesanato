import React from "react";
import Header from "./components/Header/index";
import Sobre from "./pages/Sobre/Sobre"
/* import logo from './logo.svg';
import './App.css'; */

const App = () => {
  return (
    <>
      <Header/>
      <Sobre/>
    
    </>
  );
};

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Campos Artesanato
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
