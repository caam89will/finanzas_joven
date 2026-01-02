/**
 * COMPONENTE: NAVBAR (BARRA DE NAVEGACIÓN LATERAL)
 * ------------------------------------------------
 * Menú lateral fijo que permite la navegación entre las diferentes secciones del Dashboard.
 * También incluye un widget promocional para la guía principal.
 */
// src/components/Navbar.jsx
import React from "react";

function Navbar() {
  return (
    <aside className="bg-purple-700 text-white w-64 p-4 min-h-screen">
      <div className="flex items-center gap-2 mb-6">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#4b74ff"></rect>
        </svg>
        <span className="font-bold text-xl">Finanzas Jóvenes</span>
      </div>
      <nav className="flex flex-col gap-3">
        <a href="#home" className="hover:text-gray-200">Inicio</a>
        <a href="#blog" className="hover:text-gray-200">Blog</a>
        <a href="#ahorro" className="hover:text-gray-200">Ahorro</a>
        <a href="#apps" className="hover:text-gray-200">Apps</a>
        <a href="#contacto" className="hover:text-gray-200">Contacto</a>
      </nav>
      <div className="mt-6 p-4 bg-purple-800 rounded">
        <h4 className="font-semibold mb-1">Guía recomendada</h4>
        <p className="text-sm mb-2">Descarga mi guía paso a paso para comenzar hoy mismo.</p>
        <a className="bg-yellow-400 text-purple-700 px-3 py-2 rounded block text-center" href="https://go.hotmart.com/C99765159A" target="_blank" rel="noopener noreferrer">
          Descargar guía
        </a>
      </div>
    </aside>
  );
}

export default Navbar;
