import { PokemonAction, PokemonState } from "./types";
import {
  SET_LOADING,
  SET_ALL_POKEMON,
  ADD_TO_BATTLE_TEAM,
  SET_INFO_DETAILS,
  REMOVE_FROM_BATTLE_TEAM,
  SET_SEARCH_TERM,
} from "./actions";

// Initial state of the Pokémon reducer
const initialState: PokemonState = {
  allPokemon: [],
  battleTeam: [],
  infoDetails: [],
  searchTerm: "",
  isLoading: false,
};

// Pokémon reducer function
const pokemonReducer = (
  state: PokemonState = initialState,
  action: PokemonAction
) => {
  switch (action.type) {
    case SET_ALL_POKEMON:
      return {
        ...state,
        allPokemon: action.payload, // Update the list of all Pokemon
        isLoading: false, // Set loading to false
      };
    case ADD_TO_BATTLE_TEAM:
      // Check if the battle team has less than 6 Pokemon
      if (state.battleTeam.length < 6) {
        return {
          ...state,
          battleTeam: [...state.battleTeam, action.payload], // Add Pokemon to the battle team
        };
      }
      return state; // Return the current state if team is full
    case REMOVE_FROM_BATTLE_TEAM:
      return {
        ...state,
        battleTeam: state.battleTeam.filter(
          (pokemon) => pokemon.id !== action.payload // Remove Pokemon by ID
        ),
      };
    case SET_INFO_DETAILS:
      return {
        ...state,
        infoDetails: action.payload, // Update Pokémon details
        isLoading: false, // Set loading to false
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload, // Update the search term
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true, // Set loading to true
      };
    default:
      return state; // Return the current state for unrecognized actions
  }
};

export default pokemonReducer;
