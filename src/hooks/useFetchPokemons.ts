import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { POKE_API_URL } from "../constants/api";
import { Pokemon } from "../interfaces/IPokemon";
import { findItems } from "../utils/findResults";
import { setAllPokemon, setLoading } from "../store";
import { fetchDataPokemons } from "../services/getData";

const useFetchPokemons = () => {
  const dispatch = useDispatch();

  const loadPokemons = async () => {
    try {
      dispatch(setLoading());
      const pokemons = await fetchDataPokemons(POKE_API_URL);
      const { results } = pokemons;

      // Fetching detailed data for each Pokémon
      const dataPokemons = await Promise.all(
        results.map(async (pokemonItem: Pokemon) => {
          const { url } = pokemonItem;
          return await fetchDataPokemons(url);
        })
      );

      // Map to extract necessary fields for each Pokémon
      const allPokemons = dataPokemons.map((data) => ({
        id: data.id,
        url: "",
        order: data.order,
        name: data.name,
        image: data.sprites?.other?.dream_world.front_default || "",
        height: data?.height,
        types: data.types.map(
          (type: { type: { name: string } }) => type.type.name
        ),
        stats: {
          attack: findItems(data.stats, "attack"),
          defense: findItems(data.stats, "defense"),
          "specialAttack": findItems(data.stats, "special-attack"),
          "specialDefense": findItems(data.stats, "special-defense"),
          speed: findItems(data.stats, "speed"),
        },
      }));
      // Set values in global state wih redux
      dispatch(setAllPokemon(allPokemons));
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };

  useEffect(() => {
    loadPokemons();
  }, []);
};
export default useFetchPokemons;
