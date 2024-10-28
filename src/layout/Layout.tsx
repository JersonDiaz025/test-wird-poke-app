import "./index.css";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { CombatReadyList, Loader } from "../components";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";

const Layout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { battleTeam } = useSelector(
    (state: RootState) => state.pokemon
  );

  return (
    <section className="layout">
      <div className="body">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <div className="rightSide">
        <CombatReadyList
          battleTeam={battleTeam}
          dispatch={dispatch}
        />
      </div>
    </section>
  );
};

export default Layout;
