import "./index.css";
import { memo } from "react";
import { Card, Title } from "../index";
import { Texts, Colors } from "../../constants";
import { Pokemon } from "../../interfaces/IPokemon";

interface PokemonListProps {
  allPokemon: Pokemon[];
  dispatch: (action: { type: string; payload: Pokemon }) => void;
}
const PokemonList = memo(function PokemonList({
  allPokemon,
  dispatch,
}: PokemonListProps) {
  return (
    <div className="container-list-cards">
      {allPokemon.length ? (
        allPokemon?.map(({ id, name, image, order }: Pokemon) => (
          <div key={id}>
            <Card
              id={id}
              order={order}
              name={name}
              image={image}
              url={""}
              dispatch={dispatch}
            />
          </div>
        ))
      ) : (
        <div className="no-results-msg">
          <Title
            text={Texts.MSG_NOT_RESULTS}
            styles={{
              fontSize: "18px",
              textAlign: "center",
              color: Colors.WHITE,
              fontWeight: 500,
            }}
          />
        </div>
      )}
    </div>
  );
});

export default PokemonList;
