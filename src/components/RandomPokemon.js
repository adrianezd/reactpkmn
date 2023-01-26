import React, { useState, useEffect } from "react";
import Pokemon from "../services/getPokemon";
import TeamPokemon from "../services/getTeamPokemon";

export default function RandomPokemmon(){
    const [pokemon, setPokemon] = useState([]);
    const [team, setTeam] = useState([]);
    useEffect(function () {
        Pokemon({ id: Math.floor(Math.random() * 898) + 1 }).then((pokemon) =>
            setPokemon(pokemon)
        );
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <h1> WELCOME {pokemon}</h1>
                <section className="App-content">
                    <button className="button" onClick={() => Pokemon({ id: Math.floor(Math.random() * 898) + 1 }).then((pokemon) => setPokemon(pokemon))}>Random pokemon
                    </button>
                    <span> {
                        team.map((pokemon) => {
                            return <li>{pokemon}</li>
                        })} </span>
                    <button className="button" onClick={() => TeamPokemon({ teamSize: 6 }).then((team) => setTeam(team))}>Random Team
                    </button>
                </section>
            </header>
        </div>
    );
} 