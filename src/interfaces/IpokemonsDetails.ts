import { Pokemon } from "./IPokemon";

export interface PokemonDetails {
  id: number;
  name: string;
  image: string;
  height: number;
  order: number;
  types: string[];
  stats: {
    attack?: number;
    defense?: number;
    specialAttack?: number;
    specialDefense?: number;
    speed?: number;
  };
}

export interface PokemonState {
  allPokemon: Pokemon[];
  battleTeam: Pokemon[];
  infoDetails: PokemonDetails;
  searchTerm: string;
  isLoading: boolean;
}
