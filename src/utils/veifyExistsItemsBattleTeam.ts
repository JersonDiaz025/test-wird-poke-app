import { Pokemon } from "../interfaces/IPokemon";

// Define the shape of the props needed for verification
interface VerifyExistProps {
  id: number; // ID of the Pokémon to check
  battleTeam: Pokemon[]; // Array of Pokemon in the battle team
}

// Function to verify if a Pokemon exists in the battle team
export const veryfyExistsInBattleTeams = ({
  id,
  battleTeam,
}: VerifyExistProps) => {
  // Check if any Pokemon in the battle team has the same ID
  return battleTeam.some((item) => item.id === id);
};
