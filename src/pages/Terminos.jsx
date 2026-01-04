/**
 * PÁGINA DE TÉRMINOS Y CONDICIONES
 * --------------------------------
 * Contenido legal estático.
 */
import React from "react";

const Terminos = () => {
  return (
    <div className="container" style={{ maxWidth: '800px' }}>
      <div className="card">
        <header className="section-head" style={{ marginBottom: '1.5rem' }}>
          <h1>Términos y Condiciones de Uso</h1>
          <p className="sub">Por favor lee detenidamente antes de usar el sitio.</p>
        </header>

        <div className="post-content">
          <h3 className="mt-4">1. Aceptación</h3>
          <p>Al acceder a Finanzas Jóvenes, aceptas estos términos. El contenido es solo para fines informativos y no constituye asesoramiento financiero profesional.</p>

          <h3 className="mt-4">2. Propiedad Intelectual</h3>
          <p>Todo el contenido (textos, logos, guías) pertenece a Finanzas Jóvenes. No está permitida su reproducción sin autorización.</p>

          <h3 className="mt-4">3. Enlaces de Afiliados</h3>
          <p>Este sitio puede contener enlaces de afiliados. Esto significa que podríamos recibir una comisión si realizas una compra, sin costo adicional para ti.</p>

          <h3 className="mt-4">4. Responsabilidad</h3>
          <p>No nos hacemos responsables por decisiones financieras tomadas en base a la información de este sitio. Siempre consulta con un asesor certificado.</p>
        </div>
      </div>
    </div>
  );
};

export default Terminos;