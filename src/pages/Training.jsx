import React from 'react';

const Training = () => {
  const hotmartLink = "https://go.hotmart.com/C99765159A";

  return (
    <div className="container">
      <header className="section-head" style={{ textAlign: 'center', marginBottom: '2rem', flexDirection: 'column', alignItems: 'center' }}>
        <span className="badge badge--buy" style={{ marginBottom: '1rem', backgroundColor: 'var(--brand-100)', color: 'var(--brand-800)' }}>
          ¡Felicidades por dar el primer paso!
        </span>
        <h1 style={{ fontSize: '2.5rem', lineHeight: 1.2 }}>Bienvenido al Entrenamiento Exclusivo</h1>
        <p className="sub" style={{ maxWidth: '700px', margin: '0 auto' }}>
          Estás a punto de descubrir el sistema que te permitirá generar ingresos desde casa. Presta mucha atención al siguiente video.
        </p>
      </header>

      <section className="card" style={{ padding: '0', overflow: 'hidden', marginBottom: '2rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)' }}>
        <div className="video-container">
           <iframe 
              width="100%" 
              height="500"
              src="https://www.youtube.com/embed/tvRV7TCmZSo?autoplay=1" 
              title="Entrenamiento Exclusivo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              style={{ display: 'block' }}
            ></iframe>
        </div>
      </section>

      <section style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h2 style={{ marginBottom: '1rem' }}>¿Listo para tener el sistema completo?</h2>
        <p className="lead muted" style={{ maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
          La guía "Acceso Premium" es el atajo definitivo. Contiene las plantillas, los scripts y el paso a paso exacto para que copies y pegues mi estrategia y obtengas resultados en tiempo récord.
        </p>
        <a 
          href={hotmartLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn--primary" 
          style={{ fontSize: '1.2rem', padding: '1rem 2rem', borderRadius: '8px', animation: 'pulse 2s infinite' }}
        >
          🔥 Sí, ¡Quiero el Acceso Premium Ahora!
        </a>
        <p className="muted" style={{ fontSize: '0.8rem', marginTop: '1rem' }}>Oferta por tiempo limitado. Acceso inmediato.</p>
      </section>
    </div>
  );
};

export default Training;