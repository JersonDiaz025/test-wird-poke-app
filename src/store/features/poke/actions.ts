/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pokemon } from "../../../interfaces";

// Action types
export const SET_LOADING = "SET_LOADING"; // Action to set loading state
export const SET_INFO_DETAILS = "SET_INFO_DETAILS"; // Action to set details of a specific Pokémon
export const SET_ALL_POKEMON = "SET_ALL_POKEMON"; // Action to set the list of all Pokémon
export const ADD_TO_BATTLE_TEAM = "ADD_TO_BATTLE_TEAM"; // Action to add a Pokémon to the battle team
export const REMOVE_FROM_BATTLE_TEAM = "REMOVE_FROM_BATTLE_TEAM"; // Action to remove a Pokémon from the battle team
export const SET_SEARCH_TERM = "SET_SEARCH_TERM"; // Action to set the search term for filtering Pokémon

// Action creator to set all Pokémon
export const setAllPokemon = (pokemons: Pokemon[]) => ({
  type: SET_ALL_POKEMON,
  payload: pokemons,
});
// Action creator to add a Pokémon to the battle team
export const addToBattleTeam = (pokemon: Pokemon) => ({
  type: ADD_TO_BATTLE_TEAM,
  payload: pokemon,
});

// Action creator to remove a Pokémon from the battle team
export const removeFromBattleTeam = (pokemonId: any) => ({
  type: REMOVE_FROM_BATTLE_TEAM,
  payload: pokemonId,
});

// Action creator to set detailed information of a specific Pokémon
export const setDetailsInfo = (data: Pokemon) => ({
  type: SET_INFO_DETAILS,
  payload: data,
});

// Action creator to set the search term for filtering Pokémon
export const setSearchTerm = (term: string) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});

// Action creator to set the loading state
export const setLoading = () => ({
  type: SET_LOADING,
});
