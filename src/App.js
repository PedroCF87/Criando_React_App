import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá mundo!
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/pedrofigueira87/"
          target="_blank"
        >
          Desenvolvido por Pedro Figueira
        </a>
      </header>
    </div>
  );
}

export default App;
