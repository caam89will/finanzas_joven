/**
 * PÁGINA DE POLÍTICA DE PRIVACIDAD
 * --------------------------------
 * Contenido legal estático.
 */
import React from "react";

const Politica = () => {
  return (
    <div className="container" style={{ maxWidth: '800px' }}>
      <div className="card">
        <header className="section-head" style={{ marginBottom: '1.5rem' }}>
          <h1>Política de Privacidad</h1>
          <p className="sub">Última actualización: Mayo 2025</p>
        </header>

        <div className="post-content">
          <p>En Finanzas Jóvenes, la privacidad de nuestros usuarios es de suma importancia. Esta política describe qué información recogemos y cómo la protegemos.</p>

          <h3 className="mt-4">1. Información que Recopilamos</h3>
          <ul style={{ paddingLeft: '1.2rem', marginBottom: '1rem' }}>
            <li><strong>Nombre:</strong> Utilizado para personalizar la comunicación.</li>
            <li><strong>Correo Electrónico:</strong> Usado para responder consultas y enviar actualizaciones.</li>
            <li><strong>Datos de navegación:</strong> Para fines analíticos y de seguridad.</li>
          </ul>

          <h3 className="mt-4">2. Uso de la Información</h3>
          <p>Utilizamos los datos para responder consultas, mejorar la experiencia del usuario y enviar boletines informativos (solo si te has suscrito).</p>

          <h3 className="mt-4">3. Cookies</h3>
          <p>Usamos cookies para mejorar la navegación. Puedes configurar tu navegador para rechazarlas, aunque esto podría afectar algunas funciones del sitio.</p>

          <h3 className="mt-4">4. Terceros</h3>
          <p>No compartimos ni vendemos tu información personal a terceros, salvo requerimiento legal.</p>
        </div>
      </div>
    </div>
  );
};

export default Politica;