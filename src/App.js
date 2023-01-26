import React, { useEffect, useState } from "react";
import Pokemon from "./services/getPokemon";
import "./App.css";

function App() {
  const [pokemonDex, setPokemonDex] = useState([]);

  useEffect(function () {
    Pokemon({ keyword: "chansey" }).then((pokemonDex) =>
      setPokemonDex(pokemonDex)
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>REACT APP</h1>
        <section className="App-content">
          {<span>{pokemonDex}</span>}
          <button className="button" onClick={
            () => Pokemon({ id: Math.floor(Math.random() * 898) + 1  }).then((pokemonDex) => setPokemonDex(pokemonDex))}>Random pokemon</button>  
        </section>
      </header>
    </div>
  );
}

export default App;
