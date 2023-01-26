export default function Pokemon({id = '90'} = {} ) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    return fetch(url)
        .then(res => res.json())
        .then(function (response) {
            const pokemon = response.name
            return pokemon
            })
}