import React from "react";
import RandomPokemmon from "./components/pkmnFunctions/RandomPokemon";
import SearchPokemon from "./components/pkmnFunctions/SearchPokemon";
import SearchbarPokemon from "./components/pkmnFunctions/SearchbarPokemon";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RandomPokemmon /> 
         <SearchPokemon />
        <SearchbarPokemon /> 
      </header>
    </div>
  );
}

export default App;
