import {useState, useEffect} from 'react'

function getData() {
  const [pokemonList, setPokemonList] = useState(null)
  const [error, setError] = useState(false)

  useEffect(
    () => {
      fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => response.json())
      .then(data => {
        
        setPokemonList(data)
      })
      .catch(
        (error) => {
          setError(error)
        }
      )
    },
    [conditionA, conditionB]
    )
    oldCondA === newCondA
    // quit early if error
  if (error) return <h1>Error</h1>

  return (
    <>
    <h1> Pokemon</h1>
    {
     
      pokemonList.results.map(
        (pokemon, index) => {
          return (
            <div key={index}>
              <h3>{pokemon.name}</h3>
              <h4>{pokemon.url}</h4>
            </div>
          )
        }
      )
  ) : (
    <h1>Loading...</h1>
  )
  }
    
    </>
  )
}