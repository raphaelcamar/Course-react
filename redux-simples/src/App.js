import './App.css';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Intervalo from './components/Intervalo';
import React from 'react'

function App() {

  return (
    <div className="App">
      <h1>Exercício React-Redux (simples)</h1>
      <div className='linha'>
        <Intervalo></Intervalo>
      </div>

      <div className='linha'>
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
