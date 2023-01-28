import React, { useState } from "react";
import getAllPokemonsData from "../../services/getAllPokemonData";
export default function SearchPokemon() {
  const [pokemonData, setPokemonData] = useState([0]);

  const cargarPokemonsLista = () => {
    getAllPokemonsData().then((pokemons) => setPokemonData(pokemons));
    const botonCargarPokemons = document.getElementById("botonCargarPokemons");
    botonCargarPokemons.remove();
    document.getElementById("selectPkmn").style.display = "block";
  };

  return (
    <div>
      <button id="botonCargarPokemons" class="PkmnButton" onClick={cargarPokemonsLista}>
        Cargar pokemons
      </button>
      <select id="selectPkmn" class="selectPkmn">
        {pokemonData.map((pokemon) => {
          return <option>{pokemon.name}</option>;
        })}
      </select>
    </div>
  );
}
