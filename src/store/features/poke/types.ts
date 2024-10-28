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

import {
  SET_LOADING,
  SET_ALL_POKEMON,
  ADD_TO_BATTLE_TEAM,
  SET_INFO_DETAILS,
  REMOVE_FROM_BATTLE_TEAM,
  SET_SEARCH_TERM,
} from "./actions";

interface SetAllPokemonAction {
  type: typeof SET_ALL_POKEMON;
  payload: Pokemon[];
}

interface AddToBattleTeamAction {
  type: typeof ADD_TO_BATTLE_TEAM;
  payload: Pokemon;
}

interface RemoveFromBattleTeamAction {
  type: typeof REMOVE_FROM_BATTLE_TEAM;
  payload: number | undefined;
}

interface SetInfoDetailsAction {
  type: typeof SET_INFO_DETAILS;
  payload: PokemonDetails;
}

interface SetSearchTermAction {
  type: typeof SET_SEARCH_TERM;
  payload: string;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

export type PokemonAction =
  | SetAllPokemonAction
  | AddToBattleTeamAction
  | RemoveFromBattleTeamAction
  | SetInfoDetailsAction
  | SetSearchTermAction
  | SetLoadingAction;
