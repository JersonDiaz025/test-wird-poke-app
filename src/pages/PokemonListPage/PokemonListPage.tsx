import "./index.css";
import { Texts } from "../../constants";
import { useFetchPokemons } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { PokemonList, SearchBar, Loader } from "../../components";
import { AppDispatch, RootState, setSearchTerm } from "../../store";
import { handlefilteredResults } from "../../utils/filterResults";

const PokemonListPage = () => {
  useFetchPokemons(); // Get data from all pokemons list
  const dispatch = useDispatch<AppDispatch>();
  const { allPokemon, isLoading, battleTeam, searchTerm } = useSelector(
    (state: RootState) => state.pokemon
  );
  // Util to filter pokemos with search method and filter Pokemon that are already in the battle team
  const filteredResults = handlefilteredResults({
    data: allPokemon,
    term: searchTerm,
    battleTeam: battleTeam,
  });

  return (
    <div className="container-list-pokemon">
      <SearchBar
        placeholder={Texts.PLACEHOLDER_SEARCH}
        value={searchTerm}
        dispatch={dispatch}
        setValue={setSearchTerm}
      />
      {filteredResults && !isLoading ? (
        <PokemonList allPokemon={filteredResults} dispatch={dispatch} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PokemonListPage;
