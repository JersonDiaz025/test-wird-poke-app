export interface Pokemon {
  id: number;
  url: string;
  name: string;
  order: number;
  sprites?: Sprites;
  image?: string;
  dispatch?: (action: { type: string; payload: Pokemon }) => void;
}

type Sprites = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: OtherTypes;
};

type OtherTypes = {
  dream_world: {
    front_default: string;
    front_female: null;
  };
  home: {
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
  };
  official_artwork: {
    front_default: string;
    front_shiny: string;
  };
  showdown: {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
  };
};
