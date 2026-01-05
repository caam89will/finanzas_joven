/**
 * PÁGINA DE HERRAMIENTAS DIGITALES (ANTES APPS)
 * ---------------------------------------------
 * Enfocada en herramientas para crear negocios digitales (IA, No-Code, Diseño).
 */
import React from "react";

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

      <div className="grid cols-2" style={{ gap: '2rem' }}>
        {/* App 1 */}
        <div className="card">
          <div className="card-head">
            <h3 className="card-title">ChatGPT / Claude</h3>
            <span className="badge badge--neutral">IA para Copywriting</span>
          </div>
          <p className="muted" style={{ marginBottom: '1rem' }}>Tu asistente personal gratuito. Úsalo para redactar correos de venta, guiones de video, ideas de contenido y planes de negocio completos.</p>
          <a href="https://chat.openai.com" target="_blank" rel="noreferrer" className="btn btn--secondary" style={{ width: '100%', justifyContent: 'center' }}>Probar Gratis</a>
        </div>

        {/* App 2 */}
        <div className="card">
          <div className="card-head">
            <h3 className="card-title">Canva</h3>
            <span className="badge badge--neutral">Diseño Gráfico</span>
          </div>
          <p className="muted" style={{ marginBottom: '1rem' }}>Diseña logos, posts para redes sociales, presentaciones y ebooks sin ser diseñador. Su versión gratuita es extremadamente potente.</p>
          <a href="https://www.canva.com" target="_blank" rel="noreferrer" className="btn btn--secondary" style={{ width: '100%', justifyContent: 'center' }}>Probar Gratis</a>
        </div>

        {/* App 3 */}
        <div className="card">
          <div className="card-head">
            <h3 className="card-title">Notion</h3>
            <span className="badge badge--neutral">Organización</span>
          </div>
          <p className="muted" style={{ marginBottom: '1rem' }}>El cerebro de tu negocio. Gestiona tareas, bases de datos de clientes, calendarios de contenido y documentación en un solo lugar.</p>
          <a href="https://www.notion.so" target="_blank" rel="noreferrer" className="btn btn--secondary" style={{ width: '100%', justifyContent: 'center' }}>Probar Gratis</a>
        </div>

        {/* App 4 */}
        <div className="card">
          <div className="card-head">
            <h3 className="card-title">CapCut</h3>
            <span className="badge badge--neutral">Edición de Video</span>
          </div>
          <p className="muted" style={{ marginBottom: '1rem' }}>La mejor app para editar videos verticales (Reels/TikTok). Añade subtítulos automáticos y efectos virales desde tu móvil.</p>
          <a href="https://www.capcut.com" target="_blank" rel="noreferrer" className="btn btn--secondary" style={{ width: '100%', justifyContent: 'center' }}>Probar Gratis</a>
        </div>
      </div>
    </div>
  );
};

export default Apps;
