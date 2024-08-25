import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        // Fetch a list of 10 Pokémon
        const pokemonPromises = [];
        for (let i = 1; i <= 10; i++) {
          pokemonPromises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
        }
        
        const responses = await Promise.all(pokemonPromises);
        const pokemons = responses.map(response => response.data);
        setPokemonList(pokemons);
        setLoading(false);
      } catch (err) {
        console.error('API Error:', err.message);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokémon List</h1>
        <div className="pokemon-list">
          {pokemonList.map(pokemon => (
            <div key={pokemon.id} className="pokemon-card">
              <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt={pokemon.name}
              />
              <p>ID: {pokemon.id}</p>
              <p>Height: {pokemon.height / 10} m</p>
              <p>Weight: {pokemon.weight / 10} kg</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
