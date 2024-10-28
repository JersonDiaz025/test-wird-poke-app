import "./index.css";
import { useInfoDetails } from "../../hooks";
import imageBack from "../../assets/back.svg";
import { useParams } from "react-router-dom";
import { Texts, Colors, AppRoutes } from "../../constants";
import {
  addToBattleTeam,
  AppDispatch,
  removeFromBattleTeam,
  RootState,
} from "../../store";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  CustomLink,
  Loader,
  PokemonDetail,
  Thumbnail,
  Title,
} from "../../components";
import { Pokemon } from "../../interfaces/IPokemon";
import { veryfyExistsInBattleTeams } from "../../utils/veifyExistsItemsBattleTeam";

const PokemonDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  // Get data from selector
  const { infoDetails, battleTeam, allPokemon, isLoading } = useSelector(
    (state: RootState) => state.pokemon
  );
  useInfoDetails({ id, allPokemon, dispatch });
  // Check if any Pokemon in the battle team has the same ID
  const isVerified = veryfyExistsInBattleTeams({ id: Number(id), battleTeam });

  const handleClick = () => {
    // Verify if infoDetails is not array
    if (dispatch) {
      if (!Array.isArray(infoDetails)) {
        if (!isVerified) {
          const data: Pokemon = {
            id: infoDetails.id,
            url: "",
            image: infoDetails.image,
            name: infoDetails.name,
            order: infoDetails.order,
          };
          dispatch(addToBattleTeam(data));
        } else {
          // Remove item by id
          dispatch(removeFromBattleTeam(Number(id)));
        }
      }
    }
  };

  return (
    <div className="detail-gneral-content">
      <div className="container-back">
        <CustomLink
          to={AppRoutes.POKE_LIST}
          styles={{
            color: "blue",
            textDecoration: "none",
            display: "flex",
            gap: "8px",
          }}
        >
          <Thumbnail
            url={imageBack}
            styles={{
              width: "25px",
              height: "25px",
            }}
          />
          <Title
            text={Texts.BACK_TEXT}
            styles={{
              textTransform: "capitalize",
              fontSize: "14px",
              textDecoration: "none",
              fontStyle: "none",
              display: "flex",
              alignItems: "center",
              color: Colors.TEXT_COLOR1,
              fontWeight: 600,
            }}
          />
        </CustomLink>
        <Button
          onClick={handleClick}
          text={!isVerified ? Texts.ADD_COMBAT_LIST : Texts.DELETE_TEXT}
          styles={{
            backgroundColor: Colors.WHITE,
            color: !isVerified ? Colors.TEXT_COLOR1 : Colors.RED,
            fontWeight: "600",
            padding: "10px",
            borderRadius: "7px",
            cursor: "pointer",
          }}
        />
      </div>
      <Title
        text={`${Texts.DETAILS_VIEW} ${infoDetails.name}`}
        styles={{
          fontSize: "24px",
          textAlign: "center",
          color: Colors.TEXT_COLOR1,
          fontWeight: 800,
        }}
      />
      {infoDetails && !isLoading ? (
        <PokemonDetail infoDetails={infoDetails} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PokemonDetailPage;
