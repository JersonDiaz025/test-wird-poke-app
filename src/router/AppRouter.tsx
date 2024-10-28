import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "../layout/Layout";
import { AppRoutes } from "../constants/routes";
import { PokemonListPage, PokemonDetailPage } from "../pages";

export default function AppRouter() {
  return (
    <main className="main">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={AppRoutes.POKE_LIST} element={<PokemonListPage />} />
            <Route
              path={AppRoutes.POKE_DETAIL}
              element={<PokemonDetailPage />}
            />
          </Route>
          <Route
            path={AppRoutes.UNKNOWN}
            element={<Navigate to={AppRoutes.POKE_LIST} />}
          />
        </Routes>
      </Router>
    </main>
  );
}
