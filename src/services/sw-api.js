const baseUrl = 'https://swapi.dev/api/'

// export async function getAllStarships(pageNumber){
//   const res = await fetch(`${baseUrl}starships/?page=${pageNumber}`)
//   return res.json()
// }
export async function getAllStarships(){
  const res = await fetch(`${baseUrl}starships/`)
  return res.json()
}

export async function getDetails(appUrl) {
  const res = await fetch(appUrl)
  return res.json()
}