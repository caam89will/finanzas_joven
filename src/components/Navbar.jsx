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
    <aside className="bg-slate-900 text-white w-64 p-6 min-h-screen flex flex-col shadow-xl z-10">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-xl">
          F
        </div>
        <span className="font-bold text-lg tracking-wide">Finanzas Joven</span>
      </div>
      <nav className="flex flex-col gap-2 flex-1">
        <a href="#home" className="px-4 py-3 rounded-lg bg-slate-800 text-white font-medium border-l-4 border-indigo-500">📊 Dashboard</a>
        <a href="#blog" className="px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all">📰 Blog & Noticias</a>
        <a href="#ahorro" className="px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all">💰 Estrategias Ahorro</a>
        <a href="#apps" className="px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all">📱 Herramientas</a>
        <a href="#contacto" className="px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all">✉️ Soporte</a>
      </nav>
      <div className="mt-auto p-4 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl shadow-lg">
        <h4 className="font-bold mb-1 text-sm">🔥 Oferta Flash</h4>
        <p className="text-xs mb-3 text-indigo-100">Acceso total al curso de inversión por tiempo limitado.</p>
        <a className="bg-white text-indigo-700 text-xs font-bold px-3 py-2 rounded block text-center hover:bg-gray-100 transition-colors" href="https://go.hotmart.com/C99765159A" target="_blank" rel="noopener noreferrer">
          Ver Oferta
        </a>
      </div>
    </aside>
  );
}

export default Navbar;
