// src/components/Hero.jsx
import React from "react";
import portada from "../assets/portada.png";

function Hero() {
  return (
    <section className="p-8 flex flex-col md:flex-row items-center gap-6 bg-purple-100">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2">
          Aprende a ganar dinero por internet
          <span className="block text-lg font-semibold text-gray-700">sin invertir y paso a paso</span>
        </h2>
        <p className="text-gray-600 mb-4">Guía creada por una madre emprendedora que utiliza herramientas gratuitas e inteligencia artificial para generar ingresos desde casa.</p>
        <div className="flex gap-2 flex-wrap">
          <a className="bg-purple-700 text-white px-4 py-2 rounded" href="https://go.hotmart.com/C99765159A" target="_blank" rel="noopener noreferrer">Consigue tu Guía</a>
          <a className="bg-gray-200 text-gray-700 px-4 py-2 rounded" href="#apps">Ver herramientas gratuitas</a>
        </div>
      </div>
      <div className="flex-1">
        <img src={portada} alt="Portada: Guía para ganar dinero desde casa" className="rounded border border-gray-300" />
        <figcaption className="text-sm text-gray-500 mt-1">Ejemplos prácticos y pasos accionables.</figcaption>
      </div>
    </section>
  );
}

export default Hero;
