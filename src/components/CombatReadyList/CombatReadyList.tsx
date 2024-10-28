import "./index.css";
import { Title, CombateCard } from "../index";
import { Texts, Colors } from "../../constants";
import { Pokemon } from "../../interfaces/IPokemon";

interface CombateProps {
  battleTeam: Pokemon[];
  dispatch: (action: { type: string; payload: Pokemon }) => void;
}

const CombatReadyList = ({ battleTeam, dispatch }: CombateProps) => {
  return (
    <div className="container-list">
      <Title
        text={Texts.TITLE_LIST_BATTLE_COMBATE}
        styles={{
          fontSize: "18px",
          textAlign: "center",
          color: Colors.WHITE,
          fontWeight: 500,
        }}
      />
      <div className="container-battle-teams">
        {battleTeam.length ? (
          battleTeam.map(({ id, name, image, order }: Pokemon) => (
            <div key={id}>
              <CombateCard
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
          <div className="not-ready-pokemon">
            <Title
              text={Texts.MSG_NOT_BATTLE_TEAM}
              styles={{
                fontSize: "19px",
                textAlign: "center",
                color: Colors.RED,
                fontWeight: 800,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CombatReadyList;
