import { Pokemon } from "../../../interfaces/IPokemon";
import { PokemonDetails } from "../../../interfaces/IpokemonsDetails";

// All types actions
export interface PokemonState {
  allPokemon: Pokemon[];
  battleTeam: Pokemon[];
  infoDetails: PokemonDetails[];
  searchTerm: string;
  isLoading: boolean;
}

export type PokemonAction = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};
