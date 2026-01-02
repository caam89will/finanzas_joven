/**
 * COMPONENTE: HERO (SECCIÓN PRINCIPAL)
 * ------------------------------------
 * Es la primera sección que ve el usuario en el Dashboard.
 * Contiene el mensaje de bienvenida principal, una imagen destacada y botones de acción rápida.
 */
// src/components/Hero.jsx
import React from "react";
import portada from "../assets/portada.png";

function Hero() {
  return (
    <section className="dashboard-hero">
      <div className="flex-1">
        {/* SEO: Palabras clave de alta intención de compra */}
        <h2>
          Maximiza tu Rentabilidad:
          <span className="block text-xl font-medium text-indigo-200 mt-2">Estrategias de Inversión y Activos Digitales</span>
        </h2>
        
        <p className="text-gray-300 mb-6 text-lg max-w-2xl">
          Accede a herramientas premium y cursos validados para construir tu portafolio de ingresos pasivos. Deja de ahorrar y empieza a invertir hoy mismo.
        </p>
        
        <div className="flex gap-4 flex-wrap">
          <a className="cta-button shadow-lg shadow-indigo-500/30" href="https://go.hotmart.com/C99765159A" target="_blank" rel="noopener noreferrer">
            🚀 Obtener Guía Premium
          </a>
          <a className="px-6 py-3 rounded-lg border border-gray-500 text-white hover:bg-white/10 transition-colors font-medium" href="#apps">
            Explorar Herramientas
          </a>
        </div>
      </div>
      <div className="flex-1">
        <img src={portada} alt="Guía de Inversión y Finanzas Personales" className="rounded-xl shadow-2xl border border-gray-700 transform hover:scale-105 transition-transform duration-300" />
      </div>
    </section>
  );
}

export default Hero;
