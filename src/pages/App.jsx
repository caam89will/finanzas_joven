/**
 * PÁGINA DE HERRAMIENTAS DIGITALES (ANTES APPS)
 * ---------------------------------------------
 * Enfocada en herramientas para crear negocios digitales (IA, No-Code, Diseño).
 */
import React from "react";
import IntegrationHero from "../components/ui/IntegrationHero";

const Apps = () => {
  return (
    <div className="container">
      <header className="section-head" style={{ textAlign: 'center', marginBottom: '2rem', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Herramientas para Crear Negocios Digitales Rentables</h1>
        <p className="sub" style={{ maxWidth: '600px', margin: '0 auto' }}>Software esencial para automatizar tu emprendimiento y <strong>ganar dinero con Inteligencia Artificial</strong>.</p>
      </header>

      {/* Video Section */}
      <section className="card" style={{ padding: '0', overflow: 'hidden', marginBottom: '2rem' }}>
        <div className="video-container">
           <iframe 
              width="100%" 
              height="450" 
              src="https://www.youtube.com/embed/bWkM71fM5_I" 
              title="Herramientas de IA para negocios" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{ display: 'block' }}
            ></iframe>
        </div>
        <div style={{ padding: '1.5rem' }}>
          <h3>Cómo usar Inteligencia Artificial para Vender Más</h3>
          <p className="muted">Ya no necesitas un equipo de 10 personas. Con las herramientas adecuadas, puedes crear contenido, diseñar y vender tú solo desde tu habitación.</p>
        </div>
      </section>

      {/* Nueva sección con 40 herramientas animadas */}
      <IntegrationHero />
    </div>
  );
};

export default Apps;
