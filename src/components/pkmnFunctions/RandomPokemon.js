import React, { useState, useEffect } from "react";
import Pokemon from "../../services/getPokemon";
import TeamPokemon from "../../services/getTeamPokemon";

export default function RandomPokemmon() {
  const [pokemon, setPokemon] = useState([]);
  const [team, setTeam] = useState([]);
  useEffect(function () {
    Pokemon({ id: Math.floor(Math.random() * 898) + 1 }).then((pokemon) =>
      setPokemon(pokemon)
    );
  }, []);
  return (
    <div>
      <h1> WELCOME {pokemon}</h1>
      <section className="Pkmn">
        <button
          className="PkmnButton"
          onClick={() =>
            Pokemon({ id: Math.floor(Math.random() * 898) + 1 }).then(
              (pokemon) => setPokemon(pokemon)
            )
          }
        >
          Random pokemon
        </button>
        <span class="PkmnTeam">
          {" "}
          {team.map((pokemon) => {
            return <li>{pokemon}</li>;
          })}{" "}
        </span>
        <button
          className="PkmnButton"
          onClick={() =>
            TeamPokemon({ teamSize: 6 }).then((team) => setTeam(team))
          }
        >
          Random Team
        </button>
      </section>
    </div>
  );
}
