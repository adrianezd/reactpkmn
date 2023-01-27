export default function getAllPokemonsData() {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
  return fetch(url)
    .then((res) => res.json())
    .then(function (response) {
      const pokemons = response.results;
      return pokemons;
    });
}
