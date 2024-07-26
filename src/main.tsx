import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { ColumnsProvider } from "./context/columsContext";
import { PokemonProvider } from "./context/pokemonContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonProvider>
        <ColumnsProvider>
          <App />
        </ColumnsProvider>
      </PokemonProvider>
    </BrowserRouter>
  </React.StrictMode>
);
