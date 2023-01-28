import {useState, useEffect} from "react";
import Pokemon from "../../services/getPokemon";
import "../components.styles.css"
import PlayGame from "../GameModes/PlayGame";

export default function SearchPokemon({pokemon} = {pokemon: "chansey"}) {
    const [pokemonFound, setPokemonFound] = useState([]);
    useEffect(function () {
        const pokemon = document.getElementById("pokemonsearch").value;
        Pokemon({ id: pokemon }).then((pokemon) => setPokemonFound(pokemon));
    }, []);

    return (
        <div className="search">
            <input type="number" placeholder="Buscar pokemon" id="pokemonsearch"></input>
            <button className="PkmnButton" onClick={() => 
                Pokemon({ id: document.getElementById("pokemonsearch").value }).then((pokemon) => setPokemonFound(pokemon))
            }>EMPEZAR BUSQUEDA</button>
            <h3 className="pokemonFound">{pokemonFound}</h3>
            <PlayGame pokemon={pokemonFound} />
        </div>

    );
}

