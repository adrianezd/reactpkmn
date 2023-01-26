import React from "react";
import RandomPokemmon from "./components/RandomPokemon";
import SearchPokemon from "./components/SearchPokemon";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RandomPokemmon />
        <SearchPokemon />
      </header>
    </div>
  );
}

export default App;
