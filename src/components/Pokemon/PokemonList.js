import React from "react";
import Pokemon from "./Pokemon";

export default function(props) {
  return (
    <ul>
      {props.pokemons.map(pokemon => (
        <li key={pokemon.name}>
          <Pokemon name={pokemon.name} />
        </li>
      ))}
    </ul>
  );
}
