import Pokemon from "./getPokemon";

export default async function TeamPokemon({ teamSize = "2" } = {}) {
  const list_pokemon = [];
  for (let i = 0; i < teamSize; i++) {
    list_pokemon.push(Pokemon({ id: Math.floor(Math.random() * 898) + 1 }));
  }

  return Promise.all(list_pokemon);
}
