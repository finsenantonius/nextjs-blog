export async function getPokemon() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  return res.json()
}