import "./index.css";
import { StrictMode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { createRoot } from "react-dom/client";
import AppRouter from "./router/AppRouter.tsx";
import store from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <AppRouter />
    </ReduxProvider>
  </StrictMode>
);
