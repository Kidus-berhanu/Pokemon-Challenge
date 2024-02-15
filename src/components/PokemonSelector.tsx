import React, { useState, useEffect } from 'react';
import { getPokemon } from '../services/pokemonService';
import PokemonCard from './PokemonCard';
import { PokemonResponse } from '../types/pokemon.interface';
import './PokemonCard.css';


const starterPokemon = ["bulbasaur", "squirtle", "charmander"];

const PokemonSelector: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonResponse[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonResponse | null>(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [pokemonToConfirm, setPokemonToConfirm] = useState<PokemonResponse | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonData = await Promise.all(starterPokemon.map(name => getPokemon(name)));
      setPokemons(pokemonData.filter(Boolean) as PokemonResponse[]);
    };

    fetchPokemons();
  }, []);

  const handleSelectPokemon = (pokemon: PokemonResponse) => {
    setPokemonToConfirm(pokemon);
    setShowConfirmationModal(true);
  };

  const confirmSelection = (confirm: boolean) => {
    if (confirm && pokemonToConfirm) {
      setSelectedPokemon(pokemonToConfirm);
      setShowConfirmationModal(false);
    } else {
      setShowConfirmationModal(false);
    }
  };

  return (
    <div className="pokemon-card-container">
      {showConfirmationModal && (
        <div className="confirmation-modal">
          <p>Do you want to select {pokemonToConfirm?.name}?</p>
          <img src={pokemonToConfirm?.sprites.front_default} alt={pokemonToConfirm?.name} style={{ width: '50px', height: '50px' }} />
          <div>
           
            <button onClick={() => confirmSelection(true)} className="yes-button">Yes</button>
            <button onClick={() => confirmSelection(false)} className="no-button">No, thanks</button>

          </div>
        </div>
      )}

      {selectedPokemon ? (
        <div className="pokemon-card" onClick={() => handleSelectPokemon(selectedPokemon)}>
          <PokemonCard pokemon={selectedPokemon} />
        </div>
      ) : (
        pokemons.map((pokemon, index) => (
          <div key={index} className="pokemon-card" onClick={() => handleSelectPokemon(pokemon)} style={{ cursor: 'pointer' }}>
            <PokemonCard pokemon={pokemon} />
          </div>
        ))
      )}
    </div>
  );
};

export default PokemonSelector;
