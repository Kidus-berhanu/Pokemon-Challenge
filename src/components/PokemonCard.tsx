import React from 'react';
import './PokemonCard.css';
import './PokemonSelector.module.css'
import { PokemonResponse } from '../types/pokemon.interface';




const PokemonCard = ({ pokemon }: { pokemon: PokemonResponse }) => {
  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>ID: {pokemon.id}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Height: {pokemon.height}</p>
      <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
    </div>
  );
};

export default PokemonCard;
