import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonSelector from '../components/PokemonSelector.tsx';




describe('PokemonSelector Component', () => {
  beforeEach(() => {
  
    getPokemon.mockClear();
  });

  it('renders loading state initially', async () => {
    getPokemon.mockResolvedValueOnce([]);
    render(<PokemonSelector />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it('renders pokemon data after fetching', async () => {
    getPokemon.mockResolvedValueOnce([
      { name: 'bulbasaur', id: 1, sprites: { front_default: 'some_url' }, weight: 69, height: 7, types: [{ type: { name: 'grass' }}] }
    ]);
    render(<PokemonSelector />);
    await waitFor(() => expect(screen.getByText('bulbasaur')).toBeInTheDocument());
  });

  it('displays error message on fetch failure', async () => {
    getPokemon.mockRejectedValueOnce(new Error('Failed to fetch'));
    render(<PokemonSelector />);
    await waitFor(() => expect(screen.getByText(/error:/i)).toBeInTheDocument());
  });

  it('allows a pokemon to be selected and confirmed', async () => {
    getPokemon.mockResolvedValueOnce([
      { name: 'bulbasaur', id: 1, sprites: { front_default: 'some_url' }, weight: 69, height: 7, types: [{ type: { name: 'grass' }}] }
    ]);
    render(<PokemonSelector />);
    await waitFor(() => fireEvent.click(screen.getByText('bulbasaur')));
    expect(screen.getByText(/you selected bulbasaur!/i)).toBeInTheDocument();
  });

  
});
