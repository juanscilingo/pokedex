import React, { useState, useEffect } from "react";
import PokemonList from "../Pokemon/PokemonList";

export default function() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setPokemons(data.results);
      });
  }, []);

  return (
    <div>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
