/**
 * COMPONENTE: CALL TO ACTION (LLAMADA A LA ACCIÓN)
 * ------------------------------------------------
 * Un bloque destacado diseñado para dirigir al usuario a realizar una acción específica,
 * como descargar una guía o suscribirse, utilizando botones de alto contraste.
 */
// src/components/CTA.jsx
import React from "react";

function CTA() {
  return (
    <section className="card p-4 bg-purple-50 rounded shadow mt-4 flex flex-wrap justify-between items-center gap-4">
      <div>
        <h3 className="text-xl font-bold">¿Listo para empezar?</h3>
        <p className="text-gray-600">Descarga la guía y únete a la newsletter para recibir estrategias prácticas cada semana.</p>
      </div>
      <div className="flex gap-2">
        <a href="https://go.hotmart.com/C99765159A" target="_blank" rel="noopener noreferrer" className="btn btn-primary py-2 px-4 bg-purple-700 text-white rounded">Descargar guía</a>
        <a href="#newsletter" className="btn btn-secondary py-2 px-4 border rounded">Suscribirme</a>
      </div>
    </section>
  );
}

export default CTA;
