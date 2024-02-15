
import { useState, useEffect } from 'react';
import { getPokemon } from '../services/pokemonService';
import { PokemonResponse } from '../types/pokemon.interface';

function usePokemon(name: string) {
  const [data, setData] = useState<PokemonResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getPokemon(name);
        setData(data);
        setError(''); 
      } catch (error) {
        console.error("Failed to fetch data for", name, error);
        setError('Failed to fetch data');
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [name]);

  return { data, isLoading, error };
}

export default usePokemon;
