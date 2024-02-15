import React from 'react';
import './App.css'; 
import PokemonSelector from './components/PokemonSelector';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon Challenge</h1>
      </header>
      <main>
        <PokemonSelector />
      </main>
    </div>
  );
}

export default App;
