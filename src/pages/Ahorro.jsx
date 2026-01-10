/**
 * PÁGINA DE INVERSIONES (ANTES AHORRO)
 * ------------------------------------
 * Enfocada en educación financiera avanzada: Bolsa, ETFs y Estrategias.
 */
import React from "react";

const Ahorro = () => {
  return (
    <div className="container">
      <header className="section-head" style={{ textAlign: 'center', marginBottom: '2rem', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Guía: Cómo Invertir en Bolsa para Principiantes</h1>
        <p className="sub" style={{ maxWidth: '600px', margin: '0 auto' }}>Aprende paso a paso a <strong>comprar acciones y ETFs</strong> para generar rentabilidad real con poco dinero.</p>
      </header>
      
      {/* Video Section */}
      <section className="card" style={{ padding: '0', overflow: 'hidden', marginBottom: '2rem' }}>
        <div className="video-container">
           <iframe 
              width="100%" 
              height="450" 
              src="https://www.youtube.com/embed/tvRV7TCmZSo?autoplay=1"
              title="Cómo empezar a invertir" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{ display: 'block' }}
            ></iframe>
        </div>
        <div style={{ padding: '1.5rem' }}>
          <h3>¿Por qué empezar a invertir en la bolsa hoy?</h3>
          <p className="muted">La inflación devora tus ahorros si los dejas bajo el colchón. La inversión es el vehículo probado para proteger tu patrimonio y generar riqueza a largo plazo mediante el interés compuesto.</p>
        </div>
      </section>

      {/* Concepts Grid */}
      <div className="grid cols-3" style={{ marginBottom: '2rem' }}>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📈</div>
          <h4>Mejores ETFs para Invertir</h4>
          <p className="muted" style={{ fontSize: '0.9rem' }}>La forma más segura de empezar. Compra una "cesta" de las mejores empresas del mundo (S&P 500) con una sola transacción.</p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏢</div>
          <h4>Comprar Acciones Reales</h4>
          <p className="muted" style={{ fontSize: '0.9rem' }}>Conviértete en socio de empresas como Apple o Tesla. Mayor potencial de ganancia para tu portafolio de inversión.</p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⏳</div>
          <h4>Interés Compuesto</h4>
          <p className="muted" style={{ fontSize: '0.9rem' }}>La octava maravilla del mundo. Tus ganancias generan más ganancias, creando un efecto bola de nieve exponencial.</p>
        </div>
      </div>

      {/* Steps Section */}
      <section className="card">
        <div className="card-head">
          <h3>Hoja de Ruta: Cómo empezar a invertir desde cero</h3>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
          <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '0.5rem', borderBottom: '1px solid var(--border)' }}>
            <span className="badge badge--neutral">Paso 1</span>
            <span>Define tu perfil de riesgo y objetivos financieros (¿Jubilación? ¿Casa?).</span>
          </li>
          <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '0.5rem', borderBottom: '1px solid var(--border)' }}>
            <span className="badge badge--neutral">Paso 2</span>
            <span>Abre cuenta en un <strong>broker regulado</strong> (Interactive Brokers, eToro, Hapi).</span>
          </li>
          <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '0.5rem', borderBottom: '1px solid var(--border)' }}>
            <span className="badge badge--neutral">Paso 3</span>
            <span>Comienza con un ETF global o del S&P 500 para diversificar automáticamente.</span>
          </li>
          <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '0.5rem' }}>
            <span className="badge badge--neutral">Paso 4</span>
            <span>Aporta dinero mensualmente sin importar si el mercado sube o baja (Estrategia DCA).</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Ahorro;
