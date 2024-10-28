import axios from "axios";

export async function fetchDataPokemons(url: string) {
  try {
    const response = await axios.get(url);
    return response?.data;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return [];
  }
}
