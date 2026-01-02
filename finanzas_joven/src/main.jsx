/**
 * PUNTO DE ENTRADA PRINCIPAL (ENTRY POINT)
 * ----------------------------------------
 * Este archivo inicializa la aplicación React.
 * Monta el componente raíz <App /> dentro del elemento DOM con id 'root'.
 * Importa los estilos globales.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
