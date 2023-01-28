import React from "react";
import RandomPokemmon from "./components/pkmnFunctions/RandomPokemon";
import SearchPokemon from "./components/pkmnFunctions/SearchPokemon";
import SearchbarPokemon from "./components/pkmnFunctions/SearchbarPokemon";
import PlayGame from "./components/GameModes/PlayGame";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RandomPokemmon />
        <SearchbarPokemon /> 
         <SearchPokemon />
      </header>
    </div>
  );
}

export default App;
