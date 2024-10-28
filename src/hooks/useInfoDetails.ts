import { Action } from "redux";
import { useEffect } from "react";
import { Pokemon } from "../interfaces";
import { setDetailsInfo, setLoading } from "../store";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../constants";

interface DetailsProps {
  id: string | undefined;
  allPokemon: Pokemon[];
  dispatch: (action: Action) => void;
}
const useInfoDetails = ({ id, dispatch, allPokemon }: DetailsProps) => {
  const navigate = useNavigate();
  const renderInfoDetails = () => {
    if (allPokemon && id) {
      return allPokemon.find((item: Pokemon) => item?.id === Number(id));
    }
  };

  useEffect(() => {
    dispatch(setLoading()); // Set loading indicator when selected item to view details
    const foundItem = renderInfoDetails();
    if (foundItem) {
      dispatch(setDetailsInfo(foundItem));
    } else {
      navigate(AppRoutes.POKE_LIST);
    }
  }, [id]);
};

export default useInfoDetails;
