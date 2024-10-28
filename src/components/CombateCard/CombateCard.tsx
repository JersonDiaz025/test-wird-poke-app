import "./index.css";
import deleteIcon from "../../assets/delete.svg";
import { removeFromBattleTeam } from "../../store";
import { Colors, AppRoutes } from "../../constants";
import { Pokemon } from "../../interfaces/IPokemon";
import { CustomLink, Thumbnail, Title, Button, Icon } from "../index";

const CombateCard = ({ name, id, image, dispatch }: Pokemon) => {
  return (
    <div className="combate-card">
      <CustomLink
        styles={{ textDecoration: "none", display: "flex" }}
        to={`${AppRoutes.POKE_DETAIL.replace(":id", id.toString())}`}
      >
        <Thumbnail
          url={image}
          styles={{
            width: "100px",
          }}
        />
        <div style={{ marginLeft: "12px" }}>
          <Title
            text={name}
            styles={{
              textTransform: "capitalize",
              fontSize: "18px",
              textDecoration: "none",
              fontStyle: "none",
              textAlign: "center",
              color: Colors.BLACK,
              fontWeight: 500,
            }}
          />
          <span className="order"># {id}</span>
        </div>
      </CustomLink>
      <Button
        onClick={() => {
          if (dispatch && id !== undefined) {
            dispatch(removeFromBattleTeam(id));
          }
        }}
        styles={{
          position: "absolute",
          top: "17px",
          right: "10px",
          zIndex: " 50000",
          outline: "none",
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        <Icon
          url={deleteIcon}
          styles={{
            borderRadius: "9px",
            width: "26px",
          }}
        />
      </Button>
    </div>
  );
};

export default CombateCard;
