
import axios from 'axios';
import { PokemonResponse } from '../types/pokemon.interface';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemon = async (name: string): Promise<PokemonResponse | null> => {
  try {
    const response = await axios.get<PokemonResponse>(`${API_URL}${name.toLowerCase()}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch data for", name, error);
    return null;
  }
};
