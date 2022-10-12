const baseUrl = 'https://swapi.dev/api/starships'

export async function getAllStarships(){
  const res = await fetch(baseUrl)
  return res.json()
}