import "./index.css";
import moreIcon from "../../assets/plus.svg";
import { Button, CustomLink, Icon, Thumbnail, Title } from "../index";
import { Colors, AppRoutes } from "../../constants";
import { Pokemon } from "../../interfaces/IPokemon";
import { addToBattleTeam } from "../../store";

const Card = ({ name, id, image, dispatch }: Pokemon) => {
  return (
    <div className="card-container">
      <CustomLink
        styles={{ textDecoration: "none" }}
        to={`${AppRoutes.POKE_DETAIL.replace(":id", id.toString())}`}
      >
        <Thumbnail
          url={image}
          styles={{
            width: "150px",
            height: "200px",
            borderBottom: "1px solid #212529",
          }}
        />
        <Title
          text={name}
          styles={{
            textTransform: "capitalize",
            fontSize: "18px",
            textDecoration: "none",
            fontStyle: "none",
            textAlign: "center",
            color: Colors.TEXT_COLOR1,
            fontWeight: 500,
          }}
        />
      </CustomLink>
      <Button
        onClick={() => {
          if (dispatch) {
            const data: Pokemon = { id, name, image, order: 0, url: "" };
            dispatch(addToBattleTeam(data));
          }
        }}
        styles={{
          position: "absolute",
          top: "0",
          right: "0",
          zIndex: " 50000",
          outline: "none",
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        <Icon
          url={moreIcon}
          styles={{
            borderRadius: "9px",
            width: "42px",
            height: "40px",
          }}
        />
      </Button>
      <span className="order"># {id}</span>
    </div>
  );
};

export default Card;
