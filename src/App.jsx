import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(()=>{
    function getData() {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://localhost:5000/all-pokemons',    
        };
        try {
          axios.request(config).then(res=>{
            setPokemons(res.data.results)
          })
        } catch (error) {
          console.error(error)
      }
    }
    getData()
    // console.log(result)
  },[])

  console.log(pokemons)

  const pokemonsRender = pokemons.map(pokemon =><li>{pokemon.name}</li>)

  return (
    <>
      <div>
        {pokemonsRender}
      </div>
    </>
  )
}

export default App
