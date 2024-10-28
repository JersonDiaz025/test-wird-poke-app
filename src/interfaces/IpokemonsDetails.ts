export interface PokemonDetails {
  id: number;
  name: string;
  image: string;
  height?: number;
  order: number;
  types?: string;
  stats?: {
    attack?: number;
    defense?: number;
    "specialAttack"?: number;
    "specialDefense"?: number;
    speed?: number;
  }
}



