/**
 * PUNTO DE ENTRADA PRINCIPAL (ENTRY POINT)
 * ----------------------------------------
 * Este archivo inicializa la aplicación React.
 * Monta el componente raíz <App /> dentro del elemento DOM con id 'root'.
 * Importa los estilos globales.
 */
/**
 * PUNTO DE ENTRADA (ENTRY POINT)
 * ------------------------------
 * Este archivo inicializa React y configura el enrutador principal.
 * Envuelve la App en <BrowserRouter> para permitir la navegación entre páginas.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Importamos el enrutador
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
