

export interface PokemonResponse {
    name: string;
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    game_indices: any[];
    height: number;
    held_items: Item[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    species: Specie;
    sprites: Sprite;
    stats: Stat[];
    types: Type[];
    weight: number;
  }
  
  interface Ability {
    name: string;
    is_hidden: boolean;
    slot: number;
  }
  
  interface Form {
    name: string;
    url: string;
  }
  
  interface Item {
    item: { name: string; url: string; };
    version_details: any[];
  }
  
  interface Move {
    move: { name: string; url: string; };
  }
  
  interface Specie {
    name: string;
    url: string;
  }
  
  interface Sprite {
    back_default: string;
    back_female?: string;
    back_shiny: string;
    back_shiny_female?: string;
    front_default: string;
    front_female?: string;
    front_shiny: string;
    front_shiny_female?: string;
    other: {
      dream_world: { front_default: string; };
      'official-artwork': { front_default: string; };
    };
  }
  
  interface Stat {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string; };
  }
  
  interface Type {
    slot: number;
    type: { name: string; url: string; };
  }
  