/**
 * COMPONENTE: RECURSOS
 * --------------------
 * Muestra una cuadrícula de recursos descargables o enlaces de interés.
 * Útil para ofrecer lead magnets o material complementario.
 */
// src/components/Resources.jsx
import React from "react";
import { resources } from "../data/resources"; // <- Datos dinámicos

const Resources = () => {
  return (
    <section aria-labelledby="recursos">
      <div className="section-head">
        <h2 id="recursos">Guías y recursos</h2>
        <div className="sub">Recursos seleccionados para comenzar hoy</div>
      </div>

      <div className="grid cols-3">
        {resources.map((item) => (
          <article key={item.id} className="content-card card" aria-labelledby={`r${item.id}`}>
            <div className="card-head"><h3 id={`r${item.id}`} className="card-title">{item.title}</h3></div>
            <p className="muted">{item.description}</p>
            <div style={{ marginTop: ".75rem", display: "flex", gap: ".5rem" }}>
              {item.readLink && <a className="btn btn--ghost" href={item.readLink}>Leer</a>}
              {item.downloadLink && <a className="btn btn--primary" href={item.downloadLink} target="_blank" rel="noopener noreferrer">Descargar guía</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Resources;
