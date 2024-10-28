import { Pokemon } from "../interfaces/IPokemon";

interface FilterProps {
  data: Pokemon[];
  term: string;
  battleTeam: Pokemon[];
}
// Utility to filter the data that the user is searching for
export const handlefilteredResults = ({
  data,
  term,
  battleTeam,
}: FilterProps) => {
  if (!data && term !== "") return;

  const searchFilteredResult = data.filter(
    (pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(term.toLowerCase()) ||
      pokemon.id.toString().includes(term)
  );

  // Filter Pokémon that are already in the battle team
  return searchFilteredResult.filter(
    (pokemon) =>
      !battleTeam.some((battlePokemon) => battlePokemon.id === pokemon.id)
  );
};
